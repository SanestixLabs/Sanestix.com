'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { whyCards } from '@/data/whyChooseUs';
import { Shield, Clock, MessageSquare, Users, DollarSign, Monitor } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield, clock: Clock, 'message-square': MessageSquare,
  users: Users, 'dollar-sign': DollarSign, monitor: Monitor,
};

export default function WhyChooseUs() {
  return (
    <section className="py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Why Sanestix"
            title={<>The AI-First <GradientText>Difference</GradientText></>}
            description="We're not freelancers. We're a dedicated AI automation agency — every system we build is engineered for revenue, scalability, and long-term growth."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map((card, i) => {
            const Icon = iconMap[card.icon] || Shield;
            return (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="relative bg-card border border-border rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-border-cyan overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan to-cyan-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,208,0.08)] flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  <div className="font-bold text-[1rem] mb-2">{card.title}</div>
                  <div className="text-muted text-[0.875rem] leading-[1.7]">{card.description}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
