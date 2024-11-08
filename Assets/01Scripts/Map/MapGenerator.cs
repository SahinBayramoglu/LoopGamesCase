using UnityEngine;

public class MapGenerator : MonoBehaviour
{
    public GameObject groundTile;
    public GameObject[] decorationTiles;
    private GameObject parentObject;


    public void GenerateMap(int mapWidth, int mapHeight)
    {
        parentObject ??= new GameObject("MapTiles");
        SpriteRenderer groundRenderer = groundTile.GetComponent<SpriteRenderer>();
        float tileSizeX = groundRenderer.bounds.size.x;
        float tileSizeY = groundRenderer.bounds.size.y;

        Vector3 cameraCenter = Camera.main.transform.position;
        float startX = cameraCenter.x - (mapWidth * tileSizeX) / 2f;
        float startY = cameraCenter.y - (mapHeight * tileSizeY) / 2f;

        for (int x = 0; x < mapWidth; x++)
        {
            for (int y = 0; y < mapHeight; y++)
            {
                GameObject tilePrefab = SelectTilePrefab();
                Vector3 tilePosition = new Vector3(startX + x * tileSizeX, startY + y * tileSizeY, 0);
                GameObject tile = Instantiate(tilePrefab, tilePosition, Quaternion.identity);
                tile.transform.parent = parentObject.transform;
            }
        }
    }

    GameObject SelectTilePrefab()
    {
        float randomValue = Random.Range(0f, 1f);

        if (randomValue < 0.8f)
        {
            return groundTile;
        }
        else
        {
            int decorationIndex = Random.Range(0, decorationTiles.Length);
            return decorationTiles[decorationIndex];
        }
    }

}
