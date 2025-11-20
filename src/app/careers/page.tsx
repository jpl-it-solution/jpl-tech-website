// app/career/page.tsx
// export default function CareerPage() {
//     return (
//       <div className="min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-4xl font-bold text-white mb-8">Careers</h1>
//           <p className="text-gray-300 text-lg">Join our team and grow with us.</p>
//         </div>
//       </div>
//     );
//   }



'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <section className="relative overflow-hidden my-16">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center opacity-30">
        <Image
          src="/images/Ellipse-2.png"
          alt="Background Ellipse"
          width={500}
          height={500}
          className="w-auto h-auto max-h-[70vh] object-contain"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Careers" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Join Our Team at Jaitrrm Pvt. Ltd.
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            We’re looking for passionate innovators to help us build the future of AI, Robotics, and Automation.
            Explore job openings, internship opportunities, and learn about our work culture.
          </p>

          {/* 3 Career Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Job Openings */}
            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl hover:shadow-[#1B255E]/50 transition-all duration-300">
              <Image src="/images/Icon-6.png" alt="Jobs" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Job Openings</h3>
              <p className="text-gray-400 mb-4">
                Discover exciting full-time opportunities across AI, Software, and Engineering departments.
              </p>
              <Link
                href="#jobs"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                View Positions →
              </Link>
            </div>

            {/* Internships */}
            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl hover:shadow-[#1B255E]/50 transition-all duration-300">
              <Image src="/images/Icon-7.png" alt="Internship" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Internship Opportunities</h3>
              <p className="text-gray-400 mb-4">
                Kickstart your career with hands-on internships in AI, Web Development, and Robotics.
              </p>
              <Link
                href="#internships"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Apply Now →
              </Link>
            </div>

            {/* Work Culture */}
            <div className="p-6 shadow-lg border border-[#1B255E] rounded-xl hover:shadow-[#1B255E]/50 transition-all duration-300">
              <Image src="/images/Icon-8.png" alt="Culture" width={64} height={64} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Work Culture</h3>
              <p className="text-gray-400 mb-4">
                Experience a culture that values innovation, learning, collaboration, and personal growth.
              </p>
              <Link
                href="#culture"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Careers CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build the Future?</h3>
            <p className="text-gray-400 mb-6">
              Send your resume to <span className="text-indigo-400">careers@jaitrrm.com</span> and start your journey with us.
            </p>
            <Link
              href="mailto:careers@jaitrrm.com"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
