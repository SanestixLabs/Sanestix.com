'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="py-20 border-b border-border relative overflow-hidden">
      <div className="absolute -left-[100%] top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-[rgba(0,229,208,0.04)] to-transparent animate-[scan-line_5s_linear_infinite]" />
      <Container>
        <div className="grid grid-cols-4 gap-8 text-center max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-transparent transition-all hover:border-border hover:bg-card hover:-translate-y-1 cursor-default text-center">
                <div className="font-extrabold text-[clamp(2rem,4vw,3rem)] bg-gradient-to-br from-cyan to-cyan-dark bg-clip-text text-transparent mb-1 transition-transform hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-muted text-[0.875rem] font-medium">{stat.label}</div>
                <div className="text-muted text-[0.72rem] mt-0.5 opacity-60">{stat.note}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
