'use client';

import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
      id="home"
      style={{
        background: `linear-gradient(90deg, rgba(3,8,18,0.88) 0%, rgba(3,8,18,0.68) 44%, rgba(3,8,18,0.28) 100%), url("/images/hero/hero-bg.png") center/cover no-repeat`,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-[fade-in-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            <div className="section-tag mb-6 animate-[tag-pulse_3s_ease-in-out_infinite,fade-in-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              Pakistan&apos;s AI Web Development Agency
            </div>
            <h1 className="font-extrabold text-[clamp(2.8rem,5vw,4.6rem)] leading-[1.0] tracking-[-0.04em] mb-5 text-white animate-[fade-in-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
              AI-Powered Websites That <span className="grad">Convert Visitors Into Customers 24/7</span>
            </h1>
            <p className="text-[#626a72] text-[1.05rem] leading-[1.7] max-w-[480px] mb-10 animate-[fade-in-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
              We build intelligent web systems with AI chatbots, WhatsApp &amp; Instagram automation, CRM integration, and eCommerce — so your business captures and closes leads while you sleep.
            </p>
            <div className="flex gap-4 flex-wrap mb-12 animate-[fade-in-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]">
              <a href="#contact" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.42-1.41a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Get Free Strategy Call
              </a>
              <a href="#packages" className="btn-ghost">View Packages</a>
            </div>
            <div className="flex gap-6 flex-wrap animate-[fade-in-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.7s_both]">
              {['AI Web Dev', 'AI Chatbot', 'WhatsApp', 'Instagram', 'eCommerce'].map((pill) => (
                <div key={pill} className="flex items-center gap-1.5 text-[#626a72] text-[0.8rem] font-medium opacity-70 hover:opacity-100 hover:text-cyan transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  {pill}
                </div>
              ))}
            </div>
          </div>

          {/* Robot Visual — simplified placeholder, robot SVG is complex */}
          <div className="relative flex justify-center items-center animate-[fade-in-right_0.9s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] max-lg:hidden">
            <div className="relative w-[460px] h-[460px] flex items-center justify-center" style={{ perspective: '900px' }}>
              {/* Orbit rings */}
              <div className="absolute w-[320px] h-[320px] border border-dashed border-[rgba(0,229,208,0.15)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                <div className="absolute w-2 h-2 rounded-full bg-cyan shadow-[0_0_12px_var(--color-cyan)] -top-1 left-1/2 -ml-1" />
              </div>
              <div className="absolute w-[460px] h-[460px] border border-dashed border-[rgba(0,229,208,0.15)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slower">
                <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-dark shadow-[0_0_10px_var(--color-cyan-dark)] -bottom-0.75 right-[20%]" />
              </div>

              {/* Data cards */}
              <div className="absolute top-[10%] left-[-10%] bg-card border border-border-cyan rounded-[14px] px-4 py-2.5 backdrop-blur-[12px] flex items-center gap-2 text-[0.75rem] font-semibold text-text whitespace-nowrap z-5 pointer-events-none animate-[float-card-1_4s_ease-in-out_infinite]">
                <div className="w-[7px] h-[7px] rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)] animate-pulse-dot" />
                <span>AI Chatbot Live</span>
              </div>
              <div className="absolute top-[30%] right-[-14%] bg-card border border-border-cyan rounded-[14px] px-4 py-2.5 backdrop-blur-[12px] flex items-center gap-2 text-[0.75rem] font-semibold text-text whitespace-nowrap z-5 pointer-events-none animate-[float-card-3_6s_ease-in-out_infinite]">
                <div className="w-[7px] h-[7px] rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)] animate-pulse-dot" />
                <span>Leads Captured</span>
              </div>
              <div className="absolute bottom-[18%] right-[-12%] bg-card border border-border-cyan rounded-[14px] px-4 py-2.5 backdrop-blur-[12px] flex items-center gap-2 text-[0.75rem] font-semibold text-text whitespace-nowrap z-5 pointer-events-none animate-[float-card-2_5s_ease-in-out_infinite]">
                <div className="w-[7px] h-[7px] rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)] animate-pulse-dot" />
                <span>CRM Synced</span>
              </div>

              {/* Robot SVG (inline, matching original) */}
              <div className="relative z-2" style={{ transformStyle: 'preserve-3d' }}>
                <div className="w-[340px] h-[400px] relative drop-shadow-[0_20px_60px_rgba(0,229,208,0.35)] animate-float">
                  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <radialGradient id="headGrad" cx="40%" cy="30%" r="70%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#d8e8f0" /></radialGradient>
                      <radialGradient id="bodyGrad2" cx="40%" cy="20%" r="80%"><stop offset="0%" stopColor="#f0f8ff" /><stop offset="100%" stopColor="#c8daea" /></radialGradient>
                      <linearGradient id="headphoneL" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4a90e8" /><stop offset="100%" stopColor="#2563b0" /></linearGradient>
                      <linearGradient id="headphoneR" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a90e8" /><stop offset="100%" stopColor="#2563b0" /></linearGradient>
                      <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00ffe8" /><stop offset="60%" stopColor="#00c8b8" /><stop offset="100%" stopColor="#009988" /></radialGradient>
                      <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.25)" /></filter>
                      <filter id="hpShadow"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(30,80,160,0.5)" /></filter>
                    </defs>
                    {/* Headphones */}
                    <path d="M 52 88 Q 20 88 18 62 Q 16 36 52 36" stroke="url(#headphoneL)" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#hpShadow)" />
                    <ellipse cx="22" cy="88" rx="14" ry="18" fill="url(#headphoneL)" filter="url(#hpShadow)" />
                    <ellipse cx="22" cy="88" rx="8" ry="11" fill="#1a4a9a" opacity="0.6" />
                    <path d="M 148 88 Q 180 88 182 62 Q 184 36 148 36" stroke="url(#headphoneR)" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#hpShadow)" />
                    <ellipse cx="178" cy="88" rx="14" ry="18" fill="url(#headphoneR)" filter="url(#hpShadow)" />
                    <ellipse cx="178" cy="88" rx="8" ry="11" fill="#1a4a9a" opacity="0.6" />
                    {/* Head */}
                    <rect x="36" y="24" width="128" height="118" rx="44" fill="url(#headGrad)" filter="url(#softShadow)" />
                    <rect x="52" y="42" width="96" height="78" rx="28" fill="#04101a" />
                    <rect x="52" y="42" width="96" height="78" rx="28" fill="none" stroke="#00e5d0" strokeWidth="1.2" strokeOpacity="0.4" />
                    {/* Eyes */}
                    <circle cx="80" cy="74" r="13" fill="#00120f" />
                    <circle cx="80" cy="74" r="10" fill="url(#eyeGlow)" filter="url(#glow2)"><animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="74" cy="68" r="3.5" fill="rgba(255,255,255,0.7)" />
                    <circle cx="120" cy="74" r="13" fill="#00120f" />
                    <circle cx="120" cy="74" r="10" fill="url(#eyeGlow)" filter="url(#glow2)"><animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite" begin="0.4s" /></circle>
                    <circle cx="114" cy="68" r="3.5" fill="rgba(255,255,255,0.7)" />
                    {/* Smile */}
                    <path d="M 76 103 Q 100 118 124 103" stroke="#00e5d0" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#glow2)"><animate attributeName="d" values="M 76 103 Q 100 118 124 103;M 76 103 Q 100 120 124 103;M 76 103 Q 100 118 124 103" dur="4s" repeatCount="indefinite" /></path>
                    {/* Neck */}
                    <rect x="88" y="140" width="24" height="14" rx="6" fill="#d0dde8" />
                    {/* Body */}
                    <rect x="44" y="152" width="112" height="58" rx="22" fill="url(#bodyGrad2)" filter="url(#softShadow)" />
                    <rect x="62" y="162" width="76" height="36" rx="12" fill="rgba(0,180,200,0.08)" stroke="rgba(0,229,208,0.2)" strokeWidth="1" />
                    {/* Heartbeat */}
                    <polyline points="68,180 74,172 79,186 85,175 91,182 97,170 103,182 109,175 115,183 121,172 126,180 131,175 136,180" fill="none" stroke="#00e5d0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" filter="url(#glow2)">
                      <animate attributeName="points" values="68,180 74,172 79,186 85,175 91,182 97,170 103,182 109,175 115,183 121,172 126,180 131,175 136,180;68,180 74,184 79,170 85,180 91,172 97,185 103,172 109,180 115,170 121,184 126,175 131,182 136,180;68,180 74,172 79,186 85,175 91,182 97,170 103,182 109,175 115,183 121,172 126,180 131,175 136,180" dur="2.2s" repeatCount="indefinite" />
                    </polyline>
                    <circle cx="126" cy="190" r="4" fill="#22c55e"><animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" /></circle>
                  </svg>
                  {/* Ground glow */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[200px] h-[30px] rounded-full animate-glow-pulse pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,208,0.4) 0%, transparent 70%)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
