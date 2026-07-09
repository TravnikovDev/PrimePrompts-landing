# Prime Prompts Landing — TODO

Goal: ship primeprompts.app. Visual system per [DESIGN.md](DESIGN.md) (mapping in [styleguide.md](styleguide.md)), product context in [whitePaper.md](whitePaper.md).

> **Open decision (blocks CTA wiring):** primary CTA is App Store / Google Play badges if the app is live, or an email waitlist if pre-launch. Built badges-first with an easy waitlist toggle.

## Phase A — Design QA fixes (vs Wizz reference, 2026-07-09)

Ordered by impact on installs.

### Product visibility (highest impact)
- [x] **Show the actual app.** Phone mockup with a Trending-feed screen composed from the landing's own card components ([AppShowcase.tsx](components/sections/AppShowcase.tsx)); swap in real app screenshots when they exist
- [ ] **Replace all picsum placeholders with real AI-generated previews.** Every trending card, the featured "try one" image, the phone-feed cards, and all 4 category tiles need on-topic imagery in one consistent style. **Needs generated assets from Roman** (no image-gen tool in this environment)
- [x] **Official store badges.** Apple + Google badge artwork in `public/badges/`, used in hero and final CTA
  - [ ] Wire real store URLs when the app is published (currently `href="#"`)

### Hero composition
- [x] **Tame the gradient** — softer pastels, fades to white at the bottom
- [x] **Compact the hero** — top-aligned stack; trust strip and phone mockup enter the first scroll

### Credibility
- [x] **Trust strip with real claims** — hand-curated daily / works with any AI tool / free, no account
  - [ ] Swap in real numbers (installs, prompt count, rating) once they exist; never fake them

### Completeness / trust
- [x] **Full black footer block** — brand + blurb + ©, Download column, Pages column (Privacy, Terms, Contact); add a Social column once accounts exist
- [x] **Privacy Policy + Terms pages** (`/privacy`, `/terms`)
- [x] **Favicon** (`app/icon.svg`) and **OG share image** (`app/opengraph-image.tsx`, build-time generated)
- [x] **Mobile nav menu** — hamburger sheet below `md`

### Polish
- [x] **Loosened scroll-reveal thresholds** (`amount: 0.1`)
- [x] **Trending fan breathing room** — less overlap, softer tilts, labels bumped to 12px
- [ ] **Category tile rhythm** — equalize text-block heights across bento tiles (minor, revisit with real imagery)

## Phase B — GitHub & deploy (blocked on auth)

- [x] git init, commits, SSH remote configured
- [x] GitHub Actions workflow for Pages (static export, `BASE_PATH`)
- [ ] **Blocked:** create `TravnikovDev/PrimePrompts-landing` repo — needs `gh auth login` (then Claude finishes: create, push, enable Pages) or manual repo creation at github.com/new
- [ ] Push + verify live at travnikovdev.github.io/PrimePrompts-landing
- [ ] Later: point primeprompts.app custom domain, remove `BASE_PATH` from workflow

## Phase C — CTA & content finalization

- [ ] Resolve badges-vs-waitlist decision; wire final store links or waitlist form
- [ ] If waitlist: form with proper label, inline validation, success + error states
- [ ] Final copy pass over all sections (voice rules in styleguide)
- [ ] Weekly "Trending this week" refresh routine (edit [data/prompts.json](data/prompts.json))

## Phase D — Pre-launch QA

- [ ] Mobile pass at 375px after Phase A changes (fan band, phone mockup, footer columns)
- [ ] `prefers-reduced-motion` pass: page fully usable static
- [ ] Keyboard + focus-ring pass over all interactive elements
- [ ] Contrast audit: volt CTA text, charcoal body on white, black-on-gradient (WCAG AA)
- [ ] Copy self-audit: reread every visible string; zero em-dashes, no filler verbs, no fake numbers
- [ ] Lighthouse: LCP < 2.5s, CLS < 0.1, INP < 200ms; hero assets priority, below-fold lazy

## Phase E — SEO & launch

- [ ] Meta title/description finalized, OpenGraph + Twitter cards with the new OG image
- [ ] Structured data: `MobileApplication` JSON-LD
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Verify OG cards render in Telegram/WhatsApp/iMessage previews
- [ ] Analytics: lightweight, cookieless (Plausible/Umami) — track badge clicks and prompt copies; add DESIGN.md cookie-consent card only if a cookie-setting tool is ever added

## Done

- [x] Next.js scaffold: App Router, TypeScript, static export, Tailwind v4, Motion, Phosphor
- [x] Wizz reskin per DESIGN.md: gradient hero, Archivo Black display type, floating black pill nav, volt pink sole accent, tilted showcase band, trust strip, mission row, pill footer
- [x] Working Copy button with clipboard fallback + feedback state
- [x] Initial content base: 8 prompts in prompts.json across 4 categories
- [x] Verified: production build, mobile 375px no-overflow, copy interaction

## Later (post-launch, from the white paper's growth plan)

- [ ] `/prompt/[slug]` pages for individual prompts (SEO + shareable links)
- [ ] Category SEO pages (`/prompts/personality-tests`, etc.)
- [ ] Seasonal collection sections
- [ ] Smart app banner / deep links once the app is live
- [ ] Real social proof: ratings, install count, user results in the trust strip
