using System;
using System.Globalization;
using ScratchCardAsset.Animation;
using ScratchCardAsset.Core;
using UnityEngine;
using UnityEngine.UI;

namespace ScratchCardAsset.Demo
{
	public class ScratchDemoUI : MonoBehaviour
	{
		[SerializeField]
		private ScratchCardManager cardManager;

		[Header("Progress")]
		[SerializeField]
		private Toggle progressToggle;

		[SerializeField]
		private Text progressText;

		[Header("Scratch Mode")]
		[SerializeField]
		private Toggle scratchModeEraseToggle;

		[SerializeField]
		private Toggle scratchModeRestoreToggle;

		[Header("Brushes")]
		[SerializeField]
		private Texture[] brushes;

		[SerializeField]
		private Toggle[] brushToggles;

		[Header("Brush Size")]
		[SerializeField]
		private Slider brushSizeSlider;

		[SerializeField]
		private Text brushSizeText;

		[Header("Animation")]
		[SerializeField]
		private ScratchAnimator scratchAnimator;

		[SerializeField]
		private ScratchAnimation[] animations;

		[SerializeField]
		private Toggle cursorToggle;

		[SerializeField]
		private GameObject cursor;

		[SerializeField]
		private CursorSprite cursorSprite;

		[SerializeField]
		private Toggle[] animationToggles;

		[SerializeField]
		private Button playButton;

		[SerializeField]
		private Button pauseButton;

		[SerializeField]
		private Button stopButton;

		[Header("Reset")]
		[SerializeField]
		private Button resetButton;

		private const string TogglePrefsKey = "ScratchCardDemoProgressToggle";

		private const string BrushPrefsKey = "ScratchCardDemoBrush";

		private const string SizePrefsKey = "ScratchCardDemoSize";

		private void Start()
		{
			cardManager.Progress.OnProgress += OnEraseProgress;
			progressToggle.onValueChanged.AddListener(OnProgressToggle);
			progressToggle.isOn = PlayerPrefs.GetInt("ScratchCardDemoProgressToggle", 0) == 0;
			scratchModeEraseToggle.onValueChanged.AddListener(OnEraseToggle);
			scratchModeRestoreToggle.onValueChanged.AddListener(OnRestoreToggle);
			brushSizeSlider.onValueChanged.AddListener(OnBrushSizeSlider);
			Toggle[] array = brushToggles;
			foreach (Toggle brushToggle in array)
			{
				brushToggle.onValueChanged.AddListener(OnBrushChange);
			}
			brushSizeSlider.value = PlayerPrefs.GetFloat("ScratchCardDemoSize", 1f);
			brushToggles[PlayerPrefs.GetInt("ScratchCardDemoBrush")].isOn = true;
			scratchAnimator.OnStop += HideCursor;
			cursorToggle.onValueChanged.AddListener(OnShowCursorToggle);
			Toggle[] array2 = animationToggles;
			foreach (Toggle animationToggle in array2)
			{
				animationToggle.onValueChanged.AddListener(OnAnimationChange);
			}
			playButton.onClick.AddListener(OnPlay);
			pauseButton.onClick.AddListener(OnPause);
			stopButton.onClick.AddListener(OnStop);
			resetButton.onClick.AddListener(OnReset);
		}

		private void OnDestroy()
		{
			cardManager.Progress.OnProgress -= OnEraseProgress;
			progressToggle.onValueChanged.RemoveListener(OnProgressToggle);
			scratchModeEraseToggle.onValueChanged.RemoveListener(OnEraseToggle);
			scratchModeRestoreToggle.onValueChanged.RemoveListener(OnRestoreToggle);
			brushSizeSlider.onValueChanged.RemoveListener(OnBrushSizeSlider);
			Toggle[] array = brushToggles;
			foreach (Toggle brushToggle in array)
			{
				brushToggle.onValueChanged.RemoveListener(OnBrushChange);
			}
			scratchAnimator.OnStop -= HideCursor;
			cursorToggle.onValueChanged.RemoveListener(OnShowCursorToggle);
			Toggle[] array2 = animationToggles;
			foreach (Toggle animationToggle in array2)
			{
				animationToggle.onValueChanged.RemoveListener(OnAnimationChange);
			}
			playButton.onClick.RemoveListener(OnPlay);
			pauseButton.onClick.RemoveListener(OnPause);
			stopButton.onClick.RemoveListener(OnStop);
			resetButton.onClick.RemoveListener(OnReset);
			cardManager.Card.OnScratchHole -= OnScratchHole;
			cardManager.Card.OnScratchLine -= OnScratchLine;
		}

