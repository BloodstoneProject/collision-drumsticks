import Image from 'next/image';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'default',
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'dark' | 'cream';
  backgroundImage?: string;
}) {
  const isDark = variant === 'dark' || Boolean(backgroundImage);
  const bg = isDark ? 'bg-ink text-bone' : variant === 'cream' ? 'bg-cream' : 'bg-bone';
  const muteColor = isDark ? 'text-bone/80' : 'text-mute';
  const eyebrowColor = isDark ? '!text-bone/60' : '';
  const wrap = align === 'center' ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl';

  return (
    <section className={`relative overflow-hidden ${bg} border-b border-line`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-40">
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </>
      )}
      <div className="container-page py-16 md:py-24 relative">
        <div className={wrap}>
          {eyebrow && <p className={`eyebrow ${eyebrowColor} mb-3`}>{eyebrow}</p>}
          <h1 className="font-display heading-lg text-balance">{title}</h1>
          {subtitle && <p className={`mt-4 text-lg ${muteColor} text-pretty`}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
