import { useSSRContext, resolveComponent, withCtx, unref, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { w as withBase } from "./Content.BgX2GRk_.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"Raymond Cheng — Gameplay Programmer","description":"Gameplay and systems programmer working in Unity, Unreal Engine 5 and Roblox. Combat systems, game feel, and shipped projects.","frontmatter":{"layout":"home","title":"Raymond Cheng — Gameplay Programmer","description":"Gameplay and systems programmer working in Unity, Unreal Engine 5 and Roblox. Combat systems, game feel, and shipped projects.","markdownStyles":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeExperiment = resolveComponent("HomeExperiment");
      const _component_ShowreelHero = resolveComponent("ShowreelHero");
      const _component_HomeSection = resolveComponent("HomeSection");
      const _component_HomeProjectCard = resolveComponent("HomeProjectCard");
      const _component_HomeTimelineEntry = resolveComponent("HomeTimelineEntry");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeExperiment, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ShowreelHero, null, null, _parent2, _scopeId));
            _push2(`<div class="hx-stats"${_scopeId}><div class="hx-shell"${_scopeId}><div class="hx-stats-grid" data-hx-reveal${_scopeId}><div class="hx-stat"${_scopeId}><span class="hx-stat-value"${_scopeId}>10M+</span><span class="hx-stat-label"${_scopeId}>Views on shipped mod work</span></div><div class="hx-stat"${_scopeId}><span class="hx-stat-value"${_scopeId}>4+ yrs</span><span class="hx-stat-label"${_scopeId}>Freelance gameplay work</span></div><div class="hx-stat"${_scopeId}><span class="hx-stat-value"${_scopeId}>9</span><span class="hx-stat-label"${_scopeId}>Projects &amp; prototypes</span></div><div class="hx-stat"${_scopeId}><span class="hx-stat-value"${_scopeId}>3</span><span class="hx-stat-label"${_scopeId}>Engines: Unity, UE5, Roblox</span></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_HomeSection, {
              id: "featured-work",
              eyebrow: "Selected work",
              title: "Featured Projects",
              lead: "Two solo-built projects that show the range I work across: combat and game feel in Unity, and modular systems architecture in Unreal Engine 5."
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="hx-projects"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_HomeProjectCard, {
                    href: "/projects/path-to-power",
                    title: "Dragon Ball 2D Platformer",
                    blurb: "Combat-focused 2D action platformer with a custom character controller, combo system, multi-layer hit feedback and a pure C# UI Toolkit HUD. Built solo in four weeks.",
                    video: "/videos/path-to-power/ptp-showcase-1V2.mp4",
                    poster: "/banner-cover.jpg",
                    date: "September 2025",
                    context: "Personal",
                    flag: "Featured",
                    tags: ["Unity", "C#", "2D", "Combat", "Game Feel"],
                    cta: "Read case study"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_HomeProjectCard, {
                    href: "/projects/ue5-fps",
                    title: "1st Person Shooter Framework",
                    blurb: "Solo-developed FPS framework in Unreal Engine 5 and C++, with modular weapons, enemy AI, checkpoints and scoring built for readable, extensible architecture.",
                    video: "/videos/ue5-fps/fps-showcase-0.mp4",
                    date: "October 2025",
                    context: "Academic",
                    flag: "Featured",
                    tags: ["Unreal Engine 5", "C++", "3D", "FPS", "AI"],
                    cta: "Read case study"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="hx-cta-row" data-hx-reveal${_scopeId2}><a class="hx-btn"${ssrRenderAttr("href", unref(withBase)("/projects/"))}${_scopeId2}>View all projects</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "hx-projects" }, [
                      createVNode(_component_HomeProjectCard, {
                        href: "/projects/path-to-power",
                        title: "Dragon Ball 2D Platformer",
                        blurb: "Combat-focused 2D action platformer with a custom character controller, combo system, multi-layer hit feedback and a pure C# UI Toolkit HUD. Built solo in four weeks.",
                        video: "/videos/path-to-power/ptp-showcase-1V2.mp4",
                        poster: "/banner-cover.jpg",
                        date: "September 2025",
                        context: "Personal",
                        flag: "Featured",
                        tags: ["Unity", "C#", "2D", "Combat", "Game Feel"],
                        cta: "Read case study"
                      }),
                      createVNode(_component_HomeProjectCard, {
                        href: "/projects/ue5-fps",
                        title: "1st Person Shooter Framework",
                        blurb: "Solo-developed FPS framework in Unreal Engine 5 and C++, with modular weapons, enemy AI, checkpoints and scoring built for readable, extensible architecture.",
                        video: "/videos/ue5-fps/fps-showcase-0.mp4",
                        date: "October 2025",
                        context: "Academic",
                        flag: "Featured",
                        tags: ["Unreal Engine 5", "C++", "3D", "FPS", "AI"],
                        cta: "Read case study"
                      })
                    ]),
                    createVNode("div", {
                      class: "hx-cta-row",
                      "data-hx-reveal": ""
                    }, [
                      createVNode("a", {
                        class: "hx-btn",
                        href: unref(withBase)("/projects/")
                      }, "View all projects", 8, ["href"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeSection, {
              id: "about",
              eyebrow: "About me",
              title: "Gameplay Programmer, Combat Specialist",
              band: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="hx-about"${_scopeId2}><div data-hx-reveal${_scopeId2}><div class="hx-portrait"${_scopeId2}><img${ssrRenderAttr("src", unref(withBase)("/raymond-portrait.jpg"))} alt="Portrait of Raymond Cheng" width="640" height="800" loading="lazy" decoding="async"${_scopeId2}></div><span class="hx-portrait-caption"${_scopeId2}>Raymond Cheng · United Kingdom</span></div><div class="hx-about-body" data-hx-reveal${_scopeId2}><p${_scopeId2}>I am a student at <a href="https://www.staffs.ac.uk/" target="_blank" rel="noopener noreferrer"${_scopeId2}>University of Staffordshire</a> studying <a href="https://www.staffs.ac.uk/course/computer-games-design-programming-bsc" target="_blank" rel="noopener noreferrer"${_scopeId2}>BSc (Hons) Games Programming and Design</a>, specialising in <span class="hx-hl"${_scopeId2}>fast-paced combat</span>, <span class="hx-hl"${_scopeId2}>gameplay feel</span>, and <span class="hx-hl"${_scopeId2}>VFX/SFX implementation</span>.</p><p${_scopeId2}>Most of my projects are built in <strong${_scopeId2}>Unity</strong> and <strong${_scopeId2}>Unreal Engine 5</strong>, where I focus on responsive controllers, boss fights, and readable, scalable C#/C++ architecture.</p><p${_scopeId2}>Outside university I have completed <strong${_scopeId2}>multiple commission projects</strong> for Roblox games and <strong${_scopeId2}>created popular community mods</strong> for viral titles, building a reputation for <span class="hx-hl"${_scopeId2}>fast prototyping</span>, <span class="hx-hl"${_scopeId2}>reliable delivery</span>, and <span class="hx-hl"${_scopeId2}>high-impact gameplay polish</span>.</p><p${_scopeId2}>In game jams I usually act as <strong${_scopeId2}>lead programmer and designer</strong>, connecting art, design and code so the team can iterate quickly while keeping the game coherent and fun.</p><p${_scopeId2}>I am actively looking for <strong${_scopeId2}>gameplay programming opportunities</strong> to gain more real-world experience.</p></div></div><div class="hx-skills" data-hx-reveal${_scopeId2}><div class="hx-skill hx-glow"${_scopeId2}><span class="hx-skill-name"${_scopeId2}>Engines</span><span class="hx-skill-detail"${_scopeId2}>Unity · Unreal Engine 5 · Roblox Studio</span></div><div class="hx-skill hx-glow"${_scopeId2}><span class="hx-skill-name"${_scopeId2}>Languages</span><span class="hx-skill-detail"${_scopeId2}>C# · C++ · Lua · Blueprints</span></div><div class="hx-skill hx-glow"${_scopeId2}><span class="hx-skill-name"${_scopeId2}>Systems</span><span class="hx-skill-detail"${_scopeId2}>Combat, movement and ability frameworks; enemy AI; UI Toolkit HUDs</span></div><div class="hx-skill hx-glow"${_scopeId2}><span class="hx-skill-name"${_scopeId2}>Game feel</span><span class="hx-skill-detail"${_scopeId2}>Forgiving mechanics, hit feedback, VFX and SFX implementation</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "hx-about" }, [
                      createVNode("div", { "data-hx-reveal": "" }, [
                        createVNode("div", { class: "hx-portrait" }, [
                          createVNode("img", {
                            src: unref(withBase)("/raymond-portrait.jpg"),
                            alt: "Portrait of Raymond Cheng",
                            width: "640",
                            height: "800",
                            loading: "lazy",
                            decoding: "async"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("span", { class: "hx-portrait-caption" }, "Raymond Cheng · United Kingdom")
                      ]),
                      createVNode("div", {
                        class: "hx-about-body",
                        "data-hx-reveal": ""
                      }, [
                        createVNode("p", null, [
                          createTextVNode("I am a student at "),
                          createVNode("a", {
                            href: "https://www.staffs.ac.uk/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "University of Staffordshire"),
                          createTextVNode(" studying "),
                          createVNode("a", {
                            href: "https://www.staffs.ac.uk/course/computer-games-design-programming-bsc",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "BSc (Hons) Games Programming and Design"),
                          createTextVNode(", specialising in "),
                          createVNode("span", { class: "hx-hl" }, "fast-paced combat"),
                          createTextVNode(", "),
                          createVNode("span", { class: "hx-hl" }, "gameplay feel"),
                          createTextVNode(", and "),
                          createVNode("span", { class: "hx-hl" }, "VFX/SFX implementation"),
                          createTextVNode(".")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("Most of my projects are built in "),
                          createVNode("strong", null, "Unity"),
                          createTextVNode(" and "),
                          createVNode("strong", null, "Unreal Engine 5"),
                          createTextVNode(", where I focus on responsive controllers, boss fights, and readable, scalable C#/C++ architecture.")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("Outside university I have completed "),
                          createVNode("strong", null, "multiple commission projects"),
                          createTextVNode(" for Roblox games and "),
                          createVNode("strong", null, "created popular community mods"),
                          createTextVNode(" for viral titles, building a reputation for "),
                          createVNode("span", { class: "hx-hl" }, "fast prototyping"),
                          createTextVNode(", "),
                          createVNode("span", { class: "hx-hl" }, "reliable delivery"),
                          createTextVNode(", and "),
                          createVNode("span", { class: "hx-hl" }, "high-impact gameplay polish"),
                          createTextVNode(".")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("In game jams I usually act as "),
                          createVNode("strong", null, "lead programmer and designer"),
                          createTextVNode(", connecting art, design and code so the team can iterate quickly while keeping the game coherent and fun.")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("I am actively looking for "),
                          createVNode("strong", null, "gameplay programming opportunities"),
                          createTextVNode(" to gain more real-world experience.")
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "hx-skills",
                      "data-hx-reveal": ""
                    }, [
                      createVNode("div", { class: "hx-skill hx-glow" }, [
                        createVNode("span", { class: "hx-skill-name" }, "Engines"),
                        createVNode("span", { class: "hx-skill-detail" }, "Unity · Unreal Engine 5 · Roblox Studio")
                      ]),
                      createVNode("div", { class: "hx-skill hx-glow" }, [
                        createVNode("span", { class: "hx-skill-name" }, "Languages"),
                        createVNode("span", { class: "hx-skill-detail" }, "C# · C++ · Lua · Blueprints")
                      ]),
                      createVNode("div", { class: "hx-skill hx-glow" }, [
                        createVNode("span", { class: "hx-skill-name" }, "Systems"),
                        createVNode("span", { class: "hx-skill-detail" }, "Combat, movement and ability frameworks; enemy AI; UI Toolkit HUDs")
                      ]),
                      createVNode("div", { class: "hx-skill hx-glow" }, [
                        createVNode("span", { class: "hx-skill-name" }, "Game feel"),
                        createVNode("span", { class: "hx-skill-detail" }, "Forgiving mechanics, hit feedback, VFX and SFX implementation")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeSection, {
              id: "experience",
              eyebrow: "Experience",
              title: "Where I Have Shipped",
              lead: "Paid freelance gameplay work delivered to external teams and live player communities."
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="hx-timeline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_HomeTimelineEntry, {
                    period: "Dec 2021 — Present",
                    role: "Freelance Roblox Gameplay Programmer",
                    org: "Remote",
                    meta: "Roblox commissions",
                    tags: ["Roblox Studio", "Lua", "Combat Systems", "VFX/SFX"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li${_scopeId3}>Designed and implemented <strong${_scopeId3}>combat systems, transformation mechanics and cinematic abilities</strong> for multiple Roblox titles, tailored to each development team&#39;s requirements.</li><li${_scopeId3}>Created <strong${_scopeId3}>high-impact VFX and SFX</strong> for skills, ultimates and transformations, focusing on game feel, clarity and performance on lower-end devices.</li><li${_scopeId3}>Built <strong${_scopeId3}>modular character and moveset frameworks</strong> that let teams plug in new characters, forms and abilities without rewriting core systems.</li><li${_scopeId3}>Delivered prototypes and production-ready features on tight timelines, becoming a go-to freelancer for <strong${_scopeId3}>fast, reliable gameplay iteration</strong>.</li>`);
                      } else {
                        return [
                          createVNode("li", null, [
                            createTextVNode("Designed and implemented "),
                            createVNode("strong", null, "combat systems, transformation mechanics and cinematic abilities"),
                            createTextVNode(" for multiple Roblox titles, tailored to each development team's requirements.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Created "),
                            createVNode("strong", null, "high-impact VFX and SFX"),
                            createTextVNode(" for skills, ultimates and transformations, focusing on game feel, clarity and performance on lower-end devices.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Built "),
                            createVNode("strong", null, "modular character and moveset frameworks"),
                            createTextVNode(" that let teams plug in new characters, forms and abilities without rewriting core systems.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Delivered prototypes and production-ready features on tight timelines, becoming a go-to freelancer for "),
                            createVNode("strong", null, "fast, reliable gameplay iteration"),
                            createTextVNode(".")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_HomeTimelineEntry, {
                    period: "2024 — Present",
                    role: "Freelance Community Game Modder",
                    org: "Remote",
                    meta: "Community mods & commissions",
                    tags: ["Unreal Engine 5", "Gameplay", "Sound Design"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li${_scopeId3}>Created <strong${_scopeId3}>high-profile gameplay and cosmetic mods</strong> for PC titles, including the viral <a${ssrRenderAttr("href", unref(withBase)("/projects/star-platinum-mod.html"))}${_scopeId3}>“Star Platinum over Iron Fist”</a> mod for Marvel Rivals, published on Nexus Mods.</li><li${_scopeId3}>Reverse-engineered game systems and <strong${_scopeId3}>hooked custom animations, effects and logic</strong> into existing combat frameworks while respecting engine and performance constraints.</li><li${_scopeId3}>Iterated quickly on community feedback, balancing <strong${_scopeId3}>fanservice, readability and competitive fairness</strong> in modded combat experiences.</li>`);
                      } else {
                        return [
                          createVNode("li", null, [
                            createTextVNode("Created "),
                            createVNode("strong", null, "high-profile gameplay and cosmetic mods"),
                            createTextVNode(" for PC titles, including the viral "),
                            createVNode("a", {
                              href: unref(withBase)("/projects/star-platinum-mod.html")
                            }, "“Star Platinum over Iron Fist”", 8, ["href"]),
                            createTextVNode(" mod for Marvel Rivals, published on Nexus Mods.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Reverse-engineered game systems and "),
                            createVNode("strong", null, "hooked custom animations, effects and logic"),
                            createTextVNode(" into existing combat frameworks while respecting engine and performance constraints.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Iterated quickly on community feedback, balancing "),
                            createVNode("strong", null, "fanservice, readability and competitive fairness"),
                            createTextVNode(" in modded combat experiences.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "hx-timeline" }, [
                      createVNode(_component_HomeTimelineEntry, {
                        period: "Dec 2021 — Present",
                        role: "Freelance Roblox Gameplay Programmer",
                        org: "Remote",
                        meta: "Roblox commissions",
                        tags: ["Roblox Studio", "Lua", "Combat Systems", "VFX/SFX"]
                      }, {
                        default: withCtx(() => [
                          createVNode("li", null, [
                            createTextVNode("Designed and implemented "),
                            createVNode("strong", null, "combat systems, transformation mechanics and cinematic abilities"),
                            createTextVNode(" for multiple Roblox titles, tailored to each development team's requirements.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Created "),
                            createVNode("strong", null, "high-impact VFX and SFX"),
                            createTextVNode(" for skills, ultimates and transformations, focusing on game feel, clarity and performance on lower-end devices.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Built "),
                            createVNode("strong", null, "modular character and moveset frameworks"),
                            createTextVNode(" that let teams plug in new characters, forms and abilities without rewriting core systems.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Delivered prototypes and production-ready features on tight timelines, becoming a go-to freelancer for "),
                            createVNode("strong", null, "fast, reliable gameplay iteration"),
                            createTextVNode(".")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_HomeTimelineEntry, {
                        period: "2024 — Present",
                        role: "Freelance Community Game Modder",
                        org: "Remote",
                        meta: "Community mods & commissions",
                        tags: ["Unreal Engine 5", "Gameplay", "Sound Design"]
                      }, {
                        default: withCtx(() => [
                          createVNode("li", null, [
                            createTextVNode("Created "),
                            createVNode("strong", null, "high-profile gameplay and cosmetic mods"),
                            createTextVNode(" for PC titles, including the viral "),
                            createVNode("a", {
                              href: unref(withBase)("/projects/star-platinum-mod.html")
                            }, "“Star Platinum over Iron Fist”", 8, ["href"]),
                            createTextVNode(" mod for Marvel Rivals, published on Nexus Mods.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Reverse-engineered game systems and "),
                            createVNode("strong", null, "hooked custom animations, effects and logic"),
                            createTextVNode(" into existing combat frameworks while respecting engine and performance constraints.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Iterated quickly on community feedback, balancing "),
                            createVNode("strong", null, "fanservice, readability and competitive fairness"),
                            createTextVNode(" in modded combat experiences.")
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeSection, {
              id: "education",
              eyebrow: "Education",
              title: "Academic Background",
              band: "",
              accent: "cool"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="hx-timeline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_HomeTimelineEntry, {
                    period: "Sep 2024 — Present",
                    role: "BSc (Hons) Games Programming and Design",
                    org: "University of Staffordshire",
                    "org-href": "https://www.staffs.ac.uk/",
                    meta: "Stoke-on-Trent, United Kingdom",
                    tags: ["Unity", "Unreal Engine 5", "C#", "C++"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li${_scopeId3}>Studying <strong${_scopeId3}>gameplay programming and design</strong> with a focus on building industry-ready projects in <strong${_scopeId3}>Unity</strong> and <strong${_scopeId3}>Unreal Engine</strong> using C# and C++.</li><li${_scopeId3}>Developing skills across <strong${_scopeId3}>mechanics design, prototyping, AI and engine scripting</strong>, mirroring workflows used in professional game studios.</li><li${_scopeId3}>Completed multiple <strong${_scopeId3}>A-graded gameplay projects</strong>, including combat-driven prototypes and polished portfolio pieces built around responsiveness and game feel.</li>`);
                      } else {
                        return [
                          createVNode("li", null, [
                            createTextVNode("Studying "),
                            createVNode("strong", null, "gameplay programming and design"),
                            createTextVNode(" with a focus on building industry-ready projects in "),
                            createVNode("strong", null, "Unity"),
                            createTextVNode(" and "),
                            createVNode("strong", null, "Unreal Engine"),
                            createTextVNode(" using C# and C++.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Developing skills across "),
                            createVNode("strong", null, "mechanics design, prototyping, AI and engine scripting"),
                            createTextVNode(", mirroring workflows used in professional game studios.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Completed multiple "),
                            createVNode("strong", null, "A-graded gameplay projects"),
                            createTextVNode(", including combat-driven prototypes and polished portfolio pieces built around responsiveness and game feel.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_HomeTimelineEntry, {
                    period: "Sep 2022 — Jun 2024",
                    role: "A-Levels: Physics, Mathematics, Computer Science",
                    org: "Merchiston Castle School",
                    "org-href": "https://www.merchiston.co.uk/",
                    meta: "Edinburgh, United Kingdom",
                    tags: ["Mathematics", "Physics", "Computer Science"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li${_scopeId3}>Built a strong foundation in <strong${_scopeId3}>problem solving, logic and analytical thinking</strong> through advanced Mathematics and Physics coursework, supporting technical gameplay programming.</li><li${_scopeId3}>Studied <strong${_scopeId3}>Computer Science</strong> topics such as algorithms, data structures and software engineering principles, applying them in small programming projects.</li><li${_scopeId3}>Developed <strong${_scopeId3}>study discipline and time management</strong> by balancing three STEM subjects with personal game development and portfolio work.</li>`);
                      } else {
                        return [
                          createVNode("li", null, [
                            createTextVNode("Built a strong foundation in "),
                            createVNode("strong", null, "problem solving, logic and analytical thinking"),
                            createTextVNode(" through advanced Mathematics and Physics coursework, supporting technical gameplay programming.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Studied "),
                            createVNode("strong", null, "Computer Science"),
                            createTextVNode(" topics such as algorithms, data structures and software engineering principles, applying them in small programming projects.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Developed "),
                            createVNode("strong", null, "study discipline and time management"),
                            createTextVNode(" by balancing three STEM subjects with personal game development and portfolio work.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "hx-timeline" }, [
                      createVNode(_component_HomeTimelineEntry, {
                        period: "Sep 2024 — Present",
                        role: "BSc (Hons) Games Programming and Design",
                        org: "University of Staffordshire",
                        "org-href": "https://www.staffs.ac.uk/",
                        meta: "Stoke-on-Trent, United Kingdom",
                        tags: ["Unity", "Unreal Engine 5", "C#", "C++"]
                      }, {
                        default: withCtx(() => [
                          createVNode("li", null, [
                            createTextVNode("Studying "),
                            createVNode("strong", null, "gameplay programming and design"),
                            createTextVNode(" with a focus on building industry-ready projects in "),
                            createVNode("strong", null, "Unity"),
                            createTextVNode(" and "),
                            createVNode("strong", null, "Unreal Engine"),
                            createTextVNode(" using C# and C++.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Developing skills across "),
                            createVNode("strong", null, "mechanics design, prototyping, AI and engine scripting"),
                            createTextVNode(", mirroring workflows used in professional game studios.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Completed multiple "),
                            createVNode("strong", null, "A-graded gameplay projects"),
                            createTextVNode(", including combat-driven prototypes and polished portfolio pieces built around responsiveness and game feel.")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_HomeTimelineEntry, {
                        period: "Sep 2022 — Jun 2024",
                        role: "A-Levels: Physics, Mathematics, Computer Science",
                        org: "Merchiston Castle School",
                        "org-href": "https://www.merchiston.co.uk/",
                        meta: "Edinburgh, United Kingdom",
                        tags: ["Mathematics", "Physics", "Computer Science"]
                      }, {
                        default: withCtx(() => [
                          createVNode("li", null, [
                            createTextVNode("Built a strong foundation in "),
                            createVNode("strong", null, "problem solving, logic and analytical thinking"),
                            createTextVNode(" through advanced Mathematics and Physics coursework, supporting technical gameplay programming.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Studied "),
                            createVNode("strong", null, "Computer Science"),
                            createTextVNode(" topics such as algorithms, data structures and software engineering principles, applying them in small programming projects.")
                          ]),
                          createVNode("li", null, [
                            createTextVNode("Developed "),
                            createVNode("strong", null, "study discipline and time management"),
                            createTextVNode(" by balancing three STEM subjects with personal game development and portfolio work.")
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeSection, {
              id: "contact",
              eyebrow: "Contact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="hx-contact hx-glow" data-hx-reveal${_scopeId2}><div class="hx-contact-grid"${_scopeId2}><div${_scopeId2}><p class="hx-availability"${_scopeId2}><span class="hx-dot" aria-hidden="true"${_scopeId2}></span>Available now</p><h2 class="hx-contact-title"${_scopeId2}>Let’s build<br${_scopeId2}>something</h2><p${_scopeId2}>Open to <strong${_scopeId2}>gameplay programming roles, internships and freelance commissions</strong>. Based in the <strong${_scopeId2}>United Kingdom (GMT)</strong> and usually replying within <strong${_scopeId2}>24–48 hours</strong>.</p><div class="hx-cta-row" style="${ssrRenderStyle({ "justify-content": "flex-start", "margin-top": "24px" })}"${_scopeId2}><a class="hx-btn" href="mailto:raymondcheng0223@gmail.com"${_scopeId2}>Email me</a></div></div><div${_scopeId2}><div class="hx-channels"${_scopeId2}><a class="hx-channel" href="mailto:raymondcheng0223@gmail.com"${_scopeId2}><span class="hx-channel-label"${_scopeId2}>Email</span><span class="hx-channel-value"${_scopeId2}>raymondcheng0223@gmail.com</span></a><div class="hx-channel"${_scopeId2}><span class="hx-channel-label"${_scopeId2}>Discord</span><span class="hx-channel-value"${_scopeId2}>rayz.c</span></div><a class="hx-channel"${ssrRenderAttr("href", unref(withBase)("/cv_v2.pdf"))} target="_blank" rel="noopener"${_scopeId2}><span class="hx-channel-label"${_scopeId2}>CV</span><span class="hx-channel-value"${_scopeId2}>Open CV (PDF) →</span></a><div class="hx-channel"${_scopeId2}><span class="hx-channel-label"${_scopeId2}>Location</span><span class="hx-channel-value"${_scopeId2}>United Kingdom · GMT</span></div></div><div class="hx-socials"${_scopeId2}><a class="hx-social" href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer"${_scopeId2}>GitHub</a><a class="hx-social" href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer"${_scopeId2}>LinkedIn</a><a class="hx-social" href="https://www.youtube.com/@RayZc" target="_blank" rel="noopener noreferrer"${_scopeId2}>YouTube</a><a class="hx-social" href="https://www.instagram.com/ray_c.223/" target="_blank" rel="noopener noreferrer"${_scopeId2}>Instagram</a><a class="hx-social" href="https://x.com/RayRay123c" target="_blank" rel="noopener noreferrer"${_scopeId2}>X</a></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "hx-contact hx-glow",
                      "data-hx-reveal": ""
                    }, [
                      createVNode("div", { class: "hx-contact-grid" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "hx-availability" }, [
                            createVNode("span", {
                              class: "hx-dot",
                              "aria-hidden": "true"
                            }),
                            createTextVNode("Available now")
                          ]),
                          createVNode("h2", { class: "hx-contact-title" }, [
                            createTextVNode("Let’s build"),
                            createVNode("br"),
                            createTextVNode("something")
                          ]),
                          createVNode("p", null, [
                            createTextVNode("Open to "),
                            createVNode("strong", null, "gameplay programming roles, internships and freelance commissions"),
                            createTextVNode(". Based in the "),
                            createVNode("strong", null, "United Kingdom (GMT)"),
                            createTextVNode(" and usually replying within "),
                            createVNode("strong", null, "24–48 hours"),
                            createTextVNode(".")
                          ]),
                          createVNode("div", {
                            class: "hx-cta-row",
                            style: { "justify-content": "flex-start", "margin-top": "24px" }
                          }, [
                            createVNode("a", {
                              class: "hx-btn",
                              href: "mailto:raymondcheng0223@gmail.com"
                            }, "Email me")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "hx-channels" }, [
                            createVNode("a", {
                              class: "hx-channel",
                              href: "mailto:raymondcheng0223@gmail.com"
                            }, [
                              createVNode("span", { class: "hx-channel-label" }, "Email"),
                              createVNode("span", { class: "hx-channel-value" }, "raymondcheng0223@gmail.com")
                            ]),
                            createVNode("div", { class: "hx-channel" }, [
                              createVNode("span", { class: "hx-channel-label" }, "Discord"),
                              createVNode("span", { class: "hx-channel-value" }, "rayz.c")
                            ]),
                            createVNode("a", {
                              class: "hx-channel",
                              href: unref(withBase)("/cv_v2.pdf"),
                              target: "_blank",
                              rel: "noopener"
                            }, [
                              createVNode("span", { class: "hx-channel-label" }, "CV"),
                              createVNode("span", { class: "hx-channel-value" }, "Open CV (PDF) →")
                            ], 8, ["href"]),
                            createVNode("div", { class: "hx-channel" }, [
                              createVNode("span", { class: "hx-channel-label" }, "Location"),
                              createVNode("span", { class: "hx-channel-value" }, "United Kingdom · GMT")
                            ])
                          ]),
                          createVNode("div", { class: "hx-socials" }, [
                            createVNode("a", {
                              class: "hx-social",
                              href: "https://github.com/RayZ-c",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "GitHub"),
                            createVNode("a", {
                              class: "hx-social",
                              href: "https://www.linkedin.com/in/raymond-cheng-7b0340365/",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "LinkedIn"),
                            createVNode("a", {
                              class: "hx-social",
                              href: "https://www.youtube.com/@RayZc",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "YouTube"),
                            createVNode("a", {
                              class: "hx-social",
                              href: "https://www.instagram.com/ray_c.223/",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "Instagram"),
                            createVNode("a", {
                              class: "hx-social",
                              href: "https://x.com/RayRay123c",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "X")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<footer class="hx-footer"${_scopeId}><div class="hx-shell hx-footer-inner"${_scopeId}><div${_scopeId}><div class="hx-footer-mark"${_scopeId}>RayZc</div><p class="hx-footer-note"${_scopeId}>© 2025 Raymond Cheng. All rights reserved.</p></div><nav class="hx-footer-links" aria-label="Footer"${_scopeId}><a${ssrRenderAttr("href", unref(withBase)("/projects/"))}${_scopeId}>Projects</a><a${ssrRenderAttr("href", unref(withBase)("/cv_v2.pdf"))} target="_blank" rel="noopener"${_scopeId}>CV</a><a href="mailto:raymondcheng0223@gmail.com"${_scopeId}>Email</a><a href="https://github.com/RayZ-c" target="_blank" rel="noopener noreferrer"${_scopeId}>GitHub</a><a href="https://www.linkedin.com/in/raymond-cheng-7b0340365/" target="_blank" rel="noopener noreferrer"${_scopeId}>LinkedIn</a></nav></div></footer>`);
          } else {
            return [
              createVNode(_component_ShowreelHero),
              createVNode("div", { class: "hx-stats" }, [
                createVNode("div", { class: "hx-shell" }, [
                  createVNode("div", {
                    class: "hx-stats-grid",
                    "data-hx-reveal": ""
                  }, [
                    createVNode("div", { class: "hx-stat" }, [
                      createVNode("span", { class: "hx-stat-value" }, "10M+"),
                      createVNode("span", { class: "hx-stat-label" }, "Views on shipped mod work")
                    ]),
                    createVNode("div", { class: "hx-stat" }, [
                      createVNode("span", { class: "hx-stat-value" }, "4+ yrs"),
                      createVNode("span", { class: "hx-stat-label" }, "Freelance gameplay work")
                    ]),
                    createVNode("div", { class: "hx-stat" }, [
                      createVNode("span", { class: "hx-stat-value" }, "9"),
                      createVNode("span", { class: "hx-stat-label" }, "Projects & prototypes")
                    ]),
                    createVNode("div", { class: "hx-stat" }, [
                      createVNode("span", { class: "hx-stat-value" }, "3"),
                      createVNode("span", { class: "hx-stat-label" }, "Engines: Unity, UE5, Roblox")
                    ])
                  ])
                ])
              ]),
              createVNode(_component_HomeSection, {
                id: "featured-work",
                eyebrow: "Selected work",
                title: "Featured Projects",
                lead: "Two solo-built projects that show the range I work across: combat and game feel in Unity, and modular systems architecture in Unreal Engine 5."
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "hx-projects" }, [
                    createVNode(_component_HomeProjectCard, {
                      href: "/projects/path-to-power",
                      title: "Dragon Ball 2D Platformer",
                      blurb: "Combat-focused 2D action platformer with a custom character controller, combo system, multi-layer hit feedback and a pure C# UI Toolkit HUD. Built solo in four weeks.",
                      video: "/videos/path-to-power/ptp-showcase-1V2.mp4",
                      poster: "/banner-cover.jpg",
                      date: "September 2025",
                      context: "Personal",
                      flag: "Featured",
                      tags: ["Unity", "C#", "2D", "Combat", "Game Feel"],
                      cta: "Read case study"
                    }),
                    createVNode(_component_HomeProjectCard, {
                      href: "/projects/ue5-fps",
                      title: "1st Person Shooter Framework",
                      blurb: "Solo-developed FPS framework in Unreal Engine 5 and C++, with modular weapons, enemy AI, checkpoints and scoring built for readable, extensible architecture.",
                      video: "/videos/ue5-fps/fps-showcase-0.mp4",
                      date: "October 2025",
                      context: "Academic",
                      flag: "Featured",
                      tags: ["Unreal Engine 5", "C++", "3D", "FPS", "AI"],
                      cta: "Read case study"
                    })
                  ]),
                  createVNode("div", {
                    class: "hx-cta-row",
                    "data-hx-reveal": ""
                  }, [
                    createVNode("a", {
                      class: "hx-btn",
                      href: unref(withBase)("/projects/")
                    }, "View all projects", 8, ["href"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_HomeSection, {
                id: "about",
                eyebrow: "About me",
                title: "Gameplay Programmer, Combat Specialist",
                band: ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "hx-about" }, [
                    createVNode("div", { "data-hx-reveal": "" }, [
                      createVNode("div", { class: "hx-portrait" }, [
                        createVNode("img", {
                          src: unref(withBase)("/raymond-portrait.jpg"),
                          alt: "Portrait of Raymond Cheng",
                          width: "640",
                          height: "800",
                          loading: "lazy",
                          decoding: "async"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("span", { class: "hx-portrait-caption" }, "Raymond Cheng · United Kingdom")
                    ]),
                    createVNode("div", {
                      class: "hx-about-body",
                      "data-hx-reveal": ""
                    }, [
                      createVNode("p", null, [
                        createTextVNode("I am a student at "),
                        createVNode("a", {
                          href: "https://www.staffs.ac.uk/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }, "University of Staffordshire"),
                        createTextVNode(" studying "),
                        createVNode("a", {
                          href: "https://www.staffs.ac.uk/course/computer-games-design-programming-bsc",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }, "BSc (Hons) Games Programming and Design"),
                        createTextVNode(", specialising in "),
                        createVNode("span", { class: "hx-hl" }, "fast-paced combat"),
                        createTextVNode(", "),
                        createVNode("span", { class: "hx-hl" }, "gameplay feel"),
                        createTextVNode(", and "),
                        createVNode("span", { class: "hx-hl" }, "VFX/SFX implementation"),
                        createTextVNode(".")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Most of my projects are built in "),
                        createVNode("strong", null, "Unity"),
                        createTextVNode(" and "),
                        createVNode("strong", null, "Unreal Engine 5"),
                        createTextVNode(", where I focus on responsive controllers, boss fights, and readable, scalable C#/C++ architecture.")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Outside university I have completed "),
                        createVNode("strong", null, "multiple commission projects"),
                        createTextVNode(" for Roblox games and "),
                        createVNode("strong", null, "created popular community mods"),
                        createTextVNode(" for viral titles, building a reputation for "),
                        createVNode("span", { class: "hx-hl" }, "fast prototyping"),
                        createTextVNode(", "),
                        createVNode("span", { class: "hx-hl" }, "reliable delivery"),
                        createTextVNode(", and "),
                        createVNode("span", { class: "hx-hl" }, "high-impact gameplay polish"),
                        createTextVNode(".")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("In game jams I usually act as "),
                        createVNode("strong", null, "lead programmer and designer"),
                        createTextVNode(", connecting art, design and code so the team can iterate quickly while keeping the game coherent and fun.")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("I am actively looking for "),
                        createVNode("strong", null, "gameplay programming opportunities"),
                        createTextVNode(" to gain more real-world experience.")
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "hx-skills",
                    "data-hx-reveal": ""
                  }, [
                    createVNode("div", { class: "hx-skill hx-glow" }, [
                      createVNode("span", { class: "hx-skill-name" }, "Engines"),
                      createVNode("span", { class: "hx-skill-detail" }, "Unity · Unreal Engine 5 · Roblox Studio")
                    ]),
                    createVNode("div", { class: "hx-skill hx-glow" }, [
                      createVNode("span", { class: "hx-skill-name" }, "Languages"),
                      createVNode("span", { class: "hx-skill-detail" }, "C# · C++ · Lua · Blueprints")
                    ]),
                    createVNode("div", { class: "hx-skill hx-glow" }, [
                      createVNode("span", { class: "hx-skill-name" }, "Systems"),
                      createVNode("span", { class: "hx-skill-detail" }, "Combat, movement and ability frameworks; enemy AI; UI Toolkit HUDs")
                    ]),
                    createVNode("div", { class: "hx-skill hx-glow" }, [
                      createVNode("span", { class: "hx-skill-name" }, "Game feel"),
                      createVNode("span", { class: "hx-skill-detail" }, "Forgiving mechanics, hit feedback, VFX and SFX implementation")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_HomeSection, {
                id: "experience",
                eyebrow: "Experience",
                title: "Where I Have Shipped",
                lead: "Paid freelance gameplay work delivered to external teams and live player communities."
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "hx-timeline" }, [
                    createVNode(_component_HomeTimelineEntry, {
                      period: "Dec 2021 — Present",
                      role: "Freelance Roblox Gameplay Programmer",
                      org: "Remote",
                      meta: "Roblox commissions",
                      tags: ["Roblox Studio", "Lua", "Combat Systems", "VFX/SFX"]
                    }, {
                      default: withCtx(() => [
                        createVNode("li", null, [
                          createTextVNode("Designed and implemented "),
                          createVNode("strong", null, "combat systems, transformation mechanics and cinematic abilities"),
                          createTextVNode(" for multiple Roblox titles, tailored to each development team's requirements.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Created "),
                          createVNode("strong", null, "high-impact VFX and SFX"),
                          createTextVNode(" for skills, ultimates and transformations, focusing on game feel, clarity and performance on lower-end devices.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Built "),
                          createVNode("strong", null, "modular character and moveset frameworks"),
                          createTextVNode(" that let teams plug in new characters, forms and abilities without rewriting core systems.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Delivered prototypes and production-ready features on tight timelines, becoming a go-to freelancer for "),
                          createVNode("strong", null, "fast, reliable gameplay iteration"),
                          createTextVNode(".")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_HomeTimelineEntry, {
                      period: "2024 — Present",
                      role: "Freelance Community Game Modder",
                      org: "Remote",
                      meta: "Community mods & commissions",
                      tags: ["Unreal Engine 5", "Gameplay", "Sound Design"]
                    }, {
                      default: withCtx(() => [
                        createVNode("li", null, [
                          createTextVNode("Created "),
                          createVNode("strong", null, "high-profile gameplay and cosmetic mods"),
                          createTextVNode(" for PC titles, including the viral "),
                          createVNode("a", {
                            href: unref(withBase)("/projects/star-platinum-mod.html")
                          }, "“Star Platinum over Iron Fist”", 8, ["href"]),
                          createTextVNode(" mod for Marvel Rivals, published on Nexus Mods.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Reverse-engineered game systems and "),
                          createVNode("strong", null, "hooked custom animations, effects and logic"),
                          createTextVNode(" into existing combat frameworks while respecting engine and performance constraints.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Iterated quickly on community feedback, balancing "),
                          createVNode("strong", null, "fanservice, readability and competitive fairness"),
                          createTextVNode(" in modded combat experiences.")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_HomeSection, {
                id: "education",
                eyebrow: "Education",
                title: "Academic Background",
                band: "",
                accent: "cool"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "hx-timeline" }, [
                    createVNode(_component_HomeTimelineEntry, {
                      period: "Sep 2024 — Present",
                      role: "BSc (Hons) Games Programming and Design",
                      org: "University of Staffordshire",
                      "org-href": "https://www.staffs.ac.uk/",
                      meta: "Stoke-on-Trent, United Kingdom",
                      tags: ["Unity", "Unreal Engine 5", "C#", "C++"]
                    }, {
                      default: withCtx(() => [
                        createVNode("li", null, [
                          createTextVNode("Studying "),
                          createVNode("strong", null, "gameplay programming and design"),
                          createTextVNode(" with a focus on building industry-ready projects in "),
                          createVNode("strong", null, "Unity"),
                          createTextVNode(" and "),
                          createVNode("strong", null, "Unreal Engine"),
                          createTextVNode(" using C# and C++.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Developing skills across "),
                          createVNode("strong", null, "mechanics design, prototyping, AI and engine scripting"),
                          createTextVNode(", mirroring workflows used in professional game studios.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Completed multiple "),
                          createVNode("strong", null, "A-graded gameplay projects"),
                          createTextVNode(", including combat-driven prototypes and polished portfolio pieces built around responsiveness and game feel.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_HomeTimelineEntry, {
                      period: "Sep 2022 — Jun 2024",
                      role: "A-Levels: Physics, Mathematics, Computer Science",
                      org: "Merchiston Castle School",
                      "org-href": "https://www.merchiston.co.uk/",
                      meta: "Edinburgh, United Kingdom",
                      tags: ["Mathematics", "Physics", "Computer Science"]
                    }, {
                      default: withCtx(() => [
                        createVNode("li", null, [
                          createTextVNode("Built a strong foundation in "),
                          createVNode("strong", null, "problem solving, logic and analytical thinking"),
                          createTextVNode(" through advanced Mathematics and Physics coursework, supporting technical gameplay programming.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Studied "),
                          createVNode("strong", null, "Computer Science"),
                          createTextVNode(" topics such as algorithms, data structures and software engineering principles, applying them in small programming projects.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Developed "),
                          createVNode("strong", null, "study discipline and time management"),
                          createTextVNode(" by balancing three STEM subjects with personal game development and portfolio work.")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_HomeSection, {
                id: "contact",
                eyebrow: "Contact"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "hx-contact hx-glow",
                    "data-hx-reveal": ""
                  }, [
                    createVNode("div", { class: "hx-contact-grid" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "hx-availability" }, [
                          createVNode("span", {
                            class: "hx-dot",
                            "aria-hidden": "true"
                          }),
                          createTextVNode("Available now")
                        ]),
                        createVNode("h2", { class: "hx-contact-title" }, [
                          createTextVNode("Let’s build"),
                          createVNode("br"),
                          createTextVNode("something")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("Open to "),
                          createVNode("strong", null, "gameplay programming roles, internships and freelance commissions"),
                          createTextVNode(". Based in the "),
                          createVNode("strong", null, "United Kingdom (GMT)"),
                          createTextVNode(" and usually replying within "),
                          createVNode("strong", null, "24–48 hours"),
                          createTextVNode(".")
                        ]),
                        createVNode("div", {
                          class: "hx-cta-row",
                          style: { "justify-content": "flex-start", "margin-top": "24px" }
                        }, [
                          createVNode("a", {
                            class: "hx-btn",
                            href: "mailto:raymondcheng0223@gmail.com"
                          }, "Email me")
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "hx-channels" }, [
                          createVNode("a", {
                            class: "hx-channel",
                            href: "mailto:raymondcheng0223@gmail.com"
                          }, [
                            createVNode("span", { class: "hx-channel-label" }, "Email"),
                            createVNode("span", { class: "hx-channel-value" }, "raymondcheng0223@gmail.com")
                          ]),
                          createVNode("div", { class: "hx-channel" }, [
                            createVNode("span", { class: "hx-channel-label" }, "Discord"),
                            createVNode("span", { class: "hx-channel-value" }, "rayz.c")
                          ]),
                          createVNode("a", {
                            class: "hx-channel",
                            href: unref(withBase)("/cv_v2.pdf"),
                            target: "_blank",
                            rel: "noopener"
                          }, [
                            createVNode("span", { class: "hx-channel-label" }, "CV"),
                            createVNode("span", { class: "hx-channel-value" }, "Open CV (PDF) →")
                          ], 8, ["href"]),
                          createVNode("div", { class: "hx-channel" }, [
                            createVNode("span", { class: "hx-channel-label" }, "Location"),
                            createVNode("span", { class: "hx-channel-value" }, "United Kingdom · GMT")
                          ])
                        ]),
                        createVNode("div", { class: "hx-socials" }, [
                          createVNode("a", {
                            class: "hx-social",
                            href: "https://github.com/RayZ-c",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "GitHub"),
                          createVNode("a", {
                            class: "hx-social",
                            href: "https://www.linkedin.com/in/raymond-cheng-7b0340365/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "LinkedIn"),
                          createVNode("a", {
                            class: "hx-social",
                            href: "https://www.youtube.com/@RayZc",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "YouTube"),
                          createVNode("a", {
                            class: "hx-social",
                            href: "https://www.instagram.com/ray_c.223/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "Instagram"),
                          createVNode("a", {
                            class: "hx-social",
                            href: "https://x.com/RayRay123c",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, "X")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode("footer", { class: "hx-footer" }, [
                createVNode("div", { class: "hx-shell hx-footer-inner" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "hx-footer-mark" }, "RayZc"),
                    createVNode("p", { class: "hx-footer-note" }, "© 2025 Raymond Cheng. All rights reserved.")
                  ]),
                  createVNode("nav", {
                    class: "hx-footer-links",
                    "aria-label": "Footer"
                  }, [
                    createVNode("a", {
                      href: unref(withBase)("/projects/")
                    }, "Projects", 8, ["href"]),
                    createVNode("a", {
                      href: unref(withBase)("/cv_v2.pdf"),
                      target: "_blank",
                      rel: "noopener"
                    }, "CV", 8, ["href"]),
                    createVNode("a", { href: "mailto:raymondcheng0223@gmail.com" }, "Email"),
                    createVNode("a", {
                      href: "https://github.com/RayZ-c",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, "GitHub"),
                    createVNode("a", {
                      href: "https://www.linkedin.com/in/raymond-cheng-7b0340365/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, "LinkedIn")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
