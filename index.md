---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: "Raymond Cheng"
  text: "Game development portfolio"
  tagline: Student, Game Designer & Programmer 
  image: false

  actions:
    - theme: brand
      text: View Projects
      link: ./projects/
    - theme: alt
      text: About Me
      link: ./#about
      
    - theme: alt2
      text: Contact
      link: ./#contact

---

<div id="top">

<div class="hero-video-wrapper">
  <video id="hero-video" autoplay muted loop playsinline>
    <source src="/videos/banner.mp4" type="video/mp4" />
  </video>
</div>

<script>
  function heroVideoToggleMute() {
    const v = document.getElementById('hero-video');
    v.muted = !v.muted;
    if (!v.paused) return;
    v.play().catch(() => {});
  }
</script>


##

# Featured Projects {.section-title-center}

Check out some of the projects I am most proud of. {.section-title-center}

<div class="featured-projects">

  <a class="project-card card-DB-plat" href="./projects/path-to-power">
    <div class="project-media">
      <video id="hero-video" autoplay muted loop playsinline>
          <source src="/videos/path-to-power/ptp-showcase-1V2.mp4" type="video/mp4" />
        </video>
        <div class="project-pill-row">
        <span class="pill">September 2025</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">Personal</span>
      </div>
      <span class="pill pill-accent">Featured</span>
    </div>
    <div class="project-body">
      <h3>Dragon Ball 2D Platformer</h3>
      <p>Combat-focused 2D platformer with custom controller, combo system, and VFX.</p>
      <div class="project-tags">
        <span class="tag tag-unity">Unity</span>
        <span class="tag tag-2d">2D</span>
        <span class="tag tag-csharp">C#</span>
        <span class="tag tag-sidescroll">Platformer</span>
        <span class="tag tag-action">Combat</span>
      </div>
    </div>
  </a>
  <a class="project-card card-unreal-fps" href="./projects/ue5-fps">
    <div class="project-media">
      <video id="hero-video" autoplay muted loop playsinline>
          <source src="/videos/ue5-fps/fps-showcase-0.mp4" type="video/mp4" />
        </video>
      <div class="project-pill-row">
        <span class="pill">October 2025</span>
      </div>
      <div class="project-pill-row2">
        <span class="pill">Academic</span>
      </div>
      <span class="pill pill-accent">Featured</span>
    </div>
    <div class="project-body">
      <h3>1st Person Shooter Framework</h3>
      <p>Solo-developed FPS prototype with custom weapons, AI enemies, and pacing.</p>
      <div class="project-tags">
        <span class="tag tag-unreal">Unreal</span>
        <span class="tag tag-3d">3D</span>
        <span class="tag tag-cpp">C++</span>
        <span class="tag tag-fps">FPS</span>
        <span class="tag tag-ai">AI</span>
      </div>
    </div>
  </a>


</div>

<div class="view-all-wrapper">
  <a class="view-all-button" href="./projects/">View All Projects →</a>
</div>


##
# About Me {.section-title-center}
<div id="about">
  <div class="about-card">
    <p class="about-text">
      I am a student at <strong> <a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer">University of Staffordshire</a></strong>, studying <strong><a href="https://www.staffs.ac.uk/course/computer-games-design-programming-bsc" target="_blank" rel="noopener noreferrer">BCs (Hons) Games Programming and Design</a></strong>, specialising in <strong2>fast‑paced combat</strong2>, <strong2>gameplay feel</strong2>, and <strong2>VFX/SFX&nbsp;implementation</strong2>.
    </p>
    <p class="about-text">
      Most of my projects are built in <strong>Unity</strong> and <strong>Unreal Engine 5</strong>, where I focus on responsive controllers, boss fights, and readable & scalable C#/C++ architecture.
    </p>
    <p class="about-text">
      Outside university, I have completed <strong>multiple commission projects</strong> for Roblox games and <strong>created popular community mods</strong> in other viral games, building a reputation for <strong2>fast&nbsp;prototyping</strong2>, <strong2>reliable delivery</strong2>, and <strong2>high‑impact gameplay polish.</strong2>
    </p>
    <p class="about-text">
      In game jams, I usually act as <strong>lead programmer and designer</strong>, connecting art, design, and code so the team can iterate quickly while keeping the game coherent and fun.
    </p>
    <p class="about-text">
      I am actively looking for <strong>gameplay programming opportunities</strong> to gain more real‑world experience.
    </p>
  </div>
</div>

##

# Experience {.section-title-center}
<div id="experience">
<div class="experience-card">
  <div class="experience-meta">
    <span class="experience-date">Dec 2021 – Present</span>
  </div>
  
  <h3 class="experience-title">Freelance Roblox Gameplay Programmer</h3>
  <p class="experience-subtitle">Remote | Roblox commissions</p>
  
  <ul class="experience-list">
    <li>
      Designed and implemented <strong>combat systems, transformation mechanics, and cinematic abilities</strong> 
      for multiple Roblox titles, tailored to each development team's requirements.
    </li>
    <li>
      Created <strong>high‑impact VFX and SFX</strong> for skills, ultimates, and transformations, 
      focusing on game feel, clarity, and performance on lower‑end devices.
    </li>
    <li>
      Built <strong>modular character and moveset frameworks</strong> that allow teams to plug in 
      new characters, forms, and abilities without rewriting core systems.
    </li>
    <li>
      Delivered prototypes and production‑ready features on tight timelines, becoming a go‑to 
      freelancer for <strong>fast, reliable gameplay iteration</strong>.
    </li>
  </ul>
  
  <div class="experience-tags">
    <span class="pill">Roblox Studio</span>
    <span class="pill">Lua</span>
  </div>
