using UnityEngine;
using DG.Tweening;
using System.Collections;
using UnityEngine.UI;
using TMPro;

public class BaseCharacter : MonoBehaviour, IDamageable
{
    [Header("Settings")]
    public float currentHealth = 100;

    [Header("References")]
    public WeaponManager weaponManager;
    public Rigidbody2D rigidbody2D;
    public ParticleSystem dieParticle;
    public Animator bodyAnimator;
    public SpriteRenderer bodySpriteRenderer;
    public Collider2D collider;
    public GameObject CollectableSwordPrefab;

    [Header("UI")]
    public Image healtBar;
    public Image countryFlag;
    public TMP_Text id_Text;

    [Header("Animations")]
    public IState currentState;
    public bool isTakeDamage = false;

    public bool isDead = false;
    public Transform DamageSource { get; set; }


    protected virtual void Start()
    {
        collider = GetComponent<Collider2D>();
        currentHealth = ConstantsConfig.Int.CHARACTER_MAX_HEALT;
        currentState = new IdleState();
        currentState.EnterState(this);
        GameController.Instance.AddCursorTransform(this.transform);
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

    public void Flip(bool isLeft) => bodySpriteRenderer.flipX = isLeft;


    #region Damage process
    public virtual void TakeDamage(float amount, Vector2 knockBackDirection, Transform damageSource)
    {
        if (isDead) return;
        DamageSource = damageSource;
        StartCoroutine(KnockBackCoroutine(knockBackDirection));
        currentHealth -= amount;
        healtBar.fillAmount = (float)currentHealth / 100f;
        if (currentHealth <= 0)
            Die(knockBackDirection);

    }
    IEnumerator KnockBackCoroutine(Vector2 knockBackDirection)
    {
        isTakeDamage = true;
        float knockbackTime = 0.1f;
        float elapsedTime = 0;

        while (elapsedTime < knockbackTime)
        {
            transform.position += (Vector3)(knockBackDirection * 25f * Time.deltaTime);
            elapsedTime += Time.deltaTime;
            yield return null;
        }
        isTakeDamage = false;
    }



    private void Die(Vector2 knockBackDirection)
    {
        isDead = true;
        tag = ConstantsConfig.Tags.UNTAGGED;
        isTakeDamage = true;
        SpawnCollectables(knockBackDirection);
        transform.DOScale(Vector3.zero, 0.4f).OnComplete(() => this.gameObject.SetActive(false));
        dieParticle.Play();
    }
    private void SpawnCollectables(Vector2 knockBackDirection)
    {
        knockBackDirection.Normalize();
        Vector3 startPosition = transform.position;

        for (int i = 0; i < 5; i++)
        {
            float angle = Random.Range(-30f, 30f);
            float distance = Random.Range(0, 2);

            Vector2 randomDirection = Quaternion.Euler(0, 0, angle) * knockBackDirection;
            Vector3 spawnPosition = startPosition + (Vector3)(randomDirection * distance);
            Instantiate(CollectableSwordPrefab, spawnPosition, Quaternion.identity);
        }
    }

    private void OnDeathAnimationComplete()
    {
        Destroy(gameObject);
    }
    #endregion

    #region Sword Process
    public void AddSword(Vector2 spawnPosition, GameObject collectSword)
    {
        collectSword.tag = ConstantsConfig.Tags.UNTAGGED;
        GameObject sword = weaponManager.CollectSword();
        sword.GetComponent<IWeapon>().Owner = this;
        sword.transform.position = collectSword.transform.position;
        sword.transform.localScale = Vector3.zero;
        sword.transform.DOScale(Vector3.one, 0.5f);

        collectSword.transform.SetParent(transform);
        collectSword.transform.DOScale(Vector3.zero, 0.4f);//.OnComplete(() => collectSword.SetActive(false));
        collectSword.transform.DOLocalMove(Vector3.zero, 0.4f).OnComplete(() => collectSword.SetActive(false));
    }

    public void RemoveSword(GameObject swordPrefab)
    {
        swordPrefab.GetComponent<IWeapon>().Owner = null;
        weaponManager.DropSword(swordPrefab);
    }

    #endregion
}