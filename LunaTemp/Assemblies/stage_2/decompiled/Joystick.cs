using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IDragHandler, IEventSystemHandler, IPointerUpHandler, IPointerDownHandler
{
	[SerializeField]
	private RectTransform joystickBackground;

	[SerializeField]
	private RectTransform joystickHandle;

	private Vector2 inputVector;

	public void OnPointerDown(PointerEventData eventData)
	{
		OnDrag(eventData);
	}

	public void OnDrag(PointerEventData eventData)
	{
		RectTransformUtility.ScreenPointToLocalPointInRectangle(joystickBackground, eventData.position, eventData.pressEventCamera, out var position);
		position = Vector2.ClampMagnitude(position, joystickBackground.sizeDelta.x / 2f);
		joystickHandle.anchoredPosition = position;
		inputVector = new Vector2(position.x / (joystickBackground.sizeDelta.x / 2f), position.y / (joystickBackground.sizeDelta.y / 2f));
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		inputVector = Vector2.zero;
		joystickHandle.anchoredPosition = Vector2.zero;
	}

	public float Horizontal()
	{
		return inputVector.x;
	}

	public float Vertical()
	{
		return inputVector.y;
	}

	public Vector2 Direction()
	{
		return inputVector;
	}
}
