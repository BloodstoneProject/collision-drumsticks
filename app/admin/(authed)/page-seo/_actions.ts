'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';

function payload(formData: FormData) {
  const path = String(formData.get('path') ?? '').trim();
  return {
    path: path.startsWith('/') ? path : `/${path}`,
    title: String(formData.get('title') ?? '').trim() || null,
    description: String(formData.get('description') ?? '').trim() || null,
    og_image_url: String(formData.get('og_image_url') ?? '').trim() || null,
    canonical_url: String(formData.get('canonical_url') ?? '').trim() || null,
    noindex: formData.get('noindex') === 'on',
    updated_at: new Date().toISOString(),
  };
}

export async function createPageSeo(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa.from('collision_page_seo').insert(data).select('id').single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/page-seo');
  revalidatePath(data.path);
  redirect(`/admin/page-seo/${row.id}`);
}

export async function updatePageSeo(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_page_seo').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/page-seo');
  revalidatePath(`/admin/page-seo/${id}`);
  revalidatePath(data.path);
}

export async function deletePageSeo(id: string, path: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_page_seo').delete().eq('id', id);
  revalidatePath('/admin/page-seo');
  if (path) revalidatePath(path);
  redirect('/admin/page-seo');
}
