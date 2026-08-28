<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Collision Drumsticks

**Status:** Byter client. Next.js 16.2.4.

## Architecture

**Note the layout: `lib/` is at the repo root, not under `src/`.**
`lib/`: `data.ts`, `seed-data.ts`, `types.ts`, `page-seo.ts`,
`supabase.ts`, `supabase-browser.ts`, `supabase-server.ts`.

There is a **`/cart`** route, so this carries commerce behaviour rather than
being a pure marketing site. Also `/wholesale`, `/affiliates`, `/artists`, and a
set of SEO landing pages (`/drumsticks-for-beginners`, `/best-drumsticks-uk`).

⚠️ **`lib/seed-data.ts` exists.** Confirm whether data on screen is seeded before
drawing conclusions from it.

## Do not

- Do not look for `src/lib` — it is not there.
- Do not present seed data as real.
