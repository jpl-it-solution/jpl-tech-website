'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const WebDevelopmentPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background Ellipses */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-80">
        <div>
          <Image src="/images/Ellipse-2.png" alt="Background" width={500} height={500} className="max-h-[70vh]" />
        </div>
        <div>
          <Image src="/images/Ellipse-3.png" alt="Background" width={400} height={400} className="max-h-[70vh]" />
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Web Development" />

        <div className="text-center py-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building Modern, Scalable Web Solutions</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            We design and develop high-performance websites and web applications tailored for your business needs using modern frameworks and technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Corporate & Business Websites', description: 'Professional, SEO-friendly, and responsive websites for businesses and organizations.' },
              { title: 'Web Applications & Portals', description: 'Powerful web-based solutions for enterprises, e-commerce, and startups.' },
              { title: 'Progressive Web Apps (PWA)', description: 'Lightning-fast, installable web apps that work offline and on any device.' },
              { title: 'E-commerce Solutions', description: 'B2B/B2C online stores with secure payment and inventory systems.' },
              { title: 'Custom CMS Development', description: 'Content management systems that are flexible, scalable, and easy to use.' },
              { title: 'Maintenance & Optimization', description: 'Ongoing support, updates, and performance optimization.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#151721] hover:bg-[#1B255E] p-6 rounded-2xl transition-all">
                <h5 className="text-2xl font-semibold mb-3 text-indigo-400">{item.title}</h5>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a href="/contact-us" className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition">
              Get Your Website Built →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentPage;
