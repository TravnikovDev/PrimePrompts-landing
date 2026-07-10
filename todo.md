# Prime Prompts Landing — TODO

Goal: ship primeprompts.app. Visual system per [DESIGN.md](DESIGN.md) (mapping in [styleguide.md](styleguide.md)), product context in [whitePaper.md](whitePaper.md).

> **Open decision (blocks CTA wiring):** primary CTA is App Store / Google Play badges if the app is live, or an email waitlist if pre-launch. Built badges-first with an easy waitlist toggle.

## Phase A — Design QA fixes (vs Wizz reference, 2026-07-09)

Ordered by impact on installs.

### Product visibility (highest impact)
- [x] **Show the actual app.** Phone mockup with a Trending-feed screen composed from the landing's own card components ([AppShowcase.tsx](components/sections/AppShowcase.tsx)); swap in real app screenshots when they exist
- [x] **Replace all picsum placeholders with real AI-generated previews.** 11 images generated via gpt-image-1 (Roman's OpenAI key), compressed to JPEG in `public/images/prompts/`; regenerate individual ones anytime with the same approach
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
- [x] **Category tile rhythm** — fixed tile image heights (`h-52 md:h-64`) so rows align regardless of column span

## Phase B — GitHub & deploy

- [x] git init, commits, SSH remote configured
- [x] GitHub Actions workflow for Pages (static export, `BASE_PATH`)
- [x] Repo created (by Roman), Pages enabled, deploys green
- [x] Live at https://primeprompts.app (custom domain via Namecheap DNS + `public/CNAME`; `BASE_PATH` removed from workflow)

## Phase C — CTA & content finalization

- [ ] Resolve badges-vs-waitlist decision; wire final store links or waitlist form
- [ ] If waitlist: form with proper label, inline validation, success + error states
- [ ] Final copy pass over all sections (voice rules in styleguide)
- [ ] Weekly "Trending this week" refresh routine (edit [data/prompts.json](data/prompts.json))

## Phase D — Pre-launch QA

- [x] Mobile pass at 375px: home + prompt detail pages, no horizontal overflow, menu works
- [x] `prefers-reduced-motion` pass: all Motion animations gated by `useReducedMotion`, smooth-scroll disabled via media query; remaining motion is hover-triggered only
- [x] Keyboard + focus-ring pass: global volt `:focus-visible` ring, all interactive elements are native links/buttons with labels
- [x] Contrast audit: charcoal body on white 9.7:1 ✓, black on gradient ✓. **Known deviation:** white CTA text on volt pink is ~3.3:1 (AA large-text only, below 4.5:1 for the 14 to 16px labels). This matches the Wizz reference exactly; fixing would require darkening the brand pink (e.g. #d61c7b, 4.9:1) on text-bearing buttons. Decide before launch
- [x] Copy self-audit: zero em/en dashes (grep-verified), no filler verbs, no fake numbers
- [x] Lighthouse (live URL, 2026-07-10): Performance 92, Accessibility 94, Best Practices 100, SEO 100; CLS 0, TBT 20ms. LCP was 2.9s because the hero headline faded in; entrance is now slide-only so the headline paints immediately. Heading-order and NEW-tag contrast fixed. Remaining contrast flag is the volt CTA deviation documented above
- [ ] **Fix the GitHub Pages deploy race (Roman, one click):** Settings → Pages → Source → "GitHub Actions". Currently set to "deploy from branch", so every push races a Jekyll build of the raw repo (which renders README as the homepage) against the real build workflow

## Phase E — SEO & launch

- [x] Meta title/description, OpenGraph + Twitter cards (build-time OG image)
- [x] Structured data: `MobileApplication` JSON-LD
- [x] `sitemap.xml` + `robots.txt` (URLs point at primeprompts.app, the canonical future domain)
- [ ] Verify OG cards render in Telegram/WhatsApp/iMessage previews
- [ ] Analytics: lightweight, cookieless (Plausible/Umami) — track badge clicks and prompt copies; add DESIGN.md cookie-consent card only if a cookie-setting tool is ever added

## Done

- [x] Next.js scaffold: App Router, TypeScript, static export, Tailwind v4, Motion, Phosphor
- [x] Wizz reskin per DESIGN.md: gradient hero, Archivo Black display type, floating black pill nav, volt pink sole accent, tilted showcase band, trust strip, mission row, pill footer
- [x] Working Copy button with clipboard fallback + feedback state
- [x] Initial content base: 8 prompts in prompts.json across 4 categories
- [x] Verified: production build, mobile 375px no-overflow, copy interaction

## Later (post-launch, from the white paper's growth plan)

- [x] `/prompt/[slug]` pages: 13 static detail pages with per-page metadata + OG image, copy button, same-category "More to try" cross-links, app CTA; trending fan cards link to them; included in sitemap
- [x] Category SEO pages (`/category/[slug]`, 4 pages): prompt grid + app CTA, bento tiles link to them, in sitemap. Content base expanded to 13 prompts (data model: single `prompts[]` with `categoryId` + `trending` flags)
- [ ] Seasonal collection sections
- [ ] Smart app banner / deep links once the app is live
- [ ] Real social proof: ratings, install count, user results in the trust strip
