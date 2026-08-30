---
layout: doc
title: 第一人称射击框架
description: 可投入正式项目的 FPS 框架，包含模块化武器与弹药管理、检查点流程和炮塔 AI，用来展示系统架构能力。
---


<a href="../../zh/projects/" class="back-projects-button"> ❮❮ 所有项目 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">项目状态 :</span>
      <span class="info-line-value"> 完整的系统展示 | 可扩展框架 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">项目类型 :</span>
      <span class="info-line-value"> 模块化框架 | 虚幻引擎 5（C++） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 系统架构 | 数据驱动设计 </span>
    </p>
  </div>

</div>

# 第一人称射击框架 {.page-title-center}
-------

<p class="project-text">
  一套使用虚幻引擎 5 从零搭建、<strong>可投入正式项目的 FPS 框架</strong>，通过武器管理、检查点存档与敌人 AI 展示<strong>系统架构能力</strong>。底层采用<strong>模块化、可扩展设计</strong>：新增武器或炮塔类型只需<strong>配置数据，不必修改代码</strong>；<strong>基于组件的设计模式</strong>也便于快速迭代与团队协作。
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<MediaCarousel data-hx-reveal id="fps-hero-media" :slides="[
  { src: '/videos/ue5-fps/fps-showcase-1.mp4', caption: '核心玩法循环演示：武器与 HUD 反馈（分数、血量、配装）、检查点与重生机制、炮塔 AI 战斗' }
]" />



---

# 总览 {.section-title-center data-hx-reveal="true"}

## 项目概览 {.outline-only}

<ProjectPanel icon="target" title="给招聘方的快速摘要">

  <div class="project-text">
    <ul>
      <li><strong>基于组件的架构</strong>，让各系统解耦且好测试</li>
      <li><strong>数据驱动的武器系统</strong> —— 新增武器只需配置，不必改代码</li>
      <li><strong>弹药与换弹机制</strong>，支持自动与手动换弹</li>
      <li><strong>检查点存档</strong> —— 触碰即保存与还原玩家状态</li>
      <li><strong>炮塔 AI 与投射物对象池</strong>，高效管理敌人</li>
      <li><strong>计分系统与最高分序列化</strong>，使用 UE5 Save Game API</li>
      <li><strong>生命值组件与受击反馈</strong>，含击退与硬直机制</li>
      <li><strong>完整的 UI 系统</strong>（血条、武器显示、分数追踪）</li>
    </ul>
  </div>

</ProjectPanel>

## 核心设计理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心设计理念">

<div class="project-text">

# 「能扩展的系统，都是解耦的系统。」

这套框架想证明的是：
- ✅ **组件驱动的设计**（行为放在可复用组件里，而不是巨型类中）
- ✅ **数据优先的架构**（武器属性由配置定义，而非写死的数值）
- ✅ **关注点分离**（输入、移动、战斗、UI 各自独立）
- ✅ **注重性能**（投射物对象池、高效射线检测）
- ✅ **适合团队**（新的设计师不必碰玩法代码就能加内容）

每个系统都在回答同一个问题：*「怎样做出能让多人同时协作的系统？」*

</div>

</ProjectPanel>

---

## 功能{.outline-only}

# 亮点功能 {.section-title-center data-hx-reveal="true"}

## 1. 武器与弹药系统 {.outline-only}

<ProjectPanel icon="blocks" title="数据驱动的武器框架">



<div class="project-text">

**问题：** 把武器属性（伤害、射速、弹匣容量）写死在代码里，意味着每次调整都得找程序员，每次改平衡都要重新编译。

**解法：** 所有武器属性都放进可配置的 Data Asset：

<ProjectPanel icon="file-code" variant="mini" title="UWeaponDataAsset（示例）">

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

**成果：** 设计师直接在 Unreal 编辑器里改武器属性，不必重新编译。新增武器只要几分钟（复制资产、调数值、完成）。多把武器并存也不会互相冲突。


<ProjectPanel icon="refresh-cw" variant="mini" title="弹药管理与自动换弹">

<div class="mini-panel-body">

