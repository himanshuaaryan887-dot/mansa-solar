import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import IntroExperience from '@/components/IntroExperience';
import { Header, Footer, WhatsAppFloat } from '@/components/SiteChrome';
export const metadata: Metadata = {
  title: { default: 'MANSA SOLAR ENERGY | Smarter Solar Solutions', template: '%s | MANSA SOLAR ENERGY' },
  description: 'Explore solar panels, inverters, batteries and tailored solar installation solutions for homes and businesses. Request a consultation from MANSA SOLAR ENERGY.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mansa-solar.example'),
  openGraph: { title: 'MANSA SOLAR ENERGY', description: 'Power your home and business with thoughtfully designed solar solutions.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
 return <html lang="en"><body><IntroExperience><Header/><main>{children}</main><Footer/><WhatsAppFloat/></IntroExperience></body></html>;
}
