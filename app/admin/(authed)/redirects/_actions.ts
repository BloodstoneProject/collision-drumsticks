'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';

function payload(formData: FormData) {
  const source = String(formData.get('source') ?? '').trim();
  const destination = String(formData.get('destination') ?? '').trim();
  return {
    source: source.startsWith('/') ? source : `/${source}`,
    destination: destination.startsWith('/') || destination.startsWith('http') ? destination : `/${destination}`,
    permanent: formData.get('permanent') === 'on',
    is_active: formData.get('is_active') === 'on',
  };
}

export async function createRedirect(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa.from('collision_redirects').insert(data).select('id').single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/redirects');
  redirect(`/admin/redirects/${row.id}`);
}

export async function updateRedirect(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_redirects').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/redirects');
  revalidatePath(`/admin/redirects/${id}`);
}

export async function toggleRedirectActive(id: string, next: boolean) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_redirects').update({ is_active: next }).eq('id', id);
  revalidatePath('/admin/redirects');
}

export async function deleteRedirect(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_redirects').delete().eq('id', id);
  revalidatePath('/admin/redirects');
  redirect('/admin/redirects');
}
