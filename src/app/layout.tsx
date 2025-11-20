// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AOSInitializer from '@/components/AOSInitializer';
import PageTransition from '@/components/ui/PageTransition';

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
        {/* Page Transition Component */}
        <PageTransition />
        
        {/* Content Wrapper with Suspense - Initially Hidden */}
        <div id="content-wrapper" style={{ display: 'none', opacity: '0' }}>
          <Header />
          <main>
            <AOSInitializer />
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
        
        {/* Initial loading state */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initially hide content on page load
              document.addEventListener('DOMContentLoaded', function() {
                const contentWrapper = document.getElementById('content-wrapper');
                if (contentWrapper) {
                  contentWrapper.style.display = 'none';
                }
              });
              
              // Handle browser back/forward navigation
              window.addEventListener('pageshow', function(event) {
                const contentWrapper = document.getElementById('content-wrapper');
                if (contentWrapper) {
                  contentWrapper.style.display = 'none';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
