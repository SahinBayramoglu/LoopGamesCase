using UnityEngine;

public interface IWeapon
{
	BaseCharacter Owner { get; set; }

	void OnHit(IDamageable target, Vector2 directionImpact);
}
