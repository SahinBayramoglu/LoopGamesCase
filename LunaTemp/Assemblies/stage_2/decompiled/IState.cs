public interface IState
{
	void EnterState(BaseCharacter character);

	void UpdateState(BaseCharacter character);

	void ExitState(BaseCharacter character);
}
