import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import { createMetadata, jsonLd } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ScrollProgress from '@/components/layout/ScrollProgress';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[var(--font-dm-sans),var(--font-sora),sans-serif]">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
