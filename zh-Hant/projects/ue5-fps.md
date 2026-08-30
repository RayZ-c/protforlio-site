---
layout: doc
title: 第一人稱射擊框架
description: 可投入正式專案的 FPS 框架，包含模組化武器與彈藥管理、檢查點流程和砲塔 AI，用以展現系統架構能力。
---


<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">專案狀態 :</span>
      <span class="info-line-value"> 完整的系統展示 | 可擴充框架 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">專案類型 :</span>
      <span class="info-line-value"> 模組化框架 | 虛幻引擎 5（C++） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">核心方向 :</span>
      <span class="info-line-value"> 系統架構 | 資料驅動設計 </span>
    </p>
  </div>

</div>

# 第一人稱射擊框架 {.page-title-center}
-------

<p class="project-text">
  一套使用虛幻引擎 5 從零打造、<strong>可投入正式專案的 FPS 框架</strong>，透過武器管理、檢查點存檔與敵人 AI 展現<strong>系統架構能力</strong>。底層採用<strong>模組化、可擴充設計</strong>：新增武器或砲塔類型只需<strong>設定資料，不必修改程式</strong>；<strong>以元件為基礎的設計模式</strong>也便於快速迭代與團隊協作。
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<MediaCarousel data-hx-reveal id="fps-hero-media" :slides="[
  { src: '/videos/ue5-fps/fps-showcase-1.mp4', caption: '核心玩法循環展示：武器與 HUD 回饋（分數、血量、配裝）、檢查點與重生機制、砲塔 AI 戰鬥' }
]" />



---

# 總覽 {.section-title-center data-hx-reveal="true"}

## 專案概覽 {.outline-only}

<ProjectPanel icon="target" title="給招募方的快速摘要">

  <div class="project-text">
    <ul>
      <li><strong>基於元件的架構</strong>，讓各系統解耦且好測試</li>
      <li><strong>資料驅動的武器系統</strong> —— 新增武器只需設定，不必改程式</li>
      <li><strong>彈藥與換彈機制</strong>，支援自動與手動換彈</li>
      <li><strong>檢查點存檔</strong> —— 觸碰即儲存與還原玩家狀態</li>
      <li><strong>砲塔 AI 與投射物物件池</strong>，高效管理敵人</li>
      <li><strong>計分系統與最高分序列化</strong>，使用 UE5 Save Game API</li>
      <li><strong>生命值元件與受擊回饋</strong>，含擊退與硬直機制</li>
      <li><strong>完整的 UI 系統</strong>（血條、武器顯示、分數追蹤）</li>
    </ul>
  </div>

</ProjectPanel>

## 核心設計理念 {.outline-only}

<ProjectPanel icon="lightbulb" title="核心設計理念">

<div class="project-text">

# 「能擴充的系統，都是解耦的系統。」

這套框架想證明的是：
- ✅ **元件驅動的設計**（行為放在可重複使用的元件裡，而不是巨型類別中）
- ✅ **資料優先的架構**（武器屬性由設定定義，而非寫死的數值）
- ✅ **關注點分離**（輸入、移動、戰鬥、UI 各自獨立）
- ✅ **注重效能**（投射物物件池、高效射線偵測）
- ✅ **適合團隊**（新的設計師不必碰玩法程式就能加內容）

每個系統都在回答同一個問題：*「怎樣做出能讓多人同時協作的系統？」*

</div>

</ProjectPanel>

---

## 功能{.outline-only}

# 亮點功能 {.section-title-center data-hx-reveal="true"}

## 1. 武器與彈藥系統 {.outline-only}

<ProjectPanel icon="blocks" title="資料驅動的武器框架">



<div class="project-text">

**問題：** 把武器屬性（傷害、射速、彈匣容量）寫死在程式裡，代表每次調整都得找程式設計師，每次改平衡都要重新編譯。

**解法：** 所有武器屬性都放進可設定的 Data Asset：

<ProjectPanel icon="file-code" variant="mini" title="UWeaponDataAsset（範例）">

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

**成果：** 設計師直接在 Unreal 編輯器裡改武器屬性，不必重新編譯。新增武器只要幾分鐘（複製資產、調數值、完成）。多把武器並存也不會互相衝突。


<ProjectPanel icon="refresh-cw" variant="mini" title="彈藥管理與自動換彈">

<div class="mini-panel-body">