</div>

<div class="experience-card">
  <div class="experience-meta">
    <span class="experience-date">2024 – Present</span>
  </div>
  
  <h3 class="experience-title">Freelance Community Game Modder</h3>
  <p class="experience-subtitle">Remote | Community mods & commissions</p>
  
  <ul class="experience-list">
    <li>
      Created <strong>high‑profile gameplay and cosmetic mods</strong> for PC titles, including the 
      viral <strong>"Star Platinum over Iron Fist"</strong> mod for Marvel Rivals, published on Nexus Mods.
    </li>
    <li>
      Reverse‑engineered game systems and <strong>hooked custom animations, effects, and logic</strong> 
      into existing combat frameworks while respecting engine and performance constraints.
    </li>
    <li>
      Iterated quickly based on community feedback, balancing <strong>fanservice, readability, and 
      competitive fairness</strong> in modded combat experiences.
    </li>
  </ul>
  
  <div class="experience-tags">
    <span class="pill">Gameplay</span>
    <span class="pill">SFX</span>
  </div>
</div>


</div>



##


# Education {.section-title-center}

<div id="education">
<div class="education-section">

  <div class="experience-card education-card">
    <div class="experience-meta">
      <span class="experience-date">Sep 2024 – Present</span>
    </div>
    <h3 class="education-title">BSc (Hons) Games Programming and Design</h3>
    <p class="experience-subtitle">
      <a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer">
        University of Staffordshire
      </a> · Stoke-on-Trent, United Kingdom
    </p>
    <ul class="experience-list">
      <li>
        Studying <strong>gameplay programming and design</strong> with a focus on building industry‑ready projects in
        <strong>Unity</strong> and <strong>Unreal Engine</strong> using C# and C++.
      </li>
      <li>
        Developing skills across <strong>mechanics design, game prototyping, AI, and engine scripting</strong>,
        mirroring workflows used in professional game studios. 
      </li>
      <li>
        Completed multiple <strong>A‑graded gameplay projects</strong>, including combat‑driven prototypes and polished
        portfolio pieces built around responsiveness and game feel.
      </li>
    </ul>
    <div class="experience-tags">
      <span class="pill">Unity</span>
      <span class="pill">Unreal Engine 5</span>
      <span class="pill">C#</span>
      <span class="pill">C++</span>
    </div>
  </div>
  <div class="experience-card education-card">
    <div class="experience-meta">
      <span class="experience-date">Sep 2022 – Jun 2024</span>
    </div>
    <h3 class="education-title">A‑Levels: Physics, Mathematics, Computer Science</h3>
    <p class="experience-subtitle">
      <a href="https://www.merchiston.co.uk/" target="_blank" rel="noopener noreferrer">
        Merchiston Castle School
      </a> · Edinburgh, United Kingdom
    </p>
    <ul class="experience-list">
      <li>
        Built a strong foundation in <strong>problem solving, logic, and analytical thinking</strong> through advanced
        Mathematics and Physics coursework, supporting technical gameplay programming.
      </li>
      <li>
        Studied <strong>Computer Science</strong> topics such as algorithms, data structures, and basic software
        engineering principles, and applied them in small programming projects.
      </li>
      <li>
        Developed effective <strong>study discipline and time management</strong> by balancing three STEM subjects with
        personal game development and portfolio work.
      </li>
    </ul>
    <div class="experience-tags">
      <span class="pill">Maths</span>
      <span class="pill">Physics</span>
      <span class="pill">Computer Science</span>
    </div>
  </div>

</div>
</div>

##

###

<div id="contact" class="contact-section">

  <div class="experience-card contact-card">
    <div class="experience-meta">
      <span class="experience-date">Let’s build something</span>
    </div>
    <h3 class="experience-title">Contact</h3>
    <p class="experience-subtitle">
      Open to gameplay programming roles, internships, and freelance commissions.
    </p>
    <ul class="experience-list">
      <div> <p>
        For opportunities or commissions, reach out via:
        <!-- change to a mailto link when ready -->
        </p>
      </div>
      <li>
        Email: <strong>raymondcheng0223@gmail.com</strong> | Discord: <strong>rayz.c</strong>
      </li>
      <li>
        Based in <strong>United Kingdom (GMT)</strong>; usually replies within <strong>24–48 hours</strong>.
      </li>
    </ul>
    
<div class="social-icons">
            <div class="social-icons-image">
                <a href="https://www.instagram.com/ray_c.223/">
                    <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram Icon">
                </a>
            </div>
            <div class="social-icons-image">
                <a href="https://github.com/RayZ-c">
                    <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="github Icon">
                </a>
            </div>
            <div class="social-icons-image">
                <a href="https://www.youtube.com/@RayZc">
                    <img src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="youtube Icon">
                </a>
            </div>
            <div class="social-icons-image">
                <a href="https://www.linkedin.com/in/raymond-cheng-7b0340365/">
                    <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="Linkedin Icon">
                </a>
            </div>
            <div class="social-icons-image">
                <a href="https://x.com/RayRay123c">
                    <img src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="Twitter Icon">
                </a>
            </div>
        </div>
</div>
  </div>



<div class="scroll-controls">
  <button class="scroll-btn scroll-up" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" aria-label="Scroll to top">
    ↑
  </button>
  <a class="scroll-btn scroll-down" href="#bottom" aria-label="Scroll to bottom">↓</a>
</div>

<a id="bottom"></a>



<div class="site-footer">
  <div class="footer-copy">
  </div>
    © 2025 Raymond Cheng. All rights reserved.
  </div>
</div>





