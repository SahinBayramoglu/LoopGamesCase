using UnityEngine;

public interface IDamageable
{
	void TakeDamage(float amount, Vector2 directionImpact, Transform damageSource);
}