以彈匣為單位的系統，另有備彈，彈藥歸零時自動換彈：

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

## 2. 檢查點與存檔 {.outline-only}

<ProjectPanel icon="save" title="檢查點重生與遊戲狀態">

<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-checkpoint-media" :slides="[
  { src: '/videos/ue5-fps/fps-checkpoint.mp4', caption: '檢查點與重生機制展示。' }
]" />

<div class="project-text">

**流程：**
1. 玩家抵達檢查點 → 觸碰 Actor，位置被記錄
2. 玩家受傷 → 血量歸零
3. 顯示死亡畫面與重生按鈕
4. 重生時把玩家傳送回檢查點並回滿血

**成果：** 一套乾淨、可重複使用的重生模式。支援多個檢查點（最後觸碰的就是目前的檢查點）。


<ProjectPanel icon="flag" variant="mini" title="檢查點 Actor 實作">

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

<ProjectPanel icon="rotate-ccw" variant="mini" title="死亡與重生流程">

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

## 3. 砲塔 AI 與效能 {.outline-only}

<ProjectPanel icon="cpu" title="敵人 AI 與投射物物件池">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-ai-media" :slides="[
  { src: '/videos/ue5-fps/fps-ai.mp4', caption: '不同類型砲塔 AI 的展示。' }
]" />


<div class="project-text">

**砲塔 AI：** 偵測範圍、射速與索敵行為皆可設定。

**投射物物件池：** 預先建立物件池 → 回收重用，而不是每幀生成／銷毀。成果：50 個以上敵人同時開火也不掉幀。


<ProjectPanel icon="cpu" variant="mini" title="砲塔 AI 行為">

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

<ProjectPanel icon="boxes" variant="mini" title="物件池模式">

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

**成果：** 遊戲過程中零記憶體配置，規模再大也穩。

</div>

</ProjectPanel>
</div>



</ProjectPanel>

## 4. 計分與存檔 {.outline-only}

<ProjectPanel icon="database" title="分數追蹤與最高分存檔">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-score-media" :slides="[
  { src: '/videos/ue5-fps/fps-score.mp4', caption: '各種得分方式的展示。' }
]" />



<div class="project-text">

**得分來源：**
- ✅ 摧毀砲塔：+1 分
- ✅ 抵達檢查點：+1 分（作為正向回饋）

**最高分存檔：** 透過 UE5 SaveGame API 序列化寫入磁碟。分數跨次遊玩保留，鼓勵玩家挑戰自己的最高紀錄。


<ProjectPanel icon="trophy" variant="mini" title="計分系統實作">

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

## 5. 拾取與增益系統 {.outline-only}

<ProjectPanel icon="sparkles" title="拾取與增益系統">


<!-- GROUND MEDIA CAROUSEL (fm-ground-*) -->
<MediaCarousel data-hx-reveal id="fm-pu-media" :slides="[
  { src: '/videos/ue5-fps/fps-pickup.mp4', caption: '回血拾取物、移動速度增益拾取物，以及複合效果（例如扣血換加速）' }
]" />



<div class="project-text">

沿用同一套 **PickupComponent + BuffBaseComponent** 模式，新增拾取物類型只需建立 Data Asset，完全不必改程式。

**資料驅動的拾取物，增益可自由設定：**

<ProjectPanel icon="file-code" variant="mini" title="UPickupDataAsset（範例）">

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

**成果：** 新增拾取物只要幾分鐘——建資產、設定增益、放進關卡。與武器同樣的擴充模式：新進設計師不必碰玩法程式就能迭代。

</div>



</ProjectPanel>

---



## 技術{.outline-only}

# 技術細節 {.section-title-center data-hx-reveal="true"}

## 架構概覽 {.outline-only}

<ProjectPanel icon="layers" title="架構概覽與設計模式">

<div class="project-text">

### 架構圖

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

**單一職責原則：**
- `FPSCharacter`：輸入 → 移動的對應
- `WeaponComponent`：武器狀態、開火邏輯、彈藥追蹤
- `HealthComponent`：傷害處理、死亡觸發
- `GameManager`：檢查點位置與分數的唯一狀態來源
- `EnemyTurret`：AI 行為與目標偵測
- `ProjectilePool`：投射物的生命週期管理

