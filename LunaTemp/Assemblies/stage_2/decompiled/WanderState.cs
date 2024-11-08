using UnityEngine;

public class WanderState : IState
{
	private Vector2 wanderTarget;

	public void EnterState(BaseCharacter character)
	{
		SetRandomTarget(character);
	}

	public void UpdateState(BaseCharacter character)
	{
		Enemy enemy = character as Enemy;
		if (!(enemy == null) && !enemy.isTakeDamage)
		{
			Vector2 direction = (wanderTarget - (Vector2)enemy.transform.position).normalized;
			enemy.transform.position += (Vector3)direction * enemy.maxMovementSpeed * Time.deltaTime;
			if (Vector2.Distance(enemy.transform.position, wanderTarget) < 1f)
			{
				SetRandomTarget(enemy);
			}
		}
	}

	public void ExitState(BaseCharacter character)
	{
	}

	private void SetRandomTarget(BaseCharacter character)
	{
		float mapWidth = GameController.Instance.mapWidth - 3;
		float mapHeight = GameController.Instance.mapHeight - 3;
		wanderTarget = new Vector2(Random.Range(0f - mapWidth, mapWidth), Random.Range(0f - mapHeight, mapHeight));
	}
}