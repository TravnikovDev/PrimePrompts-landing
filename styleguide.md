# Prime Prompts Landing — Style Guide

**The source of truth for the visual system is [DESIGN.md](DESIGN.md)** (Wizz-style reference): black-and-white editorial structure, Volt Pink `#ff3d9e` as the sole chromatic accent, one loud multi-hue gradient hero, light theme only.

This file only records how DESIGN.md maps onto this codebase.

## Implementation notes

- **Fonts.** PolySans is not freely licensable, so per DESIGN.md's own substitution list: **Archivo Black** stands in for PolySans Bulky (display, all-caps, compressed leading 0.85 to 1.0), **Manrope** (400/600/700/800) stands in for Median/Neutral/Slim. **JetBrains Mono** is a product-specific addition used only for copyable prompt text inside prompt boxes. All loaded via `next/font`.
- **Tokens.** Defined in [app/globals.css](app/globals.css) via Tailwind v4 `@theme`: `volt`, `volt-pressed` (#e02a8a, pressed/hover state, derived), `obsidian`, `paper`, `ash`, `charcoal`, `onyx`, `mist`, plus the three DESIGN.md shadows (`shadow-card`, `shadow-cta`, `shadow-ring`).
- **Radii.** Pills (999px) for nav bar, news pill, store badges, chips, footer bar. 12px (`rounded-xl`) for buttons, cards, inputs, prompt boxes. 24px (`rounded-[24px]`) for image frames and the showcase-band cards.
- **Hero gradient.** The `.hero-gradient` class in globals.css is the system's single multi-color surface (lavender, sky, coral, amber). Never reuse it on any other section.
- **Theme.** Light only. No dark mode variants, per DESIGN.md.
- **Accent discipline.** Pink appears only on: primary CTA buttons, section eyebrow labels, the logo's "Prompts", nav hover states, and the NEW tag. Never on body text, never a second accent color.
- **Page rhythm** (per DESIGN.md layout notes): loud gradient hero → quiet white bands (trust strip, try-one) → loud tilted-card showcase band → quiet bands (categories, mission row, final CTA) → black pill footer.
- **Motion.** Motion (`motion/react`) only: hero entrance, scroll reveals (`whileInView`, once), copy-button feedback, tilt-straighten hover on showcase cards. Everything behind `useReducedMotion`.

## Section map

| Page section | DESIGN.md component |
|---|---|
| [Nav.tsx](components/Nav.tsx) | Floating Navigation Pill |
| [Hero.tsx](components/sections/Hero.tsx) | Hero gradient + News Pill + Display Headline + Badge Pair |
| [HowItWorks.tsx](components/sections/HowItWorks.tsx) | Trust Indicator Strip |
| [TryOne.tsx](components/sections/TryOne.tsx) | Section Eyebrow + card with Input-style prompt box |
| [Trending.tsx](components/sections/Trending.tsx) | Phone Mockup Carousel (fanned, tilted frames) |
| [Categories.tsx](components/sections/Categories.tsx) | Image tiles, 24px radius |
| [Reassurance.tsx](components/sections/Reassurance.tsx) | Feature Row (Mission section) |
| [FinalCta.tsx](components/sections/FinalCta.tsx) | Display Headline + Badge Pair |
| [Footer.tsx](components/Footer.tsx) | Dark pill bar |

## Content & voice rules (unchanged)

- Display headlines all-caps, ≤ 8 words. Body ≤ 25 words per paragraph, 1.5 line-height, never below 14px.
- No em-dashes anywhere. No filler verbs ("unleash", "elevate", "seamless").
- No fake numbers or testimonials until real ones exist.
- Tool-agnostic phrasing: ChatGPT, Gemini, Claude, Midjourney "and more".
- WCAG AA contrast; visible volt focus rings; full keyboard path.
