
using UnityEngine;
public interface IWeapon
{
    BaseCharacter Owner { get; set; }
    AudioSource AudioSource { get; set; }
    void OnHit(IDamageable target,Vector2 directionImpact);
}
