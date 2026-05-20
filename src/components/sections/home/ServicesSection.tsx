// components/sections/home/ServicesSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Palette, 
  BrainCircuit, 
  CloudLightning, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Software Development",
      desc: "Custom Enterprise applications, secure API architectures, and powerful SaaS systems.",
      icon: Code2,
      color: "text-indigo-400 border-indigo-500/20"
    },
    {
      title: "Web Development",
      desc: "Stunning, high-conversion corporate sites, custom web apps, and SEO-optimized e-commerce platforms.",
      icon: Globe,
      color: "text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Mobile App Development",
      desc: "Native iOS & Android development, cross-platform apps using Flutter and React Native.",
      icon: Smartphone,
      color: "text-emerald-400 border-emerald-500/20"
    },
    {
      title: "UI/UX & Creative Design",
      desc: "User-centric interfaces, high-fidelity branding, motion graphics, and creative vector styling.",
      icon: Palette,
      color: "text-pink-400 border-pink-500/20"
    },
    {
      title: "AI, ML & Data Science",
      desc: "Advanced neural networks, intelligent NLP chatbots, computer vision systems, and Generative AI.",
      icon: BrainCircuit,
      color: "text-purple-400 border-purple-500/20"
    },
    {
      title: "Digital Transformation",
      desc: "Custom cloud solutions (AWS/Azure/GCP), secure ERP/CRM automation, and automated DevOps pipes.",
      icon: CloudLightning,
      color: "text-amber-400 border-amber-500/20"
    },
    {
      title: "Digital Marketing",
      desc: "High-ROI SEO strategies, PPC campaign optimization, and authoritative online reputation systems.",
      icon: TrendingUp,
      color: "text-rose-400 border-rose-500/20"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-black/30">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-3 block">
            Our Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Smart & Scalable Solutions Built to Lead
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From modern cloud architectures to intelligent AI interfaces, we engineer custom systems designed to accelerate your growth and dominate your industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link key={i} href="/services" className="group">
              <div className={`h-full p-8 rounded-2xl glass-card border flex flex-col items-start ${s.color}`}>
                
                {/* Icon wrapper */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                  <s.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {s.desc}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:translate-x-1.5 transition-transform">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
