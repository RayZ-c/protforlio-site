---
layout: doc
title: Roblox 戰鬥系統框架
description: 可重複使用的 5 段連段 + 格擋框架，已售予多位客戶。包含擊退、破防、重擊與同步回饋。
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">狀態 :</span>
      <span class="info-line-value"> 已上線，多客戶使用中 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">擔任角色 :</span>
      <span class="info-line-value"> 框架開發（系統設計與 Lua） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">平台 :</span>
      <span class="info-line-value"> Roblox Studio（可重複使用模組） </span>
    </p>
  </div>
</div>

# Roblox 戰鬥系統框架 {.page-title-center}
### 可重複使用的 5 段連段 + 格擋系統 {.page-title-center}


<MediaCarousel data-hx-reveal id="rcf-hero-media" :slides="[
  { src: '/videos/roblox-combat/rc-showcase-1.mp4', caption: '完整戰鬥系統：5 段連段、擊退、格擋、破防與重擊' }
]" />





## 概覽 {.outline-only}

<ProjectPanel icon="target" title="概覽">

<div class="project-text">

為多款 Roblox 遊戲重複使用而設計、可投入正式專案的戰鬥框架：

- **5 段連段：** 連續攻擊動畫，每一段傷害遞增
- **擊退系統：** 連段過程中擊退逐段增強，最後一擊為重擊退
- **格擋機制：** 完整格擋狀態，具備減傷與破防門檻
- **破防反應：** 格擋被打破時觸發硬直動畫並重置相關數值
- **重擊：** 獨立輸入的破防攻擊，冷卻更長，必定造成擊退
- **打擊回饋：** 攻擊方與防守方的粒子與動畫反應彼此同步

</div>
</ProjectPanel>



## 實作 {.outline-only}

<ProjectPanel icon="settings" title="技術實作">

<div class="project-text">

| 模組 | 說明 |
|---|---|
| **連段系統** | 5 段連續攻擊，逐段調整傷害與擊退，並設有連段中斷計時 |
| **擊退物理** | 帶方向判定的擊退（隨連段數遞增，最後一擊達到上限） |
| **格擋狀態機** | 格擋中 → 受擊 → 破防 → 硬直恢復 |
| **破防邏輯** | 累積傷害達到門檻即觸發破防，逾時後重置 |
| **重擊系統** | 獨立輸入、動畫更長，可自動破防 |
| **回饋系統** | 動畫反應（踉蹌、格擋反應）、粒子生成、傷害數字 |
| **模組化設計** | 以數值驅動的平衡設定（傷害、擊退、冷卻皆可調整） |

</div>
</ProjectPanel>


## 為什麼可以重複使用 {.outline-only}

<ProjectPanel icon="recycle" title="重複使用性與成果">

<div class="project-text">

- **沒有寫死的數值** —— 傷害、擊退、冷卻與時序全部集中在設定表中
- **不綁定特定動畫** —— 使用通用動畫命名，可搭配任意角色骨架
- **即插即用** —— 把模組放進專案、接上角色、設定參數即可
- **易於擴充** —— 新增攻擊或調整格擋行為都不必動到核心邏輯
- **多客戶重複使用** —— 同一套程式碼，各遊戲使用各自的平衡設定

**成果：** 已交付給 3 位以上客戶，並針對各自的遊戲做了數值調校。框架涵蓋了核心戰鬥流程，同時維持輕量與良好效能。客戶回報整合所需時間很短，且不必改程式就能調整機制。

</div>
</ProjectPanel>
