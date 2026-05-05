import Link from 'next/link';

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className = '',
  variant = 'light',
}: {
  items: Crumb[];
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href } : {}),
    })),
  };

  const palette =
    variant === 'dark'
      ? {
          base: 'text-bone/60',
          link: 'hover:text-bone',
          current: 'text-bone',
          sep: 'text-bone/30',
        }
      : {
          base: 'text-mute',
          link: 'hover:text-ink',
          current: 'text-ink',
          sep: 'text-stone',
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-xs uppercase tracking-[0.1em] ${palette.base} ${className}`}
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={`${c.label}-${i}`}>
              {c.href && !isLast ? (
                <Link href={c.href} className={`${palette.link} transition-colors`}>
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? palette.current : ''}>{c.label}</span>
              )}
              {!isLast && <span className={`mx-2 ${palette.sep}`}>/</span>}
            </span>
          );
        })}
      </nav>
    </>
  );
}
