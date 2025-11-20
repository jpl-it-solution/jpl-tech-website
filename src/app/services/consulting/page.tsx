'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const ConsultingPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* ✅ Background Ellipses */}
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

      {/* ✅ Foreground Content */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Consulting Services" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <div data-aos="fade-down">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Business with Expert Consulting
            </h2>
            <p className="mb-8 px-6 sm:px-16 lg:px-48 text-gray-300 font-extralight">
              Our Consulting Services help businesses identify opportunities, overcome challenges, 
              and implement strategic solutions powered by technology and innovation. 
              We focus on delivering actionable insights, process optimization, and scalable growth solutions.
            </p>
          </div>

          {/* ✅ Main Service Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-10">
            {[
              {
                title: 'Business Process Optimization',
                description:
                  'We analyze your operations, identify inefficiencies, and implement process improvements using cutting-edge automation and AI.',
              },
              {
                title: 'Technology Consulting',
                description:
                  'Get expert advice on technology adoption, system integration, and digital transformation to meet your business goals.',
              },
              {
                title: 'Cloud & Infrastructure Strategy',
                description:
                  'Leverage our expertise to design scalable, secure, and cost-efficient cloud architecture for your enterprise.',
              },
              {
                title: 'Digital Transformation Roadmap',
                description:
                  'We help you reimagine workflows, improve customer experience, and digitize your core business functions.',
              },
              {
                title: 'IT Strategy & Governance',
                description:
                  'Our IT governance framework ensures your technology investments align with your organizational objectives.',
              },
              {
                title: 'Project Management Consulting',
                description:
                  'From planning to execution, our certified experts guide your team to deliver complex projects successfully.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#151721] hover:bg-[#1B255E] transition-all duration-300 delay-150 ease-in-out p-6 rounded-2xl shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-2xl font-semibold mb-3 text-indigo-400">{item.title}</h5>
                  <p className="text-gray-300 opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ CTA Section */}
          <div className="mt-16">
            <p className="text-lg text-gray-300 mb-4">
              Ready to accelerate your business growth with expert consulting?
            </p>
            <a
              href="/contact-us"
              className="inline-block px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingPage;
