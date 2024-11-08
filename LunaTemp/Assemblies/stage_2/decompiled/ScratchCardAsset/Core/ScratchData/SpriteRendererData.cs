using UnityEngine;

namespace ScratchCardAsset.Core.ScratchData
{
	public class SpriteRendererData : BaseData
	{
		private readonly SpriteRenderer renderer;

		public override Vector2 TextureSize => renderer.sprite.rect.size;

		protected override Vector2 Bounds
		{
			get
			{
				if (Application.unityVersion.StartsWith("2021.2") || Application.unityVersion.CompareTo("2021.2") > 0)
				{
					Bounds bounds = renderer.bounds;
					Vector3 localSize = renderer.transform.InverseTransformVector(bounds.size);
					return new Vector2(localSize.x, localSize.y);
				}
				return renderer.bounds.size;
			}
		}

		public SpriteRendererData(Transform surface, Camera camera)
			: base(surface, camera)
		{
			if (surface.TryGetComponent<SpriteRenderer>(out renderer))
			{
				InitTriangle();
			}
		}
	}
}
