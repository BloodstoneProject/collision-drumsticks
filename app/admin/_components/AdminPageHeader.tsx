import Link from 'next/link';
import type { ReactNode } from 'react';

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 pb-6 mb-6 border-b border-line">
      <div>
        {eyebrow && <p className="eyebrow mb-1">{eyebrow}</p>}
        <h1 className="font-display text-3xl md:text-4xl leading-tight">{title}</h1>
        {description && <p className="mt-2 text-sm text-mute max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2 items-center">{actions}</div>}
    </header>
  );
}

export function NewLink({ href, label = 'New' }: { href: string; label?: string }) {
  return (
    <Link href={href} className="btn-accent !py-3 !px-5 !text-[0.65rem]">
      {label}
    </Link>
  );
}
