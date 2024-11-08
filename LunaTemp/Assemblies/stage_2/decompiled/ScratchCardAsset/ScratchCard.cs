using System;
using ScratchCardAsset.Core;
using ScratchCardAsset.Core.InputData;
using ScratchCardAsset.Core.ScratchData;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Serialization;

namespace ScratchCardAsset
{
	public class ScratchCard : MonoBehaviour
	{
		[FormerlySerializedAs("Surface")]
		public Transform SurfaceTransform;

		[FormerlySerializedAs("ScratchSurface")]
		public Material SurfaceMaterial;

		[FormerlySerializedAs("Eraser")]
		public Material BrushMaterial;

		[Min(0.001f)]
		public float BrushSize = 1f;

		public Quality RenderTextureQuality = Quality.High;

		[SerializeField]
		private ScratchMode mode = ScratchMode.Erase;

		private ScratchCardRenderer cardRenderer;

		private bool initialized;

		public RenderTexture RenderTexture { get; private set; }

		public RenderTargetIdentifier RenderTarget { get; private set; }

		public ScratchMode Mode
		{
			get
			{
				return mode;
			}
			set
			{
				mode = value;
				if (BrushMaterial != null)
				{
					int blendOp = ((mode != 0) ? 2 : 0);
					BrushMaterial.SetInt("_BlendOpValue", blendOp);
				}
			}
		}

		public bool IsScratched
		{
			get
			{
				if (cardRenderer != null)
				{
					return cardRenderer.IsScratched;
				}
				return false;
			}
			private set
			{
				cardRenderer.IsScratched = value;
			}
		}

		public bool IsScratching => Input.IsScratching;

		public bool Initialized => initialized;

		public BaseData ScratchData { get; private set; }

		public ScratchCardInput Input { get; private set; }

		public event Action<ScratchCard> OnInitialized;

		public event Action<RenderTexture> OnRenderTextureInitialized;

		public event Action<Vector2, float> OnScratchHole;

		public event Action<Vector2, float> OnScratchHoleSucceed;

		public event Action<Vector2, float, Vector2, float> OnScratchLine;

		public event Action<Vector2, float, Vector2, float> OnScratchLineSucceed;

		private void Start()
		{
			if (!initialized)
			{
				Init();
			}
		}

		private void OnDisable()
		{
			if (initialized)
			{
				Input.ResetData();
			}
		}

		private void OnDestroy()
		{
			UnsubscribeFromEvents();
			ReleaseRenderTexture();
			cardRenderer?.Release();
		}

		private void Update()
		{
			if (!Input.TryUpdate())
			{
				cardRenderer.IsScratched = false;
			}
		}

		public void Init()
		{
			if (ScratchData == null)
			{
				Debug.LogError("ScratchData is null!");
				base.enabled = false;
				return;
			}
			UnsubscribeFromEvents();
			Input = new ScratchCardInput(() => IsScratched);
			SubscribeToEvents();
			cardRenderer?.Release();
			cardRenderer = new ScratchCardRenderer(this);
			ReleaseRenderTexture();
			CreateRenderTexture();
			cardRenderer.FillRenderTextureWithColor(Color.clear);
			initialized = true;
			this.OnInitialized?.Invoke(this);
		}

		public void SetRenderType(ScratchCardRenderType renderType, Camera mainCamera)
		{
			switch (renderType)
			{
			case ScratchCardRenderType.MeshRenderer:
				ScratchData = new MeshRendererData(SurfaceTransform, mainCamera);
				break;
			case ScratchCardRenderType.SpriteRenderer:
				ScratchData = new SpriteRendererData(SurfaceTransform, mainCamera);
				break;
			default:
				ScratchData = new ImageData(SurfaceTransform, mainCamera);
				break;
			}
		}

		private void SubscribeToEvents()
		{
			UnsubscribeFromEvents();
			Input.OnScratch += ScratchData.GetScratchPosition;
			Input.OnScratchHole += TryScratchHole;
			Input.OnScratchLine += TryScratchLine;
		}

		private void UnsubscribeFromEvents()
		{
			if (Input != null)
			{
				Input.OnScratch -= ScratchData.GetScratchPosition;
				Input.OnScratchHole -= TryScratchHole;
				Input.OnScratchLine -= TryScratchLine;
			}
		}

