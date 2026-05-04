const ITEMS = [
  { label: 'UK Made', detail: 'Newcastle, UK' },
  { label: '4.99★ Average Rating', detail: 'Across 1,500+ reviews' },
  { label: '250+ Endorsed Artists', detail: 'In 80+ countries' },
  { label: 'Free UK Shipping over £49', detail: 'Worldwide shipping available' },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-bone">
      <div className="container-page py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="font-semibold text-sm">{item.label}</p>
            <p className="text-xs text-mute mt-0.5">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
