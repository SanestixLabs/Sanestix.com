'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import GradientText from '@/components/ui/GradientText';

export default function About() {
  return (
    <section className="py-28" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div className="section-tag self-start">Our Story</div>
            <h2 className="font-extrabold text-[clamp(2.2rem,3.5vw,3.2rem)] tracking-[-0.04em] leading-[1.05] mb-6">
              Why We <GradientText>Started Sanestix</GradientText>
            </h2>
            <p className="text-muted text-[0.95rem] leading-[1.7] mb-4">
              Saad and Wahab watched small business owners in Lahore struggle with the same painful problem: their WhatsApp and Instagram were flooded with messages, but their website did nothing. Leads slipped away. Customers got frustrated. Sales were lost — not because of bad products, but because communication was broken and entirely manual.
            </p>
            <p className="text-muted text-[0.95rem] leading-[1.7] mb-6">
              They built Sanestix in 2024 to fix that — by combining custom web development with real AI. Not off-the-shelf chatbots. Not templates. Real systems that learn your workflow, speak in your voice, and work around the clock so you don&apos;t have to.
            </p>
            <div className="bg-[rgba(0,229,208,0.04)] border border-border-cyan rounded-xl p-6 text-[0.9rem] leading-[1.7] italic text-text-secondary">
              &ldquo;We don&apos;t build websites. We build revenue systems that run on AI — and we stay with you after launch to make sure they actually deliver.&rdquo;
              <br /><br />
              <strong className="text-cyan not-italic">— Saad Faisal Qureshi, CEO</strong>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {[
                { icon: 'users', value: '15+', label: 'Businesses automated across PK & UAE' },
                { icon: 'activity', value: '100k+', label: 'AI-handled messages on behalf of clients' },
                { icon: 'clock', value: '2–7 days', label: 'Average time from strategy call to go-live' },
                { icon: 'shield', value: 'GDPR', label: 'Compliant — your customer data is always secure' },
              ].map((s) => (
                <div key={s.value} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 transition-all hover:border-border-cyan">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,208,0.08)] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[1.2rem] bg-gradient-to-br from-cyan to-cyan-dark bg-clip-text text-transparent">{s.value}</div>
                    <div className="text-muted text-[0.82rem]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
