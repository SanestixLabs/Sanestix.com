'use client';

import { Check } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section className="py-28" id="services">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="What We Build"
            title={<>Intelligent Business <GradientText>Systems, Not Just Websites</GradientText></>}
            description="We engineer AI-powered revenue machines that capture leads, qualify them, and convert — around the clock, without manual effort."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.05}>
              <div className="bg-card border border-border rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-border-cyan hover:shadow-glow-lg h-full flex flex-col">
                <span className={`inline-flex self-start px-3 py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider mb-4 ${service.tagVariant === 'primary' ? 'bg-[rgba(0,229,208,0.1)] text-cyan border border-border-cyan' : 'bg-[rgba(0,0,0,0.04)] text-muted border border-border'}`}>
                  {service.tag}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[rgba(0,229,208,0.08)] border border-border-cyan flex items-center justify-center mb-4 text-cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <div className="font-bold text-[1.05rem] mb-2">{service.title}</div>
                <div className="text-muted text-[0.875rem] leading-[1.7] mb-5 flex-1">{service.description}</div>
                <ul className="space-y-2.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.85rem] text-text-secondary">
                      <Check className="w-4 h-4 text-cyan mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-cyan text-[0.85rem] font-bold hover:underline mt-auto">
                  Get a Quote
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
