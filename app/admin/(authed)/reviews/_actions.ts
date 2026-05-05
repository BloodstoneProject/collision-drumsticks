'use server';

import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '@/lib/supabase';

export async function approveReview(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_reviews').update({ is_approved: true }).eq('id', id);
  revalidatePath('/admin/reviews');
  revalidatePath('/admin');
}

export async function rejectReview(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_reviews').update({ is_approved: false }).eq('id', id);
  revalidatePath('/admin/reviews');
  revalidatePath('/admin');
}

export async function deleteReview(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_reviews').delete().eq('id', id);
  revalidatePath('/admin/reviews');
  revalidatePath('/admin');
}

export async function updateReview(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa
    .from('collision_reviews')
    .update({
      title: String(formData.get('title') ?? '').trim() || null,
      body: String(formData.get('body') ?? '').trim() || null,
      rating: Number(formData.get('rating') ?? 0) || null,
    })
    .eq('id', id);
  revalidatePath('/admin/reviews');
}
