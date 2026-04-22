# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rukun Al Zuhab Trading Co** — Corporate website for a trading company based in KSA (Kingdom of Saudi Arabia). Built with SEO and GEO (Generative Engine Optimization) as primary concerns.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, `src/` directory structure)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix UI primitives)
- **AI**: Vercel AI SDK (`ai`, `@ai-sdk/react`, `@ai-sdk/anthropic`) — installed for future features
- **Deployment**: Vercel (default)

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles (Tailwind v4 + shadcn theme)
│   ├── about/
│   │   ├── layout.tsx      # About page metadata
│   │   └── page.tsx        # About page content
│   ├── services/
│   │   ├── layout.tsx      # Services page metadata
│   │   └── page.tsx        # Services page content
│   ├── products/
│   │   ├── layout.tsx      # Products page metadata
│   │   └── page.tsx        # Products page (with category filter)
│   └── contact/
│       ├── layout.tsx      # Contact page metadata
│       └── page.tsx        # Contact page (with form)
├── components/
│   ├── header.tsx          # Sticky header with navigation + products dropdown
│   ├── footer.tsx          # Footer with support links, company info, newsletter
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # cn() utility for class merging
```

## Design System

### Color Palette (OKLCH)

**Primary**: Deep Navy Blue (`oklch(0.35 0.08 260)`) — Trust & Professionalism
**Accent**: Premium Gold (`oklch(0.75 0.12 70)`) — Luxury & Quality
**Secondary**: Muted Sage (`oklch(0.94 0.02 180)`) — Balance

### Typography

- **Sans**: Geist Sans (UI text)
- **Mono**: Geist Mono (code, metrics, timestamps)

### Custom CSS Variables

Extended color palette in `globals.css`:
- `--gold-light`, `--gold`, `--gold-dark` — Gold variants
- `--navy-light`, `--navy`, `--navy-dark` — Navy variants

## Architecture Principles

### SEO & GEO Strategy

1. **Metadata**: Exported from `layout.tsx` files (not client pages)
2. **Structured Data**: Ready for JSON-LD schema (Organization, LocalBusiness, Product)
3. **Semantic HTML**: Proper heading hierarchy, landmarks, ARIA labels
4. **Performance**: Next.js Image component, font optimization, Suspense boundaries
5. **Content-first**: Server Components by default

### RSC Boundaries

- **Server Components**: Pages without interactivity (About, Services)
- **Client Components**: Pages with hooks/state (Home, Products, Contact)
- **Metadata**: Must be in Server Components (use `layout.tsx` for client pages)

### Component Patterns

- **Server Components by default**: Only add `'use client'` when hooks or browser APIs are required
- **shadcn/ui primitives**: Prefer existing components over custom divs
- **Responsive**: Mobile-first with Tailwind breakpoints

## Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Client | Home with hero, stats, features, about preview, CTA |
| `/about` | Server | Company info, leadership, mission/vision/values |
| `/services` | Server | 6 service cards with features |
| `/products` | Client | Category filter, sample product from Excel data |
| `/contact` | Client | Contact form, info cards, map placeholder |

## Installed shadcn/ui Components

- `button`, `card`, `navigation-menu`, `select`, `separator`, `sheet`, `avatar`, `badge`, `scroll-area`

## Vercel Integration

- Deploy via Vercel CLI (`vercel deploy`) or Git integration
- Environment variables via `vercel env pull` or Vercel dashboard
- Use Edge Functions for latency-sensitive routes

## Development Notes

- **Tailwind v4**: Uses `@theme inline` for CSS custom properties
- **Radix UI unified**: Single `radix-ui` package (not individual packages)
- **Next.js 16**: Async `params`/`searchParams` in route segments
- **Metadata in client pages**: Export from `layout.tsx`, not `page.tsx`
