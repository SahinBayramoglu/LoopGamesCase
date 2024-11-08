using UnityEngine;

public class AttackState : IState
{
	private Enemy enemy;

	private float attackTime = 2f;

	public void EnterState(BaseCharacter character)
	{
		attackTime = 2f;
	}

	public void UpdateState(BaseCharacter character)
	{
		enemy = character as Enemy;
		if (!(enemy == null) && !(enemy.playerTarget == null) && !enemy.isTakeDamage)
		{
			Vector2 direction = (enemy.playerTarget.position - enemy.transform.position).normalized;
			enemy.transform.position += (Vector3)direction * enemy.maxMovementSpeed * Time.deltaTime;
			attackTime -= Time.deltaTime;
			if (attackTime <= 0f)
			{
				enemy.ChangeState(new WanderState());
			}
			if (Vector2.Distance(enemy.transform.position, enemy.playerTarget.position) < enemy.attackRange)
			{
				enemy.playerTarget = null;
				enemy.currentTarget = null;
				enemy.ChangeState(new WanderState());
			}
		}
	}

	public void ExitState(BaseCharacter character)
	{
	}
}
