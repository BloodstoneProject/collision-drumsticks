import Link from 'next/link';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  cta,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  align?: 'left' | 'center';
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`flex flex-col md:flex-row items-start md:items-end gap-4 mb-10 ${align === 'center' ? 'justify-center' : 'justify-between'}`}>
      <div className={`max-w-2xl ${alignment}`}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="font-display heading-md text-balance">{title}</h2>
        {subtitle && <p className="mt-3 text-mute text-pretty">{subtitle}</p>}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 hover:text-crimson"
        >
          {cta.label} →
        </Link>
      )}
    </div>
  );
}
