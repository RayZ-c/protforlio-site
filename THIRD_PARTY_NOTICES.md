# Third-party notices

Everything below is redistributed inside this site's source. Each entry names
what is used, where it came from, and the licence it arrives under.

---

## 1. Lucide — icon geometry

**Used for:** the section icons on every case-study panel and the disclosure
chevron. The SVG path data is inlined in `.vitepress/theme/icons.js`.

**Source:** https://lucide.dev · https://github.com/lucide-icons/lucide

Only the geometry is Lucide's. The hover and open animations in
`.vitepress/theme/icons.css` are original CSS written for this site.

### ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

### Feather (MIT) — for six of the icons used here

Lucide began as a fork of Feather. Of the icons inlined in this repository,
`arrow-up`, `chevron-down`, `compass`, `database`, `link` and `target` are
derived from Feather and additionally carry its licence:

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 2. ThreeUI — "Signal Particles" background field

**Used for:** the animated dot field behind every page except the homepage,
in `.vitepress/theme/components/BackgroundField.vue`.

**Source:** https://github.com/MengTo/threeui · https://threeui.com
Copyright — Meng To / Design+Code

The interference maths (two crossed sine waves) and the deterministic accent
hash are from ThreeUI's `signal-particles` effect. Despite the library's name
this particular effect is plain Canvas 2D — no three.js is used or bundled.
The palette, the batched-path rendering, the frame cap, the DPR handling and
the Vue lifecycle are changes made for this site.

Licensed MIT; the text is in section 6 below.

---

## 3. KokonutUI — "Beams Background"

**Used for:** the drifting light beams behind the homepage sections, in
`.vitepress/theme/components/BeamsBackground.vue`.

**Source:** https://kokonutui.com/docs/components/beams-background
Also published at https://21st.dev/@kokonutd/components/beams-background
Copyright — KokonutUI

The beam model is theirs: a shared diagonal, per-beam pulse phase, a six-stop
gradient down each beam, and recycling into three columns on exit. Ported from
React to Vue here. The palette (orange and cool blue in place of their cyan-to-
violet range), the reduced-resolution render in place of a per-draw 35px canvas
blur, the frame cap and the route-driven lifecycle are changes made for this
site.

Licensed MIT; the text is in section 6 below.

---

## 4. Uiverse — midnight sky transition background

**Used for:** the route-transition backdrop in
`.vitepress/theme/components/PageTransition.vue`.

**Source:** https://uiverse.io/kiranmayee-abbireddy/average-insect-70
Copyright — 2026 kiranmayee-abbireddy (Kiranmayee Abbireddy)

Licensed MIT; the text is in section 6 below.

---

## 5. Uiverse — transition loader

**Used for:** the four-dot loader in the same route transition.

**Source:** https://uiverse.io/Li-Deheng/bright-firefox-37
Copyright — 2026 Li-Deheng (李德恒)

Licensed MIT; the text is in section 6 below.

---

## 6. MIT License

Applies to sections 2, 3, 4 and 5.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Acknowledgements (no code used)

The icon animation style is modelled on
[lucide-animated.com](https://lucide-animated.com) and
[heroicons-animated.com](https://www.heroicons-animated.com). Both are React +
Motion libraries; this site adds no dependencies, so the equivalent motion was
rewritten as CSS keyframes. No code from either project is included.
