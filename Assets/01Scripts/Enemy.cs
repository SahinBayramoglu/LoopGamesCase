using System.Collections.Generic;
using UnityEngine;
using UnityEngine.TextCore.Text;
using UnityEngine.UI;

public class Enemy : BaseCharacter
{
    [Header("Enemy Settings")]
    public float detectionRadius = 5f;
    public float fleeSpeedMultiplier = 2f;
    public float attackRange = 1.5f;
    public Transform playerTarget;
    public Transform currentTarget;


    [Header("State")]
    Vector3 currentPosition;
    Vector3 previousPosition;

    [Header("Flag And ID")]
    [SerializeField] List<Sprite> flags = new List<Sprite>();

    private float stateTimer = 5f;
    float timer = 0;
    protected override void Start()
    {

        base.Start();
        ChangeState(new WanderState());
        currentPosition = transform.position;
        previousPosition = currentPosition;
        countryFlag.sprite = flags[Random.Range(0, flags.Count)];
        List<string> nicknames = new List<string>
{
    "StormChaser",
    "MidnightFox",
    "EchoWave",
    "ShadowHawk",
    "IronWolf",
    "CrimsonPeak",
    "MysticBlaze",
    "LunarKnight",
    "ThunderBolt",
    "SilverPhoenix",
    "RogueSpirit",
    "VortexRider",
    "NeonFlame",
    "BlazeStrike",
    "FrostWing",
    "DarkEcho",
    "SkyRebel",
    "GhostWalker",
    "SteelSerpent",
    "NightHunter"
};
        id_Text.text = nicknames[Random.Range(0, flags.Count)];
    }

    protected override void Update()
    {
        base.Update();
        DetectNearbySwordsOrEnemies();
        GetCharacterDirection();
    }

    private void GetCharacterDirection()
    {
        currentPosition = transform.position;
        if (currentPosition.x > previousPosition.x)
        {
            Flip(false);
            SetWalkingAnimation(true);
        }
        else if (currentPosition.x < previousPosition.x)
        {
            Flip(true);
            SetWalkingAnimation(true);
        }

        else if (currentPosition.x == previousPosition.x)
        {
            SetWalkingAnimation(false);
        }
        previousPosition = currentPosition;
    }

    private void DetectNearbySwordsOrEnemies()
    {
        timer -= Time.deltaTime;
        if (timer <= 0)
        {
            timer = stateTimer;
            currentTarget = null;
            playerTarget = null;
            DamageSource = null;
            ChangeState(new WanderState());
        }
        if (playerTarget != null) { }

        if (currentTarget != null || playerTarget != null || currentState is FleeState)
        {
            return;
        }


        Collider2D[] hitColliders = Physics2D.OverlapCircleAll(transform.position, detectionRadius);
        bool targetFound = false;

        foreach (var hit in hitColliders)
        {
            if (hit == collider) continue;

            if (hit.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD) && !(currentState is ChaseSwordState))
            {
                currentTarget = hit.transform;
                ChangeState(new ChaseSwordState());
                targetFound = true;
                break;
            }
            else if ((hit.CompareTag(ConstantsConfig.Tags.PLAYER) || hit.CompareTag(ConstantsConfig.Tags.ENEMY))
                     && weaponManager.SwordCount > 0 && !(currentState is AttackState))
            {
                if (Random.Range(0, 5) != 0) break;
                playerTarget = hit.transform;
                ChangeState(new AttackState());
                targetFound = true;
                break;
            }
        }

        if (!targetFound && !(currentState is WanderState))
        {
            ChangeState(new WanderState());
        }
    }
    public override void TakeDamage(float amount, Vector2 knockBackDirection, Transform damageSource)
    {
        base.TakeDamage(amount, knockBackDirection, damageSource);

        if (currentHealth <= 0) return;

        if (weaponManager.SwordCount <= 0)
            ChangeState(new FleeState());

    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDead) return;
        if (collision.CompareTag(ConstantsConfig.Tags.COLLECT_SWORD))
        {
            collision.tag = ConstantsConfig.Tags.UNTAGGED;
            AddSword(collision.transform.position, collision.gameObject);
        }
        else if (collision.CompareTag(ConstantsConfig.Tags.ENEMY) || collision.CompareTag(ConstantsConfig.Tags.ENEMY))
        {

        }
    }
}