		private void Update()
		{
			if (Input.GetKeyDown(KeyCode.Escape))
			{
				OnReset();
			}
		}

		private void OnEraseToggle(bool isOn)
		{
			if (isOn)
			{
				cardManager.Card.Mode = ScratchMode.Erase;
			}
		}

		private void OnRestoreToggle(bool isOn)
		{
			if (isOn)
			{
				cardManager.Card.Mode = ScratchMode.Restore;
			}
		}

		private void OnBrushSizeSlider(float sliderValue)
		{
			cardManager.Card.BrushSize = sliderValue;
			brushSizeText.text = "Brush Size: " + Math.Round(sliderValue, 2).ToString(CultureInfo.InvariantCulture);
			PlayerPrefs.SetFloat("ScratchCardDemoSize", sliderValue);
		}

		private void OnBrushChange(bool isOn)
		{
			for (int i = 0; i < brushToggles.Length; i++)
			{
				if (brushToggles[i].isOn)
				{
					cardManager.BrushTexture = brushes[i];
					PlayerPrefs.SetInt("ScratchCardDemoBrush", i);
					break;
				}
			}
		}

		private void OnEraseProgress(float progress)
		{
			string value = Mathf.Round(progress * 100f).ToString(CultureInfo.InvariantCulture);
			progressText.text = "Progress: " + value + "%";
		}

		private void OnProgressToggle(bool check)
		{
			cardManager.Progress.enabled = progressToggle.isOn;
			PlayerPrefs.SetInt("ScratchCardDemoProgressToggle", (!progressToggle.isOn) ? 1 : 0);
		}

		private void OnShowCursorToggle(bool isOn)
		{
			cursorSprite.SpriteRenderer.enabled = isOn;
			if (isOn)
			{
				cardManager.Card.OnScratchHole += OnScratchHole;
				cardManager.Card.OnScratchLine += OnScratchLine;
			}
			else
			{
				cardManager.Card.OnScratchHole -= OnScratchHole;
				cardManager.Card.OnScratchLine -= OnScratchLine;
			}
		}

		private void OnScratchHole(Vector2 position, float pressure)
		{
			Vector3 worldPosition = cardManager.Card.SurfaceTransform.transform.localToWorldMatrix.MultiplyPoint(position);
			cursor.transform.position = worldPosition;
		}

		private void OnScratchLine(Vector2 lineStart, float pressureStart, Vector2 lineEnd, float pressureEnd)
		{
			Vector3 worldPosition = cardManager.Card.SurfaceTransform.transform.localToWorldMatrix.MultiplyPoint(lineEnd);
			cursor.transform.position = worldPosition;
		}

		private void OnAnimationChange(bool isOn)
		{
			for (int i = 0; i < animationToggles.Length; i++)
			{
				if (animationToggles[i].isOn)
				{
					scratchAnimator.Stop();
					scratchAnimator.ScratchAnimation = animations[i];
					break;
				}
			}
		}

		private void OnPlay()
		{
			scratchAnimator.Play();
			if (cursorToggle.isOn)
			{
				cursorSprite.Show();
				cursor.gameObject.SetActive(true);
				OnShowCursorToggle(cursorToggle.isOn);
			}
			else
			{
				HideCursor();
			}
		}

		private void OnPause()
		{
			scratchAnimator.Pause();
			HideCursor();
		}

		private void OnStop()
		{
			scratchAnimator.Stop();
			HideCursor();
		}

		private void HideCursor()
		{
			if (cursorSprite != null)
			{
				cursorSprite.Hide();
			}
		}

		private void OnReset()
		{
			cardManager.ClearScratchCard();
		}
	}
}
