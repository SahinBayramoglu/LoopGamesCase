using System;
using System.Collections;
using ScratchCardAsset.Core;
using ScratchCardAsset.Tools;
using Unity.Collections;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Serialization;

namespace ScratchCardAsset
{
	public class EraseProgress : MonoBehaviour
	{
		[SerializeField]
		[FormerlySerializedAs("Card")]
		private ScratchCard card;

		[SerializeField]
		[FormerlySerializedAs("ProgressMaterial")]
		private Material progressMaterial;

		[SerializeField]
		[FormerlySerializedAs("SampleSourceTexture")]
		private bool sampleSourceTexture;

		[SerializeField]
		private ProgressAccuracy progressAccuracy;

		private ScratchMode scratchMode;

		private NativeArray<byte> pixelsBuffer;

		private int asyncGPUReadbackFrame;

		private int updateProgressFrame;

		private Color[] sourceSpritePixels;

		private CommandBuffer commandBuffer;

		private Mesh mesh;

		private RenderTexture percentRenderTexture;

		private RenderTargetIdentifier percentTargetIdentifier;

		private Rect percentTextureRect;

		private Texture2D progressTexture;

		private float progress;

		private int bitsPerPixel = 1;

		private bool updateProgress;

		private bool isCalculating;

		private bool isCompleted;

		public ScratchCard Card
		{
			get
			{
				return card;
			}
			set
			{
				card = value;
			}
		}

		public Material ProgressMaterial
		{
			get
			{
				return progressMaterial;
			}
			set
			{
				progressMaterial = value;
			}
		}

		public bool SampleSourceTexture
		{
			get
			{
				return sampleSourceTexture;
			}
			set
			{
				sampleSourceTexture = value;
			}
		}

		public ProgressAccuracy ProgressAccuracy
		{
			get
			{
				return progressAccuracy;
			}
			set
			{
				progressAccuracy = value;
				UpdateAccuracy();
				if (progressAccuracy == ProgressAccuracy.Default)
				{
					updateProgress = false;
					if (pixelsBuffer.IsCreated && !isCalculating)
					{
					}
				}
			}
		}

		public event Action<float> OnProgress;

		public event Action<float> OnCompleted;

		private void Start()
		{
			Init();
		}

		private void OnDestroy()
		{
			if (progressAccuracy != ProgressAccuracy.High || isCalculating)
			{
			}
			if (percentRenderTexture != null && percentRenderTexture.IsCreated())
			{
				percentRenderTexture.Release();
				UnityEngine.Object.Destroy(percentRenderTexture);
				percentRenderTexture = null;
			}
			if (progressTexture != null)
			{
				UnityEngine.Object.Destroy(progressTexture);
				progressTexture = null;
			}
			if (mesh != null)
			{
				UnityEngine.Object.Destroy(mesh);
				mesh = null;
			}
			if (commandBuffer != null)
			{
				commandBuffer.Release();
				commandBuffer = null;
			}
			if (card != null)
			{
				card.OnRenderTextureInitialized -= OnCardRenderTextureInitialized;
			}
		}

		private void LateUpdate()
		{
			if (card.Mode != scratchMode)
			{
				scratchMode = card.Mode;
				ResetProgress();
			}
			if ((card.IsScratched || updateProgress) && !isCompleted)
			{
				UpdateProgress();
			}
		}

		private void Init()
		{
			if (card == null)
			{
				Debug.LogError("Card field is not assigned!");
				base.enabled = false;
				return;
			}
			if (card.Initialized)
			{
				OnCardRenderTextureInitialized(card.RenderTexture);
			}
			card.OnRenderTextureInitialized += OnCardRenderTextureInitialized;
			UpdateAccuracy();
			scratchMode = card.Mode;
			commandBuffer = new CommandBuffer
			{
				name = "EraseProgress"
			};
			mesh = MeshGenerator.GenerateQuad(Vector3.one, Vector3.zero);
			RenderTextureFormat renderTextureFormat = (SystemInfo.SupportsRenderTextureFormat(RenderTextureFormat.R8) ? RenderTextureFormat.R8 : RenderTextureFormat.ARGB32);
			percentRenderTexture = new RenderTexture(1, 1, 0, renderTextureFormat);
			percentTargetIdentifier = new RenderTargetIdentifier(percentRenderTexture);
			percentTextureRect = new Rect(0f, 0f, percentRenderTexture.width, percentRenderTexture.height);
			progressTexture = new Texture2D(percentRenderTexture.width, percentRenderTexture.height, TextureFormat.ARGB32, false, true);
		}

