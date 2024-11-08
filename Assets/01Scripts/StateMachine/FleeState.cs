using UnityEngine;

public class FleeState : IState

{
    Vector2 fleeDirection;
    Enemy enemy;
    public void EnterState(BaseCharacter character) { }

    public void UpdateState(BaseCharacter character)
    {
        enemy = character as Enemy;
        if (enemy == null || enemy.DamageSource == null) return;

        fleeDirection = (enemy.transform.position - enemy.DamageSource.position).normalized;
        enemy.transform.position += (Vector3)fleeDirection * ConstantsConfig.Float.CHARACTER_SPEED * enemy.fleeSpeedMultiplier * Time.deltaTime;

        if (Vector2.Distance(enemy.transform.position, enemy.DamageSource.position) > enemy.detectionRadius * 2)
            enemy.ChangeState(new WanderState());

    }

    public void ExitState(BaseCharacter character)
    {
        enemy = character as Enemy;
        if (enemy != null)
            enemy.DamageSource = null;

    }
}
