'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const SoftwareProducts = () => {
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
        <Divider text="Software Products" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Ready-to-use Software Solutions
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            Discover our suite of powerful, scalable software tools designed for
            automation, analytics, and performance.
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-6.png"
                alt="CRM Software"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">CRM Suite</h3>
              <p className="text-gray-400">
                Manage your clients, sales, and performance with one intuitive dashboard.
              </p>
            </div>

            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-7.png"
                alt="ERP Software"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">ERP System</h3>
              <p className="text-gray-400">
                Streamline operations across departments with our cloud-based ERP solution.
              </p>
            </div>

            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-8.png"
                alt="Billing Software"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Billing App</h3>
              <p className="text-gray-400">
                Simplify invoicing, payments, and tracking for small and large businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProducts;
