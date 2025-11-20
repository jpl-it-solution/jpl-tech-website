'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const teamMembers = [
  {
    name: 'Robert Fox',
    role: 'AI Robotics Engineer',
    image: '/images/person.jpg',
  },
  {
    name: 'Dianne Russell',
    role: 'Automation Specialist',
     image: '/images/person.jpg' ,
  },
  {
    name: 'Devon Lane',
    role: 'Sensor Integration Expert',
     image: '/images/person.jpg',
  },
  {
    name: 'Cameron Williamson',
    role: 'Machine Vision Scientist',
    image: '/images/person.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background Ellipses */}
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
            src="/images/Ellipse-4.png"
            alt="Background Ellipse 4"
            width={400}
            height={400}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Our Team" />

        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Our team of professionals brings innovation, expertise, and passion to every project. We work together to build intelligent automation solutions that shape the future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#151721] rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a href="#" className="text-[#00C8FF] hover:text-white transition">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#00C8FF] hover:text-white transition">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#00C8FF] hover:text-white transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="text-center py-6 px-4">
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
