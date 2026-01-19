// app/contact-us/page.tsx
// export default function ContactUsPage() {
//     return (
//       <div className="min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
//           <p className="text-gray-300 text-lg">Get in touch with our team.</p>
//         </div>
//       </div>
//     );
//   }






'use client';

import React from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/Divider';

const ContactUsPage = () => {
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

      {/* Main Content */}
      <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
        <Divider text="Contact Us" />

        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl text-white">
            Get in Touch With Us
          </h2>
          <p className="mb-12 text-gray-300 max-w-3xl mx-auto">
            Have questions, partnership ideas, or want to work with us?
            We’d love to hear from you. Reach out using the form below or through our contact details.
          </p>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left">
            {/* Contact Form */}
            <div className="bg-gray-800/40 border border-[#1B255E] rounded-xl p-8 shadow-lg backdrop-blur-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message..."
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Office Address</h3>
                <p className="text-gray-400">
                  Jaitrrm Pvt. Ltd. <br />
                  123 Innovation Tower, Sector 62, Noida, Uttar Pradesh, India
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-400">
                  <a
                    href="mailto:info@jaitrrm.com"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    info@jaitrrm.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-400">
                  <a
                    href="tel:+911234567890"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    +91 12345 67890
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-white">Find Us on Map</h3>
            <div className="rounded-xl overflow-hidden border border-[#1B255E] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.066391744185!2d77.3664729742929!3d28.642380275659698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef2a3f57c0a3%3A0xf5a17332a7f0ec7!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709971234567!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
