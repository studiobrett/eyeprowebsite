import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eyeprova.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Eyepro | Eye Doctor in Haymarket, Winchester & Georgetown',
  description: 'Trusted optometrists serving Virginia and South Carolina. Comprehensive eye exams, contact lenses, LASIK co-management, and more. Conveniently located inside Walmart.',
  openGraph: {
    title: 'Eyepro | Eye Doctor in Haymarket, Winchester & Georgetown',
    description: 'Trusted optometrists serving Virginia and South Carolina. Comprehensive eye exams, contact lenses, LASIK co-management, and more.',
    url: siteUrl,
    siteName: 'Eyepro',
    images: [{ url: '/images/eyepro-logo.webp', width: 500, height: 346, alt: 'Eyepro' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Eyepro | Eye Doctor in Haymarket, Winchester & Georgetown',
    description: 'Trusted optometrists serving Virginia and South Carolina.',
    images: ['/images/eyepro-logo.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
