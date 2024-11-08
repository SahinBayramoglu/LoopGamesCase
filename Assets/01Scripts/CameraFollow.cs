using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Camera mainCamera;
    public Transform target; 
    public float smoothSpeed = 0.125f;
    public Vector3 offset; 

    [Header("Shake Process")]
    public float shakeDuration = 0.5f;
    public float shakeMagnitude = 0.2f;
    public float dampingSpeed = 1.0f;

    private Vector3 initialPosition;
    private float shakeTimeRemaining;
    private void Start()
    {
        mainCamera = Camera.main;
        offset = transform.position - target.position;
        initialPosition = transform.localPosition;
    }
    private void LateUpdate()
    {
        if (target == null) return;
        TargetFollow();
        CameraShake();
    }

    private void TargetFollow()
    {
        Vector3 desiredPosition = target.position + offset;
        Vector3 smoothedPosition = Vector3.Lerp(transform.position, desiredPosition, smoothSpeed);
        transform.position = smoothedPosition;
    }

    public void CameraShake()
    {
        if (shakeTimeRemaining > 0)
        {
            Vector3 shakePosition = initialPosition + Random.insideUnitSphere * shakeMagnitude;
            mainCamera.transform.localPosition = new Vector3(shakePosition.x, shakePosition.y, initialPosition.z);
            shakeTimeRemaining -= Time.deltaTime * dampingSpeed;
        }
        else
        {
            shakeTimeRemaining = 0f;
            mainCamera.transform.localPosition = initialPosition;
        }
    }

    public void Shake()
    {
        shakeTimeRemaining = shakeDuration;
    }

}
