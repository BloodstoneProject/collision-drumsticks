import type { MetadataRoute } from 'next';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.collisiondrumsticks.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/checkout', '/cart'] },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
