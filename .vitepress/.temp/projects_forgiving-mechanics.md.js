import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"C# Forgiving Movement Framework","description":"A reusable character movement controller with forgiving input mechanics, coyote time, jump buffering, and gravity handling built for rapid game prototyping.","frontmatter":{"layout":"doc","title":"C# Forgiving Movement Framework","description":"A reusable character movement controller with forgiving input mechanics, coyote time, jump buffering, and gravity handling built for rapid game prototyping."},"headers":[],"relativePath":"projects/forgiving-mechanics.md","filePath":"projects/forgiving-mechanics.md"}');
const _sfc_main = { name: "projects/forgiving-mechanics.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MediaCarousel = resolveComponent("MediaCarousel");
  const _component_ProjectPanel = resolveComponent("ProjectPanel");
  const _component_strong2 = resolveComponent("strong2");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="../projects/" class="back-home-button"> ❮❮ All Projects </a></p><div class="project-info-row"><div class="project-info-left"><p class="info-line"><span class="info-line-label">Project Status :</span><span class="info-line-value"> Complete &amp; Reusable Framework | 4 weeks </span></p><p class="info-line"><span class="info-line-label">Project Type :</span><span class="info-line-value"> Modular Framework | Unity (C#) </span></p><p class="info-line"><span class="info-line-label">Core Focus :</span><span class="info-line-value"> Movement feel | Game feel architecture </span></p></div></div><h1 class="page-title-center" id="forgiving-movement-framework" tabindex="-1">Forgiving Movement Framework <a class="header-anchor" href="#forgiving-movement-framework" aria-label="Permalink to &quot;Forgiving Movement Framework {.page-title-center}&quot;">​</a></h1><hr><p class="project-text"> A <strong>production-ready character movement controller</strong> for side-scroller games, built on <strong>forgiving mechanics principles</strong> (jump buffer, coyote time, variable gravity). Designed as a <strong>reusable framework</strong> that ships in weeks, not months—enabling rapid prototyping and team collaboration through <strong>parameter-driven architecture</strong>. </p>`);
  _push(ssrRenderComponent(_component_MediaCarousel, {
    "data-hx-reveal": "",
    id: "fm-hero-media",
    slides: [
      { src: "/videos/forgiving-mechanics/fm-showcase-1.mp4", caption: "Forgiving jump mechanics showcase." },
      { src: "/videos/forgiving-mechanics/fm-coyotetime.mp4", caption: "Accurate Ground detection (E.g: coyote time showcase)." }
    ]
  }, null, _parent));
  _push(`<hr><h1 class="section-title-center" data-hx-reveal="true" id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="quick-overview" tabindex="-1">Quick Overview <a class="header-anchor" href="#quick-overview" aria-label="Permalink to &quot;Quick Overview {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎯",
    title: "Quick Summary for Recruiters"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}>Reusable <strong${_scopeId}>top-down character movement framework</strong> proven in production games</li><li${_scopeId}>Forgiving mechanics built-in: <strong${_scopeId}>coyote time, jump buffer, variable gravity</strong></li><li${_scopeId}><strong${_scopeId}>Slope handling and ground detection</strong> using reliable raycasting</li><li${_scopeId}>Modular architecture with <strong${_scopeId}>parameter-driven design</strong> (no magic numbers)</li><li${_scopeId}>Drop into any project, configure in inspector, ship in days</li><li${_scopeId}>Used as foundation for `);
        _push2(ssrRenderComponent(_component_strong2, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a href="/protforlio-site/projects/path-to-power"${_scopeId2}>Path to Power</a>`);
            } else {
              return [
                createVNode("a", { href: "/protforlio-site/projects/path-to-power" }, "Path to Power")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` combat systems</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("Reusable "),
                createVNode("strong", null, "top-down character movement framework"),
                createTextVNode(" proven in production games")
              ]),
              createVNode("li", null, [
                createTextVNode("Forgiving mechanics built-in: "),
                createVNode("strong", null, "coyote time, jump buffer, variable gravity")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Slope handling and ground detection"),
                createTextVNode(" using reliable raycasting")
              ]),
              createVNode("li", null, [
                createTextVNode("Modular architecture with "),
                createVNode("strong", null, "parameter-driven design"),
                createTextVNode(" (no magic numbers)")
              ]),
              createVNode("li", null, "Drop into any project, configure in inspector, ship in days"),
              createVNode("li", null, [
                createTextVNode("Used as foundation for "),
                createVNode(_component_strong2, null, {
                  default: withCtx(() => [
                    createVNode("a", { href: "/protforlio-site/projects/path-to-power" }, "Path to Power")
                  ]),
                  _: 1
                }),
                createTextVNode(" combat systems")
              ])
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
        _push2(`<div class="project-text"${_scopeId}><h1 id="movement-feel-is-the-foundation-of-game-feel" tabindex="-1"${_scopeId}>&quot;Movement feel is the foundation of game feel.&quot; <a class="header-anchor" href="#movement-feel-is-the-foundation-of-game-feel" aria-label="Permalink to &quot;&quot;Movement feel is the foundation of game feel.&quot;&quot;"${_scopeId}>​</a></h1><p${_scopeId}>This framework demonstrates:</p><ul${_scopeId}><li${_scopeId}>✅ <strong${_scopeId}>Forgiving input windows</strong> that reward player intent over precision</li><li${_scopeId}>✅ <strong${_scopeId}>Physics-based but tunable</strong> (gravity, acceleration, friction as parameters)</li><li${_scopeId}>✅ <strong${_scopeId}>Ground detection that works</strong> (reliable raycasts, no edge cases)</li><li${_scopeId}>✅ <strong${_scopeId}>Performance-conscious</strong> (no runtime allocations, pooling-friendly)</li><li${_scopeId}>✅ <strong${_scopeId}>Team-ready architecture</strong> (parameters first, code second)</li></ul><p${_scopeId}>Every system is built to answer: <em${_scopeId}>&quot;How do we make movement feel fair?&quot;</em></p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("h1", {
              id: "movement-feel-is-the-foundation-of-game-feel",
              tabindex: "-1"
            }, [
              createTextVNode('"Movement feel is the foundation of game feel." '),
              createVNode("a", {
                class: "header-anchor",
                href: "#movement-feel-is-the-foundation-of-game-feel",
                "aria-label": 'Permalink to ""Movement feel is the foundation of game feel.""'
              }, "​")
            ]),
            createVNode("p", null, "This framework demonstrates:"),
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Forgiving input windows"),
                createTextVNode(" that reward player intent over precision")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Physics-based but tunable"),
                createTextVNode(" (gravity, acceleration, friction as parameters)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Ground detection that works"),
                createTextVNode(" (reliable raycasts, no edge cases)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Performance-conscious"),
                createTextVNode(" (no runtime allocations, pooling-friendly)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Team-ready architecture"),
                createTextVNode(" (parameters first, code second)")
              ])
            ]),
            createVNode("p", null, [
              createTextVNode("Every system is built to answer: "),
              createVNode("em", null, '"How do we make movement feel fair?"')
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
    title: "Technical Highlights"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}>✅ <strong${_scopeId}>Coyote Time (Jump Grace Window):</strong> 0.15s after leaving ground, jump still works</li><li${_scopeId}>✅ <strong${_scopeId}>Jump Input Buffering:</strong> Early inputs register up to 0.1s before landing</li><li${_scopeId}>✅ <strong${_scopeId}>Variable Gravity:</strong> Apex hang (0.4x), descent fall (5.5x) for natural feel</li><li${_scopeId}>✅ <strong${_scopeId}>Ground Detection &amp; Walking:</strong> Raycast-based ground detection handles slopes gracefully</li><li${_scopeId}>✅ <strong${_scopeId}>Momentum Preservation:</strong> Attack/dash systems inherit player velocity</li><li${_scopeId}>✅ <strong${_scopeId}>Dash Override System:</strong> Dash cancels movement, not actions (skill expression)</li><li${_scopeId}>✅ <strong${_scopeId}>Acceleration Curves:</strong> Smooth ramp-up from idle → running (not instant)</li><li${_scopeId}>✅ <strong${_scopeId}>No Jump Stacking:</strong> Gravity check prevents double-jump exploits</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Coyote Time (Jump Grace Window):"),
                createTextVNode(" 0.15s after leaving ground, jump still works")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Jump Input Buffering:"),
                createTextVNode(" Early inputs register up to 0.1s before landing")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Variable Gravity:"),
                createTextVNode(" Apex hang (0.4x), descent fall (5.5x) for natural feel")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Ground Detection & Walking:"),
                createTextVNode(" Raycast-based ground detection handles slopes gracefully")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Momentum Preservation:"),
                createTextVNode(" Attack/dash systems inherit player velocity")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Dash Override System:"),
                createTextVNode(" Dash cancels movement, not actions (skill expression)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "Acceleration Curves:"),
                createTextVNode(" Smooth ramp-up from idle → running (not instant)")
              ]),
              createVNode("li", null, [
                createTextVNode("✅ "),
                createVNode("strong", null, "No Jump Stacking:"),
                createTextVNode(" Gravity check prevents double-jump exploits")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="highlight-features" tabindex="-1">Highlight Features <a class="header-anchor" href="#highlight-features" aria-label="Permalink to &quot;Highlight Features {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="_1-forgiving-input-mechanics" tabindex="-1">1. Forgiving Input Mechanics <a class="header-anchor" href="#_1-forgiving-input-mechanics" aria-label="Permalink to &quot;1. Forgiving Input Mechanics {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    eyebrow: "Input",
    title: "Jump Buffer & Coyote Time"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "fm-move-media",
          slides: [
            { src: "/videos/forgiving-mechanics/fm-jumpbuffer.mp4", caption: "Jump buffer: pressing jump 0.15s before landing still registers" },
            { src: "/videos/forgiving-mechanics/fm-coyotetime.mp4", caption: "Coyote time: jumping 0.15s after leaving ground still works" }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>What you&#39;re seeing:</strong> A player who <em${_scopeId}>can&#39;t</em> miss a jump due to bad timing—input windows are large enough to be forgiving, small enough to feel responsive.</p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Jump Buffer"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Player presses jump 0.15s BEFORE landing</li><li${_scopeId2}>System records the input timestamp</li><li${_scopeId2}>On landing, if buffer is active, jump executes retroactively</li><li${_scopeId2}><strong${_scopeId2}>Result:</strong> No &quot;one-frame miss&quot; frustration, but not exploitable</li></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("ul", null, [
                    createVNode("li", null, "Player presses jump 0.15s BEFORE landing"),
                    createVNode("li", null, "System records the input timestamp"),
                    createVNode("li", null, "On landing, if buffer is active, jump executes retroactively"),
                    createVNode("li", null, [
                      createVNode("strong", null, "Result:"),
                      createTextVNode(' No "one-frame miss" frustration, but not exploitable')
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Coyote Time"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Player leaves ground (platform edge, fall-through)</li><li${_scopeId2}>For 0.15s after leaving, jump is still available</li><li${_scopeId2}>Works even if player held jump button while walking off (momentum based)</li><li${_scopeId2}><strong${_scopeId2}>Result:</strong> &quot;I jumped too late&quot; moments become successes</li></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("ul", null, [
                    createVNode("li", null, "Player leaves ground (platform edge, fall-through)"),
                    createVNode("li", null, "For 0.15s after leaving, jump is still available"),
                    createVNode("li", null, "Works even if player held jump button while walking off (momentum based)"),
                    createVNode("li", null, [
                      createVNode("strong", null, "Result:"),
                      createTextVNode(' "I jumped too late" moments become successes')
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}><strong${_scopeId}>Why Both Exist (Not One or the Other):</strong></p><ul${_scopeId}><li${_scopeId}>Buffer <strong${_scopeId}>alone</strong>: Punishes fast, reactive players (feels unresponsive)</li><li${_scopeId}>Coyote <strong${_scopeId}>alone</strong>: Punishes predictive players (feels cheap)</li><li${_scopeId}><strong${_scopeId}>Together</strong>: Both playstyles work, game feels fair</li></ul>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Implementation"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><div class="language-csharp vp-adaptive-theme"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> (jumpInputTime </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> Time.time </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> jumpBufferWindow </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> isGrounded)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>();  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId2}>// retroactively register</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> (coyoteTimeCounter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 0f</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> &amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> jumpPerformed)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>();  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId2}>// free jump after leaving ground</span></span></code></pre></div><p${_scopeId2}><strong${_scopeId2}>The Result:</strong> Players report &quot;movement feels so good&quot; before understanding why. That&#39;s excellent game design.</p></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// retroactively register")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
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
                          createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// free jump after leaving ground")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "The Result:"),
                    createTextVNode(` Players report "movement feels so good" before understanding why. That's excellent game design.`)
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
            id: "fm-move-media",
            slides: [
              { src: "/videos/forgiving-mechanics/fm-jumpbuffer.mp4", caption: "Jump buffer: pressing jump 0.15s before landing still registers" },
              { src: "/videos/forgiving-mechanics/fm-coyotetime.mp4", caption: "Coyote time: jumping 0.15s after leaving ground still works" }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "What you're seeing:"),
              createTextVNode(" A player who "),
              createVNode("em", null, "can't"),
              createTextVNode(" miss a jump due to bad timing—input windows are large enough to be forgiving, small enough to feel responsive.")
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Jump Buffer"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("ul", null, [
                    createVNode("li", null, "Player presses jump 0.15s BEFORE landing"),
                    createVNode("li", null, "System records the input timestamp"),
                    createVNode("li", null, "On landing, if buffer is active, jump executes retroactively"),
                    createVNode("li", null, [
                      createVNode("strong", null, "Result:"),
                      createTextVNode(' No "one-frame miss" frustration, but not exploitable')
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Coyote Time"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("ul", null, [
                    createVNode("li", null, "Player leaves ground (platform edge, fall-through)"),
                    createVNode("li", null, "For 0.15s after leaving, jump is still available"),
                    createVNode("li", null, "Works even if player held jump button while walking off (momentum based)"),
                    createVNode("li", null, [
                      createVNode("strong", null, "Result:"),
                      createTextVNode(' "I jumped too late" moments become successes')
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode("p", null, [
              createVNode("strong", null, "Why Both Exist (Not One or the Other):")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createTextVNode("Buffer "),
                createVNode("strong", null, "alone"),
                createTextVNode(": Punishes fast, reactive players (feels unresponsive)")
              ]),
              createVNode("li", null, [
                createTextVNode("Coyote "),
                createVNode("strong", null, "alone"),
                createTextVNode(": Punishes predictive players (feels cheap)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Together"),
                createTextVNode(": Both playstyles work, game feels fair")
              ])
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Implementation"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// retroactively register")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
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
                          createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// free jump after leaving ground")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "The Result:"),
                    createTextVNode(` Players report "movement feels so good" before understanding why. That's excellent game design.`)
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
  _push(`<h2 class="outline-only" id="_2-ground-detection" tabindex="-1">2. Ground Detection <a class="header-anchor" href="#_2-ground-detection" aria-label="Permalink to &quot;2. Ground Detection {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    eyebrow: "Physics",
    title: "Reliable Ground Detection"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "fm-ground-media",
          slides: [
            { src: "/videos/forgiving-mechanics/fm-grounddetection.mp4", caption: "Capsule raycasts detect ground reliably on flat and angled surfaces" }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>The Problem:</strong> Standard rigidbody collision checks miss ground on slopes, corners, or frame-rate inconsistencies. Result: Jump doesn&#39;t work when player is clearly on ground.</p><p${_scopeId}><strong${_scopeId}>The Solution: Capsule Raycasting</strong></p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Implementation"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><p${_scopeId2}>Multiple raycasts from capsule bottom, fanned to catch edges:</p><div class="language-csharp vp-adaptive-theme"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>RaycastHit2D</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}> hit</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> Physics2D.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>CapsuleCast</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    position</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>: bottomCenter,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>: capsuleSize,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    direction</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>: Vector2.down,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    distance</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>: groundCheckDistance,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>    layerMask</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>: groundLayer</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>);</span></span></code></pre></div><p${_scopeId2}><strong${_scopeId2}>Why this works:</strong></p><ul${_scopeId2}><li${_scopeId2}>✅ Catches ground on slopes (raycasts fan out, so angled surfaces work)</li><li${_scopeId2}>✅ Detects edges early (distance check is bigger than visual size)</li><li${_scopeId2}>✅ Works at any frame rate (raycast is frame-time independent)</li><li${_scopeId2}>✅ No rigidbody collision jitter (runs in FixedUpdate separately)</li></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("p", null, "Multiple raycasts from capsule bottom, fanned to catch edges:"),
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
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "RaycastHit2D"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hit"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Physics2D."),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "CapsuleCast"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    position"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": bottomCenter,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    size"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": capsuleSize,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    direction"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": Vector2.down,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    distance"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundCheckDistance,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    layerMask"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundLayer")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Why this works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "✅ Catches ground on slopes (raycasts fan out, so angled surfaces work)"),
                    createVNode("li", null, "✅ Detects edges early (distance check is bigger than visual size)"),
                    createVNode("li", null, "✅ Works at any frame rate (raycast is frame-time independent)"),
                    createVNode("li", null, "✅ No rigidbody collision jitter (runs in FixedUpdate separately)")
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
            id: "fm-ground-media",
            slides: [
              { src: "/videos/forgiving-mechanics/fm-grounddetection.mp4", caption: "Capsule raycasts detect ground reliably on flat and angled surfaces" }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "The Problem:"),
              createTextVNode(" Standard rigidbody collision checks miss ground on slopes, corners, or frame-rate inconsistencies. Result: Jump doesn't work when player is clearly on ground.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "The Solution: Capsule Raycasting")
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Implementation"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("p", null, "Multiple raycasts from capsule bottom, fanned to catch edges:"),
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
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "RaycastHit2D"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hit"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Physics2D."),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "CapsuleCast"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    position"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": bottomCenter,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    size"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": capsuleSize,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    direction"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": Vector2.down,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    distance"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundCheckDistance,")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    layerMask"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundLayer")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Why this works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "✅ Catches ground on slopes (raycasts fan out, so angled surfaces work)"),
                    createVNode("li", null, "✅ Detects edges early (distance check is bigger than visual size)"),
                    createVNode("li", null, "✅ Works at any frame rate (raycast is frame-time independent)"),
                    createVNode("li", null, "✅ No rigidbody collision jitter (runs in FixedUpdate separately)")
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
  _push(`<h2 class="outline-only" id="_3-physics-tuning" tabindex="-1">3. Physics Tuning <a class="header-anchor" href="#_3-physics-tuning" aria-label="Permalink to &quot;3. Physics Tuning {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    eyebrow: "Physics",
    title: "Variable Gravity & Acceleration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MediaCarousel, {
          "data-hx-reveal": "",
          id: "fm-gravity-media",
          slides: [
            { src: "/videos/forgiving-mechanics/fm-vjh.mp4", caption: "Variable Jump Gravity (Hang Time Effect) + Acceleration curves showcase." }
          ]
        }, null, _parent2, _scopeId));
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Variable Gravity (Hang Time Effect):</strong></p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Implementation"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><p${_scopeId2}>At jump apex, gravity is reduced to 0.4x. During descent, gravity jumps to 5.5x.</p><div class="language-csharp vp-adaptive-theme"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> (jumpHeld </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> hangTimeThreshold)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>    rigidbody.gravityScale </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> normalGravity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 0.4f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId2}>// hang</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>else</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> (velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>    rigidbody.gravityScale </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> normalGravity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 5.5f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId2}>// fall fast</span></span></code></pre></div><p${_scopeId2}><strong${_scopeId2}>Why it works:</strong></p><ul${_scopeId2}><li${_scopeId2}>Player feels floaty at the apex (more control, longer hang time for planning)</li><li${_scopeId2}>Player falls quickly after (commitment to jump, no floaty feel late in jump)</li><li${_scopeId2}>Matches real-world intuition (ball thrown up slowly falls back, but we perceive hang)</li><li${_scopeId2}>Separates arc feel from trajectory (arc <em${_scopeId2}>is</em> the game feel)</li></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("p", null, "At jump apex, gravity is reduced to 0.4x. During descent, gravity jumps to 5.5x."),
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
                    createVNode("strong", null, "Why it works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "Player feels floaty at the apex (more control, longer hang time for planning)"),
                    createVNode("li", null, "Player falls quickly after (commitment to jump, no floaty feel late in jump)"),
                    createVNode("li", null, "Matches real-world intuition (ball thrown up slowly falls back, but we perceive hang)"),
                    createVNode("li", null, [
                      createTextVNode("Separates arc feel from trajectory (arc "),
                      createVNode("em", null, "is"),
                      createTextVNode(" the game feel)")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}><strong${_scopeId}>Acceleration Curves (Smooth Ramp-Up):</strong></p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Implementation"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><div class="language-csharp vp-adaptive-theme"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>targetVelocity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> inputDirection </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> maxSpeed;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>velocity.x </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> Mathf.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>Lerp</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>(velocity.x, targetVelocity, acceleration </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}> Time.deltaTime);</span></span></code></pre></div><p${_scopeId2}><strong${_scopeId2}>Why it works:</strong></p><ul${_scopeId2}><li${_scopeId2}>Instant acceleration feels jerky (unrealistic, unintuitive)</li><li${_scopeId2}>Smooth lerp feels responsive and weighty (player has momentum)</li><li${_scopeId2}>Acceleration value is tunable (0.1 = sluggy, 0.5 = snappy, 0.9 = instant-ish)</li><li${_scopeId2}>Asymmetric accel/decel curves possible (faster stop = more control)</li></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "targetVelocity "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " inputDirection "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " maxSpeed;")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "velocity.x "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Mathf."),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Lerp"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(velocity.x, targetVelocity, acceleration "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.deltaTime);")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Why it works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "Instant acceleration feels jerky (unrealistic, unintuitive)"),
                    createVNode("li", null, "Smooth lerp feels responsive and weighty (player has momentum)"),
                    createVNode("li", null, "Acceleration value is tunable (0.1 = sluggy, 0.5 = snappy, 0.9 = instant-ish)"),
                    createVNode("li", null, "Asymmetric accel/decel curves possible (faster stop = more control)")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}><strong${_scopeId}>Parameter-Driven:</strong></p>`);
        _push2(ssrRenderComponent(_component_ProjectPanel, {
          variant: "mini",
          title: "Implementation"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mini-panel-body"${_scopeId2}><div class="language-csharp vp-adaptive-theme"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>SerializeField</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}> maxSpeed</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 5f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>SerializeField</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}> acceleration</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 0.85f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>SerializeField</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}> hangTimeGravity</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 0.4f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}>SerializeField</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}>float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId2}> fallGravity</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId2}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId2}> 5.5f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId2}>;</span></span></code></pre></div><p${_scopeId2}>All tunable in inspector. No code recompile. Change at runtime in play mode.</p></div>`);
            } else {
              return [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " maxSpeed"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 5f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " acceleration"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.85f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hangTimeGravity"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.4f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " fallGravity"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 5.5f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, "All tunable in inspector. No code recompile. Change at runtime in play mode.")
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
            id: "fm-gravity-media",
            slides: [
              { src: "/videos/forgiving-mechanics/fm-vjh.mp4", caption: "Variable Jump Gravity (Hang Time Effect) + Acceleration curves showcase." }
            ]
          }),
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Variable Gravity (Hang Time Effect):")
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Implementation"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
                  createVNode("p", null, "At jump apex, gravity is reduced to 0.4x. During descent, gravity jumps to 5.5x."),
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
                    createVNode("strong", null, "Why it works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "Player feels floaty at the apex (more control, longer hang time for planning)"),
                    createVNode("li", null, "Player falls quickly after (commitment to jump, no floaty feel late in jump)"),
                    createVNode("li", null, "Matches real-world intuition (ball thrown up slowly falls back, but we perceive hang)"),
                    createVNode("li", null, [
                      createTextVNode("Separates arc feel from trajectory (arc "),
                      createVNode("em", null, "is"),
                      createTextVNode(" the game feel)")
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode("p", null, [
              createVNode("strong", null, "Acceleration Curves (Smooth Ramp-Up):")
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Implementation"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "targetVelocity "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " inputDirection "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " maxSpeed;")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "velocity.x "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Mathf."),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Lerp"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(velocity.x, targetVelocity, acceleration "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.deltaTime);")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Why it works:")
                  ]),
                  createVNode("ul", null, [
                    createVNode("li", null, "Instant acceleration feels jerky (unrealistic, unintuitive)"),
                    createVNode("li", null, "Smooth lerp feels responsive and weighty (player has momentum)"),
                    createVNode("li", null, "Acceleration value is tunable (0.1 = sluggy, 0.5 = snappy, 0.9 = instant-ish)"),
                    createVNode("li", null, "Asymmetric accel/decel curves possible (faster stop = more control)")
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode("p", null, [
              createVNode("strong", null, "Parameter-Driven:")
            ]),
            createVNode(_component_ProjectPanel, {
              variant: "mini",
              title: "Implementation"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "mini-panel-body" }, [
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
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " maxSpeed"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 5f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " acceleration"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.85f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hangTimeGravity"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.4f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "["),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SerializeField"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "] "),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "float"),
                          createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " fallGravity"),
                          createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                          createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 5.5f"),
                          createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("p", null, "All tunable in inspector. No code recompile. Change at runtime in play mode.")
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
    title: "Architecture Overview - Modular Component System"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><div class="language- vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>┌──────────────────────────────────────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│        CharacterMovement.cs (Core)           │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│   Handles velocity, acceleration, gravity    │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────────────────────────────────────────────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>                      ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>┌──────────────────────────────────────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│         GroundDetection.cs (Raycast)         │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│     Tells CharacterMovement if grounded      │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────────────────────────────────────────────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>                      ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>┌──────────────────────────────────────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│           InputHandler.cs (Input)            │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│       Maps input → movement calls            │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────────────────────────────────────────────┘</span></span>
<span class="line"${_scopeId}><span${_scopeId}>                      ↓</span></span>
<span class="line"${_scopeId}><span${_scopeId}>┌──────────────────────────────────────────────┐</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│      Optional: Combat/Dash Systems           │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>│    Built on top of movement foundation       │</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└──────────────────────────────────────────────┘</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Single Responsibility:</strong></p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>CharacterMovement</code>: Pure physics</li><li${_scopeId}><code${_scopeId}>GroundDetection</code>: Pure raycasting</li><li${_scopeId}><code${_scopeId}>InputHandler</code>: Input mapping</li><li${_scopeId}><code${_scopeId}>Combat/Dash</code>: Systems that consume movement API</li></ul><p${_scopeId}><strong${_scopeId}>Why This Matters:</strong> You can swap any layer without breaking others. Change ground detection logic? CharacterMovement doesn&#39;t care. Add new input? Movement doesn&#39;t change.</p><p${_scopeId}><strong${_scopeId}>Integration Point:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// In FixedUpdate</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>groundDetection.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>CheckGround</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>characterMovement.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>UpdatePhysics</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(inputDirection, isJumping);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>controller.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Move</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(characterMovement.Velocity);</span></span></code></pre></div><p${_scopeId}>Linear, clear, testable.</p></div>`);
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
                    createVNode("span", null, "┌──────────────────────────────────────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│        CharacterMovement.cs (Core)           │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│   Handles velocity, acceleration, gravity    │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────────────────────────────────────────────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "                      ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "┌──────────────────────────────────────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│         GroundDetection.cs (Raycast)         │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│     Tells CharacterMovement if grounded      │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────────────────────────────────────────────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "                      ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "┌──────────────────────────────────────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│           InputHandler.cs (Input)            │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│       Maps input → movement calls            │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────────────────────────────────────────────┘")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "                      ↓")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "┌──────────────────────────────────────────────┐")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│      Optional: Combat/Dash Systems           │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "│    Built on top of movement foundation       │")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", null, "└──────────────────────────────────────────────┘")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Single Responsibility:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("code", null, "CharacterMovement"),
                createTextVNode(": Pure physics")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "GroundDetection"),
                createTextVNode(": Pure raycasting")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "InputHandler"),
                createTextVNode(": Input mapping")
              ]),
              createVNode("li", null, [
                createVNode("code", null, "Combat/Dash"),
                createTextVNode(": Systems that consume movement API")
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why This Matters:"),
              createTextVNode(" You can swap any layer without breaking others. Change ground detection logic? CharacterMovement doesn't care. Add new input? Movement doesn't change.")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Integration Point:")
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
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// In FixedUpdate")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "groundDetection."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "CheckGround"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "characterMovement."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "UpdatePhysics"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(inputDirection, isJumping);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "controller."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Move"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(characterMovement.Velocity);")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, "Linear, clear, testable.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_1-movement-core" tabindex="-1">1. Movement Core <a class="header-anchor" href="#_1-movement-core" aria-label="Permalink to &quot;1. Movement Core {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 1: Character Movement"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Jump Buffer Implementation:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> jumpInputTime</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> const</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> jumpBufferWindow</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0.1f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> HandleJumpInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>bool</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> pressed</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (pressed)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        jumpInputTime </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Time.time;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Update</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>()</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Jump buffer: even if not grounded now, retroactively register</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (isGrounded </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Time.time </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> jumpInputTime </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> jumpBufferWindow)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        jumpInputTime </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> -</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>999f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// consume</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Coyote Time Implementation:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> coyoteTimeCounter</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> const</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> coyoteTimeDuration</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0.15f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Update</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>()</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (isGrounded)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        coyoteTimeCounter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> coyoteTimeDuration;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    else</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        coyoteTimeCounter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>-=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Time.deltaTime;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Jump allowed even in air if coyote time active</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (coyoteTimeCounter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> &amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> jumpPressed)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        Jump</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why This Order Matters:</strong></p><ol${_scopeId}><li${_scopeId}>Record input time</li><li${_scopeId}>Check if grounded</li><li${_scopeId}>Compare timestamps</li><li${_scopeId}>Execute jump</li><li${_scopeId}>Consume input</li></ol><p${_scopeId}>No branching, pure sequential logic. Easy to debug, easy to extend.</p><p${_scopeId}><strong${_scopeId}>Variable Gravity:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> ApplyGravity</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>()</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> gravityMultiplier</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> ?</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> hangTimeGravity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> fallGravity;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    velocity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>+=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Physics2D.gravity.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> gravityMultiplier </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Time.deltaTime;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}>Tiny. Effective. Tunable.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Jump Buffer Implementation:")
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
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " jumpInputTime"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " const"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " jumpBufferWindow"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.1f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " HandleJumpInput"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "bool"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " pressed"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (pressed)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        jumpInputTime "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.time;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Update"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "()")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Jump buffer: even if not grounded now, retroactively register")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (isGrounded "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "&&"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.time "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "-"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " jumpInputTime "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "<"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " jumpBufferWindow)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    {")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        Jump"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        jumpInputTime "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " -"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "999f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// consume")
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
              createVNode("strong", null, "Coyote Time Implementation:")
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
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " coyoteTimeCounter"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " const"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " coyoteTimeDuration"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0.15f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "public"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Update"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "()")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (isGrounded)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        coyoteTimeCounter "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " coyoteTimeDuration;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    else")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        coyoteTimeCounter "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "-="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.deltaTime;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Jump allowed even in air if coyote time active")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (coyoteTimeCounter "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " &&"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " jumpPressed)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        Jump"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why This Order Matters:")
            ]),
            createVNode("ol", null, [
              createVNode("li", null, "Record input time"),
              createVNode("li", null, "Check if grounded"),
              createVNode("li", null, "Compare timestamps"),
              createVNode("li", null, "Execute jump"),
              createVNode("li", null, "Consume input")
            ]),
            createVNode("p", null, "No branching, pure sequential logic. Easy to debug, easy to extend."),
            createVNode("p", null, [
              createVNode("strong", null, "Variable Gravity:")
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
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " ApplyGravity"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "()")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " gravityMultiplier"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " velocity.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ?"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " hangTimeGravity "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ":"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " fallGravity;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    velocity.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "+="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Physics2D.gravity.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " gravityMultiplier "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "*"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Time.deltaTime;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, "Tiny. Effective. Tunable.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_2-ground-detection-1" tabindex="-1">2. Ground Detection <a class="header-anchor" href="#_2-ground-detection-1" aria-label="Permalink to &quot;2. Ground Detection {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 2: Ground Detection"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Capsule Raycast Pattern:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> bool</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> CheckGround</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>()</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> bottomCenter</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        transform.position.x,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>        transform.position.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> capsuleSize.y </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 2f</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>    RaycastHit2D</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> hit</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Physics2D.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>CapsuleCast</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        origin</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: bottomCenter,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: capsuleSize,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        capsuleDirection</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: CapsuleDirection2D.Vertical,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        angle</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0f</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        direction</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: Vector2.down,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        distance</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: groundCheckDistance,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        layerMask</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>: groundLayer</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    isGrounded </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> hit.collider </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> null</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    groundNormal </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> hit.normal;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> isGrounded;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why Capsule Over Line Raycast:</strong></p><ul${_scopeId}><li${_scopeId}>Line raycast: Only checks center (misses slopes)</li><li${_scopeId}>Capsule raycast: Fans out across width (catches edges)</li><li${_scopeId}>Capsule is consistent with visual size (no magic distance)</li></ul><p${_scopeId}><strong${_scopeId}>Slope Handling:</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> HandleSlopes</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> velocity</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> slopeAngle</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Vector2.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>Angle</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(groundNormal, Vector2.up);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (slopeAngle </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> maxWalkableSlope)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>        return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// too steep, slide off</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>    // Adjust horizontal velocity to follow slope</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    velocity </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Vector2.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>ProjectOnPlane</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(velocity, groundNormal);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}>Slopes feel natural, don&#39;t stick where they shouldn&#39;t.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Capsule Raycast Pattern:")
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
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " bool"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " CheckGround"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "()")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " bottomCenter"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        transform.position.x,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "        transform.position.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "-"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " capsuleSize.y "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "/"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 2f")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    );")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "    RaycastHit2D"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " hit"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Physics2D."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "CapsuleCast"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        origin"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": bottomCenter,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        size"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": capsuleSize,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        capsuleDirection"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": CapsuleDirection2D.Vertical,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        angle"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0f"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ",")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        direction"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": Vector2.down,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        distance"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundCheckDistance,")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        layerMask"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ": groundLayer")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    );")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    isGrounded "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " hit.collider "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "!="),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " null"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    groundNormal "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " hit.normal;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    return"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " isGrounded;")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why Capsule Over Line Raycast:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Line raycast: Only checks center (misses slopes)"),
              createVNode("li", null, "Capsule raycast: Fans out across width (catches edges)"),
              createVNode("li", null, "Capsule is consistent with visual size (no magic distance)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Slope Handling:")
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
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " HandleSlopes"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " velocity"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " slopeAngle"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Vector2."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "Angle"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(groundNormal, Vector2.up);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (slopeAngle "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " maxWalkableSlope)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "        return"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";  "),
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// too steep, slide off")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "    // Adjust horizontal velocity to follow slope")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    velocity "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Vector2."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "ProjectOnPlane"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(velocity, groundNormal);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, "Slopes feel natural, don't stick where they shouldn't.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="_3-input-handling" tabindex="-1">3. Input Handling <a class="header-anchor" href="#_3-input-handling" aria-label="Permalink to &quot;3. Input Handling {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "System 3: Side-Scroller Controller"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Input Mapping (Simple &amp; Clear):</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>private</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> HandleInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>()</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    float</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> moveInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Input.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>GetAxisRaw</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;Horizontal&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    bool</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> jumpInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Input.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>GetButtonDown</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;Jump&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    bool</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> dashInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> Input.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>GetButtonDown</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"${_scopeId}>&quot;Dash&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    movement.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>SetDirection</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}> Vector2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(moveInput, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    movement.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>HandleJumpInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>(jumpInput);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (dashInput)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"${_scopeId}>        Dash</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>}</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Facing Direction (Decoupled):</strong></p><div class="language-csharp vp-adaptive-theme"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> (moveInput </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>    facingDirection </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}> moveInput </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> ?</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"${_scopeId}> -</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Facing direction persists even during jump</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"${_scopeId}>// Result: Player can face one direction while moving another (skill expression)</span></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Why Decouple Facing:</strong></p><ul${_scopeId}><li${_scopeId}>Allows attacking backward mid-jump (high-level play)</li><li${_scopeId}>Feels responsive (visual feedback matches intent)</li><li${_scopeId}>Not automatic (player controls it actively)</li></ul><p${_scopeId}><strong${_scopeId}>The Pattern:</strong> Input → Data → Action. No state mutation mid-frame.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Input Mapping (Simple & Clear):")
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
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "private"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " void"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " HandleInput"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "()")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "{")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    float"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " moveInput"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Input."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "GetAxisRaw"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"Horizontal"'),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    bool"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " jumpInput"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Input."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "GetButtonDown"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"Jump"'),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    bool"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " dashInput"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " Input."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "GetButtonDown"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, '"Dash"'),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ");")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    movement."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "SetDirection"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "("),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "new"),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, " Vector2"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(moveInput, "),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "0"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "));")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    movement."),
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "HandleJumpInput"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "(jumpInput);")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    ")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "    if"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (dashInput)")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "        Dash"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "();")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "}")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Facing Direction (Decoupled):")
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
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " (moveInput "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "!="),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ")")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, "    facingDirection "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, "="),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, " moveInput "),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, ">"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 0"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " ?"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " 1"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " :"),
                    createVNode("span", { style: { "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" } }, " -"),
                    createVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, "1"),
                    createVNode("span", { style: { "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" } }, ";")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Facing direction persists even during jump")
                  ]),
                  createTextVNode("\n"),
                  createVNode("span", { class: "line" }, [
                    createVNode("span", { style: { "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" } }, "// Result: Player can face one direction while moving another (skill expression)")
                  ])
                ])
              ])
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Why Decouple Facing:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Allows attacking backward mid-jump (high-level play)"),
              createVNode("li", null, "Feels responsive (visual feedback matches intent)"),
              createVNode("li", null, "Not automatic (player controls it actively)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "The Pattern:"),
              createTextVNode(" Input → Data → Action. No state mutation mid-frame.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<hr><h2 class="outline-only" id="extras" tabindex="-1">Extras <a class="header-anchor" href="#extras" aria-label="Permalink to &quot;Extras{.outline-only}&quot;">​</a></h2><h1 class="section-title-center" data-hx-reveal="true" id="extra-notes" tabindex="-1">Extra Notes <a class="header-anchor" href="#extra-notes" aria-label="Permalink to &quot;Extra Notes {.section-title-center data-hx-reveal=&quot;true&quot;}&quot;">​</a></h1><h2 class="outline-only" id="when-to-use-this-framework" tabindex="-1">When to Use This Framework <a class="header-anchor" href="#when-to-use-this-framework" aria-label="Permalink to &quot;When to Use This Framework {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🎮",
    title: "When to Use This Framework"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>Perfect For:</strong></p><ul${_scopeId}><li${_scopeId}>✅ Platformers action games (E.g: Hollow knight)</li><li${_scopeId}>✅ 2D roguelikes or dungeon crawlers</li><li${_scopeId}>✅ Rapid prototyping (setup in 30 minutes)</li><li${_scopeId}>✅ Multiplayer-ready (fully deterministic physics)</li><li${_scopeId}>✅ Teams (parameter-driven, not hard-coded)</li></ul><p${_scopeId}><strong${_scopeId}>Less Ideal For:</strong></p><ul${_scopeId}><li${_scopeId}>❌ Grid-based movement (use AStar pathfinding instead)</li><li${_scopeId}>❌ 3D games (code is 2D-only; 3D version available separately)</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "Perfect For:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "✅ Platformers action games (E.g: Hollow knight)"),
              createVNode("li", null, "✅ 2D roguelikes or dungeon crawlers"),
              createVNode("li", null, "✅ Rapid prototyping (setup in 30 minutes)"),
              createVNode("li", null, "✅ Multiplayer-ready (fully deterministic physics)"),
              createVNode("li", null, "✅ Teams (parameter-driven, not hard-coded)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "Less Ideal For:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "❌ Grid-based movement (use AStar pathfinding instead)"),
              createVNode("li", null, "❌ 3D games (code is 2D-only; 3D version available separately)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="outline-only" id="framework-implementation" tabindex="-1">Framework Implementation <a class="header-anchor" href="#framework-implementation" aria-label="Permalink to &quot;Framework Implementation {.outline-only}&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ProjectPanel, {
    icon: "🏗️",
    title: "Framework vs. Game-Specific Implementation"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-text"${_scopeId}><p${_scopeId}><strong${_scopeId}>This is a Framework, Not a Template</strong></p><p${_scopeId}>What that means:</p><ul${_scopeId}><li${_scopeId}>You own the movement code (it&#39;s yours to modify)</li><li${_scopeId}>Parameters are starting points, not dogma (tune to your game feel)</li><li${_scopeId}>It ships in weeks, not months (saves hundreds of hours)</li><li${_scopeId}>It scales to multiple characters (used in Path to Power with custom combat)</li></ul><p${_scopeId}><strong${_scopeId}>What You Get:</strong></p><ul${_scopeId}><li${_scopeId}>Battle-tested forgiving mechanics</li><li${_scopeId}>Reliable ground detection (no &quot;jump doesn&#39;t work&quot; bugs)</li><li${_scopeId}>Clean, documented code (readable by teams)</li><li${_scopeId}>Parameter-first design (iterate without recompile)</li></ul><p${_scopeId}><strong${_scopeId}>What You Build:</strong></p><ul${_scopeId}><li${_scopeId}>Game-specific combat systems</li><li${_scopeId}>Custom abilities (dashes, double-jumps, wall-slides)</li><li${_scopeId}>Unique feel (adjust gravity/acceleration to your game)</li><li${_scopeId}>Level design patterns (slopes, platforms, gaps)</li></ul><p${_scopeId}>The framework handles the <em${_scopeId}>foundation</em>. You handle the <em${_scopeId}>flavor</em>.</p></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("p", null, [
              createVNode("strong", null, "This is a Framework, Not a Template")
            ]),
            createVNode("p", null, "What that means:"),
            createVNode("ul", null, [
              createVNode("li", null, "You own the movement code (it's yours to modify)"),
              createVNode("li", null, "Parameters are starting points, not dogma (tune to your game feel)"),
              createVNode("li", null, "It ships in weeks, not months (saves hundreds of hours)"),
              createVNode("li", null, "It scales to multiple characters (used in Path to Power with custom combat)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "What You Get:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Battle-tested forgiving mechanics"),
              createVNode("li", null, `Reliable ground detection (no "jump doesn't work" bugs)`),
              createVNode("li", null, "Clean, documented code (readable by teams)"),
              createVNode("li", null, "Parameter-first design (iterate without recompile)")
            ]),
            createVNode("p", null, [
              createVNode("strong", null, "What You Build:")
            ]),
            createVNode("ul", null, [
              createVNode("li", null, "Game-specific combat systems"),
              createVNode("li", null, "Custom abilities (dashes, double-jumps, wall-slides)"),
              createVNode("li", null, "Unique feel (adjust gravity/acceleration to your game)"),
              createVNode("li", null, "Level design patterns (slopes, platforms, gaps)")
            ]),
            createVNode("p", null, [
              createTextVNode("The framework handles the "),
              createVNode("em", null, "foundation"),
              createTextVNode(". You handle the "),
              createVNode("em", null, "flavor"),
              createTextVNode(".")
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
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Engine:</strong> Unity 2020 LTS+</li><li${_scopeId}><strong${_scopeId}>Language:</strong> C#</li><li${_scopeId}><strong${_scopeId}>Physics:</strong> Rigidbody2D with custom movement</li><li${_scopeId}><strong${_scopeId}>Input:</strong> New Input System (event-driven, configurable)</li><li${_scopeId}><strong${_scopeId}>Ground Detection:</strong> Raycast &amp; CapsuleCast</li><li${_scopeId}><strong${_scopeId}>Performance:</strong> Zero allocations per frame (pooling-friendly)</li><li${_scopeId}><strong${_scopeId}>Documentation:</strong> Inline comments + parameter descriptions</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "Engine:"),
                createTextVNode(" Unity 2020 LTS+")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Language:"),
                createTextVNode(" C#")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Physics:"),
                createTextVNode(" Rigidbody2D with custom movement")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Input:"),
                createTextVNode(" New Input System (event-driven, configurable)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Ground Detection:"),
                createTextVNode(" Raycast & CapsuleCast")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Performance:"),
                createTextVNode(" Zero allocations per frame (pooling-friendly)")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Documentation:"),
                createTextVNode(" Inline comments + parameter descriptions")
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
        _push2(`<div class="project-text"${_scopeId}><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>GitHub:</strong> [Not available yet]</li><li${_scopeId}><strong${_scopeId}>Used In:</strong> <a href="/protforlio-site/projects/path-to-power"${_scopeId}>Path to Power</a></li><li${_scopeId}><strong${_scopeId}>Live Demo:</strong> [Not available yet]</li><li${_scopeId}><strong${_scopeId}>Documentation:</strong> Included in codebase</li></ul></div>`);
      } else {
        return [
          createVNode("div", { class: "project-text" }, [
            createVNode("ul", null, [
              createVNode("li", null, [
                createVNode("strong", null, "GitHub:"),
                createTextVNode(" [Not available yet]")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Used In:"),
                createTextVNode(),
                createVNode("a", { href: "/protforlio-site/projects/path-to-power" }, "Path to Power")
              ]),
              createVNode("li", null, [
                createVNode("strong", null, "Live Demo:"),
                createTextVNode(" [Not available yet]")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/forgiving-mechanics.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgivingMechanics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  forgivingMechanics as default
};
