using UnityEngine;

public class AttackState : IState
{
    Enemy enemy;
    float attackTime = 2f;
    public void EnterState(BaseCharacter character)
    {
        attackTime = 2f;
    }

    public void UpdateState(BaseCharacter character)
    {

        enemy = character as Enemy;
        if (enemy == null || enemy.playerTarget == null || enemy.isTakeDamage) return;

        Vector2 direction = (enemy.playerTarget.position - enemy.transform.position).normalized;
        enemy.transform.position += (Vector3)direction * ConstantsConfig.Float.CHARACTER_SPEED * Time.deltaTime;
        attackTime -= Time.deltaTime;
        if (attackTime <= 0) enemy.ChangeState(new WanderState());


        if (Vector2.Distance(enemy.transform.position, enemy.playerTarget.position) < enemy.attackRange)
        {
            enemy.playerTarget = null;
            enemy.currentTarget = null;
            enemy.ChangeState(new WanderState());
        }
    }

    public void ExitState(BaseCharacter character) { }
}
