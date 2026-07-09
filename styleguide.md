# Prime Prompts Landing — Style Guide

The landing for primeprompts.app. One rule above all: **the landing IS the app** — it must feel like the curated, friendly prompt feed it advertises. Audience is AI-curious adults 35–55+, so clarity always beats cleverness.

Design dials: `DESIGN_VARIANCE: 7 / MOTION_INTENSITY: 6 / VISUAL_DENSITY: 3` (premium consumer).

---

## 1. Color

One theme pair (light default, dark via `prefers-color-scheme`), one accent, locked across the whole page.

### Light (default)

| Token | Value | Usage |
|---|---|---|
| `--surface` | `#fafaf9` (stone-50) | Page background |
| `--surface-raised` | `#ffffff` | Prompt cards, phone mockup screen |
| `--ink` | `#1c1917` (stone-900) | Headlines, body text |
| `--ink-muted` | `#57534e` (stone-600) | Subtext, captions |
| `--accent` | `#e11d48` (rose-600) | CTAs, Copy button, links, focus rings |
| `--accent-pressed` | `#be123c` (rose-700) | Active/pressed states |
| `--line` | `#e7e5e4` (stone-200) | Hairline dividers, card borders |

### Dark

| Token | Value | Usage |
|---|---|---|
| `--surface` | `#0c0a09` (stone-950) | Page background |
| `--surface-raised` | `#1c1917` (stone-900) | Cards |
| `--ink` | `#fafaf9` | Headlines, body |
| `--ink-muted` | `#a8a29e` (stone-400) | Subtext |
| `--accent` | `#fb7185` (rose-400) | CTAs (lighter for contrast on dark) |
| `--accent-pressed` | `#f43f5e` (rose-500) | Active states |
| `--line` | `#292524` (stone-800) | Dividers |

### Rules

- **One accent.** Rose is used for every interactive element. No second accent color anywhere — no teal badge, no blue link in the footer.
- Neutrals are warm (stone), never mixed with cool grays (slate/zinc) in the same page.
- No pure `#000` / `#fff` for text-on-background pairs.
- No gradients as default. The only permitted gradient is a subtle warm tint behind the hero phone mockup, and it stays in the stone/rose family.
- No AI-purple, no neon glows, no glassmorphism.
- All text passes WCAG AA (4.5:1 body, 3:1 for display ≥ 24px). Check the rose CTA text contrast in both modes.

## 2. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headlines | **Outfit** (600–700) | Via `next/font`. Geometric, friendly, product-feeling |
| Body / UI | **Outfit** (400–500) | One family for the whole page keeps it calm |
| Prompt text inside cards | **JetBrains Mono** (400) | Signals "this is the thing you copy" — the only mono usage |

### Scale

- Hero headline: `text-5xl md:text-6xl tracking-tight leading-[1.05]`, max 2 lines.
- Section headlines: `text-3xl md:text-4xl tracking-tight`, ≤ 8 words.
- Body: `text-lg` (18px) base — audience skews older, do not go below 16px anywhere, including captions.
- Line length: body copy capped at `max-w-[60ch]`.

### Rules

- No serif fonts anywhere.
- Emphasis inside a headline = bold or the accent color of the same font. Never a different family, never italics with clipped descenders.
- **Zero em-dashes (`—`) in any visible string.** Use a period, comma, or hyphen.
- Max 2 eyebrows (small uppercase labels) on the entire page. Prefer none; section headlines carry themselves.
- Copy register: plain, warm, verb-first. No "unleash / elevate / seamless / next-gen". Write like you'd explain the app to a friend's parent.

## 3. Shape & Space

- **Radius system (locked):** cards `rounded-2xl` (16px), buttons and inputs full-pill, phone mockup `rounded-[2.5rem]`. Nothing sharp-cornered.
- Shadows: soft, warm-tinted, low. `shadow-lg shadow-stone-900/5` on raised cards only. No black drop shadows, no glow.
- Section spacing: `py-24 md:py-32`. Airy — density dial is 3.
- Page container: `max-w-6xl mx-auto px-4 md:px-6`.
- Cards only where elevation means something (prompt cards, phone screen). Everything else grouped with space or a single hairline, never boxed.
- Hero uses `min-h-[100dvh]` (never `h-screen`), content fits the viewport with CTA visible without scrolling.

