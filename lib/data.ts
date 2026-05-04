// Server-side data access. Reads from Supabase when configured; falls back to
// local seed data when env vars are missing (for offline dev).

import { supabase } from './supabase';
import * as seed from './seed-data';
import type { Product, Artist, BlogPost, FAQ, Review } from './types';

const PRODUCT_FIELDS =
  'id, name, slug, description, short_description, category, subcategory, base_price_gbp, primary_image, images, stick_size, tip_type, finish, length_inches, diameter_inches, weight_grams, best_for, is_featured, badge, average_rating, review_count, sort_order';

function normaliseProduct(row: Record<string, unknown>): Product {
  return {
    id: String(row.id),
    name: String(row.name),
    slug: String(row.slug),
    description: String(row.description ?? ''),
    short_description: String(row.short_description ?? ''),
    category: row.category as Product['category'],
    subcategory: row.subcategory as string | undefined,
    base_price_gbp: Number(row.base_price_gbp ?? 0),
    primary_image: String(row.primary_image ?? ''),
    images: (row.images as string[]) ?? [],
    stick_size: row.stick_size as Product['stick_size'],
    tip_type: row.tip_type as Product['tip_type'],
    finish: row.finish as Product['finish'],
    length_inches: row.length_inches ? Number(row.length_inches) : undefined,
    diameter_inches: row.diameter_inches ? Number(row.diameter_inches) : undefined,
    weight_grams: row.weight_grams ? Number(row.weight_grams) : undefined,
    best_for: (row.best_for as string[]) ?? [],
    is_featured: Boolean(row.is_featured),
    badge: row.badge as Product['badge'],
    average_rating: Number(row.average_rating ?? 0),
    review_count: Number(row.review_count ?? 0),
    variants: [
      // No variants in WordPress payload; surface single base-price variant.
      {
        variant_name: '1 Pair',
        quantity_pairs: 1,
        price_gbp: Number(row.base_price_gbp ?? 0),
        sku: `CDS-${String(row.slug).toUpperCase()}-1`,
      },
    ],
  };
}

export async function getProducts(): Promise<Product[]> {
  if (!supabase) return seed.products;
  const { data, error } = await supabase
    .from('collision_products')
    .select(PRODUCT_FIELDS)
    .eq('is_active', true)
    .order('is_featured', { ascending: false })
    .order('review_count', { ascending: false });
  if (error || !data) return seed.products;
  return data.map(normaliseProduct);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  if (!supabase) return seed.products.filter((p) => p.category === category);
  const { data, error } = await supabase
    .from('collision_products')
    .select(PRODUCT_FIELDS)
    .eq('is_active', true)
    .eq('category', category)
    .order('review_count', { ascending: false });
  if (error || !data) return seed.products.filter((p) => p.category === category);
  return data.map(normaliseProduct);
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  if (!supabase) return seed.products.filter((p) => p.is_featured).slice(0, limit);
  const { data, error } = await supabase
    .from('collision_products')
    .select(PRODUCT_FIELDS)
    .eq('is_active', true)
    .eq('is_featured', true)
    .order('review_count', { ascending: false })
    .limit(limit);
  if (error || !data || data.length === 0) {
    // Fall back to top-rated products
    const { data: top } = supabase
      ? await supabase
          .from('collision_products')
          .select(PRODUCT_FIELDS)
          .eq('is_active', true)
          .order('review_count', { ascending: false })
          .limit(limit)
      : { data: null };
    if (top) return top.map(normaliseProduct);
    return seed.products.filter((p) => p.is_featured).slice(0, limit);
  }
  return data.map(normaliseProduct);
}

export async function getProduct(slug: string): Promise<Product | null> {
  if (!supabase) return seed.products.find((p) => p.slug === slug) ?? null;
  const { data, error } = await supabase
    .from('collision_products')
    .select(PRODUCT_FIELDS)
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();
  if (error || !data) return seed.products.find((p) => p.slug === slug) ?? null;
  return normaliseProduct(data);
}

