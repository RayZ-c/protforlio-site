#!/usr/bin/env node
/**
 * PREPARE MEDIA
 * ---------------------------------------------------------------------------
 * Encodes raw gameplay capture into the exact format the site expects, and
 * extracts the poster frame that goes with each clip.
 *
 *   node scripts/prepare-media.mjs <slug> [sourceDir]
 *   npm run media -- <slug> [sourceDir]
 *
 * Default sourceDir is `media-src/<slug>/`, which is gitignored — drop raw
 * captures there and they never reach the repository.
 *
 * Why every flag below is what it is:
 *
 *   -crf 26        Chosen by watching clips side by side against the originals
 *                  at 22 / 24 / 26 / 28. 26 was the point where nothing was
 *                  visible on gameplay footage but the files were ~6x smaller.
 *                  Raising this number shrinks files and costs quality.
 *   -movflags
 *     +faststart   Moves the moov atom to the FRONT of the file. Without it a
 *                  browser must download the whole clip before the first frame
 *                  can play, which defeats streaming entirely.
 *   -c:a aac -b:a
 *     128k         KEEP THE AUDIO. Clips are `muted` by default in the markup,
 *                  but that is only the initial state — a visitor can unmute
 *                  with the native controls. Stripping audio permanently
 *                  removes something they can ask for. Silent sources cost
 *                  nothing here because there is no stream to encode.
 *   scale cap      Source resolution is preserved up to 1920 wide. Gameplay
 *                  capture above that is downscaled; nothing is ever upscaled.
 *   poster @ 1s    Frame 0 of a gameplay clip is very often a black fade-in.
 *                  One second in is reliably a real frame.
 *
 * The poster tree MIRRORS the video tree, because MediaCarousel derives poster
 * paths from video paths rather than being told them:
 *     public/videos/<slug>/clip.mp4  ->  public/posters/<slug>/clip.jpg
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { mkdir, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const run = promisify(execFile)

const SOURCE_EXTENSIONS = new Set(['.mp4', '.mov', '.mkv', '.avi', '.webm', '.m4v'])
const MAX_WIDTH = 1920

const [, , slug, sourceArg] = process.argv

if (!slug) {
  console.error('Usage: npm run media -- <slug> [sourceDir]')
  console.error('   e.g. npm run media -- my-new-game')
  process.exit(1)
}

const sourceDir = sourceArg || path.join('media-src', slug)
const videoDir = path.join('public', 'videos', slug)
const posterDir = path.join('public', 'posters', slug)

if (!existsSync(sourceDir)) {
  console.error(`Source folder not found: ${sourceDir}`)
  console.error('Create it and drop the raw captures in, then run this again.')
  process.exit(1)
}

const bytes = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`

/** ffprobe one value out of a stream, or null if the stream is absent. */
async function probe(file, args) {
  try {
    const { stdout } = await run('ffprobe', ['-v', 'error', ...args, '-of', 'csv=p=0', file])
    return stdout.trim() || null
  } catch {
    return null
  }
}

async function main() {
  await mkdir(videoDir, { recursive: true })
  await mkdir(posterDir, { recursive: true })

  const entries = (await readdir(sourceDir))
    .filter((f) => SOURCE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()

  if (!entries.length) {
    console.error(`No video files in ${sourceDir}`)
    process.exit(1)
  }

  console.log(`\nEncoding ${entries.length} clip(s) for "${slug}"\n`)

  let sourceTotal = 0
  let outputTotal = 0

  for (const file of entries) {
    const input = path.join(sourceDir, file)
    const base = path.basename(file, path.extname(file))
    const output = path.join(videoDir, `${base}.mp4`)
    const poster = path.join(posterDir, `${base}.jpg`)

    const hasAudio = await probe(input, ['-select_streams', 'a:0', '-show_entries', 'stream=codec_name'])
    const width = Number(await probe(input, ['-select_streams', 'v:0', '-show_entries', 'stream=width'])) || 0

    // Only insert a scale filter when the source is actually too wide. An
    // unconditional filter would re-encode geometry that is already correct.
    const scale = width > MAX_WIDTH ? ['-vf', `scale=${MAX_WIDTH}:-2`] : []

    const audio = hasAudio
      ? ['-c:a', 'aac', '-b:a', '128k']
      : ['-an'] // no audio stream to preserve

    process.stdout.write(`  ${file} … `)

    await run('ffmpeg', [
      '-y', '-hide_banner', '-loglevel', 'error',
      '-i', input,
      ...scale,
      '-c:v', 'libx264',
      '-crf', '26',
      '-preset', 'slow',
      '-pix_fmt', 'yuv420p',       // the only chroma format every browser decodes
      '-movflags', '+faststart',
      ...audio,
      output
    ])

    await run('ffmpeg', [
      '-y', '-hide_banner', '-loglevel', 'error',
      '-ss', '1',                  // 1s in, past any fade from black
      '-i', output,
      '-frames:v', '1',
      '-q:v', '4',
      poster
    ])

    const inSize = (await stat(input)).size
    const outSize = (await stat(output)).size
    sourceTotal += inSize
    outputTotal += outSize

    console.log(
      `${bytes(inSize)} -> ${bytes(outSize)} ` +
      `(${(inSize / outSize).toFixed(1)}x)${hasAudio ? '' : ' [silent source]'}`
    )
  }

  console.log(
    `\nDone. ${bytes(sourceTotal)} -> ${bytes(outputTotal)} ` +
    `(${(sourceTotal / outputTotal).toFixed(1)}x smaller)\n`
  )
  console.log(`  videos:  ${videoDir}`)
  console.log(`  posters: ${posterDir}`)
  console.log(`\nReference them in markdown WITHOUT the site base, e.g.`)
  console.log(`  :slides="[{ src: '/videos/${slug}/${path.basename(entries[0], path.extname(entries[0]))}.mp4', caption: '…' }]"\n`)
}

main().catch((err) => {
  console.error('\nFailed:', err.message || err)
  if (String(err).includes('ENOENT')) {
    console.error('Is ffmpeg on your PATH? Check with: ffmpeg -version')
  }
  process.exit(1)
})
