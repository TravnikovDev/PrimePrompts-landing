# Prime Prompts Landing — TODO

Goal: ship primeprompts.app. Visual system per [DESIGN.md](DESIGN.md) (mapping in [styleguide.md](styleguide.md)), product context in [whitePaper.md](whitePaper.md).

> **Open decision (blocks CTA wiring):** primary CTA is App Store / Google Play badges if the app is live, or an email waitlist if pre-launch. Built badges-first with an easy waitlist toggle.

## Phase A — Design QA fixes (vs Wizz reference, 2026-07-09)

Ordered by impact on installs.

### Product visibility (highest impact)
- [ ] **Show the actual app.** Add a large phone mockup with a real app screen (Trending feed) directly under the hero badges, overlapping the gradient-to-white transition, like the reference's device shot. Until real app screenshots exist, compose the screen from the landing's own card components as an honest stand-in and mark it as mockup
- [ ] **Replace all picsum placeholders with real AI-generated previews.** Every trending card, the featured "try one" image, and all 4 category tiles need on-topic imagery (the coyote and beach photos actively hurt). Keep one consistent visual style across the set
- [ ] **Official store badges.** Swap the generic pill buttons for Apple's "Download on the App Store" and Google's "GET IT ON Google Play" badge assets (both dark variants, per DESIGN.md badge-pair component). Wire real store URLs when published

### Hero composition
- [ ] **Tame the gradient.** Desaturate toward the reference's softer field and fade it to white at the bottom so the hero hands off into the white content bands instead of ending at a hard edge
- [ ] **Compact the hero.** Drop `min-h-[100dvh]` centering; top-align the stack (pill → headline → subtext → badges) so the trust strip and phone mockup enter the first scroll, like the reference

### Credibility
- [ ] **Give the trust strip real proof points.** Replace the how-it-works repeat with true claims (e.g. "New prompts curated daily", "Works with ChatGPT, Gemini, Claude and more", "Free, no account"). Swap in real numbers (installs, prompt count, rating) as soon as they exist; never fake them
- [ ] Keep how-it-works as its own light section further down (or fold into Try One) so the strip and the steps don't duplicate

### Completeness / trust
- [ ] **Full black footer block** per reference: logo mark, Download column (App Store / Google Play), Social column (TikTok / Instagram / Pinterest once they exist), Useful pages column (Privacy Policy, Terms), © line
- [ ] **Privacy Policy + Terms pages** (`/privacy`, `/terms`) — required for App Store / Google Play review anyway
- [ ] **Favicon + logo mark** (simple glyph that works in the black nav pill) and **OG share image** (prompt card composition, not just the wordmark)
- [ ] **Mobile nav menu** — links currently vanish below `md`; add a hamburger sheet or an equally deliberate reduction

### Polish
- [ ] **Loosen scroll-reveal thresholds** — sections render blank mid-scroll (`amount: 0.3` is too strict for tall blocks; use a smaller amount or `margin`); page must never look empty during fast scroll or full-page capture
- [ ] **Trending fan breathing room** — reduce overlap, bump the 10px category labels to a readable size, fix the low-contrast caption under the band
- [ ] **Category tile rhythm** — equalize text-block heights and align the grid; standardize section gaps to the 80px system token

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
