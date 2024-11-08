using UnityEngine;

public class IdleState : IState
{
	public void EnterState(BaseCharacter character)
	{
		character.SetWalkingAnimation(false);
	}

	public void ExitState(BaseCharacter character)
	{
		Debug.Log("Exit IDLE State");
	}

	public void UpdateState(BaseCharacter character)
	{
	}
}
