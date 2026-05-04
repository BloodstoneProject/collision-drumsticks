import { stats } from '@/lib/seed-data';

export function StatsBar() {
  const items = [
    { value: `${stats.artists}+`, label: 'Endorsed Artists' },
    { value: `${stats.countries}+`, label: 'Countries' },
    { value: `${stats.customers.toLocaleString()}+`, label: 'Happy Customers' },
    { value: `${(stats.community / 1000).toFixed(0)}K`, label: 'Community Reach' },
  ];
  return (
    <section className="bg-ink text-bone py-16">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-4xl md:text-5xl text-crimson">{item.value}</p>
            <p className="eyebrow !text-bone/60 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
