'use client';

import React from 'react';
import Divider from '@/components/ui/Divider';
import Image from 'next/image';

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background Ellipses (consistent with other sections) */}
      <div className="absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center">
        <div className="">
          <Image
            src="/images/Ellipse-1.png"
            alt="Background Ellipse 1"
            width={500}
            height={500}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
        <div className="">
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

      {/* Content */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 text-center relative z-10 py-24">
        <Divider text="Call To Action" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Take the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              First Step
            </span>{' '}
            Towards <br className="hidden sm:block" />
            Intelligent Automation
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed">
            Tincidunt duis suspendisse euismod integer aenean. Suspendisse aliquet diam ut
            vulputate eu metus nulla facilisi. Tristique tincidunt nisi.
          </p>

          <a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-semibold uppercase tracking-wide py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:from-purple-400 hover:to-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"

          >
            Embrace the Future
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
