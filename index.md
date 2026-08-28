---
layout: home
title: Raymond Cheng — Gameplay Programmer
description: Gameplay and systems programmer working in Unity, Unreal Engine 5 and Roblox. Combat systems, game feel, and shipped projects.
# markdownStyles:false hands full layout control to the experimental homepage
# components instead of the default VitePress `.vp-doc` prose styling.
markdownStyles: false
---

<script setup>
import { withBase } from 'vitepress'
</script>

<HomeExperiment>
<!-- ─── HERO ─────────────────────────────────────────────────────────────── -->
<!-- Swap for <PortfolioReveal /> to go back to the cursor-brush reveal banner. -->
<ShowreelHero />
<!-- ─── CREDIBILITY STRIP (bridges hero into the page) ───────────────────── -->
<div class="hx-stats">
  <div class="hx-shell">
    <div class="hx-stats-grid" data-hx-reveal>
      <div class="hx-stat">
        <span class="hx-stat-value">10M+</span>
        <span class="hx-stat-label">Views on shipped mod work</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">4+ yrs</span>
        <span class="hx-stat-label">Freelance gameplay work</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">9</span>
        <span class="hx-stat-label">Projects &amp; prototypes</span>
      </div>
      <div class="hx-stat">
        <span class="hx-stat-value">3</span>
        <span class="hx-stat-label">Engines: Unity, UE5, Roblox</span>
      </div>
    </div>
  </div>
</div>
<!-- ─── 01 · FEATURED PROJECTS ───────────────────────────────────────────── -->
<HomeSection
  id="featured-work"
  eyebrow="Selected work"
  title="Featured Projects"
  lead="Two solo-built projects that show the range I work across: combat and game feel in Unity, and modular systems architecture in Unreal Engine 5."
>
  <div class="hx-projects">
    <HomeProjectCard
      href="/projects/path-to-power"
      title="Dragon Ball 2D Platformer"
      blurb="Combat-focused 2D action platformer with a custom character controller, combo system, multi-layer hit feedback and a pure C# UI Toolkit HUD. Built solo in four weeks."
      video="/videos/path-to-power/ptp-showcase-1V2.mp4"
      poster="/banner-cover.jpg"
      date="September 2025"
      context="Personal"
      flag="Featured"
      :tags="['Unity', 'C#', '2D', 'Combat', 'Game Feel']"
      cta="Read case study"
    />
    <HomeProjectCard
      href="/projects/ue5-fps"
      title="1st Person Shooter Framework"
      blurb="Solo-developed FPS framework in Unreal Engine 5 and C++, with modular weapons, enemy AI, checkpoints and scoring built for readable, extensible architecture."
      video="/videos/ue5-fps/fps-showcase-0.mp4"
      date="October 2025"
      context="Academic"
      flag="Featured"
      :tags="['Unreal Engine 5', 'C++', '3D', 'FPS', 'AI']"
      cta="Read case study"
    />
  </div>
  <div class="hx-cta-row" data-hx-reveal>
    <a class="hx-btn" :href="withBase('/projects/')">View all projects</a>
  </div>
</HomeSection>
<!-- ─── 02 · ABOUT ───────────────────────────────────────────────────────── -->
<HomeSection
  id="about"
  eyebrow="About me"
  title="Gameplay Programmer, Combat Specialist"
  band
