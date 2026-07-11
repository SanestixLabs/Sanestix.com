'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-28" id="testimonials">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Client Results"
            title={<>What Our Clients <GradientText>Are Saying</GradientText></>}
            description="Real businesses, real results. See how Sanestix has transformed lead generation and automation for Pakistani businesses."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full flex flex-col transition-all hover:-translate-y-1 hover:border-border-cyan">
                <div className="text-[1.2rem] mb-3 text-amber-400">★★★★★</div>
                <div className="text-[0.9rem] leading-[1.7] text-text-secondary mb-5 flex-1 italic">{t.quote}</div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-cyan-dark flex items-center justify-center text-[0.7rem] font-extrabold text-[#060b14]">{t.initials}</div>
                  <div className="flex-1">
                    <div className="font-bold text-[0.9rem]">{t.name}</div>
                    <div className="text-muted text-[0.78rem]">{t.role}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[rgba(0,229,208,0.08)] text-cyan text-[0.72rem] font-semibold whitespace-nowrap">{t.badge}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
