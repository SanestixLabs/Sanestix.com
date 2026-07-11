'use client';

import { useState, useRef } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);

    const fd = new FormData(formRef.current);
    const name = fd.get('name') as string;
    const email = fd.get('email') as string;
    const phone = fd.get('phone') as string;
    const company = fd.get('company') as string;
    const service = fd.get('service') as string;
    const message = fd.get('message') as string;

    const waMsg = encodeURIComponent(
      `Hi Sanestix! New inquiry from website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nPackage: ${service}\n\nMessage:\n${message}`,
    );
    window.open(`https://wa.me/923014422951?text=${waMsg}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubmitting(false);
      formRef.current?.reset();
    }, 4000);
  }

  return (
    <section className="py-28" id="contact">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Get in Touch"
            tagIcon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            }
            title={<>Start Your <GradientText>AI Transformation</GradientText></>}
            description="Tell us about your business and we'll design the perfect AI automation system for you — free of charge."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info Side */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                {[
                  { icon: 'chat', label: 'WhatsApp', value: '+92-301-4422951', href: 'https://wa.me/923014422951' },
                  { icon: 'mail', label: 'Email', value: 'contact@sanestix.com', href: 'mailto:contact@sanestix.com' },
                  { icon: 'clock', label: 'Response Time', value: 'Within 2–4 hours', href: '' },
                  { icon: 'pin', label: 'Location', value: 'Lahore, Punjab, Pakistan', href: '' },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,208,0.08)] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-muted text-[0.75rem] font-medium">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="text-[0.9rem] font-semibold no-underline text-inherit hover:text-cyan transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[0.9rem] font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="font-bold mb-1">Prefer to chat directly?</div>
                <p className="text-muted text-[0.875rem] leading-[1.6] mb-4">
                  We typically respond within a few hours. Message us on WhatsApp and let&apos;s talk about your business goals.
                </p>
                <a
                  href="https://wa.me/923014422951?text=Hi%20Sanestix!%20I'd%20like%20to%20discuss%20an%20AI-powered%20website%20for%20my%20business."
                  target="_blank" rel="noopener" className="btn-whatsapp w-full justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp Now
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="font-bold mb-2">Free 30-Min Strategy Call</div>
                <p className="text-muted text-[0.875rem] leading-[1.7]">
                  We&apos;ll map your automation opportunities, identify the right package, and give you a clear timeline. No commitment, no pressure.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <form ref={formRef} onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fname" className="block text-[0.82rem] font-semibold mb-1.5">Full Name *</label>
                    <input type="text" id="fname" name="name" required placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="femail" className="block text-[0.82rem] font-semibold mb-1.5">Email Address *</label>
                    <input type="email" id="femail" name="email" required placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fphone" className="block text-[0.82rem] font-semibold mb-1.5">Phone / WhatsApp</label>
                    <input type="tel" id="fphone" name="phone" placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="fcompany" className="block text-[0.82rem] font-semibold mb-1.5">Company Name</label>
                    <input type="text" id="fcompany" name="company" placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="fservice" className="block text-[0.82rem] font-semibold mb-1.5">Package Interested In *</label>
                  <select id="fservice" name="service" required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors">
                    <option value="">Select a package</option>
                    <option>Package 1 — AI Website Starter</option>
                    <option>Package 2 — Growth Automation Suite</option>
                    <option>Package 3 — eCommerce AI System</option>
                    <option>Not sure — help me decide</option>
                    <option>Custom / Enterprise</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="fmessage" className="block text-[0.82rem] font-semibold mb-1.5">Tell us about your business *</label>
                  <textarea id="fmessage" name="message" rows={4} required
                    placeholder="What does your business do? What's your biggest growth challenge right now?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors resize-y" />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`btn-primary w-full justify-center ${submitted ? '!bg-gradient-to-r !from-green-500 !to-green-600' : ''}`}
                >
                  {submitted ? '✅ Opening WhatsApp... We\'ll be in touch!' : (
                    <>
                      Send Message &amp; Request Free Call
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-muted text-[0.78rem]">
                  Or reach us directly:{' '}
                  <a href="https://wa.me/923014422951" target="_blank" rel="noopener" className="text-cyan no-underline">+92-301-4422951</a>
                </p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
