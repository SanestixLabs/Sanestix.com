'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import { team } from '@/data/team';

export default function Team() {
  return (
    <section className="py-28" id="team">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Our Team"
            title={<>Meet Our <GradientText>Leadership</GradientText></>}
            description="The people behind every system — and directly reachable by every client"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-border-cyan transition-all hover:-translate-y-1">
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover object-top transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,11,20,0.9)] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-cyan text-[0.75rem] font-semibold uppercase tracking-wider mb-1">{member.role}</div>
                    <div className="text-white font-extrabold text-[1.1rem]">{member.name}</div>
                    <div className="text-[rgba(255,255,255,0.6)] text-[0.82rem] leading-[1.6] mt-2">{member.bio}</div>
                    <a href={member.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-cyan text-[0.8rem] font-semibold mt-3 no-underline hover:text-white transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
