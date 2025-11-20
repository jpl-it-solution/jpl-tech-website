// 'use client';

// import { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react';
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';

// // ✅ Services dropdown items
// const servicesItems = [
//   {
//     name: 'Web Development',
//     description: 'Custom web applications and sites',
//     href: '/services/web-development',
//     icon: ChartPieIcon,
//   },
//   {
//     name: 'Mobile Apps',
//     description: 'iOS and Android applications',
//     href: '/services/mobile-apps',
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: 'AI & ML Solutions',
//     description: 'Artificial intelligence and machine learning integration',
//     href: '/services/ai-ml',
//     icon: FingerPrintIcon,
//   },
//   {
//     name: 'Cloud Services',
//     description: 'Cloud infrastructure and deployment',
//     href: '/services/cloud-services',
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: 'Consulting',
//     description: 'Technical consulting and strategy',
//     href: '/services/consulting',
//     icon: ArrowPathIcon,
//   },
// ];

// // ✅ Products dropdown items
// const productsItems = [
//   {
//     name: 'Software Products',
//     description: 'Ready-to-use software solutions',
//     href: '/products/software',
//     icon: ChartPieIcon,
//   },
//   {
//     name: 'AI Tools',
//     description: 'Artificial intelligence tools',
//     href: '/products/ai-tools',
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: 'Analytics Suite',
//     description: 'Data analytics and insights',
//     href: '/products/analytics',
//     icon: FingerPrintIcon,
//   },
//   {
//     name: 'Security Solutions',
//     description: 'Cybersecurity products',
//     href: '/products/security',
//     icon: SquaresPlusIcon,
//   },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();
//   const isHomePage = pathname === '/';

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="relative py-3 top-0 left-0 right-0 z-50 transition-all duration-300">
//       <nav
//         aria-label="Global"
//         className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24 py-6"
//       >
//         {/* ✅ Logo */}
//         <div className="flex lg:flex-1">
//           <Link href="/" className="-m-1.5 p-1.5">
//             <Image
//               src="/images/logo/jpl-logo.png"
//               alt="Company Logo"
//               width={150}
//               height={75}
//               priority
//             />
//           </Link>
//         </div>

//         {/* ✅ Mobile Menu Button */}
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
//               isHomePage && !isScrolled
//                 ? 'text-white hover:text-[#7B8CE5]'
//                 : 'text-white hover:text-[#7B8CE5]'
//             }`}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="size-6" />
//           </button>
//         </div>

//         {/* ✅ Desktop Navigation */}
//         <PopoverGroup className="hidden lg:flex lg:gap-x-8">
//           <Link
//             href="/"
//             className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5] transition-colors"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about-us"
//             className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5] transition-colors"
//           >
//             About Us
//           </Link>

//           {/* ✅ Services Dropdown */}
//           <Popover className="relative">
//             {({ open, close }) => (
//               <>
//                 <div className="flex items-center">
//                   <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5] transition-colors focus:outline-none">
//                     Services
//                     <ChevronDownIcon
//                       aria-hidden="true"
//                       className={`ml-1 size-4 transition-transform ${
//                         open ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </PopoverButton>
//                 </div>

//                 <PopoverPanel className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800/95 backdrop-blur-sm outline-1 -outline-offset-1 outline-white/10">
//                   <div className="p-4">
//                     {servicesItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         href={item.href}
//                         className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/10 transition"
//                         onClick={close}
//                       >
//                         <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-600">
//                           <item.icon
//                             aria-hidden="true"
//                             className="size-6 text-gray-300 group-hover:text-white"
//                           />
//                         </div>
//                         <div className="flex-auto">
//                           <p className="font-semibold text-white">{item.name}</p>
//                           <p className="mt-1 text-gray-300">{item.description}</p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                   <div className="bg-gray-700/80 border-t border-white/10">
//                     <Link
//                       href="/services"
//                       className="block text-center text-sm font-semibold text-indigo-400 hover:underline py-3"
//                       onClick={close}
//                     >
//                       View All Services →
//                     </Link>
//                   </div>
//                 </PopoverPanel>
//               </>
//             )}
//           </Popover>

//           {/* ✅ Products Dropdown */}
//           <Popover className="relative">
//             {({ open, close }) => (
//               <>
//                 <div className="flex items-center">
//                   <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5] transition-colors focus:outline-none">
//                     Products
//                     <ChevronDownIcon
//                       aria-hidden="true"
//                       className={`ml-1 size-4 transition-transform ${
//                         open ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </PopoverButton>
//                 </div>

