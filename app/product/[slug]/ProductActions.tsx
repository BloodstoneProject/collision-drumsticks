'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

export function ProductActions({ product }: { product: Product }) {
  const [variantSku, setVariantSku] = useState(product.variants[0]?.sku);
  const [qty, setQty] = useState(1);
  const [subscribe, setSubscribe] = useState(false);
  const [frequency, setFrequency] = useState<'4' | '8' | '12'>('4');

  const variant = product.variants.find((v) => v.sku === variantSku) ?? product.variants[0];
  const unitPrice = variant?.price_gbp ?? product.base_price_gbp;
  const subscriberPrice = subscribe ? unitPrice * 0.8 : unitPrice;
  const total = subscriberPrice * qty;

  const remainingForFreeShipping = Math.max(0, 49 - total);

  return (
    <div className="mt-6 space-y-5">
      {product.variants.length > 1 && (
        <div>
          <p className="label-field">Pack Size</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {product.variants.map((v) => (
              <button
                key={v.sku}
                type="button"
                onClick={() => setVariantSku(v.sku)}
                className={`px-3 py-3 border text-sm font-semibold transition-colors ${
                  variantSku === v.sku
                    ? 'border-ink bg-ink text-bone'
                    : 'border-line hover:border-ink'
                }`}
              >
                <div>{v.variant_name}</div>
                <div className="text-xs font-normal mt-1 opacity-80">
                  {formatPrice(v.price_gbp)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div>
          <p className="label-field">Quantity</p>
          <div className="flex items-center border border-line">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-cream">
              −
            </button>
            <span className="px-4 text-sm font-semibold">{qty}</span>
            <button type="button" onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:bg-cream">
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full btn-accent"
        data-snipcart-add-item
        data-item-id={variant?.sku}
        data-item-price={unitPrice}
        data-item-name={`${product.name} — ${variant?.variant_name ?? ''}`}
        data-item-url={`/product/${product.slug}`}
      >
        Add to Cart — {formatPrice(total)}
      </button>

      <label className="flex items-start gap-3 p-4 bg-cream border border-line cursor-pointer">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="mt-1"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm">Subscribe & Save 20%</p>
          <p className="text-xs text-mute mt-1">
            Auto-ship every {frequency} weeks. Cancel anytime. Pay {formatPrice(subscriberPrice)} per pack.
          </p>
          {subscribe && (
            <div className="mt-3 flex gap-2">
              {(['4', '8', '12'] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrequency(f)}
                  className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                    frequency === f ? 'border-ink bg-ink text-bone' : 'border-line'
                  }`}
                >
                  Every {f} weeks
                </button>
              ))}
            </div>
          )}
        </div>
      </label>

      {remainingForFreeShipping > 0 ? (
        <div className="text-xs">
          <p className="text-mute mb-1">
            Add <span className="font-semibold text-ink">{formatPrice(remainingForFreeShipping)}</span> more for free UK shipping.
          </p>
          <div className="h-1.5 bg-line">
            <div
              className="h-full bg-amber transition-all"
              style={{ width: `${(total / 49) * 100}%` }}
            />
          </div>
        </div>
      ) : (
        <p className="text-xs font-semibold text-amber">✓ Free UK shipping unlocked</p>
      )}
    </div>
  );
}
