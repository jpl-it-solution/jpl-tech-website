// app/page.tsx
import HeroSection from '@/components/sections/home/HeroSection';
import LayoutWithHeroBackground from '@/components/layout/LayoutWithHeroBackground';
import AboutSection from '@/components/sections/home/AboutSection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection';
import TestimonialSection from '@/components/sections/home/TestimonialSection';
import CallToActionSection from '@/components/sections/home/CallToActionSection';



export default function Home() {
  return (
    <LayoutWithHeroBackground>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <ServicesSection />
      {/* A Contact Us form section could also be included here ji */}
       <WhyChooseUsSection/>
       <TestimonialSection/>
       {/* <TeamSection/> */}
       <CallToActionSection/>
       {/* <FooterSection/> */}
    </LayoutWithHeroBackground>
    
  );
}
