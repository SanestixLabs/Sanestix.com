'use client';

import { Check, Zap, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';

export default function SaaSProducts() {
  return (
    <section className="py-28" id="products">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Our SaaS Products"
            title={<>Beyond Services — <GradientText>Intelligent Platforms</GradientText></>}
            description="We don't just build for clients. We build for the future. Our own SaaS products are live, production-grade tools you can start using today."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Flow Card */}
          <ScrollReveal>
            <div
              onClick={() => window.open('https://flow.sanestix.com', '_blank', 'noopener')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://flow.sanestix.com', '_blank', 'noopener'); }}
              className="bg-card border border-border-cyan rounded-2xl p-8 cursor-pointer relative overflow-hidden group hover:-translate-y-1 hover:shadow-glow transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,208,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,208,0.1)] flex items-center justify-center">
                    <Zap className="w-7 h-7 text-cyan" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-green-500 text-[0.75rem] font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />Live
                  </div>
                </div>
                <div className="font-extrabold text-[1.6rem] mb-1">Flow</div>
                <div className="text-muted text-[0.85rem] mb-4">by Sanestix</div>
                <p className="text-muted text-[0.9rem] leading-[1.7] mb-5">
                  Automate your entire business communication flow — WhatsApp, Instagram, CRM, and lead pipelines — from a single, beautifully designed dashboard.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {['WhatsApp & Instagram automation', 'Visual flow builder — no code needed', 'AI-powered lead qualification', 'Real-time CRM sync & analytics'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.85rem]">
                      <Check className="w-3.5 h-3.5 text-cyan mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-cyan font-bold text-[0.9rem] group-hover:gap-3 transition-all">
                    Try Flow Free <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-muted text-[0.78rem]">flow.sanestix.com</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Coming Soon */}
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-border rounded-2xl p-8 opacity-60 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[rgba(98,106,114,0.1)] flex items-center justify-center">
                  <Clock className="w-7 h-7 text-muted" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[rgba(98,106,114,0.1)] text-muted text-[0.75rem] font-bold">Coming Soon</div>
              </div>
              <div className="font-extrabold text-[1.6rem] text-muted mb-1">Next Product</div>
              <div className="text-muted text-[0.85rem] mb-4">by Sanestix</div>
              <p className="text-muted text-[0.9rem] leading-[1.7] mb-6 flex-1">
                We&apos;re building something new. Stay tuned — our next product is designed to solve a critical gap in how businesses manage AI-powered customer relationships.
              </p>
              <div className="flex items-center gap-2 text-muted text-[0.82rem]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
                Launching Q3 2026 — Follow us for updates
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
