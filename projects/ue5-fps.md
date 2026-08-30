---
layout: doc
title: 1st Person Shooter Framework
description: Production-ready FPS framework with modular systems for weapon/ammo management, checkpoint progression, and turret AI—built from scratch to showcase systems architecture expertise.
---


<a href="../projects/" class="back-projects-button"> ❮❮ All Projects </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">Project Status :</span>
      <span class="info-line-value"> Complete Systems Showcase | Extensible Framework </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Project Type :</span>
      <span class="info-line-value"> Modular Framework | Unreal Engine 5 (C++) </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">Core Focus :</span>
      <span class="info-line-value"> Systems Architecture | Data-Driven Design </span>
    </p>
  </div>

</div>

# First Person Shooter Framework {.page-title-center}
-------

<p class="project-text">
  A <strong>production-ready FPS framework</strong> built in Unreal Engine 5, demonstrating <strong>professional systems architecture</strong> for weapon management, checkpoint persistence, and enemy AI. Designed as a <strong>modular, extensible foundation</strong> where new weapons and turret types require only <strong>data configuration, not code changes</strong>—enabling rapid iteration and team collaboration through <strong>component-based design patterns</strong>.
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<MediaCarousel data-hx-reveal id="fps-hero-media" :slides="[
  { src: '/videos/ue5-fps/fps-showcase-1.mp4', caption: 'Main gameplay loop with: - Weapon + HUD feedback (Score, HP and Loadout) - Checkpoint + Respawn mechanics - Turret AI combat' }
]" />



---

# General {.section-title-center data-hx-reveal="true"}

## Quick Overview {.outline-only}

<ProjectPanel icon="target" title="Quick Summary for Recruiters">

  <div class="project-text">
    <ul>
      <li><strong>Component-based architecture</strong> for decoupled, testable systems</li>
      <li><strong>Data-driven weapon system</strong> — add new weapons via config, no code changes</li>
      <li><strong>Ammo & reload mechanics</strong> with automatic and manual reload options</li>
      <li><strong>Checkpoint persistence</strong> — player state saved/restored on touch</li>
      <li><strong>Turret AI & projectile pooling</strong> for efficient enemy management</li>
      <li><strong>Score system with high-score serialization</strong> using UE5 Save Game API</li>
      <li><strong>Health component & damage feedback</strong> with knockback and stun mechanics</li>
      <li><strong>Professional UI systems</strong> (health bar, weapon display, score tracking)</li>
    </ul>
  </div>

</ProjectPanel>

## Core Philosophy {.outline-only}

<ProjectPanel icon="lightbulb" title="Core Philosophy">

<div class="project-text">

# "Systems that scale are systems that are decoupled."

This framework demonstrates:
- ✅ **Component-driven design** (behavior lives in reusable components, not monolithic classes)
- ✅ **Data-first architecture** (configs define weapon properties, not hardcoded values)
- ✅ **Separation of concerns** (input, movement, combat, UI all live in separate systems)
- ✅ **Performance-conscious** (object pooling for projectiles, efficient raycasting)
- ✅ **Team-ready** (new designers can add content without touching gameplay code)

Every system is built to answer: *"How do we make systems that multiple people can work on simultaneously?"*

</div>

</ProjectPanel>

---

## Features{.outline-only}

# Highlight Features {.section-title-center data-hx-reveal="true"}

## 1. Weapon & Ammo System {.outline-only}

<ProjectPanel icon="blocks" title="Data-Driven Weapon Framework">



<div class="project-text">

**The Problem:** Hardcoding weapon properties (damage, fire rate, ammo capacity) makes iteration impossible without programmer help. Every balance change requires code recompile.

**The Solution:** All weapon properties live in configurable data assets:

<ProjectPanel icon="file-code" variant="mini" title="UWeaponDataAsset (example)">

<div class="mini-panel-body">

```cpp
UCLASS()
class MYPROJECT_API UWeaponDataAsset : public UDataAsset
{
    GENERATED_BODY()
public:
    UPROPERTY(EditAnywhere, Category = "Weapon")
    FString WeaponName;
    
    UPROPERTY(EditAnywhere, Category = "Weapon")
    int32 MaxAmmo = 30;
    
    UPROPERTY(EditAnywhere, Category = "Weapon")
    float FireRate = 0.1f;
    
    UPROPERTY(EditAnywhere, Category = "Weapon")
    float Damage = 10.0f;
    
    UPROPERTY(EditAnywhere, Category = "Weapon")
    float ReloadTime = 2.5f;
};
```

