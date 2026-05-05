import { press } from '@/lib/seed-data';

export function PressBar() {
  const items = [...press, ...press, ...press];
  return (
    <section className="border-y border-line bg-cream overflow-hidden">
      <div className="container-page pt-8 pb-2">
        <p className="eyebrow text-center mb-6">As Featured In</p>
      </div>
      <div className="press-marquee group">
        <div className="press-marquee-track">
          {items.map((p, i) => (
            <span
              key={`${p.name}-${i}`}
              className="font-display text-xl tracking-wide text-mute hover:text-ink transition-colors px-8 shrink-0"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
      <div className="container-page pb-8" />
    </section>
  );
}
