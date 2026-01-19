// components/sections/home/WhyChooseUsSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";

const WhyChooseUsSection = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background images same as FeatureSection */}
      <div className="absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center">
        <div>
          <Image
            src="/images/Ellipse-1.png"
            alt="Background Ellipse 1"
            width={500}
            height={500}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
        <div>
          <Image
            src="/images/Ellipse_4.png"
            alt="Background Ellipse 4"
            width={400}
            height={400}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <div className="relative z-10">
          {/* Divider */}
          <Divider text="Why Choose Us" />

          {/* Content */}
          <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl">
                Why Our Clients Trust Us
              </h2>
              <p className="mb-8 px-16 font-extralight sm:px-16 lg:px-48">
                We deliver high-quality, AI-powered automation solutions that help industries grow faster and operate smarter.
              </p>
            </div>

            {/* Image + Content layout */}
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                {/* Text Section (Left) */}
                <div className="flex-1 min-w-0 space-y-8 text-left">
                  {/* Expertise */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <CpuChipIcon className="size-12 text-[#A6EFFB]" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="mb-3 text-2xl font-bold tracking-tight">
                        Expertise in AI & Robotics
                      </h3>
                      <p className="text-sm leading-relaxed">
                        We combine innovation and intelligence to deliver powerful automation solutions.
                      </p>
                    </div>
                  </div>

                  {/* Quality */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <CpuChipIcon className="size-12 text-[#A6EFFB]" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="mb-3 text-2xl font-bold tracking-tight">
                        High Quality Service
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Our expert team ensures each solution is tested, reliable, and scalable.
                      </p>
                    </div>
                  </div>

                  {/* Client Satisfaction */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <CpuChipIcon className="size-12 text-[#A6EFFB]" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="mb-3 text-2xl font-bold tracking-tight">
                        100% Client Satisfaction
                      </h3>
                      <p className="text-sm leading-relaxed">
                        We value long-term partnerships and ensure our clients’ success comes first.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Section (Right) */}
                <div className="flex-[1.5] relative w-full self-start">
                  <Image
                    src="/images/image.jpg"
                    alt="why choose us"
                    width={500}
                    height={1} // height will scale automatically with text height
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />

                  {/* Rating card inside the image */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[220px]">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
                    <p className="font-semibold text-gray-800">Google Review</p>
                    <p className="text-sm text-gray-600">
                      Trusted by thousands of clients worldwide.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
