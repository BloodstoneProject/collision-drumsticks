# Collision Drumsticks

Premium American Hickory drumsticks. Next.js 16 + Tailwind v4 + Supabase + Resend.

## Stack

- Next.js 16 (App Router, Server Components first)
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Supabase (collision_-prefixed tables, RLS enabled)
- Resend (transactional email)
- Snipcart (ecommerce — wired via data attributes in `app/product/[slug]/ProductActions.tsx`)
- Vercel deployment under scope `bloodstoneprojects`

## Local development

```bash
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, etc.
npm install
npm run dev
```

## Database

Run the initial migration once your Supabase project exists:

```bash
psql $SUPABASE_CONNECTION_STRING < supabase/migrations/0001_initial.sql
```

## Deploying

```bash
npx vercel --prod --scope bloodstoneprojects --yes
```

## Notable routes

- `/` — Homepage
- `/shop` — All products
- `/shop/drumsticks` — Drumstick category
- `/product/[slug]` — Product detail with variant selector + Subscribe & Save
- `/custom` — Custom configurator (6 steps)
- `/stick-finder` — Interactive recommendation quiz (6 steps)
- `/artists` — Roster + `/artists/[slug]` profiles
- `/resources` — Blog hub + `/resources/[slug]` posts
- `/endorsements` — Tier breakdown + multi-step application
- `/backstage` — Membership landing
- `/wholesale` — Trade enquiries + 100 Pairs Custom
- `/admin` — Site dashboard (under construction; protect via Supabase Auth before launch)

## Design system

- Black/red brand palette with cream + amber for warmth (see `app/globals.css`)
- Bebas Neue for display headlines, Inter for body
- Component primitives in `components/`
- Page heroes via `<PageHero />`, content blocks via `<SectionHeader />`, `<CTABanner />`, etc.

## Content

For Phase 1, products / artists / posts / FAQs live in `lib/seed-data.ts`. When the WordPress migration runs, swap these for Supabase reads using the shared client (`lib/supabase.ts`).
