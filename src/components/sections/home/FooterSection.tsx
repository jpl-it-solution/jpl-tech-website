// 'use client';

// import Image from 'next/image';
// import React from 'react';

// const FooterSection = () => {
//   return (
//     <footer className="relative overflow-hidden bg-[#0E0F19] text-gray-300 py-20">
//       {/* Background Ellipses */}
//       <div className="absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center opacity-70">
//         <div>
//           <Image
//             src="/images/Ellipse-1.png"
//             alt="Background Ellipse 1"
//             width={500}
//             height={500}
//             className="w-auto h-auto max-h-[70vh] object-contain"
//             priority
//           />
//         </div>
//         <div>
//           <Image
//             src="/images/Ellipse-4.png"
//             alt="Background Ellipse 4"
//             width={400}
//             height={400}
//             className="w-auto h-auto max-h-[70vh] object-contain"
//             priority
//           />
//         </div>
//       </div>

//       {/* Main Container */}
//       <div className="container px-6 mx-auto max-w-7xl md:px-12 lg:px-24 relative z-10">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
//           {/* Logo + Description */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Image
//                 src="/images/logo.png"
//                 alt="Robotiko Logo"
//                 width={40}
//                 height={40}
//               />
//               <h2 className="text-2xl font-semibold text-white">robotiko</h2>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Innovating intelligent automation and smart solutions for modern industries.
//             </p>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">About</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Services</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Features</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Pricing</a></li>
//             </ul>
//           </div>

//           {/* Resources Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Case Studies</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Webinars</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Developer</a></li>
//               <li><a href="#" className="hover:text-[#A6EFFB] transition">Documentation</a></li>
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Subscribe To Newsletter</h4>
//             <form className="flex items-center bg-white rounded-full overflow-hidden shadow-md max-w-md">
//               <input
//                 type="email"
//                 placeholder="Enter Email Address"
//                 className="flex-grow px-4 py-3 text-sm text-gray-700 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:from-purple-400 hover:to-indigo-500 transition-all duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Divider */}
//         <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
//           <p>Copyright © 2025 Robotiko</p>
//           <p className="mt-2 sm:mt-0">Designed by TokoTema</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;