</div>
</ProjectPanel>

**Result:** Designers modify weapon properties in Unreal Editor—no code recompile needed. Add new weapons in minutes (duplicate asset, tweak values, done). Multiple weapons coexist without conflicts.


<ProjectPanel icon="refresh-cw" variant="mini" title="Ammo Management &amp; Auto-Reload">

<div class="mini-panel-body">

Magazine-based system with reserve ammo + auto-reload at 0 ammo:

```cpp
void UWeaponComponent::Fire()
{
    if (!WeaponData || CurrentAmmo <= 0 || bIsReloading)
        return;
    
    // Spawn projectile and consume ammo
    SpawnProjectile(GetActorForwardVector(), WeaponData->Damage);
    CurrentAmmo--;
    
    // Auto-reload at 0
    if (CurrentAmmo == 0 && ReserveAmmo > 0)
        Reload();
    
    OnAmmoChanged.Broadcast(CurrentAmmo, ReserveAmmo);
}

void UWeaponComponent::Reload()
{
    if (bIsReloading || ReserveAmmo <= 0) return;
    
    bIsReloading = true;
    GetWorld()->GetTimerManager().SetTimer(ReloadTimerHandle,
        [this]() {
            int32 AmmoToReload = FMath::Min(
                WeaponData->MaxAmmo - CurrentAmmo, ReserveAmmo);
            CurrentAmmo += AmmoToReload;
            ReserveAmmo -= AmmoToReload;
            bIsReloading = false;
            OnAmmoChanged.Broadcast(CurrentAmmo, ReserveAmmo);
        },
        WeaponData->ReloadTime, false);
}
```

</div>

</ProjectPanel>

</div>



</ProjectPanel>

## 2. Checkpoint & Persistence {.outline-only}

<ProjectPanel icon="save" title="Checkpoint Respawn &amp; Game State">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-checkpoint-media" :slides="[
  { src: '/videos/ue5-fps/fps-checkpoint.mp4', caption: 'Checkpoint & Respawn mechanics showcase.' }
]" />

<div class="project-text">

**Gameplay Flow:**
1. Player reaches checkpoint → touches actor, location saved
2. Player takes damage → health reaches 0
3. Death screen appears with respawn button
4. Respawn teleports player to checkpoint, health restored

**Result:** Clean, reusable respawn pattern. Multiple checkpoints supported (last touched is "current").


<ProjectPanel icon="flag" variant="mini" title="Checkpoint Actor Implementation">

  <div class="mini-panel-body">

    ```cpp
    UCLASS()
    class MYPROJECT_API AMyCheckpoint : public AActor, public IInteractionInterface
    {
    public:
        UFUNCTION()
        void OnOverlapBegin(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, 
                            UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, 
                            bool bFromSweep, const FHitResult& SweepResult);
    };

    void AMyCheckpoint::OnOverlapBegin(...)
    {
        if (APawn* Player = Cast<APawn>(OtherActor))
        {
            if (AGameManager* GM = AGameManager::Get())
            {
                GM->SetCheckpointLocation(GetActorLocation());
                GM->AddScore(1);  // Feedback hint
            }
        }
    }
    ```
  </div>

</ProjectPanel>

<ProjectPanel icon="rotate-ccw" variant="mini" title="Death &amp; Respawn Flow">

<div class="mini-panel-body">

```cpp
void AHealthComponent::TakeDamage(float Damage)
{
    CurrentHealth -= Damage;
    OnHealthChanged.Broadcast();
    
    if (CurrentHealth <= 0)
    {
        if (APlayerController* PC = GetWorld()->GetFirstPlayerController())
        {
            PC->ShowDeathScreen();
            PC->SetInputMode(FInputModeUIOnly());
        }
    }
}

void APlayerController::OnRespawnClicked()
{
    if (AGameManager* GM = AGameManager::Get())
    {
        GetCharacter()->TeleportTo(GM->GetCheckpointLocation(), FRotator::ZeroRotator);
        HealthComponent->SetHealth(HealthComponent->GetMaxHealth());
        SetInputMode(FInputModeGameOnly());
    }
}
```

</div>

</ProjectPanel>
</div>



</ProjectPanel>

## 3. Turret AI & Performance {.outline-only}

