using UnityEngine;

namespace ScratchCardAsset.Core.ScratchData
{
	public class MeshRendererData : BaseData
	{
		private readonly MeshRenderer renderer;

		private readonly MeshFilter filter;

		protected override Vector2 Bounds
		{
			get
			{
				if (filter != null)
				{
					return filter.sharedMesh.bounds.size;
				}
				Bounds bounds = renderer.bounds;
				Vector3 localSize = renderer.transform.InverseTransformVector(bounds.size);
				return new Vector2(localSize.x, localSize.y);
			}
		}

		public override Vector2 TextureSize { get; }

		public MeshRendererData(Transform surface, Camera camera)
			: base(surface, camera)
		{
			if (surface.TryGetComponent<MeshRenderer>(out renderer) && surface.TryGetComponent<MeshFilter>(out filter))
			{
				InitTriangle();
				Material sharedMaterial = renderer.sharedMaterial;
				Vector4 offset = sharedMaterial.GetVector(Constants.MaskShader.Offset);
				TextureSize = new Vector2((float)sharedMaterial.mainTexture.width * offset.z, (float)sharedMaterial.mainTexture.height * offset.w);
			}
		}
	}
}
