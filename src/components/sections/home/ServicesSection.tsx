// components/sections/home/ServicesSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';


const serviceList = [
    {
        image: '/images/Icon-1.png',
        title: "Product Design",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-2.png',
        title: "Photography",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-3.png',
        title: "Coding",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-4.png',
        title: "Content Writing",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-5.png',
        title: "Branding",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-6.png',
        title: "Data Entry",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
        {
        image: '/images/Icon-7.png',
        title: "Content Writing",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-7.png',
        title: "Branding",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
        image: '/images/Icon-9.png',
        title: "Data Entry",
        description:
            "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
];

type Service = {
    image: string;
    title: string;
    description: string;
};

const ServiceItem = ({ service }: { service: Service }) => (
    <div className="bg-[#151721] hover:bg-[#1B255E] p-4 md:p-12 h-full transition-all duration-300 delay-150 ease-in-out">
        <div className={`flex items-center w-20 h-20 bg-white shadow-xl dark:bg-slate-800 rounded-full justify-center p-5 text-3xl`}>
            <Image
                src={service.image}
                alt={service.title}
                width={64}
                height={64}
                className="object-contain"
            />
        
        </div>
        <div className="mt-4">
            <h5 className="text-2xl font-medium mb-3">{service.title}</h5>
            <p className="opacity-80 mb-0">{service.description}</p>
        </div>
    </div>
);

const ServicesSection = () => {
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
                    <Divider text="Our Services" />

                    {/* Content */}
                    <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                        <div data-aos="fade-down">
                            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none  xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl ">
                                Empowering Industries with Intelligent Automation Discover More
                            </h2>
                            <p className="mb-8 px-16 font-extralight  sm:px-16 lg:px-48 ">
                                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                            </p>
                        </div>

                        {/* Additional content or service listings can be added here */}
                        <div className="w-full flex flex-wrap">
                            {serviceList.map((service, i) => (
                                <div className="w-full md:w-1/2 lg:w-1/3 mt-4 px-2 h-full" key={i}>
                                    <ServiceItem service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;