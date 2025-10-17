// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AOSInitializer from '@/components/AOSInitializer';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'JPL - Innovative IT Solutions',
  description: 'Welcome to JPL, your partner in software development and digital transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans">
        {/* Keep Header, Footer, and children deterministic */}
        <Header />
        <main>
          <AOSInitializer />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}