-- Collision Drumsticks initial schema
-- All tables prefixed `collision_`. RLS enabled.

create extension if not exists "pgcrypto";

-- Products
create table if not exists public.collision_products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  short_description text,
  category text not null check (category in ('drumsticks', 'accessories', 'apparel')),
  subcategory text,
  base_price_gbp numeric(10,2) not null,
  base_price_usd numeric(10,2),
  base_price_eur numeric(10,2),
  images text[] default '{}',
  primary_image text,
  stick_size text,
  wood_type text default 'American Hickory',
  tip_type text,
  finish text,
  length_inches numeric(5,2),
  diameter_inches numeric(5,3),
  weight_grams numeric(5,1),
  best_for text[] default '{}',
  is_active boolean default true,
  is_featured boolean default false,
  badge text,
  average_rating numeric(3,2) default 0,
  review_count integer default 0,
  sort_order integer default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Variants
create table if not exists public.collision_product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.collision_products(id) on delete cascade,
  variant_name text not null,
  quantity_pairs integer not null default 1,
  price_gbp numeric(10,2) not null,
  price_usd numeric(10,2),
  sku text unique not null,
  stock_quantity integer default 100,
  is_active boolean default true,
  sort_order integer default 0
);

-- Reviews
create table if not exists public.collision_reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.collision_products(id) on delete cascade,
  customer_name text not null,
  customer_email text,
  rating integer not null check (rating >= 1 and rating <= 5),
  title text,
  body text,
  is_verified_purchase boolean default false,
  is_approved boolean default false,
  created_at timestamptz default now()
);

-- Artists
create table if not exists public.collision_artists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  bio text,
  short_bio text,
  photo_url text,
  banner_url text,
  endorsement_tier text not null check (endorsement_tier in ('cruise', 'approach', 'impact')),
  genres text[] default '{}',
  country text,
  city text,
  instagram_handle text,
  instagram_followers integer,
  youtube_handle text,
  tiktok_handle text,
  twitter_handle text,
  website_url text,
  favourite_stick text,
  testimonial_quote text,
  is_featured boolean default false,
  is_active boolean default true,
  joined_date date,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- Blog posts
create table if not exists public.collision_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  featured_image text,
  author text default 'Collision Drumsticks',
  category text not null check (category in ('tips', 'gear', 'community', 'news', 'guides', 'artist-spotlight')),
  tags text[] default '{}',
  is_published boolean default false,
  published_at timestamptz,
  seo_title text,
  seo_description text,
  reading_time_minutes integer,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Endorsement applications
create table if not exists public.collision_endorsement_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  country text,
  city text,
  tier_applying text not null check (tier_applying in ('cruise', 'approach', 'impact')),
  instagram_url text,
  youtube_url text,
  tiktok_url text,
  facebook_url text,
  website_url text,
  combined_followers integer,
  genres text[] default '{}',
  years_playing integer,
  current_stick_brand text,
  current_stick_model text,
  gigs_per_month integer,
  band_name text,
  why_collision text,
  additional_info text,
  status text default 'pending' check (status in ('pending', 'reviewing', 'approved', 'declined')),
  created_at timestamptz default now()
);

-- Wholesale enquiries
create table if not exists public.collision_wholesale_enquiries (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  country text,
  business_type text,
  estimated_monthly_volume integer,
  message text,
  status text default 'new' check (status in ('new', 'contacted', 'quoted', 'active', 'declined')),
  created_at timestamptz default now()
);

-- Contact submissions
create table if not exists public.collision_contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

-- Newsletter subscribers
create table if not exists public.collision_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  first_name text,
  source text default 'website',
  is_active boolean default true,
  subscribed_at timestamptz default now()
);

-- Stick finder results
create table if not exists public.collision_stick_finder_results (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  genre text,
  playing_style text,
  experience_level text,
  preferred_weight text,
  recommended_stick text,
  clicked_through boolean default false,
  created_at timestamptz default now()
);

-- FAQs
create table if not exists public.collision_faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text default 'general' check (category in ('general', 'products', 'shipping', 'endorsements', 'custom', 'wholesale', 'backstage')),
  sort_order integer default 0,
  is_active boolean default true
);

-- updated_at trigger
create or replace function public.collision_set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists collision_products_updated on public.collision_products;
create trigger collision_products_updated
  before update on public.collision_products
  for each row execute function public.collision_set_updated_at();

drop trigger if exists collision_posts_updated on public.collision_posts;
create trigger collision_posts_updated
  before update on public.collision_posts
  for each row execute function public.collision_set_updated_at();

-- RLS
alter table public.collision_products enable row level security;
alter table public.collision_product_variants enable row level security;
alter table public.collision_reviews enable row level security;
alter table public.collision_artists enable row level security;
alter table public.collision_posts enable row level security;
alter table public.collision_endorsement_applications enable row level security;
alter table public.collision_wholesale_enquiries enable row level security;
alter table public.collision_contact_submissions enable row level security;
alter table public.collision_subscribers enable row level security;
alter table public.collision_stick_finder_results enable row level security;
alter table public.collision_faqs enable row level security;

-- Public read on catalog
create policy "Public read products" on public.collision_products
  for select using (is_active = true);
create policy "Public read variants" on public.collision_product_variants
  for select using (is_active = true);
create policy "Public read approved reviews" on public.collision_reviews
  for select using (is_approved = true);
create policy "Public read artists" on public.collision_artists
  for select using (is_active = true);
create policy "Public read published posts" on public.collision_posts
  for select using (is_published = true);
create policy "Public read active faqs" on public.collision_faqs
  for select using (is_active = true);

-- Public insert on lead/submission tables
create policy "Public insert applications" on public.collision_endorsement_applications
  for insert with check (true);
create policy "Public insert wholesale" on public.collision_wholesale_enquiries
  for insert with check (true);
create policy "Public insert contact" on public.collision_contact_submissions
  for insert with check (true);
create policy "Public insert subscribers" on public.collision_subscribers
  for insert with check (true);
create policy "Public insert finder" on public.collision_stick_finder_results
  for insert with check (true);
create policy "Public insert reviews" on public.collision_reviews
  for insert with check (is_approved = false);

-- Service role full access (admin panel)
create policy "Service products" on public.collision_products
  for all to service_role using (true) with check (true);
create policy "Service variants" on public.collision_product_variants
  for all to service_role using (true) with check (true);
create policy "Service reviews" on public.collision_reviews
  for all to service_role using (true) with check (true);
create policy "Service artists" on public.collision_artists
  for all to service_role using (true) with check (true);
create policy "Service posts" on public.collision_posts
  for all to service_role using (true) with check (true);
create policy "Service applications" on public.collision_endorsement_applications
  for all to service_role using (true) with check (true);
create policy "Service wholesale" on public.collision_wholesale_enquiries
  for all to service_role using (true) with check (true);
create policy "Service contact" on public.collision_contact_submissions
  for all to service_role using (true) with check (true);
create policy "Service subscribers" on public.collision_subscribers
  for all to service_role using (true) with check (true);
create policy "Service finder" on public.collision_stick_finder_results
  for all to service_role using (true) with check (true);
create policy "Service faqs" on public.collision_faqs
  for all to service_role using (true) with check (true);
