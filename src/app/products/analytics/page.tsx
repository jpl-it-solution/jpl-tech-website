'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const AnalyticsPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-30">
        <Image
          src="/images/Ellipse-2.png"
          alt="Background Ellipse"
          width={500}
          height={500}
          className="w-auto h-auto max-h-[70vh] object-contain"
          priority
        />
      </div>

      {/* Foreground */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Analytics Suite" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Turning Data into Actionable Insights
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            Empower your organization with powerful analytics tools for data visualization, reporting, and business intelligence.
          </p>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl">
              <Image src="/images/Icon-6.png" alt="Dashboard" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Interactive Dashboards</h3>
              <p className="text-gray-400">Visualize key metrics and monitor KPIs in real-time.</p>
            </div>

            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl">
              <Image src="/images/Icon-7.png" alt="Data Insights" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Data Insights</h3>
              <p className="text-gray-400">Get actionable insights with AI-powered data analysis tools.</p>
            </div>

            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl">
              <Image src="/images/Icon-8.png" alt="Reports" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Custom Reports</h3>
              <p className="text-gray-400">Generate automated reports and track business performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPage;