//                 <PopoverPanel className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800/95 backdrop-blur-sm outline-1 -outline-offset-1 outline-white/10">
//                   <div className="p-4">
//                     {productsItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         href={item.href}
//                         className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/10 transition"
//                         onClick={close}
//                       >
//                         <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-600">
//                           <item.icon
//                             aria-hidden="true"
//                             className="size-6 text-gray-300 group-hover:text-white"
//                           />
//                         </div>
//                         <div className="flex-auto">
//                           <p className="font-semibold text-white">{item.name}</p>
//                           <p className="mt-1 text-gray-300">{item.description}</p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                   <div className="bg-gray-700/80 border-t border-white/10">
//                     <Link
//                       href="/products"
//                       className="block text-center text-sm font-semibold text-indigo-400 hover:underline py-3"
//                       onClick={close}
//                     >
//                       View All Products →
//                     </Link>
//                   </div>
//                 </PopoverPanel>
//               </>
//             )}
//           </Popover>

//           <Link
//             href="/careers"
//             className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5] transition-colors"
//           >
//             Career
//           </Link>
//         </PopoverGroup>

//         {/* ✅ Contact Button */}
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <Link
//             href="/contact-us"
//             className="font-dm-sans text-[0.875em] uppercase font-bold text-white bg-[#7B8CE5] hover:bg-white hover:text-[#7B8CE5] border border-transparent hover:border-[#7B8CE5] rounded-full px-6 py-3 transition-all duration-200 flex items-center gap-2 group"
//           >
//             Contact Us
//             <svg
//               className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Services Data
const servicesItems = [
  { name: 'Web Development', description: 'Custom web applications and sites', href: '/services/web-development', icon: ChartPieIcon },
  { name: 'Mobile Apps', description: 'iOS and Android applications', href: '/services/mobile-apps', icon: CursorArrowRaysIcon },
  { name: 'AI & ML Solutions', description: 'Artificial intelligence and machine learning integration', href: '/services/ai-ml', icon: FingerPrintIcon },
  { name: 'Cloud Services', description: 'Cloud infrastructure and deployment', href: '/services/cloud-services', icon: SquaresPlusIcon },
  { name: 'Consulting', description: 'Technical consulting and strategy', href: '/services/consulting', icon: ArrowPathIcon },
];

// Products Data
const productsItems = [
  { name: 'Software Products', description: 'Ready-to-use software solutions', href: '/products/software', icon: ChartPieIcon },
  { name: 'AI Tools', description: 'Artificial intelligence tools', href: '/products/ai-tools', icon: CursorArrowRaysIcon },
  { name: 'Analytics Suite', description: 'Data analytics and insights', href: '/products/analytics', icon: FingerPrintIcon },
  { name: 'Security Solutions', description: 'Cybersecurity products', href: '/products/security', icon: SquaresPlusIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative py-3 top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24 py-6">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/logo/jpl-logo.png" alt="Company Logo" width={150} height={75} priority />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-[#7B8CE5]"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5]">Home</Link>

          <Link href="/about-us" className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5]">About Us</Link>

          {/* Services Dropdown */}
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5]">
                  Services
                  <ChevronDownIcon className={`ml-1 size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                </PopoverButton>

                {/* TRANSPARENT DROPDOWN */}
                <PopoverPanel
                  className="
                    absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2
                    overflow-hidden rounded-3xl 
                    bg-gray-800/20 backdrop-blur-lg
                    outline outline-1 outline-white/10
                  "
                >
                  <div className="p-4">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/5 transition"
                        onClick={close}
                      >
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700/10 group-hover:bg-gray-600/20">
                          <item.icon className="size-6 text-gray-300 group-hover:text-white" />
                        </div>
                        <div className="flex-auto">
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="mt-1 text-gray-300">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Products Dropdown */}
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5]">
                  Products
                  <ChevronDownIcon className={`ml-1 size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                </PopoverButton>

                {/* TRANSPARENT DROPDOWN */}
                <PopoverPanel
                  className="
                    absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2
                    overflow-hidden rounded-3xl 
                    bg-gray-800/20 backdrop-blur-lg
                    outline outline-1 outline-white/10
                  "
                >
                  <div className="p-4">
                    {productsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/5 transition"
                        onClick={close}
                      >
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700/10 group-hover:bg-gray-600/20">
                          <item.icon className="size-6 text-gray-300 group-hover:text-white" />
                        </div>
                        <div className="flex-auto">
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="mt-1 text-gray-300">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link href="/careers" className="font-dm-sans text-[0.875em] font-bold text-white hover:text-[#7B8CE5]">
            Career
          </Link>
        </PopoverGroup>

        {/* Contact Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact-us"
            className="font-dm-sans text-[0.875em] uppercase font-bold text-white bg-[#7B8CE5] hover:bg-white hover:text-[#7B8CE5] border border-transparent hover:border-[#7B8CE5] rounded-full px-6 py-3 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
