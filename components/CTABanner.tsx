import Link from 'next/link';

export function CTABanner({
  eyebrow = 'Take Your Stage',
  title,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink text-bone">
      <div className="container-page py-20 md:py-28 text-center">
        <p className="eyebrow !text-bone/60 mb-4">{eyebrow}</p>
        <h2 className="font-display heading-lg max-w-3xl mx-auto text-balance">{title}</h2>
        {body && <p className="mt-4 max-w-xl mx-auto text-bone/80 text-pretty">{body}</p>}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link href={primaryCta.href} className="btn-accent">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-inverted">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
