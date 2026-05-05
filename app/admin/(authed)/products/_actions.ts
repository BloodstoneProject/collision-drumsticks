'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { slugify, commaList } from '../../_lib/utils';

function payload(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim();
  const rawSlug = String(formData.get('slug') ?? '').trim();
  const slug = rawSlug || slugify(name);

  return {
    name,
    slug,
    category: String(formData.get('category') ?? 'drumsticks'),
    subcategory: String(formData.get('subcategory') ?? '') || null,
    short_description: String(formData.get('short_description') ?? '').trim(),
    description: String(formData.get('description') ?? '').trim(),
    base_price_gbp: Number(formData.get('base_price_gbp') ?? 0) || 0,
    primary_image: String(formData.get('primary_image') ?? '').trim() || null,
    images: commaList(String(formData.get('images') ?? '')),
    stick_size: String(formData.get('stick_size') ?? '') || null,
    tip_type: String(formData.get('tip_type') ?? '') || null,
    finish: String(formData.get('finish') ?? '') || null,
    length_inches: formData.get('length_inches') ? Number(formData.get('length_inches')) : null,
    diameter_inches: formData.get('diameter_inches') ? Number(formData.get('diameter_inches')) : null,
    weight_grams: formData.get('weight_grams') ? Number(formData.get('weight_grams')) : null,
    best_for: commaList(String(formData.get('best_for') ?? '')),
    badge: String(formData.get('badge') ?? '') || null,
    stock_count: Number(formData.get('stock_count') ?? 0) || 0,
    is_featured: formData.get('is_featured') === 'on',
    is_active: formData.get('is_active') === 'on',
    meta_title: String(formData.get('meta_title') ?? '').trim() || null,
    meta_description: String(formData.get('meta_description') ?? '').trim() || null,
    og_image_url: String(formData.get('og_image_url') ?? '').trim() || null,
    canonical_url: String(formData.get('canonical_url') ?? '').trim() || null,
  };
}

export async function createProduct(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa
    .from('collision_products')
    .insert(data)
    .select('id')
    .single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/products');
  redirect(`/admin/products/${row.id}`);
}

export async function updateProduct(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_products').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/products');
  revalidatePath(`/admin/products/${id}`);
  revalidatePath(`/product/${data.slug}`);
}

export async function toggleProductActive(id: string, next: boolean) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_products').update({ is_active: next }).eq('id', id);
  revalidatePath('/admin/products');
}

export async function deleteProduct(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_products').delete().eq('id', id);
  revalidatePath('/admin/products');
  redirect('/admin/products');
}