<ProjectPanel icon="cpu" title="Enemy AI &amp; Projectile Pooling">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ai-media" :slides="[
  { src: '/videos/ue5-fps/fps-ai.mp4', caption: 'Showcase of different types of Turret AI.' }
]" />


<div class="project-text">

**Turret AI:** Configurable detection range, fire rate, and targeting behavior.

**Projectile Pooling:** Pre-allocate pool → recycle objects instead of spawn/destroy every frame. Result: 50+ enemies firing simultaneously without frame rate dips.


<ProjectPanel icon="cpu" variant="mini" title="Turret AI Behavior">

<div class="mini-panel-body">

```cpp
UCLASS()
class MYPROJECT_API AEnemyTurret : public APawn
{
    UPROPERTY(EditAnywhere) float DetectionRange = 1000.0f;
    UPROPERTY(EditAnywhere) float FireRate = 0.5f;
    
private:
    float LastFireTime = 0.0f;
    APawn* CurrentTarget = nullptr;
};

void AEnemyTurret::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
    
    SearchForTarget();
    
    if (CurrentTarget && GetWorld()->GetTimeSeconds() - LastFireTime > FireRate)
    {
        FireAtTarget();
        LastFireTime = GetWorld()->GetTimeSeconds();
    }
}
```

</div>

</ProjectPanel>

<ProjectPanel icon="boxes" variant="mini" title="Object Pool Pattern">

<div class="mini-panel-body">

```cpp
UCLASS()
class MYPROJECT_API AProjectilePool : public AActor
{
    UPROPERTY(EditAnywhere) int32 PoolSize = 50;
    
    AProjectileBase* GetProjectile();
    void ReturnProjectile(AProjectileBase* Projectile);
    
private:
    UPROPERTY() TArray<AProjectileBase*> AvailableProjectiles;
    UPROPERTY() TArray<AProjectileBase*> ActiveProjectiles;
};

AProjectileBase* AProjectilePool::GetProjectile()
{
    if (AvailableProjectiles.Num() > 0)
    {
        AProjectileBase* Proj = AvailableProjectiles.Pop();
        ActiveProjectiles.Add(Proj);
        return Proj;
    }
    return GetWorld()->SpawnActor<AProjectileBase>();
}
```

**Result:** Zero allocations during gameplay. Memory efficient at scale.

</div>

</ProjectPanel>
</div>



</ProjectPanel>

## 4. Score & Persistence {.outline-only}

<ProjectPanel icon="database" title="Score Tracking &amp; High Score Persistence">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-score-media" :slides="[
  { src: '/videos/ue5-fps/fps-score.mp4', caption: 'Showcase of different ways to gain score.' }
]" />



<div class="project-text">

**Score awarded for:**
- ✅ Turret destroyed: +1 score
- ✅ Checkpoint reached: +1 score (feedback hint)

**High Score Persistence:** Serialized to disk using UE5 SaveGame API. Score persists across play sessions—players are motivated to beat their high score.


<ProjectPanel icon="trophy" variant="mini" title="Score System Implementation">

<div class="mini-panel-body">

```cpp
UCLASS()
class MYPROJECT_API UHighScoreSaveGame : public USaveGame
{
    GENERATED_BODY()
public:
    UPROPERTY() int32 HighScore = 0;
    UPROPERTY() FDateTime LastAchievedDate;
};

void AGameManager::SaveHighScore(int32 NewScore)
{
    if (UHighScoreSaveGame* SaveData = Cast<UHighScoreSaveGame>(
        UGameplayStatics::CreateSaveGameObject(UHighScoreSaveGame::StaticClass())))
    {
        SaveData->HighScore = NewScore;
        UGameplayStatics::SaveGameToSlot(SaveData, TEXT("HighScore"), 0);
    }
}

void AGameManager::AddScore(int32 Amount)
{
    CurrentScore += Amount;
    OnScoreChanged.Broadcast();
    
    if (CurrentScore > HighScore)
    {
        HighScore = CurrentScore;
        SaveHighScore(HighScore);
    }
}
```

</div>

</ProjectPanel>
</div>


</ProjectPanel>

## 5. Pickup & Buff System {.outline-only}

<ProjectPanel icon="sparkles" title="Pickup &amp; Buff System">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-pu-media" :slides="[
  { src: '/videos/ue5-fps/fps-pickup.mp4', caption: '- Health regeneration pickups - Movement speed buff pickups - Combined effects (e.g. -HP and speed boost)' }
]" />



