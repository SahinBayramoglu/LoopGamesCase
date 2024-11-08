using UnityEngine;

public interface ISword
{
	void Collect(Transform parent, BaseCharacter character);

	void Drop();

	void PositionSword(float angle, float radius);
}
