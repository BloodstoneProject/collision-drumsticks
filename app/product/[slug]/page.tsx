import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { RatingStars } from '@/components/RatingStars';
import { ProductActions } from './ProductActions';
import { formatPrice } from '@/lib/utils';
import {
  getAllProductSlugs,
  getProduct,
  getProductsByCategory,
  getProductReviews,
} from '@/lib/data';

export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/product/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.short_description,
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: [product.primary_image],
    },
  };
}

export default async function ProductPage({ params }: PageProps<'/product/[slug]'>) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const [productReviews, related] = await Promise.all([
    getProductReviews(product.id, 12),
    getProductsByCategory(product.category).then((items) =>
      items.filter((p) => p.id !== product.id).slice(0, 4)
    ),
  ]);

  const ratingDist = [5, 4, 3, 2, 1].map((star) => {
    const count = productReviews.filter((r) => r.rating === star).length;
    const pct = productReviews.length ? (count / productReviews.length) * 100 : 0;
    return { star, count, pct };
  });

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short_description,
    image: product.images,
    brand: { '@type': 'Brand', name: 'Collision Drumsticks' },
    sku: product.variants[0]?.sku,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.average_rating,
      reviewCount: product.review_count,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: product.base_price_gbp,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <div className="container-page py-8 md:py-12">
        <nav className="text-xs text-mute mb-6 uppercase tracking-[0.1em]">
          <Link href="/shop" className="hover:text-ink">Shop</Link>
          {' / '}
          <Link href={`/shop/${product.category}`} className="hover:text-ink capitalize">
            {product.category}
          </Link>
          {' / '}
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="relative aspect-square bg-cream border border-line">
              <Image
                src={product.primary_image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <div key={i} className="relative aspect-square bg-cream border border-line">
                    <Image src={img} alt="" fill sizes="120px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-display heading-lg text-balance">{product.name}</h1>
            <div className="mt-3">
              <RatingStars rating={product.average_rating} reviewCount={product.review_count} />
            </div>
            <p className="mt-4 text-mute text-pretty">{product.short_description}</p>
            <p className="mt-6 font-display text-3xl">{formatPrice(product.base_price_gbp)}</p>

            <ProductActions product={product} />

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-mute">
              <div className="border-t border-line pt-3">Secure Checkout</div>
              <div className="border-t border-line pt-3">3–4 Day UK Delivery</div>
              <div className="border-t border-line pt-3">Worldwide Shipping</div>
              <div className="border-t border-line pt-3">14-Day Returns</div>
            </div>
          </div>
        </div>

        {product.category === 'drumsticks' && (
          <section className="mt-20 grid md:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-3">Specifications</p>
              <dl className="border-t border-line">
                {[
                  ['Length', product.length_inches ? `${product.length_inches}"` : '-'],
                  ['Diameter', product.diameter_inches ? `${product.diameter_inches}"` : '-'],
                  ['Weight', product.weight_grams ? `${product.weight_grams}g` : '-'],
                  ['Wood', 'American Hickory'],
                  ['Tip', product.tip_type === 'nylon' ? 'Nylon' : 'Wood (oval)'],
                  ['Finish', product.finish === 'stealth-black' ? 'Stealth Black (matte)' : 'Natural oil'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3 border-b border-line text-sm">
                    <dt className="text-mute">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="eyebrow mb-3">Best For</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.best_for?.map((g) => (
                  <span
                    key={g}
                    className="text-xs uppercase tracking-[0.12em] border border-ink px-3 py-1.5"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="text-mute text-pretty">{product.description}</p>
              <Link
                href="/stick-finder"
                className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 hover:text-crimson"
              >
                Compare to Other Sticks →
              </Link>
            </div>
          </section>
        )}

        <section className="mt-20 border-t border-line pt-10">
          <p className="eyebrow mb-2">Reviews</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="font-display text-6xl">{product.average_rating.toFixed(2)}</p>
              <RatingStars rating={product.average_rating} size={18} />
              <p className="text-sm text-mute mt-2">{product.review_count} reviews</p>
              <div className="mt-6 space-y-2">
                {ratingDist.map((d) => (
                  <div key={d.star} className="flex items-center gap-2 text-xs">
                    <span className="w-8 text-mute">{d.star}★</span>
                    <div className="flex-1 h-2 bg-line">
                      <div className="h-full bg-amber" style={{ width: `${d.pct}%` }} />
                    </div>
                    <span className="w-10 text-right text-mute">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              {productReviews.length === 0 ? (
                <p className="text-mute">No reviews yet. Be the first.</p>
              ) : (
                productReviews.map((r) => (
                  <div key={r.id} className="border-b border-line pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-sm">{r.customer_name}</p>
                      <p className="text-xs text-mute">{r.created_at}</p>
                    </div>
                    <RatingStars rating={r.rating} />
                    <p className="font-display text-lg mt-2">{r.title}</p>
                    <p className="text-sm text-mute mt-1 text-pretty">{r.body}</p>
                    {r.is_verified_purchase && (
                      <p className="text-[10px] uppercase tracking-[0.15em] text-mute mt-2">
                        Verified Purchase
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-line pt-10">
          <p className="eyebrow mb-2">Drummers also bought</p>
          <h2 className="font-display heading-md mb-8">Complete the kit.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
