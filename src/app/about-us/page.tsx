// app/about-us/page.tsx
// import AboutSection from '@/components/sections/home/AboutSection';

// export default function AboutUsPage() {
//   return (<>
//     {/* <AboutMainSection /> */}
//       <AboutSection />
//   </>
  
//   );
// }


// src/app/about-us/page.tsx

import AboutMainSection from '@/components/sections/about/AboutMainSection';

export default function AboutUsPage() {
  return (
    <div className="pt-20"> 
      <AboutMainSection />
    </div>
  );
}
