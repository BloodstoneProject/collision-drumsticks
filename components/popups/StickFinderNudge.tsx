'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { dismissFinder, isFinderDismissed } from './state';

const DELAY_MS = 25000;

export function StickFinderNudge({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isFinderDismissed()) return;
    const isShop = pathname === '/shop' || pathname.startsWith('/shop/');
    if (!isShop) return;
    const t = window.setTimeout(() => {
      if (!isFinderDismissed()) setOpen(true);
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, [pathname]);

  function close() {
    dismissFinder();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="complementary"
      aria-label="Stick finder suggestion"
      className="fixed bottom-4 right-4 z-[90] w-[min(360px,calc(100vw-2rem))] bg-bone border border-ink shadow-2xl"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Dismiss"
        className="absolute top-2 right-2 p-1.5 text-mute hover:text-ink"
      >
        <X size={16} />
      </button>
      <div className="p-5 pr-10">
        <p className="eyebrow text-crimson">Stick finder</p>
        <p className="mt-2 font-display text-xl leading-tight text-balance">
          Not sure which model? Take the 60 second quiz.
        </p>
        <p className="mt-2 text-xs text-mute text-pretty">
          Six questions and we land you on the right pair from our seven model lineup.
        </p>
        <div className="mt-4 flex gap-2">
          <Link href="/stick-finder" onClick={close} className="btn-accent !px-5 !py-3 !text-[0.65rem]">
            Take the quiz
          </Link>
          <button
            type="button"
            onClick={close}
            className="text-[0.65rem] uppercase tracking-[0.18em] font-semibold text-mute hover:text-ink px-3"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
