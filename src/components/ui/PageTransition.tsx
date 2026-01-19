'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  onAnimationComplete?: () => void;
}

export default function PageTransition({ onAnimationComplete }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayPath, setDisplayPath] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Standardize path ending for comparison (optional but good for base paths)
    const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    // Check if we are on home page (considering potential base path)
    const isHome = normalizedPath === '/' || normalizedPath === '/jpl-tech-website';

    // Skip transition for home page
    if (isHome) {
      setIsLoading(false);
      setDisplayPath(pathname);
      return;
    }

    // Show transition when route changes (for non-home pages)
    setIsLoading(true);
    setDisplayPath(pathname);

    // Hide transition after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Call the callback if provided
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, onAnimationComplete]);

  if (!isLoading) return null;

  const getPageName = (path: string) => {
    const routes: { [key: string]: string } = {
      '/': 'Home',
      '/about-us': 'About Us',
      '/services': 'Services',
      '/products': 'Products',
      '/careers': 'Careers',
      '/contact-us': 'Contact Us',
      '/technology': 'Technology',
      '/portfolio': 'Portfolio',
      '/blog': 'Blog'
    };

    return routes[path] || 'Loading...';
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0E0F19] via-[#1A1B2E] to-[#16213E] flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7B8CE5]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#A6EFFB]/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#7B8CE5]/5 rounded-full animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Geometric Logo Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-[#7B8CE5]/20 rounded-full blur-xl animate-ping"></div>

          {/* Main Geometric Logo */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="relative w-32 h-32 mx-auto">
              {/* Central JPL Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#7B8CE5] to-[#A6EFFB] bg-clip-text text-transparent animate-pulse">
                  JPL
                </span>
              </div>

              {/* Rotating Geometric Shapes */}
              <div className="absolute inset-0">
                {/* Outer Square */}
                <div className="absolute inset-2 border-2 border-[#7B8CE5]/40 rounded-lg animate-spin" style={{ animationDuration: '4s' }}></div>

                {/* Middle Diamond */}
                <div className="absolute inset-4 border border-[#A6EFFB]/30 rotate-45 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>

                {/* Inner Triangle */}
                <div className="absolute inset-6 border border-[#7B8CE5]/50 animate-spin" style={{ animationDuration: '2s' }}></div>

                {/* Corner Dots */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#7B8CE5] rounded-full animate-ping"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#A6EFFB] rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#A6EFFB] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#7B8CE5] rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Name */}
        <div className="transform transition-all duration-500 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">
            {getPageName(displayPath)}
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-[#7B8CE5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-[#A6EFFB] rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-[#7B8CE5] rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7B8CE5] to-[#A6EFFB] rounded-full animate-loading-bar"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              backgroundColor: i % 2 === 0 ? '#7B8CE5' : '#A6EFFB',
              opacity: 0.6,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-[#7B8CE5] rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border border-[#A6EFFB] rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-[#7B8CE5] animate-pulse"></div>
      </div>
    </div>
  );
}
