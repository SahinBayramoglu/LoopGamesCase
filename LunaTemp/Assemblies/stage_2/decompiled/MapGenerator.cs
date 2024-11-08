using UnityEngine;

public class MapGenerator : MonoBehaviour
{
	public GameObject groundTile;

	public GameObject[] decorationTiles;

	private GameObject parentObject;

	private void Start()
	{
	}

	public void GenerateMap(int mapWidth, int mapHeight)
	{
		if ((object)parentObject == null)
		{
			parentObject = new GameObject("MapTiles");
		}
		SpriteRenderer groundRenderer = groundTile.GetComponent<SpriteRenderer>();
		float tileSizeX = groundRenderer.bounds.size.x;
		float tileSizeY = groundRenderer.bounds.size.y;
		Vector3 cameraCenter = Camera.main.transform.position;
		float startX = cameraCenter.x - (float)mapWidth * tileSizeX / 2f;
		float startY = cameraCenter.y - (float)mapHeight * tileSizeY / 2f;
		for (int x = 0; x < mapWidth; x++)
		{
			for (int y = 0; y < mapHeight; y++)
			{
				GameObject tilePrefab = SelectTilePrefab();
				Vector3 tilePosition = new Vector3(startX + (float)x * tileSizeX, startY + (float)y * tileSizeY, 0f);
				GameObject tile = Object.Instantiate(tilePrefab, tilePosition, Quaternion.identity);
				tile.transform.parent = parentObject.transform;
			}
		}
	}

	private GameObject SelectTilePrefab()
	{
		float randomValue = Random.Range(0f, 1f);
		if (randomValue < 0.8f)
		{
			return groundTile;
		}
		int decorationIndex = Random.Range(0, decorationTiles.Length);
		return decorationTiles[decorationIndex];
	}
}
