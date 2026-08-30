---
layout: doc
title: 賽博猴子無盡跑酷
description: 四天內以虛幻引擎 5 全藍圖完成的無盡跑酷，主角是坐輪椅的身障老人，一路被賽博猴子追趕。
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">專案狀態 :</span>
      <span class="info-line-value"> 已完成並可遊玩 | 4 天 Game Jam </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">引擎 :</span>
      <span class="info-line-value"> 虛幻引擎 5 | 100% 藍圖（無 C++） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">團隊 :</span>
      <span class="info-line-value"> 主程式兼視覺設計（4 人團隊） </span>
    </p>
  </div>
</div>

# 賽博猴子無盡跑酷 {.page-title-center}
-------

<p class="project-text">
  節奏明快的無盡跑酷，主角是坐輪椅的身障老人，在三條跑道間閃避障礙，身後是窮追不捨的賽博猴子。靠著純藍圖開發、清楚的分工與模組化架構，做到<strong>上線零 Bug</strong>。
</p>
<p class="project-text">
  這個專案展現的是<strong>快速原型能力</strong>、<strong>團隊協作</strong>，以及在<strong>極端時間壓力</strong>下依然交付得出可上線的程式碼。
</p>

<!-- HERO MEDIA CAROUSEL (fps-hero-*) -->
<MediaCarousel data-hx-reveal id="ee-hero-media" :slides="[
  { src: '/videos/elder-escape/ee-showcase-1.mp4', caption: '核心玩法循環展示。（分數達到 35 時觸發強化道具！）' }
]" />



---

# 總覽 {.section-title-center data-hx-reveal="true"}



## 專案概覽 {.outline-only}
<ProjectPanel icon="target" title="給招募方的快速摘要">


  <div class="project-text">

  **高壓下的交付：**
  - ✅ 4 天內做出完整、可遊玩的遊戲
  - ✅ 上線時零嚴重 Bug
  - ✅ 4 人團隊協作（分工明確，沒有互相卡住）
  - ✅ 純藍圖開發（迭代快，不必等編譯）

  **技術亮點：**
  - ✅ 三跑道移動系統，切換過渡平滑
  - ✅ 程序化地板生成（無限關卡，記憶體占用可控）
  - ✅ 難度漸進（速度持續爬升）
  - ✅ 最高分存檔（跨次遊玩序列化儲存）
  - ✅ 完整的音效設計（所有動作皆有音效，並有環境壓迫音）

  </div>

</ProjectPanel>


## 團隊分工 {.outline-only}
<ProjectPanel icon="users" title="團隊分工">


  <div class="project-text">


  **4 人團隊的分工：**
  - **主程式（我）：** 玩法系統、玩家控制器、GameMode、Bug 修復
  - **設計（我）：** 數值調校、障礙擺放策略、視覺打磨
  - **3D 建模：** 角色、障礙物、場景模型
  - **2D 美術：** UI 設計、動畫


  </div>

</ProjectPanel>

---



## 功能{.outline-only}

# 核心系統 {.section-title-center data-hx-reveal="true"}

## 1. 玩家移動與輸入 {.outline-only}

<ProjectPanel icon="columns-3" title="跑道系統與操作">

<div class="project-text">

**輸入架構：**
- **A / D：** 左右切換跑道（共 3 條，索引限制在 0–2）
- **W / 空白鍵：** 跳過障礙
- **S：** 強制落地（取消滯空）

**跑道切換：**
- 基於 Lerp 的平滑移動（而非瞬間吸附）
- 以 `CurrentLaneIndex` 與 `TargetLaneIndex` 追蹤狀態
- 每條跑道對應一組 Y 軸座標陣列

**為什麼這樣做有效：** 操作跟手、可預期，並且有即時的聲音與畫面回饋。接上 Enhanced Input System 意味著輸入處理一開始就是現代做法。

</div>

</ProjectPanel>

## 2. 難度遞進 {.outline-only}

<ProjectPanel icon="trending-up" title="漸進式難度曲線">

<div class="project-text">

**速度爬升：**
- 基礎速度 850 UU/s → 上限 3200 UU/s
- 每個間隔乘以 1.02 倍（可設定）
- 直接作用於 `CharacterMovement.MaxWalkSpeed`

**這樣設計的理由：**
- 不引入額外複雜度就能得到自然的難度曲線
- 反應窗口自然收窄，不需要額外的難度選項
- 張力會自己一路堆上去

**成果：** 玩家會自然地從遊刃有餘走到手忙腳亂，做出街機式的緊張感。

</div>

</ProjectPanel>

## 3. 程序化關卡生成 {.outline-only}

<ProjectPanel icon="infinity" title="無限關卡架構">

<div class="project-text">

**運作方式：**
- `BP_Floor` 地板塊生成各跑道對應的生成點
- 每個生成點隨機挑選障礙（陣列洗牌）
- 3 種障礙類型（牆、路障、陶罐），以 Switch on Int 分支
- 以 Child Actor Component 生成

**記憶體效率：**
- 場上地板塊數量固定（超出上限即銷毀最舊的一塊）
- 障礙物存活時間到期後自動銷毀
- 長時間遊玩不會出現效能衰退

**可擴充性：**
- 新增障礙只需加一個模型子物件，不必改邏輯
- 資料驅動的生成（每條跑道的擺放可設定）
- 設計師不必找程式設計師就能調平衡

</div>

</ProjectPanel>

## 4. 計分系統 {.outline-only}

<ProjectPanel icon="trophy" title="計分與存檔">

<div class="project-text">

**執行期計分：**
- 分數累加公式：`(DeltaTime * PointsMulti)`
- 分數倍率與速度掛鉤（鼓勵玩家冒險）
- 到達分數節點時播放提示音

