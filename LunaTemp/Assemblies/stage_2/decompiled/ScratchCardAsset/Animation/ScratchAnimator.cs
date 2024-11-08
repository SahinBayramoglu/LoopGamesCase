using System;
using ScratchCardAsset.Core;
using UnityEngine;

namespace ScratchCardAsset.Animation
{
	public class ScratchAnimator : MonoBehaviour
	{
		public ScratchCard ScratchCard;

		public ScratchAnimation ScratchAnimation;

		public bool PlayOnStart = true;

		private int currentScratchIndex;

		private float progress;

		private float totalTime;

		private Vector2? previousPosition;

		private Vector2 scale = Vector2.one;

		private bool isPlaying;

		public bool IsPlaying => isPlaying;

		public event Action OnPlay;

		public event Action OnPause;

		public event Action OnStop;

		public event Action OnCompleted;

		private void Start()
		{
			if (ScratchAnimation != null && ScratchAnimation.ScratchSpace == ScratchAnimationSpace.UV)
			{
				scale = ScratchCard.ScratchData.TextureSize;
			}
			if (PlayOnStart)
			{
				Play();
			}
		}

		private void Update()
		{
			if (isPlaying)
			{
				UpdateScratches();
				totalTime += Time.deltaTime;
			}
		}

		private void OnValidate()
		{
			if (ScratchCard == null && !TryGetComponent<ScratchCard>(out ScratchCard) && TryGetComponent<ScratchCardManager>(out var scratchCardManager) && scratchCardManager.Card != null)
			{
				ScratchCard = scratchCardManager.Card;
			}
		}

		private void UpdateScratches()
		{
			if (ScratchAnimation == null || ScratchAnimation.Scratches.Count == 0)
			{
				return;
			}
			BaseScratch scratch = ScratchAnimation.Scratches[currentScratchIndex];
			if (totalTime < scratch.Time)
			{
				return;
			}
			if (scratch is LineScratch line)
			{
				float duration = line.TimeEnd - line.Time;
				if (duration == 0f)
				{
					progress = 1f;
				}
				else
				{
					progress = totalTime / duration;
				}
				Vector2 position2 = Vector3.Lerp(line.Position, line.PositionEnd, progress) * scale;
				float pressure2 = Mathf.Lerp(line.BrushScale, line.BrushScaleEnd, progress);
				if (!previousPosition.HasValue)
				{
					previousPosition = line.Position * scale;
				}
				ScratchCard.ScratchLine(previousPosition.Value, position2, pressure2, pressure2);
				previousPosition = position2;
			}
			else
			{
				if (scratch.Time == 0f)
				{
					progress = 1f;
				}
				else
				{
					progress = totalTime / scratch.Time;
				}
				if (progress >= 1f)
				{
					Vector2 position = scratch.Position * scale;
					float pressure = scratch.BrushScale;
					ScratchCard.ScratchHole(position, pressure);
					previousPosition = null;
				}
			}
			if (progress >= 1f)
			{
				currentScratchIndex++;
				progress = 0f;
				previousPosition = null;
				if (currentScratchIndex == ScratchAnimation.Scratches.Count)
				{
					Stop();
					this.OnCompleted?.Invoke();
				}
				else
				{
					UpdateScratches();
				}
			}
		}

		[ContextMenu("Play")]
		public void Play()
		{
			isPlaying = true;
			this.OnPlay?.Invoke();
		}

		[ContextMenu("Pause")]
		public void Pause()
		{
			isPlaying = false;
			this.OnPause?.Invoke();
		}

		[ContextMenu("Stop")]
		public void Stop()
		{
			isPlaying = false;
			totalTime = 0f;
			currentScratchIndex = 0;
			progress = 0f;
			previousPosition = null;
			this.OnStop?.Invoke();
		}
	}
}
