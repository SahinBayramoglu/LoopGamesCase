using UnityEngine;

public class ChaseSwordState : IState
{
	public void EnterState(BaseCharacter character)
	{
	}

	public void UpdateState(BaseCharacter character)
	{
		Enemy enemy = character as Enemy;
		if (!(enemy == null) && !(enemy.currentTarget == null) && !enemy.isTakeDamage)
		{
			Vector2 direction = (enemy.currentTarget.position - enemy.transform.position).normalized;
			enemy.transform.position += (Vector3)direction * enemy.maxMovementSpeed * Time.deltaTime;
			if (Vector2.Distance(enemy.transform.position, enemy.currentTarget.position) < 0.5f)
			{
				enemy.ChangeState(new WanderState());
			}
		}
	}

	public void ExitState(BaseCharacter character)
	{
		Enemy enemy = character as Enemy;
		if (enemy != null)
		{
			enemy.currentTarget = null;
		}
	}
}
