// app/services/page.tsx
// export default function ServicesPage() {
//     return (
//       <div className="min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
//           <p className="text-gray-300 text-lg">Explore our comprehensive range of services.</p>
//         </div>
//       </div>
//     );
//   }



'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E0F19] text-gray-300 py-20">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-70">
        <Image
          src="/images/Ellipse-2.png"
          alt="Background Ellipse"
          width={500}
          height={500}
          className="w-auto h-auto max-h-[70vh] object-contain"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto max-w-7xl md:px-12 lg:px-24">
        <Divider text="Our Services" />

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          Explore Our Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Service Categories */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Software Development</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="hover:text-indigo-300">Custom Software Development</Link></li>
              <li><Link href="/services/web-development">Enterprise Application Development</Link></li>
              <li><Link href="/services/web-development">SaaS Solutions</Link></li>
              <li><Link href="/services/web-development">API Development & Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Web Development</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development">Corporate Websites</Link></li>
              <li><Link href="/services/web-development">Web Applications</Link></li>
              <li><Link href="/services/web-development">Progressive Web Apps</Link></li>
              <li><Link href="/services/web-development">E-Commerce Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Mobile App Development</h3>
            <ul className="space-y-2">
              <li><Link href="/services/mobile-apps">Android & iOS Apps</Link></li>
              <li><Link href="/services/mobile-apps">Cross-platform Apps</Link></li>
              <li><Link href="/services/mobile-apps">On-demand Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">AI, ML & Data Science</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-ml">AI Solutions</Link></li>
              <li><Link href="/services/ai-ml">Machine Learning Models</Link></li>
              <li><Link href="/services/ai-ml">NLP & Chatbots</Link></li>
              <li><Link href="/services/ai-ml">Computer Vision</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
