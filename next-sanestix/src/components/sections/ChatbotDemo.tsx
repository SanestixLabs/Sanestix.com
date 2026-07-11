'use client';

import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Container from '@/components/ui/Container';
import GradientText from '@/components/ui/GradientText';
import { fetchBotReply } from '@/lib/chatbot';

interface ChatMsg {
  type: 'bot' | 'user';
  text: string;
  time: string;
}

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ type: 'bot', text: 'Hi! I am the Sanestix AI Assistant. Ask me anything about our AI web development services, automation packages, or timelines!', time: now() }]);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    msgsRef.current?.scrollTo({ top: msgsRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  async function send(msg: string) {
    if (typing || !msg.trim()) return;
    setMessages((prev) => [...prev, { type: 'user', text: msg, time: now() }]);
    setInput('');
    setTyping(true);
    const reply = await fetchBotReply(msg);
    setTyping(false);
    setMessages((prev) => [...prev, { type: 'bot', text: reply, time: now() }]);
  }

  return (
    <section className="py-28" id="demo">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <div className="section-tag">Try It Live</div>
            <h2 className="font-extrabold text-[clamp(2.2rem,3.5vw,3.2rem)] tracking-[-0.04em] leading-[1.05] mb-4">
              Your AI Assistant <GradientText>Working Right Now</GradientText>
            </h2>
            <p className="text-muted text-[0.95rem] leading-[1.7] mb-6">
              This is exactly how your AI chatbot will look and perform on your website — instant, intelligent, and always on-brand.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Replies in milliseconds — never keeps leads waiting',
                'Handles FAQs, pricing, booking & objections',
                'Captures & qualifies leads automatically, 24/7',
                'Trained on your products, tone & workflows',
                'Syncs every lead to your CRM instantly',
                'Escalates hot leads to your human team',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-[0.9rem]">
                  <Check className="w-4 h-4 text-cyan mt-0.5 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary self-start">
              Build Mine Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </ScrollReveal>

          {/* Chat Widget */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-glow-lg">
              {/* Header */}
              <div className="flex items-center gap-3 p-5 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-cyan-dark flex items-center justify-center text-[0.7rem] font-extrabold text-[#060b14]">SX</div>
                <div className="flex-1">
                  <div className="font-bold text-[0.9rem]">Sanestix AI Assistant</div>
                  <div className="flex items-center gap-1.5 text-muted text-[0.75rem]">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />Online · Replies instantly
                  </div>
                </div>
                <div className="text-muted text-[0.75rem] font-semibold px-3 py-1 rounded-full bg-[rgba(0,229,208,0.06)] border border-border">Demo</div>
              </div>

              {/* Messages */}
              <div ref={msgsRef} className="chatbot-msgs p-5 h-[320px] overflow-y-auto space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`msg ${m.type}`}>
                    <div className="msg-avatar">{m.type === 'bot' ? 'SX' : 'You'}</div>
                    <div>
                      <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: m.text }} />
                      <span className="msg-time">{m.time}</span>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="msg bot">
                    <div className="msg-avatar">SX</div>
                    <div className="typing-indicator">
                      <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Replies */}
              <div className="flex gap-2 px-5 pb-3 flex-wrap">
                {['Services', 'Packages', 'Timeline', 'Free Call'].map((qr, i) => {
                  const msgs = ['What services do you offer?', 'What are your packages?', 'How fast is delivery?', 'Book a free call'];
                  return (
                    <button key={qr} onClick={() => send(msgs[i])} className="px-3 py-1.5 rounded-full border border-border text-[0.78rem] font-semibold text-muted hover:border-cyan hover:text-cyan transition-colors bg-transparent cursor-pointer">
                      {qr}
                    </button>
                  );
                })}
              </div>

              {/* Input */}
              <div className="flex items-center gap-3 px-5 pb-5">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); } }}
                  placeholder="Type a message…"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-[rgba(5,12,20,0.035)] text-[0.9rem] outline-none focus:border-border-cyan transition-colors"
                />
                <button onClick={() => send(input)} aria-label="Send" className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-cyan-dark flex items-center justify-center cursor-pointer border-none shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#060b14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
