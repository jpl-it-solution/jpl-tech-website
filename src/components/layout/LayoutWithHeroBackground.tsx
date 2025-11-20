// components/layout/LayoutWithHeroBackground.tsx
'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import HeroBackground from '../../../public/images/home/hero-bg.jpg'

interface LayoutProps {
  children: ReactNode
}

export default function LayoutWithHeroBackground({ children }: LayoutProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Scrollable Background */}
      <div className="absolute z-0 h-[115vh] transform top-[0px] inset-x-0 scale-130">
        <Image
          src={HeroBackground}
          alt="Background"
          fill
          className="object-fill object-left-bottom "
          priority
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
