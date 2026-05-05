import { stats } from '@/lib/seed-data';
import { CountUp } from './CountUp';

export function StatsBar() {
  const items = [
    { value: stats.artists, suffix: '+', label: 'Endorsed Artists' },
    { value: stats.countries, suffix: '+', label: 'Countries' },
    { value: stats.customers, suffix: '+', label: 'Happy Customers' },
    { value: Math.round(stats.community / 1000), suffix: 'K', label: 'Community Reach' },
  ];
  return (
    <section className="bg-ink text-bone py-16">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-4xl md:text-5xl text-crimson">
              <CountUp value={item.value} suffix={item.suffix} />
            </p>
            <p className="eyebrow !text-bone/60 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
