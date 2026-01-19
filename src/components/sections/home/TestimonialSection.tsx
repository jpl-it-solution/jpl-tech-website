'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Michael Lacefield',
    role: 'Co-founder, XYZ',
    image: '/images/person.jpg',
    text: '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
  },
  {
    name: 'Jonathan Wise',
    role: 'Co-founder, XYZ',
    image: '/images/person.jpg',
    text: '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
  },
  {
    name: 'Gregory Primmer',
    role: 'Co-founder, XYZ',
    image: '/images/person.jpg',
    text: '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
  },
  {
    name: 'Howard Esparza',
    role: 'Co-founder, XYZ',
    image: '/images/person.jpg',
    text: '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background images (same style as FeatureSection) */}
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

      {/* Main Container */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        {/* Divider for section heading */}
        <Divider text="Testimonials" />

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              30k+ World Class
            </span>{' '}
            Companies
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#151721] p-8 rounded-xl shadow-lg border border-[#1F2230] hover:border-[#7B8CE5]/60 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 text-[#00C8FF]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-8">{t.text}</p>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full border border-gray-700"
                />
                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
