import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { href: '/admin', label: 'Overview' },
    { href: '/admin/products', label: 'Products' },
    { href: '/admin/orders', label: 'Orders' },
    { href: '/admin/artists', label: 'Artists' },
    { href: '/admin/posts', label: 'Blog' },
    { href: '/admin/reviews', label: 'Reviews' },
    { href: '/admin/applications', label: 'Endorsement Applications' },
    { href: '/admin/wholesale', label: 'Wholesale' },
    { href: '/admin/subscribers', label: 'Subscribers' },
    { href: '/admin/settings', label: 'Settings' },
  ];

  return (
    <div className="container-page py-8 grid lg:grid-cols-[220px_1fr] gap-8">
      <aside className="lg:border-r lg:border-line lg:pr-6">
        <p className="eyebrow mb-4">Admin</p>
        <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="text-sm py-2 px-3 hover:bg-cream rounded whitespace-nowrap"
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
