using UnityEngine;

namespace ScratchCardAsset.Core.ScratchData
{
    public class SpriteRendererData : BaseData
    {
        private readonly SpriteRenderer renderer;

        public override Vector2 TextureSize => renderer.sprite.rect.size;
        /* protected override Vector2 Bounds =>
 #if UNITY_2021_2_OR_NEWER
             renderer.localBounds.size;
 #else
             renderer.bounds.size;
 #endif*/

        public SpriteRendererData(Transform surface, Camera camera) : base(surface, camera)
        {
            if (surface.TryGetComponent(out renderer))
            {
                InitTriangle();
            }
        }

        protected override Vector2 Bounds
        {
            get
            {
                if (Application.unityVersion.StartsWith("2021.2") || Application.unityVersion.CompareTo("2021.2") > 0)
                {
                    /*Vector2 size = renderer.bounds.size;
                    size.x *= renderer.transform.localScale.x;
                    size.y *= renderer.transform.localScale.y;*/
                    Bounds bounds = renderer.bounds;

                    // Yerel koordinatlara d�n��t�rmek i�in (opsiyonel)
                    Vector3 localSize = renderer.transform.InverseTransformVector(bounds.size);

                    // Sadece 2D boyutunu almak i�in Vector2'ye d�n��t�r
                    Vector2 size = new Vector2(localSize.x, localSize.y);
                    return size;
                }
                else
                {
                    Vector2 size = renderer.bounds.size;
                    return size;
                }
            }

        }
    }
}