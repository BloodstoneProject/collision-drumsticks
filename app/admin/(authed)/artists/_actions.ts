'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { slugify, commaList } from '../../_lib/utils';

function payload(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim();
  const slug = String(formData.get('slug') ?? '').trim() || slugify(name);
  return {
    name,
    slug,
    short_bio: String(formData.get('short_bio') ?? '').trim() || null,
    bio: String(formData.get('bio') ?? '').trim() || null,
    photo_url: String(formData.get('photo_url') ?? '').trim() || null,
    endorsement_tier: String(formData.get('endorsement_tier') ?? 'cruise'),
    genres: commaList(String(formData.get('genres') ?? '')),
    country: String(formData.get('country') ?? '').trim() || null,
    city: String(formData.get('city') ?? '').trim() || null,
    instagram_handle: String(formData.get('instagram_handle') ?? '').trim() || null,
    instagram_followers: formData.get('instagram_followers')
      ? Number(formData.get('instagram_followers'))
      : null,
    youtube_handle: String(formData.get('youtube_handle') ?? '').trim() || null,
    tiktok_handle: String(formData.get('tiktok_handle') ?? '').trim() || null,
    favourite_stick: String(formData.get('favourite_stick') ?? '').trim() || null,
    testimonial_quote: String(formData.get('testimonial_quote') ?? '').trim() || null,
    is_featured: formData.get('is_featured') === 'on',
    joined_year: formData.get('joined_year') ? Number(formData.get('joined_year')) : null,
  };
}

export async function createArtist(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa.from('collision_artists').insert(data).select('id').single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/artists');
  redirect(`/admin/artists/${row.id}`);
}

export async function updateArtist(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_artists').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/artists');
  revalidatePath(`/admin/artists/${id}`);
  revalidatePath(`/artists/${data.slug}`);
}

export async function deleteArtist(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_artists').delete().eq('id', id);
  revalidatePath('/admin/artists');
  redirect('/admin/artists');
}
