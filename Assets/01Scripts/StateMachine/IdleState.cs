using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IdleState : IState
{
    public void EnterState(BaseCharacter character)
    {
        character.SetWalkingAnimation(false);
    }

    public void ExitState(BaseCharacter character)
    {
    }

    public void UpdateState(BaseCharacter character)
    {
        //Debug.Log("Update State");
        /*        if (character.IsWalking() )
                    character.ChangeState(new WalkingState());
                else
                    character.ChangeState(new IdleState());*/

    }
}