import type { Metadata } from 'next';
import Link from 'next/link';
import { getSessionUser } from '@/lib/supabase-server';
import { signOut } from '../_actions/auth';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

const NAV_GROUPS: { label: string; items: { href: string; label: string }[] }[] = [
  {
    label: 'Overview',
    items: [{ href: '/admin', label: 'Dashboard' }],
  },
  {
    label: 'Catalog',
    items: [
      { href: '/admin/products', label: 'Products' },
      { href: '/admin/orders', label: 'Orders' },
    ],
  },
  {
    label: 'Content',
    items: [
      { href: '/admin/posts', label: 'Blog posts' },
      { href: '/admin/artists', label: 'Artists' },
      { href: '/admin/faqs', label: 'FAQs' },
      { href: '/admin/reviews', label: 'Reviews' },
    ],
  },
  {
    label: 'Inbox',
    items: [
      { href: '/admin/applications', label: 'Endorsement applications' },
      { href: '/admin/wholesale', label: 'Wholesale enquiries' },
      { href: '/admin/contact', label: 'Contact submissions' },
      { href: '/admin/subscribers', label: 'Subscribers' },
    ],
  },
  {
    label: 'SEO & site',
    items: [
      { href: '/admin/page-seo', label: 'Page SEO' },
      { href: '/admin/redirects', label: 'Redirects' },
      { href: '/admin/settings', label: 'Settings' },
    ],
  },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();

  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="hidden lg:flex lg:flex-col w-[240px] shrink-0 bg-ink text-bone min-h-screen sticky top-0">
        <div className="p-5 border-b border-bone/10">
          <Link href="/" className="font-display text-xl tracking-wide block">
            COLLISION
          </Link>
          <p className="eyebrow !text-bone/50 mt-1">Admin</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="mb-5">
              <p className="px-5 text-[0.6rem] uppercase tracking-[0.18em] text-bone/40 font-semibold mb-1.5">
                {group.label}
              </p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-5 py-1.5 text-sm text-bone/85 hover:bg-bone/5 hover:text-bone transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="p-5 border-t border-bone/10 text-xs">
          {user?.email && (
            <p className="text-bone/70 truncate" title={user.email}>{user.email}</p>
          )}
          <form action={signOut}>
            <button
              type="submit"
              className="mt-2 text-bone/60 hover:text-bone uppercase tracking-[0.15em] text-[0.65rem] font-semibold"
            >
              Sign out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 min-w-0 bg-bone">
        <header className="lg:hidden bg-ink text-bone px-5 py-3 sticky top-0 z-30">
          <details>
            <summary className="cursor-pointer flex items-center justify-between text-sm font-semibold uppercase tracking-[0.15em]">
              <span>Admin menu</span>
              <span className="text-bone/60">{user?.email}</span>
            </summary>
            <nav className="mt-3">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="mb-3">
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-bone/40 font-semibold mb-1">
                    {group.label}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 text-sm text-bone/85 hover:text-bone"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <form action={signOut} className="border-t border-bone/15 pt-3">
                <button
                  type="submit"
                  className="text-bone/70 hover:text-bone uppercase tracking-[0.15em] text-[0.65rem] font-semibold"
                >
                  Sign out
                </button>
              </form>
            </nav>
          </details>
        </header>
        <div className="px-5 md:px-8 lg:px-10 py-6 md:py-8">{children}</div>
      </main>
    </div>
  );
}
