using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class WeaponManager : MonoBehaviour
{
	[SerializeField]
	private WeaponGruopRotator _weaponGruopRotator;

	public GameObject swordPrefab;

	public Transform character;

	public float radius = 1.5f;

	[SerializeField]
	private Transform weaponParent;

	private List<GameObject> swords = new List<GameObject>();

	public int SwordCount => swords.Count;

	private void Start()
	{
	}

	public GameObject CollectSword()
	{
		Debug.Log("Collect ");
		GameObject newSword = ObjectPool.Instance.GetSword();
		newSword.transform.parent = weaponParent;
		swords.Add(newSword);
		PositionSwords();
		return newSword;
	}

	public void DropSword(GameObject swordPrefab)
	{
		if (swords.Count > 0)
		{
			swords.Remove(swordPrefab);
			ObjectPool.Instance.ReturnSword(swordPrefab);
			PositionSwords();
		}
	}

	private void PositionSwords()
	{
		int count = swords.Count;
		if (count == 0)
		{
			return;
		}
		float angleStep = 360f / (float)count;
		for (int i = 0; i < count; i++)
		{
			float angle = (float)i * angleStep;
			Vector3 position = new Vector3(Mathf.Cos(angle * (3.14159265f / 180f)), Mathf.Sin(angle * (3.14159265f / 180f)), 0f) * radius;
			swords[i].transform.DOLocalMove(position, 0.3f).SetEase(Ease.OutCubic);
			swords[i].transform.DOLocalRotate(new Vector3(0f, 0f, angle), 0.3f).SetEase(Ease.OutCubic);
			if (swords[i].transform.localScale == Vector3.zero)
			{
				swords[i].transform.DOScale(Vector3.one, 0.3f).SetEase(Ease.OutBack);
			}
		}
	}

	private void FillGap(int startIndex)
	{
		if (swords.Count != 0)
		{
			float angleStep = 360f / (float)swords.Count;
			for (int i = startIndex; i < swords.Count; i++)
			{
				float angle = (float)i * angleStep;
				Vector3 position = new Vector3(Mathf.Cos(angle * (3.14159265f / 180f)), Mathf.Sin(angle * (3.14159265f / 180f)), 0f) * radius;
				swords[i].transform.DOLocalMove(position, 0.3f).SetEase(Ease.OutCubic);
				swords[i].transform.DOLocalRotate(new Vector3(0f, 0f, angle), 0.3f).SetEase(Ease.OutCubic);
			}
		}
	}

	private void FillGap()
	{
		if (SwordCount == 0)
		{
			return;
		}
		float angleStep = 360f / (float)SwordCount;
		for (int i = 0; i < SwordCount; i++)
		{
			float angle = (float)i * angleStep;
			Vector3 position = new Vector3(Mathf.Cos(angle * (3.14159265f / 180f)), Mathf.Sin(angle * (3.14159265f / 180f)), 0f) * radius;
			swords[i].transform.DOLocalMove(position, 0.3f).SetEase(Ease.OutCubic);
			swords[i].transform.DOLocalRotate(new Vector3(0f, 0f, angle), 0.3f).SetEase(Ease.OutCubic);
			if (swords[i].transform.localScale == Vector3.zero)
			{
				swords[i].transform.DOScale(Vector3.one, 0.3f).SetEase(Ease.OutBack);
			}
		}
	}
}