		private void CreateRenderTexture()
		{
			float qualityRatio = (float)RenderTextureQuality;
			Vector2 renderTextureSize = new Vector2(ScratchData.TextureSize.x / qualityRatio, ScratchData.TextureSize.y / qualityRatio);
			RenderTextureFormat renderTextureFormat = (SystemInfo.SupportsRenderTextureFormat(RenderTextureFormat.R8) ? RenderTextureFormat.R8 : RenderTextureFormat.ARGB32);
			RenderTexture = new RenderTexture((int)renderTextureSize.x, (int)renderTextureSize.y, 0, renderTextureFormat);
			SurfaceMaterial.SetTexture(Constants.MaskShader.MaskTexture, RenderTexture);
			RenderTarget = new RenderTargetIdentifier(RenderTexture);
			this.OnRenderTextureInitialized?.Invoke(RenderTexture);
		}

		private void ReleaseRenderTexture()
		{
			if (RenderTexture != null && RenderTexture.IsCreated())
			{
				RenderTexture.Release();
				UnityEngine.Object.Destroy(RenderTexture);
				RenderTexture = null;
			}
		}

		private void OnScratchStart()
		{
			cardRenderer.IsScratched = false;
		}

		private void TryScratchHole(Vector2 position, float pressure)
		{
			cardRenderer.ScratchHole(position, pressure);
			Vector2 localPosition = ScratchData.GetLocalPosition(position);
			this.OnScratchHole?.Invoke(localPosition, pressure);
			if (IsScratched)
			{
				this.OnScratchHoleSucceed?.Invoke(localPosition, pressure);
			}
		}

		private void TryScratchLine(Vector2 startPosition, float startPressure, Vector2 endPosition, float endPressure)
		{
			cardRenderer.ScratchLine(startPosition, endPosition, startPressure, endPressure);
			Vector2 startLocalPosition = ScratchData.GetLocalPosition(startPosition);
			Vector2 endLocalPosition = ScratchData.GetLocalPosition(endPosition);
			this.OnScratchLine?.Invoke(startLocalPosition, startPressure, endLocalPosition, endPressure);
			if (IsScratched)
			{
				this.OnScratchLineSucceed?.Invoke(startLocalPosition, startPressure, endLocalPosition, endPressure);
			}
		}

		public void Fill(bool setIsScratched = true)
		{
			cardRenderer.FillRenderTextureWithColor(Color.white);
			if (setIsScratched)
			{
				IsScratched = true;
			}
		}

		[Obsolete("This method is obsolete, use Fill() instead.")]
		public void FillInstantly()
		{
			Fill();
		}

		public void Clear(bool setIsScratched = true)
		{
			cardRenderer.FillRenderTextureWithColor(Color.clear);
			if (setIsScratched)
			{
				IsScratched = true;
			}
		}

		[Obsolete("This method is obsolete, use Clear() instead.")]
		public void ClearInstantly()
		{
			Clear();
		}

		public void ResetRenderTexture()
		{
			ReleaseRenderTexture();
			CreateRenderTexture();
			cardRenderer.FillRenderTextureWithColor(Color.clear);
			IsScratched = true;
		}

		public void ScratchHole(Vector2 position, float pressure = 1f)
		{
			cardRenderer.ScratchHole(position, pressure);
			Vector2 localPosition = ScratchData.GetLocalPosition(position);
			this.OnScratchHole?.Invoke(localPosition, pressure);
			if (IsScratched)
			{
				this.OnScratchHoleSucceed?.Invoke(localPosition, pressure);
			}
		}

		public void ScratchLine(Vector2 startPosition, Vector2 endPosition, float startPressure = 1f, float endPressure = 1f)
		{
			cardRenderer.ScratchLine(startPosition, endPosition, startPressure, endPressure);
			Vector2 startLocalPosition = ScratchData.GetLocalPosition(startPosition);
			Vector2 endLocalPosition = ScratchData.GetLocalPosition(endPosition);
			this.OnScratchLine?.Invoke(startLocalPosition, startPressure, endLocalPosition, endPressure);
			if (IsScratched)
			{
				this.OnScratchLineSucceed?.Invoke(startLocalPosition, startPressure, endLocalPosition, endPressure);
			}
		}

		public Texture2D GetScratchTexture()
		{
			RenderTexture previousRenderTexture = RenderTexture.active;
			Texture2D texture2D = new Texture2D(RenderTexture.width, RenderTexture.height, TextureFormat.ARGB32, false);
			RenderTexture.active = RenderTexture;
			texture2D.ReadPixels(new Rect(0f, 0f, texture2D.width, texture2D.height), 0, 0, false);
			texture2D.Apply();
			RenderTexture.active = previousRenderTexture;
			return texture2D;
		}
	}
}
