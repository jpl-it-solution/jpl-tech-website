"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58.56,12.73,117.12,25.47,175.68,20.77,58.56-4.7,117.12-28.84,175.68-39.09C731.21,28.87,789.77,31.29,848.33,43.6c58.56,12.31,117.12,34.52,175.68,37.57,58.56,3.05,117.12-13.16,175.68-26.69V0H0V27.35C58.56,40.89,117.12,43.71,175.68,48.41,234.24,53.11,292.8,43.71,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg" // Change to your logo path
                alt="JPL Tech Logo"
                width={40}
                height={40}
              />
              <h2 className="text-2xl font-bold text-white">JPL Tech</h2>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              JPL Tech Private Limited is a digital innovation company providing
              creative solutions in software development, design, and
              technology. We build future-ready digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: <span className="text-white">info@jplitsolution.com</span></li>
              <li>Phone: <span className="text-white">+91 98765 43210</span></li>
              <li>Location: <span className="text-white">Remote / India</span></li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-5">
              <Link href="https://www.linkedin.com" target="_blank">
                <i className="fab fa-linkedin text-xl hover:text-blue-400"></i>
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram text-xl hover:text-pink-400"></i>
              </Link>
              <Link href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook text-xl hover:text-blue-500"></i>
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <i className="fab fa-twitter text-xl hover:text-sky-400"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} JPL Tech Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
