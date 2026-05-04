'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQ } from '@/lib/types';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="border-t border-line">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left hover:text-crimson transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg md:text-xl leading-tight">{item.question}</span>
              <span className="mt-1.5 text-mute">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-8 text-mute leading-relaxed text-pretty">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
