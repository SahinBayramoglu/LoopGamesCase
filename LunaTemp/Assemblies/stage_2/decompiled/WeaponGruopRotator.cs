using UnityEngine;

public class WeaponGruopRotator : MonoBehaviour
{
	private float _baseSpeed = 100f;

	private float rotateSpeed = 100f;

	public float RotateSpeed
	{
		get
		{
			return rotateSpeed;
		}
		set
		{
			rotateSpeed = value;
		}
	}

	private void Update()
	{
		if (base.transform.childCount > 0)
		{
			base.transform.Rotate(Vector3.forward, (_baseSpeed + rotateSpeed) * Time.deltaTime * -1f);
		}
	}

	public void SetRotateSpeed(float factor)
	{
		RotateSpeed = 50f * (factor / 3f);
	}
}
