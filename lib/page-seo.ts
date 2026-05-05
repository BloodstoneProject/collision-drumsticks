import type { Metadata } from 'next';
import { supabase } from './supabase';

export type PageSeoOverride = {
  path: string;
  title: string | null;
  description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  noindex: boolean;
};

export async function getPageSeo(path: string): Promise<PageSeoOverride | null> {
  if (!supabase) return null;
  const { data } = await supabase
    .from('collision_page_seo')
    .select('path, title, description, og_image_url, canonical_url, noindex')
    .eq('path', path)
    .maybeSingle();
  return data as PageSeoOverride | null;
}

export function applyPageSeo(base: Metadata, override: PageSeoOverride | null): Metadata {
  if (!override) return base;
  const out: Metadata = { ...base };
  if (override.title) out.title = override.title;
  if (override.description) out.description = override.description;
  if (override.canonical_url) {
    out.alternates = { ...(base.alternates ?? {}), canonical: override.canonical_url };
  }
  if (override.og_image_url) {
    const baseOg = (base.openGraph ?? {}) as Record<string, unknown>;
    out.openGraph = { ...baseOg, images: [override.og_image_url] };
  }
  if (override.noindex) {
    const baseRobots = (base.robots ?? {}) as Record<string, unknown>;
    out.robots = { ...baseRobots, index: false, follow: false };
  }
  return out;
}

export async function getSiteSettings(): Promise<Record<string, unknown>> {
  if (!supabase) return {};
  const { data } = await supabase.from('collision_settings').select('key, value');
  const out: Record<string, unknown> = {};
  (data ?? []).forEach((r: { key: string; value: unknown }) => {
    out[r.key] = r.value;
  });
  return out;
}
