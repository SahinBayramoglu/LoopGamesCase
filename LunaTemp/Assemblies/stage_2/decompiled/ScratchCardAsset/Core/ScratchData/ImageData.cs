using UnityEngine;
using UnityEngine.UI;

namespace ScratchCardAsset.Core.ScratchData
{
	public class ImageData : BaseData
	{
		private readonly Image image;

		private readonly bool isCanvasOverlay;

		public override Vector2 TextureSize => image.sprite.rect.size;

		protected override Vector2 Bounds => image.rectTransform.rect.size;

		public ImageData(Transform surface, Camera camera)
			: base(surface, camera)
		{
			if (surface.TryGetComponent<Image>(out image))
			{
				isCanvasOverlay = image.canvas.renderMode == RenderMode.ScreenSpaceOverlay;
				InitTriangle();
			}
		}

		public override Vector2 GetScratchPosition(Vector2 position)
		{
			if (isCanvasOverlay)
			{
				Vector2 scratchPosition = Vector2.zero;
				if (RectTransformUtility.ScreenPointToWorldPointInRectangle((RectTransform)base.Surface, position, null, out var worldPosition))
				{
					Vector3 pointLocal = base.Surface.InverseTransformPoint(worldPosition);
					Vector2 uv = base.Triangle.GetUV(pointLocal);
					scratchPosition = Vector2.Scale(TextureSize, uv);
				}
				return scratchPosition;
			}
			return base.GetScratchPosition(position);
		}
	}
}
