using System.Collections.Generic;
using UnityEngine;

public class ObjectPool : MonoBehaviour
{
	public static ObjectPool Instance;

	public GameObject swordPrefab;

	public Transform swordParent;

	public int initialPoolSize = 10;

	private List<GameObject> swordPool;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
			InitializePool();
		}
		else
		{
			Object.Destroy(base.gameObject);
		}
	}

	private void InitializePool()
	{
		swordPool = new List<GameObject>();
		initialPoolSize = ConstantsConfig.Int.SWORD_SPAWN_SIZE;
		for (int i = 0; i < initialPoolSize; i++)
		{
			GameObject sword = Object.Instantiate(swordPrefab);
			sword.SetActive(false);
			sword.transform.SetParent(swordParent, false);
			swordPool.Add(sword);
		}
	}

	public GameObject GetSword()
	{
		foreach (GameObject sword in swordPool)
		{
			if (!sword.activeInHierarchy)
			{
				sword.SetActive(true);
				return sword;
			}
		}
		GameObject newSword = Object.Instantiate(swordPrefab);
		newSword.SetActive(true);
		swordPool.Add(newSword);
		return newSword;
	}

	public void ReturnSword(GameObject sword)
	{
		sword.SetActive(false);
		sword.transform.SetParent(swordParent, false);
	}
}
