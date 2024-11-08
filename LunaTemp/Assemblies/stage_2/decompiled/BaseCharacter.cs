using System.Collections;
using DG.Tweening;
using UnityEngine;

public class BaseCharacter : MonoBehaviour, IDamageable
{
	[Header("Settings")]
	public float maxMovementSpeed = 5f;

	public float maxHealth = 100f;

	public float currentHealth = 100f;

	[Header("References")]
	public WeaponManager weaponManager;

	public new Rigidbody2D rigidbody2D;

	public ParticleSystem dieParticle;

	public Animator bodyAnimator;

	public SpriteRenderer bodySpriteRenderer;

	public new Collider2D collider;

	public GameObject CollectableSwordPrefab;

	[Header("Animations")]
	public IState currentState;

	public bool isTakeDamage = false;

	public bool isDead = false;

	public Transform DamageSource { get; set; }

	protected virtual void Start()
	{
		collider = GetComponent<Collider2D>();
		currentState = new IdleState();
		currentState.EnterState(this);
	}

	protected virtual void Update()
	{
		currentState.UpdateState(this);
	}

	public void ChangeState(IState newState)
	{
		currentState.ExitState(this);
		currentState = newState;
		currentState.EnterState(this);
	}

	public void SetWalkingAnimation(bool isWalking)
	{
		bodyAnimator.SetBool(ConstantsConfig.Animations.CHARACTER_WALK, isWalking);
	}

	public void Flip(bool isLeft)
	{
		bodySpriteRenderer.flipX = isLeft;
	}

	public virtual void TakeDamage(float amount, Vector2 knockBackDirection, Transform damageSource)
	{
		if (!isDead)
		{
			DamageSource = damageSource;
			StartCoroutine(KnockBackCoroutine(knockBackDirection));
			currentHealth -= amount;
			if (currentHealth <= 0f)
			{
				Die(knockBackDirection);
			}
		}
	}

	private IEnumerator KnockBackCoroutine(Vector2 knockBackDirection)
	{
		isTakeDamage = true;
		float knockbackTime = 0.1f;
		float elapsedTime = 0f;
		while (elapsedTime < knockbackTime)
		{
			base.transform.position += (Vector3)(knockBackDirection * 25f * Time.deltaTime);
			elapsedTime += Time.deltaTime;
			yield return null;
		}
		isTakeDamage = false;
	}

	private void Die(Vector2 knockBackDirection)
	{
		Debug.Log("DIEEEEEEEEEEEEEEEE");
		isDead = true;
		base.tag = ConstantsConfig.Tags.UNTAGGED;
		isTakeDamage = true;
		SpawnCollectables(knockBackDirection);
		base.transform.DOScale(Vector3.zero, 0.4f).OnComplete(delegate
		{
			base.gameObject.SetActive(false);
		});
		dieParticle.Play();
	}

	private void SpawnCollectables(Vector2 knockBackDirection)
	{
		knockBackDirection.Normalize();
		Vector3 startPosition = base.transform.position;
		for (int i = 0; i < 5; i++)
		{
			float angle = Random.Range(-30f, 30f);
			float distance = Random.Range(0, 2);
			Vector2 randomDirection = Quaternion.Euler(0f, 0f, angle) * knockBackDirection;
			Vector3 spawnPosition = startPosition + (Vector3)(randomDirection * distance);
			Object.Instantiate(CollectableSwordPrefab, spawnPosition, Quaternion.identity);
		}
	}

	private void OnDeathAnimationComplete()
	{
		Object.Destroy(base.gameObject);
	}

	public void AddSword(Vector2 spawnPosition, GameObject collectSword)
	{
		collectSword.tag = ConstantsConfig.Tags.UNTAGGED;
		GameObject sword = weaponManager.CollectSword();
		sword.GetComponent<IWeapon>().Owner = this;
		sword.transform.position = collectSword.transform.position;
		sword.transform.localScale = Vector3.zero;
		sword.transform.DOScale(Vector3.one, 0.5f);
		collectSword.transform.SetParent(base.transform);
		collectSword.transform.DOScale(Vector3.zero, 0.4f);
		collectSword.transform.DOLocalMove(Vector3.zero, 0.4f).OnComplete(delegate
		{
			collectSword.SetActive(false);
		});
	}

	public void RemoveSword(GameObject swordPrefab)
	{
		swordPrefab.GetComponent<IWeapon>().Owner = null;
		weaponManager.DropSword(swordPrefab);
	}
}
