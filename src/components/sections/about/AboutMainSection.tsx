'use client';

import Image from 'next/image';
import React from 'react';
import Divider from '@/components/ui/Divider';

const AboutMainSection = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* ===== Background Images ===== */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-80">
        <div>
          <Image
            src="/images/Ellipse-2.png"
            alt="Background Ellipse 2"
            width={500}
            height={500}
            className="w-auto h-auto max-h-[70vh] object-contain"
            priority
          />
        </div>
        <div>
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

      {/* ===== MAIN CONTENT ===== */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10 text-gray-300">
        <Divider text="About Us" />

        {/* 1️⃣ Company Introduction */}
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Jaitrrm Private Limited (JPL) is a future‑ready technology company delivering smart, scalable, and secure digital solutions. We help startups, SMEs, and enterprises transform ideas into powerful digital products.
          </p>
        </div>

        {/* 2️⃣ Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-[#151721] p-8 rounded-2xl hover:bg-[#1B255E] transition-all duration-300 text-left">
            <h3 className="text-3xl font-semibold text-indigo-400 mb-4">Our Vision</h3>
            <p>
              To become a global leader in digital innovation by delivering technology solutions that empower businesses worldwide.
            </p>
          </div>

          <div className="bg-[#151721] p-8 rounded-2xl hover:bg-[#1B255E] transition-all duration-300 text-left">
            <h3 className="text-3xl font-semibold text-indigo-400 mb-4">Our Mission</h3>
            <p>
              - Deliver reliable and scalable digital solutions
- Build long‑term client relationships
- Maintain high quality and security standards
- Drive business growth through technology
            </p>
          </div>
        </div>

        {/* 3️⃣ Core Values */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: 'Innovation', desc: 'We explore new ideas and creative approaches.' },
                { title: 'Integrity', desc: 'Transparency and honesty in every project.' },
                { title: 'Excellence', desc: 'Delivering high‑quality, scalable solutions.' },
                { title: 'Customer Satisfaction', desc: 'Your success is our priority.' },
                { title: 'Transparency', desc: 'Open communication and clear processes.' },
                { title: 'Teamwork', desc: 'Collaboration drives collective success.' }
              ].map((val, i) => (
              <div
                key={i}
                className="bg-[#151721] p-6 rounded-2xl hover:bg-[#1B255E] transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-indigo-400 mb-3">{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4️⃣ Our Story */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">Our Story</h3>
          <p className="max-w-4xl mx-auto text-lg">
            Started with a small team of passionate engineers, JAITRRM Pvt. Ltd. has evolved into a trusted name in
            technology innovation. Over the years, we’ve partnered with global clients to design, build, and deploy
            world-class solutions that drive growth and innovation.
          </p>
        </div>

        {/* 5️⃣ Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              'Proven experience across multiple industries.',
              'End-to-end software and hardware integration.',
              'Agile and transparent project management.',
              'Commitment to innovation and quality.',
              'Dedicated post-launch support.',
              'Scalable, future-ready technology solutions.',
            ].map((point, i) => (
              <div
                key={i}
                className="bg-[#151721] p-6 rounded-2xl hover:bg-[#1B255E] transition-all duration-300"
              >
                <p>✅ {point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6️⃣ Achievements & Awards */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">Achievements & Awards</h3>
          <p className="max-w-3xl mx-auto text-lg">
            Recognized by industry leaders for excellence in AI, Automation, and Cloud Services. We’re proud recipients
            of innovation and performance awards for multiple successful client solutions worldwide.
          </p>
        </div>

        {/* 7️⃣ Team / Leadership */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
            {[
              { name: 'Ashaka Tiwari', role: 'Chief Executive Officer (CEO)', image: '/images/ashaka.jpg' },
               { name: 'Abhinav', role: 'Lead Developer', image: '/images/abhinav.jpg' },
               { name: 'Vansh', role: 'Project Manager', image: '/images/vansh.jpg' },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-[#151721] p-6 rounded-2xl hover:bg-[#1B255E] transition-all duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold text-indigo-400">{member.name}</h4>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8️⃣ Client Testimonials */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Maitry', feedback: 'Professional team, excellent delivery, and great support.' },
               { name: 'Sneha Kapoor', feedback: 'Working with JPL has been a game‑changer for our company. Their innovative approach and commitment to quality helped us achieve our digital transformation goals successfully.' },
               { name: 'Aman Verma', feedback: 'The team maintained clear communication, timely updates, and excellent project execution throughout the process. We highly recommend JPL for IT solutions.' },
               { name: 'Nikhil', feedback: 'Highly recommended for software projects.' },
            ].map((client, i) => (
              <div
                key={i}
                className="bg-[#151721] p-6 rounded-2xl hover:bg-[#1B255E] transition-all duration-300"
              >
                <p className="italic mb-3">“{client.feedback}”</p>
                <h5 className="font-semibold text-indigo-400">{client.name}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* 9️⃣ Career Opportunities */}
        {/* <div className="mt-20 text-center mb-16">
          <h3 className="text-3xl font-semibold text-white mb-6">Career Opportunities</h3>
          <p className="max-w-3xl mx-auto mb-6 text-lg">
            Join JAITRRM and be part of an innovative, tech-driven environment where your skills shape the future.
          </p>
          <a
            href="/career"
            className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition"
          >
            Explore Careers →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMainSection;
