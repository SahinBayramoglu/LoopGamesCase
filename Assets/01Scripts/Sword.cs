using DG.Tweening;
using System.Collections;
using UnityEngine;

public class Sword : MonoBehaviour, IWeapon
{
    [SerializeField] private bool isAttackActive = false;
    public BaseCharacter Owner { get; set; }
    public AudioSource AudioSource { get; set; }
    public AudioClip swordHit;
    public AudioClip characterHit;

    public void OnHit(IDamageable target, Vector2 knockBackDirection)
    {
        target.TakeDamage(ConstantsConfig.Int.SWORD_DAMAGE, knockBackDirection, Owner.transform);
    }
    private void Start()
    {
        isAttackActive = true;
        AudioSource = GetComponent<AudioSource>();
    }
    private void OnEnable()
    {
        StartCoroutine(Init());
        GameController.Instance.AddCursorTransform(transform.GetChild(0));
    }
    private void OnDisable()
    {
        GameController.Instance.RemoveCursorTransform(transform.GetChild(0));
        transform.DOKill(true);
    }

    IEnumerator Init()
    {
        yield return new WaitForSeconds(0.2f);
        isAttackActive = true;
        tag = ConstantsConfig.Tags.SWORD;
    }

    public void SwordCollision()
    {
        isAttackActive = false;
        tag = ConstantsConfig.Tags.UNTAGGED;
        this.AudioSource.clip = swordHit;
        this.AudioSource.Play();
        Owner.RemoveSword(this.gameObject);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {


        if (isAttackActive)
        {
            if (collision.CompareTag(ConstantsConfig.Tags.SWORD) && Owner != collision.GetComponent<Sword>().Owner)
            {
                SwordCollision();
                Sword collisionSword = collision.GetComponent<Sword>();
                collisionSword.SwordCollision();


            }
            else if (collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
            {
                collision.tag = ConstantsConfig.Tags.UNTAGGED;
                Owner.AddSword(collision.transform.position, collision.gameObject);
            }
            else
            {
                IDamageable target = collision.GetComponent<IDamageable>();
                if (target != null && !target.Equals(Owner))
                {
                    this.AudioSource.clip = characterHit;
                    this.AudioSource.Play();
                    Vector2 knockBackDirection = collision.transform.position - Owner.transform.position;
                    OnHit(target, knockBackDirection.normalized);
                }
            }


        }
    }
}