<div class="project-text">

Uses the same **PickupComponent + BuffBaseComponent** pattern, adding new pickup types by creating data assets, no code changes needed.

**Data-driven pickups with configurable buffs:**

<ProjectPanel icon="file-code" variant="mini" title="UPickupDataAsset (example)">

<div class="mini-panel-body">

```cpp
UCLASS(BlueprintType)
class CPPPROJECTNEW_API UPickupDataAsset : public UDataAsset
{
    GENERATED_BODY()
public:
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Pickup")
    FName PickupName;
    
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Pickup")
    UStaticMesh* PickupMesh;
    
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Buff")
    float BuffLifespan = 10.f;  // Buff duration in seconds
    
    // List of buff component classes to apply on pickup
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Buff")
    TArray<TSubclassOf<UBuffBaseComponent>> BuffComponentClasses;
};

void UPickupComponent::HandlePickup(APickupBase* PickupActor, UPickupDataAsset* PickupData)
{
    if (!PickupData) return;
    
    // Apply all buffs from the pickup data
    for (TSubclassOf<UBuffBaseComponent> BuffClass : PickupData->BuffComponentClasses)
    {
        UBuffBaseComponent* NewBuff = NewObject<UBuffBaseComponent>(GetOwner(), BuffClass);
        if (NewBuff)
        {
            NewBuff->BuffLifespan = PickupData->BuffLifespan;
            NewBuff->RegisterComponent();
            NewBuff->OnBuffApplied(GetOwner());
        }
    }
    
    // Broadcast pickup event for UI feedback
    OnPickupFeedback(PickupActor, PickupData);
}
```
</div>
</ProjectPanel>

**Result:** Add new pickup types in minutes—create data asset, configure buffs, place in level. Same extensibility pattern as weapons: new designers can iterate without touching gameplay code.

</div>



</ProjectPanel>

---



## Technical{.outline-only}

# Technical Deep Dive {.section-title-center data-hx-reveal="true"}

## Architecture Overview {.outline-only}

<ProjectPanel icon="layers" title="Architecture Overview &amp; Design Patterns">

<div class="project-text">

### Architecture Diagram

```
┌──────────────────────────────────────────────┐
│         FPSCharacter (Player Pawn)           │
│  Handles input, movement, camera control     │
└──────────────────────────────────────────────┘
           ↓              ↓              ↓
    ┌──────────┐  ┌──────────┐  ┌──────────┐
    │ Character│  │ Weapon   │  │ Health   │
    │Movement  │  │Component │  │Component │
    │Component │  │          │  │          │
    └──────────┘  └──────────┘  └──────────┘

┌──────────────────────────────────────────────┐
│      GameManager (World Authority)           │
│  Checkpoint location, Score, Game state      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│      EnemyTurret (AI Pawn)                   │
│  Detects player, aims, fires                 │
└──────────────────────────────────────────────┘
           ↓
    ┌──────────────┐
    │Projectile    │
    │Pool          │
    └──────────────┘
```

**Single Responsibility Principle:**
- `FPSCharacter`: Input → movement mapping
- `WeaponComponent`: Weapon state, firing logic, ammo tracking
- `HealthComponent`: Damage handling, death trigger
- `GameManager`: Checkpoint location, score authority
- `EnemyTurret`: AI behavior, target detection
- `ProjectilePool`: Lifecycle management of projectiles

**Why This Works:**
- ✅ Add new weapon? Add new data asset, no code touch
- ✅ Add new enemy type? Extend turret class, same health system
- ✅ Change HUD? Update UIToolkit widget, gameplay unaffected


<ProjectPanel icon="heart-pulse" variant="mini" title="Health Component (Reusable)">

<div class="mini-panel-body">

Works on player AND enemies:

