using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IDragHandler, IPointerUpHandler, IPointerDownHandler
{
    [SerializeField] private RectTransform joystickBackground;
    [SerializeField] private RectTransform joystickHandle;
    private Vector2 inputVector;


    public void OnPointerDown(PointerEventData eventData)
    {
        OnDrag(eventData);
    }


    public void OnDrag(PointerEventData eventData)
    {
        Vector2 position;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            joystickBackground,
            eventData.position,
            eventData.pressEventCamera,
            out position
        );

        position = Vector2.ClampMagnitude(position, joystickBackground.sizeDelta.x / 2);
        joystickHandle.anchoredPosition = position;

        inputVector = new Vector2(
            position.x / (joystickBackground.sizeDelta.x / 2),
            position.y / (joystickBackground.sizeDelta.y / 2)
        );
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
