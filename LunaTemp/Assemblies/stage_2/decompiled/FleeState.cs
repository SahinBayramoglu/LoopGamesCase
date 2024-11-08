using UnityEngine;

public class FleeState : IState
{
	private Vector2 fleeDirection;

	private Enemy enemy;

	public void EnterState(BaseCharacter character)
	{
	}

	public void UpdateState(BaseCharacter character)
	{
		enemy = character as Enemy;
		Debug.Log("Flee Mode enemy.DamageSource : " + enemy.DamageSource, character.gameObject);
		if (!(enemy == null) && !(enemy.DamageSource == null))
		{
			fleeDirection = (enemy.transform.position - enemy.DamageSource.position).normalized;
			enemy.transform.position += (Vector3)fleeDirection * enemy.maxMovementSpeed * enemy.fleeSpeedMultiplier * Time.deltaTime;
			if (Vector2.Distance(enemy.transform.position, enemy.DamageSource.position) > enemy.detectionRadius * 2f)
			{
				enemy.ChangeState(new WanderState());
			}
		}
	}

	public void ExitState(BaseCharacter character)
	{
		enemy = character as Enemy;
		if (enemy != null)
		{
			enemy.DamageSource = null;
		}
	}
}
