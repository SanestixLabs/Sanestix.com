'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { workflowSteps } from '@/data/workflow';
import { Phone, FileText, Code, Table, Rocket, Heart } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  phone: Phone, 'file-text': FileText, code: Code,
  table: Table, rocket: Rocket, heart: Heart,
};

export default function HowItWorks() {
  return (
    <section className="py-28" id="workflow">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Our Process"
            title={<>From First Call to <GradientText>Full Automation</GradientText></>}
            description="A proven 6-step process that delivers your AI-powered system fast — with zero guesswork and clear milestones at every stage."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workflowSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Phone;
            return (
              <ScrollReveal key={step.number} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-7 relative transition-all hover:-translate-y-1 hover:border-border-cyan">
                  <span className="absolute top-5 right-5 text-[2.5rem] font-extrabold text-[rgba(0,229,208,0.08)] leading-none">{step.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,229,208,0.08)] flex items-center justify-center mb-4">
                    <Icon className="w-[22px] h-[22px] text-cyan" />
                  </div>
                  <div className="font-bold text-[1rem] mb-2">{step.title}</div>
                  <p className="text-muted text-[0.875rem] leading-[1.7]">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
