using UnityEngine;

namespace ScratchCardAsset.Tools
{
	public static class MeshGenerator
	{
		public static Mesh GenerateQuad(Vector3 size, Vector3 offset)
		{
			Mesh mesh = new Mesh();
			mesh.vertices = new Vector3[4]
			{
				new Vector3(0f, 1f * size.y, 0f) - offset,
				new Vector3(1f * size.x, 1f * size.y, 0f) - offset,
				new Vector3(1f * size.x, 0f, 0f) - offset,
				new Vector3(0f, 0f, 0f) - offset
			};
			mesh.uv = new Vector2[4]
			{
				new Vector2(0f, 1f),
				new Vector2(1f, 1f),
				new Vector2(1f, 0f),
				new Vector2(0f, 0f)
			};
			mesh.triangles = new int[6] { 0, 1, 2, 2, 3, 0 };
			mesh.colors = new Color[4]
			{
				Color.white,
				Color.white,
				Color.white,
				Color.white
			};
			return mesh;
		}
	}
}