>
  <div class="hx-about">
    <div data-hx-reveal>
      <div class="hx-portrait">
        <img :src="withBase('/raymond-portrait.jpg')" alt="Portrait of Raymond Cheng" width="640" height="800" loading="lazy" decoding="async">
      </div>
      <span class="hx-portrait-caption">Raymond Cheng · United Kingdom</span>
    </div>
    <div class="hx-about-body" data-hx-reveal>
      <p>I am a student at <a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer">University of Staffordshire</a> studying <a href="https://www.staffs.ac.uk/course/computer-games-design-programming-bsc" target="_blank" rel="noopener noreferrer">BSc (Hons) Games Programming and Design</a>, specialising in <span class="hx-hl">fast-paced combat</span>, <span class="hx-hl">gameplay feel</span>, and <span class="hx-hl">VFX/SFX implementation</span>.</p>
      <p>Most of my projects are built in <strong>Unity</strong> and <strong>Unreal Engine 5</strong>, where I focus on responsive controllers, boss fights, and readable, scalable C#/C++ architecture.</p>
      <p>Outside university I have completed <strong>multiple commission projects</strong> for Roblox games and <strong>created popular community mods</strong> for viral titles, building a reputation for <span class="hx-hl">fast prototyping</span>, <span class="hx-hl">reliable delivery</span>, and <span class="hx-hl">high-impact gameplay polish</span>.</p>
      <p>In game jams I usually act as <strong>lead programmer and designer</strong>, connecting art, design and code so the team can iterate quickly while keeping the game coherent and fun.</p>
      <p>I am actively looking for <strong>gameplay programming opportunities</strong> to gain more real-world experience.</p>
    </div>
  </div>
  <div class="hx-skills" data-hx-reveal>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">Engines</span>
      <span class="hx-skill-detail">Unity · Unreal Engine 5 · Roblox Studio</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">Languages</span>
      <span class="hx-skill-detail">C# · C++ · Lua · Blueprints</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">Systems</span>
      <span class="hx-skill-detail">Combat, movement and ability frameworks; enemy AI; UI Toolkit HUDs</span>
    </div>
    <div class="hx-skill hx-glow">
      <span class="hx-skill-name">Game feel</span>
      <span class="hx-skill-detail">Forgiving mechanics, hit feedback, VFX and SFX implementation</span>
    </div>
  </div>
</HomeSection>
<!-- ─── 03 · EXPERIENCE ──────────────────────────────────────────────────── -->
<HomeSection
  id="experience"
  eyebrow="Experience"
  title="Where I Have Shipped"
  lead="Paid freelance gameplay work delivered to external teams and live player communities."
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="Dec 2021 — Present"
      role="Freelance Roblox Gameplay Programmer"
      org="Remote"
      meta="Roblox commissions"
      :tags="['Roblox Studio', 'Lua', 'Combat Systems', 'VFX/SFX']"
    >
      <li>Designed and implemented <strong>combat systems, transformation mechanics and cinematic abilities</strong> for multiple Roblox titles, tailored to each development team's requirements.</li>
      <li>Created <strong>high-impact VFX and SFX</strong> for skills, ultimates and transformations, focusing on game feel, clarity and performance on lower-end devices.</li>
      <li>Built <strong>modular character and moveset frameworks</strong> that let teams plug in new characters, forms and abilities without rewriting core systems.</li>
      <li>Delivered prototypes and production-ready features on tight timelines, becoming a go-to freelancer for <strong>fast, reliable gameplay iteration</strong>.</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="2024 — Present"
      role="Freelance Community Game Modder"
      org="Remote"
      meta="Community mods &amp; commissions"
      :tags="['Unreal Engine 5', 'Gameplay', 'Sound Design']"
    >
      <li>Created <strong>high-profile gameplay and cosmetic mods</strong> for PC titles, including the viral <a :href="withBase('/projects/star-platinum-mod.html')">&ldquo;Star Platinum over Iron Fist&rdquo;</a> mod for Marvel Rivals, published on Nexus Mods.</li>
      <li>Reverse-engineered game systems and <strong>hooked custom animations, effects and logic</strong> into existing combat frameworks while respecting engine and performance constraints.</li>
      <li>Iterated quickly on community feedback, balancing <strong>fanservice, readability and competitive fairness</strong> in modded combat experiences.</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 04 · EDUCATION ───────────────────────────────────────────────────── -->
