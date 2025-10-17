// components/sections/home/HeroSection.tsx
'use client';

import Robot from '../../../../public/images/home/robot.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative  py-20 flex items-center overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start border-b-2 border-[#A6EFFB] gap-10 lg:gap-0">
                    {/* LEFT */}
                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                        <div className="mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-down-xl animate-once  animate-normal">
                            <p className="text-md md:text-md font-thin tracking-widest uppercase mb-2">
                                AI & Robotic Engineering
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                                <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                                    Changing Your Idea
                                </span>{' '}
                                of What Robots <br className="hidden sm:block" /> Can Do.
                            </h1>

                            <p className="text-[14px] sm:text-[15px] text-[#A4A5AB] leading-relaxed">
                                Leo scelerisque dolor non ut dignissim aliquet sit nulla. Venenatis leo
                                leo et in lorem netus adipiscing cursus. Amet nisl erat aliquet vitae eget.
                                Elementum ut lacinia in sapien id dolor adipiscing dolor.
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start ">
                            <Link
                                href="/about-us"
                                className="font-dm-sans
                                        text-[0.875em]
                                        uppercase
                                        font-bold
                                        leading-[1.2em]
                                        text-white
                                        no-underline
                                        bg-[#7B8CE5]
                                        hover:bg-white
                                        hover:text-[#7B8CE5]
                                        border
                                        border-transparent
                                        hover:border-[#7B8CE5]
                                        rounded-full
                                        px-6 py-3
                                        transition-all
                                        duration-200
                                        inline-flex
                                        items-center
                                        gap-2
                                        group"
                            >
                                Discover More
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-end">
                        {/* Robot Image */}
                        <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[100%] max-w-lg relative z-10">
                            <Image
                                src={Robot}
                                alt="Advanced Robot"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Stats Card */}
                        <div
                            className="
                                absolute
                                bottom-0 sm:bottom-8 md:bottom-10 lg:bottom-0
                                left-1/2 lg:left-12 
                                -translate-x-1/2 lg:translate-x-0
                                w-[85%] sm:w-[70%] md:w-[60%] lg:w-[250px]
                                bg-[#151721]/90 
                                backdrop-blur-sm 
                                p-6 
                                shadow-2xl 
                                z-20
                                flex 
                                items-center 
                                justify-center 
                                animate-fade-up-xl animate-once  animate-normal
                            "
                            role="status"
                            aria-label="Years of experience"
                        >
                            <div className="text-center lg:text-left">
                                <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#A6EFFF]">12</span>
                                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#A6EFFF]">+</span>
                                </div>

                                <p className="text-lg font-semibold text-white mb-2">
                                    Years Of Experience
                                </p>
                                <p className="text-[#d8d8d8] font-thin lg:text-[12px] text-sm">
                                    Placerat quis libero et diam tellus lectus sagittis quisque hendrerit. Ipsum tincidunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
