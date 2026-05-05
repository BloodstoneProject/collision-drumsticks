'use client';

import { createBrowserClient } from '@supabase/ssr';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

let cached: ReturnType<typeof createBrowserClient> | null = null;

export function getSupabaseBrowser() {
  if (cached) return cached;
  cached = createBrowserClient(URL, KEY);
  return cached;
}
