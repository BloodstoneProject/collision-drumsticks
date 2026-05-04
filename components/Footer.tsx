import Link from 'next/link';
import { NewsletterForm } from './NewsletterForm';

const FOOTER_NAV = [
  {
    title: 'Shop',
    links: [
      { label: 'Drumsticks', href: '/shop/drumsticks' },
      { label: 'Custom Engraved', href: '/custom' },
      { label: 'Bundles', href: '/shop/bundles' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'Apparel', href: '/shop/apparel' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Artists', href: '/artists' },
      { label: 'Endorsements', href: '/endorsements' },
      { label: 'Backstage', href: '/backstage' },
      { label: 'Affiliates', href: '/affiliates' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Stick Finder', href: '/stick-finder' },
      { label: 'How We Make Sticks', href: '/how-we-make-our-sticks' },
      { label: 'Resources', href: '/resources' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping & Delivery', href: '/shipping-delivery' },
      { label: 'Returns & Exchanges', href: '/returns-exchanges' },
      { label: 'Wholesale', href: '/wholesale' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms-conditions' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-display text-3xl mb-4">COLLISION</div>
            <p className="text-sm text-stone mb-6 max-w-sm">
              Premium American Hickory drumsticks, crafted in Newcastle, UK. Trusted by 10,000+
              drummers across 80+ countries.
            </p>
            <div className="mb-6">
              <p className="eyebrow !text-stone mb-3">Impact your inbox</p>
              <NewsletterForm variant="footer" />
            </div>
            <div className="flex gap-4">
              {[
                ['Instagram', 'https://www.instagram.com/collisiondrumsticks/'],
                ['Facebook', 'https://www.facebook.com/CollisionDrumsticks/'],
                ['TikTok', 'https://www.tiktok.com/@collisiondrumsticks'],
                ['YouTube', 'https://www.youtube.com/channel/UCZdYFKk_P7kQEDfSuusyPgA'],
                ['X', 'https://twitter.com/CollisionSticks'],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-stone hover:text-bone"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="eyebrow !text-stone mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-bone/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-stone">
          <p>© {new Date().getFullYear()} Collision Drumsticks · Newcastle, UK · sales@collisiondrumsticks.com</p>
          <div className="flex gap-3 items-center">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
            <span>Google Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
