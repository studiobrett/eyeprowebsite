import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eyeprova.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Eyepro | Eye Doctor in Northern Virginia & Georgetown, SC',
  description: 'Family-owned eye care for every patient — with insurance or without. Comprehensive exams, contact lenses, LASIK co-management and more. Come experience the difference.',
  openGraph: {
    title: 'Eyepro | Eye Doctor in Northern Virginia & Georgetown, SC',
    description: 'Family-owned eye care for every patient — with insurance or without. Comprehensive exams, contact lenses, LASIK co-management and more. Come experience the difference.',
    url: siteUrl,
    siteName: 'Eyepro',
    images: [{ url: '/images/eyepro-logo.webp', width: 986, height: 600, alt: 'Eyepro' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Eyepro | Eye Doctor in Northern Virginia & Georgetown, SC',
    description: 'Family-owned eye care for every patient — with insurance or without. Comprehensive exams, contact lenses, LASIK co-management and more. Come experience the difference.',
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
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
