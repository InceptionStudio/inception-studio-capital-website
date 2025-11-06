# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Inception Studio Capital built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The site drives LP interest and allocation requests through two primary CTAs with form submissions forwarded to an external webhook.

## Development Commands

```bash
# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Architecture

**Next.js App Router structure:**
- `/app/page.tsx` - Homepage with hero, proof, thesis preview, portfolio highlights
- `/app/[page]/page.tsx` - Individual marketing pages (FAQ, thesis, portfolio, etc.)
- `/app/api/[endpoint]/route.ts` - API routes for form submissions

**Component pattern:**
- Reusable UI components live in `/components/`
- `Blocks.tsx` exports composable layout primitives (Container, Card, SectionTitle, CTAs)
- `Nav.tsx` and `Footer.tsx` are used on every page
- All pages follow the pattern: `<Nav/> → <main>sections</main> → <Footer/>`

**Form submission flow:**
1. `/invest` page uses HubSpot embedded form for investor applications
2. Form loads dynamically via HubSpot Forms API
3. Submissions handled entirely by HubSpot (Portal ID: 23586544)

## Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional) - Google Analytics Measurement ID (format: G-XXXXXXXXXX). If unset, analytics will not be tracked.
- `FORWARD_WEBHOOK_URL` (optional) - Webhook URL to forward form submissions. If unset, API routes still return success but don't forward data.

## Styling

- Tailwind CSS with dark theme (neutral-950 background, teal/cyan accents)
- Utility classes defined in `globals.css` (`.btn`, `.card`, `.eyebrow`, etc.)
- Gradient overlays and blur effects for visual depth
- Responsive grid layouts with mobile-first breakpoints

## Deployment

Designed for Vercel:
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `FORWARD_WEBHOOK_URL` in Vercel Environment Variables
- DNS for **inceptionstudio.capital** should point to Vercel
- Zero build config needed (Next.js auto-detected)

## Key Pages

- `/` - Home (hero, KPIs, thesis, portfolio, commit CTA)
- `/invest` - Primary CTA with HubSpot embedded form for investor applications
- `/thesis`, `/portfolio`, `/faq` - Supporting content pages
- `/privacy`, `/legal` - Compliance pages
