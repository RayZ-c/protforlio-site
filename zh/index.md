---
layout: home
title: Raymond Cheng — 游戏玩法程序员
description: 使用 Unity、虚幻引擎 5 与 Roblox 的游戏玩法与系统程序员，专注战斗系统、游戏手感与已上线项目。
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
        <span class="hx-stat-value">1000 万+</span>
        <span class="hx-stat-label">模组作品累计浏览量</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">4 年以上</span>
        <span class="hx-stat-label">玩法开发外包经验</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">9</span>
        <span class="hx-stat-label">项目与原型</span>
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
  eyebrow="精选作品"
  title="重点项目"
  lead="两个个人独立完成的项目，覆盖了我主要的两个方向：Unity 上的战斗与手感，以及虚幻引擎 5 上的模块化系统架构。"
>
  <div class="hx-projects">
    <HomeProjectCard
      href="/zh/projects/path-to-power"
      title="龙珠 2D 平台动作"
      blurb="以战斗为核心的 2D 动作平台跳跃游戏，包含自制角色控制器、连招系统、多层次打击反馈，以及纯 C# 编写的 UI Toolkit HUD。四周独立开发完成。"
      video="/videos/path-to-power/ptp-showcase-1V2.mp4"
      poster="/banner-cover.jpg"
      date="2025 年 9 月"
      context="个人项目"
      flag="精选"
      :tags="['Unity', 'C#', '2D', '战斗', '手感']"
      cta="查看项目详解"
    />
    <HomeProjectCard
      href="/zh/projects/ue5-fps"
      title="第一人称射击框架"
      blurb="使用虚幻引擎 5 与 C++ 独立开发的 FPS 框架，包含模块化武器、敌人 AI、检查点与计分系统，架构以可读性和可扩展性为目标。"
      video="/videos/ue5-fps/fps-showcase-0.mp4"
      date="2025 年 10 月"
      context="学业项目"
      flag="精选"
      :tags="['虚幻引擎 5', 'C++', '3D', 'FPS', 'AI']"
      cta="查看项目详解"
    />
  </div>
  <div class="hx-cta-row" data-hx-reveal>
    <a class="hx-btn" :href="withBase('/zh/projects/')">查看所有项目</a>
  </div>
</HomeSection>
<!-- ─── 02 · ABOUT ───────────────────────────────────────────────────────── -->
<HomeSection
  id="about"
  eyebrow="关于我"
  title="游戏玩法程序员 · 专注战斗系统"
  band
>
  <div class="hx-about">
    <div data-hx-reveal>
      <div class="hx-portrait">
        <img :src="withBase('/raymond-portrait.jpg')" alt="Raymond Cheng 的照片" width="640" height="800" loading="lazy" decoding="async">
      </div>
      <span class="hx-portrait-caption">Raymond Cheng · 英国</span>
    </div>
    <div class="hx-about-body" data-hx-reveal>
      <p>我目前就读于<a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer">斯塔福德郡大学</a>的<a href="https://www.staffs.ac.uk/course/computer-games-design-programming-bsc" target="_blank" rel="noopener noreferrer">游戏编程与设计（荣誉）学士</a>课程，专注方向是<span class="hx-hl">快节奏战斗</span>、<span class="hx-hl">游戏手感</span>以及<span class="hx-hl">特效和音效实现</span>。</p>
      <p>我的项目大多使用 <strong>Unity</strong> 和<strong>虚幻引擎 5</strong> 开发，重点放在跟手的角色控制器、Boss 战，以及可读、好扩展的 C# / C++ 架构上。</p>
      <p>课业之外，我为 Roblox 游戏完成过<strong>多个外包项目</strong>，也为热门作品<strong>制作过广受欢迎的社区模组</strong>，逐渐建立起<span class="hx-hl">原型出得快</span>、<span class="hx-hl">交付稳</span>、<span class="hx-hl">玩法打磨到位</span>的口碑。</p>
      <p>在 Game Jam 里我通常担任<strong>主程序兼设计</strong>，把美术、设计和程序串起来，让团队能快速迭代，同时保证游戏整体成立、好玩。</p>
      <p>我正在积极寻找<strong>游戏玩法程序方向的机会</strong>，希望积累更多实战经验。</p>
    </div>
  </div>
  <div class="hx-skills" data-hx-reveal>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">引擎</span>
      <span class="hx-skill-detail">Unity · 虚幻引擎 5 · Roblox Studio</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">语言</span>
      <span class="hx-skill-detail">C# · C++ · Lua · 蓝图</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">系统</span>
      <span class="hx-skill-detail">战斗、移动与技能框架；敌人 AI；UI Toolkit HUD</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">手感</span>
      <span class="hx-skill-detail">容错机制、打击反馈、特效与音效实现</span>
    </div>
  </div>
