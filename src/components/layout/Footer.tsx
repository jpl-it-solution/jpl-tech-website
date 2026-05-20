// components/layout/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A12] text-gray-300 py-20 border-t border-white/5">
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo/jpl-logo.png"
                alt="JPL Logo"
                width={160}
                height={55}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Jaitrrm Private Limited (JPL) is a future-ready technology company delivering smart, scalable, and secure digital solutions. We help startups, SMEs, and enterprises transform ideas into powerful digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition">Our Services</Link></li>
              <li><Link href="/technology" className="hover:text-indigo-400 transition">Technology Stack</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/portfolio" className="hover:text-indigo-400 transition">Featured Portfolio</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-400 transition">Careers</Link></li>
              <li><Link href="/contact-us" className="hover:text-indigo-400 transition">Get In Touch</Link></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Legal & Help</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/terms-and-conditions" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link href="/contact-us" className="hover:text-indigo-400 transition">Client Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Jaitrrm Private Limited (JPL). All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="hover:text-white transition">LinkedIn</span>
            <span className="hover:text-white transition">Instagram</span>
            <span className="hover:text-white transition">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