<HomeSection
  id="education"
  eyebrow="Education"
  title="Academic Background"
  band
  accent="cool"
>
  <div class="hx-timeline">
    <HomeTimelineEntry
      period="Sep 2024 — Present"
      role="BSc (Hons) Games Programming and Design"
      org="University of Staffordshire"
      org-href="https://www.staffs.ac.uk/"
      meta="Stoke-on-Trent, United Kingdom"
      :tags="['Unity', 'Unreal Engine 5', 'C#', 'C++']"
    >
      <li>Studying <strong>gameplay programming and design</strong> with a focus on building industry-ready projects in <strong>Unity</strong> and <strong>Unreal Engine</strong> using C# and C++.</li>
      <li>Developing skills across <strong>mechanics design, prototyping, AI and engine scripting</strong>, mirroring workflows used in professional game studios.</li>
      <li>Completed multiple <strong>A-graded gameplay projects</strong>, including combat-driven prototypes and polished portfolio pieces built around responsiveness and game feel.</li>
    </HomeTimelineEntry>
    <HomeTimelineEntry
      period="Sep 2022 — Jun 2024"
      role="A-Levels: Physics, Mathematics, Computer Science"
      org="Merchiston Castle School"
      org-href="https://www.merchiston.co.uk/"
      meta="Edinburgh, United Kingdom"
      :tags="['Mathematics', 'Physics', 'Computer Science']"
    >
      <li>Built a strong foundation in <strong>problem solving, logic and analytical thinking</strong> through advanced Mathematics and Physics coursework, supporting technical gameplay programming.</li>
      <li>Studied <strong>Computer Science</strong> topics such as algorithms, data structures and software engineering principles, applying them in small programming projects.</li>
      <li>Developed <strong>study discipline and time management</strong> by balancing three STEM subjects with personal game development and portfolio work.</li>
    </HomeTimelineEntry>
  </div>
</HomeSection>
<!-- ─── 05 · CONTACT ─────────────────────────────────────────────────────── -->
<HomeSection id="contact" eyebrow="Contact">
  <div class="hx-contact hx-glow" data-hx-reveal>
    <div class="hx-contact-grid">
      <div>
        <p class="hx-availability"><span class="hx-dot" aria-hidden="true"></span>Available now</p>
        <h2 class="hx-contact-title">Let&rsquo;s build<br>something</h2>
        <p>Open to <strong>gameplay programming roles, internships and freelance commissions</strong>. Based in the <strong>United Kingdom (GMT)</strong> and usually replying within <strong>24&ndash;48 hours</strong>.</p>
        <div class="hx-cta-row" style="justify-content:flex-start;margin-top:24px">
          <a class="hx-btn" href="mailto:raymondcheng0223@gmail.com">Email me</a>
        </div>
      </div>
      <div>
        <div class="hx-channels">
          <a class="hx-channel" href="mailto:raymondcheng0223@gmail.com">
            <span class="hx-channel-label">Email</span>
            <span class="hx-channel-value">raymondcheng0223@gmail.com</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">Discord</span>
            <span class="hx-channel-value">rayz.c</span>
          </div>
          <a class="hx-channel" :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">
            <span class="hx-channel-label">CV</span>
            <span class="hx-channel-value">Open CV (PDF) &rarr;</span>
          </a>
          <div class="hx-channel">
            <span class="hx-channel-label">Location</span>
            <span class="hx-channel-value">United Kingdom &middot; GMT</span>
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
      <p class="hx-footer-note">&copy; 2025 Raymond Cheng. All rights reserved.</p>
    </div>
    <nav class="hx-footer-links" aria-label="Footer">
      <a :href="withBase('/projects/')">Projects</a>
      <a :href="withBase('/cv_v2.pdf')" target="_blank" rel="noopener">CV</a>
      <a href="mailto:raymondcheng0223@gmail.com">Email</a>
      <a href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </div>
</footer>
</HomeExperiment>
