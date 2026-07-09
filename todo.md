# Prime Prompts Landing — TODO

Goal: ship primeprompts.app. Design and structure per [styleguide.md](styleguide.md), product context in [whitePaper.md](whitePaper.md).

> **Open decision (blocks Phase 3):** primary CTA is App Store / Google Play badges if the app is live, or an email waitlist if pre-launch. Build badges first with an easy waitlist toggle unless decided otherwise.

## Phase 0 — Project Setup

- [ ] `git init` + first commit (white paper, styleguide, todo)
- [ ] Scaffold Next.js (App Router, TypeScript) with Tailwind v4
- [ ] Configure static export (`output: "export"`) — no server needed for a brochure page
- [ ] Install deps: `motion`, `@phosphor-icons/react`
- [ ] Set up fonts via `next/font`: Outfit (400/500/600/700), JetBrains Mono (400)
- [ ] Define CSS variable tokens from styleguide (light + dark) in `globals.css`
- [ ] Base layout: `<html>` metadata, theme tokens, `max-w-6xl` container

## Phase 1 — Content & Assets (can run parallel to Phase 2)

- [ ] Write final copy for all 7 sections (headline, subtext, step labels, reassurance lines, final CTA) — run against styleguide voice rules
- [ ] Pick 8–10 real prompts from the app's initial content base for the landing:
  - [ ] 1 hero-worthy personality-test prompt for the "Try one now" section
  - [ ] 5–6 for the Trending row
  - [ ] 4 category-representative ones for the bento
- [ ] Generate AI preview images for each selected prompt (4:5 or 1:1, consistent visual style)
- [ ] Compose the hero phone-mockup screen from real cards (screenshot from the app build, or composited frame)
- [ ] Logo / wordmark for nav and footer
- [ ] Favicon + OG image (OG shows a prompt card, not just the logo)
- [ ] `prompts.json` data file: title, description, promptText, category, image path

## Phase 2 — Build Sections

- [ ] **Nav:** logo left, single install CTA right, ≤ 72px tall, one line
- [ ] **Hero:** asymmetric split, text left / phone right, entrance animation, badges visible without scroll, `min-h-[100dvh]`
- [ ] **Try one now:** oversized PromptCard with working Copy button (Clipboard API + spring feedback + "Copied" state morph)
- [ ] **How it works:** connected 3-step strip (Browse → Copy → Paste anywhere) with real mini-screenshots; tool-agnostic line
- [ ] **Categories bento:** exactly 4 cells (1 large + 3 small), real background images per cell
- [ ] **Trending row:** scroll-snap horizontal cards fed from `prompts.json`
- [ ] **Reassurance:** plain stack — free, no account, no AI knowledge needed
- [ ] **Final CTA:** centered manifesto headline + store badges
- [ ] **Footer:** logo, contact email, privacy + terms links
- [ ] Shared `PromptCard` component (used by sections 2, 4, 5)
- [ ] Scroll-reveal wrapper (`whileInView`, once, reduced-motion safe)

## Phase 3 — CTA & Legal

- [ ] Resolve the badges-vs-waitlist decision; wire final store links or waitlist form
- [ ] If waitlist: form with proper label, inline validation, success + error states (no placeholder-as-label)
- [ ] Privacy policy page (`/privacy`) — required for App Store / Google Play review anyway
- [ ] Terms page (`/terms`)

## Phase 4 — Polish & QA

- [ ] Dark mode pass: every section checked in both themes
- [ ] Mobile pass at 375px: hero stacks, bento collapses, trending row swipes, nothing overflows
- [ ] `prefers-reduced-motion` pass: page fully usable static
- [ ] Keyboard + focus-ring pass over all interactive elements
- [ ] Contrast audit: rose CTA text, muted text, both themes (WCAG AA)
- [ ] Copy self-audit: reread every visible string; zero em-dashes, no filler verbs, no fake numbers
- [ ] Lighthouse: LCP < 2.5s, CLS < 0.1, INP < 200ms; hero image `priority`, below-fold lazy
- [ ] Styleguide pre-flight: one accent everywhere, one radius system, no repeated section layouts

## Phase 5 — SEO & Launch

- [ ] Meta title/description, OpenGraph + Twitter cards
- [ ] Structured data: `MobileApplication` JSON-LD
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Deploy (Vercel or any static host) + point primeprompts.app DNS
- [ ] Verify OG cards render in Telegram/WhatsApp/iMessage previews
- [ ] Analytics: lightweight, cookieless (e.g. Plausible/Umami) — track badge clicks and prompt copies

## Later (post-launch, from the white paper's growth plan)

- [ ] `/prompt/[slug]` pages for individual prompts (SEO + shareable links; Trending cards link to them)
- [ ] Category SEO pages (`/prompts/personality-tests`, etc.)
- [ ] Weekly "Trending this week" content refresh routine (edit `prompts.json` or point at Supabase)
- [ ] Seasonal collection sections
- [ ] Smart app banner / deep links once the app is live