以弹匣为单位的系统，另有备弹，弹药归零时自动换弹：

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

## 2. 检查点与存档 {.outline-only}

<ProjectPanel icon="save" title="检查点重生与游戏状态">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-checkpoint-media" :slides="[
  { src: '/videos/ue5-fps/fps-checkpoint.mp4', caption: '检查点与重生机制演示。' }
]" />

<div class="project-text">

**流程：**
1. 玩家抵达检查点 → 触碰 Actor，位置被记录
2. 玩家受伤 → 血量归零
3. 显示死亡画面与重生按钮
4. 重生时把玩家传送回检查点并回满血

**成果：** 一套干净、可复用的重生模式。支持多个检查点（最后触碰的即为当前点）。


<ProjectPanel icon="flag" variant="mini" title="检查点 Actor 实现">

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

<ProjectPanel icon="rotate-ccw" variant="mini" title="死亡与重生流程">

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

## 3. 炮塔 AI 与性能 {.outline-only}

<ProjectPanel icon="cpu" title="敌人 AI 与投射物对象池">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ai-media" :slides="[
  { src: '/videos/ue5-fps/fps-ai.mp4', caption: '不同类型炮塔 AI 的演示。' }
]" />


<div class="project-text">

**炮塔 AI：** 检测范围、射速与索敌行为皆可配置。

**投射物对象池：** 预先分配对象池 → 回收复用，而不是每帧生成／销毁。成果：50 个以上敌人同时开火也不掉帧。


<ProjectPanel icon="cpu" variant="mini" title="炮塔 AI 行为">

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

<ProjectPanel icon="boxes" variant="mini" title="对象池模式">

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

**成果：** 游戏过程中零内存分配，规模再大也稳。

</div>

</ProjectPanel>
</div>



</ProjectPanel>

## 4. 计分与存档 {.outline-only}

<ProjectPanel icon="database" title="分数追踪与最高分存档">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-score-media" :slides="[
  { src: '/videos/ue5-fps/fps-score.mp4', caption: '各种得分方式的演示。' }
]" />



<div class="project-text">

**得分来源：**
- ✅ 摧毁炮塔：+1 分
- ✅ 抵达检查点：+1 分（作为正向反馈）

**最高分存档：** 通过 UE5 SaveGame API 序列化写入磁盘。分数跨次游玩保留，玩家会想要刷新自己的纪录。


<ProjectPanel icon="trophy" variant="mini" title="计分系统实现">

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

## 5. 拾取与增益系统 {.outline-only}

<ProjectPanel icon="sparkles" title="拾取与增益系统">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-pu-media" :slides="[
  { src: '/videos/ue5-fps/fps-pickup.mp4', caption: '回血拾取物、移动速度增益拾取物，以及复合效果（例如扣血换加速）' }
]" />



<div class="project-text">

沿用同一套 **PickupComponent + BuffBaseComponent** 模式，新增拾取物类型只需建立 Data Asset，完全不必改代码。

**数据驱动的拾取物，增益可自由配置：**

<ProjectPanel icon="file-code" variant="mini" title="UPickupDataAsset（示例）">

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

**成果：** 新增拾取物只要几分钟——建资产、配增益、放进关卡。与武器同样的扩展模式：新进设计师不必碰玩法代码就能迭代。

</div>



</ProjectPanel>

---



## 技术{.outline-only}

# 技术细节 {.section-title-center data-hx-reveal="true"}

## 架构概览 {.outline-only}

<ProjectPanel icon="layers" title="架构概览与设计模式">

<div class="project-text">

### 架构图

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

**单一职责原则：**
- `FPSCharacter`：输入 → 移动的映射
- `WeaponComponent`：武器状态、开火逻辑、弹药追踪
- `HealthComponent`：伤害处理、死亡触发
- `GameManager`：检查点位置与分数的唯一状态来源
- `EnemyTurret`：AI 行为与目标检测
- `ProjectilePool`：投射物的生命周期管理

**这样为什么行得通：**
- ✅ 要加新武器？加一个 Data Asset，代码不用动
- ✅ 要加新敌人？继承炮塔基类，生命值系统照用
- ✅ 要改 HUD？更新 UI Widget，玩法完全不受影响


