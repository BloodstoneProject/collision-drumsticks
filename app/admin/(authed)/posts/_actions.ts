'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { slugify, commaList } from '../../_lib/utils';

function payload(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim();
  const slug = String(formData.get('slug') ?? '').trim() || slugify(title);
  const isPublished = formData.get('is_published') === 'on';
  const publishedAtRaw = String(formData.get('published_at') ?? '').trim();
  return {
    title,
    slug,
    excerpt: String(formData.get('excerpt') ?? '').trim() || null,
    content: String(formData.get('content') ?? ''),
    featured_image: String(formData.get('featured_image') ?? '').trim() || null,
    author: String(formData.get('author') ?? '').trim() || 'Collision Editorial',
    category: String(formData.get('category') ?? 'tips'),
    tags: commaList(String(formData.get('tags') ?? '')),
    reading_time_minutes:
      Number(formData.get('reading_time_minutes') ?? 0) || estimateReadingTime(String(formData.get('content') ?? '')),
    is_published: isPublished,
    published_at: publishedAtRaw ? new Date(publishedAtRaw).toISOString() : new Date().toISOString(),
    meta_title: String(formData.get('meta_title') ?? '').trim() || null,
    meta_description: String(formData.get('meta_description') ?? '').trim() || null,
    og_image_url: String(formData.get('og_image_url') ?? '').trim() || null,
    canonical_url: String(formData.get('canonical_url') ?? '').trim() || null,
  };
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export async function createPost(formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { data: row, error } = await supa.from('collision_posts').insert(data).select('id').single();
  if (error) throw new Error(error.message);
  revalidatePath('/admin/posts');
  revalidatePath('/resources');
  redirect(`/admin/posts/${row.id}`);
}

export async function updatePost(id: string, formData: FormData) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  const data = payload(formData);
  const { error } = await supa.from('collision_posts').update(data).eq('id', id);
  if (error) throw new Error(error.message);
  revalidatePath('/admin/posts');
  revalidatePath(`/admin/posts/${id}`);
  revalidatePath(`/resources/${data.slug}`);
  revalidatePath('/resources');
}

export async function togglePostPublished(id: string, next: boolean) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_posts').update({ is_published: next }).eq('id', id);
  revalidatePath('/admin/posts');
}

export async function deletePost(id: string) {
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  await supa.from('collision_posts').delete().eq('id', id);
  revalidatePath('/admin/posts');
  redirect('/admin/posts');
}
