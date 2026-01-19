'use client';

import Image from 'next/image';
import Divider from '@/components/ui/Divider';
import React from 'react';

const CloudServicesSection = () => {
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
        <Divider text="Cloud Services" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Empowering Businesses with Scalable Cloud Solutions
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            Our cloud services are designed to deliver agility, scalability, and security — enabling your business to innovate and grow faster.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 - Cloud Infrastructure */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-6.png"
                alt="Cloud Infrastructure"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Infrastructure</h3>
              <p className="text-gray-400">
                Build and manage scalable, reliable, and secure infrastructure across leading cloud platforms.
              </p>
            </div>

            {/* Card 2 - Cloud Migration */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-7.png"
                alt="Cloud Migration"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Migration</h3>
              <p className="text-gray-400">
                Seamlessly migrate your applications and data to the cloud with minimal downtime and disruption.
              </p>
            </div>

            {/* Card 3 - Cloud Security */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-8.png"
                alt="Cloud Security"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Security</h3>
              <p className="text-gray-400">
                Keep your data safe with advanced encryption, monitoring, and threat prevention solutions.
              </p>
            </div>

            {/* Card 4 - DevOps Services */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-9.png"
                alt="DevOps Services"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">DevOps Services</h3>
              <p className="text-gray-400">
                Accelerate your development cycles with CI/CD automation and cloud-native DevOps pipelines.
              </p>
            </div>

            {/* Card 5 - Cloud Storage */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-6.png"
                alt="Cloud Storage"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Storage</h3>
              <p className="text-gray-400">
                Store and access data securely from anywhere, with high availability and real-time backup.
              </p>
            </div>

            {/* Card 6 - SaaS Solutions */}
            <div className="p-6 shadow-lg border border-[#1B255E] bg-transparent rounded-xl hover:bg-[#1B255E]/30 transition-all duration-300">
              <Image
                src="/images/Icon-7.png"
                alt="SaaS Solutions"
                width={64}
                height={64}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">SaaS Solutions</h3>
              <p className="text-gray-400">
                Simplify operations with our scalable, user-friendly Software-as-a-Service cloud applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudServicesSection;
