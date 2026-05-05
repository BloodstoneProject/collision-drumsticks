import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { CTABanner } from '@/components/CTABanner';
import { getProductsByCategory } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Apparel',
  description:
    'Heavyweight cotton tees, hoodies, and headwear from Collision Drumsticks. Cut to gig in. Printed in the UK.',
};

const FABRIC_NOTES = [
  {
    label: 'Tees',
    weight: '220 gsm',
    body: 'Heavyweight ringspun cotton with a tight rib neck. Pre shrunk, so the fit you take home is the fit you keep.',
  },
  {
    label: 'Hoodies',
    weight: '350 gsm',
    body: 'Brushed back fleece, double layered hood, kangaroo pocket sized for a notebook and your phone. Drop shoulder cut.',
  },
  {
    label: 'Caps',
    weight: 'Twill',
    body: 'Mid crown, flat or curved peak, low profile. Snapback rear. Sits flat under in ears.',
  },
  {
    label: 'Print',
    weight: 'UK',
    body: 'Plastisol screen print on every garment, cured in line. The print is on the shirt, not stuck to it.',
  },
];

const SIZING = [
  { size: 'S', chest: '34 to 36 in', length: '27 in' },
  { size: 'M', chest: '38 to 40 in', length: '28 in' },
  { size: 'L', chest: '42 to 44 in', length: '29 in' },
  { size: 'XL', chest: '46 to 48 in', length: '30 in' },
  { size: 'XXL', chest: '50 to 52 in', length: '31 in' },
];

export default async function ApparelPage() {
  const list = await getProductsByCategory('apparel');

  return (
    <>
      <PageHero
        eyebrow="Apparel"
        title="Wear the brand."
        subtitle="Tees, hoodies, and caps in heavyweight cotton. Cut to gig in."
      />

      <section className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3">Fabric notes</p>
              <h2 className="font-display heading-md text-balance">
                Heavy weight, screen printed, made to last a tour.
              </h2>
              <p className="mt-4 text-mute text-pretty">
                We sample five blanks before we put a print on one. The garment has to feel right
                under a strap or under a hoodie before it earns the logo on the back.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {FABRIC_NOTES.map((f) => (
                <div key={f.label} className="border-t border-ink pt-5">
                  <p className="font-display text-2xl">{f.label}</p>
                  <p className="eyebrow mt-1 text-crimson">{f.weight}</p>
                  <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Sizing</p>
          <h2 className="font-display heading-md text-balance">Fit guide for tees and hoodies.</h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            Cut on a relaxed unisex block. If you are between sizes and want a closer fit, take the
            smaller. Caps are one size with a snapback rear.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full max-w-2xl text-left">
            <thead>
              <tr className="border-b border-ink text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-3 pr-4 font-semibold">Size</th>
                <th className="py-3 pr-4 font-semibold">Chest</th>
                <th className="py-3 font-semibold">Body length</th>
              </tr>
            </thead>
            <tbody>
              {SIZING.map((s) => (
                <tr key={s.size} className="border-b border-line">
                  <td className="py-4 pr-4 font-display text-xl">{s.size}</td>
                  <td className="py-4 pr-4 text-sm">{s.chest}</td>
                  <td className="py-4 text-sm">{s.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTABanner
        eyebrow="Care"
        title="Wash cool, hang dry, do not tumble the print."
        body="Treat it like a gig shirt and the print will outlast the band."
        primaryCta={{ label: 'Shop drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
