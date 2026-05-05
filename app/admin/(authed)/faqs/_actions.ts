'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';

function payload(formData: FormData) {
  return {
    question: String(formData.get('question') ?? '').trim(),
    answer: String(formData.get('answer') ?? '').trim(),
    category: String(formData.get('category') ?? 'general'),
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
    is_active: formData.get('is_active') === 'on',
  };
}

export async function createFaq(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa.from('collision_faqs').insert(data).select('id').single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/faqs');
  revalidatePath('/faq');
  redirect(`/admin/faqs/${row.id}`);
}

export async function updateFaq(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_faqs').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/faqs');
  revalidatePath(`/admin/faqs/${id}`);
  revalidatePath('/faq');
}

export async function deleteFaq(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_faqs').delete().eq('id', id);
  revalidatePath('/admin/faqs');
  revalidatePath('/faq');
  redirect('/admin/faqs');
}
