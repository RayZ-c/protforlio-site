---
layout: home
title: Raymond Cheng — 遊戲程式設計師
description: 使用 Unity、虛幻引擎 5 與 Roblox 的遊戲程式與系統開發者。戰鬥系統、遊戲手感，以及已完成的專案。
# markdownStyles:false hands full layout control to the experimental homepage
# components instead of the default VitePress `.vp-doc` prose styling.
markdownStyles: false
---

<script setup>
import { withBase } from 'vitepress'
</script>

<HomeExperiment>
<!-- ─── HERO ─────────────────────────────────────────────────────────────── -->
<ShowreelHero />
<!-- ─── CREDIBILITY STRIP (bridges hero into the page) ───────────────────── -->
<div class="hx-stats">
  <div class="hx-shell">
    <div class="hx-stats-grid" data-hx-reveal>
      <div class="hx-stat">
        <span class="hx-stat-value">1000 萬+</span>
        <span class="hx-stat-label">模組作品累積瀏覽量</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">4 年以上</span>
        <span class="hx-stat-label">遊戲玩法接案經驗</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">9</span>
        <span class="hx-stat-label">專案與原型</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">3</span>
        <span class="hx-stat-label">引擎：Unity、UE5、Roblox</span>
      </div>
    </div>
  </div>
</div>
<!-- ─── 01 · FEATURED PROJECTS ───────────────────────────────────────────── -->
<HomeSection
  id="featured-work"
  eyebrow="精選作品"
  title="重點專案"
  lead="兩個獨立完成的專案，涵蓋我主要的兩個方向：Unity 上的戰鬥與手感，以及虛幻引擎 5 上的模組化系統架構。"
>
  <div class="hx-projects">
    <HomeProjectCard
      href="/zh-Hant/projects/path-to-power"
      title="龍珠 2D 平台動作"
      blurb="以戰鬥為核心的 2D 動作平台遊戲，包含自製角色控制器、連段系統、多層次打擊回饋，以及純 C# 撰寫的 UI Toolkit HUD。四週獨立開發完成。"
      video="/videos/path-to-power/ptp-showcase-1V2.mp4"
      poster="/banner-cover.jpg"
      date="2025 年 9 月"
      context="個人專案"
      flag="精選"
      :tags="['Unity', 'C#', '2D', '戰鬥', '手感']"
      cta="查看專案詳解"
    />
    <HomeProjectCard
      href="/zh-Hant/projects/ue5-fps"
      title="第一人稱射擊框架"
      blurb="使用虛幻引擎 5 與 C++ 獨立開發的 FPS 框架，包含模組化武器、敵人 AI、檢查點與計分系統，架構以可讀性與可擴充性為目標。"
      video="/videos/ue5-fps/fps-showcase-0.mp4"
      date="2025 年 10 月"
      context="學校專案"
      flag="精選"
      :tags="['虛幻引擎 5', 'C++', '3D', 'FPS', 'AI']"
      cta="查看專案詳解"
    />
  </div>
  <div class="hx-cta-row" data-hx-reveal>
    <a class="hx-btn" :href="withBase('/zh-Hant/projects/')">查看所有專案</a>
  </div>
</HomeSection>
<!-- ─── 02 · ABOUT ───────────────────────────────────────────────────────── -->
<HomeSection
  id="about"
  eyebrow="關於我"
  title="遊戲程式設計師 · 專精戰鬥系統"
  band
