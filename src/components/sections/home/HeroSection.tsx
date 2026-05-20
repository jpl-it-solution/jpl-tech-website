// components/sections/home/HeroSection.tsx
'use client';

import Robot from '../../../../public/images/home/robot.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] py-20 flex items-center overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-indigo-500/20 pb-16 gap-12 lg:gap-8">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Future-Ready Tech Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient-purple-cyan block mb-2">
                  Building Digital Excellence
                </span>
                for Tomorrow
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                Jaitrrm Private Limited is a leading technology company delivering smart, scalable, and secure digital solutions. We empower businesses to innovate and lead.
              </p>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We help startups, SMEs, and enterprises transform ambitious ideas into high-performance digital products, custom systems, and smart architectures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-300 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-bold transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT HERO GRAPHIC */}
          <div className="relative w-full lg:w-2/5 flex flex-col items-center lg:items-end">
            {/* Robot Image with a sleek glass background */}
            <div className="w-[85%] sm:w-[70%] lg:w-full max-w-md relative z-10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 rounded-full filter blur-2xl opacity-50 z-0" />
              <Image
                src={Robot}
                alt="Jaitrrm Tech Advanced Robotic and Software Engineering Solutions"
                width={800}
                height={800}
                className="w-full h-auto object-contain relative z-10"
                priority
              />
            </div>

            {/* Stats Card */}
            <div
              className="
                absolute
                bottom-[-20px] sm:bottom-0
                left-1/2 lg:left-6
                -translate-x-1/2 lg:translate-x-0
                w-[90%] sm:w-[280px]
                glass-card
                p-6
                z-20
                rounded-2xl
              "
              role="status"
              aria-label="Successful Projects"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-cyan-400">100</span>
                  <span className="text-4xl font-extrabold text-cyan-400">+</span>
                </div>

                <p className="text-base font-bold text-white mb-2">
                  Successful Projects
                </p>
                <p className="text-[#a4a5ab] text-xs font-light leading-relaxed">
                  Delivered cutting-edge digital systems, high-growth mobile applications, and enterprise systems globally.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