		private void OnCardRenderTextureInitialized(RenderTexture renderTexture)
		{
			bitsPerPixel = ((renderTexture.format == RenderTextureFormat.R8) ? 1 : 4);
		}

		private void UpdateAccuracy()
		{
			if (progressAccuracy == ProgressAccuracy.High && !SystemInfo.supportsAsyncGPUReadback)
			{
				Debug.LogWarning("AsyncGPUReadback is not supported! Switching to ProgressAccuracy.Default.");
				progressAccuracy = ProgressAccuracy.Default;
			}
		}

		private IEnumerator CalcProgress()
		{
			if (!isCompleted && !isCalculating)
			{
				isCalculating = true;
				if (progressAccuracy == ProgressAccuracy.High)
				{
					if (!pixelsBuffer.IsCreated)
					{
						int length = card.RenderTexture.width * card.RenderTexture.height * bitsPerPixel;
						pixelsBuffer = new NativeArray<byte>(length, Allocator.Persistent, NativeArrayOptions.UninitializedMemory);
					}
					asyncGPUReadbackFrame = Time.frameCount;
					yield return null;
					progress = 0f;
					if (sampleSourceTexture)
					{
						float totalAlpha = 0f;
						float div = (float)pixelsBuffer.Length / (float)bitsPerPixel;
						totalAlpha /= div;
						progress /= div;
						progress /= totalAlpha;
					}
					else
					{
						progress /= (float)pixelsBuffer.Length / (float)bitsPerPixel;
					}
					if (asyncGPUReadbackFrame > updateProgressFrame)
					{
						updateProgress = false;
					}
				}
				else if (progressAccuracy == ProgressAccuracy.Default)
				{
					RenderTexture prevRenderTexture = RenderTexture.active;
					RenderTexture.active = percentRenderTexture;
					progressTexture.ReadPixels(percentTextureRect, 0, 0);
					progressTexture.Apply();
					RenderTexture.active = prevRenderTexture;
					progress = progressTexture.GetPixel(0, 0).r;
				}
				this.OnProgress?.Invoke(progress);
				if (this.OnCompleted != null)
				{
					float completeValue = ((card.Mode == ScratchMode.Erase) ? 1f : 0f);
					if (Mathf.Abs(progress - completeValue) < float.Epsilon)
					{
						this.OnCompleted?.Invoke(progress);
						isCompleted = true;
					}
				}
				isCalculating = false;
			}
			else if (progressAccuracy == ProgressAccuracy.High && isCalculating && card.IsScratched)
			{
				updateProgress = true;
				updateProgressFrame = Time.frameCount;
			}
		}

		public float GetProgress()
		{
			return progress;
		}

		public void UpdateProgress()
		{
			if (commandBuffer == null)
			{
				Debug.LogError("Can't update progress cause commandBuffer is null!");
				return;
			}
			GL.LoadOrtho();
			commandBuffer.Clear();
			commandBuffer.SetRenderTarget(percentTargetIdentifier);
			commandBuffer.ClearRenderTarget(false, true, Color.clear);
			int pass = (sampleSourceTexture ? 1 : 0);
			commandBuffer.DrawMesh(mesh, Matrix4x4.identity, progressMaterial, 0, pass);
			Graphics.ExecuteCommandBuffer(commandBuffer);
			if (base.gameObject.activeInHierarchy)
			{
				StartCoroutine(CalcProgress());
			}
		}

		public void ResetProgress()
		{
			isCompleted = false;
		}

		public void SetSpritePixels(Color[] pixels)
		{
			sourceSpritePixels = pixels;
		}
	}
}