>
  <div class="hx-about">
    <div data-hx-reveal>
      <div class="hx-portrait">
        <img :src="withBase('/raymond-portrait.jpg')" alt="Raymond Cheng 的照片" width="640" height="800" loading="lazy" decoding="async">
      </div>
      <span class="hx-portrait-caption">Raymond Cheng · 英國</span>
    </div>
    <div class="hx-about-body" data-hx-reveal>
      <p>我目前就讀於<a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer">斯塔福德郡大學</a>的<a href="https://www.staffs.ac.uk/course/computer-games-design-programming-bsc" target="_blank" rel="noopener noreferrer">遊戲程式與設計（榮譽）學士</a>學程，專攻方向是<span class="hx-hl">快節奏戰鬥</span>、<span class="hx-hl">遊戲手感</span>以及<span class="hx-hl">特效與音效實作</span>。</p>
      <p>我的專案大多使用 <strong>Unity</strong> 和<strong>虛幻引擎 5</strong> 開發，重點放在跟手的角色控制器、Boss 戰，以及好讀、好擴充的 C# / C++ 架構上。</p>
      <p>課業之外，我為 Roblox 遊戲完成過<strong>多個接案專案</strong>，也為熱門作品<strong>製作過廣受歡迎的社群模組</strong>，逐漸建立起<span class="hx-hl">原型做得快</span>、<span class="hx-hl">交付穩定</span>、<span class="hx-hl">玩法打磨到位</span>的口碑。</p>
      <p>在 Game Jam 中我通常擔任<strong>主程式兼設計</strong>，負責把美術、設計與程式串起來，讓團隊能快速迭代，同時維持遊戲整體的完整與樂趣。</p>
      <p>我正在積極尋找<strong>遊戲程式方向的機會</strong>，希望累積更多實戰經驗。</p>
    </div>
  </div>
  <div class="hx-skills" data-hx-reveal>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">引擎</span>
      <span class="hx-skill-detail">Unity · 虛幻引擎 5 · Roblox Studio</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">語言</span>
      <span class="hx-skill-detail">C# · C++ · Lua · 藍圖</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">系統</span>
      <span class="hx-skill-detail">戰鬥、移動與技能框架；敵人 AI；UI Toolkit HUD</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">手感</span>
      <span class="hx-skill-detail">容錯機制、打擊回饋、特效與音效實作</span>
    </div>
  </div>
</HomeSection>
<!-- ─── 03 · EXPERIENCE ──────────────────────────────────────────────────── -->
<HomeSection
  id="experience"
  eyebrow="工作經歷"
  title="我交付過的作品"
  lead="面向外部團隊與線上玩家社群的付費遊戲開發工作。"
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="2021 年 12 月 — 至今"
      role="Roblox 遊戲程式設計師（接案）"
      org="遠端"
      meta="Roblox 委託專案"
      :tags="['Roblox Studio', 'Lua', '戰鬥系統', '特效/音效']"
    >
      <li>為多款 Roblox 作品設計並實作<strong>戰鬥系統、變身機制與演出級技能</strong>，並依各開發團隊的需求量身調整。</li>
      <li>為技能、大絕與變身製作<strong>高表現力的特效與音效</strong>，同時兼顧手感、辨識度，以及低階裝置上的效能。</li>
      <li>建立<strong>模組化的角色與招式框架</strong>，讓團隊不必重寫核心系統就能接入新角色、新型態與新技能。</li>
      <li>在緊湊的時程內交付原型與可上線的功能，成為團隊在<strong>快速、穩定的玩法迭代</strong>上優先合作的接案夥伴。</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="2024 年 — 至今"
      role="社群模組開發者（接案）"
      org="遠端"
      meta="社群模組與委託"
      :tags="['虛幻引擎 5', '玩法', '音效設計']"
    >
      <li>為 PC 遊戲製作<strong>高關注度的玩法與外觀模組</strong>，包括發布於 Nexus Mods、在社群中爆紅的 Marvel Rivals 模組 <a :href="withBase('/zh-Hant/projects/star-platinum-mod.html')">&ldquo;Star Platinum over Iron Fist&rdquo;</a>。</li>
      <li>逆向分析遊戲系統，在不超出引擎與效能限制的前提下，將<strong>自製動畫、特效與邏輯</strong>掛進既有的戰鬥框架。</li>
      <li>依社群回饋快速迭代，在模組戰鬥體驗中平衡<strong>粉絲向還原、動作辨識度與競技公平性</strong>。</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 04 · EDUCATION ───────────────────────────────────────────────────── -->
