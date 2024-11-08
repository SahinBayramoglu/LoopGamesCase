using ScratchCardAsset;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public static GameController Instance { get; private set; }

    [Header("References")]
    [SerializeField] private ScratchCardManager cardManager;
    [SerializeField] private MapGenerator mapGenerator;
    [SerializeField] private FenceGenerator fenceGenerator;
    [SerializeField] private CameraFollow cameraFollow;




    [Header("Collectable")]
    [SerializeField] private GameObject collectableSword;
    public int minItemsPerGroup = 1;
    public int maxItemsPerGroup = 5;
    public int numberOfGroups = 10;
    public float groupRadius = 2f;
    public float cellSize = 1.0f;
    public int numberOfCollectables = 40;
    private HashSet<Vector2> occupiedCells = new HashSet<Vector2>();
    private GameObject collectableParent;

    [Header("Map")]
    public int mapWidth;
    public int mapHeight;

    [Header("ScracthCard Process")]
    public List<Transform> cursorTransforms = new List<Transform>();

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;

    }
    void Start()
    {
        mapGenerator.GenerateMap(mapWidth + 5, mapHeight + 5);
        fenceGenerator.GenerateFences(mapWidth, mapHeight);
        SpawnCollectables();
    }


    void Update()
    {
        Scratch();
        if (Input.GetKeyDown(KeyCode.Space))
        {
            CameraShake();
        }
    }
    #region Camera Process

    public void CameraShake()
    {
        cameraFollow.Shake();
    }

    #endregion
    #region Collectable
    void SpawnCollectables()
    {
        collectableParent ??= new GameObject("Collectables");
        int spawnedCount = 0;

        while (spawnedCount < numberOfCollectables)
        {
            // Rastgele bir hücre seç
            int randomX = Random.Range(-mapWidth / 2, mapWidth / 2);
            int randomY = Random.Range(-mapHeight / 2, mapHeight / 2);

            // Hücrenin gerçek dünya pozisyonunu hesapla
            Vector2 cellPosition = new Vector2(randomX * cellSize, randomY * cellSize);

            // Hücre dolu deðilse, buraya eþya oluþtur
            if (!occupiedCells.Contains(cellPosition))
            {
                Instantiate(collectableSword, cellPosition, Quaternion.identity);
                occupiedCells.Add(cellPosition); // Hücreyi dolu olarak iþaretle
                spawnedCount++;
            }
        }
    }
    #endregion
    #region Scratch
    private void Scratch()
    {
        for (int i = 0; i < cursorTransforms.Count; i++)
        {
            try
            {
                var position = cardManager.MainCamera.WorldToScreenPoint(cursorTransforms[i].position + new Vector3(0, -0.5f, 0));
                cardManager.Card.Input.Scratch(i, position);
            }
            catch (System.Exception)
            {

                Debug.Log("Scratch Error ");
            }

        }
    }

    public void AddCursorTransform(Transform scratchTransform)
    {
        if (!cursorTransforms.Contains(scratchTransform)) cursorTransforms.Add(scratchTransform);
    }

    public void RemoveCursorTransform(Transform scratchTransform)
    {
        if (cursorTransforms.Contains(scratchTransform)) cursorTransforms.Remove(scratchTransform);
    }
    #endregion
}
