# Chinese localisation — current state

Written mid-session so nothing is lost to a context reset. This is the
authoritative record of what exists, what was fixed, and what is still open.

**Everything below is uncommitted.** Raymond commits.

## Verification

```bash
npm run check       # structure + locale parity   → No errors
npm run check:zh    # Chinese terminology audit   → All clean
npm run docs:build  # → clean
```

## Routing

| Route | Locale | `lang` |
|---|---|---|
| `/` | English (root locale) | `en` |
| `/zh/` | Simplified | `zh-Hans` |
| `/zh-Hant/` | Traditional, **Taiwan** | `zh-Hant` |

English is the root because GitHub Pages has no redirect layer, so whatever
sits at `/` is what a bare link resolves to.

All 10 pages exist in all three locales (home, projects index, 8 case studies).
~20,000 words of translation.

## Navbar controls — both are custom, both always visible

`theme/components/NavFlyout.vue` is a shared always-visible dropdown, used
twice. VitePress's own `VPNavBarTranslations` is hidden in `effects.css`
because it folds into the mobile hamburger — and the visitor who most needs a
language switcher is the one who cannot read the current language.

- **`LanguageSwitcher.vue`** — button shows the current locale's autonym;
  menu lists `English / 简体中文 / 繁體中文`. Switching **preserves the current
  page and its `#hash`**, so nobody is dumped on a home page.
- **`CvMenu.vue`** — button label is translated (`CV` / `简历` / `履歷`); menu
  lists the three languages. **Only the English CV exists.** The two Chinese
  entries render as visibly disabled with `尚未提供`, rather than shipping links
  that 404.

  **To enable a translated CV:** drop the PDF into `public/` and set its `file`
  in the `CVS` array in `CvMenu.vue`. That is the entire change.

Mobile (<768px): the caret is dropped and the language button shows a short
code (`EN` / `简` / `繁`), because the full autonym plus the CV menu plus the
hamburger overflowed a 390px viewport and caused horizontal scroll. Verified
fixed: `scrollWidth` 375 ≤ 390.

## What is translated

- All markdown page content (10 pages × 2 locales).
- Hero: status pill, role title, rotating specialisms, both buttons.
- Showreel rail: chapter labels, kinds, stacks, "Open case study", aria label.
- Scroll buttons, MediaCarousel labels and aria text.
- Route-transition overlay labels (`theme/components/PageTransition.vue`).
- Project card and case-study titles (`Dragon Ball 2D Platformer` →
  `龙珠 2D 平台动作` / `龍珠 2D 平台動作`, `Pixel Adventure` → `像素冒险`).

**Deliberately NOT translated:** Raymond's name, and engine/language/platform
chips (`Unity`, `C#`, `C++`, `Lua`, `Roblox`) — those are written in Latin
script in Chinese game-dev writing.

UI strings live in `theme/i18n.js` (`useI18n().t()`), keyed by English sentence
so a missing translation degrades to correct English.

## Fonts — the landmine

Bebas Neue, Barlow Condensed, Archivo Black and Inter contain **zero CJK
glyphs**. Without intervention every Chinese heading falls back to an arbitrary
system font. Noto Sans SC/TC are attached **per locale** in `config.mjs`
(`locales[x].head`), verified: English pages load **0** CJK stylesheets.

Token overrides are at the bottom of `effects.css` under
`:root:lang(zh-Hans)` / `:root:lang(zh-Hant)`. **Latin faces stay FIRST in each
stack** so `Unity`, `C++`, `UIToolkit` inside Chinese sentences keep the
original typography — that mixed-script behaviour is what stops a Chinese page
reading as a different site.

## Translation method and QA

Both locales are written **independently from the English**, never converted.
Character conversion is detectable by any native reader, and for a programmer's
portfolio it is glaring: CN 程序/软件/项目/对象/接口 vs TW 程式/軟體/專案/物件/介面
are different **words**, not different characters.

- `project-context/i18n-glossary.md` — locked terminology per locale.
- Judgement calls are marked inline as `<!-- zh-review: ... -->`.
- `scripts/check-chinese.mjs` (`npm run check:zh`) audits the two
  [MQM](https://www.emergentmind.com/topics/multidimensional-quality-metrics-mqm)
  dimensions a script can decide: **terminology** and **locale conventions**.

### What the audit already caught and fixed

- `zh/projects/elder-escape.md` — `物件` → `对象`
- `zh/projects/pixel-adventure.md` — `影片` → `视频`
- `zh-Hant/projects/index.md` — `接口` → `介面`
- Both Chinese project indexes had **fabricated media paths** for `twin-sync`
  (English has empty strings) — a real error of mine, now fixed, and
  `check-content.mjs` now validates both locale card-media existence and exact
  per-card parity with English so it cannot recur.

### False positives worth knowing about

- `程序化生成` is **procedural** generation — `程序` there means "procedure",
  which is correct Taiwanese. The audit has an explicit exception for it.
- `台` / `秘` / `著` are context-dependent, not script-dependent, and were
  removed from the character table. Taiwan writes `平台` with `台`.

## Traps

1. **Never compare `relativePath` to `'index.md'`** — use `isHomePage()` from
   `theme/routes.js`. The Chinese home pages are `zh/index.md` and
   `zh-Hant/index.md`; this bug was live in both background canvases.
2. **Editing a case study means editing THREE files.** `npm run check` fails on
   structural drift (panel counts, carousel ids, media paths).
3. Chinese has no lowercase, so `text-transform: uppercase` is harmless, but
   Latin letter-spacing is far too loose between Han characters — display type
   is pulled back in `effects.css`.
4. A reading measure in `ch` is twice too wide for Han text; panels use `em`.

## Still open

- **Two Chinese CV PDFs** need to be produced by Raymond, then enabled in
  `CvMenu.vue` (one line each).
- The technical/recruiter editorial pass is complete across all 20 translated
  pages. An optional native-speaker preference pass could still tune personal
  tone, but it is no longer a correctness blocker. See
  `project-context/i18n-review.md` for the reviewed terminology, sources, page
  matrix, and live-browser evidence.
- Pre-existing, unrelated: the `twin-sync` card has no media at all in any
  locale, and `SFX` is not in TagRow's vocabulary so it renders grey.