<HomeSection
  id="education"
  eyebrow="學歷"
  title="學術背景"
  band
  accent="cool"
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="2024 年 9 月 — 至今"
      role="遊戲程式與設計（榮譽）學士"
      org="斯塔福德郡大學"
      org-href="https://www.staffs.ac.uk/"
      meta="英國 · 斯托克"
      :tags="['Unity', '虛幻引擎 5', 'C#', 'C++']"
    >
      <li>主修<strong>遊戲程式與設計</strong>，重點是以 C# 和 C++ 在 <strong>Unity</strong> 與<strong>虛幻引擎</strong>上做出符合業界水準的專案。</li>
      <li>系統性訓練<strong>機制設計、原型開發、AI 與引擎腳本</strong>，流程與專業遊戲工作室的做法一致。</li>
      <li>完成多個<strong>獲得 A 等成績的專案</strong>，包括以戰鬥為核心的原型，以及圍繞操作跟手與手感打磨的作品集專案。</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="2022 年 9 月 — 2024 年 6 月"
      role="A-Level：物理、數學、資訊科學"
      org="Merchiston Castle School"
      org-href="https://www.merchiston.co.uk/"
      meta="英國 · 愛丁堡"
      :tags="['數學', '物理', '資訊科學']"
    >
      <li>透過高階數學與物理課程打下扎實的<strong>解題、邏輯與分析</strong>基礎，為技術向的遊戲程式工作提供支撐。</li>
      <li>修習<strong>演算法、資料結構與軟體工程</strong>等資訊科學內容，並在小型程式專案中實際應用。</li>
      <li>在同時兼顧三門理工科目與個人遊戲開發的過程中，培養出<strong>自律與時間管理</strong>的能力。</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 05 · CONTACT ─────────────────────────────────────────────────────── -->
<HomeSection id="contact" eyebrow="聯絡方式">
  <div class="hx-contact hx-glow" data-hx-reveal>
    <div class="hx-contact-grid">
      <div>
        <p class="hx-availability"><span class="hx-dot" aria-hidden="true"></span>目前可接洽</p>
        <!-- zh-review: same casual register as the English "Let's build something".
             Two short lines preserve the original line break and rhythm. -->
        <h2 class="hx-contact-title">一起做點<br>東西吧</h2>
        <p>歡迎洽談<strong>遊戲程式職缺、實習與接案委託</strong>。常駐<strong>英國（GMT 時區）</strong>，通常於 <strong>24 至 48 小時</strong>內回覆。</p>
        <div class="hx-cta-row" style="justify-content:flex-start;margin-top:24px">
          <a class="hx-btn" href="mailto:raymondcheng0223@gmail.com">寄信給我</a>
        </div>
      </div>
      <div>
        <div class="hx-channels">
          <a class="hx-channel" href="mailto:raymondcheng0223@gmail.com">
            <span class="hx-channel-label">電子郵件</span>
            <span class="hx-channel-value">raymondcheng0223@gmail.com</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">Discord</span>
            <span class="hx-channel-value">rayz.c</span>
          </div>
          <a class="hx-channel" :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">
            <span class="hx-channel-label">履歷</span>
            <span class="hx-channel-value">開啟履歷（PDF，英文）&rarr;</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">所在地</span>
            <span class="hx-channel-value">英國 &middot; GMT</span>
          </div>
        </div>
        <div class="hx-socials">
          <a class="hx-social" href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="hx-social" href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="hx-social" href="https://www.youtube.com/@RayZc" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a class="hx-social" href="https://www.instagram.com/ray_c.223/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a class="hx-social" href="https://x.com/RayRay123c" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </div>
  </div>
</HomeSection>
<!-- ─── FOOTER ───────────────────────────────────────────────────────────── -->
<footer class="hx-footer">
  <div class="hx-shell hx-footer-inner">
    <div>
      <div class="hx-footer-mark">RayZc</div>
      <p class="hx-footer-note">&copy; 2025 Raymond Cheng. 保留一切權利。</p>
    </div>
    <nav class="hx-footer-links" aria-label="頁尾導覽">
      <a :href="withBase('/zh-Hant/projects/')">專案</a>
      <a :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">履歷</a>
      <a href="mailto:raymondcheng0223@gmail.com">電子郵件</a>
      <a href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </div>
</footer>
</HomeExperiment>
