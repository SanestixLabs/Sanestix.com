'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28" id="faq">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="FAQ"
            title={<>Frequently Asked <GradientText>Questions</GradientText></>}
            description="Everything you need to know about working with Sanestix"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-[760px] mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-xl transition-all ${openIndex === i ? 'border-border-cyan bg-[rgba(0,229,208,0.02)]' : 'border-border'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none font-semibold text-[0.95rem] text-text hover:text-cyan transition-colors"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 text-muted shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-muted text-[0.9rem] leading-[1.7] animate-[fade-in-up_0.3s_ease]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
