using UnityEngine;

public class WalkingState : IState
{
	private Vector2 movementDirection;

	private Vector2 previousPosition;

	public void EnterState(BaseCharacter character)
	{
		character.SetWalkingAnimation(true);
	}

	public void ExitState(BaseCharacter character)
	{
		Debug.Log("Exit State");
	}

	public void UpdateState(BaseCharacter character)
	{
		if (previousPosition == Vector2.zero)
		{
			previousPosition = character.transform.position;
		}
		movementDirection = (Vector2)character.transform.position - previousPosition;
		character.Flip(movementDirection.x < 0f);
	}
}
