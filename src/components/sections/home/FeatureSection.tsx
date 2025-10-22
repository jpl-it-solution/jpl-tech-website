// components/sections/home/FeatureSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import {
  CpuChipIcon,
} from '@heroicons/react/24/outline'

const FeatureSection = () => {
    return (
        <section className="relative overflow-hidden my-16">
            {/* Background images */}
            <div className="absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center">
                {/* First image - Ellipse-1 */}
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
                {/* Second image - Ellipse-4 - positioned below Ellipse-1 */}
                <div className="">
                    <Image
                        src="/images/Ellipse-4.png"
                        alt="Background Ellipse 4"
                        width={400}
                        height={400}
                        className="w-auto h-auto max-h-[70vh] object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Content container with z-index to appear above background images */}
                <div className="relative z-10">
                    {/* Divider */}
                    <Divider text="Features" />

                    {/* Content */}
                    <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                        <div data-aos="fade-down">
                            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">
                                Empowering Industries with Intelligent Automation Discover More
                            </h2>
                            <p className="mb-8 px-16 font-extralight text-gray-500 sm:px-16 lg:px-48 dark:text-gray-400">
                                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                            </p>
                        </div>

                        {/* Image and Features Grid */}
                        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                {/* Image Section */}
                                <div className="flex-[2] min-w-0" data-aos="fade-right">
                                    <img
                                        src="/images/white-robot-cyborg-hand-pressing-a-keyboard-on-a-l-2021-12-09-15-29-51-utc-1.jpg"
                                        className="w-full h-auto shadow-lg"
                                        width={650}
                                        height={320}
                                        alt="white-robot-cyborg-hand-pressing-a-keyboard"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 min-w-0 space-y-8" data-aos="fade-left">
                                    {/* Machine Learning */}
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div>
                                                <CpuChipIcon className="size-12 text-[#1B255E] dark:text-[#A6EFFB]" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Machine Learning
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sensor Integration */}
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div>
                                                <CpuChipIcon className="size-12 text-[#1B255E] dark:text-[#A6EFFB]" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Sensor Integration
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Computer Vision */}
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div>
                                                <CpuChipIcon className="size-12 text-[#1B255E] dark:text-[#A6EFFB]" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Computer Vision
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status card */}
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="py-16 px-6 shadow-lg bg-[#151721] transform flex items-center flex-col justify-center min-h-[200px]"
                                data-aos="fade-up" data-aos-delay="100">
                                <h1 className="text-5xl font-bold mb-4 text-white">64K +</h1>
                                <p className="text-gray-300">
                                    Success Projects
                                </p>
                            </div>
                            <div className="py-16 px-6 shadow-lg bg-[#7B8CE5] transform flex items-center flex-col justify-center min-h-[200px]"
                                data-aos="zoom-in" data-aos-delay="200">
                                <h1 className="text-5xl font-bold mb-4 text-white">54 +</h1>
                                <p className="text-gray-300">
                                    Expert Team
                                </p>
                            </div>
                            <div className="py-16 px-6 shadow-lg bg-[#151721] transform flex items-center flex-col justify-center min-h-[200px]"
                                data-aos="fade-up" data-aos-delay="300">
                                <h1 className="text-5xl font-bold mb-4 text-white">36K +</h1>
                                <p className="text-gray-300">
                                    Satisfied Clients
                                </p>
                            </div>
                            <div className="py-16 px-6 shadow-lg bg-[#151721] transform flex items-center flex-col justify-center min-h-[200px]"
                                data-aos="fade-up" data-aos-delay="400">
                                <h1 className="text-5xl font-bold mb-4 text-white">25 +</h1>
                                <p className="text-gray-300">
                                    Awards Winning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;