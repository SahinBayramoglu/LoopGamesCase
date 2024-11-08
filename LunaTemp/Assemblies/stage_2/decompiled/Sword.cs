using System.Collections;
using UnityEngine;

public class Sword : MonoBehaviour, IWeapon
{
	[SerializeField]
	private bool isAttackActive = false;

	public BaseCharacter Owner { get; set; }

	public void OnHit(IDamageable target, Vector2 knockBackDirection)
	{
		target.TakeDamage(ConstantsConfig.Int.SWORD_DAMAGE, knockBackDirection, Owner.transform);
	}

	private void Start()
	{
		isAttackActive = true;
	}

	private void OnEnable()
	{
		StartCoroutine(Init());
		GameController.Instance.AddCursorTransform(base.transform.GetChild(0));
	}

	private void OnDisable()
	{
		GameController.Instance.RemoveCursorTransform(base.transform.GetChild(0));
	}

	private IEnumerator Init()
	{
		yield return new WaitForSeconds(0.1f);
		isAttackActive = true;
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (!isAttackActive)
		{
			return;
		}
		Debug.Log("Collision " + collision.name, collision.gameObject);
		if (collision.CompareTag(ConstantsConfig.Tags.SWORD) && Owner != collision.GetComponent<Sword>().Owner)
		{
			Sword collisionSword = collision.GetComponent<Sword>();
			if (Owner != collisionSword.Owner)
			{
				isAttackActive = false;
				Owner.RemoveSword(base.gameObject);
			}
			Debug.Log("Collision 1 " + collision.name, collision.gameObject);
		}
		else if (collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
		{
			collision.tag = ConstantsConfig.Tags.UNTAGGED;
			Owner.AddSword(collision.transform.position, collision.gameObject);
			Debug.Log("Collision 2 " + collision.name, collision.gameObject);
		}
		else
		{
			IDamageable target = collision.GetComponent<IDamageable>();
			if (target != null && !target.Equals(Owner))
			{
				Debug.Log("Collision 3 " + collision.name, collision.gameObject);
				OnHit(target, ((Vector2)(collision.transform.position - Owner.transform.position)).normalized);
			}
		}
	}
}
