// components/sections/home/ServicesSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';


const serviceList = [
    {
        image: '/images/Icon-6.png',
        title: "Automation",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
    },
    {
        image: '/images/Icon-5.png',
        title: "Construction",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
    },
    {
        image: '/images/Icon-4.png',
        title: "Manufacturing",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
    },
    {
        image: '/images/Icon-3.png',
        title: "Public Safety",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
    },
    {
        image: '/images/Icon-2.png',
        title: "Power & Utilities",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
    },
    {
        image: '/images/Icon-1.png',
        title: "Management",
        description:
            "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."

    },


];

type Service = {
    image: string;
    title: string;
    description: string;
};

const ServiceItem = ({ service }: { service: Service }) => (
    <div className="flex flex-col justify-between bg-[#151721] hover:bg-[#1B255E] p-4 md:p-8 h-full transition-all duration-300 delay-150 ease-in-out">
        {/* fixed-size header (prevents image / title pushing layout) */}
        <div className="flex-none">
            <div className="w-16 h-16 flex items-center justify-center">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>
        </div>

        {/* flexible middle content */}
        <div className="mt-6 flex-1">
            <h5 className="text-3xl font-bold mb-5 text-left">{service.title}</h5>
            <p className="opacity-80 mb-0 text-left">{service.description}</p>
        </div>

        {/* footer/link pinned to bottom */}
        <div className="mt-6 text-left flex-none">
            <a className="inline-block text-sm font-semibold uppercase tracking-wide text-indigo-400" href="#">Learn More</a>
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
                        <div>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none  xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl ">
                                Empowering Industries with Intelligent Automation Discover More
                            </h2>
                            <p className="mb-8 px-16 font-extralight  sm:px-16 lg:px-48 ">
                                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                            </p>
                        </div>

                        {/* Additional content or service listings can be added here */}
                        {/* Additional content or service listings can be added here */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                            {serviceList.map((service, i) => (
                                <div className="h-full px-2 mt-4" key={i}>
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
