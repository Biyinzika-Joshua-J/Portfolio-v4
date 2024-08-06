import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/providers/ThemeProvider';
import StoreProvider from '@/providers/StoreProvider';

import { GoogleAnalytics } from '@next/third-parties/google';

import { SiteDescription } from '@/data/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Biyinzika Joshua',
  description: SiteDescription,

  twitter: {
    card: 'summary_large_image',
    site: '@JoshJosephB',
    title: 'Indie page - A list of all my small bets',
    description: SiteDescription,
    creator: '@JoshJosephB',
    images: {
      url: 'https://github.com/Biyinzika-Joshua-J/portfolio-assets/blob/master/portfolio.png?raw=true',
      alt: 'Portfolio'
    }
  },

  openGraph: {
    title: 'Indie page - A list of all my small bets',
    description: SiteDescription,
    url: 'https://josh-codes.dev',
    siteName: 'Josh Codes',
    images: [
      {
        url: 'https://github.com/Biyinzika-Joshua-J/portfolio-assets/blob/master/portfolio.png?raw=true',
        width: 800,
        height: 600,
        alt: 'Portfolio'
      },
      {
        url: 'https://github.com/Biyinzika-Joshua-J/portfolio-assets/blob/master/portfolio.png?raw=true',
        width: 1800,
        height: 1600,
        alt: 'Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* <GoogleAnalytics gaId="G-id-here" /> */}
      </body>
    </html>
  );
}
