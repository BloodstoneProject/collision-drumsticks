import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Popups } from '@/components/Popups';
import { SearchModal } from '@/components/SearchModal';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const bebas = Bebas_Neue({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.collisiondrumsticks.com'),
  title: {
    default: 'Collision Drumsticks - Impact Your Sound',
    template: '%s - Collision Drumsticks',
  },
  description:
    'Premium American Hickory drumsticks, crafted for durability. Trusted by 10,000+ drummers worldwide. Free UK shipping over £49.',
  openGraph: {
    type: 'website',
    siteName: 'Collision Drumsticks',
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    google: '_crpsx848DrZoL3jsA8kYGeUOaMqUbTBDOxttvp-Nt8',
    other: {
      'ahrefs-site-verification':
        '9046f1e99f2173e45b70ab3603c5a16ea87d29ed95efcbf54a60caac3ec853f4',
      'facebook-domain-verification': 'n5s3xeemi68snp1vhoq3tbex9582p2',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink font-sans">
        <AnnouncementBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Popups />
        <SearchModal />
      </body>
    </html>
  );
}
