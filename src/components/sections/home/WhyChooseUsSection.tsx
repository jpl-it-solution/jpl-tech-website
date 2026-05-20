// components/sections/home/WhyChooseUsSection.tsx
'use client';

import React from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  Flame, 
  DollarSign, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Years of Industry Experience",
      desc: "Our engineering and architectural backgrounds ensure optimal technical execution.",
      icon: Award,
      color: "text-indigo-400 bg-indigo-500/5"
    },
    {
      title: "100+ Successful Projects",
      desc: "Delivered scalable websites, custom SaaS systems, and complex apps globally.",
      icon: Flame,
      color: "text-cyan-400 bg-cyan-500/5"
    },
    {
      title: "Expert Development Team",
      desc: "Architects and senior developers utilizing state-of-the-art frameworks.",
      icon: Users,
      color: "text-emerald-400 bg-emerald-500/5"
    },
    {
      title: "On-Time Delivery",
      desc: "Structured milestone execution ensuring rapid and reliable deployment cycles.",
      icon: Clock,
      color: "text-amber-400 bg-amber-500/5"
    },
    {
      title: "Affordable Pricing",
      desc: "Flexible, cost-effective pricing packages that fit your exact business goals.",
      icon: DollarSign,
      color: "text-pink-400 bg-pink-500/5"
    },
    {
      title: "24/7 Support",
      desc: "Continuous technical maintenance, security patches, and server uptime support.",
      icon: HelpCircle,
      color: "text-rose-400 bg-rose-500/5"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-indigo-950/10 to-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-3 block">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Why Leading Innovators Partner with JPL
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We don't just build code — we build digital platforms. Here is why startups, SMEs, and global enterprises select us for engineering services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 flex gap-5 items-start hover:border-indigo-500/20 transition-all duration-300">
              
              {/* Icon Container */}
              <div className={`p-3.5 rounded-xl shrink-0 ${r.color} border border-white/5`}>
                <r.icon className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <h4 className="text-base font-bold text-white mb-2">{r.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
