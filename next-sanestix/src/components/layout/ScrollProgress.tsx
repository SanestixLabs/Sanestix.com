'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    const handleScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / docH * 100) + '%';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="scrollProgress" />;
}
