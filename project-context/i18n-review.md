# Chinese localisation editorial review

Completed 30 August 2026. This is the decision record for the recruiter-facing
review of Simplified Chinese (`zh-Hans`) and Traditional Chinese for Taiwan
(`zh-Hant-TW`). Chinese CV PDFs were explicitly out of scope.

## Outcome

All 20 translated Markdown pages were reviewed against their English source:
home, projects index, and eight case studies in each Chinese locale. The review
covered meaning, technical terminology, locale usage, recruiter readability,
numbers, links, media, headings, and UI labels. Automated checks cover the
repeatable parts; editorial judgement remains documented here and in
`i18n-glossary.md`.

## Review method

The pass used the seven MQM dimensions as a checklist:

1. terminology;
2. accuracy;
3. linguistic conventions;
4. style;
5. locale conventions;
6. audience appropriateness;
7. design and markup.

For this portfolio, “audience appropriate” means a recruiter can understand the
claim on first reading while an engineer still sees the correct game-development
term. English product names remain where the Chinese games industry normally
uses them. Specialist terms use **English + a short Chinese gloss on first
use**, then the short Chinese form afterwards.

The two Chinese locales were reviewed independently. OpenCC-style character
conversion is useful only as a leakage detector; it is not accepted as a
translation or editorial method.

## External references used

- Unity Simplified Chinese scripting manual — distinguishes `程序`, `代码`,
  and `脚本`, and uses `用户界面`, `组件`, and `对象` in context:
  <https://docs.unity3d.com/cn/6000.0/Manual/intro-to-scripting.html>
- Unity Simplified Chinese scripting reference:
  <https://docs.unity3d.com/cn/2023.2/ScriptReference/index.html>
- Microsoft Simplified Chinese style guide:
  <https://download.microsoft.com/download/1/5/9/159cb91c-b61b-4385-97ca-80ccc7ff1fa0/zho-chn-StyleGuide.pdf>
- Microsoft Traditional Chinese (Taiwan) style guide — the target should read
  as if originally written for Taiwan:
  <https://download.microsoft.com/download/2/9/3/293e6d41-ba40-451b-a41e-94bdb6242ae3/zho-twn-StyleGuide.pdf>
- Microsoft Xbox terminology table with Simplified and Traditional columns:
  <https://learn.microsoft.com/zh-cn/xbox/gdk/docs/store/policies/console/console-certification-terminology>
- Taiwan Ministry of Digital Affairs bilingual glossary:
  <https://moda.gov.tw/en/information-service/bilingual-glossary/1391>
- Academia Sinica bilingual ontology resources:
  <https://www.aclclp.org.tw/use_bd.php>
- MQM quality model and error typology: <https://www.themqm.org/> and
  <https://www.themqm.org/mqm-pillars/typology/>
- Weblate glossary model (preferred, forbidden, untranslatable, variants):
  <https://github.com/WeblateOrg/weblate/blob/main/docs/user/glossary.rst>
- OpenCC scope — orthographic conversion, not translation:
  <https://github.com/BYVoid/OpenCC/blob/master/README.md>

## Important decisions from this pass

| Concept | Simplified | Taiwan Traditional | Reason |
|---|---|---|---|
| Gameplay Programmer | 游戏玩法程序员 | 遊戲程式設計師 | Clear to recruiters; both are supported by real industry usage. |
| program / code / script | 程序 / 代码 / 脚本 | 程式 / 程式碼 / 腳本 | They are different concepts and must not share one glossary row. |
| coyote time | Coyote Time（跳跃宽限） | Coyote Time（跳躍寬限） | Keeps the searchable term and explains it without the opaque literal “土狼时间.” |
| hit stop | Hit Stop（命中停顿） | Hit Stop（命中停頓） | `顿帧` can sound like an accidental stutter; the new term states the intent. |
| production-ready/grade | 可投入正式项目 | 可投入正式專案 | Avoids the machine-like `生产级` / `正式級`. |
| performance-conscious | 注重性能 | 注重效能 | Avoids the calque `性能自觉` / `效能自覺`. |
| Unreal UI | Widget UI / UI Widget | Widget UI / UI Widget | `UI Toolkit` is Unity terminology; no unsupported claim that the project used UMG. |
| UI/media item counter | 第 n 项，共 n 项 | 第 n 項，共 n 項 | Works for images, videos, and embeds; `张` / `張` only fits images. |

