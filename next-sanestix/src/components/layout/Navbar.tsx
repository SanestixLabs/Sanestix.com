'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile on resize
  useEffect(() => {
    if (!isMobile) {
      const t = setTimeout(() => setMobileOpen(false), 0);
      return () => clearTimeout(t);
    }
  }, [isMobile]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] px-8 h-[72px] flex items-center justify-between gap-4 bg-[rgba(6,11,20,0.97)] backdrop-blur-[20px] border-b border-[rgba(0,229,208,0.1)] transition-shadow duration-400 ${scrollY > 40 ? 'shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 min-w-[120px] no-underline">
          <Image
            src="/images/logos/LOGO.png"
            alt="Sanestix"
            width={120}
            height={44}
            className="h-[44px] w-auto object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <ul className="flex items-center gap-6 list-none flex-1 justify-center m-0 p-0">
            {['Services', 'Expertise', 'Industries', 'Company', 'Insights'].map((item) => (
              <li key={item} className="nav-item has-mega inline-flex items-center group relative">
                <a
                  href={
                    item === 'Services' ? '#services' :
                    item === 'Expertise' ? '#services' :
                    item === 'Industries' ? '#industries' :
                    item === 'Company' ? '#about' :
                    '#faq'
                  }
                  className="inline-flex items-center h-[72px] px-0.5 text-[#5e7d90] no-underline text-[0.875rem] font-medium transition-colors hover:text-[#00e5d0] after:content-[''] after:w-[5px] after:h-[5px] after:ml-[0.45rem] after:border-r-[1.5px] after:border-b-[1.5px] after:border-current after:rotate-45 after:-translate-y-[2px] after:opacity-75"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-br from-[#00e5d0] to-[#00b8e6] text-[#060b14] font-bold text-[0.85rem] no-underline transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(0,229,208,0.5)] shadow-[0_0_24px_rgba(0,229,208,0.3)] whitespace-nowrap"
          >
            Free Strategy Call
          </a>
          {isMobile && (
            <button
              className="bg-transparent border-none cursor-pointer text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && isMobile && (
        <div className="fixed top-[72px] left-0 right-0 bg-[rgba(6,11,20,0.98)] backdrop-blur-[20px] border-b border-[rgba(0,229,208,0.12)] p-6 flex flex-col gap-3 z-[99] max-h-[calc(100vh-72px)] overflow-auto">
          {/* Services Group */}
          <div className="grid gap-2 p-4 border border-[rgba(0,217,255,0.13)] rounded-[14px] bg-[rgba(255,255,255,0.035)]">
            <div className="text-[#89f3ff] text-[0.78rem] font-extrabold tracking-[0.12em] uppercase">Services</div>
            {['AI Solutions', 'Software Development', 'Automation Solutions', 'Smart Chatbot Integration'].map((s) => (
              <a key={s} href="#services" onClick={() => setMobileOpen(false)} className="text-[rgba(255,255,255,0.82)] no-underline text-base font-medium hover:text-[#00e5d0]">{s}</a>
            ))}
          </div>

          {/* Expertise Group */}
          <div className="grid gap-2 p-4 border border-[rgba(0,217,255,0.13)] rounded-[14px] bg-[rgba(255,255,255,0.035)]">
            <div className="text-[#89f3ff] text-[0.78rem] font-extrabold tracking-[0.12em] uppercase">Expertise</div>
            {['AI Calling Agent', 'WhatsApp Automation', 'Instagram Automation', 'CRM Integration'].map((s) => (
              <a key={s} href="#services" onClick={() => setMobileOpen(false)} className="text-[rgba(255,255,255,0.82)] no-underline text-base font-medium hover:text-[#00e5d0]">{s}</a>
            ))}
          </div>

          {/* Industries Group */}
          <div className="grid gap-2 p-4 border border-[rgba(0,217,255,0.13)] rounded-[14px] bg-[rgba(255,255,255,0.035)]">
            <div className="text-[#89f3ff] text-[0.78rem] font-extrabold tracking-[0.12em] uppercase">Industries</div>
            {['B2B Services', 'Fashion & Retail', 'Real Estate', 'Healthcare'].map((s) => (
              <a key={s} href="#industries" onClick={() => setMobileOpen(false)} className="text-[rgba(255,255,255,0.82)] no-underline text-base font-medium hover:text-[#00e5d0]">{s}</a>
            ))}
          </div>

          {/* Quick Row */}
          <div className="grid grid-cols-3 gap-2.5 max-[520px]:grid-cols-1">
            {[{ label: 'Company', href: '#about' }, { label: 'Insights', href: '#faq' }, { label: 'Flow Product', href: 'https://flow.sanestix.com' }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener' : undefined}
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 px-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(0,217,255,0.12)] text-[rgba(255,255,255,0.82)] no-underline text-base font-medium hover:text-[#00e5d0]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
            Free Strategy Call
          </a>
          <a
            href="https://wa.me/923014422951?text=Hi%20Sanestix!%20I'd%20like%20to%20discuss%20an%20AI-powered%20website%20for%20my%20business."
            target="_blank"
            rel="noopener"
            className="btn-whatsapp justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
