import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { StickFinder } from './StickFinder';

export const metadata: Metadata = {
  title: 'Stick Finder Quiz',
  description:
    'Answer six questions and we will tell you exactly which Collision drumstick is right for your playing.',
};

export default function StickFinderPage() {
  return (
    <>
      <PageHero
        eyebrow="Stick Finder"
        title="Find your stick in 60 seconds."
        subtitle="Six questions. One recommendation. We will pair your genre, style, and experience against every model we make."
        align="center"
        variant="cream"
      />
      <section className="container-page py-12 md:py-16">
        <StickFinder />
      </section>
    </>
  );
}
