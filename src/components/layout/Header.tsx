// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react'
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
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react';

// Services dropdown items
const servicesItems = [
  { name: 'Web Development', description: 'Custom web applications and sites', href: '/services/web-development', icon: ChartPieIcon },
  { name: 'Mobile Apps', description: 'iOS and Android applications', href: '/services/mobile-apps', icon: CursorArrowRaysIcon },
  { name: 'AI Solutions', description: 'Artificial intelligence integration', href: '/services/ai-solutions', icon: FingerPrintIcon },
  { name: 'Cloud Services', description: 'Cloud infrastructure and deployment', href: '/services/cloud-services', icon: SquaresPlusIcon },
  { name: 'Consulting', description: 'Technical consulting and strategy', href: '/services/consulting', icon: ArrowPathIcon },
]

// Products dropdown items
const productsItems = [
  { name: 'Software Products', description: 'Ready-to-use software solutions', href: '/products/software', icon: ChartPieIcon },
  { name: 'AI Tools', description: 'Artificial intelligence tools', href: '/products/ai-tools', icon: CursorArrowRaysIcon },
  { name: 'Analytics Suite', description: 'Data analytics and insights', href: '/products/analytics', icon: FingerPrintIcon },
  { name: 'Security Solutions', description: 'Cybersecurity products', href: '/products/security', icon: SquaresPlusIcon },
]



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative py-3 top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/logo/jpl-logo.png"
              alt="Company Logo"
              width={150}
              height={75}
            />
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${isHomePage && !isScrolled ? 'text-white hover:text-[#7B8CE5]' : 'text-white hover:text-[#7B8CE5]'
              }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          {/* Home */}
          <Link
            href="/"
            className="font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:text-[#7B8CE5] transition-colors duration-200"
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/about-us"
            className="font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:text-[#7B8CE5] transition-colors duration-200"
          >
            About Us
          </Link>

          {/* Services - with dropdown on hover and click to redirect */}
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <div className="flex items-center">
                  <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:text-[#7B8CE5] transition-colors duration-200 focus:outline-none">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`ml-1 size-4 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </PopoverButton>
                </div>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800/95 backdrop-blur-sm outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/10 transition-colors no-underline"
                        onClick={close}
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-white" />
                        </div>
                        <div className="flex-auto">
                          <div className="block font-semibold text-white">
                            {item.name}
                          </div>
                          <p className="mt-1 text-gray-300">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-white/10 bg-gray-700/80">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white no-underline hover:bg-gray-600/50 transition-colors"
                      onClick={close}
                    >
                      View All Services
                    </Link>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Products - with dropdown on hover and click to redirect */}
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <div className="flex items-center">
                  <PopoverButton className="flex items-center font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:text-[#7B8CE5] transition-colors duration-200 focus:outline-none">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`ml-1 size-4 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </PopoverButton>
                </div>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800/95 backdrop-blur-sm outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {productsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/10 transition-colors no-underline"
                        onClick={close}
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-white" />
                        </div>
                        <div className="flex-auto">
                          <div className="block font-semibold text-white">
                            {item.name}
                          </div>
                          <p className="mt-1 text-gray-300">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-white/10 bg-gray-700/80">
                    <Link
                      href="/products"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white no-underline hover:bg-gray-600/50 transition-colors"
                      onClick={close}
                    >
                      View All Products
                    </Link>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Career */}
          <Link
            href="/careers"
            className="font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:text-[#7B8CE5] transition-colors duration-200"
          >
            Career
          </Link>
        </PopoverGroup>

        {/* Contact Us CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact-us"
            className="font-dm-sans text-[0.875em] uppercase font-bold leading-[1.2em] text-white no-underline bg-[#7B8CE5] hover:bg-white hover:text-[#7B8CE5] border border-transparent hover:border-[#7B8CE5] rounded-full px-6 py-3 transition-all duration-200 flex items-center gap-2 group"
          >
            Contact Us
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-sm p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Company Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-[#7B8CE5] transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {/* Home */}
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* About Us */}
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Services */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <div className="flex items-center justify-between">
                        <DisclosureButton className="flex-1 text-left">
                          <span className="block rounded-lg px-3 py-2 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors">
                            Services
                          </span>
                        </DisclosureButton>
                        <DisclosureButton className="flex items-center justify-center w-8 h-8 text-white hover:bg-white/10 rounded-lg transition-colors">
                          <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform ${open ? 'rotate-180' : ''}`} />
                        </DisclosureButton>
                      </div>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block rounded-lg py-2 pr-3 pl-6 font-dm-sans text-[0.875em] leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors font-semibold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* Products */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <div className="flex items-center justify-between">
                        <DisclosureButton className="flex-1 text-left">
                          <span className="block rounded-lg px-3 py-2 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors">
                            Products
                          </span>
                        </DisclosureButton>
                        <DisclosureButton className="flex items-center justify-center w-8 h-8 text-white hover:bg-white/10 rounded-lg transition-colors">
                          <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform ${open ? 'rotate-180' : ''}`} />
                        </DisclosureButton>
                      </div>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {productsItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="block rounded-lg py-2 pr-3 pl-6 font-dm-sans text-[0.875em]  leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors font-semibold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Products
                        </Link>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* Career */}
                <Link
                  href="/career"
                  className="-mx-3 block rounded-lg px-3 py-2 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career
                </Link>
              </div>
              <div className="py-6">
                {/* Contact Us CTA Button for mobile */}
                <Link
                  href="/contact-us"
                  className="-mx-3 rounded-full px-3 py-2.5 font-dm-sans text-[0.875em] font-bold leading-[1.2em] text-white no-underline bg-[#7B8CE5] hover:bg-white hover:text-[#7B8CE5] border border-transparent hover:border-[#7B8CE5] transition-all duration-200 text-center flex items-center justify-center gap-2 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}