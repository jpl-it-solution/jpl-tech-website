// components/sections/home/AboutSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';

const AboutSection = () => {
    return (
        <section className="relative overflow-hidden my-16">

            {/* Background images */}
            <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center">
                {/* First image - Ellipse-2 */}
                <div className="">
                    <Image
                        src="/images/Ellipse-2.png"
                        alt="Background Ellipse 2"
                        width={500}
                        height={500}
                        className="w-auto h-auto max-h-[70vh] object-contain"
                        priority
                    />
                </div>

                {/* Second image - Ellipse-3 - positioned below Ellipse-2 */}
                <div className="">
                    <Image
                        src="/images/Ellipse-3.png"
                        alt="Background Ellipse 3"
                        width={400}
                        height={400}
                        className="w-auto h-auto max-h-[70vh] object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
                {/* Content container with z-index to appear above background images */}
                <div className="relative z-10">
                    {/* Divider */}
                    <Divider text="About Us" />

                    {/* Content */}
                    <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                        <div data-aos="fade-down">
                            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl ">We invest in the world's potential</h2>
                            <p className="mb-8 px-16 font-extralight  sm:px-16 lg:px-48 ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        </div>

                        {/* Additional content area - ready for more content */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14" data-aos="fade-up" data-aos-delay="200">
                            {/* Card 1 */}
                            <div className="p-6 shadow-lg bg-transparent transform border border-[#1B255E] dark:border-[#1B255E] ">
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src="/images/Icon-6.png"
                                        alt="Automation Icon"
                                        width={64}
                                        height={64}
                                        className="mb-8"
                                    />
                                    <h1 className="text-3xl font-bold mb-6 ">Automation</h1>
                                    <p >
                                        Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-6 shadow-lg bg-transparent transform border border-[#1B255E] dark:border-[#1B255E] ">
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src="/images/Icon-7.png"
                                        alt="Precision Icon"
                                        width={64}
                                        height={64}
                                        className="mb-8"
                                    />
                                    <h1 className="text-3xl font-bold mb-6 ">Precision</h1>
                                    <p >
                                        Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-6 shadow-lg bg-transparent transform border border-[#1B255E] dark:border-[#1B255E] ">
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src="/images/Icon-8.png"
                                        alt="Accuracy Icon"
                                        width={64}
                                        height={64}
                                        className="mb-8"
                                    />
                                    <h1 className="text-3xl font-bold mb-6 ">Accuracy</h1>
                                    <p>
                                        Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Logo-Client */}
                        <div className="mt-16 grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-1.png"
                                    alt="Client Logo 1"
                                    width={160}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-2.png"
                                    alt="Client Logo 2"
                                    width={160}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in" data-aos-delay="200"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-3.png"
                                    alt="Client Logo 3"
                                    width={120}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-4.png"
                                    alt="Client Logo 4"
                                    width={120}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-5.png"
                                    alt="Client Logo 5"
                                    width={160}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="500"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-6.png"
                                    alt="Client Logo 6"
                                    width={160}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-7.png"
                                    alt="Client Logo 7"
                                    width={100}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="700"
                                />
                            </div>
                            <div className="p-6 shadow-lg bg-transparent transform scale-[1.002] border border-[#1B255E] dark:border-[#1B255E] -mr-px -mb-px flex items-center justify-center min-h-[200px]">
                                <Image
                                    src="/images/Logo-Client-8.png"
                                    alt="Client Logo 8"
                                    width={160}
                                    height={80}
                                    className="mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;