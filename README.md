# LorvexAI website (lorvexai.com)

Next.js (static export) site served from Cloudflare Workers, with a `/api/ask` worker for the archive Q&A.

## Develop
- `npm install`
- `npm run dev`
- `npm run build` (builds the search index first, then exports to `out/`)

## Deploy
Pushes to `main` build and deploy. Worker config is in `wrangler.jsonc`; the worker is `worker/index.js`.

## Structure
- `app/` pages (home, blog, blueprints, books, newsletter, about, ask, contact, legal)
- `components/` shared UI
- `blog/` Markdown articles
- `utils/` blog helpers and `site.ts` (newsletter and book links)
- `public/` static assets, sitemap, `_redirects`

## Newsletter signup
Set `NEWSLETTER_URL` in `utils/site.ts` once the newsletter platform is chosen.
