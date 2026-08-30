#!/usr/bin/env node
/**
 * CONTENT CHECK
 * ---------------------------------------------------------------------------
 *   npm run check
 *
 * Every rule below exists because the mistake it catches actually happened, or
 * because the failure is silent in the browser and would ship unnoticed.
 *
 * A broken icon name renders an empty box. A missing poster shows a black
 * rectangle until the video decodes. A duplicate carousel id makes two
 * carousels on the same page control each other. A hardcoded site base 404s on
 * GitHub Pages but works perfectly on localhost — that one is invisible until
 * it is live.
 *
 * Exits non-zero on an error so it can gate a build. Warnings never fail.
 */
import { readdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

// Read the icon names out of icons.js as TEXT rather than importing it.
// Importing works, but the theme is plain .js in a package without
// "type": "module", so Node prints a reparse warning on every run — and the
// only thing needed here is the set of registered names.
const iconSource = await readFile(path.join('.vitepress', 'theme', 'icons.js'), 'utf8')
// Only the ICONS block — a name listed in ICON_FAMILY but missing from ICONS
// would still render an empty box, so it must not count as registered.
const iconsBlock = iconSource.slice(iconSource.indexOf('export const ICONS'))
const ICON_NAMES = new Set(
  [...iconsBlock.matchAll(/^ {2}'([a-z0-9-]+)':/gm)].map((m) => m[1])
)

const errors = []
const warnings = []

const err = (file, msg) => errors.push(`${file}: ${msg}`)
const warn = (file, msg) => warnings.push(`${file}: ${msg}`)

// Kept in step with TagRow.vue. A tag outside these renders grey, which is a
// valid choice — hence a warning, not an error.
const KNOWN_TAGS = new Set([
  'Unity', 'Unreal', 'Unreal Engine 5', 'Roblox', 'C#', 'C++', 'Lua', 'Blueprints',
  '2D', '3D', 'FPS', 'Top-Down', 'Side-Scroller', 'Action', 'Movement', 'AI',
  'Combat', 'VFX', 'UI', 'For Sale', 'Game Jam'
])

const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{13000}-\u{1342F}]/u

const projectsDir = 'projects'
const files = (await readdir(projectsDir)).filter((f) => f.endsWith('.md'))
const caseStudies = files.filter((f) => f !== 'index.md')

/* ── per case-study page ─────────────────────────────────────────────────── */

