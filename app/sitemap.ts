import type { MetadataRoute } from 'next';
import { getProducts, getPosts, getArtists } from '@/lib/data';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.collisiondrumsticks.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, artists, blogPosts] = await Promise.all([
    getProducts(),
    getArtists(),
    getPosts(),
  ]);
  const staticPaths = [
    '',
    '/shop',
    '/shop/drumsticks',
    '/shop/accessories',
    '/shop/apparel',
    '/shop/bundles',
    '/custom',
    '/stick-finder',
    '/artists',
    '/resources',
    '/endorsements',
    '/backstage',
    '/wholesale',
    '/affiliates',
    '/about',
    '/how-we-make-our-sticks',
    '/contact',
    '/faq',
    '/shipping-delivery',
    '/returns-exchanges',
    '/privacy-policy',
    '/terms-conditions',
    '/store-policies',
  ];

  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...products.map((p) => ({
      url: `${SITE}/product/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...artists.map((a) => ({
      url: `${SITE}/artists/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogPosts.map((b) => ({
      url: `${SITE}/resources/${b.slug}`,
      lastModified: new Date(b.published_at),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
