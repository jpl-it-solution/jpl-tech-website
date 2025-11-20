// app/page.tsx
import HeroSection from '@/components/sections/home/HeroSection';
import Testimonials from '@/components/sections/home/TestimonialSection';
import LayoutWithHeroBackground from '@/components/layout/LayoutWithHeroBackground';
import AboutSection from '@/components/sections/home/AboutSection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection';
import TestimonialSection from '@/components/sections/home/TestimonialSection';
import TeamSection from '@/components/sections/home/TeamSection';
import CallToActionSection from '@/components/sections/home/CallToActionSection';
import FooterSection from '@/components/sections/home/FooterSection';



export default function Home() {
  return (
    <LayoutWithHeroBackground>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <ServicesSection />
      {/* A Contact Us form section could also be included here */}
       <WhyChooseUsSection/>
       <TestimonialSection/>
       {/* <TeamSection/> */}
       <CallToActionSection/>
       {/* <FooterSection/> */}
    </LayoutWithHeroBackground>
    
  );
}