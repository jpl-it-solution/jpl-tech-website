'use client';
import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const MobileAppsPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-80">
        <Image src="/images/Ellipse-2.png" alt="Background" width={500} height={500} className="max-h-[70vh]" />
        <Image src="/images/Ellipse-3.png" alt="Background" width={400} height={400} className="max-h-[70vh]" />
      </div>

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Mobile App Development" />

        <div className="text-center py-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Next-Gen Mobile Solutions for Every Platform</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            From native apps to cross-platform solutions, we build fast, secure, and feature-rich mobile applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Native Apps (iOS & Android)', description: 'Custom-built mobile applications for high performance and seamless user experience.' },
              { title: 'Cross-Platform Apps', description: 'Develop once and deploy everywhere using React Native or Flutter.' },
              { title: 'On-Demand Applications', description: 'Apps for delivery, booking, ride-hailing, and more with real-time features.' },
              { title: 'UI/UX Mobile Design', description: 'Beautiful and intuitive mobile interfaces designed to engage users.' },
              { title: 'App Maintenance & Support', description: 'Regular updates, version upgrades, and 24/7 support.' },
              { title: 'API Integration', description: 'Secure integration with backend and third-party services.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#151721] hover:bg-[#1B255E] p-6 rounded-2xl transition-all">
                <h5 className="text-2xl font-semibold mb-3 text-indigo-400">{item.title}</h5>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a href="/contact-us" className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition">
              Let’s Build Your App →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MobileAppsPage;
