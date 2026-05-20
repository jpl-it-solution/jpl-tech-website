// components/sections/home/CallToActionSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CloudLightning } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        {/* Glow Panel Wrapper */}
        <div className="glass-panel p-12 md:p-16 rounded-3xl border border-indigo-500/20 text-center max-w-5xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-fuchsia-500/5 z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* CTA Icon */}
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
              <CloudLightning className="w-8 h-8 text-cyan-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
              Start Your Digital <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Transformation</span> Today
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              Leverage our expert software architectures, custom web and mobile development, and smart AI models to scale your business operations and delight your users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact-us"
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-bold transition-all duration-300 shadow-xl shadow-white/10 flex items-center justify-center gap-2 group text-sm"
              >
                Contact Us Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all duration-300 text-sm flex items-center justify-center"
              >
                View Our Portfolio
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;
