using UnityEngine;

public class WeaponGruopRotator : MonoBehaviour
{
    private float _baseSpeed = 100f;
    private float rotateSpeed = 100f;
    public float RotateSpeed { get => rotateSpeed; set => rotateSpeed = value; }

    void Update()
    {
        if (transform.childCount > 0)
            transform.Rotate(Vector3.forward, (_baseSpeed + rotateSpeed) * Time.deltaTime * -1);
    }

    public void SetRotateSpeed(float factor)
    {
        RotateSpeed = 50 * (factor / 3f);
    }
}
