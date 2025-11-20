'use client';

import Image from 'next/image';
import Divider from '@/components/ui/Divider';
import React from 'react';
import Link from 'next/dist/client/link';

const ProductsSection = () => {
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

      {/* Foreground Content */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Our Products" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Empowering Innovation with Smart Tech Solutions
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge suite of products designed to make businesses smarter, faster, and more secure.
          </p>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 - Software Products */}
            <Link href="/products/software">
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-6.png"
                alt="Software Products"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Software Products</h3>
              <p className="text-gray-400">Ready-to-use software solutions for every business need.</p>
            </div>
            </Link>

            {/* Card 2 - AI Tools */}
            <Link href="/products/ai-tools">
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-7.png"
                alt="AI Tools"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">AI Tools</h3>
              <p className="text-gray-400">Artificial intelligence products built to revolutionize workflows.</p>
            </div>
            </Link>

            {/* Card 3 - Analytics Suite */}
            <Link href="/products/analytics">
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-8.png"
                alt="Analytics Suite"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Analytics Suite</h3>
              <p className="text-gray-400">Gain deep insights from data to make smarter decisions.</p>
            </div>
            </Link>

            {/* Card 4 - Security Solutions */}
            <Link href="/products/security">
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl">
              <Image
                src="/images/Icon-9.png"
                alt="Security Solutions"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Security Solutions</h3>
              <p className="text-gray-400">Advanced cybersecurity systems to protect your digital assets.</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
