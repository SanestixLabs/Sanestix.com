'use client';

import { useRef, useEffect } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { industries } from '@/data/industries';

export default function Industries() {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;

    // Clone cards for infinite scroll
    const origCards = Array.from(track.children) as HTMLElement[];
    [...origCards].forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      track.appendChild(clone);
    });
    [...origCards].reverse().forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      track.prepend(clone);
    });

    const setWidth = () => track.scrollWidth / 3;
    let lastTs = 0;
    let paused = false;
    const speed = 30;

    // Center scroll
    rail.scrollLeft = setWidth();

    const wrapScroll = () => {
      const w = setWidth();
      if (!w) return;
      if (rail.scrollLeft >= w * 2) rail.scrollLeft -= w;
      else if (rail.scrollLeft <= 0) rail.scrollLeft += w;
    };

    const autoMove = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const delta = ts - lastTs;
      lastTs = ts;
      if (!paused) {
        rail.scrollLeft += speed * (delta / 1000);
        wrapScroll();
      }
      requestAnimationFrame(autoMove);
    };

    requestAnimationFrame(autoMove);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    rail.addEventListener('mouseenter', pause);
    rail.addEventListener('mouseleave', resume);

    return () => {
      rail.removeEventListener('mouseenter', pause);
      rail.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section className="py-28 relative overflow-hidden" id="industries">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Industries We Serve"
            title={<>Built for <GradientText>Every Industry</GradientText></>}
            description="We deploy AI automation systems tailored to each industry's workflows, customer journey, and operational needs."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div ref={railRef} className="industry-rail">
            <div ref={trackRef} className="industry-track">
              {industries.map((ind) => (
                <article key={ind.slug} className="min-w-[280px] max-w-[300px] bg-card border border-border rounded-2xl p-6 flex flex-col transition-all hover:border-border-cyan hover:-translate-y-1 hover:shadow-glow-lg group shrink-0" tabIndex={0}>
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,229,208,0.08)] flex items-center justify-center mb-4 text-cyan">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[1rem] mb-2">{ind.name}</h3>
                  <p className="text-muted text-[0.85rem] leading-[1.6] mb-4 flex-1">{ind.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {ind.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-[0.8rem] text-text-secondary">
                        <Check className="w-3.5 h-3.5 text-cyan shrink-0" />{cap}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-colors self-end">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center bg-gradient-to-r from-[rgba(0,229,208,0.06)] to-[rgba(0,184,230,0.04)] border border-border-cyan rounded-2xl p-8">
            <div className="font-bold text-[1.1rem] mb-2">Don&apos;t see your industry?</div>
            <p className="text-muted text-[0.9rem] mb-4">We build custom AI systems for every business model.</p>
            <a href="#contact" className="btn-primary inline-flex">
              Book Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
