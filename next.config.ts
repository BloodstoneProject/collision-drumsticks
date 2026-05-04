import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'collisiondrumsticks.com' },
      { protocol: 'https', hostname: 'fqgrunquyoseksvrpvsg.supabase.co' },
    ],
  },
  async redirects() {
    return [
      { source: '/product-category/drumsticks/:path*', destination: '/shop/drumsticks', permanent: true },
      { source: '/product-category/accessories/:path*', destination: '/shop/accessories', permanent: true },
      { source: '/product-category/apparel/:path*', destination: '/shop/apparel', permanent: true },
      { source: '/membership', destination: '/backstage', permanent: true },
      { source: '/membership/', destination: '/backstage', permanent: true },
    ];
  },
};

export default nextConfig;
