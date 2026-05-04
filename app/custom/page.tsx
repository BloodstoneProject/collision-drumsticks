import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CustomConfigurator } from './CustomConfigurator';

export const metadata: Metadata = {
  title: 'Custom Engraved Drumsticks',
  description:
    'Design your own drumsticks. Upload your logo or text, pick your size, tip, and finish. Made in 7–10 business days.',
};

export default function CustomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Engraving"
        title="Your name. Your logo. Your sticks."
        subtitle="Six steps to a fully bespoke pair. American Hickory. Engraved up to 4cm × 1.5cm. 7–10 business day production."
        align="center"
        variant="cream"
      />
      <section className="container-page py-12 md:py-16">
        <CustomConfigurator />
      </section>
    </>
  );
}
