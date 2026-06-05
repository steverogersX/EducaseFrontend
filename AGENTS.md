<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# PopX — Pixel Perfect UI

## Project Overview
Mobile app (375px), 4 screens, React + CSS Modules.
Font: Rubik. No Tailwind. No hardcoded values.

## Design System

### Colors
--color-primary: #6C25FF
--color-secondary-btn: #6C25FF4B
--color-bg: #F7F8F9
--color-white: #FFFFFF
--color-text: #1D2226
--color-placeholder: #919191
--color-border: #CBCBCB
--color-error: #DD4A3D

### Typography (Rubik)
- Heading:     Medium  28px  #1D2226
- Body:        Regular 18px  #1D2226
- Button:      Medium  16px
- Input label: Regular 14px  #6C25FF (active/filled)
- Placeholder: Regular 14px  #919191
- Small/Link:  Regular 13px  #6C25FF

### Spacing
- Screen padding-x:   24px
- Screen padding-top: 32px
- Field gap:          16px
- Button height:      52px
- Input height:       48px
- Input radius:       8px
- Button radius:      8px (primary) / 9999px (secondary)

### Assets
- /src/assets/profile.png
- /src/assets/camicon.svg

## Coding Rules
1. All colors, spacing, and design tokens via Tailwind's config (tailwind.config.js) — never raw hex, px literals, or CSS variables.
2. Floating labels: inside border, animate up on focus/filled. Build as a custom FloatingInput component since shadcn/ui has no native equivalent.
3. Each screen = separate component in /src/screens/
4. Reusable components: FloatingInput (custom), Button (shadcn/ui). Prefer shadcn/ui — extend or build custom only when shadcn/ui has no equivalent.
5. 375px frame centered on desktop, outer bg via Tailwind config color token (e.g. bg-outer).
6. After each screen — visually compare to reference image in /designs/
7. Use shadcn/ui components by default. Build custom only when shadcn/ui lacks the pattern.
8. Use Tailwind CSS for all styling — layout, spacing, color, typography. No inline styles, no CSS files, no CSS variables.
9. Follow good React patterns: controlled components, single responsibility, props over state where possible.
