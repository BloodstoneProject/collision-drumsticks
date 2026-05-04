import Image from 'next/image';
import Link from 'next/link';

const HERO_IMG =
  'https://images.unsplash.com/photo-1571974599782-87624638275a?w=1920&auto=format&fit=crop&q=80';

export function Hero() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Image
          src={HERO_IMG}
          alt="Collision Drumsticks"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      </div>
      <div className="container-page relative py-24 md:py-36 lg:py-44">
        <p className="eyebrow !text-bone/60 mb-6">Collision Drumsticks</p>
        <h1 className="font-display heading-xl text-balance max-w-4xl">
          Impact Your Sound.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-bone/80 text-pretty">
          Premium American Hickory drumsticks, weight-matched in Newcastle. Trusted by 10,000+
          drummers across 80+ countries.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/shop/drumsticks" className="btn-accent">
            Shop Drumsticks
          </Link>
          <Link href="/stick-finder" className="btn-inverted">
            Find Your Stick
          </Link>
        </div>
      </div>
    </section>
  );
}
