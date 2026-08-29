import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Path to Power","description":"A fast-paced Dragon Ball–inspired 2D action platformer built solo in Unity over 4 weeks, focused on forgiving movement mechanics, multi-layer combat feedback, and declarative C# UI systems.","frontmatter":{"layout":"doc","title":"Path to Power","description":"A fast-paced Dragon Ball–inspired 2D action platformer built solo in Unity over 4 weeks, focused on forgiving movement mechanics, multi-layer combat feedback, and declarative C# UI systems."},"headers":[],"relativePath":"projects/path-to-power.md","filePath":"projects/path-to-power.md"}');
const _sfc_main = { name: "projects/path-to-power.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Project Status :</span><span class="info-line-value"> Ongoing (Core systems completed) | 4 Weeks </span></p><p class="info-line"><span class="info-line-label">Project Type :</span><span class="info-line-value"> Solo Project | Unity (C#) </span></p><p class="info-line"><span class="info-line-label">Core Focus :</span><span class="info-line-value"> Movement &amp; Combat feel | UI systems</span></p></div></div><h1 class="page-title-center" id="path-to-power" tabindex="-1">Path to Power <a class="header-anchor" href="#path-to-power" aria-label="Permalink to &quot;Path to Power {.page-title-center}&quot;">​</a></h1><hr><p class="project-text"> A <strong>2D action platformer</strong> inspired by anime combat, built to showcase a <strong>forgiving movement &amp; combat framework</strong>, <strong>multi-layer hit feedback orchestration</strong>, and a <strong>pure C# UIToolkit HUD</strong>—all shipped solo in 4 weeks under deadline pressure. </p>`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "ptp-hero-media",
    slides: [
      { src: "/videos/path-to-power/ptp-showcase-1.mp4", caption: "Complete combat system overview." },
      { src: "/videos/path-to-power/ptp-showcase-4.mp4", caption: "Showcase of movement + dash." },
      { src: "/videos/path-to-power/ptp-showcase-3.mp4", caption: "Showcase of Main Menu." }
    ]
  }, null, _parent));
  _push(`<hr><h1 class="section-title-center" data-hx-reveal="true" id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="quick-overview" tabindex="-1">Quick Overview <a class="header-anchor" href="#quick-overview" aria-label="Permalink to &quot;Quick Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Quick Summary for Recruiters"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}>4-week solo action platformer built on a <a href="/protforlio-site/projects/forgiving-mechanics"${_scopeId}><strong${_scopeId}>reusable movement framework</strong></a></li><li${_scopeId}>Responsive movement with <strong${_scopeId}>forgiving mechanics</strong> (jump buffer, coyote time, variable gravity)</li><li${_scopeId}><strong${_scopeId}>Multi-layer combat feedback</strong> (VFX + SFX + Camera + Physics + Hit-Stop + UI synchronized)</li><li${_scopeId}>Pure <strong${_scopeId}>C# UIToolkit HUD</strong> (no UXML, declarative, designer-friendly)</li><li${_scopeId}>Architecture designed to scale to character roster and boss encounters</li><li${_scopeId}>Parameter-driven systems enabling team collaboration and rapid iteration</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("4-week solo action platformer built on a "),
                createVNode("a", { href: "/protforlio-site/projects/forgiving-mechanics" }, [
                  createVNode("strong", null, "reusable movement framework")
                ])
              ]),
              createVNode("li", null, [
                createTextVNode("Responsive movement with "),
                createVNode("strong", null, "forgiving mechanics"),
                createTextVNode(" (jump buffer, coyote time, variable gravity)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Multi-layer combat feedback"),
                createTextVNode(" (VFX + SFX + Camera + Physics + Hit-Stop + UI synchronized)")
              ]),
              createVNode("li", null, [
                createTextVNode("Pure "),
                createVNode("strong", null, "C# UIToolkit HUD"),
                createTextVNode(" (no UXML, declarative, designer-friendly)")
              ]),
              createVNode("li", null, "Architecture designed to scale to character roster and boss encounters"),
              createVNode("li", null, "Parameter-driven systems enabling team collaboration and rapid iteration")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="core-philosophy" tabindex="-1">Core Philosophy <a class="header-anchor" href="#core-philosophy" aria-label="Permalink to &quot;Core Philosophy {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "💡",
    title: "Core Philosophy"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><h1 id="build-the-foundation-right-polish-meaningfully-iterate-fast" tabindex="-1"${_scopeId}>&quot;Build the foundation right, polish meaningfully, iterate fast.&quot; <a class="header-anchor" href="#build-the-foundation-right-polish-meaningfully-iterate-fast" aria-label="Permalink to &quot;&quot;Build the foundation right, polish meaningfully, iterate fast.&quot;&quot;"${_scopeId}>​</a></h1><p${_scopeId}>This project demonstrates:</p><ul${_scopeId}><li${_scopeId}>✅ <strong${_scopeId}>Responsive</strong>, <strong${_scopeId}>forgiving</strong> mechanics that feel great to control</li><li${_scopeId}>✅ <strong${_scopeId}>Multi-layer feedback engineering</strong> (VFX + SFX + Physics + UI + Animation synchronized)</li><li${_scopeId}>✅ <strong${_scopeId}>Declarative system design</strong> enabling rapid tuning and team collaboration</li><li${_scopeId}>✅ <strong${_scopeId}>Smart balancing</strong> under time constraints (parameter-driven, designer-friendly)</li><li${_scopeId}>✅ <strong${_scopeId}>Modular architecture</strong> (combat layers on top of validated movement framework)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("h1", {
              id: "build-the-foundation-right-polish-meaningfully-iterate-fast",
              tabindex: "-1"
            }, [
              createTextVNode('"Build the foundation right, polish meaningfully, iterate fast." '),
              createVNode("a", {
                class: "header-anchor",
                href: "#build-the-foundation-right-polish-meaningfully-iterate-fast",
                "aria-label": 'Permalink to ""Build the foundation right, polish meaningfully, iterate fast.""'
              }, "​")
            ]),
            createVNode("p", null, "This project demonstrates:"),
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Responsive"),
                createTextVNode(", "),
                createVNode("strong", null, "forgiving"),
                createTextVNode(" mechanics that feel great to control")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Multi-layer feedback engineering"),
                createTextVNode(" (VFX + SFX + Physics + UI + Animation synchronized)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Declarative system design"),
                createTextVNode(" enabling rapid tuning and team collaboration")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Smart balancing"),
                createTextVNode(" under time constraints (parameter-driven, designer-friendly)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Modular architecture"),
                createTextVNode(" (combat layers on top of validated movement framework)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="technical-highlights" tabindex="-1">Technical Highlights <a class="header-anchor" href="#technical-highlights" aria-label="Permalink to &quot;Technical Highlights {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "⚙️",
    title: "Technical Highlights𓆪"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}>✅ <strong${_scopeId}>Object Pooling (VFX &amp; SFX) :</strong> Support for per-playback customization (color, scale, pitch variation, lifetime...etc)</li><li${_scopeId}>✅ <strong${_scopeId}>Animation Event Synchronization :</strong> Enables artists to time attacks visually, not programmers guessing frames</li><li${_scopeId}>✅ <strong${_scopeId}>State Priority System :</strong> Allows action canceling &amp; Prevents unintended state conflicts</li><li${_scopeId}>✅ <strong${_scopeId}>Input Buffering (3 Simultaneous) :</strong> Jump, Dash, Attacks buffer</li><li${_scopeId}>✅ <strong${_scopeId}>Modular Architecture :</strong> Decoupled systems (VFX/SFX/UI/Audio all independent)</li><li${_scopeId}>✅ <strong${_scopeId}>Designer Collaboration :</strong> Rapid iteration with Parameter-driven tuning (no code recompile for balance changes)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Object Pooling (VFX & SFX) :"),
                createTextVNode(" Support for per-playback customization (color, scale, pitch variation, lifetime...etc)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Animation Event Synchronization :"),
                createTextVNode(" Enables artists to time attacks visually, not programmers guessing frames")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "State Priority System :"),
                createTextVNode(" Allows action canceling & Prevents unintended state conflicts")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Input Buffering (3 Simultaneous) :"),
                createTextVNode(" Jump, Dash, Attacks buffer")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Modular Architecture :"),
                createTextVNode(" Decoupled systems (VFX/SFX/UI/Audio all independent)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Designer Collaboration :"),
                createTextVNode(" Rapid iteration with Parameter-driven tuning (no code recompile for balance changes)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="highlight-features" tabindex="-1">Highlight Features <a class="header-anchor" href="#highlight-features" aria-label="Permalink to &quot;Highlight Features {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="_1-movement-framework" tabindex="-1">1. Movement Framework <a class="header-anchor" href="#_1-movement-framework" aria-label="Permalink to &quot;1. Movement Framework {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    eyebrow: "Movement",
    title: "Forgiving Mechanics"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "ptp-move-media",
          slides: [
            { src: "/videos/path-to-power/ptp-showcase-4.mp4", caption: "Shows responsive input responsiveness, late inputs still register, extra window (coyote jump)" },
            { src: "/videos/path-to-power/ptp-showcase-5.mp4", caption: "Showcase of Ki charging/blasting gravity change in mid-air" }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>What you&#39;re seeing:</strong> A character that <em${_scopeId}>feels good to control</em> - not by accident, but by design.</p><p${_scopeId}>The movement system uses <strong${_scopeId}>three simultaneous input buffers</strong> (jump, dash, attack) to prevent the &quot;one-frame miss&quot; frustration that kills game feel. Combined with forgiving physics (jump buffer window, coyote time, variable gravity), this creates a control scheme that&#39;s both snappy AND responsive to player intent.</p><p${_scopeId}><strong${_scopeId}>Built on the</strong> <a href="/protforlio-site/projects/forgiving-mechanics"${_scopeId}><strong${_scopeId}>Forgiving Movement Framework</strong></a> and expanded here with:</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Attack momentum preservation</strong> (player momentum smoothly tweens to zero during attack, creating &quot;commitment&quot; feel without losing responsive control)</li><li${_scopeId}><strong${_scopeId}>State priority system</strong> (movement locks during attack endlag, but facing direction remains independent for skill expression)</li><li${_scopeId}><strong${_scopeId}>Dash as action override</strong> (dash cancels any action except enemy stuns, raising skill ceiling through deliberate action economy)</li><li${_scopeId}><strong${_scopeId}>Ki charging/blasting gravity modulation</strong> (reduced gravity during charge for distinctive floaty feel, separating charge state from normal movement)</li></ul></div>`);
      } else {
        return [
          createVNode(_component_MediaCarousel, {
            "data-hx-reveal": "",
            id: "ptp-move-media",
            slides: [
              { src: "/videos/path-to-power/ptp-showcase-4.mp4", caption: "Shows responsive input responsiveness, late inputs still register, extra window (coyote jump)" },
              { src: "/videos/path-to-power/ptp-showcase-5.mp4", caption: "Showcase of Ki charging/blasting gravity change in mid-air" }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "What you're seeing:"),
              createTextVNode(" A character that "),
              createVNode("em", null, "feels good to control"),
              createTextVNode(" - not by accident, but by design.")
            ]),
            createVNode("p", null, [
              createTextVNode("The movement system uses "),
              createVNode("strong", null, "three simultaneous input buffers"),
              createTextVNode(` (jump, dash, attack) to prevent the "one-frame miss" frustration that kills game feel. Combined with forgiving physics (jump buffer window, coyote time, variable gravity), this creates a control scheme that's both snappy AND responsive to player intent.`)
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Built on the"),
              createTextVNode(),
              createVNode("a", { href: "/protforlio-site/projects/forgiving-mechanics" }, [
                createVNode("strong", null, "Forgiving Movement Framework")
              ]),
              createTextVNode(" and expanded here with:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Attack momentum preservation"),
                createTextVNode(' (player momentum smoothly tweens to zero during attack, creating "commitment" feel without losing responsive control)')
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "State priority system"),
                createTextVNode(" (movement locks during attack endlag, but facing direction remains independent for skill expression)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Dash as action override"),
                createTextVNode(" (dash cancels any action except enemy stuns, raising skill ceiling through deliberate action economy)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Ki charging/blasting gravity modulation"),
                createTextVNode(" (reduced gravity during charge for distinctive floaty feel, separating charge state from normal movement)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_2-combat-feel" tabindex="-1">2. Combat Feel <a class="header-anchor" href="#_2-combat-feel" aria-label="Permalink to &quot;2. Combat Feel {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    eyebrow: "Combat",
    title: "Multi-Layer Feedback"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "ptp-combat-media",
          slides: [
            { src: "/videos/path-to-power/ptp-showcase-1.mp4", caption: "Overview of 5-Layer Hit Feedback (Watch VFX burst timing, SFX sync, enemy knockback, color flash intensity, and hit-stop all firing simultaneously.)" },
            { src: "/videos/path-to-power/ptp-combat-1.mp4", caption: "Default 5-hit combo + slow motion" },
            { src: "/videos/path-to-power/ptp-combat-2.mp4", caption: "Landed version of 5-hit combo + slow motion" },
            { src: "/videos/path-to-power/ptp-combat-3.mp4", caption: "Default Energy(Ki) Charging + slow motion" },
            { src: "/videos/path-to-power/ptp-combat-4.mp4", caption: "Showcase of Energy(Ki) Charging & Dash into mid-air + slow motion" },
            { src: "/videos/path-to-power/ptp-combat-5.mp4", caption: "Showcase of Kamehameha (not fully finished) + slow motion" }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>3 Core combat inputs:</strong> 5-hit melee combo, Ki blasts, and Ki charge.</p><p${_scopeId}>When the player lands a hit:</p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>VFX burst</strong> (particle timing synced to animation frame)</li><li${_scopeId}><strong${_scopeId}>SFX impact</strong> (audio from pooled sources, pitch-varied for uniqueness)</li><li${_scopeId}><strong${_scopeId}>Camera impulse</strong> (Cinemachine shake, direction/intensity based on combo step)</li><li${_scopeId}><strong${_scopeId}>Enemy visual feedback</strong> (color flash intensity scales: light hit = subtle pink, heavy hit = bright red)</li><li${_scopeId}><strong${_scopeId}>Physics response</strong> (knockback direction + magnitude contextual to attack position)</li><li${_scopeId}><strong${_scopeId}>Hit-stop freeze</strong> (0.05–0.08s time-freeze creating impact feel)</li><li${_scopeId}><strong${_scopeId}>UI update</strong> (score popup, health bar lerp, screen edge flash)</li></ol><p${_scopeId}>All coordinated from a single <code${_scopeId}>ApplyExternalHit()</code> call, <strong${_scopeId}>pure modular design.</strong></p><p${_scopeId}>Also, every feedback layer&#39;s intensity scales per combo step, creates a natural rhythm without explicit combo-counter UI.</p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          eyebrow: "Ki & Stamina System",
          title: "Resource Design"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MediaCarousel, {
                "data-hx-reveal": "",
                id: "ptp-re-media",
                slides: [
                  { src: "/videos/path-to-power/ptp-ki-1.mp4", caption: "Showcase the ways to drain/gain energy." }
                ]
              }, null, _parent3, _scopeId2));
              _push3(`<div class="project-text"${_scopeId2}><p${_scopeId2}><strong${_scopeId2}>What you&#39;re seeing:</strong> Resource economy that prevents spam while rewarding planning.</p><p${_scopeId2}><strong${_scopeId2}>Ki Charging:</strong></p><ul${_scopeId2}><li${_scopeId2}>Hold button → aura grows → particles emit → energy bar fills</li><li${_scopeId2}>Smooth charge rate (30 units/sec) = 3 seconds to full from zero</li><li${_scopeId2}>Gravity modulation during charge (0.3x scale) = distinctive floaty feel</li><li${_scopeId2}>Visual/audio feedback scales with charge intensity (crescendo effect)</li></ul><p${_scopeId2}><strong${_scopeId2}>Energy Cost &amp; Regen:</strong></p><ul${_scopeId2}><li${_scopeId2}>Ki Blast: 20 energy cost, 0.2s cooldown, 3s regen delay after use</li><li${_scopeId2}>Kamehameha: 15 energy cost/second while firing (variable, not fixed)</li><li${_scopeId2}>Punching: 5 energy gain per hit</li><li${_scopeId2}><strong${_scopeId2}>Smart delay:</strong> 3s delay after use prevents spam (can&#39;t chain abilities endlessly)</li><li${_scopeId2}><strong${_scopeId2}>Quick ability access:</strong> Instant cooldown reset if held long enough (rewards planning)</li></ul>`);
              _push3(ssrRenderComponent(_component_ProjectPanel, {
                variant: "mini",
                title: "The Psychological Layer"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="mini-panel-body"${_scopeId3}><p${_scopeId3}>Holding a button longer to charge feels rewarding. Discrete stamina units feel more &quot;spendable&quot; than linear drain. Regen delay after use feels like strategic planning, not arbitrary cooldown timer. These details separate casual gameplay from felt fairness.</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "mini-panel-body" }, [
                        createVNode("p", null, 'Holding a button longer to charge feels rewarding. Discrete stamina units feel more "spendable" than linear drain. Regen delay after use feels like strategic planning, not arbitrary cooldown timer. These details separate casual gameplay from felt fairness.')
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-re-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-ki-1.mp4", caption: "Showcase the ways to drain/gain energy." }
                    ]
                  }),
                  createVNode("div", { class: "project-text" }, [
                    createVNode("p", null, [
                      createVNode("strong", null, "What you're seeing:"),
                      createTextVNode(" Resource economy that prevents spam while rewarding planning.")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Ki Charging:")
                    ]),
                    createVNode("ul", null, [
                      createVNode("li", null, "Hold button → aura grows → particles emit → energy bar fills"),
                      createVNode("li", null, "Smooth charge rate (30 units/sec) = 3 seconds to full from zero"),
                      createVNode("li", null, "Gravity modulation during charge (0.3x scale) = distinctive floaty feel"),
                      createVNode("li", null, "Visual/audio feedback scales with charge intensity (crescendo effect)")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Energy Cost & Regen:")
                    ]),
                    createVNode("ul", null, [
                      createVNode("li", null, "Ki Blast: 20 energy cost, 0.2s cooldown, 3s regen delay after use"),
                      createVNode("li", null, "Kamehameha: 15 energy cost/second while firing (variable, not fixed)"),
                      createVNode("li", null, "Punching: 5 energy gain per hit"),
                      createVNode("li", null, [
                        createVNode("strong", null, "Smart delay:"),
                        createTextVNode(" 3s delay after use prevents spam (can't chain abilities endlessly)")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Quick ability access:"),
                        createTextVNode(" Instant cooldown reset if held long enough (rewards planning)")
                      ])
                    ]),
                    createVNode(_component_ProjectPanel, {
                      variant: "mini",
                      title: "The Psychological Layer"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mini-panel-body" }, [
                          createVNode("p", null, 'Holding a button longer to charge feels rewarding. Discrete stamina units feel more "spendable" than linear drain. Regen delay after use feels like strategic planning, not arbitrary cooldown timer. These details separate casual gameplay from felt fairness.')
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_MediaCarousel, {
            "data-hx-reveal": "",
            id: "ptp-combat-media",
            slides: [
              { src: "/videos/path-to-power/ptp-showcase-1.mp4", caption: "Overview of 5-Layer Hit Feedback (Watch VFX burst timing, SFX sync, enemy knockback, color flash intensity, and hit-stop all firing simultaneously.)" },
              { src: "/videos/path-to-power/ptp-combat-1.mp4", caption: "Default 5-hit combo + slow motion" },
              { src: "/videos/path-to-power/ptp-combat-2.mp4", caption: "Landed version of 5-hit combo + slow motion" },
              { src: "/videos/path-to-power/ptp-combat-3.mp4", caption: "Default Energy(Ki) Charging + slow motion" },
              { src: "/videos/path-to-power/ptp-combat-4.mp4", caption: "Showcase of Energy(Ki) Charging & Dash into mid-air + slow motion" },
              { src: "/videos/path-to-power/ptp-combat-5.mp4", caption: "Showcase of Kamehameha (not fully finished) + slow motion" }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "3 Core combat inputs:"),
              createTextVNode(" 5-hit melee combo, Ki blasts, and Ki charge.")
            ]),
            createVNode("p", null, "When the player lands a hit:"),
            createVNode("ol", null, [
              createVNode("li", null, [
                createVNode("strong", null, "VFX burst"),
                createTextVNode(" (particle timing synced to animation frame)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "SFX impact"),
                createTextVNode(" (audio from pooled sources, pitch-varied for uniqueness)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Camera impulse"),
                createTextVNode(" (Cinemachine shake, direction/intensity based on combo step)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Enemy visual feedback"),
                createTextVNode(" (color flash intensity scales: light hit = subtle pink, heavy hit = bright red)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Physics response"),
                createTextVNode(" (knockback direction + magnitude contextual to attack position)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Hit-stop freeze"),
                createTextVNode(" (0.05–0.08s time-freeze creating impact feel)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "UI update"),
                createTextVNode(" (score popup, health bar lerp, screen edge flash)")
              ])
            ]),
            createVNode("p", null, [
              createTextVNode("All coordinated from a single "),
              createVNode("code", null, "ApplyExternalHit()"),
              createTextVNode(" call, "),
              createVNode("strong", null, "pure modular design.")
            ]),
            createVNode("p", null, "Also, every feedback layer's intensity scales per combo step, creates a natural rhythm without explicit combo-counter UI."),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              eyebrow: "Ki & Stamina System",
              title: "Resource Design"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-re-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-ki-1.mp4", caption: "Showcase the ways to drain/gain energy." }
                    ]
                  }),
                  createVNode("div", { class: "project-text" }, [
                    createVNode("p", null, [
                      createVNode("strong", null, "What you're seeing:"),
                      createTextVNode(" Resource economy that prevents spam while rewarding planning.")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Ki Charging:")
                    ]),
                    createVNode("ul", null, [
                      createVNode("li", null, "Hold button → aura grows → particles emit → energy bar fills"),
                      createVNode("li", null, "Smooth charge rate (30 units/sec) = 3 seconds to full from zero"),
                      createVNode("li", null, "Gravity modulation during charge (0.3x scale) = distinctive floaty feel"),
                      createVNode("li", null, "Visual/audio feedback scales with charge intensity (crescendo effect)")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Energy Cost & Regen:")
                    ]),
                    createVNode("ul", null, [
                      createVNode("li", null, "Ki Blast: 20 energy cost, 0.2s cooldown, 3s regen delay after use"),
                      createVNode("li", null, "Kamehameha: 15 energy cost/second while firing (variable, not fixed)"),
                      createVNode("li", null, "Punching: 5 energy gain per hit"),
                      createVNode("li", null, [
                        createVNode("strong", null, "Smart delay:"),
                        createTextVNode(" 3s delay after use prevents spam (can't chain abilities endlessly)")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Quick ability access:"),
                        createTextVNode(" Instant cooldown reset if held long enough (rewards planning)")
                      ])
                    ]),
                    createVNode(_component_ProjectPanel, {
                      variant: "mini",
                      title: "The Psychological Layer"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mini-panel-body" }, [
                          createVNode("p", null, 'Holding a button longer to charge feels rewarding. Discrete stamina units feel more "spendable" than linear drain. Regen delay after use feels like strategic planning, not arbitrary cooldown timer. These details separate casual gameplay from felt fairness.')
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_3-ui-system-uitoolkit" tabindex="-1">3. UI System (UIToolKit) <a class="header-anchor" href="#_3-ui-system-uitoolkit" aria-label="Permalink to &quot;3. UI System (UIToolKit) {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    eyebrow: "UI System",
    title: "UIToolkit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "ptp-ui0-media",
          slides: [
            { src: "/videos/path-to-power/ptp-hud-0.mp4", caption: "Overview of player HUD." }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}>UI &amp; HUD built with <strong${_scopeId}>Unity&#39;s modern UIElements system</strong>, entirely code-driven for:</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Rapid iteration</strong> (change code, see results instantly)</li><li${_scopeId}><strong${_scopeId}>Designer collaboration</strong> (parameter-driven UI: adjust bar colors, animation speeds, positioning)</li><li${_scopeId}><strong${_scopeId}>Reusability</strong> (E.g: ColorBar, Animation &amp; Menu components all decoupled)</li></ul>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "In-Game HUD (always visible)"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MediaCarousel, {
                "data-hx-reveal": "",
                id: "ptp-hud-media",
                slides: [
                  { src: "/videos/path-to-power/ptp-hud-1.mp4", caption: "Avatar icon + Energy bar (Cyan→Yellow, animated lerp)" },
                  { src: "/videos/path-to-power/ptp-hud-2.mp4", caption: "Health bar (Green→Orange→Red gradient, animated lerp)" },
                  { src: "/videos/path-to-power/ptp-hud-3.mp4", caption: 'Stamina units (3 discrete yellow/gray boxes = psychological "use up units" vs. linear drain)' },
                  { src: "/videos/path-to-power/ptp-hud-4.mp4", caption: 'Score label (top-right, pop + shake on hit + Floating "+Score" text)' }
                ]
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-hud-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-hud-1.mp4", caption: "Avatar icon + Energy bar (Cyan→Yellow, animated lerp)" },
                      { src: "/videos/path-to-power/ptp-hud-2.mp4", caption: "Health bar (Green→Orange→Red gradient, animated lerp)" },
                      { src: "/videos/path-to-power/ptp-hud-3.mp4", caption: 'Stamina units (3 discrete yellow/gray boxes = psychological "use up units" vs. linear drain)' },
                      { src: "/videos/path-to-power/ptp-hud-4.mp4", caption: 'Score label (top-right, pop + shake on hit + Floating "+Score" text)' }
                    ]
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Menu Systems"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MediaCarousel, {
                "data-hx-reveal": "",
                id: "ptp-ui-media",
                slides: [
                  { src: "/videos/path-to-power/ptp-ui-1.mp4", caption: "Main Menu (fade-in title, play/settings/quit buttons, adjustable UI scale)" },
                  { src: "/videos/path-to-power/ptp-ui-2.mp4", caption: "Pause Menu (overlay, time freezes, SFX/BGM volume sliders)" },
                  { src: "/videos/path-to-power/ptp-ui-3.mp4", caption: "Death Screen (full-screen overlay, revive button)" },
                  { src: "/videos/path-to-power/ptp-ui-4.mp4", caption: "Sign Text Boxes (triggered by collider proximity, environmental flavor)" }
                ]
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-ui-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-ui-1.mp4", caption: "Main Menu (fade-in title, play/settings/quit buttons, adjustable UI scale)" },
                      { src: "/videos/path-to-power/ptp-ui-2.mp4", caption: "Pause Menu (overlay, time freezes, SFX/BGM volume sliders)" },
                      { src: "/videos/path-to-power/ptp-ui-3.mp4", caption: "Death Screen (full-screen overlay, revive button)" },
                      { src: "/videos/path-to-power/ptp-ui-4.mp4", caption: "Sign Text Boxes (triggered by collider proximity, environmental flavor)" }
                    ]
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_MediaCarousel, {
            "data-hx-reveal": "",
            id: "ptp-ui0-media",
            slides: [
              { src: "/videos/path-to-power/ptp-hud-0.mp4", caption: "Overview of player HUD." }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createTextVNode("UI & HUD built with "),
              createVNode("strong", null, "Unity's modern UIElements system"),
              createTextVNode(", entirely code-driven for:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Rapid iteration"),
                createTextVNode(" (change code, see results instantly)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Designer collaboration"),
                createTextVNode(" (parameter-driven UI: adjust bar colors, animation speeds, positioning)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Reusability"),
                createTextVNode(" (E.g: ColorBar, Animation & Menu components all decoupled)")
              ])
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "In-Game HUD (always visible)"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-hud-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-hud-1.mp4", caption: "Avatar icon + Energy bar (Cyan→Yellow, animated lerp)" },
                      { src: "/videos/path-to-power/ptp-hud-2.mp4", caption: "Health bar (Green→Orange→Red gradient, animated lerp)" },
                      { src: "/videos/path-to-power/ptp-hud-3.mp4", caption: 'Stamina units (3 discrete yellow/gray boxes = psychological "use up units" vs. linear drain)' },
                      { src: "/videos/path-to-power/ptp-hud-4.mp4", caption: 'Score label (top-right, pop + shake on hit + Floating "+Score" text)' }
                    ]
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Menu Systems"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode(_component_MediaCarousel, {
                    "data-hx-reveal": "",
                    id: "ptp-ui-media",
                    slides: [
                      { src: "/videos/path-to-power/ptp-ui-1.mp4", caption: "Main Menu (fade-in title, play/settings/quit buttons, adjustable UI scale)" },
                      { src: "/videos/path-to-power/ptp-ui-2.mp4", caption: "Pause Menu (overlay, time freezes, SFX/BGM volume sliders)" },
                      { src: "/videos/path-to-power/ptp-ui-3.mp4", caption: "Death Screen (full-screen overlay, revive button)" },
                      { src: "/videos/path-to-power/ptp-ui-4.mp4", caption: "Sign Text Boxes (triggered by collider proximity, environmental flavor)" }
                    ]
                  })
                ])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="technical" tabindex="-1">Technical <a class="header-anchor" href="#technical" aria-label="Permalink to &quot;Technical{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="technical-deep-dive" tabindex="-1">Technical Deep Dive <a class="header-anchor" href="#technical-deep-dive" aria-label="Permalink to &quot;Technical Deep Dive {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="architecture-overview" tabindex="-1">Architecture Overview <a class="header-anchor" href="#architecture-overview" aria-label="Permalink to &quot;Architecture Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Architecture Overview - Modular Manager Pattern"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><div class="language- vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│                    INPUT SYSTEM                         │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│              (InputHandler + New Input System)          │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────┬──────────────┬──────────────┬────────────────────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>       │              │              │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>       ↓              ↓              ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>┌────────────┐  ┌──────────┐  ┌─────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│  Movement  │  │  Combat  │  │  Charging   │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│   System   │  │  System  │  │   System    │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────┬─────┘  └────┬─────┘  └──────┬──────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>       │             │               │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>       └─────────────┼───────────────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>                     ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>         ┌─── FEEDBACK MANAGER ───┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>         │                        │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>    ┌────┴────┬────────┬─────┬───┴────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>    ↓         ↓        ↓     ↓        ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>  VFX Pool  SFX Pool  Camera Health   UI</span></span>
<span class="line"${_scopeId}><span${_scopeId}>           Manager   Impulse  Events  Updates</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Key Design Principle:</strong> Single source of truth for hit feedback. <code${_scopeId}>ApplyExternalHit()</code> orchestrates all layers, preventing desynchronization and callback spaghetti.</p><p${_scopeId}><strong${_scopeId}>Manager Pattern (Singleton):</strong></p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>VfxManager</code>: Object pooling (pre-instantiated, deactivate on timeout, reuse)</li><li${_scopeId}><code${_scopeId}>SfxManager</code>: Audio source pooling (pitch variation per clip, volume scaling)</li><li${_scopeId}><code${_scopeId}>UIToolkitManager</code>: Declarative UI system (code-driven, parameter-based)</li><li${_scopeId}><code${_scopeId}>AnimationEventBridge</code>: Syncs animation events to gameplay code (frame-perfect timing)</li></ul><p${_scopeId}><strong${_scopeId}>Benefits:</strong></p><ul${_scopeId}><li${_scopeId}>✅ Decoupled systems (VFX doesn&#39;t know about SFX)</li><li${_scopeId}>✅ Performance (pooling prevents allocation stalls)</li><li${_scopeId}>✅ Maintainability (changes to one manager don&#39;t cascade)</li><li${_scopeId}>✅ Extensibility (add new feedback layer without touching existing code)</li></ul><p${_scopeId}><strong${_scopeId}>Why This Matters:</strong> The diagram shows clear separation of concerns. Input flows to three systems independently. All feedback funnels through one manager. This is professional architecture. Easy to debug, Easy to extend, Easy to test.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("div", { class: "language- vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "┌─────────────────────────────────────────────────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│                    INPUT SYSTEM                         │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│              (InputHandler + New Input System)          │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────┬──────────────┬──────────────┬────────────────────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "       │              │              │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "       ↓              ↓              ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "┌────────────┐  ┌──────────┐  ┌─────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│  Movement  │  │  Combat  │  │  Charging   │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│   System   │  │  System  │  │   System    │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────┬─────┘  └────┬─────┘  └──────┬──────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "       │             │               │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "       └─────────────┼───────────────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "                     ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "         ┌─── FEEDBACK MANAGER ───┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "         │                        │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "    ┌────┴────┬────────┬─────┬───┴────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "    ↓         ↓        ↓     ↓        ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "  VFX Pool  SFX Pool  Camera Health   UI")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "           Manager   Impulse  Events  Updates")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Key Design Principle:"),
              createTextVNode(" Single source of truth for hit feedback. "),
              createVNode("code", null, "ApplyExternalHit()"),
              createTextVNode(" orchestrates all layers, preventing desynchronization and callback spaghetti.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Manager Pattern (Singleton):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("code", null, "VfxManager"),
                createTextVNode(": Object pooling (pre-instantiated, deactivate on timeout, reuse)")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "SfxManager"),
                createTextVNode(": Audio source pooling (pitch variation per clip, volume scaling)")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "UIToolkitManager"),
                createTextVNode(": Declarative UI system (code-driven, parameter-based)")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "AnimationEventBridge"),
                createTextVNode(": Syncs animation events to gameplay code (frame-perfect timing)")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Benefits:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ Decoupled systems (VFX doesn't know about SFX)"),
              createVNode("li", null, "✅ Performance (pooling prevents allocation stalls)"),
              createVNode("li", null, "✅ Maintainability (changes to one manager don't cascade)"),
              createVNode("li", null, "✅ Extensibility (add new feedback layer without touching existing code)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why This Matters:"),
              createTextVNode(" The diagram shows clear separation of concerns. Input flows to three systems independently. All feedback funnels through one manager. This is professional architecture. Easy to debug, Easy to extend, Easy to test.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_1-movement" tabindex="-1">1. Movement <a class="header-anchor" href="#_1-movement" aria-label="Permalink to &quot;1. Movement {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 1: Forgiving Movement"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Jump Buffer &amp; Coyote Time:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Player presses jump 0.15s BEFORE landing</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (jumpInputTime </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Time.time </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> jumpBufferWindow </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> isGrounded)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// retroactively register input</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Player can jump 0.15s AFTER leaving ground</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (coyoteTimeCounter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0f</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> &amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> jumpPerformed)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// free jump with no air usage</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why it works:</strong> Jump buffer catches inputs before the player lands (catches mistakes). Coyote time lets them jump slightly after leaving ground (catches &quot;I jumped too late&quot; moments). Together: forgiving but responsive.</p><p${_scopeId}><strong${_scopeId}>Variable Gravity (Hang Time Effect):</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (jumpHeld </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> hangTimeThreshold)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    rigidbody.gravityScale </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> normalGravity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0.4f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// hang</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>else</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    rigidbody.gravityScale </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> normalGravity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 5.5f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// fall fast</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why it works:</strong> At apex, gravity drops to 0.4x (player &quot;floats&quot; briefly = control). On descent, gravity jumps to 5.5x (player falls fast = commitment). This matches player intuition: jump feels floaty at top, falls fast after. Most junior devs use constant gravity—you&#39;ve engineered feel into physics.</p><p${_scopeId}><strong${_scopeId}>Dash &amp; Combat Input Buffering:</strong></p><ul${_scopeId}><li${_scopeId}>Last directional input recorded (lastUpTime, lastLeftTime, etc.)</li><li${_scopeId}>Dash reads highest-priority direction from buffer</li><li${_scopeId}>Enables &quot;rapid direction change mid-air&quot; skill expression</li><li${_scopeId}>Result: Player can queue a dash direction before pressing dash button</li></ul><p${_scopeId}><strong${_scopeId}>Attack Momentum Preservation:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>recordedMomentum </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> rigidbody.velocity;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// During attack animation (0.3s tween)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>attackAnimationMomentum </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Mathf.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Lerp</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(recordedMomentum, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, t </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0.3f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// After attack</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>rigidbody.velocity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(attackAnimationMomentum.x, rigidbody.velocity.y);</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why it works:</strong> Records player momentum before attacking. Smoothly removes it during attack (feels weighty, creates &quot;commitment&quot;). Restores it after (keeps flow). This is the difference between &quot;hero feels rooted during attack&quot; (good) vs. &quot;hero freezes in place&quot; (bad) vs. &quot;hero momentum vanishes&quot; (jarring).</p><p${_scopeId}><strong${_scopeId}>The Takeaway:</strong> Every parameter serves a purpose. None are accidental. This is systems thinking.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Jump Buffer & Coyote Time:")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Player presses jump 0.15s BEFORE landing")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (jumpInputTime "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.time "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "-"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " jumpBufferWindow "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "&&"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " isGrounded)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    Jump"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// retroactively register input")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Player can jump 0.15s AFTER leaving ground")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (coyoteTimeCounter "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0f"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " &&"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " jumpPerformed)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    Jump"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// free jump with no air usage")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why it works:"),
              createTextVNode(' Jump buffer catches inputs before the player lands (catches mistakes). Coyote time lets them jump slightly after leaving ground (catches "I jumped too late" moments). Together: forgiving but responsive.')
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Variable Gravity (Hang Time Effect):")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (jumpHeld "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "&&"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " velocity.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "<"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " hangTimeThreshold)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    rigidbody.gravityScale "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " normalGravity "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.4f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// hang")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "else"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (velocity.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "<"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    rigidbody.gravityScale "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " normalGravity "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 5.5f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// fall fast")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why it works:"),
              createTextVNode(` At apex, gravity drops to 0.4x (player "floats" briefly = control). On descent, gravity jumps to 5.5x (player falls fast = commitment). This matches player intuition: jump feels floaty at top, falls fast after. Most junior devs use constant gravity—you've engineered feel into physics.`)
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Dash & Combat Input Buffering:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Last directional input recorded (lastUpTime, lastLeftTime, etc.)"),
              createVNode("li", null, "Dash reads highest-priority direction from buffer"),
              createVNode("li", null, 'Enables "rapid direction change mid-air" skill expression'),
              createVNode("li", null, "Result: Player can queue a dash direction before pressing dash button")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Attack Momentum Preservation:")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "recordedMomentum "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " rigidbody.velocity;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// During attack animation (0.3s tween)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "attackAnimationMomentum "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Mathf."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Lerp"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(recordedMomentum, "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", t "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "/"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.3f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// After attack")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "rigidbody.velocity "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(attackAnimationMomentum.x, rigidbody.velocity.y);")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why it works:"),
              createTextVNode(' Records player momentum before attacking. Smoothly removes it during attack (feels weighty, creates "commitment"). Restores it after (keeps flow). This is the difference between "hero feels rooted during attack" (good) vs. "hero freezes in place" (bad) vs. "hero momentum vanishes" (jarring).')
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "The Takeaway:"),
              createTextVNode(" Every parameter serves a purpose. None are accidental. This is systems thinking.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_2-combat" tabindex="-1">2. Combat <a class="header-anchor" href="#_2-combat" aria-label="Permalink to &quot;2. Combat {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 2: Combat Sequencing"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Animation Event Triggers Damage (NOT frame-counting):</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// In Animator: &quot;Attack_Hit&quot; event fires at frame 15/24</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// In code: OnHitEvent listener</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> OnAnimationHitEvent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>int</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> comboStep</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    ApplyExternalHit</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        damage</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: comboBaseDamage </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> damageScale[comboStep],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        knockback</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: knockbackBase </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> directionality[comboStep],</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        hitStopDuration</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0.05f</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> +</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (comboStep </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0.01f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// scales</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why this approach:</strong> Animators set attack frames visually. Programmers add event at the right frame. On playback, the event fires at exactly that frame. If animator changes the animation, event still fires at the right point. This is fragile-proof design.</p><p${_scopeId}><strong${_scopeId}>Per-Step Damage Scaling (Designer-Friendly):</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>System</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Serializable</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> ComboAttackData</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> damage</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;           </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Hot-swappable</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> knockback</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;        </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Hot-swappable</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> attackMomentum</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;   </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Hot-swappable</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> comboTimeout</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;     </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Per-step timeout</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> hitStopDuration</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Scales per step</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why it matters:</strong> Designer changes <code${_scopeId}>damage</code> value from 10 to 15. Game hot-reloads, change visible instantly. No code recompile, no rebuild, no waiting. This enables 4-week polish cycles.</p><p${_scopeId}><strong${_scopeId}>Hit-Stop Scaling (Crescendo Effect):</strong></p><ul${_scopeId}><li${_scopeId}>Early hits (1–2): 0.05s freeze</li><li${_scopeId}>Mid hits (3–4): 0.065s freeze</li><li${_scopeId}>Final hit (5): 0.08s freeze</li><li${_scopeId}>Result: Natural rhythm without explicit UI counter</li></ul><p${_scopeId}><strong${_scopeId}>What the player feels:</strong> Each hit feels slightly more impactful than the last. They don&#39;t see a &quot;combo counter&quot;—they <em${_scopeId}>feel</em> the rhythm in the freezes. This is psychological game design.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Animation Event Triggers Damage (NOT frame-counting):")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, '// In Animator: "Attack_Hit" event fires at frame 15/24')
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// In code: OnHitEvent listener")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " OnAnimationHitEvent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "int"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " comboStep"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    ApplyExternalHit"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        damage"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": comboBaseDamage "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " damageScale[comboStep],")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        knockback"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": knockbackBase "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " directionality[comboStep],")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        hitStopDuration"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0.05f"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " +"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (comboStep "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.01f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// scales")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    );")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why this approach:"),
              createTextVNode(" Animators set attack frames visually. Programmers add event at the right frame. On playback, the event fires at exactly that frame. If animator changes the animation, event still fires at the right point. This is fragile-proof design.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Per-Step Damage Scaling (Designer-Friendly):")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "System"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Serializable"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "]")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " class"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " ComboAttackData")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " damage"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";           "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Hot-swappable")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " knockback"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";        "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Hot-swappable")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " attackMomentum"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";   "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Hot-swappable")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " comboTimeout"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";     "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Per-step timeout")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hitStopDuration"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Scales per step")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why it matters:"),
              createTextVNode(" Designer changes "),
              createVNode("code", null, "damage"),
              createTextVNode(" value from 10 to 15. Game hot-reloads, change visible instantly. No code recompile, no rebuild, no waiting. This enables 4-week polish cycles.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Hit-Stop Scaling (Crescendo Effect):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Early hits (1–2): 0.05s freeze"),
              createVNode("li", null, "Mid hits (3–4): 0.065s freeze"),
              createVNode("li", null, "Final hit (5): 0.08s freeze"),
              createVNode("li", null, "Result: Natural rhythm without explicit UI counter")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "What the player feels:"),
              createTextVNode(` Each hit feels slightly more impactful than the last. They don't see a "combo counter"—they `),
              createVNode("em", null, "feel"),
              createTextVNode(" the rhythm in the freezes. This is psychological game design.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_3-feedback-synchronization" tabindex="-1">3. Feedback Synchronization <a class="header-anchor" href="#_3-feedback-synchronization" aria-label="Permalink to &quot;3. Feedback Synchronization {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 3: Feedback"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Single Call, 5+ Layers:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> ApplyExternalHit</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> dmg</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> knockback</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Vector3</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> attackerPos</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>                              string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> sfxId</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>int</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> hitIndex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>MonoBehaviour</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> causer</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 1: Damage</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    health.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>ApplyDamage</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(dmg, causer);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 2: Physics</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> dir</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> ((</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)transform.position </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)attackerPos).normalized;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    rigidbody.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>AddForce</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(dir.x </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> knockback, dir.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> knockback</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>), ForceMode2D.Impulse);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 3: VFX</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    VfxManager.Instance.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>PlayVFX</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;HitImpact&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, transform.position, </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>scale</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: shockScale);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 4: SFX</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    SfxManager.Instance.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>PlaySfx</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(sfxId);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 5: Camera</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    var</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> impulse</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Camera.main.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>GetComponent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>CinemachineImpulseSource</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>&gt;();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    impulse.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>GenerateImpulse</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Vector3</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0.9f</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> dir.x, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0.5f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>));  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// scales by hit index</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 6: Animation</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    HitFlash</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(hitIndex);  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// color intensity: light → medium → heavy</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Layer 7: Time (Hit-Stop)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    StartCoroutine</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>HitStopFreeze</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(hitDuration[hitIndex]));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Result:</strong> All systems fire simultaneously, no desync, no callback hell.</p><p${_scopeId}><strong${_scopeId}>The Professional Pattern:</strong> One entry point. All effects orchestrated. If you want to add new feedback (screen edge flash, particle color shift), you extend this method. You don&#39;t scatter callbacks everywhere. This is how code stays maintainable at scale.</p><p${_scopeId}><strong${_scopeId}>Why Desync Happens (Bad Code):</strong></p><ul${_scopeId}><li${_scopeId}>VFX call fires</li><li${_scopeId}>SFX call fires separately (slight delay)</li><li${_scopeId}>Camera shake fires separately (different delay)</li><li${_scopeId}>UI updates on a different frame</li><li${_scopeId}>Result: Feedback feels loose, uncoordinated, &quot;weak&quot;</li></ul><p${_scopeId}><strong${_scopeId}>Why This Synchronization Works (Good Code):</strong></p><ul${_scopeId}><li${_scopeId}>All seven systems fire in the same frame</li><li${_scopeId}>Same vector direction (knockback matches camera direction)</li><li${_scopeId}>Same intensity data (hit-stop scales match, color intensity scales match)</li><li${_scopeId}>Result: Feedback feels &quot;punchy&quot;, coordinated, impactful</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Single Call, 5+ Layers:")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " ApplyExternalHit"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " dmg"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " knockback"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Vector3"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " attackerPos"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "                              string"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " sfxId"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "int"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hitIndex"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "MonoBehaviour"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " causer"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 1: Damage")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    health."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "ApplyDamage"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(dmg, causer);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 2: Physics")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " dir"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (("),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")transform.position "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "-"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " ("),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")attackerPos).normalized;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    rigidbody."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "AddForce"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(dir.x "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " knockback, dir.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " knockback"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "/"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "3"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "), ForceMode2D.Impulse);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 3: VFX")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    VfxManager.Instance."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "PlayVFX"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"HitImpact"'),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", transform.position, "),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "scale"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": shockScale);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 4: SFX")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    SfxManager.Instance."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "PlaySfx"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(sfxId);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 5: Camera")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    var"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " impulse"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Camera.main."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "GetComponent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "<"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "CinemachineImpulseSource"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ">();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    impulse."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "GenerateImpulse"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Vector3"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0.9f"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " *"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " dir.x, "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0.5f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "));  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// scales by hit index")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 6: Animation")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    HitFlash"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(hitIndex);  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// color intensity: light → medium → heavy")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Layer 7: Time (Hit-Stop)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    StartCoroutine"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "HitStopFreeze"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(hitDuration[hitIndex]));")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Result:"),
              createTextVNode(" All systems fire simultaneously, no desync, no callback hell.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "The Professional Pattern:"),
              createTextVNode(" One entry point. All effects orchestrated. If you want to add new feedback (screen edge flash, particle color shift), you extend this method. You don't scatter callbacks everywhere. This is how code stays maintainable at scale.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why Desync Happens (Bad Code):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "VFX call fires"),
              createVNode("li", null, "SFX call fires separately (slight delay)"),
              createVNode("li", null, "Camera shake fires separately (different delay)"),
              createVNode("li", null, "UI updates on a different frame"),
              createVNode("li", null, 'Result: Feedback feels loose, uncoordinated, "weak"')
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why This Synchronization Works (Good Code):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "All seven systems fire in the same frame"),
              createVNode("li", null, "Same vector direction (knockback matches camera direction)"),
              createVNode("li", null, "Same intensity data (hit-stop scales match, color intensity scales match)"),
              createVNode("li", null, 'Result: Feedback feels "punchy", coordinated, impactful')
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_4-ui-system-declarative" tabindex="-1">4. UI System (Declarative) <a class="header-anchor" href="#_4-ui-system-declarative" aria-label="Permalink to &quot;4. UI System (Declarative) {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 4: UIToolkit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Example: Health Bar (Pure C#)</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> ColorBar</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    private</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> VisualElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> bar</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    private</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> VisualElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> gloss</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Initialize</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> name</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Color</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>VisualElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> parent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        bar </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> VisualElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> { name </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> name };</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        bar.style.backgroundColor </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> color;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        bar.style.width </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Length.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Percent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>        // Shine effect (declarative overlay)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        gloss </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> VisualElement</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        gloss.style.width </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Length.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Percent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>28</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// shiny region</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        bar.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Add</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(gloss);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        parent.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Add</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(bar);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> SetValue</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> normalizedValue</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>        // Smooth lerp animation</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        bar.style.width </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Length.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Percent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(normalizedValue </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 100f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        gloss.style.width </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Length.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Percent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(normalizedValue </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 28f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why Pure C# (not UXML):</strong></p><ul${_scopeId}><li${_scopeId}>No editor drag-drop = no merge conflicts in version control</li><li${_scopeId}>Hot-reload in play mode = instant feedback on changes</li><li${_scopeId}>Declarative = UI structure is clear in code</li><li${_scopeId}>Reusable = component composition, not one-off screens</li></ul><p${_scopeId}><strong${_scopeId}>Benefits Over Legacy Canvas:</strong></p><ul${_scopeId}><li${_scopeId}>✅ Modern approach (industry standard 2024+)</li><li${_scopeId}>✅ Performance (internal batching better than Canvas)</li><li${_scopeId}>✅ Scalability (cleaner code for large UI systems)</li><li${_scopeId}>✅ Team collaboration (code-based, not editor-based)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Example: Health Bar (Pure C#)")
            ]),
            createVNode("div", { class: "language-csharp vp-adaptive-theme" }, [
              createVNode("button", {
                title: "Copy Code",
                class: "copy"
              }),
              createVNode("span", { class: "lang" }, "csharp"),
              createVNode("pre", {
                class: "shiki shiki-themes github-light github-dark vp-code",
                tabindex: "0"
              }, [
                createVNode("code", null, [
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " class"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " ColorBar")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    private"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " VisualElement"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " bar"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    private"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " VisualElement"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " gloss"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Initialize"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "string"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " name"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Color"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " color"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ", "),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "VisualElement"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " parent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    {")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        bar "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " VisualElement"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " { name "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " name };")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        bar.style.backgroundColor "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " color;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        bar.style.width "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Length."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Percent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "100"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "        // Shine effect (declarative overlay)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        gloss "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " VisualElement"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        gloss.style.width "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Length."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Percent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "28"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// shiny region")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        bar."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Add"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(gloss);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        parent."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Add"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(bar);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    }")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " SetValue"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " normalizedValue"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    {")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "        // Smooth lerp animation")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        bar.style.width "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Length."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Percent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(normalizedValue "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 100f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        gloss.style.width "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Length."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Percent"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(normalizedValue "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 28f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    }")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why Pure C# (not UXML):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "No editor drag-drop = no merge conflicts in version control"),
              createVNode("li", null, "Hot-reload in play mode = instant feedback on changes"),
              createVNode("li", null, "Declarative = UI structure is clear in code"),
              createVNode("li", null, "Reusable = component composition, not one-off screens")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Benefits Over Legacy Canvas:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ Modern approach (industry standard 2024+)"),
              createVNode("li", null, "✅ Performance (internal batching better than Canvas)"),
              createVNode("li", null, "✅ Scalability (cleaner code for large UI systems)"),
              createVNode("li", null, "✅ Team collaboration (code-based, not editor-based)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="extras" tabindex="-1">Extras <a class="header-anchor" href="#extras" aria-label="Permalink to &quot;Extras{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="extra-notes" tabindex="-1">Extra Notes <a class="header-anchor" href="#extra-notes" aria-label="Permalink to &quot;Extra Notes {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="smart-balancing" tabindex="-1">Smart Balancing <a class="header-anchor" href="#smart-balancing" aria-label="Permalink to &quot;Smart Balancing {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "📈",
    title: "Smart Balancing Under Deadline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}>Delivered in <strong${_scopeId}>4 weeks under deadline pressure.</strong> Here&#39;s the my apporach:</p><h3 id="build-the-foundation-first" tabindex="-1"${_scopeId}>Build the Foundation First <a class="header-anchor" href="#build-the-foundation-first" aria-label="Permalink to &quot;Build the Foundation First&quot;"${_scopeId}>​</a></h3><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>Movement (week 1)</strong> ✓ - Forgiving, responsive, foundation-ready</li><li${_scopeId}><strong${_scopeId}>Combat (week 2)</strong> ✓ - Attack sequencing, parameter-driven</li><li${_scopeId}><strong${_scopeId}>Feedback (week 3)</strong> ✓ - Multi-layer orchestration</li><li${_scopeId}><strong${_scopeId}>Polish (week 4)</strong> ✓ - Tuning, balancing, iteration</li></ol><p${_scopeId}><strong${_scopeId}>Why this order matters:</strong> Movement is the foundation all other systems rest on. If movement feels bad, no amount of combat polish saves it. Combat is built on movement. Feedback amplifies what&#39;s already good. Polish is refinement, not foundation-building.</p><hr${_scopeId}><h3 id="tune-intelligently" tabindex="-1"${_scopeId}>Tune Intelligently <a class="header-anchor" href="#tune-intelligently" aria-label="Permalink to &quot;Tune Intelligently&quot;"${_scopeId}>​</a></h3><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Energy regen delay</strong> (3s after use): Prevents spam without cooldown UI</li><li${_scopeId}><strong${_scopeId}>Stamina as discrete units</strong> (3 bars): Psychological difference from linear drain</li><li${_scopeId}><strong${_scopeId}>Per-step combo timeout</strong>: Contextual rhythm instead of global timer</li><li${_scopeId}><strong${_scopeId}>Hit-stop scaling</strong> (0.05–0.08s): Crescendo effect = feels fair</li><li${_scopeId}><strong${_scopeId}>Knockback direction</strong>: Contextual, not just &quot;away from attacker&quot;</li></ul><p${_scopeId}><strong${_scopeId}>What each parameter does:</strong></p><ul${_scopeId}><li${_scopeId}>Regen delay: Encourages planning (can&#39;t chain infinitely)</li><li${_scopeId}>Discrete stamina: Feels &quot;spent&quot; vs. drained (psychological)</li><li${_scopeId}>Per-step timeout: Creates natural rhythm (each hit feels different)</li><li${_scopeId}>Hit-stop scaling: Build narrative through freezes (early hit quick, final hit punchy)</li><li${_scopeId}>Contextual knockback: Physics feels real (horizontal + vertical based on hit position)</li></ul><hr${_scopeId}><h3 id="parameter-driven" tabindex="-1"${_scopeId}>Parameter-Driven <a class="header-anchor" href="#parameter-driven" aria-label="Permalink to &quot;Parameter-Driven&quot;"${_scopeId}>​</a></h3><p${_scopeId}>Every tunable value defined in structures:</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>ComboAttackData</code>: damage, knockback, momentum, timeout, hit-stop</li><li${_scopeId}><code${_scopeId}>EnergySystem</code>: regenRate, regenDelay, cost, maxEnergy</li><li${_scopeId}><code${_scopeId}>MovementPhysics</code>: jumpStrength, hangGravity, fallGravity, dashForce</li></ul><p${_scopeId}><strong${_scopeId}>Result:</strong> One person can balance game in hours (no code rewrites), team environment ready.</p><p${_scopeId}><strong${_scopeId}>Proof:</strong> The 4-week deadline proves this works, instead of using hard coded values.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createTextVNode("Delivered in "),
              createVNode("strong", null, "4 weeks under deadline pressure."),
              createTextVNode(" Here's the my apporach:")
            ]),
            createVNode("h3", {
              id: "build-the-foundation-first",
              tabindex: "-1"
            }, [
              createTextVNode("Build the Foundation First "),
              createVNode("a", {
                class: "header-anchor",
                href: "#build-the-foundation-first",
                "aria-label": 'Permalink to "Build the Foundation First"'
              }, "​")
            ]),
            createVNode("ol", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Movement (week 1)"),
                createTextVNode(" ✓ - Forgiving, responsive, foundation-ready")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Combat (week 2)"),
                createTextVNode(" ✓ - Attack sequencing, parameter-driven")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Feedback (week 3)"),
                createTextVNode(" ✓ - Multi-layer orchestration")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Polish (week 4)"),
                createTextVNode(" ✓ - Tuning, balancing, iteration")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why this order matters:"),
              createTextVNode(" Movement is the foundation all other systems rest on. If movement feels bad, no amount of combat polish saves it. Combat is built on movement. Feedback amplifies what's already good. Polish is refinement, not foundation-building.")
            ]),
            createVNode("hr"),
            createVNode("h3", {
              id: "tune-intelligently",
              tabindex: "-1"
            }, [
              createTextVNode("Tune Intelligently "),
              createVNode("a", {
                class: "header-anchor",
                href: "#tune-intelligently",
                "aria-label": 'Permalink to "Tune Intelligently"'
              }, "​")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Energy regen delay"),
                createTextVNode(" (3s after use): Prevents spam without cooldown UI")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Stamina as discrete units"),
                createTextVNode(" (3 bars): Psychological difference from linear drain")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Per-step combo timeout"),
                createTextVNode(": Contextual rhythm instead of global timer")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Hit-stop scaling"),
                createTextVNode(" (0.05–0.08s): Crescendo effect = feels fair")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Knockback direction"),
                createTextVNode(': Contextual, not just "away from attacker"')
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "What each parameter does:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Regen delay: Encourages planning (can't chain infinitely)"),
              createVNode("li", null, 'Discrete stamina: Feels "spent" vs. drained (psychological)'),
              createVNode("li", null, "Per-step timeout: Creates natural rhythm (each hit feels different)"),
              createVNode("li", null, "Hit-stop scaling: Build narrative through freezes (early hit quick, final hit punchy)"),
              createVNode("li", null, "Contextual knockback: Physics feels real (horizontal + vertical based on hit position)")
            ]),
            createVNode("hr"),
            createVNode("h3", {
              id: "parameter-driven",
              tabindex: "-1"
            }, [
              createTextVNode("Parameter-Driven "),
              createVNode("a", {
                class: "header-anchor",
                href: "#parameter-driven",
                "aria-label": 'Permalink to "Parameter-Driven"'
              }, "​")
            ]),
            createVNode("p", null, "Every tunable value defined in structures:"),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("code", null, "ComboAttackData"),
                createTextVNode(": damage, knockback, momentum, timeout, hit-stop")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "EnergySystem"),
                createTextVNode(": regenRate, regenDelay, cost, maxEnergy")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "MovementPhysics"),
                createTextVNode(": jumpStrength, hangGravity, fallGravity, dashForce")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Result:"),
              createTextVNode(" One person can balance game in hours (no code rewrites), team environment ready.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Proof:"),
              createTextVNode(" The 4-week deadline proves this works, instead of using hard coded values.")
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
    title: "Technologies & Stack"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Engine:</strong> Unity 2023 LTS</li><li${_scopeId}><strong${_scopeId}>Language:</strong> C#</li><li${_scopeId}><strong${_scopeId}>UI System:</strong> UIToolkit (code-driven, no UXML)</li><li${_scopeId}><strong${_scopeId}>Physics:</strong> Rigidbody2D with custom momentum handling</li><li${_scopeId}><strong${_scopeId}>Animation:</strong> Mecanim with event-driven synchronization</li><li${_scopeId}><strong${_scopeId}>Performance:</strong> Object pooling (VFX/SFX), no runtime allocations</li><li${_scopeId}><strong${_scopeId}>Architecture:</strong> Singleton Manager pattern with orchestration</li><li${_scopeId}><strong${_scopeId}>Input Handling:</strong> New Input System (modern, event-driven)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Engine:"),
                createTextVNode(" Unity 2023 LTS")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Language:"),
                createTextVNode(" C#")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "UI System:"),
                createTextVNode(" UIToolkit (code-driven, no UXML)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Physics:"),
                createTextVNode(" Rigidbody2D with custom momentum handling")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Animation:"),
                createTextVNode(" Mecanim with event-driven synchronization")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Performance:"),
                createTextVNode(" Object pooling (VFX/SFX), no runtime allocations")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Architecture:"),
                createTextVNode(" Singleton Manager pattern with orchestration")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Input Handling:"),
                createTextVNode(" New Input System (modern, event-driven)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="project-scope" tabindex="-1">Project Scope <a class="header-anchor" href="#project-scope" aria-label="Permalink to &quot;Project Scope {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "📈",
    title: "Project Scope"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Solo Development</strong> over 4 weeks<br${_scopeId}><strong${_scopeId}>Scope:</strong> Action platformer foundation (movement + 2-ability combat + feedback + UI)<br${_scopeId}><strong${_scopeId}>Status:</strong> Production-ready foundation; features expandable (new characters, abilities, levels)<br${_scopeId}><strong${_scopeId}>Code Quality:</strong> Professional-grade (clean, documented, team-ready)</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Solo Development"),
              createTextVNode(" over 4 weeks"),
              createVNode("br"),
              createVNode("strong", null, "Scope:"),
              createTextVNode(" Action platformer foundation (movement + 2-ability combat + feedback + UI)"),
              createVNode("br"),
              createVNode("strong", null, "Status:"),
              createTextVNode(" Production-ready foundation; features expandable (new characters, abilities, levels)"),
              createVNode("br"),
              createVNode("strong", null, "Code Quality:"),
              createTextVNode(" Professional-grade (clean, documented, team-ready)")
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
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>GitHub:</strong> <a href="https://github.com/RayZ-c/DragonBall2D-Platformer"${_scopeId}> Link</a></li><li${_scopeId}><strong${_scopeId}>Forgiving Movement Framework:</strong> [Not avaliable yet]</li><li${_scopeId}><strong${_scopeId}>Download to Play:</strong> <a href="https://rayzc.itch.io/path-to-power"${_scopeId}> Itch.io </a></li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "GitHub:"),
                createTextVNode(),
                createVNode("a", { href: "https://github.com/RayZ-c/DragonBall2D-Platformer" }, " Link")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Forgiving Movement Framework:"),
                createTextVNode(" [Not avaliable yet]")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Download to Play:"),
                createTextVNode(),
                createVNode("a", { href: "https://rayzc.itch.io/path-to-power" }, " Itch.io ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/path-to-power.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pathToPower = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pathToPower as default
};
