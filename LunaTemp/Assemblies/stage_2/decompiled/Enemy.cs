using UnityEngine;

public class Enemy : BaseCharacter
{
	[Header("Enemy Settings")]
	public float detectionRadius = 5f;

	public float fleeSpeedMultiplier = 2f;

	public float attackRange = 1.5f;

	public Transform playerTarget;

	public Transform currentTarget;

	private float stateTimer = 5f;

	private float timer = 0f;

	protected override void Start()
	{
		base.Start();
		ChangeState(new WanderState());
	}

	protected override void Update()
	{
		base.Update();
		DetectNearbySwordsOrEnemies();
	}

	private void DetectNearbySwordsOrEnemies()
	{
		timer -= Time.deltaTime;
		if (timer <= 0f)
		{
			timer = stateTimer;
			currentTarget = null;
			playerTarget = null;
			base.DamageSource = null;
			ChangeState(new WanderState());
			Debug.Log("ChangeState");
		}
		if (playerTarget != null)
		{
		}
		if (currentTarget != null || playerTarget != null || currentState is FleeState)
		{
			return;
		}
		Collider2D[] hitColliders = Physics2D.OverlapCircleAll(base.transform.position, detectionRadius);
		bool targetFound = false;
		Collider2D[] array = hitColliders;
		foreach (Collider2D hit in array)
		{
			if (hit == collider)
			{
				continue;
			}
			if (hit.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD) && !(currentState is ChaseSwordState))
			{
				currentTarget = hit.transform;
				ChangeState(new ChaseSwordState());
				targetFound = true;
				break;
			}
			if ((hit.CompareTag(ConstantsConfig.Tags.PLAYER) || hit.CompareTag(ConstantsConfig.Tags.ENEMY)) && weaponManager.SwordCount > 0 && !(currentState is AttackState))
			{
				if (Random.Range(0, 5) == 0)
				{
					playerTarget = hit.transform;
					ChangeState(new AttackState());
					targetFound = true;
				}
				break;
			}
		}
		if (!targetFound && !(currentState is WanderState))
		{
			ChangeState(new WanderState());
		}
	}

	public override void TakeDamage(float amount, Vector2 knockBackDirection, Transform damageSource)
	{
		base.TakeDamage(amount, knockBackDirection, damageSource);
		if (!(currentHealth <= 0f) && weaponManager.SwordCount <= 0)
		{
			ChangeState(new FleeState());
		}
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (!isDead)
		{
			if (collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
			{
				collision.tag = ConstantsConfig.Tags.UNTAGGED;
				AddSword(collision.transform.position, collision.gameObject);
			}
			else if (!collision.CompareTag(ConstantsConfig.Tags.ENEMY) && !collision.CompareTag(ConstantsConfig.Tags.ENEMY))
			{
			}
		}
	}
}
