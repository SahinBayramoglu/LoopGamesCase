using System;
using System.Collections.Generic;
using ScratchCardAsset;
using UnityEngine;

public class GameController : MonoBehaviour
{
	[Header("References")]
	[SerializeField]
	private ScratchCardManager cardManager;

	[SerializeField]
	private MapGenerator mapGenerator;

	[SerializeField]
	private FenceGenerator fenceGenerator;

	[Header("Collectable")]
	[SerializeField]
	private GameObject collectableSword;

	public int minItemsPerGroup = 1;

	public int maxItemsPerGroup = 5;

	public int numberOfGroups = 10;

	public float groupRadius = 2f;

	public float cellSize = 1f;

	public int numberOfCollectables = 40;

	private HashSet<Vector2> occupiedCells = new HashSet<Vector2>();

	private GameObject collectableParent;

	[Header("Map")]
	public int mapWidth;

	public int mapHeight;

	[Header("ScracthCard Process")]
	public List<Transform> cursorTransforms = new List<Transform>();

	public static GameController Instance { get; private set; }

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void Start()
	{
		mapGenerator.GenerateMap(mapWidth + 5, mapHeight + 5);
		fenceGenerator.GenerateFences(mapWidth, mapHeight);
		SpawnCollectables();
	}

	private void Update()
	{
		Scratch();
	}

	private void SpawnCollectables()
	{
		if ((object)collectableParent == null)
		{
			collectableParent = new GameObject("Collectables");
		}
		int spawnedCount = 0;
		while (spawnedCount < numberOfCollectables)
		{
			int randomX = UnityEngine.Random.Range(-mapWidth / 2, mapWidth / 2);
			int randomY = UnityEngine.Random.Range(-mapHeight / 2, mapHeight / 2);
			Vector2 cellPosition = new Vector2((float)randomX * cellSize, (float)randomY * cellSize);
			if (!occupiedCells.Contains(cellPosition))
			{
				UnityEngine.Object.Instantiate(collectableSword, cellPosition, Quaternion.identity);
				occupiedCells.Add(cellPosition);
				spawnedCount++;
			}
		}
	}

	private void Scratch()
	{
		for (int i = 0; i < cursorTransforms.Count; i++)
		{
			try
			{
				Vector3 position = cardManager.MainCamera.WorldToScreenPoint(cursorTransforms[i].position + new Vector3(0f, -0.5f, 0f));
				cardManager.Card.Input.Scratch(i, position);
			}
			catch (Exception)
			{
				Debug.Log("Scratch Error ");
			}
		}
	}

	public void AddCursorTransform(Transform scratchTransform)
	{
		if (!cursorTransforms.Contains(scratchTransform))
		{
			cursorTransforms.Add(scratchTransform);
		}
	}

	public void RemoveCursorTransform(Transform scratchTransform)
	{
		if (cursorTransforms.Contains(scratchTransform))
		{
			cursorTransforms.Remove(scratchTransform);
		}
	}
}
