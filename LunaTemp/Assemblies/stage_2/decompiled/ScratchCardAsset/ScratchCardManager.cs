using System;
using System.Collections.Generic;
using ScratchCardAsset.Core;
using ScratchCardAsset.Tools;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace ScratchCardAsset
{
	[ExecuteInEditMode]
	public class ScratchCardManager : MonoBehaviour
	{
		public ScratchCard Card;

		public EraseProgress Progress;

		public ScratchCardRenderType RenderType;

		[Obsolete("This field is obsolete, use MeshRendererCard property instead", true)]
		public GameObject MeshCard;

		[Obsolete("This field is obsolete, use SpriteRendererCard property instead", true)]
		public GameObject SpriteCard;

		[Obsolete("This field is obsolete, use CanvasRendererCard property instead", true)]
		public GameObject ImageCard;

		[SerializeField]
		private MeshRenderer meshRendererCard;

		[SerializeField]
		private SpriteRenderer spriteRendererCard;

		[SerializeField]
		private Image canvasRendererCard;

		[FormerlySerializedAs("ScratchSurfaceSpriteHasAlpha")]
		[SerializeField]
		private bool scratchSurfaceSpriteHasAlpha = true;

		[FormerlySerializedAs("Mode")]
		[SerializeField]
		private ScratchMode mode;

		[FormerlySerializedAs("MainCamera")]
		[SerializeField]
		private Camera mainCamera;

		[FormerlySerializedAs("ScratchSurfaceSprite")]
		[SerializeField]
		private Sprite scratchSurfaceSprite;

		[SerializeField]
		private ProgressAccuracy progressAccuracy;

		[FormerlySerializedAs("EraseTexture")]
		[SerializeField]
		private Texture brushTexture;

		[FormerlySerializedAs("EraseTextureScale")]
		[SerializeField]
		private float brushSize = 1f;

		[SerializeField]
		private float brushOpacity = 1f;

		[FormerlySerializedAs("InputEnabled")]
		[SerializeField]
		private bool inputEnabled = true;

		[SerializeField]
		private bool usePressure;

		[SerializeField]
		private bool checkCanvasRaycasts = true;

		[SerializeField]
		private Canvas[] canvasesForRaycastsBlocking;

		[FormerlySerializedAs("MaskShader")]
		[SerializeField]
		private Shader maskShader;

		[FormerlySerializedAs("BrushShader")]
		[SerializeField]
		private Shader brushShader;

		[FormerlySerializedAs("MaskProgressShader")]
		[SerializeField]
		private Shader maskProgressShader;

		private Material surfaceMaterial;

		private Texture2D scratchTexture;

		private Color[] spritePixels;

		private Sprite scratchSprite;

		private MigrationHelper migrationHelper;

		private bool initialized;

		public MeshRenderer MeshRendererCard
		{
			get
			{
				return meshRendererCard;
			}
			set
			{
				meshRendererCard = value;
			}
		}

		public SpriteRenderer SpriteRendererCard
		{
			get
			{
				return spriteRendererCard;
			}
			set
			{
				spriteRendererCard = value;
			}
		}

		public Image CanvasRendererCard
		{
			get
			{
				return canvasRendererCard;
			}
			set
			{
				canvasRendererCard = value;
			}
		}

		public bool ScratchSurfaceSpriteHasAlpha
		{
			get
			{
				return scratchSurfaceSpriteHasAlpha;
			}
			set
			{
				scratchSurfaceSpriteHasAlpha = value;
				if (Progress != null)
				{
					Progress.SampleSourceTexture = scratchSurfaceSpriteHasAlpha;
				}
			}
		}

		public ScratchMode Mode
		{
			get
			{
				return mode;
			}
			set
			{
				mode = value;
				if (Card != null)
				{
					Card.Mode = mode;
				}
			}
		}

		public Camera MainCamera
		{
			get
			{
				return mainCamera;
			}
			set
			{
				mainCamera = value;
				if (Card != null && Card.ScratchData != null)
				{
					Card.ScratchData.Camera = mainCamera;
				}
			}
		}

		public Sprite ScratchSurfaceSprite
		{
			get
			{
				return scratchSurfaceSprite;
			}
			set
			{
				scratchSurfaceSprite = value;
				if (!(Card != null))
				{
					return;
				}
				if (Application.isPlaying)
				{
					if (initialized)
					{
						UpdateCardSprite(scratchSurfaceSprite);
						Card.SetRenderType(RenderType, mainCamera);
						Card.Init();
						if (Progress != null)
						{
							Progress.ResetProgress();
							Progress.UpdateProgress();
						}
					}
				}
				else
				{
					InitSurfaceMaterial();
				}
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
				if (Progress != null && Progress.ProgressMaterial != null)
				{
					Progress.ProgressAccuracy = progressAccuracy;
				}
			}
		}

		public Texture BrushTexture
		{
			get
			{
				return brushTexture;
			}
			set
			{
				brushTexture = value;
				if (Card != null && Card.BrushMaterial != null)
				{
					Card.BrushMaterial.mainTexture = brushTexture;
				}
			}
		}

		public float BrushSize
		{
			get
			{
				return brushSize;
			}
			set
			{
				brushSize = value;
				if (Card != null && Card.Initialized)
				{
					Card.BrushSize = brushSize;
				}
			}
		}

		public float BrushOpacity
		{
			get
			{
				return brushOpacity;
			}
			set
			{
				brushOpacity = value;
				if (Card != null && Card.BrushMaterial != null)
				{
					Card.BrushMaterial.color = new Color(Card.BrushMaterial.color.r, Card.BrushMaterial.color.g, Card.BrushMaterial.color.b, brushOpacity);
				}
			}
		}

		public bool InputEnabled
		{
			get
			{
				return inputEnabled;
			}
			set
			{
				inputEnabled = value;
				Card.enabled = inputEnabled;
			}
		}

		public bool UsePressure
		{
			get
			{
				return usePressure;
			}
			set
			{
				usePressure = value;
				if (Card != null && Card.Initialized)
				{
					Card.Input.UsePressure = usePressure;
				}
			}
		}

		public bool CheckCanvasRaycasts
		{
			get
			{
				return checkCanvasRaycasts;
			}
			set
			{
				checkCanvasRaycasts = value;
				if (Card != null && Card.Initialized)
				{
					Card.Input.CheckCanvasRaycasts = checkCanvasRaycasts;
					if (checkCanvasRaycasts)
					{
						Card.Input.InitRaycastsController(Card.SurfaceTransform.gameObject, canvasesForRaycastsBlocking);
					}
				}
			}
		}

		public Canvas[] CanvasesForRaycastsBlocking
		{
			get
			{
				return canvasesForRaycastsBlocking;
			}
			set
			{
				canvasesForRaycastsBlocking = value;
				if (Card != null && Card.Initialized)
				{
					Card.Input.InitRaycastsController(Card.SurfaceTransform.gameObject, canvasesForRaycastsBlocking);
				}
			}
		}

		private void Awake()
		{
			if (!Application.isPlaying)
			{
				migrationHelper = new MigrationHelper();
				migrationHelper.StartMigrate(this);
				InitSurfaceMaterial();
			}
		}

		private void Start()
		{
			if (!Application.isPlaying)
			{
				migrationHelper.FinishMigrate();
				migrationHelper = null;
			}
			else if (!initialized)
			{
				Init();
			}
		}

		private void OnDestroy()
		{
			if (surfaceMaterial != null)
			{
				if (Application.isPlaying)
				{
					UnityEngine.Object.Destroy(surfaceMaterial);
				}
				else
				{
					UnityEngine.Object.DestroyImmediate(surfaceMaterial);
				}
				surfaceMaterial = null;
			}
			if (Application.isPlaying)
			{
				if (Card != null)
				{
					Card.OnInitialized -= OnCardInitialized;
					Card.OnRenderTextureInitialized -= OnCardRenderTextureInitialized;
				}
				ReleaseTexture();
			}
		}

		public void Init()
		{
			if (Card == null)
			{
				Debug.LogError("ScratchCard field is not assigned!");
				return;
			}
			if (mainCamera == null)
			{
				mainCamera = ((mainCamera != null) ? mainCamera : Camera.main);
			}
			InitSurfaceMaterial();
			InitBrushMaterial();
			InitProgressMaterial();
			if (TrySelectCard(RenderType))
			{
				Card.BrushSize = BrushSize;
				Card.Mode = mode;
				Card.SetRenderType(RenderType, mainCamera);
				Card.OnInitialized -= OnCardInitialized;
				Card.OnInitialized += OnCardInitialized;
				Card.OnRenderTextureInitialized -= OnCardRenderTextureInitialized;
				Card.OnRenderTextureInitialized += OnCardRenderTextureInitialized;
				Card.Init();
			}
			else
			{
				Card.enabled = false;
			}
			if (Card.Mode == ScratchMode.Restore)
			{
				Card.Fill(false);
			}
			initialized = true;
		}

		private void OnCardInitialized(ScratchCard scratchCard)
		{
			scratchCard.Input.UsePressure = usePressure;
			scratchCard.Input.CheckCanvasRaycasts = checkCanvasRaycasts;
			if (checkCanvasRaycasts)
			{
				scratchCard.Input.InitRaycastsController(scratchCard.SurfaceTransform.gameObject, canvasesForRaycastsBlocking);
			}
		}

		private void OnCardRenderTextureInitialized(RenderTexture renderTexture)
		{
			if (Progress != null && Progress.ProgressMaterial != null)
			{
				Progress.ProgressMaterial.mainTexture = renderTexture;
			}
		}

		private void ReleaseTexture()
		{
			if (scratchTexture != null)
			{
				UnityEngine.Object.Destroy(scratchTexture);
				scratchTexture = null;
			}
			if (scratchSprite != null)
			{
				UnityEngine.Object.Destroy(scratchSprite);
				scratchSprite = null;
			}
		}

		public void InitSurfaceMaterial()
		{
			if (Card != null && Card.SurfaceMaterial == null)
			{
				Material scratchSurfaceMaterial = new Material(maskShader);
				Card.SurfaceMaterial = scratchSurfaceMaterial;
				surfaceMaterial = scratchSurfaceMaterial;
			}
			UpdateCardSprite(scratchSurfaceSprite);
		}

		private void UpdateCardSprite(Sprite sprite)
		{
			ReleaseTexture();
			Material scratchSurfaceMaterial = Card.SurfaceMaterial;
			bool isPartOfAtlas = sprite != null && ((float)sprite.texture.width != sprite.rect.size.x || (float)sprite.texture.height != sprite.rect.size.y);
			if (Application.isPlaying)
			{
				if (isPartOfAtlas || scratchSurfaceSpriteHasAlpha)
				{
					if (sprite.texture.isReadable)
					{
						if (sprite.packed)
						{
							spritePixels = sprite.texture.GetPixels((int)sprite.textureRect.x, (int)sprite.textureRect.y, (int)sprite.rect.width, (int)sprite.rect.height);
						}
						else
						{
							spritePixels = sprite.texture.GetPixels((int)sprite.rect.x, (int)sprite.rect.y, (int)sprite.rect.width, (int)sprite.rect.height);
						}
					}
					else
					{
						Debug.LogError("Texture is not readable, please set Read/Write flag in texture settings.");
					}
				}
				if (isPartOfAtlas)
				{
					scratchTexture = new Texture2D((int)sprite.rect.width, (int)sprite.rect.height);
					scratchTexture.SetPixels(spritePixels);
					scratchTexture.Apply();
					if (scratchSurfaceMaterial != null)
					{
						scratchSurfaceMaterial.mainTexture = scratchTexture;
					}
					if (RenderType == ScratchCardRenderType.SpriteRenderer || RenderType == ScratchCardRenderType.CanvasRenderer)
					{
						Rect croppedRect = new Rect(0f, 0f, scratchTexture.width, scratchTexture.height);
						Vector2 pivot = scratchSurfaceSprite.pivot / croppedRect.size;
						scratchSprite = Sprite.Create(scratchTexture, croppedRect, pivot, 100f);
						sprite = scratchSprite;
					}
				}
				else if (scratchSurfaceMaterial != null && scratchSurfaceSprite != null)
				{
					scratchSurfaceMaterial.mainTexture = scratchSurfaceSprite.texture;
				}
				UpdateProgressMaterial();
			}
			else if (Card.SurfaceMaterial != null && scratchSurfaceSprite != null)
			{
				Card.SurfaceMaterial.mainTexture = scratchSurfaceSprite.texture;
			}
			UpdateCardOffset();
			if (RenderType == ScratchCardRenderType.MeshRenderer && meshRendererCard != null)
			{
				if (Card.SurfaceMaterial != null)
				{
					meshRendererCard.sharedMaterial = Card.SurfaceMaterial;
				}
				if (Card.SurfaceMaterial != null && scratchSurfaceSprite != null)
				{
					Card.SurfaceMaterial.mainTexture = scratchSurfaceSprite.texture;
				}
			}
			if (RenderType == ScratchCardRenderType.SpriteRenderer && SpriteRendererCard != null)
			{
				if (Card.SurfaceMaterial != null)
				{
					SpriteRendererCard.sharedMaterial = Card.SurfaceMaterial;
				}
				if (sprite != null)
				{
					SpriteRendererCard.sprite = sprite;
				}
			}
			if (RenderType == ScratchCardRenderType.CanvasRenderer && CanvasRendererCard != null)
			{
				if (Card.SurfaceMaterial != null)
				{
					CanvasRendererCard.material = Card.SurfaceMaterial;
				}
				if (sprite != null)
				{
					CanvasRendererCard.sprite = sprite;
				}
			}
		}

		private void UpdateCardOffset()
		{
			if (Card.SurfaceMaterial != null)
			{
				if (RenderType == ScratchCardRenderType.MeshRenderer && scratchSurfaceSprite != null)
				{
					Vector4 offset = new Vector4(scratchSurfaceSprite.textureRect.min.x / (float)scratchSurfaceSprite.texture.width, scratchSurfaceSprite.textureRect.min.y / (float)scratchSurfaceSprite.texture.height, scratchSurfaceSprite.textureRect.width / (float)scratchSurfaceSprite.texture.width, scratchSurfaceSprite.textureRect.height / (float)scratchSurfaceSprite.texture.height);
					Card.SurfaceMaterial.SetVector(Constants.MaskShader.Offset, offset);
				}
				else
				{
					Card.SurfaceMaterial.SetVector(Constants.MaskShader.Offset, new Vector4(0f, 0f, 5f, 5f));
				}
			}
		}

		private void InitBrushMaterial()
		{
			if (Card.BrushMaterial == null)
			{
				Card.BrushMaterial = new Material(brushShader);
			}
			Card.BrushMaterial.mainTexture = brushTexture;
			Card.BrushMaterial.color = new Color(1f, 1f, 1f, brushOpacity);
		}

		private void InitProgressMaterial()
		{
			if (!(Progress == null))
			{
				if (Progress.ProgressMaterial == null)
				{
					Material progressMaterial = new Material(maskProgressShader);
					Progress.ProgressMaterial = progressMaterial;
					Progress.SampleSourceTexture = scratchSurfaceSpriteHasAlpha;
				}
				Progress.ProgressAccuracy = progressAccuracy;
				SetProgressSourceTexture();
			}
		}

		private void SetProgressSourceTexture()
		{
			if (scratchSurfaceSpriteHasAlpha)
			{
				if (scratchTexture != null)
				{
					Progress.ProgressMaterial.SetTexture(Constants.ProgressShader.SourceTexture, scratchTexture);
				}
				else if (scratchSurfaceSprite != null)
				{
					Progress.ProgressMaterial.SetTexture(Constants.ProgressShader.SourceTexture, scratchSurfaceSprite.texture);
				}
			}
		}

		private void UpdateProgressMaterial()
		{
			if (Progress != null)
			{
				if (Progress.ProgressMaterial != null)
				{
					SetProgressSourceTexture();
				}
				if (Application.isPlaying && spritePixels != null)
				{
					Progress.SetSpritePixels(spritePixels);
					spritePixels = null;
				}
			}
		}

		public void FillScratchCard()
		{
			Card.Fill(false);
			if (Progress != null)
			{
				Progress.UpdateProgress();
			}
		}

		public void ClearScratchCard()
		{
			Card.Clear(false);
			if (Progress != null)
			{
				Progress.UpdateProgress();
			}
		}

		public bool TrySelectCard(ScratchCardRenderType renderType)
		{
			RenderType = renderType;
			Dictionary<ScratchCardRenderType, Component> cards = new Dictionary<ScratchCardRenderType, Component>
			{
				{
					ScratchCardRenderType.MeshRenderer,
					meshRendererCard
				},
				{
					ScratchCardRenderType.SpriteRenderer,
					spriteRendererCard
				},
				{
					ScratchCardRenderType.CanvasRenderer,
					canvasRendererCard
				}
			};
			foreach (KeyValuePair<ScratchCardRenderType, Component> card in cards)
			{
				bool isActive = card.Key == RenderType;
				if (card.Value != null)
				{
					card.Value.gameObject.SetActive(isActive);
					if (isActive)
					{
						Card.SurfaceTransform = card.Value.transform;
					}
				}
				else if (isActive)
				{
					Debug.LogError($"{card.Key} Card is null! Assign reference to the component in Inspector");
					return false;
				}
			}
			return true;
		}

		public void SetNativeSize()
		{
			switch (RenderType)
			{
			case ScratchCardRenderType.MeshRenderer:
				if (MeshRendererCard != null && MeshRendererCard.sharedMaterial != null && MeshRendererCard.sharedMaterial.mainTexture != null)
				{
					float width;
					float height;
					if (scratchSurfaceSprite != null)
					{
						width = scratchSurfaceSprite.rect.width;
						height = scratchSurfaceSprite.rect.height;
					}
					else
					{
						Texture texture = MeshRendererCard.sharedMaterial.mainTexture;
						width = texture.width;
						height = texture.height;
					}
					Transform meshCardTransform = MeshRendererCard.transform;
					meshCardTransform.localScale = new Vector3(width / 100f, height / 100f, meshCardTransform.localScale.z);
				}
				break;
			case ScratchCardRenderType.SpriteRenderer:
				if (SpriteRendererCard != null)
				{
					SpriteRendererCard.transform.localScale = Vector3.one;
				}
				break;
			case ScratchCardRenderType.CanvasRenderer:
				if (CanvasRendererCard != null)
				{
					CanvasRendererCard.SetNativeSize();
				}
				break;
			}
		}
	}
}