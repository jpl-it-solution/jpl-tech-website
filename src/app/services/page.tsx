'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import Link from 'next/link';

const ServicesPage = () => {
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
        <Divider text="Our Services" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Comprehensive Tech Solutions for Your Business
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            From custom software to AI-powered solutions, we deliver services that drive innovation and growth.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 - Web Development */}
            <Link href="/services/web-development" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-1.png"
                  alt="Web Development"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">Web Development</h3>
                <p className="text-gray-400 flex-grow">Build responsive, scalable websites and web applications tailored to your needs.</p>
              </div>
            </Link>

            {/* Card 2 - Mobile Apps */}
            <Link href="/services/mobile-apps" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-2.png"
                  alt="Mobile App Development"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">Mobile App Development</h3>
                <p className="text-gray-400 flex-grow">Create powerful iOS and Android apps that engage users and drive results.</p>
              </div>
            </Link>

            {/* Card 3 - AI & ML */}
            <Link href="/services/ai-ml" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-3.png"
                  alt="AI & Machine Learning"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">AI & Machine Learning</h3>
                <p className="text-gray-400 flex-grow">Leverage intelligent automation and predictive analytics to transform your business.</p>
              </div>
            </Link>

            {/* Card 4 - Cloud Services */}
            <Link href="/services/cloud-services" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-4.png"
                  alt="Cloud Services"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Services</h3>
                <p className="text-gray-400 flex-grow">Migrate, manage, and optimize your infrastructure with secure cloud solutions.</p>
              </div>
            </Link>

            {/* Card 5 - Consulting */}
            <Link href="/services/consulting" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-5.png"
                  alt="IT Consulting"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">IT Consulting</h3>
                <p className="text-gray-400 flex-grow">Strategic technology guidance to align your IT investments with business goals.</p>
              </div>
            </Link>

            {/* Card 6 - Custom Software */}
            <Link href="/services/web-development" className="h-full">
              <div className="h-full p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:border-indigo-500 transition-colors flex flex-col">
                <Image
                  src="/images/Icon-6.png"
                  alt="Custom Software"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold mb-3 text-white">Custom Software</h3>
                <p className="text-gray-400 flex-grow">Bespoke software solutions designed to solve your unique business challenges.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
