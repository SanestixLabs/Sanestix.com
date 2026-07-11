import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/data/navigation';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-cyan)">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#060b14] border-t border-[rgba(0,229,208,0.1)] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-4 gap-12 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        {/* Brand */}
        <div>
          <Link href="/" aria-label="Sanestix Home" className="inline-block mb-4">
            <Image src="/images/logos/LOGO.png" alt="Sanestix" width={120} height={36} className="h-9 w-auto object-contain" />
          </Link>
          <p className="text-[rgba(255,255,255,0.5)] text-[0.85rem] leading-[1.7] mb-5">
            Pakistan&apos;s AI-powered web development &amp; automation agency. We build intelligent systems that capture leads, run automations, and scale revenue — 24/7, on autopilot.
          </p>
          <div className="flex gap-3">
            {navigation.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(0,229,208,0.12)] flex items-center justify-center text-[var(--color-cyan)] transition-all hover:bg-[rgba(0,229,208,0.1)] hover:border-[var(--color-cyan)]"
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-white font-bold text-[0.82rem] tracking-[0.08em] uppercase mb-4">Quick Links</div>
          <nav className="flex flex-col gap-2.5">
            {navigation.footer.quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener' : undefined}
                className={`text-[rgba(255,255,255,0.5)] no-underline text-[0.85rem] hover:text-[#00e5d0] transition-colors ${l.highlight ? '!text-[var(--color-cyan)] !font-semibold' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <div className="text-white font-bold text-[0.82rem] tracking-[0.08em] uppercase mb-4">Our Services</div>
          <nav className="flex flex-col gap-2.5">
            {navigation.footer.services.map((l) => (
              <a key={l.label} href={l.href} className="text-[rgba(255,255,255,0.5)] no-underline text-[0.85rem] hover:text-[#00e5d0] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <div className="text-white font-bold text-[0.82rem] tracking-[0.08em] uppercase mb-4">Contact</div>
          <nav className="flex flex-col gap-2.5">
            <a href="mailto:contact@sanestix.com" className="text-[rgba(255,255,255,0.5)] no-underline text-[0.85rem] hover:text-[#00e5d0] transition-colors">contact@sanestix.com</a>
            <a href="tel:+923014422951" className="text-[rgba(255,255,255,0.5)] no-underline text-[0.85rem] hover:text-[#00e5d0] transition-colors">+92-301-4422951</a>
            <span className="text-[var(--color-muted)] text-[0.85rem]">Lahore, Punjab, Pakistan</span>
            <a href="https://wa.me/923014422951" target="_blank" rel="noopener" className="text-[var(--color-cyan)] no-underline text-[0.85rem] font-semibold hover:text-white transition-colors">Chat on WhatsApp</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto px-8 mt-12 pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between flex-wrap gap-4 max-[520px]:flex-col max-[520px]:text-center">
        <p className="text-[rgba(255,255,255,0.35)] text-[0.78rem]">
          © 2026 Sanestix. All rights reserved. Built with AI &amp; passion in Pakistan
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-[rgba(255,255,255,0.35)] no-underline text-[0.78rem] hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-[rgba(255,255,255,0.35)] no-underline text-[0.78rem] hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/refund-policy" className="text-[rgba(255,255,255,0.35)] no-underline text-[0.78rem] hover:text-white transition-colors">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'whatsapp': return <WhatsAppIcon />;
    case 'instagram': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
    case 'linkedin': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'facebook': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
    case 'twitter': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>;
    default: return null;
  }
}
