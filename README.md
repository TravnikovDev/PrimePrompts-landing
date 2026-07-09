# Prime Prompts Landing

Landing page for [Prime Prompts](https://primeprompts.app), a mobile discovery app for fun and trending AI prompts.

- Product context: [whitePaper.md](whitePaper.md)
- Design system: [styleguide.md](styleguide.md)
- Roadmap: [todo.md](todo.md)

## Stack

Next.js (App Router, static export), Tailwind CSS v4, Motion, Phosphor icons. Prompt content lives in [data/prompts.json](data/prompts.json).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deployment

Pushes to `main` deploy to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The workflow sets `BASE_PATH=/PrimePrompts-landing`; remove that env var once the primeprompts.app custom domain is configured.