**最高分存檔：**
- 使用 SaveGame API（`Runner_SaveGame`）
- 基於存檔槽的序列化（`"HighScoreValue"`）
- 開局自動讀取，死亡時比對，破紀錄才寫入

**兩套 UI Widget：**
1. **GamePlay_UI** —— 即時分數顯示（右上角）
2. **GameOver_UI** —— 最終分數與「重來 / 離開」按鈕

</div>

</ProjectPanel>

## 5. 音效與視覺設計 {.outline-only}

<ProjectPanel icon="volume-2" title="音效與追逐者 AI">

<div class="project-text">

**音效系統：**
- 跳躍、衝刺、死亡（快速／緩慢兩種）、猴子叫聲、背景音樂
- 在動作邏輯中直接嵌入 `Play Sound 2D` 節點
- 所有輸入都有即時的聲音回饋

**追逐的猴子（BP_Monkey）：**
- 只是視覺上的威脅，不參與玩法判定
- 透過 `VInterpTo` 跟隨玩家位置
- 強化敘事，但不影響遊戲平衡
- 用很低的機制複雜度換來個性與壓迫感

</div>

</ProjectPanel>

---
## 技術{.outline-only}

# 技術架構 {.section-title-center data-hx-reveal="true"}


## 藍圖設計模式 {.outline-only}
<ProjectPanel icon="puzzle" title="藍圖設計模式">

<div class="project-text">

**採用的設計模式：**

1. **資料驅動生成** —— 生成點可設定、障礙隨機挑選，沒有寫死的數值
2. **事件驅動溝通** —— 死亡觸發事件派發，分數透過 getter 更新，模組之間低耦合
3. **平滑過渡** —— 基於 Lerp 的移動、基於速度的跳躍、漸進的速度提升
4. **記憶體池化** —— 固定地板塊數量、障礙設有存活時間，盡量少生成 Actor

**4 天 Jam 選藍圖而非 C++ 的理由：**
- ✅ 不必等編譯，迭代更快
- ✅ 視覺化除錯，問題更好定位
- ✅ 非程式設計背景的組員也看得懂流程
- ✅ 搭配模組化架構，零 Bug 交付是做得到的

**協作方式：**
- 每日站會（同步進度與卡點）
- 共用設計文件（藍圖索引與設定）
- 每個系統都有明確負責人（避免同時改同一處）
- 每週試玩（週五收集回饋）

</div>

</ProjectPanel>

## 藍圖一覽 {.outline-only}

<ProjectPanel icon="workflow" title="核心藍圖拆解">

<div class="project-text">

| 藍圖 | 用途 |
|-----------|---------|
| **BP_RunnerCharacter** | 玩家控制器（輸入、跑道、死亡） |
| **BP_Obstacles**（牆／路障／陶罐） | 各種障礙變體，含碰撞與存活時間 |
| **BP_Floor** | 關卡地板生成器（生成點、隨機化） |
| **BP_Monkey** | 追逐的敵人（跟隨、動畫、音效） |
| **BP_RunnerGameMode** | 遊戲管理（分數、檢查點、難度） |
| **GamePlay_UI** | 遊戲內 HUD（分數顯示、即時更新） |
| **GameOver_UI** | 結算畫面（最終分數、重來／離開、存檔邏輯） |
| **Runner_SaveGame** | 最高分持久化層 |
| **IMC_RunnerDefault** | 輸入對應（A/D/W/S） |

**全部位於 `/Content/Runner/Blueprints/` —— 沒有任何 C++ 原始檔。**

</div>

</ProjectPanel>

---
## 其他{.outline-only}

# 補充說明 {.section-title-center data-hx-reveal="true"}

## 設計決策 {.outline-only}
<ProjectPanel icon="lightbulb" title="為什麼這樣設計？">

<div class="project-text">

**為什麼是 3 條跑道？**
- 輸入簡單（A/D/W/S 就涵蓋了全部操作）
- 畫面清楚（高速下依然讀得懂）
- 平衡（不至於手忙腳亂，也不會太單調）

**為什麼速度持續提升？**
- 不引入複雜度就得到自然的難度曲線
- 逼玩家全程專注（沒辦法放空）
- 死亡隨時可能發生（技術上限拉得很高）

**為什麼障礙隨機？**
- 防止背板 → 老玩家也得一直投入
- 難度公平（無法靠固定套路取巧）
- 提供近乎無限的重玩價值

**為什麼一擊即死？**
- 單局夠短（尊重玩家的時間）
- 讓分數真正有意義（不只是「撐了多久」）
- 維持張力（每個障礙都是生死關頭）


</div>

</ProjectPanel>


## 技術堆疊 {.outline-only}

<ProjectPanel icon="wrench" title="工具與技術">

<div class="project-text">

- **引擎：** 虛幻引擎 5.0 以上
- **語言：** 100% 藍圖（無 C++）
- **輸入系統：** Enhanced Input System（現代、可設定）
- **角色移動：** 內建 Character Movement 元件
- **存檔：** SaveGame API（基於存檔槽）
- **UI：** Widget UI 系統
- **音訊：** Sound Wave 資源搭配 2D 播放
- **算繪：** 骨架網格搭配 Niagara 粒子
- **架構：** 基於元件，組合優先於繼承

</div>

</ProjectPanel>



## 相關連結 {.outline-only}

<ProjectPanel icon="link" title="相關連結">

<div class="project-text">

- **GitHub：** [尚未開放]
- **試玩連結：** <a href='https://rayzc.itch.io/elder-escape' >Elder Escape</a>
- **文件：** 已包含在程式碼庫中

</div>

</ProjectPanel>

---
