---
layout: doc
title: 像素冒險
description: 像素風俯視角動作遊戲，包含兩場風格迥異的 Boss 戰，以及可存檔的寶石收集成長系統
---

<a href="../../zh-Hant/projects/" class="back-projects-button"> ❮❮ 所有專案 </a>


<div class="project-info-row">
  <div class="project-info-left">
    <p class="info-line">
      <span class="info-line-label">專案狀態 :</span>
      <span class="info-line-value"> 進行中 | 8 週</span>
    </p>
    <p class="info-line">
      <span class="info-line-label">專案類型 :</span>
      <span class="info-line-value"> 個人專案 | Unity（C#）</span>
    </p>
  </div>
</div>

# 像素冒險 {.page-title-center}
-------


<p class="project-text">
  一款 <strong>Unity 2D 俯視角動作遊戲</strong>，玩家需要擊敗風格各異的 Boss 並收集寶石來解鎖最終房間。開發重點放在<strong>跟手的戰鬥</strong>、<strong>Boss 設計</strong>與<strong>流暢的手感</strong>。
</p>


  <div class="project-info-right">
    <MediaCarousel data-hx-reveal id="pa-media" :slides="[
  { src: '/images/PixelAdventure/pa-1.png', type: 'image', alt: 'Pixel Adventure 截圖 1', caption: '收集最終寶石的展示。' },
  { src: '/videos/PixelAdventure/pa-2.mp4', caption: '節奏明快的機器人 Boss 戰展示。' },
  { src: '/videos/PixelAdventure/pa-3.mp4', caption: '偏策略的死靈法師 Boss 戰展示。' },
  { src: '/images/PixelAdventure/pa-4.png', type: 'image', alt: 'Pixel Adventure 截圖 4', caption: '死靈法師 Boss 房間。' },
  { src: '/images/PixelAdventure/pa-5.png', type: 'image', alt: 'Pixel Adventure 截圖 5', caption: '機器人 Boss 房間。' },
  { src: '/images/PixelAdventure/pa-6.png', type: 'image', alt: 'Pixel Adventure 截圖 6', caption: '劇情中的寶石。' }
]" />
  </div>





---
# 總覽 {.section-title-center data-hx-reveal="true"}


## 給招募方的快速摘要 {.outline-only}


<ProjectPanel icon="target" title="給招募方的快速摘要">

  <div class="project-text">
    <ul>
      <li>在可重複使用的敵人架構之上，設計並實作了<strong>兩個機制完全不同的 Boss</strong></li>
      <li>做出<strong>完整的遊戲循環</strong>：選單 → 開場 → 探索 → Boss 戰 → 成長 → 通關</li>
      <li>在 Unity 2D 中獨立完成<strong>戰鬥、AI、UI、特效、音訊與存檔系統</strong></li>
      <li>重點打磨<strong>手感</strong>（衝刺、Hit Stop（命中停頓）、特效、音效）與<strong>清晰、易擴充的程式結構</strong></li>
    </ul>
  </div>

</ProjectPanel>


## 玩法概覽 {.outline-only}
<ProjectPanel icon="gamepad-2" title="玩法概覽">

  <p class="project-text">
    玩家追隨一顆神秘寶石進入洞窟，必須擊敗兩個截然不同的 Boss，收集寶石以推進流程。
  </p>

  <p class="project-text">
    核心循環結合了<strong>探索</strong>、<strong>Boss 戰</strong>與<strong>資源管理型戰鬥</strong>。
  </p>

  <h3 class="project-text">展示影片：</h3>


  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/3lBQ5KZLOZc?si=8msajJs84y9lskF7"
      title="Pixel Adventure 實機展示"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>


  <h3 class="project-text">核心玩法：</h3>

  <div class="project-text">
    <ul>
      <li><strong>雙攻擊方式：</strong>近戰揮劍（消耗體力）與火球遠程（消耗魔力）</li>
      <li><strong>Boss 1 —— 快節奏機器人：</strong>在場地內瞬移並高頻發射彈幕，逼玩家積極使用衝刺</li>
      <li><strong>Boss 2 —— 策略型死靈法師：</strong>發射三連射擊、召喚骷髏法師，血量降到 50% 時分裂出兩個暗影分身</li>
      <li><strong>成長：</strong>需集滿 2 顆寶石才能解鎖最終房間；死亡後重生但不會清空已收集的寶石</li>
      <li><strong>打磨：</strong>命中停頓、擊退回饋、粒子特效、開場演出與通關畫面</li>
    </ul>
  </div>

</ProjectPanel>



---
# 亮點 {.section-title-center data-hx-reveal="true"}



## 架構與設計模式 {.outline-only}
<ProjectPanel icon="layers" title="架構與設計模式">

  <div class="project-text">
    <ul>
      <li><strong>敵人 AI 框架：</strong>以 <code>Enemy</code> 父類別為基礎的繼承體系；<code>Boss1</code> 與 <code>Boss2</code> 各自覆寫行為，實作專屬的攻擊模式</li>
      <li><strong>狀態機：</strong>玩家與敵人的行為都由分層狀態系統驅動，依輸入進行狀態切換</li>
      <li><strong>特效管理：</strong>集中式單例 <code>VFXManager</code> 統一負責特效的生成與回收</li>
      <li><strong>資料持久化：</strong><code>ScoreSystem</code> 搭配 <code>PlayerPrefs</code>，跨次遊玩儲存寶石進度</li>
    </ul>
  </div>

</ProjectPanel>



## 已實作的系統 {.outline-only}
<ProjectPanel icon="layers" title="已實作的系統">

  <div class="project-text">
    <ul>
      <li><strong>戰鬥：</strong>判定框偵測、傷害計算、擊退機制</li>
      <li><strong>移動：</strong>八方向俯視角移動，含衝刺、體力消耗與冷卻管理</li>
      <li><strong>Boss AI：</strong>以協程控制技能時序、冷卻處理與階段轉換（例如死靈法師的分身階段）</li>
      <li><strong>UI：</strong>即時的生命、體力與魔力條；暫停選單含繼續、重來、操作說明、主選單與離開</li>
      <li><strong>音訊：</strong>集中式 <code>AudioManager</code> 負責音效播放</li>
    </ul>
  </div>

</ProjectPanel>
