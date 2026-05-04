export type Category = 'drumsticks' | 'accessories' | 'apparel';
export type StickSize = '5A' | '5AR' | '5B' | '5BR' | '7A' | '7AR' | '2B';
export type TipType = 'wood' | 'nylon';
export type Finish = 'natural' | 'stealth-black';
export type Badge = 'most-popular' | 'best-seller' | 'staff-pick' | 'new-release';
export type EndorsementTier = 'cruise' | 'approach' | 'impact';
export type PostCategory =
  | 'tips'
  | 'gear'
  | 'community'
  | 'news'
  | 'guides'
  | 'artist-spotlight';

export type Variant = {
  variant_name: string;
  quantity_pairs: number;
  price_gbp: number;
  sku: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: Category;
  subcategory?: string;
  short_description: string;
  description: string;
  base_price_gbp: number;
  primary_image: string;
  images: string[];
  stick_size?: StickSize;
  tip_type?: TipType;
  finish?: Finish;
  length_inches?: number;
  diameter_inches?: number;
  weight_grams?: number;
  best_for?: string[];
  is_featured?: boolean;
  badge?: Badge;
  average_rating: number;
  review_count: number;
  variants: Variant[];
};

export type Artist = {
  id: string;
  name: string;
  slug: string;
  short_bio: string;
  bio: string;
  photo_url: string;
  endorsement_tier: EndorsementTier;
  genres: string[];
  country: string;
  city?: string;
  instagram_handle?: string;
  instagram_followers?: number;
  youtube_handle?: string;
  tiktok_handle?: string;
  favourite_stick: StickSize;
  testimonial_quote: string;
  is_featured?: boolean;
  joined_year: number;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: PostCategory;
  tags: string[];
  published_at: string;
  reading_time_minutes: number;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category:
    | 'general'
    | 'products'
    | 'shipping'
    | 'endorsements'
    | 'custom'
    | 'wholesale'
    | 'backstage';
  sort_order: number;
};

export type Review = {
  id: string;
  product_slug: string;
  customer_name: string;
  rating: number;
  title: string;
  body: string;
  is_verified_purchase: boolean;
  created_at: string;
};
