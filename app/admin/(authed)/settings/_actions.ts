'use server';

import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '@/lib/supabase';

const KNOWN_KEYS = [
  'site_title',
  'site_description',
  'announcement_bar_text',
  'announcement_bar_active',
  'free_shipping_threshold_gbp',
  'default_og_image_url',
  'backstage_doors_open',
  'twitter_handle',
  'instagram_handle',
  'sales_email',
  'support_phone',
];

export async function saveSettings(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');

  const rows = KNOWN_KEYS.map((key) => {
    const raw = formData.get(key);
    let value: unknown = raw;
    if (raw === null || raw === undefined) value = null;
    else if (typeof raw === 'string') {
      if (raw === 'on') value = true;
      else if (raw === '') value = null;
      else if (/^-?\d+(\.\d+)?$/.test(raw)) value = Number(raw);
      else value = raw;
    }
    return { key, value: value === null ? null : (value as string | number | boolean), updated_at: new Date().toISOString() };
  });

  const { error } = await supa.from('collision_settings').upsert(rows, { onConflict: 'key' });
  if (error) throw new Error(error.message);

  revalidatePath('/admin/settings');
  revalidatePath('/');
}
