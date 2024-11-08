using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class WeaponManager : MonoBehaviour
{
    [SerializeField] private WeaponGruopRotator _weaponGruopRotator;
    public GameObject swordPrefab;
    public Transform character;
    public float radius = 1.5f;
    [SerializeField] private Transform weaponParent;
    private List<GameObject> swords = new List<GameObject>();

    public GameObject CollectSword()
    {
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
            Vector2 knockbackPosition = weaponParent.position - swordPrefab.transform.position;
            swordPrefab.transform.parent = null;
            swordPrefab.transform.DORotate(new Vector3(0, 360, 0), Random.Range(0.25f, 0.5f) / 2)
        .SetEase(Ease.Linear)
        .SetLoops(-1, LoopType.Incremental);
            swordPrefab.transform.DOMove((Vector2)swordPrefab.transform.position + knockbackPosition.normalized * Random.Range(0.75f, 1.5f), Random.Range(0.25f, 0.5f)).SetEase(Ease.OutQuint).OnComplete(() =>
            {
                ObjectPool.Instance.ReturnSword(swordPrefab);
            });
            PositionSwords();
        }
    }
    private void PositionSwords()
    {
        int count = swords.Count;
        if (count == 0) return;

        float angleStep = 360f / count;

        for (int i = 0; i < count; i++)
        {
            float angle = i * angleStep;
            Vector3 position = new Vector3(Mathf.Cos(angle * Mathf.Deg2Rad), Mathf.Sin(angle * Mathf.Deg2Rad), 0) * radius;
            swords[i].transform.DOLocalMove(position, 0.3f).SetEase(Ease.OutCubic);
            swords[i].transform.DOLocalRotate(new Vector3(0, 0, angle), 0.3f).SetEase(Ease.OutCubic);

            if (swords[i].transform.localScale == Vector3.zero)
                swords[i].transform.DOScale(Vector3.one, 0.3f).SetEase(Ease.OutBack);

        }
    }
    public int SwordCount => swords.Count;
}