## Page review status

| Page | Simplified | Taiwan Traditional | Focus |
|---|---|---|---|
| Home | reviewed | reviewed | role title, recruiter positioning, education, contact |
| Projects index | reviewed | reviewed | titles, summaries, filters, commercial wording |
| Path to Power | reviewed | reviewed | Coyote Time, Hit Stop, UI Toolkit, deadlines, animation timing |
| Forgiving Mechanics | reviewed | reviewed | physics, raycasts, input buffering, performance claims |
| UE5 FPS | reviewed | reviewed | Unreal terminology, widgets, Data Assets, pooling, authoritative state |
| Elder Escape | reviewed | reviewed | Blueprint architecture, procedural generation, team roles |
| Pixel Adventure | reviewed | reviewed | boss AI, persistence, resource-management combat |
| Roblox Combat | reviewed | reviewed | combo/block terminology, configuration, client delivery |
| Roblox Luffy | reviewed | reviewed | scripts, client prediction, commissioned work |
| Star Platinum mod | reviewed | reviewed | audio engineering, metrics, community feedback |

## Automated safeguards added or confirmed

`npm run check:zh` now distinguishes program, source code, and script; checks
additional market-specific terms such as class, quality, and repository; and
rejects known ambiguous phrases (`顿帧`, `土狼时间`, `生产级`, their Taiwan
counterparts, and `UIToolkit Widget`). It still strips frontmatter, code,
identifiers, URLs, and review comments before checking prose.

## Deliberate limits

- No Chinese CV was added or enabled.
- Numbers and achievements were preserved from English; none were invented.
- A future native-speaker preference pass may change tone, but it should use
  this file and the glossary rather than re-running character conversion.

## Verification completed

The final pass was checked in the user's real Chrome session against the local
VitePress server, not only by reading Markdown:

- Simplified and Traditional pages expose `zh-Hans` and `zh-Hant` respectively.
- Locale-specific font stacks resolve to Noto Sans SC and Noto Sans TC.
- The language switcher preserves the current case-study path when switching
  from `/zh/projects/path-to-power.html` to
  `/zh-Hant/projects/path-to-power.html`.
- Collapsed panel content contains the first-use explanations
  `Coyote Time（跳跃宽限）` / `Coyote Time（跳躍寬限）` and
  `Hit Stop（命中停顿）` / `Hit Stop（命中停頓）`; rejected literal or ambiguous
  forms are absent.
- The home page, projects index, and case-study page were checked at desktop
  width and at a 390 px mobile viewport. No page-level horizontal overflow was
  present, the compact locale labels rendered correctly, and Chrome reported
  no console warnings or errors.

The finished working tree passed `npm run check`, `npm run check:zh` (all 20
Chinese files clean), and `npm run docs:build`. The general check retained only
three documented pre-existing warnings: two intentional raw-HTML base paths
and the grey `SFX` tag vocabulary warning.

## Pre-read mechanical audit

A final pass before Raymond's own reading added checks that are intentionally
separate from linguistic judgement:

- Every translated file was compared with English for external URLs,
  media/download paths, heading counts, panels, and carousels.
- Rendered prose was scanned for English-heavy untranslated sentences,
  doubled CJK punctuation, spaces before CJK punctuation, and adjacent repeated
  phrases; no candidates remained after code and comments were excluded.
- All 32 built HTML pages were checked for the correct `lang`, a non-empty page
  description, image `alt` presence, and duplicate ids.
- Built local links, assets, and anchors were crawled. VitePress still emits its
  own CSS-hidden translation menu on the English-only notices page, but the
  visible custom switcher now safely links to the Chinese home pages instead of
  constructing nonexistent translated-notice URLs. Chrome confirmed the menu
  behavior and still preserves exact project routes.

This audit found and fixed two real drift issues: both Chinese project indexes
used alternate preview clips for Forgiving Mechanics and Elder Escape, and the
compact statistic `4 年+` was changed to the natural `4 年以上`. The content
checker now compares project-index media to English by card id, preventing the
preview drift from returning.
