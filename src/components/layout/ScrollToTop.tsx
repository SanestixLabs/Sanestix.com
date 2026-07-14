'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();

  return (
    <button
      id="scrollTopBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{ display: scrollY > 400 ? 'flex' : 'none' }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#060b14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
