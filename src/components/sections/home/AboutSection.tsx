// components/sections/home/AboutSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      title: "Business-Focused Solutions",
      desc: "Tailored strategies aligned with your revenue goals.",
      icon: CheckCircle2,
      color: "text-emerald-400 bg-emerald-500/10"
    },
    {
      title: "Modern Technologies",
      desc: "Architected using high-performance Next.js, Cloud, and AI systems.",
      icon: Zap,
      color: "text-yellow-400 bg-yellow-500/10"
    },
    {
      title: "Strong Security Standards",
      desc: "Ensuring 100% data integrity and robust system safety.",
      icon: ShieldCheck,
      color: "text-cyan-400 bg-cyan-500/10"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Stats Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

            {/* Stat 1 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-2">15+</span>
              <span className="text-gray-300 font-medium text-sm">Years Experience</span>
              <div className="h-1 w-10 bg-indigo-500 rounded-full mt-4" />
            </div>

            {/* Stat 2 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center mt-6">
              <span className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">200+</span>
              <span className="text-gray-300 font-medium text-sm">Projects Delivered</span>
              <div className="h-1 w-10 bg-cyan-400 rounded-full mt-4" />
            </div>

            {/* Stat 3 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center -mt-6">
              <span className="text-4xl md:text-5xl font-black text-purple-400 mb-2">95%</span>
              <span className="text-gray-300 font-medium text-sm">Client Retention</span>
              <div className="h-1 w-10 bg-purple-400 rounded-full mt-4" />
            </div>

            {/* Stat 4 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-2">500+</span>
              <span className="text-gray-300 font-medium text-sm">Happy Customers</span>
              <div className="h-1 w-10 bg-indigo-500 rounded-full mt-4" />
            </div>

          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Who We Are
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Transforming Ambition into <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
                High-Performance IT Solutions
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
              Jaitrrm Private Limited is a technology-driven IT solutions company specializing in full-stack software development, smart AI integration, and digital transformation. 
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              Founded with a passion for technological innovation, JPL has grown into a premium digital partner. We help businesses optimize operations, engineer fast systems, and capture major market opportunities through tailored IT services.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`p-2.5 rounded-lg shrink-0 ${h.color}`}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="px-6 py-3.5 rounded-full border border-indigo-500/30 hover:border-indigo-400 text-white font-semibold transition-all duration-300 flex items-center gap-2 group text-sm"
            >
              Read Our Full Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