</HomeSection>
<!-- ─── 03 · EXPERIENCE ──────────────────────────────────────────────────── -->
<HomeSection
  id="experience"
  eyebrow="工作经历"
  title="我交付过的作品"
  lead="面向外部团队与线上玩家社区的付费玩法开发工作。"
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="2021 年 12 月 — 至今"
      role="Roblox 游戏玩法程序员（外包）"
      org="远程"
      meta="Roblox 委托项目"
      :tags="['Roblox Studio', 'Lua', '战斗系统', '特效/音效']"
    >
      <li>为多款 Roblox 作品设计并实现<strong>战斗系统、变身机制与演出级技能</strong>，并根据各开发团队的需求量身调整。</li>
      <li>为技能、大招与变身制作<strong>高表现力的特效与音效</strong>，同时兼顾手感、辨识度，以及低配设备上的性能。</li>
      <li>搭建<strong>模块化的角色与招式框架</strong>，让团队不必重写核心系统就能接入新角色、新形态与新技能。</li>
      <li>在紧凑的排期内交付原型与可上线的功能，成为团队在<strong>快速、可靠的玩法迭代</strong>上值得优先合作的外包开发者。</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="2024 年 — 至今"
      role="社区模组开发者（外包）"
      org="远程"
      meta="社区模组与委托"
      :tags="['虚幻引擎 5', '玩法', '音效设计']"
    >
      <li>为 PC 游戏制作<strong>高关注度的玩法与外观模组</strong>，包括发布于 Nexus Mods、在社区中爆红的 Marvel Rivals 模组 <a :href="withBase('/zh/projects/star-platinum-mod.html')">&ldquo;Star Platinum over Iron Fist&rdquo;</a>。</li>
      <li>逆向分析游戏系统，在不突破引擎与性能限制的前提下，把<strong>自制动画、特效与逻辑</strong>挂进既有的战斗框架。</li>
      <li>依据社区反馈快速迭代，在模组战斗体验中平衡<strong>粉丝向还原、动作辨识度与竞技公平性</strong>。</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 04 · EDUCATION ───────────────────────────────────────────────────── -->
<HomeSection
  id="education"
  eyebrow="教育背景"
  title="学历"
  band
  accent="cool"
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="2024 年 9 月 — 至今"
      role="游戏编程与设计（荣誉）学士"
      org="斯塔福德郡大学"
      org-href="https://www.staffs.ac.uk/"
      meta="英国 · 斯托克"
      :tags="['Unity', '虚幻引擎 5', 'C#', 'C++']"
    >
      <li>主修<strong>游戏玩法编程与设计</strong>，重点是用 C# 和 C++ 在 <strong>Unity</strong> 与<strong>虚幻引擎</strong>上做出达到行业水准的项目。</li>
      <li>系统训练<strong>机制设计、原型开发、AI 与引擎脚本</strong>，流程与专业游戏工作室的做法一致。</li>
      <li>完成多个<strong>获得 A 等成绩的玩法项目</strong>，包括以战斗为核心的原型，以及围绕操作跟手与手感打磨的作品集项目。</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="2022 年 9 月 — 2024 年 6 月"
      role="A-Level：物理、数学、计算机科学"
      org="Merchiston Castle School"
      org-href="https://www.merchiston.co.uk/"
      meta="英国 · 爱丁堡"
      :tags="['数学', '物理', '计算机科学']"
    >
      <li>通过高阶数学与物理课程打下扎实的<strong>解题、逻辑与分析</strong>基础，为技术向的游戏玩法编程工作提供支撑。</li>
      <li>学习<strong>算法、数据结构与软件工程</strong>等计算机科学内容，并在小型编程项目中实际应用。</li>
      <li>在同时兼顾三门理工科目与个人游戏开发的过程中，锻炼出<strong>自律与时间管理</strong>能力。</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 05 · CONTACT ─────────────────────────────────────────────────────── -->
<HomeSection id="contact" eyebrow="联系方式">
  <div class="hx-contact hx-glow" data-hx-reveal>
    <div class="hx-contact-grid">
      <div>
        <p class="hx-availability"><span class="hx-dot" aria-hidden="true"></span>目前可接洽</p>
        <!-- zh-review: "Let's build something" kept casual and slightly open-ended
             rather than a formal 让我们一起合作. Two short lines to preserve the
             original's line break and rhythm. -->
        <h2 class="hx-contact-title">一起做点<br>东西吧</h2>
        <p>欢迎洽谈<strong>游戏玩法程序职位、实习与外包委托</strong>。常驻<strong>英国（GMT 时区）</strong>，一般在 <strong>24 至 48 小时</strong>内回复。</p>
        <div class="hx-cta-row" style="justify-content:flex-start;margin-top:24px">
          <a class="hx-btn" href="mailto:raymondcheng0223@gmail.com">发邮件给我</a>
        </div>
      </div>
      <div>
        <div class="hx-channels">
          <a class="hx-channel" href="mailto:raymondcheng0223@gmail.com">
            <span class="hx-channel-label">邮箱</span>
            <span class="hx-channel-value">raymondcheng0223@gmail.com</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">Discord</span>
            <span class="hx-channel-value">rayz.c</span>
          </div>
          <a class="hx-channel" :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">
            <span class="hx-channel-label">简历</span>
            <span class="hx-channel-value">打开简历（PDF，英文）&rarr;</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">所在地</span>
            <span class="hx-channel-value">英国 &middot; GMT</span>
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
      <p class="hx-footer-note">&copy; 2025 Raymond Cheng. 保留所有权利。</p>
    </div>
    <nav class="hx-footer-links" aria-label="页脚导航">
      <a :href="withBase('/zh/projects/')">项目</a>
      <a :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">简历</a>
      <a href="mailto:raymondcheng0223@gmail.com">邮箱</a>
      <a href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </div>
</footer>
</HomeExperiment>
