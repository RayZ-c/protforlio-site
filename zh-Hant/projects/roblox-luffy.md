---
layout: doc
title: Roblox 戰鬥招式委託開發
description: 為 Roblox 客戶量身打造的 4 技能 + 變身系統。所有視覺表現、動畫、音效與腳本皆由個人獨立完成。
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>

<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">狀態 :</span>
      <span class="info-line-value"> 已交付並上線 </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">擔任角色 :</span>
      <span class="info-line-value"> 獨立開發（動畫、特效、音效、腳本） </span>
    </p>
    <p class="info-line">
      <span class="info-line-label">平台 :</span>
      <span class="info-line-value"> Roblox Studio（Lua） </span>
    </p>
  </div>
</div>

# Roblox 戰鬥招式組 {.page-title-center}
### 客戶委託：4 個技能 + 變身系統 {.page-title-center}


<MediaCarousel data-hx-reveal id="rl-hero-media" :slides="[
  { src: 'https://www.youtube.com/embed/79QGymAW9uE?si=bbwLB3-aUYcUDnBk', type: 'embed', caption: '完整招式展示：4 個技能與變身系統' }
]" />





## 概覽 {.outline-only}

<ProjectPanel icon="target" title="概覽">

<div class="project-text">

  依客戶規格量身打造的戰鬥招式組：

  - **4 個差異化技能：** 各自擁有獨立的輸入方式、冷卻、動畫與粒子回饋
  - **變身／強化系統：** 視覺型態切換，並伴隨屬性倍率變化
  - **動畫：** 為所有技能與變身製作的 Roblox 骨架動畫
  - **視覺特效：** 粒子系統與技能時序同步
  - **音效設計：** 每個技能與變身觸發都有專屬音效
  - **腳本：** 純 Lua 後端（輸入處理、技能時序、冷卻管理）

</div>
</ProjectPanel>



## 實作 {.outline-only}

<ProjectPanel icon="settings" title="技術實作">

<div class="project-text">

| 模組 | 說明 |
|---|---|
| **動畫系統** | 6 組以上自製動畫（技能 1–4、變身進入與退出） |
| **特效整合** | 用於技能回饋的粒子系統，以及變身光環 |
| **音效設計** | 技能起手音、命中音、變身主題音 |
| **技能腳本** | 輸入偵測、冷卻計時、傷害判定框、用戶端預測 |
| **變身邏輯** | 狀態機負責屬性縮放、動畫過渡與視覺表現 |
| **打磨** | 粒子時序對齊動畫、以音效強化回饋、連段的視覺提示 |

</div>
</ProjectPanel>


## 相關連結 {.outline-only}

<ProjectPanel icon="link" title="相關連結">

<div class="project-text">

- **官方頁面：** <a href= https://www.roblox.com/games/9123465176/Luffy-fruit-test >試玩連結</a>
- **聯絡方式：** 本人（Discord：rayz.c）

</div>

</ProjectPanel>


---
