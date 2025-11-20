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
            JAITRRM Pvt. Ltd. is a global technology company providing solutions in software, automation, AI, and
            digital transformation. We combine innovation and expertise to help businesses achieve digital excellence.
          </p>
        </div>

        {/* 2️⃣ Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-[#151721] p-8 rounded-2xl hover:bg-[#1B255E] transition-all duration-300 text-left">
            <h3 className="text-3xl font-semibold text-indigo-400 mb-4">Our Vision</h3>
            <p>
              To empower industries worldwide through intelligent and sustainable technology innovations that
              redefine the future of automation and connectivity.
            </p>
          </div>

          <div className="bg-[#151721] p-8 rounded-2xl hover:bg-[#1B255E] transition-all duration-300 text-left">
            <h3 className="text-3xl font-semibold text-indigo-400 mb-4">Our Mission</h3>
            <p>
              To deliver high-quality, efficient, and impactful technology solutions that enable organizations to scale,
              innovate, and succeed in the digital era.
            </p>
          </div>
        </div>

        {/* 3️⃣ Core Values */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Integrity', desc: 'We uphold transparency and honesty in every project.' },
              { title: 'Innovation', desc: 'We constantly explore new ideas and creative approaches.' },
              { title: 'Excellence', desc: 'We aim for perfection in every product we build.' },
              { title: 'Teamwork', desc: 'Collaboration is the key to our collective success.' },
              { title: 'Customer Focus', desc: 'Your satisfaction defines our success.' },
              { title: 'Sustainability', desc: 'We build technology that shapes a better tomorrow.' },
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
              { name: 'Amit Kumar', role: 'CEO & Founder', image: '/images/team1.jpg' },
              { name: 'Riya Singh', role: 'Chief Technology Officer', image: '/images/team2.jpg' },
              { name: 'Vikram Patel', role: 'Operations Head', image: '/images/team3.jpg' },
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
              { name: 'Emily Watson', feedback: 'Exceptional service and technical expertise!' },
              { name: 'David Brown', feedback: 'They transformed our business with innovative digital solutions.' },
              { name: 'Priya Sharma', feedback: 'Professional, creative, and reliable team!' },
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
