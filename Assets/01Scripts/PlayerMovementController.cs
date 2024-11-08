using UnityEngine;

public class PlayerMovementController : MonoBehaviour
{
    public Joystick joystick;
    public float maxSpeed = 5f;
    [SerializeField] private SpriteRenderer spriteRenderer;

    public WeaponManager weaponManager;

    private void Start()
    {

    }

    private void Update()
    {
        Vector2 direction = joystick.Direction();
        float distance = direction.magnitude; 
        Vector2 move = direction.normalized;

        float currentSpeed = maxSpeed * distance;
        transform.position = Vector2.Lerp(transform.position, (Vector2)transform.position + move, currentSpeed * Time.deltaTime);


        if (move.x != 0)
        {
            spriteRenderer.flipX = move.x < 0;
        }


        
    }
}
