using System.Collections.Generic;
using ScratchCardAsset.Core;
using ScratchCardAsset.Core.InputData;
using UnityEngine;

namespace ScratchCardAsset.Animation
{
	public class ScratchAnimationRecorder : MonoBehaviour
	{
		public ScratchCard ScratchCard;

		public ScratchAnimation ScratchAnimation;

		public ScratchAnimationSpace AnimationSpace;

		public bool FlushOnDestroy = true;

		[SerializeReference]
		private List<BaseScratch> scratches = new List<BaseScratch>();

		private void Start()
		{
			ScratchCard.Input.OnScratchHoleExtended += OnScratchHole;
			ScratchCard.Input.OnScratchLineExtended += OnScratchLine;
		}

		private void OnDestroy()
		{
			ScratchCard.Input.OnScratchHoleExtended -= OnScratchHole;
			ScratchCard.Input.OnScratchLineExtended -= OnScratchLine;
			if (FlushOnDestroy)
			{
				Flush();
			}
		}

		private void OnValidate()
		{
			if (ScratchCard == null && !TryGetComponent<ScratchCard>(out ScratchCard) && TryGetComponent<ScratchCardManager>(out var scratchCardManager) && scratchCardManager.Card != null)
			{
				ScratchCard = scratchCardManager.Card;
			}
		}

		[ContextMenu("Flush")]
		public void Flush()
		{
			if (scratches.Count <= 0)
			{
				return;
			}
			float firstTime = scratches[0].Time;
			for (int i = 1; i < scratches.Count; i++)
			{
				scratches[i].Time -= firstTime;
				if (scratches[i] is LineScratch line)
				{
					line.TimeEnd -= firstTime;
				}
			}
			scratches[0].Time = 0f;
			if (scratches[0] is LineScratch firstLine)
			{
				firstLine.TimeEnd -= firstTime;
			}
			ScratchAnimation.ScratchSpace = AnimationSpace;
			ScratchAnimation.Scratches.Clear();
			ScratchAnimation.Scratches.AddRange(scratches);
			string scratchAnimationJson = JsonUtility.ToJson(ScratchAnimation);
			Debug.Log(scratchAnimationJson);
			scratches.Clear();
		}

		private void OnScratchHole(ScratchCardInputData hole)
		{
			if (base.enabled)
			{
				Vector2 imageSize = Vector2.one;
				if (AnimationSpace == ScratchAnimationSpace.UV)
				{
					imageSize = ScratchCard.ScratchData.TextureSize;
				}
				BaseScratch scratch = new BaseScratch
				{
					Position = hole.Position / imageSize,
					BrushScale = hole.Pressure * ScratchCard.BrushSize,
					Time = hole.Time
				};
				scratches.Add(scratch);
			}
		}

		private void OnScratchLine(ScratchCardInputData lineStart, ScratchCardInputData lineEnd)
		{
			if (base.enabled)
			{
				Vector2 imageSize = Vector2.one;
				if (AnimationSpace == ScratchAnimationSpace.UV)
				{
					imageSize = ScratchCard.ScratchData.TextureSize;
				}
				LineScratch scratch = new LineScratch
				{
					Position = lineStart.Position / imageSize,
					BrushScale = lineStart.Pressure * ScratchCard.BrushSize,
					Time = lineStart.Time,
					PositionEnd = lineEnd.Position / imageSize,
					BrushScaleEnd = lineEnd.Pressure * ScratchCard.BrushSize,
					TimeEnd = lineEnd.Time
				};
				scratches.Add(scratch);
			}
		}
	}
}