<ProjectPanel icon="heart-pulse" variant="mini" title="生命值组件（可复用）">

<div class="mini-panel-body">

玩家和敌人共用同一套：

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

<ProjectPanel icon="puzzle" variant="mini" title="用到的设计模式">

<div class="mini-panel-body">

- **观察者模式：** 以委托通知 UI 状态变化（避免紧耦合）
- **对象池模式：** 投射物池化以提升效率
- **单例模式：** GameManager 作为游戏状态的唯一来源
- **状态模式：** 武器换弹、生命值状态
- **组件模式：** 组合优先于继承（这正是它能扩展的原因）\
拾取与增益系统同样以组件搭配 Data Asset 实现

</div>

</ProjectPanel>
</div>

</ProjectPanel>

---

## 其他{.outline-only}

# 补充说明 {.section-title-center data-hx-reveal="true"}

## 核心能力 {.outline-only}

<ProjectPanel icon="award" title="核心能力">

<div class="project-text">

**系统架构：**
- ✅ 基于组件的设计（解耦、可组合、可复用）
- ✅ 数据驱动的做法（改配置，而不是改代码）
- ✅ 关注点分离（输入、逻辑、状态、UI 各自独立）
- ✅ 以单例集中管理游戏状态

**C++ 实践：**
- ✅ 现代 C++（智能指针、lambda、委托）
- ✅ 正确的 const 语义与内存管理
- ✅ 结构清楚、有注释的代码
- ✅ 高效的做法（对象池、提前返回）

**UE5 相关：**
- ✅ 熟练运用组件架构
- ✅ 以委托系统实现解耦通信
- ✅ 使用 Save Game API 做存档
- ✅ 以 Timer Manager 处理异步流程
- ✅ 世界生成与生命周期管理

</div>

</ProjectPanel>

## 适用场景与扩展性 {.outline-only}

<ProjectPanel icon="puzzle" title="适用场景与扩展性">

<div class="project-text">

**非常适合：**
- ✅ 联机游戏（权威状态模式便于扩展）
- ✅ 内容量大的项目（设计师不必写代码就能迭代）
- ✅ 团队开发（系统权责划分清楚）
- ✅ 武器／敌人种类多的游戏（架构本身就为扩展而生）

**可扩展的方向：**
- ✅ 新增武器类型（只需 Data Asset）
- ✅ 新增敌人行为（继承炮塔基类）
- ✅ 加入升级系统（运行时修改武器数据）
- ✅ 加入难度分级（在 GameManager 缩放数值）
- ✅ 加入联机（组件本身已为网络同步预留空间）

</div>

</ProjectPanel>

## 技术栈 {.outline-only}

<ProjectPanel icon="wrench" title="技术栈">

<div class="project-text">

- **引擎：** 虚幻引擎 5.0 以上
- **语言：** C++（遵循现代 C++17 标准）
- **架构：** 基于组件的 Actor，组合优先于继承
- **数据管理：** DataAsset 配置与 SaveGame 序列化
- **UI：** 以 Widget 系统构建 HUD
- **性能：** 对象池、高效射线检测，游戏过程中零内存分配
- **代码风格：** 遵循 UE 命名规范、良好封装、以委托驱动通信

**源代码：**
- `FPSCharacter.h/cpp` —— 玩家输入与移动
- `WeaponComponent.h/cpp` —— 武器开火与弹药管理
- `HealthComponent.h/cpp` —— 通用伤害系统
- `EnemyTurret.h/cpp` —— AI 敌人行为
- `GameManager.h/cpp` —— 游戏状态权威
- `ProjectilePool.h/cpp` —— 高效的投射物管理

</div>

</ProjectPanel>


## 相关链接 {.outline-only}

<ProjectPanel icon="link" title="相关链接">

<div class="project-text">

- **GitHub：** <a href= https://github.com/RayZ-c/Cpp-For-Engines > 链接</a>
- **源代码文档：** [暂未开放]
- **网页试玩：** [暂未开放]

</div>

</ProjectPanel>

---
