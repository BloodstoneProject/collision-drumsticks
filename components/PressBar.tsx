import { press } from '@/lib/seed-data';

export function PressBar() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="container-page py-8">
        <p className="eyebrow text-center mb-6">As Featured In</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {press.map((p) => (
            <span
              key={p.name}
              className="font-display text-xl tracking-wide text-mute hover:text-ink transition-colors"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
