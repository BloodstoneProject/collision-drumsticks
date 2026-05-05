'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const SHOP_MEGA = {
  categories: [
    { label: 'All drumsticks', body: '7 models, two finishes, two tip types', href: '/shop/drumsticks' },
    { label: 'Accessories', body: 'Bags, pads, keys, grip wax', href: '/shop/accessories' },
    { label: 'Apparel', body: 'Heavyweight tees, hoodies, caps', href: '/shop/apparel' },
    { label: 'Bundles & subscribe', body: 'Free shipping packs and Subscribe & Save', href: '/shop/bundles' },
  ],
  guides: [
    { label: 'For jazz', href: '/drumsticks-for-jazz' },
    { label: 'For rock', href: '/drumsticks-for-rock' },
    { label: 'For metal', href: '/drumsticks-for-metal' },
    { label: 'For beginners', href: '/drumsticks-for-beginners' },
  ],
  comparisons: [
    { label: '5A vs 5B', href: '/compare/5a-vs-5b' },
    { label: 'Wood vs nylon tip', href: '/compare/wood-tip-vs-nylon-tip' },
    { label: 'Natural vs Stealth Black', href: '/compare/natural-vs-stealth-black' },
    { label: 'Custom engraved', href: '/custom' },
  ],
};

const NAV = [
  { label: 'Shop', href: '/shop', mega: 'shop' as const },
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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if (isCmdK) {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('collision:open-search'));
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function openSearch() {
    document.dispatchEvent(new CustomEvent('collision:open-search'));
  }

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
              onMouseEnter={() => (item.children || item.mega) && setHover(item.label)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] hover:text-crimson transition-colors py-2"
              >
                {item.label}
              </Link>
              {item.mega === 'shop' && hover === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-bone border border-line shadow-xl">
                  <div className="grid grid-cols-12 gap-px bg-line">
                    <div className="col-span-6 bg-bone p-6">
                      <p className="eyebrow mb-4">Categories</p>
                      <ul className="space-y-3">
                        {SHOP_MEGA.categories.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="group block hover:text-crimson"
                            >
                              <p className="font-display text-lg leading-tight group-hover:text-crimson transition-colors">
                                {c.label}
                              </p>
                              <p className="text-xs text-mute mt-0.5">{c.body}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-3 bg-bone p-6">
                      <p className="eyebrow mb-4">Buyer guides</p>
                      <ul className="space-y-2">
                        {SHOP_MEGA.guides.map((g) => (
                          <li key={g.href}>
                            <Link
                              href={g.href}
                              className="text-sm hover:text-crimson"
                            >
                              {g.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-3 bg-bone p-6">
                      <p className="eyebrow mb-4">Compare</p>
                      <ul className="space-y-2">
                        {SHOP_MEGA.comparisons.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="text-sm hover:text-crimson"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-cream px-6 py-3 flex items-center justify-between border-t border-line">
                    <p className="text-xs text-mute">Free UK shipping over £49</p>
                    <Link href="/stick-finder" className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson hover:text-crimson-deep">
                      Take the stick finder &rarr;
                    </Link>
                  </div>
                </div>
              )}
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
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search"
            className="hidden md:inline-flex items-center gap-2 p-2 hover:text-crimson"
          >
            <Search size={18} />
            <span className="hidden xl:inline text-[0.65rem] uppercase tracking-[0.15em] font-semibold text-mute border border-line px-1.5 py-0.5">
              ⌘K
            </span>
          </button>
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
                {item.mega === 'shop' && (
                  <div className="ml-4 flex flex-col gap-1 mb-3">
                    {[
                      ...SHOP_MEGA.categories,
                      ...SHOP_MEGA.guides,
                      ...SHOP_MEGA.comparisons,
                    ].map((child) => (
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