## 4. Components

### Prompt Card (the signature component, reused from the app's visual language)

- Preview image on top (real AI-generated image, 4:5 or 1:1), title, one-line description, category pill, Copy button.
- Copy button: pill, accent fill, white text. On press: `scale-[0.97]` spring, then morphs to "Copied. Paste it into ChatGPT" for 2.5s.
- No labels/pills overlaid **on** the image itself; category pill sits below.

### Buttons

- Primary: accent pill, `px-6 py-3`, one line always, label ≤ 3 words.
- Secondary: pill with `border-line` outline, ink text.
- One label per intent across the page: install intent is always the store badges; "copy" intent is always "Copy prompt". No synonyms.
- `:active` on everything tactile: `scale-[0.98]`.

### Store badges

Official Apple "Download on the App Store" and Google Play badge assets, never redrawn. Dark badge variant on light theme, and vice versa.

### Icons

- **Phosphor** (`@phosphor-icons/react`), weight `regular`, one family only, no hand-rolled SVGs.
- No emojis in UI copy.

## 5. Motion

Library: **Motion** (`motion/react`). Every animation must be justifiable in one sentence.

| Moment | Animation | Why |
|---|---|---|
| Hero load | Text fades up, phone slides in with spring (`stiffness: 100, damping: 20`) | Entrance storytelling |
| Copy button | Press spring + label morph | Feedback on the page's key action |
| Section reveals | `whileInView`, `opacity 0→1, y 24→0`, `once: true`, stagger 60ms | Hierarchy on scroll |
| Trending row | Native `scroll-snap-x`, no autoplay | User-driven browsing |

Hard rules:

- Everything gated behind `useReducedMotion()` — collapses to static.
- Animate only `transform` and `opacity`.
- No scroll-hijacking, no parallax, no pinned sections, no marquees, no infinite loops. Wrong audience.
- No `window.addEventListener("scroll")` ever.

## 6. Imagery

- Every prompt card carries a **real AI-generated preview image** (generate them; they double as app content). No div-built fake screenshots.
- Phone mockup in the hero shows an actual composed feed of these cards.
- Placeholder during development: `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` with a `TODO` comment, swapped before ship.
- All images via `next/image` with explicit dimensions (CLS < 0.1); hero image gets `priority`.

## 7. Layout Families (one per section, no repeats)

1. **Hero:** asymmetric split, text left / phone mockup right. Collapses to single column below `md`, phone below text.
2. **Try one now:** full-width single oversized prompt card, centered.
3. **How it works:** one connected horizontal 3-step strip (not three equal cards). Stacks vertically on mobile.
4. **Categories:** bento grid, exactly 4 cells (1 large + 3 small), each with a real background image.
5. **Trending:** horizontal scroll-snap card row.
6. **Reassurance:** plain vertical text stack, no cards, no icons required.
7. **Final CTA:** centered manifesto type + badges (the one permitted centered section).

## 8. Accessibility & Performance Budget

- WCAG AA everywhere; visible focus rings (accent, 2px offset) on all interactive elements.
- Full keyboard path: nav → copy button → badges → footer.
- `prefers-reduced-motion` and `prefers-color-scheme` both respected.
- Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1. Static export, self-hosted fonts with `font-display: swap`, lazy-load everything below the fold.

## 9. Voice & Content Rules

- Headlines ≤ 8 words, sub-paragraphs ≤ 25 words.
- No fake numbers ("10,000+ prompts") until they're true.
- No testimonials until real ones exist — the interactive prompt card is the social proof.
- Tool-agnostic phrasing: "works with ChatGPT, Gemini, Claude, Midjourney and more" — never imply a single required tool.
- English only for MVP (matches the app's non-goals).
