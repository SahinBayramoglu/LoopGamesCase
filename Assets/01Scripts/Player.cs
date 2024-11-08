using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Player : BaseCharacter
{
    [Header("References")]
    [SerializeField] private SpriteRenderer spriteRenderer;

    [Header("Movement")]
    private Vector2 touchStartPos;
    private Vector2 targetPosition;
    private bool isTouching = false;


    protected override void Start()
    {
        base.Start();
    }

    public override void TakeDamage(float amount, Vector2 knockBackDirection, Transform damageSource)
    {
        base.TakeDamage(amount, knockBackDirection, damageSource);

        if (currentHealth <= 0) return;
        GameController.Instance.CameraShake();
        if (weaponManager.SwordCount <= 0)
            Die();

    }
    private void Die()
    {
    }

    protected override void Update()
    {
        base.Update();
        Movement();

    }

    private void Movement()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);

            if (touch.phase == TouchPhase.Began)
            {
                touchStartPos = touch.position;
                isTouching = true;
            }
            else if (touch.phase == TouchPhase.Moved && isTouching)
            {
                Vector2 touchCurrentPos = touch.position;
                Vector2 direction = (touchCurrentPos - touchStartPos).normalized;
                targetPosition = (Vector2)transform.position + direction * ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime;
            }
            else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
            {
                isTouching = false;
            }
        }
#if UNITY_EDITOR || UNITY_STANDALONE

        if (Input.GetMouseButtonDown(0))
        {
            touchStartPos = Input.mousePosition;
            isTouching = true;
        }
        else if (Input.GetMouseButton(0) && isTouching)
        {
            Vector2 currentMousePosition = Input.mousePosition;
            Vector2 direction = (currentMousePosition - touchStartPos).normalized;
            targetPosition = (Vector2)transform.position + direction * ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime;
            if (direction.x != 0)
                Flip(direction.x < 0);
        }
        else if (Input.GetMouseButtonUp(0))
        {
            isTouching = false;
        }
#else
        
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);

            if (touch.phase == TouchPhase.Began)
            {
                touchStartPos = touch.position;
                isTouching = true;
            }
            else if (touch.phase == TouchPhase.Moved && isTouching)
            {
                Vector2 touchCurrentPos = touch.position;
                Vector2 direction = (touchCurrentPos - touchStartPos).normalized;
                targetPosition = (Vector2)transform.position + direction * ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime;
            }
            else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
            {
                isTouching = false;
            }
        }
#endif
        if (isTouching)
            ChangeState(new WalkingState());
        else
            ChangeState(new IdleState());
        transform.position = Vector2.MoveTowards(transform.position, targetPosition, ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime);


    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDead) return;
        if (collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
        {
            collision.tag = ConstantsConfig.Tags.UNTAGGED;
            AddSword(collision.transform.position, collision.gameObject);
        }
    }
}