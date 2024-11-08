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
                else
                {
                    Bounds bounds = renderer.bounds;

                    Vector3 localSize = renderer.transform.InverseTransformVector(bounds.size);
                    Vector2 size = new Vector2(localSize.x, localSize.y);
                    return size;
                }
            }
        }
        public override Vector2 TextureSize { get; }
        /*protected override Vector2 Bounds => filter != null ? filter.sharedMesh.bounds.size : 
#if UNITY_2021_2_OR_NEWER
            renderer.localBounds.size;
#else
            renderer.bounds.size;
#endif*/

        public MeshRendererData(Transform surface, Camera camera) : base(surface, camera)
        {
            if (surface.TryGetComponent(out renderer) && surface.TryGetComponent(out filter))
            {
                InitTriangle();
                var sharedMaterial = renderer.sharedMaterial;
                var offset = sharedMaterial.GetVector(Constants.MaskShader.Offset);
                TextureSize = new Vector2(sharedMaterial.mainTexture.width * offset.z, sharedMaterial.mainTexture.height * offset.w);
            }
        }
    }


}