#!/usr/bin/env node
/**
 * NEW PROJECT SCAFFOLD
 * ---------------------------------------------------------------------------
 *   npm run new:project -- <slug>
 *
 * A new case study has to be registered in FOUR places, and forgetting any one
 * of them produces a page that half-exists. This does all four:
 *
 *   1. projects/<slug>.md         from the template
 *   2. projects/index.md          a card in the allProjects array
 *   3. public/videos/<slug>/      media folder
 *   4. public/posters/<slug>/     poster folder (mirrors the video tree)
 *
 * It writes placeholders, not prose. Fill them in by hand or hand the file to
 * an agent — CLAUDE.md points at the style contract that governs it.
 *
 * The filter chips on the projects index are COMPUTED from the array, so tags
 * need no separate registration. The homepage's two featured cards are hand
 * chosen and deliberately not touched here.
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import path from 'node:path'

const [, , rawSlug] = process.argv

if (!rawSlug) {
  console.error('Usage: npm run new:project -- <slug>')
  console.error('   e.g. npm run new:project -- neon-drifter')
  process.exit(1)
}

const slug = rawSlug.trim().toLowerCase()

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug: "${rawSlug}"`)
  console.error('Use lowercase words joined by single hyphens, e.g. "neon-drifter".')
  console.error('The slug becomes the URL, the media folder name and the carousel id prefix.')
  process.exit(1)
}

const pagePath = path.join('projects', `${slug}.md`)
const indexPath = path.join('projects', 'index.md')
const templatePath = path.join('project-context', 'templates', 'case-study.md')

const exists = async (p) => access(p).then(() => true, () => false)

/** Title Case from a slug, as a starting point the author will edit. */
const titleFromSlug = (s) =>
  s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')

async function main() {
  if (await exists(pagePath)) {
    console.error(`${pagePath} already exists. Delete it first, or pick another slug.`)
    process.exit(1)
  }

  const title = titleFromSlug(slug)

  // ── 1. the page ─────────────────────────────────────────────────────────
  const template = await readFile(templatePath, 'utf8')
  const page = template
    .replaceAll('{{SLUG}}', slug)
    .replaceAll('{{TITLE}}', title)

  await writeFile(pagePath, page, 'utf8')

  // ── 2. the card on the projects index ───────────────────────────────────
  // Inserted at the TOP of allProjects: newest work first is the order a
  // recruiter benefits from, and it is the order the array is already in.
  const index = await readFile(indexPath, 'utf8')
  const anchor = 'const allProjects = ['

  if (!index.includes(anchor)) {
    console.error(`Could not find "${anchor}" in ${indexPath}. Add the card by hand.`)
    process.exit(1)
  }

  const card = `
  {
    id: '${slug}',
    title: '${title}',
    summary: 'TODO one sentence: what it is, and the one thing that makes it worth opening.',
    link: '/protforlio-site/projects/${slug}',
    image: '/protforlio-site/videos/${slug}/TODO.mp4',
    hoverVideo: '/protforlio-site/videos/${slug}/TODO.mp4',
    tags: ['TODO'],
    date: 'TODO Month Year',
    context: 'Personal',
    featured: false
  },`

  const updated = index.replace(anchor, anchor + card)
  await writeFile(indexPath, updated, 'utf8')

  // ── 3 & 4. media folders ────────────────────────────────────────────────
  await mkdir(path.join('public', 'videos', slug), { recursive: true })
  await mkdir(path.join('public', 'posters', slug), { recursive: true })
  await mkdir(path.join('media-src', slug), { recursive: true })

  console.log(`
Scaffolded "${slug}"

  created   ${pagePath}
  updated   ${indexPath}          (card added at the top of allProjects)
  created   public/videos/${slug}/
  created   public/posters/${slug}/
  created   media-src/${slug}/    (gitignored staging for raw capture)

Next:

  1. Drop raw gameplay capture into media-src/${slug}/
  2. npm run media -- ${slug}          encode + generate posters
  3. Write the page. Fill every TODO in ${pagePath}
     and the card in ${indexPath}.
  4. npm run check                     validates icons, tags, media, wiring
  5. npm run docs:dev                  look at it
`)
}

main().catch((err) => {
  console.error('Failed:', err.message || err)
  process.exit(1)
})