for (const file of caseStudies) {
  const rel = path.join(projectsDir, file)
  const src = await readFile(rel, 'utf8')

  // 1. Icon names must exist in the set, or the panel renders an empty box.
  for (const [, name] of src.matchAll(/<ProjectPanel[^>]*\bicon="([^"]*)"/g)) {
    if (!ICON_NAMES.has(name)) {
      err(rel, `unknown icon "${name}" — add it to .vitepress/theme/icons.js or pick another`)
    }
  }

  // 2. Every panel should carry an icon. A bare panel head looks unfinished
  //    beside 87 that do not.
  for (const [tag] of src.matchAll(/<ProjectPanel\b[^>]*>/g)) {
    if (!tag.includes('icon=')) {
      const title = tag.match(/title="([^"]*)"/)?.[1] ?? tag
      warn(rel, `panel has no icon: ${title}`)
    }
  }

  // 3. Emoji were removed deliberately; they render in each platform's own
  //    house style and cannot take the accent colour.
  for (const [, title] of src.matchAll(/<ProjectPanel[^>]*\btitle="([^"]*)"/g)) {
    if (EMOJI.test(title)) err(rel, `emoji in panel title: "${title}"`)
  }

  // 4. Carousel ids must be unique per page — they become radio group names,
  //    and two groups sharing a name control each other.
  const ids = [...src.matchAll(/<MediaCarousel[^>]*\bid="([^"]*)"/g)].map((m) => m[1])
  const seen = new Set()
  for (const id of ids) {
    if (seen.has(id)) err(rel, `duplicate MediaCarousel id "${id}"`)
    seen.add(id)
  }
  for (const [tag] of src.matchAll(/<MediaCarousel\b[^>]*>/g)) {
    if (!tag.includes('id=')) err(rel, 'MediaCarousel is missing its required id prop')
  }

  // 5. Media referenced in :slides must exist, and each video needs its
  //    poster — MediaCarousel derives the poster path, it is not told it.
  for (const [, src_] of src.matchAll(/\bsrc:\s*'([^']+)'/g)) {
    if (/^(https?:)?\/\//.test(src_)) continue
    const onDisk = path.join('public', src_.replace(/^\//, ''))
    if (!existsSync(onDisk)) {
      err(rel, `media not found: ${src_}  (looked in ${onDisk})`)
      continue
    }
    if (src_.startsWith('/videos/') && src_.endsWith('.mp4')) {
      const poster = onDisk
        .replace(`${path.sep}videos${path.sep}`, `${path.sep}posters${path.sep}`)
        .replace(/\.mp4$/, '.jpg')
      if (!existsSync(poster)) {
        warn(rel, `no poster for ${src_} — run: npm run media -- <slug>`)
      }
    }
  }

  // 6. The base is applied by withBase() / VitePress, and writing it out a
  //    second time is how it silently breaks if the repo is ever renamed.
  //
  //    The one legitimate exception is an <a href> inside a RAW HTML block:
  //    markdown-it does not parse markdown there, so VitePress never sees a
  //    link token to rewrite, and the base genuinely has to be written. Those
  //    are warned about, not failed, so they stay visible without blocking.
  for (const line of src.split(/\r?\n/)) {
    if (!line.includes('/protforlio-site/')) continue
    if (/<a\b[^>]*href=["'][^"']*\/protforlio-site\//.test(line)) {
      warn(rel, 'base written out in a raw HTML href — unavoidable there, but ' +
                'prefer a markdown link, which gets the base applied for you')
    } else {
      err(rel, 'hardcoded "/protforlio-site/" — author paths base-free; ' +
               'withBase() and VitePress add it')
    }
  }

  // 7. Inline <style> in markdown is what the component pass removed; ~700
  //    lines of it used to live here.
  if (/<style[\s>]/.test(src)) {
    err(rel, 'inline <style> block — put the rules in a theme stylesheet instead')
  }

  // 8. Frontmatter contract.
  if (!/^---\r?\n/.test(src)) err(rel, 'missing frontmatter')
  if (!/^layout:\s*doc$/m.test(src)) err(rel, 'frontmatter must set `layout: doc`')
  if (!/^title:\s*\S/m.test(src)) err(rel, 'frontmatter must set a title')
  if (!/^description:\s*\S/m.test(src)) warn(rel, 'no description — it is the search/social snippet')

  // 9. The back link is the styled component, not the retired class.
  if (src.includes('back-home-button')) {
    err(rel, 'uses retired class `back-home-button` — should be `back-projects-button`')
  }

  // 10. Unfilled scaffold.
  if (src.includes('TODO')) warn(rel, `${(src.match(/TODO/g) || []).length} unfilled TODO(s)`)
}

/* ── the projects index ──────────────────────────────────────────────────── */

const indexRel = path.join(projectsDir, 'index.md')
const index = await readFile(indexRel, 'utf8')

const listed = [...index.matchAll(/\bid:\s*'([^']+)'/g)].map((m) => m[1])
const onDisk = caseStudies.map((f) => f.replace(/\.md$/, ''))

// The card `id` is free text; match on the link, which is the real contract.
const linked = [...index.matchAll(/\blink:\s*'[^']*\/projects\/([^'\/]+)'/g)].map((m) => m[1])

for (const slug of onDisk) {
  if (!linked.includes(slug)) {
    err(indexRel, `projects/${slug}.md exists but has no card in allProjects — it is unreachable from the index`)
  }
}
for (const slug of linked) {
  if (!onDisk.includes(slug)) {
    err(indexRel, `card links to /projects/${slug} but projects/${slug}.md does not exist`)
  }
}
if (new Set(listed).size !== listed.length) {
  err(indexRel, 'duplicate card id in allProjects')
}

for (const [, tagList] of index.matchAll(/\btags:\s*\[([^\]]*)\]/g)) {
  for (const [, tag] of tagList.matchAll(/['"]([^'"]+)['"]/g)) {
    if (!KNOWN_TAGS.has(tag)) {
      warn(indexRel, `tag "${tag}" is not in TagRow's vocabulary — it will render grey`)
    }
  }
}

for (const [, media] of index.matchAll(/\b(?:image|hoverVideo):\s*'([^']+)'/g)) {
  const clean = media.replace('/protforlio-site/', '/')
  const file = path.join('public', clean.replace(/^\//, ''))
  if (!existsSync(file)) err(indexRel, `card media not found: ${media}`)
}

if (index.includes('TODO')) {
  warn(indexRel, `${(index.match(/TODO/g) || []).length} unfilled TODO(s) in allProjects`)
}

/* ── report ──────────────────────────────────────────────────────────────── */

const pad = (n) => String(n).padStart(2, ' ')

console.log(`\nChecked ${caseStudies.length} case studies + the projects index\n`)

if (warnings.length) {
  console.log(`${pad(warnings.length)} warning(s):`)
  for (const w of warnings) console.log(`   ~ ${w}`)
  console.log('')
}

if (errors.length) {
  console.log(`${pad(errors.length)} error(s):`)
  for (const e of errors) console.log(`   x ${e}`)
  console.log('')
  process.exit(1)
}

console.log(warnings.length ? 'No errors.\n' : 'All clean.\n')
