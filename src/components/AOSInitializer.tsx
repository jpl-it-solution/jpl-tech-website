// components/AOSInitializer.tsx
'use client';

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
      initialized.current = true;
    }
  }, []);

  return null;
}
