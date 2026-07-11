'use client';

import { Check } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { packages } from '@/data/packages';

export default function Packages() {
  return (
    <section className="py-28" id="packages">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Packages"
            title={<>Pick Your <GradientText>Growth Package</GradientText></>}
            description={`Three tiers designed to match where your business is — and where it's going. All packages are quote-based. Book a free call to get your custom estimate.`}
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-7 h-full flex flex-col transition-all hover:-translate-y-1 ${pkg.featured ? 'bg-gradient-to-b from-[rgba(0,229,208,0.08)] to-card border-2 border-border-cyan shadow-glow' : 'bg-card border border-border hover:border-border-cyan'}`}>
                <div className="text-cyan text-[0.75rem] font-semibold uppercase tracking-wider mb-2">{pkg.label}</div>
                <div className="font-extrabold text-[1.4rem] mb-3">{pkg.name}</div>
                <div className="text-muted text-[0.875rem] leading-[1.7] mb-5">{pkg.description}</div>
                <div className="text-[0.75rem] font-bold uppercase tracking-wider text-cyan border-t border-border pt-4 mb-4">{pkg.dividerText}</div>
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.85rem]">
                      <Check className="w-[15px] h-[15px] text-cyan mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/923014422951?text=${pkg.whatsappMessage}`}
                  target="_blank"
                  rel="noopener"
                  className={pkg.ctaVariant === 'primary' ? 'btn-primary justify-center' : 'btn-ghost justify-center'}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* Badge row */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {['Free strategy call included', 'No lock-in contracts', 'Custom scope, custom quote', 'Ongoing support included'].map((b) => (
              <div key={b} className="flex items-center gap-2 text-muted text-[0.82rem] font-medium">
                <Check className="w-3.5 h-3.5" />
                {b}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