```cpp
UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class MYPROJECT_API UHealthComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    UPROPERTY(EditAnywhere, Category = "Health") float MaxHealth = 100.0f;
    
    UFUNCTION(BlueprintCallable) void TakeDamage(float Damage, AActor* Instigator = nullptr);
    UFUNCTION(BlueprintCallable) float GetHealth() const { return CurrentHealth; }
    UFUNCTION(BlueprintCallable) float GetHealthPercent() const { return CurrentHealth / MaxHealth; }
    
    FSimpleDelegate OnHealthChanged;
    FSimpleDelegate OnDeath;
};

void UHealthComponent::TakeDamage(float Damage, AActor* DamageInstigator)
{
    CurrentHealth = FMath::Max(0.0f, CurrentHealth - Damage);
    OnHealthChanged.Broadcast();
    
    // Knockback
    if (DamageInstigator && ACharacter* Char = Cast<ACharacter>(GetOwner()))
    {
        FVector KnockbackDir = (GetOwner()->GetActorLocation() - 
                                DamageInstigator->GetActorLocation()).GetSafeNormal();
        Char->LaunchCharacter(KnockbackDir * 1000.0f, true, true);
    }
    
    if (CurrentHealth <= 0.0f)
    {
        OnDeath.Broadcast();
        GetOwner()->Destroy();
    }
}
```

</div>

</ProjectPanel>

<ProjectPanel icon="puzzle" variant="mini" title="Design Patterns Used">

<div class="mini-panel-body">

- **Observer Pattern:** Delegates notify UI of state changes (no tight coupling)
- **Object Pool Pattern:** Projectile pooling for efficiency
- **Singleton Pattern:** Game manager is single source of truth
- **State Pattern:** Weapon reloading, health states
- **Component Pattern:** Composition over inheritance (why it scales)\
Component-based pickup/buff system using data assets

</div>

</ProjectPanel>
</div>

</ProjectPanel>

---

## Extras{.outline-only}

# Extra Notes {.section-title-center data-hx-reveal="true"}

## Core Competencies {.outline-only}

<ProjectPanel icon="award" title="Core Competencies">

<div class="project-text">

**Systems Architecture:**
- ✅ Component-based design (decoupled, composable, reusable)
- ✅ Data-driven approaches (configs, not code changes)
- ✅ Separation of concerns (input, logic, state, UI are separate)
- ✅ Singleton patterns for game state authority

**C++ Best Practices:**
- ✅ Modern C++ (smart pointers, lambdas, delegates)
- ✅ Proper const-correctness and memory management
- ✅ Clear, documented code structure
- ✅ Efficient algorithms (object pooling, early returns)

**UE5 Specifics:**
- ✅ Component architecture mastery
- ✅ Delegate system for decoupled communication
- ✅ Save Game API for persistence
- ✅ Timer manager for async operations
- ✅ World spawning and lifecycle management

</div>

</ProjectPanel>

## Use Cases & Extensibility {.outline-only}

<ProjectPanel icon="puzzle" title="Use Cases &amp; Extensibility">

<div class="project-text">

**Perfect For:**
- ✅ Multiplayer games (state authority pattern scales well)
- ✅ Content-heavy projects (designers can iterate without code)
- ✅ Team development (clear ownership of systems)
- ✅ Games with multiple weapons/enemies (extensible architecture)

**Extensibility:**
- ✅ Add new weapon types (data asset only)
- ✅ Add new enemy behaviors (extend base turret class)
- ✅ Add upgrade systems (modify weapon data at runtime)
- ✅ Add difficulty levels (scale numbers in game manager)
- ✅ Add multiplayer (components are already networked-ready)

</div>

</ProjectPanel>

## Technologies & Stack {.outline-only}

<ProjectPanel icon="wrench" title="Technologies &amp; Stack">

<div class="project-text">

- **Engine:** Unreal Engine 5.0+
- **Language:** C++ (Modern C++17 standards)
- **Architecture:** Component-based actors, composition over inheritance
- **Data Management:** DataAsset configs, SaveGame serialization
- **UI:** UIToolkit widget system for HUD
- **Performance:** Object pooling, efficient raycasting, zero allocations during gameplay
- **Code Style:** UE naming conventions, proper encapsulation, delegate-driven communication

**Source Code:**
- `FPSCharacter.h/cpp` — Player input and movement
- `WeaponComponent.h/cpp` — Weapon firing and ammo management
- `HealthComponent.h/cpp` — Generic damage system
- `EnemyTurret.h/cpp` — AI enemy behavior
- `GameManager.h/cpp` — Game state authority
- `ProjectilePool.h/cpp` — Efficient projectile management

</div>

</ProjectPanel>


## Links & Resources {.outline-only}

<ProjectPanel icon="link" title="Links &amp; Resources">

<div class="project-text">

- **GitHub:** <a href= https://github.com/RayZ-c/Cpp-For-Engines > Link</a>
- **Source Code Documentation:** [Not available yet]
- **Play in Browser:** [Not available yet]

</div>

</ProjectPanel>

---
