'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0E0F19] text-gray-300 py-20">
      {/* Background Ellipses (same as Feature Section) */}
      <div className="absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center opacity-70">
        <div>
          <Image
            src="/images/Ellipse-1.png"
            alt="Background Ellipse 1"
            width={500}
            height={500}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
        <div>
          <Image
            src="/images/Ellipse-4.png"
            alt="Background Ellipse 4"
            width={400}
            height={400}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Robotiko Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Innovating intelligent automation and smart solutions for modern
              industries.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="/about-us" className="hover:text-[#A6EFFB] transition">About</Link></li>
              <li><Link href="/services" className="hover:text-[#A6EFFB] transition">Services</Link></li>
              <li><Link href="/features" className="hover:text-[#A6EFFB] transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#A6EFFB] transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-[15px]">
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Webinars</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Developer</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Documentation</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Help</h4>
            <ul className="space-y-2 text-[15px]">
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Customer Support</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Delivery Details</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#A6EFFB] transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Subscribe To Newsletter
            </h4>
            <form className="flex items-center bg-white rounded-full shadow-md max-w-md p-1">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-grow px-4 py-3 text-sm text-gray-700 focus:outline-none rounded-full"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:from-purple-400 hover:to-indigo-500 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#1F2230] pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>Copyright © 2025 Robotiko</p>
          <p className="mt-2 sm:mt-0">Designed by TokoTema</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

