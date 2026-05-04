'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const NAV = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'All Drumsticks', href: '/shop/drumsticks' },
      { label: 'Reach Series', href: '/shop/drumsticks?subcategory=reach-series' },
      { label: 'Stealth Black', href: '/shop/drumsticks?subcategory=stealth' },
      { label: 'Nylon Tip', href: '/shop/drumsticks?subcategory=nylon-tip' },
      { label: 'Custom Engraved', href: '/custom' },
      { label: 'Bundles', href: '/shop/bundles' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'Apparel', href: '/shop/apparel' },
    ],
  },
  { label: 'Stick Finder', href: '/stick-finder' },
  { label: 'Artists', href: '/artists' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'All Posts', href: '/resources' },
      { label: 'Gear Guides', href: '/resources/category/gear' },
      { label: 'Tips', href: '/resources/category/tips' },
      { label: 'Artist Spotlights', href: '/resources/category/artist-spotlight' },
      { label: 'How We Make Sticks', href: '/how-we-make-our-sticks' },
    ],
  },
  { label: 'Endorsements', href: '/endorsements' },
  { label: 'Backstage', href: '/backstage' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-bone border-b border-line">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="font-display text-2xl tracking-wide text-ink">
          COLLISION
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setHover(item.label)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] hover:text-crimson transition-colors py-2"
              >
                {item.label}
              </Link>
              {item.children && hover === item.label && (
                <div className="absolute top-full left-0 min-w-[220px] bg-bone border border-line shadow-md py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-xs font-medium hover:bg-cream transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/shop" aria-label="Search" className="hidden md:inline-flex p-2 hover:text-crimson">
            <Search size={18} />
          </Link>
          <Link href="/my-account" aria-label="Account" className="hidden md:inline-flex p-2 hover:text-crimson">
            <User size={18} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative p-2 hover:text-crimson">
            <ShoppingBag size={18} />
            <span className="absolute -top-0 -right-0 bg-crimson text-bone text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden p-2"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-bone lg:hidden">
          <div className="container-page flex items-center justify-between h-16 border-b border-line">
            <Link href="/" className="font-display text-2xl" onClick={() => setOpen(false)}>
              COLLISION
            </Link>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <nav className="container-page py-8 flex flex-col gap-4">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl py-2 hover:text-crimson"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1 mb-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-mute hover:text-ink py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
