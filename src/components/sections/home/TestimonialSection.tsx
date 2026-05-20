// components/sections/home/TestimonialSection.tsx
'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Working with JPL has been a game-changer for our company. Their innovative approach and commitment to quality helped us achieve our digital transformation goals successfully.",
      author: "Sneha Kapoor",
      role: "Enterprise Tech Lead"
    },
    {
      quote: "The team maintained clear communication, timely updates, and excellent project execution throughout the process. We highly recommend JPL for IT solutions.",
      author: "Aman Verma",
      role: "Operations Director"
    },
    {
      quote: "Professional team, excellent delivery, and great support.",
      author: "Maitry",
      role: "E-Commerce Founder"
    },
    {
      quote: "Highly recommended for software projects.",
      author: "Nikhil",
      role: "SaaS Product Owner"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-3 block">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Hear From Our Partners
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We measure our success by the growth of our partners. Here is what they say about Jaitrrm Private Limited (JPL).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden group">
              {/* Quote Background Accent */}
              <div className="absolute right-4 top-4 text-indigo-500/10 z-0">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                
                {/* Quote Content */}
                <p className="text-gray-300 text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div>
                  <h5 className="text-white font-bold text-base">{t.author}</h5>
                  <p className="text-indigo-400 text-xs">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
