// app/page.tsx
import HeroSection from '@/components/sections/home/HeroSection';
import Testimonials from '@/components/sections/home/Testimonials';
import LayoutWithHeroBackground from '@/components/layout/LayoutWithHeroBackground';
import AboutSection from '@/components/sections/home/AboutSection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import ServicesSection from '@/components/sections/home/ServicesSection';


export default function Home() {
  return (
    <LayoutWithHeroBackground>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <ServicesSection />
      {/* A Contact Us form section could also be included here */}
    </LayoutWithHeroBackground>
  );
}