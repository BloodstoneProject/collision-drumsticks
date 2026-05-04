export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'default',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'dark' | 'cream';
}) {
  const bg = variant === 'dark' ? 'bg-ink text-bone' : variant === 'cream' ? 'bg-cream' : 'bg-bone';
  const muteColor = variant === 'dark' ? 'text-bone/70' : 'text-mute';
  const eyebrowColor = variant === 'dark' ? '!text-bone/60' : '';
  const wrap = align === 'center' ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl';

  return (
    <section className={`${bg} border-b border-line`}>
      <div className="container-page py-16 md:py-24">
        <div className={wrap}>
          {eyebrow && <p className={`eyebrow ${eyebrowColor} mb-3`}>{eyebrow}</p>}
          <h1 className="font-display heading-lg text-balance">{title}</h1>
          {subtitle && <p className={`mt-4 text-lg ${muteColor} text-pretty`}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