export async function getAllProductSlugs(): Promise<string[]> {
  if (!supabase) return seed.products.map((p) => p.slug);
  const { data } = await supabase
    .from('collision_products')
    .select('slug')
    .eq('is_active', true);
  if (!data) return seed.products.map((p) => p.slug);
  return data.map((r) => r.slug as string);
}

export async function getProductReviews(productId: string, limit = 12): Promise<Review[]> {
  if (!supabase) {
    return seed.reviews.filter((r) => r.product_slug.length > 0).slice(0, limit);
  }
  const { data, error } = await supabase
    .from('collision_reviews')
    .select('id, customer_name, rating, title, body, is_verified_purchase, created_at')
    .eq('product_id', productId)
    .eq('is_approved', true)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error || !data) return [];
  return data.map((r) => ({
    id: String(r.id),
    product_slug: '',
    customer_name: String(r.customer_name),
    rating: Number(r.rating),
    title: String(r.title ?? ''),
    body: String(r.body ?? ''),
    is_verified_purchase: Boolean(r.is_verified_purchase),
    created_at: String(r.created_at).slice(0, 10),
  }));
}

const POST_FIELDS =
  'id, title, slug, excerpt, content, featured_image, author, category, tags, published_at, reading_time_minutes';

function normalisePost(row: Record<string, unknown>): BlogPost {
  return {
    id: String(row.id),
    title: String(row.title),
    slug: String(row.slug),
    excerpt: String(row.excerpt ?? ''),
    content: String(row.content ?? ''),
    featured_image: String(row.featured_image ?? ''),
    author: String(row.author ?? 'Collision Drumsticks'),
    category: (row.category as BlogPost['category']) ?? 'guides',
    tags: (row.tags as string[]) ?? [],
    published_at: String(row.published_at ?? ''),
    reading_time_minutes: Number(row.reading_time_minutes ?? 5),
  };
}

export async function getPosts(limit?: number): Promise<BlogPost[]> {
  if (!supabase) return seed.blogPosts.slice(0, limit);
  let query = supabase
    .from('collision_posts')
    .select(POST_FIELDS)
    .eq('is_published', true)
    .order('published_at', { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error || !data) return seed.blogPosts.slice(0, limit);
  return data.map(normalisePost);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  if (!supabase) return seed.blogPosts.filter((p) => p.category === category);
  const { data, error } = await supabase
    .from('collision_posts')
    .select(POST_FIELDS)
    .eq('is_published', true)
    .eq('category', category)
    .order('published_at', { ascending: false });
  if (error || !data) return seed.blogPosts.filter((p) => p.category === category);
  return data.map(normalisePost);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!supabase) return seed.blogPosts.find((p) => p.slug === slug) ?? null;
  const { data } = await supabase
    .from('collision_posts')
    .select(POST_FIELDS)
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();
  if (!data) return seed.blogPosts.find((p) => p.slug === slug) ?? null;
  return normalisePost(data);
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!supabase) return seed.blogPosts.map((p) => p.slug);
  const { data } = await supabase
    .from('collision_posts')
    .select('slug')
    .eq('is_published', true);
  if (!data) return seed.blogPosts.map((p) => p.slug);
  return data.map((r) => r.slug as string);
}

export async function getFAQs(): Promise<FAQ[]> {
  if (!supabase) return seed.faqs;
  const { data } = await supabase
    .from('collision_faqs')
    .select('id, question, answer, category, sort_order')
    .eq('is_active', true)
    .order('category')
    .order('sort_order');
  if (!data) return seed.faqs;
  return data.map((r) => ({
    id: String(r.id),
    question: String(r.question),
    answer: String(r.answer),
    category: r.category as FAQ['category'],
    sort_order: Number(r.sort_order ?? 0),
  }));
}

// Artists are not in WordPress - keep them in seed-data for now.
export async function getArtists(): Promise<Artist[]> {
  return seed.artists;
}

export async function getFeaturedArtists(limit = 3): Promise<Artist[]> {
  return seed.artists.filter((a) => a.is_featured).slice(0, limit);
}

export async function getArtist(slug: string): Promise<Artist | null> {
  return seed.artists.find((a) => a.slug === slug) ?? null;
}
