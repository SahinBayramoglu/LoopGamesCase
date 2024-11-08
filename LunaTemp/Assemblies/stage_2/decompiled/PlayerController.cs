using UnityEngine;

public class PlayerController : MonoBehaviour
{
	public float moveSpeed = 5f;

	private Vector2 touchStartPos;

	private Vector2 targetPosition;

	private bool isTouching = false;

	private void Update()
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
				targetPosition = (Vector2)base.transform.position + direction * moveSpeed * Time.deltaTime;
			}
			else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
			{
				isTouching = false;
			}
		}
		base.transform.position = Vector2.MoveTowards(base.transform.position, targetPosition, moveSpeed * Time.deltaTime);
	}
}
