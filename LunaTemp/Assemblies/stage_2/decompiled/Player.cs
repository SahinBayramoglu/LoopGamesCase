using UnityEngine;

public class Player : BaseCharacter
{
	public Joystick joystick;

	[SerializeField]
	private SpriteRenderer spriteRenderer;

	public float joystickDeadZone = 0.2f;

	private Vector2 joystickCenter;

	public float centerFollowSpeed = 0.1f;

	public float smoothingFactor = 0.1f;

	private Vector2 moveDirection;

	private bool isDragging = false;

	private Vector2 touchStartPos;

	private Vector2 targetPosition;

	private bool isTouching = false;

	protected override void Start()
	{
		base.Start();
	}

	private void HandleInput()
	{
		if (Input.GetMouseButtonDown(0))
		{
			joystickCenter = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			isDragging = true;
		}
		else if (Input.GetMouseButtonUp(0))
		{
			isDragging = false;
			moveDirection = Vector2.zero;
		}
		else if (Input.GetMouseButton(0) && isDragging)
		{
			Vector2 currentTouchPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			Vector2 direction = currentTouchPosition - joystickCenter;
			if (direction.magnitude > joystickDeadZone)
			{
				Vector2 targetDirection = direction.normalized;
				moveDirection = Vector2.Lerp(moveDirection, targetDirection, smoothingFactor);
				joystickCenter = Vector2.Lerp(joystickCenter, currentTouchPosition, centerFollowSpeed);
			}
		}
	}

	private void MoveCharacter()
	{
		if (moveDirection != Vector2.zero)
		{
			base.transform.Translate(moveDirection * 5f * Time.deltaTime, Space.World);
		}
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
				targetPosition = (Vector2)base.transform.position + direction * 5f * Time.deltaTime;
			}
			else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
			{
				isTouching = false;
			}
		}
		base.transform.position = Vector2.MoveTowards(base.transform.position, targetPosition, ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime);
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (!isDead && collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
		{
			collision.tag = ConstantsConfig.Tags.UNTAGGED;
			AddSword(collision.transform.position, collision.gameObject);
		}
	}
}
