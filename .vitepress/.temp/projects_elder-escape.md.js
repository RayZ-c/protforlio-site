import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cyborg Monkey Endless Runner","description":"A 4‑day Unreal Engine 5 endless runner built in Blueprints, featuring a disabled old man in a wheelchair chased by cyborg monkeys.","frontmatter":{"layout":"doc","title":"Cyborg Monkey Endless Runner","description":"A 4‑day Unreal Engine 5 endless runner built in Blueprints, featuring a disabled old man in a wheelchair chased by cyborg monkeys."},"headers":[],"relativePath":"projects/elder-escape.md","filePath":"projects/elder-escape.md"}');
const _sfc_main = { name: "projects/elder-escape.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Project Status :</span><span class="info-line-value"> Complete &amp; Playable | 4-Day Game Jam </span></p><p class="info-line"><span class="info-line-label">Engine :</span><span class="info-line-value"> Unreal Engine 5 | 100% Blueprints (No C++) </span></p><p class="info-line"><span class="info-line-label">Team :</span><span class="info-line-value"> Lead Programmer &amp; Visual Designer (4-person team) </span></p></div></div><h1 class="page-title-center" id="cyborg-monkey-endless-runner" tabindex="-1">Cyborg Monkey Endless Runner <a class="header-anchor" href="#cyborg-monkey-endless-runner" aria-label="Permalink to &quot;Cyborg Monkey Endless Runner {.page-title-center}&quot;">​</a></h1><hr><p class="project-text"> A fast-paced endless runner featuring a disabled protagonist in a wheelchair, dodging obstacles across 3 lanes while cyborg monkeys chase. <strong>Zero bugs at launch</strong> through Blueprint-only development, clear task delegation, and modular architecture. </p><p class="project-text"> Demonstrates <strong>rapid prototyping</strong>, <strong>team coordination</strong>, and production-ready code under <strong>extreme time pressure</strong>. </p>`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "ee-hero-media",
    slides: [
      { src: "/videos/elder-escape/ee-showcase-1.mp4", caption: "Main gameplay loop overview. (Power-up at Score 35!)" }
    ]
  }, null, _parent));
  _push(`<hr><h1 class="section-title-center" data-hx-reveal="true" id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="quick-overview" tabindex="-1">Quick Overview <a class="header-anchor" href="#quick-overview" aria-label="Permalink to &quot;Quick Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Quick Summary for Recruiters"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Delivery Under Pressure:</strong></p><ul${_scopeId}><li${_scopeId}>✅ Complete, playable game in 4 days</li><li${_scopeId}>✅ Zero critical bugs at launch</li><li${_scopeId}>✅ 4-person team coordination (clear role separation, no bottlenecks)</li><li${_scopeId}>✅ Blueprint-only (fast iteration, no compilation overhead)</li></ul><p${_scopeId}><strong${_scopeId}>Technical Highlights:</strong></p><ul${_scopeId}><li${_scopeId}>✅ 3-lane movement system with smooth transitions</li><li${_scopeId}>✅ Procedural floor generation (infinite level generation, memory-efficient)</li><li${_scopeId}>✅ Progressive difficulty scaling (continuous speed ramp)</li><li${_scopeId}>✅ High-score persistence (serialized saves across sessions)</li><li${_scopeId}>✅ Comprehensive sound design (SFX for all actions + ambient threat)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Delivery Under Pressure:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ Complete, playable game in 4 days"),
              createVNode("li", null, "✅ Zero critical bugs at launch"),
              createVNode("li", null, "✅ 4-person team coordination (clear role separation, no bottlenecks)"),
              createVNode("li", null, "✅ Blueprint-only (fast iteration, no compilation overhead)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Technical Highlights:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ 3-lane movement system with smooth transitions"),
              createVNode("li", null, "✅ Procedural floor generation (infinite level generation, memory-efficient)"),
              createVNode("li", null, "✅ Progressive difficulty scaling (continuous speed ramp)"),
              createVNode("li", null, "✅ High-score persistence (serialized saves across sessions)"),
              createVNode("li", null, "✅ Comprehensive sound design (SFX for all actions + ambient threat)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="team-structure" tabindex="-1">Team Structure <a class="header-anchor" href="#team-structure" aria-label="Permalink to &quot;Team Structure {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Team Structure"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Team Coordination (4 People):</strong></p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Lead Programmer (Me):</strong> Gameplay systems, player controller, game mode, bug fixes</li><li${_scopeId}><strong${_scopeId}>Designer (Me):</strong> Balance tuning, obstacle placement strategies, visual polish</li><li${_scopeId}><strong${_scopeId}>3D Modeler:</strong> Characters, obstacles, environment meshes</li><li${_scopeId}><strong${_scopeId}>2D Artist:</strong> UI design, animations</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Team Coordination (4 People):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Lead Programmer (Me):"),
                createTextVNode(" Gameplay systems, player controller, game mode, bug fixes")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Designer (Me):"),
                createTextVNode(" Balance tuning, obstacle placement strategies, visual polish")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "3D Modeler:"),
                createTextVNode(" Characters, obstacles, environment meshes")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "2D Artist:"),
                createTextVNode(" UI design, animations")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="core-systems" tabindex="-1">Core Systems <a class="header-anchor" href="#core-systems" aria-label="Permalink to &quot;Core Systems {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="_1-player-movement-input" tabindex="-1">1. Player Movement &amp; Input <a class="header-anchor" href="#_1-player-movement-input" aria-label="Permalink to &quot;1. Player Movement &amp; Input {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    title: "Lane System & Controls"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Input Architecture:</strong></p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>A / D:</strong> Shift lanes left/right (3 lanes, clamped 0–2)</li><li${_scopeId}><strong${_scopeId}>W / Space:</strong> Jump over obstacles</li><li${_scopeId}><strong${_scopeId}>S:</strong> Force ground (cancels hang time)</li></ul><p${_scopeId}><strong${_scopeId}>Lane Transitions:</strong></p><ul${_scopeId}><li${_scopeId}>Smooth Lerp-based movement (not instant snapping)</li><li${_scopeId}><code${_scopeId}>CurrentLaneIndex</code> and <code${_scopeId}>TargetLaneIndex</code> tracking</li><li${_scopeId}>Y-position array per lane</li></ul><p${_scopeId}><strong${_scopeId}>Why it works:</strong> Responsive, predictable input with immediate audio/visual feedback. Enhanced Input System integration means modern input handling out-of-the-box.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Input Architecture:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "A / D:"),
                createTextVNode(" Shift lanes left/right (3 lanes, clamped 0–2)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "W / Space:"),
                createTextVNode(" Jump over obstacles")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "S:"),
                createTextVNode(" Force ground (cancels hang time)")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Lane Transitions:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Smooth Lerp-based movement (not instant snapping)"),
              createVNode("li", null, [
                createVNode("code", null, "CurrentLaneIndex"),
                createTextVNode(" and "),
                createVNode("code", null, "TargetLaneIndex"),
                createTextVNode(" tracking")
              ]),
              createVNode("li", null, "Y-position array per lane")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why it works:"),
              createTextVNode(" Responsive, predictable input with immediate audio/visual feedback. Enhanced Input System integration means modern input handling out-of-the-box.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_2-difficulty-progression" tabindex="-1">2. Difficulty Progression <a class="header-anchor" href="#_2-difficulty-progression" aria-label="Permalink to &quot;2. Difficulty Progression {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "📈",
    title: "Progressive Difficulty Curve"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Speed Scaling:</strong></p><ul${_scopeId}><li${_scopeId}>Base speed: 850 UU/s → Max speed: 3200 UU/s</li><li${_scopeId}>Multiplier: 1.02x every interval (configurable)</li><li${_scopeId}>Tied directly to <code${_scopeId}>CharacterMovement.MaxWalkSpeed</code></li></ul><p${_scopeId}><strong${_scopeId}>Why this design:</strong></p><ul${_scopeId}><li${_scopeId}>Natural difficulty curve without complexity</li><li${_scopeId}>Reaction windows shrink organically—no external difficulty settings</li><li${_scopeId}>Creates escalating tension without effort</li></ul><p${_scopeId}><strong${_scopeId}>Result:</strong> Players naturally progress from comfortable to impossible, creating arcade-like tension.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Speed Scaling:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Base speed: 850 UU/s → Max speed: 3200 UU/s"),
              createVNode("li", null, "Multiplier: 1.02x every interval (configurable)"),
              createVNode("li", null, [
                createTextVNode("Tied directly to "),
                createVNode("code", null, "CharacterMovement.MaxWalkSpeed")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why this design:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Natural difficulty curve without complexity"),
              createVNode("li", null, "Reaction windows shrink organically—no external difficulty settings"),
              createVNode("li", null, "Creates escalating tension without effort")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Result:"),
              createTextVNode(" Players naturally progress from comfortable to impossible, creating arcade-like tension.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_3-procedural-level-generation" tabindex="-1">3. Procedural Level Generation <a class="header-anchor" href="#_3-procedural-level-generation" aria-label="Permalink to &quot;3. Procedural Level Generation {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Infinite Level Architecture"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>How It Works:</strong></p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>BP_Floor</code> tiles generate lane-specific spawn points</li><li${_scopeId}>Random obstacle selection per spawn (array shuffle)</li><li${_scopeId}>3 obstacle types (Wall, Blocker, Pot) via Switch on Int</li><li${_scopeId}>Spawned as Child Actor Components</li></ul><p${_scopeId}><strong${_scopeId}>Memory Efficiency:</strong></p><ul${_scopeId}><li${_scopeId}>Fixed number of active tiles (oldest destroyed when limit reached)</li><li${_scopeId}>Obstacles destroyed after lifespan expires</li><li${_scopeId}>No performance degradation over time</li></ul><p${_scopeId}><strong${_scopeId}>Extensibility:</strong></p><ul${_scopeId}><li${_scopeId}>New obstacles = new mesh child, no code changes</li><li${_scopeId}>Data-driven spawning (configurable per-lane placement)</li><li${_scopeId}>Designer can balance without programmer involvement</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "How It Works:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("code", null, "BP_Floor"),
                createTextVNode(" tiles generate lane-specific spawn points")
              ]),
              createVNode("li", null, "Random obstacle selection per spawn (array shuffle)"),
              createVNode("li", null, "3 obstacle types (Wall, Blocker, Pot) via Switch on Int"),
              createVNode("li", null, "Spawned as Child Actor Components")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Memory Efficiency:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Fixed number of active tiles (oldest destroyed when limit reached)"),
              createVNode("li", null, "Obstacles destroyed after lifespan expires"),
              createVNode("li", null, "No performance degradation over time")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Extensibility:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "New obstacles = new mesh child, no code changes"),
              createVNode("li", null, "Data-driven spawning (configurable per-lane placement)"),
              createVNode("li", null, "Designer can balance without programmer involvement")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_4-scoring-system" tabindex="-1">4. Scoring System <a class="header-anchor" href="#_4-scoring-system" aria-label="Permalink to &quot;4. Scoring System {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Score System & Persistence"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Runtime Scoring:</strong></p><ul${_scopeId}><li${_scopeId}>Points accumulate: <code${_scopeId}>(DeltaTime * PointsMulti)</code></li><li${_scopeId}>Score multiplier tied to speed (encourages risk)</li><li${_scopeId}>Milestone SFX at score thresholds</li></ul><p${_scopeId}><strong${_scopeId}>High Score Persistence:</strong></p><ul${_scopeId}><li${_scopeId}>SaveGame API (<code${_scopeId}>Runner_SaveGame</code>)</li><li${_scopeId}>Slot-based serialization (<code${_scopeId}>&quot;HighScoreValue&quot;</code>)</li><li${_scopeId}>Auto-loads on game start, compares on death, saves if beaten</li></ul><p${_scopeId}><strong${_scopeId}>Two-Widget UI:</strong></p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>GamePlay_UI</strong> — Real-time score display (top right)</li><li${_scopeId}><strong${_scopeId}>GameOver_UI</strong> — Final score + Retry/Exit buttons</li></ol></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Runtime Scoring:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("Points accumulate: "),
                createVNode("code", null, "(DeltaTime * PointsMulti)")
              ]),
              createVNode("li", null, "Score multiplier tied to speed (encourages risk)"),
              createVNode("li", null, "Milestone SFX at score thresholds")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "High Score Persistence:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("SaveGame API ("),
                createVNode("code", null, "Runner_SaveGame"),
                createTextVNode(")")
              ]),
              createVNode("li", null, [
                createTextVNode("Slot-based serialization ("),
                createVNode("code", null, '"HighScoreValue"'),
                createTextVNode(")")
              ]),
              createVNode("li", null, "Auto-loads on game start, compares on death, saves if beaten")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Two-Widget UI:")
            ]),
            createVNode("ol", null, [
              createVNode("li", null, [
                createVNode("strong", null, "GamePlay_UI"),
                createTextVNode(" — Real-time score display (top right)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "GameOver_UI"),
                createTextVNode(" — Final score + Retry/Exit buttons")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_5-audio-visual-design" tabindex="-1">5. Audio &amp; Visual Design <a class="header-anchor" href="#_5-audio-visual-design" aria-label="Permalink to &quot;5. Audio &amp; Visual Design {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🔊",
    title: "Sound Effects & Chaser AI"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Sound System:</strong></p><ul${_scopeId}><li${_scopeId}>Jump, dash, death (fast/slow), monkey vocalizations, BGM</li><li${_scopeId}><code${_scopeId}>Play Sound 2D</code> nodes embedded in action logic</li><li${_scopeId}>Immediate audio feedback for all inputs</li></ul><p${_scopeId}><strong${_scopeId}>Monkey Chaser (BP_Monkey):</strong></p><ul${_scopeId}><li${_scopeId}>Visual threat, not gameplay mechanic</li><li${_scopeId}>Follows player position via <code${_scopeId}>VInterpTo</code></li><li${_scopeId}>Reinforces narrative without affecting game balance</li><li${_scopeId}>Adds personality + pressure without mechanical complexity</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Sound System:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Jump, dash, death (fast/slow), monkey vocalizations, BGM"),
              createVNode("li", null, [
                createVNode("code", null, "Play Sound 2D"),
                createTextVNode(" nodes embedded in action logic")
              ]),
              createVNode("li", null, "Immediate audio feedback for all inputs")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Monkey Chaser (BP_Monkey):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Visual threat, not gameplay mechanic"),
              createVNode("li", null, [
                createTextVNode("Follows player position via "),
                createVNode("code", null, "VInterpTo")
              ]),
              createVNode("li", null, "Reinforces narrative without affecting game balance"),
              createVNode("li", null, "Adds personality + pressure without mechanical complexity")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="technical" tabindex="-1">Technical <a class="header-anchor" href="#technical" aria-label="Permalink to &quot;Technical{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="technical-architecture" tabindex="-1">Technical Architecture <a class="header-anchor" href="#technical-architecture" aria-label="Permalink to &quot;Technical Architecture {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="blueprint-design-patterns" tabindex="-1">Blueprint Design Patterns <a class="header-anchor" href="#blueprint-design-patterns" aria-label="Permalink to &quot;Blueprint Design Patterns {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Blueprint Design Patterns"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Design Patterns:</strong></p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>Data-Driven Spawning</strong> — Configurable spawn points, random obstacle selection, no hardcoded values</li><li${_scopeId}><strong${_scopeId}>Event-Based Communication</strong> — Death triggers event dispatch, score updates via getters, loose coupling</li><li${_scopeId}><strong${_scopeId}>Smooth Transitions</strong> — Lerp-based movement, velocity-based jumping, gradual speed scaling</li><li${_scopeId}><strong${_scopeId}>Memory Pooling</strong> — Fixed tile count, obstacle lifespans, minimal actor spawning</li></ol><p${_scopeId}><strong${_scopeId}>Blueprint vs C++ for 4-Day Jam:</strong></p><ul${_scopeId}><li${_scopeId}>✅ No compilation time = faster iteration</li><li${_scopeId}>✅ Visual debugging = easier problem-solving</li><li${_scopeId}>✅ Non-technical team members can understand flow</li><li${_scopeId}>✅ Zero-bug delivery possible with modular architecture</li></ul><p${_scopeId}><strong${_scopeId}>Success Formula:</strong></p><ul${_scopeId}><li${_scopeId}>Daily standups (blockers &amp; status)</li><li${_scopeId}>Shared design doc (Blueprint reference, configs)</li><li${_scopeId}>Clear ownership per system (no simultaneous edits)</li><li${_scopeId}>Weekly playtests (Friday feedback sessions)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Design Patterns:")
            ]),
            createVNode("ol", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Data-Driven Spawning"),
                createTextVNode(" — Configurable spawn points, random obstacle selection, no hardcoded values")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Event-Based Communication"),
                createTextVNode(" — Death triggers event dispatch, score updates via getters, loose coupling")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Smooth Transitions"),
                createTextVNode(" — Lerp-based movement, velocity-based jumping, gradual speed scaling")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Memory Pooling"),
                createTextVNode(" — Fixed tile count, obstacle lifespans, minimal actor spawning")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Blueprint vs C++ for 4-Day Jam:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ No compilation time = faster iteration"),
              createVNode("li", null, "✅ Visual debugging = easier problem-solving"),
              createVNode("li", null, "✅ Non-technical team members can understand flow"),
              createVNode("li", null, "✅ Zero-bug delivery possible with modular architecture")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Success Formula:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Daily standups (blockers & status)"),
              createVNode("li", null, "Shared design doc (Blueprint reference, configs)"),
              createVNode("li", null, "Clear ownership per system (no simultaneous edits)"),
              createVNode("li", null, "Weekly playtests (Friday feedback sessions)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="blueprints-breakdown" tabindex="-1">Blueprints Breakdown <a class="header-anchor" href="#blueprints-breakdown" aria-label="Permalink to &quot;Blueprints Breakdown {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Core Blueprints Breakdown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><table tabindex="0"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Blueprint</th><th${_scopeId}>Purpose</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>BP_RunnerCharacter</strong></td><td${_scopeId}>Player controller (input, lanes, death)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>BP_Obstacles</strong> (Wall/Blocker/Pot)</td><td${_scopeId}>Obstacle variants with collision &amp; lifespan</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>BP_Floor</strong></td><td${_scopeId}>Level tile generator (spawn points, randomization)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>BP_Monkey</strong></td><td${_scopeId}>Enemy chaser (follow, animations, SFX)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>BP_RunnerGameMode</strong></td><td${_scopeId}>Game manager (score, checkpoint, difficulty)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>GamePlay_UI</strong></td><td${_scopeId}>In-game HUD (score display, real-time updates)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>GameOver_UI</strong></td><td${_scopeId}>End screen (final score, retry/exit, save logic)</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>Runner_SaveGame</strong></td><td${_scopeId}>High-score persistence layer</td></tr><tr${_scopeId}><td${_scopeId}><strong${_scopeId}>IMC_RunnerDefault</strong></td><td${_scopeId}>Input action mapping (A/D/W/S)</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>All under <code${_scopeId}>/Content/Runner/Blueprints/</code> — Zero C++ source files.</strong></p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("table", { tabindex: "0" }, [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", null, "Blueprint"),
                  createVNode("th", null, "Purpose")
                ])
              ]),
              createVNode("tbody", null, [
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "BP_RunnerCharacter")
                  ]),
                  createVNode("td", null, "Player controller (input, lanes, death)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "BP_Obstacles"),
                    createTextVNode(" (Wall/Blocker/Pot)")
                  ]),
                  createVNode("td", null, "Obstacle variants with collision & lifespan")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "BP_Floor")
                  ]),
                  createVNode("td", null, "Level tile generator (spawn points, randomization)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "BP_Monkey")
                  ]),
                  createVNode("td", null, "Enemy chaser (follow, animations, SFX)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "BP_RunnerGameMode")
                  ]),
                  createVNode("td", null, "Game manager (score, checkpoint, difficulty)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "GamePlay_UI")
                  ]),
                  createVNode("td", null, "In-game HUD (score display, real-time updates)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "GameOver_UI")
                  ]),
                  createVNode("td", null, "End screen (final score, retry/exit, save logic)")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "Runner_SaveGame")
                  ]),
                  createVNode("td", null, "High-score persistence layer")
                ]),
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("strong", null, "IMC_RunnerDefault")
                  ]),
                  createVNode("td", null, "Input action mapping (A/D/W/S)")
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, [
                createTextVNode("All under "),
                createVNode("code", null, "/Content/Runner/Blueprints/"),
                createTextVNode(" — Zero C++ source files.")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="extras" tabindex="-1">Extras <a class="header-anchor" href="#extras" aria-label="Permalink to &quot;Extras{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="extra-notes" tabindex="-1">Extra Notes <a class="header-anchor" href="#extra-notes" aria-label="Permalink to &quot;Extra Notes {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="design-decisions" tabindex="-1">Design Decisions <a class="header-anchor" href="#design-decisions" aria-label="Permalink to &quot;Design Decisions {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "💡",
    title: "Why These Design Choices?"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>3 Lanes?</strong></p><ul${_scopeId}><li${_scopeId}>Simple input (A/D/W/S covers all movement)</li><li${_scopeId}>Clear visuals (readable at high speed)</li><li${_scopeId}>Balanced (not overwhelming, not repetitive)</li></ul><p${_scopeId}><strong${_scopeId}>Continuous Speed Increase?</strong></p><ul${_scopeId}><li${_scopeId}>Natural difficulty curve without complexity</li><li${_scopeId}>Forces constant engagement (can&#39;t zone out)</li><li${_scopeId}>Death always possible (high skill ceiling)</li></ul><p${_scopeId}><strong${_scopeId}>Random Obstacles?</strong></p><ul${_scopeId}><li${_scopeId}>Prevents memorization → keeps experienced players engaged</li><li${_scopeId}>Fair difficulty (no pattern abuse)</li><li${_scopeId}>Endless replayability</li></ul><p${_scopeId}><strong${_scopeId}>Single-Hit Death?</strong></p><ul${_scopeId}><li${_scopeId}>Keeps sessions short (respects player time)</li><li${_scopeId}>Makes score meaningful (not just &quot;time survived&quot;)</li><li${_scopeId}>Maintains tension (every obstacle = life-or-death)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "3 Lanes?")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Simple input (A/D/W/S covers all movement)"),
              createVNode("li", null, "Clear visuals (readable at high speed)"),
              createVNode("li", null, "Balanced (not overwhelming, not repetitive)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Continuous Speed Increase?")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Natural difficulty curve without complexity"),
              createVNode("li", null, "Forces constant engagement (can't zone out)"),
              createVNode("li", null, "Death always possible (high skill ceiling)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Random Obstacles?")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Prevents memorization → keeps experienced players engaged"),
              createVNode("li", null, "Fair difficulty (no pattern abuse)"),
              createVNode("li", null, "Endless replayability")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Single-Hit Death?")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Keeps sessions short (respects player time)"),
              createVNode("li", null, 'Makes score meaningful (not just "time survived")'),
              createVNode("li", null, "Maintains tension (every obstacle = life-or-death)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="technologies-stack" tabindex="-1">Technologies &amp; Stack <a class="header-anchor" href="#technologies-stack" aria-label="Permalink to &quot;Technologies &amp; Stack {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "⚙️",
    title: "Tools & Technologies"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Engine:</strong> Unreal Engine 5.0+</li><li${_scopeId}><strong${_scopeId}>Language:</strong> 100% Blueprints (no C++)</li><li${_scopeId}><strong${_scopeId}>Input System:</strong> Enhanced Input System (modern, configurable)</li><li${_scopeId}><strong${_scopeId}>Character Movement:</strong> Built-in Character Movement component</li><li${_scopeId}><strong${_scopeId}>Persistence:</strong> SaveGame API (slot-based saves)</li><li${_scopeId}><strong${_scopeId}>UI:</strong> UIToolkit widget system</li><li${_scopeId}><strong${_scopeId}>Audio:</strong> Sound Wave assets + 2D playback</li><li${_scopeId}><strong${_scopeId}>Rendering:</strong> Skeletal meshes + Niagara particles</li><li${_scopeId}><strong${_scopeId}>Architecture:</strong> Component-based, composition over inheritance</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Engine:"),
                createTextVNode(" Unreal Engine 5.0+")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Language:"),
                createTextVNode(" 100% Blueprints (no C++)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Input System:"),
                createTextVNode(" Enhanced Input System (modern, configurable)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Character Movement:"),
                createTextVNode(" Built-in Character Movement component")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Persistence:"),
                createTextVNode(" SaveGame API (slot-based saves)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "UI:"),
                createTextVNode(" UIToolkit widget system")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Audio:"),
                createTextVNode(" Sound Wave assets + 2D playback")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Rendering:"),
                createTextVNode(" Skeletal meshes + Niagara particles")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Architecture:"),
                createTextVNode(" Component-based, composition over inheritance")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="links-resources" tabindex="-1">Links &amp; Resources <a class="header-anchor" href="#links-resources" aria-label="Permalink to &quot;Links &amp; Resources {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🔗",
    title: "Links & Resources"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>GitHub:</strong> [Not available yet]</li><li${_scopeId}><strong${_scopeId}>Playtest Link:</strong> <a href="https://rayzc.itch.io/elder-escape"${_scopeId}>Elder Escape</a></li><li${_scopeId}><strong${_scopeId}>Documentation:</strong> Included in codebase</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "GitHub:"),
                createTextVNode(" [Not available yet]")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Playtest Link:"),
                createTextVNode(),
                createVNode("a", { href: "https://rayzc.itch.io/elder-escape" }, "Elder Escape")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Documentation:"),
                createTextVNode(" Included in codebase")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/elder-escape.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elderEscape = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elderEscape as default
};