**這樣為什麼行得通：**
- ✅ 要加新武器？加一個 Data Asset，程式不用動
- ✅ 要加新敵人？繼承砲塔基底類別，生命值系統照用
- ✅ 要改 HUD？更新 UI Widget，玩法完全不受影響


<ProjectPanel icon="heart-pulse" variant="mini" title="生命值元件（可重複使用）">

<div class="mini-panel-body">

玩家和敵人共用同一套：

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

<ProjectPanel icon="puzzle" variant="mini" title="用到的設計模式">

<div class="mini-panel-body">

- **觀察者模式：** 以委派通知 UI 狀態變化（避免緊耦合）
- **物件池模式：** 投射物池化以提升效率
- **單例模式：** GameManager 作為遊戲狀態的唯一來源
- **狀態模式：** 武器換彈、生命值狀態
- **元件模式：** 組合優先於繼承（這正是它能擴充的原因）\
拾取與增益系統同樣以元件搭配 Data Asset 實作

</div>

</ProjectPanel>
</div>

</ProjectPanel>

---

## 其他{.outline-only}

# 補充說明 {.section-title-center data-hx-reveal="true"}

## 核心能力 {.outline-only}

<ProjectPanel icon="award" title="核心能力">

<div class="project-text">

**系統架構：**
- ✅ 基於元件的設計（解耦、可組合、可重複使用）
- ✅ 資料驅動的做法（改設定，而不是改程式）
- ✅ 關注點分離（輸入、邏輯、狀態、UI 各自獨立）
- ✅ 以單例集中管理遊戲狀態

**C++ 實務：**
- ✅ 現代 C++（智慧指標、lambda、委派）
- ✅ 正確的 const 語意與記憶體管理
- ✅ 結構清楚、有註解的程式碼
- ✅ 高效的做法（物件池、提早回傳）

**UE5 相關：**
- ✅ 熟練運用元件架構
- ✅ 以委派系統實現解耦溝通
- ✅ 使用 Save Game API 做存檔
- ✅ 以 Timer Manager 處理非同步流程
- ✅ 世界生成與生命週期管理

</div>

</ProjectPanel>

## 適用情境與擴充性 {.outline-only}

<ProjectPanel icon="puzzle" title="適用情境與擴充性">

<div class="project-text">

**非常適合：**
- ✅ 連線遊戲（權威狀態模式便於擴充）
- ✅ 內容量大的專案（設計師不必寫程式就能迭代）
- ✅ 團隊開發（系統權責劃分清楚）
- ✅ 武器／敵人種類多的遊戲（架構本身就為擴充而生）

**可擴充的方向：**
- ✅ 新增武器類型（只需 Data Asset）
- ✅ 新增敵人行為（繼承砲塔基底類別）
- ✅ 加入升級系統（執行期修改武器資料）
- ✅ 加入難度分級（在 GameManager 縮放數值）
- ✅ 加入連線（元件本身已為網路同步預留空間）

</div>

</ProjectPanel>

## 技術堆疊 {.outline-only}

<ProjectPanel icon="wrench" title="技術堆疊">

<div class="project-text">

- **引擎：** 虛幻引擎 5.0 以上
- **語言：** C++（遵循現代 C++17 標準）
- **架構：** 基於元件的 Actor，組合優先於繼承
- **資料管理：** DataAsset 設定與 SaveGame 序列化
- **UI：** 以 Widget 系統建構 HUD
- **效能：** 物件池、高效射線偵測，遊戲過程中零記憶體配置
- **程式風格：** 遵循 UE 命名慣例、良好封裝、以委派驅動溝通

**原始碼：**
- `FPSCharacter.h/cpp` —— 玩家輸入與移動
- `WeaponComponent.h/cpp` —— 武器開火與彈藥管理
- `HealthComponent.h/cpp` —— 通用傷害系統
- `EnemyTurret.h/cpp` —— AI 敵人行為
- `GameManager.h/cpp` —— 遊戲狀態權威
- `ProjectilePool.h/cpp` —— 高效的投射物管理

</div>

</ProjectPanel>


## 相關連結 {.outline-only}

<ProjectPanel icon="link" title="相關連結">

<div class="project-text">

- **GitHub：** <a href= https://github.com/RayZ-c/Cpp-For-Engines > 連結</a>
- **原始碼說明文件：** [尚未開放]
- **網頁試玩：** [尚未開放]

</div>

</ProjectPanel>

---
