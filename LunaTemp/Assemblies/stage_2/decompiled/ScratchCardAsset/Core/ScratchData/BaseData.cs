using UnityEngine;

namespace ScratchCardAsset.Core.ScratchData
{
	public abstract class BaseData
	{
		public Camera Camera { protected get; set; }

		public abstract Vector2 TextureSize { get; }

		protected abstract Vector2 Bounds { get; }

		protected virtual bool IsOrthographic => Camera.orthographic;

		protected Transform Surface { get; private set; }

		protected Triangle Triangle { get; set; }

		protected BaseData(Transform surface, Camera camera)
		{
			Surface = surface;
			Camera = camera;
		}

		protected void InitTriangle()
		{
			Vector2 bounds = Bounds;
			Vector3 position0 = new Vector3((0f - bounds.x) / 2f, (0f - bounds.y) / 2f, 0f);
			Vector2 uv0 = Vector2.zero;
			Vector3 position1 = new Vector3((0f - bounds.x) / 2f, bounds.y / 2f, 0f);
			Vector2 uv1 = Vector2.up;
			Vector3 position2 = new Vector3(bounds.x / 2f, bounds.y / 2f, 0f);
			Vector2 uv2 = Vector2.one;
			Triangle = new Triangle(position0, position1, position2, uv0, uv1, uv2);
		}

		public virtual Vector2 GetScratchPosition(Vector2 position)
		{
			Vector2 scratchPosition = Vector2.zero;
			Plane plane = new Plane(Surface.forward, Surface.position);
			Ray ray = Camera.ScreenPointToRay(position);
			if (plane.Raycast(ray, out var enter))
			{
				Vector3 point = ray.GetPoint(enter);
				Vector3 pointLocal = Surface.InverseTransformPoint(point);
				Vector2 uv = Triangle.GetUV(pointLocal);
				scratchPosition = Vector2.Scale(TextureSize, uv);
			}
			return scratchPosition;
		}

		public Vector2 GetLocalPosition(Vector2 texturePosition)
		{
			Vector2 textureSize = TextureSize;
			Vector2 bounds = Bounds;
			if (IsOrthographic)
			{
				return (texturePosition - textureSize / 2f) / textureSize * bounds / Surface.lossyScale;
			}
			return (texturePosition - textureSize / 2f) / textureSize * bounds;
		}
	}
}
