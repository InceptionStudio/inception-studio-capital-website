# Inception Studio Capital — Website (No Public Deck)

Ready-to-deploy **Next.js (App Router) + Tailwind** site to drive LP FOMO and allocation requests.

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy
- Vercel: import this repo → set `FORWARD_WEBHOOK_URL` in **Environment Variables** (optional, to forward form submissions).  
- Point DNS for **inceptionstudio.capital** to Vercel.  

## Forms
- **/invest** → POST `/api/invest`
- **/interest** → POST `/api/interest`
- If `FORWARD_WEBHOOK_URL` is set, submissions are forwarded as JSON; otherwise we still return `{ ok: true }`.

## Pages
- `/` (Home): hero, KPIs, thesis preview, portfolio preview, commit strip
- `/invest` (primary CTA)
- `/interest` (secondary CTA)
- `/thesis`, `/portfolio`, `/faq`, `/privacy`, `/legal`

## Styling
- Dark, minimal, gradient accents aligned with inceptionstudio.org vibe.
- Tailwind utility classes with small helpers in `globals.css`.

## Customize
- Replace images (TODOs), add company logos, and verify metrics/wording per latest LP materials.
- Wire `FORWARD_WEBHOOK_URL` to your CRM or a serverless function that emails and stores entries.

---

_Disclaimer: Informational only; not an offer to sell or solicitation to buy any security._
