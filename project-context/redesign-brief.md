# Future Reference-Template Redesign Brief

The next major task is expected to reproduce a user-provided reference website/template as accurately as possible while adapting it to this portfolio's real content.

## Before implementation

Capture and document:

1. Reference URL/files, viewport sizes, and all reachable pages/states.
2. Typography (families, weights, sizes, line heights), color palette, spacing scale, radii, shadows, borders, and motion.
3. Desktop and mobile screenshots of the header, hero, project cards, case-study pages, contact/footer, hover states, menus, filters, and transitions.
4. Which reference assets may legally be reused versus which need equivalent local replacements.
5. A mapping from each reference section to existing portfolio content.

## Content that must remain discoverable

- Raymond's game-development positioning and introduction.
- Featured Unity and Unreal projects.
- Full project gallery and individual technical case studies.
- Gameplay videos/images and technical evidence.
- Experience, education, CV, contact, GitHub, and LinkedIn.
- Mobile navigation and accessible keyboard/focus behavior.

## Accuracy checklist

- Match layout geometry at agreed desktop and mobile viewport sizes.
- Match type metrics, colors, spacing, imagery treatment, borders, shadows, and animation timing.
- Implement responsive behavior rather than matching only one screenshot.
- Check hover, focus, active, open/closed, filtering, and navigation states.
- Compare rendered screenshots side by side and iterate on visible differences.
- Verify all internal links, videos, images, CV download/viewing, metadata, and GitHub Pages base-path behavior.
- Run the production build before handoff.

## Migration preference

Keep case-study information in Markdown where practical. Extract repeated, interactive, or design-system UI into Vue components rather than duplicating large HTML blocks. Centralize new design tokens instead of layering more unrelated rules onto the existing large stylesheet.
