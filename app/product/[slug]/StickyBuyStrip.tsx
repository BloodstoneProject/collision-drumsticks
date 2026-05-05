'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

export function StickyBuyStrip({ product }: { product: Product }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById('product-actions');
    if (!target) return;

    let hasScrolledPast = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(false);
          hasScrolledPast = true;
        } else if (hasScrolledPast) {
          setShow(true);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  function scrollToActions(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById('product-actions')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const lowest = product.variants.length
    ? Math.min(...product.variants.map((v) => v.price_gbp))
    : product.base_price_gbp;
  const hasMulti = product.variants.length > 1;

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-0 left-0 right-0 z-40 bg-bone border-t border-line shadow-[0_-8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container-page py-3 flex items-center gap-4">
        <div className="relative w-12 h-12 bg-cream border border-line shrink-0 hidden sm:block">
          <Image
            src={product.primary_image}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-base sm:text-lg leading-tight truncate">{product.name}</p>
          <p className="text-xs text-mute">
            {hasMulti ? 'From ' : ''}
            <span className="font-semibold text-ink">{formatPrice(lowest)}</span>
          </p>
        </div>
        <a href="#product-actions" onClick={scrollToActions} className="btn-accent !py-3 !px-5 shrink-0">
          {hasMulti ? 'Choose options' : 'Add to cart'}
        </a>
      </div>
    </div>
  );
}
