'use client';

import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { processFlows } from '@/data/processFlows';

const TAB_LABELS = ['Website', 'WhatsApp', 'Instagram', 'eCommerce'];

export default function ProcessFlow() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const flow = processFlows[activeFlow];

  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flow.steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [activeFlow, flow.steps.length]);

  const switchFlow = useCallback((idx: number) => {
    setActiveFlow(idx);
    setActiveStep(0);
  }, []);

  const step = flow.steps[activeStep];

  return (
    <section className="py-28 bg-bg-alt" id="process">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="How It Works"
            title={<>See the Full <GradientText>AI Automation in Action</GradientText></>}
            description="Watch how your AI system handles every touchpoint — from first contact to closed deal."
          />
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {TAB_LABELS.map((label, i) => (
              <button
                key={label}
                onClick={() => switchFlow(i)}
                className={`px-5 py-2.5 rounded-full text-[0.85rem] font-semibold border transition-all cursor-pointer ${
                  activeFlow === i
                    ? 'bg-[rgba(0,229,208,0.1)] border-border-cyan text-cyan shadow-[0_0_16px_rgba(0,229,208,0.15)]'
                    : 'bg-transparent border-border text-muted hover:border-border-cyan hover:text-cyan'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            {/* Node Row */}
            <div className="flex justify-between items-start mb-8 relative px-4">
              {/* SVG Connectors */}
              <svg className="absolute inset-0 w-full h-[60px] pointer-events-none" viewBox="0 0 1000 60" preserveAspectRatio="none">
                {flow.steps.slice(0, -1).map((_, i) => {
                  const n = flow.steps.length;
                  const pad = 40;
                  const total = 1000 - pad * 2;
                  const x1 = pad + (i / (n - 1)) * total;
                  const x2 = pad + ((i + 1) / (n - 1)) * total;
                  const cx = (x1 + x2) / 2;
                  return (
                    <path
                      key={i}
                      d={`M ${x1} 30 Q ${cx} 14 ${x2} 30`}
                      className={`pf-connector-line ${i < activeStep ? 'lit' : ''}`}
                    />
                  );
                })}
              </svg>

              {flow.steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none relative z-10 group flex-1 min-w-0`}
                >
                  <div className={`pf-node-circle ${i === activeStep ? '!border-cyan !bg-[rgba(0,229,208,0.1)] !shadow-[0_0_20px_rgba(0,229,208,0.3)]' : ''}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={i === activeStep ? 'var(--color-cyan)' : 'var(--color-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className={`text-[0.72rem] font-semibold text-center max-[768px]:hidden transition-colors ${i === activeStep ? 'text-cyan' : 'text-muted'}`}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {flow.steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all ${
                    i === activeStep
                      ? 'bg-cyan w-7 shadow-[0_0_12px_rgba(0,229,208,0.5)]'
                      : 'bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,229,208,0.3)]'
                  }`}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>

            {/* Detail Card */}
            <div
              key={`${activeFlow}-${activeStep}`}
              className="bg-card border border-border rounded-2xl p-8 max-w-[700px] mx-auto animate-[fade-in-up_0.35s_cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(0,229,208,0.1)] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-muted text-[0.78rem] font-semibold">
                  Step {activeStep + 1} of {flow.steps.length} — {flow.label}
                </div>
              </div>
              <h3 className="font-bold text-[1.15rem] mb-2">{step.detail}</h3>
              <p className="text-muted text-[0.9rem] leading-[1.7] mb-4">{step.desc}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,229,208,0.08)] text-cyan text-[0.82rem] font-bold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
                {step.stat}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
