import Image from 'next/image';
import Link from 'next/link';
import { BeatSequencer } from './BeatSequencer';

const HERO_IMG =
  'https://images.unsplash.com/photo-1571974599782-87624638275a?w=1920&auto=format&fit=crop&q=80';

export function Hero() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      {/* Background photograph (subtle) */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Stage lighting — warm key + crimson rim + bottom haze */}
      <div className="hero-stage" aria-hidden="true">
        <div className="spot" />
      </div>

      {/* Light-beam volumetric streaks */}
      <div className="hero-beams" aria-hidden="true">
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
      </div>

      {/* Bottom vignette so content stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-bone/60 mb-5">Collision Drumsticks</p>
            <h1 className="font-display heading-xl text-balance">Impact Your Sound.</h1>
            <p className="mt-5 max-w-xl text-lg text-bone/80 text-pretty">
              Premium American Hickory drumsticks, weight-matched in Newcastle. Trusted by
              10,000+ drummers across 80+ countries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop/drumsticks" className="btn-accent">
                Shop Drumsticks
              </Link>
              <Link href="/stick-finder" className="btn-inverted">
                Find Your Stick
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <BeatSequencer />
          </div>
        </div>
      </div>
    </section>
  );
}
