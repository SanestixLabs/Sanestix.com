/* ============================================================
   SANESTIX — Main JavaScript
   ============================================================ */

/* ── THEME ── */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('sanestix-theme', t);
  document.getElementById('btnDark').classList.toggle('active', t === 'dark');
  document.getElementById('btnLight').classList.toggle('active', t === 'light');
  // Nav always stays dark — no nav color changes on theme switch
}
(function () { setTheme(localStorage.getItem('sanestix-theme') || 'dark'); })();

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  const btn = document.getElementById('scrollTopBtn');
  btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});

/* ── HAMBURGER ── */
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenuEl = document.getElementById('mobileMenu');

function openMobile() {
  mobileMenuEl.style.display = 'flex';
  hamburgerBtn.setAttribute('aria-expanded', 'true');
}
function closeMobile() {
  mobileMenuEl.style.display = 'none';
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}
hamburgerBtn.setAttribute('aria-expanded', 'false');
hamburgerBtn.onclick = () => {
  mobileMenuEl.style.display === 'flex' ? closeMobile() : openMobile();
};

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (mobileMenuEl.style.display === 'flex' &&
      !mobileMenuEl.contains(e.target) &&
      !hamburgerBtn.contains(e.target)) {
    closeMobile();
  }
});

// Close mobile menu on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMobile();
});

/* ── SCROLL REVEAL (enhanced with left/right/scale variants) ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));

/* ── STAT COUNTER ANIMATION ── */
function animateCounter(el, target, suffix, duration = 1800) {
  const isFloat = target % 1 !== 0;
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

// Observe stat values and trigger counter when visible
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const text = el.textContent.trim();
    // Parse number and suffix: "50+" → 50, "+", "1M+" → 1, "M+", "2–7" → skip
    const match = text.match(/^(\d+\.?\d*)(.*)/);
    if (match) {
      const num = parseFloat(match[1]);
      const suffix = match[2];
      animateCounter(el, num, suffix);
    }
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-val').forEach(el => statObserver.observe(el));

/* ── BUTTON RIPPLE EFFECT ── */
document.querySelectorAll('.btn-primary, .btn-ghost, .btn-whatsapp, .nav-cta, .price-cta, .form-submit').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none;
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
      background:rgba(255,255,255,0.25);
      animation:ripple 0.6s linear forwards;
    `;
    const prevPosition = this.style.position;
    if (!prevPosition || prevPosition === 'static') this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

/* ── ADD RIPPLE KEYFRAME DYNAMICALLY ── */
if (!document.getElementById('rippleStyle')) {
  const style = document.createElement('style');
  style.id = 'rippleStyle';
  style.textContent = '@keyframes ripple { 0% { transform:scale(0); opacity:0.5; } 100% { transform:scale(1); opacity:0; } }';
  document.head.appendChild(style);
}


/* ── ROBOT EYE TRACKING ── */
const leftPupil = document.getElementById('leftPupil'),
  rightPupil = document.getElementById('rightPupil'),
  robot3D = document.getElementById('robot3D');
const L_EYE = { x: 80, y: 74 }, R_EYE = { x: 120, y: 74 }, EYE_R = 5;
let mX = window.innerWidth / 2, mY = window.innerHeight / 2, curRX = 0, curRY = 0, tgtRX = 0, tgtRY = 0;
document.addEventListener('mousemove', e => { mX = e.clientX; mY = e.clientY; });
function eyeTarget(ec, er) {
  const svg = document.getElementById('robotSVG');
  if (!svg) return { x: 0, y: 0 };
  const r = svg.getBoundingClientRect(), sx = 200 / r.width, sy = 220 / r.height;
  const lx = (mX - r.left) * sx, ly = (mY - r.top) * sy;
  const dx = lx - ec.x, dy = ly - ec.y, d = Math.sqrt(dx * dx + dy * dy), f = Math.min(d / 60, 1), a = Math.atan2(dy, dx);
  return { x: Math.cos(a) * f * er, y: Math.sin(a) * f * er };
}
function animRobot() {
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  tgtRY = (mX - cx) / cx * 18; tgtRX = -(mY - cy) / cy * 10;
  curRX += (tgtRX - curRX) * 0.06; curRY += (tgtRY - curRY) * 0.06;
  if (robot3D) robot3D.style.transform = `rotateX(${curRX}deg) rotateY(${curRY}deg)`;
  const lt = eyeTarget(L_EYE, EYE_R), rt = eyeTarget(R_EYE, EYE_R);
  if (leftPupil) { leftPupil.setAttribute('cx', L_EYE.x + lt.x); leftPupil.setAttribute('cy', L_EYE.y + lt.y); }
  if (rightPupil) { rightPupil.setAttribute('cx', R_EYE.x + rt.x); rightPupil.setAttribute('cy', R_EYE.y + rt.y); }
  requestAnimationFrame(animRobot);
}
animRobot();

/* ── PARTICLE CANVAS ── */
(function () {
  const canvas = document.getElementById('gravCanvas'), ctx = canvas.getContext('2d');
  let W, H, particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
  window.addEventListener('touchstart', e => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }, {passive: true});
  window.addEventListener('touchmove', e => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }, {passive: true});
  window.addEventListener('touchend', () => { mouse.x = null; mouse.y = null; });

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  function Particle() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 1.8 + 0.4; this.opacity = Math.random() * 0.5 + 0.2;
    this.pulse = Math.random() * Math.PI * 2;
  }
  for (let i = 0; i < 90; i++) particles.push(new Particle());
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const theme = document.documentElement.getAttribute('data-theme');
    const c = theme === 'light' ? '0,168,154' : '0,229,208';
    particles.forEach(p => {
      p.pulse += 0.015; p.x += p.vx; p.y += p.vy;

      if (mouse.x !== null && mouse.y !== null) {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let forceDirX = dx / dist;
          let forceDirY = dy / dist;
          let force = (mouse.radius - dist) / mouse.radius;
          p.x += forceDirX * force * 3;
          p.y += forceDirY * force * 3;
        }
      }

      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      const op = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c},${op})`; ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${c},${(1 - dist / 130) * 0.12})`; ctx.lineWidth = 0.7; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── FAQ ── */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => { if (el !== item) el.classList.remove('open'); });
  item.classList.toggle('open', !isOpen);
}

/* ── CHATBOT — n8n Webhook Integration ── */
const N8N_WEBHOOK_URL = 'https://n8n.sanestix.cloud/webhook/cec27be4-1632-4130-9f4d-8dcd075c40ff';

// Conversation history for multi-turn context
const chatHistory = [];
let isBotTyping = false;

function addMsg(type, text, delay = 0) {
  setTimeout(() => {
    const msgs = document.getElementById('demoChatMsgs');
    const div = document.createElement('div'); div.className = `msg ${type}`;
    const initials = type === 'bot' ? 'SX' : 'You';
    div.innerHTML = `<div class="msg-avatar">${initials}</div><div><div class="msg-bubble">${text}</div><span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>`;
    msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
  }, delay);
}

function showTyping() {
  const msgs = document.getElementById('demoChatMsgs');
  const t = document.createElement('div'); t.className = 'msg bot'; t.id = 'typing';
  t.innerHTML = '<div class="msg-avatar">SX</div><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
  return t;
}

async function fetchBotReply(userMessage) {
  chatHistory.push({ role: 'user', content: userMessage });

  const sessionId = getSessionId();

  // Send message as GET query params — matches your current n8n webhook (GET method, Respond: Immediately)
  const params = new URLSearchParams({
    message: userMessage,
    chatInput: userMessage,
    sessionId: sessionId,
    source: 'website_chat'
  });

  try {
    const response = await fetch(`${N8N_WEBHOOK_URL}?${params.toString()}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    // n8n "Respond: Immediately" returns {"message":"Workflow was started"} — means no reply configured yet
    // Once you add a "Respond to Webhook" node in your workflow, it will return the real reply
    if (data.message === 'Workflow was started') {
      // Workflow triggered but no response node set up yet — show a polite holding message
      chatHistory.push({ role: 'assistant', content: '__workflow_started__' });
      return '✅ Message received! Our AI is processing your request. You can also reach us instantly on <a href="https://wa.me/923014422951" target="_blank" style="color:var(--cyan)">WhatsApp</a> for a faster reply.';
    }

    // Parse real reply from n8n Respond to Webhook node
    const reply =
      (Array.isArray(data) && data[0] && (data[0].output || data[0].reply || data[0].message || data[0].text || data[0].response)) ||
      data.output || data.reply || data.text || data.response || data.answer ||
      'Thanks for your message! Our team will be in touch shortly. 🙌';

    chatHistory.push({ role: 'assistant', content: reply });
    return reply;

  } catch (err) {
    console.error('Chatbot webhook error:', err);
    return 'Got your message! Reach us instantly on <a href="https://wa.me/923014422951" target="_blank" style="color:var(--cyan)">WhatsApp</a> 💬';
  }
}

// Stable session ID per browser session
function getSessionId() {
  let sid = sessionStorage.getItem('sx_chat_session');
  if (!sid) { sid = 'sx_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); sessionStorage.setItem('sx_chat_session', sid); }
  return sid;
}

async function sendDemoMsg() {
  if (isBotTyping) return;
  const input = document.getElementById('demoInput');
  const msg = input.value.trim(); if (!msg) return;
  addMsg('user', msg); input.value = '';
  isBotTyping = true;
  const t = showTyping();
  const reply = await fetchBotReply(msg);
  t.remove();
  addMsg('bot', reply);
  isBotTyping = false;
}

async function sendQuickReply(msg) {
  if (isBotTyping) return;
  addMsg('user', msg);
  isBotTyping = true;
  const t = showTyping();
  const reply = await fetchBotReply(msg);
  t.remove();
  addMsg('bot', reply);
  isBotTyping = false;
}

setTimeout(() => addMsg('bot', '👋 Hi! I\'m the Sanestix AI Assistant. Ask me anything about our AI web development services, automation packages, or timelines!'), 600);

/* ── CONTACT FORM ── */
async function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');
  const form = document.getElementById('contactForm');
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  if (status) { status.style.display = 'none'; }

  // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree ID from https://formspree.io
  // Example: 'xpzgkard' => action URL = https://formspree.io/f/xpzgkard
  const FORMSPREE_ID = 'YOUR_FORM_ID';

  // Fallback: if Formspree not configured, send via WhatsApp
  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    const name = document.getElementById('fname').value;
    const email = document.getElementById('femail').value;
    const phone = document.getElementById('fphone').value;
    const company = document.getElementById('fcompany').value;
    const service = document.getElementById('fservice').value;
    const message = document.getElementById('fmessage').value;
    const waMsg = encodeURIComponent(
      `Hi Sanestix! New inquiry from website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nPackage: ${service}\n\nMessage:\n${message}`
    );
    window.open(`https://wa.me/923014422951?text=${waMsg}`, '_blank');
    btn.innerHTML = '✅ Opening WhatsApp... We\'ll be in touch!';
    btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    setTimeout(() => {
      btn.innerHTML = 'Send Message &amp; Request Free Call <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.style.background = ''; btn.disabled = false;
      form.reset();
    }, 4000);
    return;
  }

  try {
    const data = new FormData(form);
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST', body: data, headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      btn.innerHTML = '✅ Message Sent! We\'ll be in touch within 2–4 hours.';
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
      if (status) { status.style.display = 'none'; }
      setTimeout(() => {
        btn.innerHTML = 'Send Message &amp; Request Free Call <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        btn.style.background = ''; btn.disabled = false; form.reset();
      }, 5000);
    } else {
      throw new Error('Form error');
    }
  } catch(err) {
    btn.textContent = 'Send Message & Request Free Call';
    btn.disabled = false;
    if (status) {
      status.textContent = '❌ Something went wrong. Please message us on WhatsApp directly.';
      status.style.color = '#ef4444'; status.style.display = 'block';
    }
  }
}

/* ============================================================
   USE CASE CANVAS ANIMATIONS
   ============================================================ */
function ucColors() {
  const dark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    bg: dark ? '#060c18' : '#ddeef8',
    cyan: '#00e5d0', cyan2: '#00b8e6',
    card: dark ? 'rgba(0,229,208,0.08)' : 'rgba(0,168,154,0.1)',
    border: dark ? 'rgba(0,229,208,0.18)' : 'rgba(0,168,154,0.25)',
    text: dark ? 'rgba(232,244,248,0.9)' : 'rgba(13,31,45,0.9)',
    muted: dark ? 'rgba(94,125,144,0.8)' : 'rgba(74,112,128,0.7)',
    gridLine: dark ? 'rgba(0,229,208,0.04)' : 'rgba(0,168,154,0.06)',
  };
}

/* Shared roundRect helper */

/* ============================================================
   PROCESS FLOW — Interactive animated step-by-step flow
   ============================================================ */
(function () {

  const FLOWS = {
    0: { // Website
      label: 'Website Flow',
      steps: [
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`, label: 'Visitor Lands', detail: 'Visitor arrives on your website', desc: 'A potential customer lands on your site via search, social, or referral — any time of day or night.', stat: 'Entry Point' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`, label: 'AI Greets', detail: 'AI chatbot greets instantly', desc: 'Your AI assistant appears within seconds — no wait, no generic form. It opens with a personalised, on-brand message tailored to the page.', stat: '< 2s response' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>`, label: 'AI Qualifies', detail: 'Intelligent lead qualification', desc: 'The AI asks smart questions to understand budget, intent, and timeline — filtering serious buyers from casual browsers automatically.', stat: '85% qualified' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`, label: 'Lead Captured', detail: 'Contact details auto-collected', desc: 'Name, email, phone, and project brief are captured naturally through conversation — no cold form abandonment.', stat: '3× more leads' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`, label: 'CRM Synced', detail: 'Lead lands in your CRM instantly', desc: 'The lead is scored, tagged, and pushed into your CRM pipeline in real time. Your sales team gets an instant notification.', stat: 'Zero manual work' },
      ]
    },
    1: { // WhatsApp
      label: 'WhatsApp Flow',
      steps: [
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>`, label: 'Message Received', detail: 'Customer sends WhatsApp message', desc: 'A customer messages your business number — at 2 AM, on a public holiday, any time. The AI is always ready.', stat: '24/7 active' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`, label: 'Instant Reply', detail: 'AI replies within seconds', desc: 'A fully human-sounding reply arrives within 3 seconds. The AI knows your products, tone, pricing, and FAQs — trained specifically on your business.', stat: '94% faster' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`, label: 'Qualifies Budget', detail: 'Smart qualification conversation', desc: 'Through natural back-and-forth, the AI uncovers budget, timeline, and need — turning a cold enquiry into a warm, scored lead automatically.', stat: 'Auto-qualified' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`, label: 'Books Call', detail: 'Appointment booked automatically', desc: 'If the lead is hot, the AI books a strategy call directly into your calendar — no back-and-forth scheduling emails needed.', stat: 'Auto-scheduled' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, label: 'CRM + Follow-up', detail: 'Full CRM sync & follow-up sequences', desc: 'Lead data syncs to your CRM instantly. Automated follow-up sequences trigger if no action is taken — no lead ever falls through the cracks.', stat: '0 missed leads' },
      ]
    },
    2: { // Instagram
      label: 'Instagram Flow',
      steps: [
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`, label: 'Comment Trigger', detail: 'Keyword detected in comment', desc: 'Someone comments "price", "info", or any trigger word you define on your post. The AI detects it in real time — even on posts months old.', stat: 'Any post, any time' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`, label: 'Auto DM Sent', detail: 'Instant personalised DM fires', desc: 'A personalised direct message lands in their inbox within seconds of the comment — before they scroll away, before they forget about you.', stat: 'Instant DM' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`, label: 'Product Walk-through', detail: 'AI presents options conversationally', desc: 'The AI walks them through your products, pricing, and options — answering questions and handling objections just like your best sales rep would.', stat: '78% engage' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`, label: 'Info Captured', detail: 'Lead details collected mid-convo', desc: 'Contact details, budget, and interest level are captured naturally through the conversation — no cold form, no friction, no drop-off.', stat: 'Full lead profile' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`, label: 'Hot Lead in CRM', detail: 'Scored lead pushed to pipeline', desc: 'A hot lead lands in your CRM — tagged with source, engagement score, and full conversation history. Your team picks up exactly where AI left off.', stat: 'Ready to close' },
      ]
    },
    3: { // eCommerce
      label: 'eCommerce Flow',
      steps: [
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`, label: 'Order Placed', detail: 'Customer places an order', desc: 'A customer completes checkout on your store. The AI automation engine fires immediately — no manual action needed from your team.', stat: 'Instant trigger' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>`, label: 'Confirmation Sent', detail: 'Automated order confirmation', desc: 'A personalised confirmation message is sent instantly via WhatsApp and email — complete with order summary, timeline, and what to expect next.', stat: 'Zero delays' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`, label: 'Shipping Updates', detail: 'Real-time shipping notifications', desc: 'As the order moves through fulfilment, the AI sends proactive shipping updates — reducing "where is my order?" support tickets to near zero.', stat: '80% fewer tickets' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 002 14.63v3a2 2 0 002 2h16a2 2 0 002-2v-3a2 2 0 00-.97-1.71l-8-4.5a2 2 0 00-2.06 0l-8 4.5z"/><path d="M7 21v-9"/><path d="M17 21v-9"/></svg>`, label: 'Cart Recovery', detail: 'Abandoned cart sequences trigger', desc: 'If a visitor abandons their cart, a timed sequence fires across WhatsApp and email — with a personalised nudge and optional discount to recover the sale.', stat: '32% recovery rate' },
        { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`, label: 'Repeat Purchase', detail: 'Re-engagement campaigns fire', desc: 'Post-delivery follow-ups, review requests, and personalised upsell offers are sent at the perfect time — turning one-time buyers into loyal repeat customers.', stat: '2.4× LTV increase' },
      ]
    }
  };

  let activeFlow = 0;
  let activeStep = 0;
  let autoTimer = null;

  function init() {
    const tabBtns = document.querySelectorAll('.pf-tab');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFlow = parseInt(btn.dataset.flow);
        activeStep = 0;
        renderFlow();
        startAuto();
      });
    });
    renderFlow();
    startAuto();
  }

  function renderFlow() {
    const flow = FLOWS[activeFlow];
    renderNodes(flow);
    renderConnectors(flow);
    renderDetail(flow, activeStep, false);
    renderDots(flow);
    movePacket();
  }

  function renderNodes(flow) {
    const container = document.getElementById('pfNodes');
    if (!container) return;
    container.innerHTML = flow.steps.map((step, i) => `
      <div class="pf-node ${i === activeStep ? 'active' : ''}" data-step="${i}">
        <div class="pf-node-circle">
          <span class="pf-node-num">${i + 1}</span>
          ${step.icon}
        </div>
        <span class="pf-node-label">${step.label}</span>
      </div>
    `).join('');
    container.querySelectorAll('.pf-node').forEach(node => {
      node.addEventListener('click', () => {
        activeStep = parseInt(node.dataset.step);
        updateActive();
        clearAuto();
        startAuto();
      });
    });
  }

  function renderConnectors(flow) {
    const svg = document.getElementById('pfConnectorSvg');
    if (!svg) return;
    // Remove old lines
    svg.querySelectorAll('.pf-connector-line').forEach(l => l.remove());

    const n = flow.steps.length;
    const segments = n - 1;
    const vbW = 1000;
    const vbH = 120;
    const nodeY = vbH / 2;
    const padding = 40;
    const totalW = vbW - padding * 2;

    for (let i = 0; i < segments; i++) {
      const x1 = padding + (i / (n - 1)) * totalW;
      const x2 = padding + ((i + 1) / (n - 1)) * totalW;
      const cx = (x1 + x2) / 2;
      const cpY = nodeY - 18;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1} ${nodeY} Q ${cx} ${cpY} ${x2} ${nodeY}`);
      path.setAttribute('class', `pf-connector-line ${i < activeStep ? 'lit' : ''}`);
      svg.appendChild(path);
    }
  }

  function renderDetail(flow, stepIdx, animate) {
    const step = flow.steps[stepIdx];
    const card = document.getElementById('pfDetailCard');
    if (!card) return;

    const doUpdate = () => {
      document.getElementById('pfDetailIcon').innerHTML = step.icon;
      document.getElementById('pfDetailLabel').textContent = `Step ${stepIdx + 1} of ${flow.steps.length} — ${flow.label}`;
      document.getElementById('pfDetailTitle').textContent = step.detail;
      document.getElementById('pfDetailDesc').textContent = step.desc;
      document.getElementById('pfDetailStat').textContent = step.stat;
    };

    if (animate) {
      card.classList.add('pf-exit');
      setTimeout(() => {
        card.classList.remove('pf-exit');
        card.classList.add('pf-enter');
        doUpdate();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.classList.add('pf-enter-active');
            setTimeout(() => card.classList.remove('pf-enter', 'pf-enter-active'), 350);
          });
        });
      }, 200);
    } else {
      doUpdate();
    }
  }

  function renderDots(flow) {
    const dots = document.getElementById('pfProgressDots');
    if (!dots) return;
    dots.innerHTML = flow.steps.map((_, i) => `
      <div class="pf-dot ${i === activeStep ? 'active' : ''}" data-step="${i}"></div>
    `).join('');
    dots.querySelectorAll('.pf-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        activeStep = parseInt(dot.dataset.step);
        updateActive();
        clearAuto();
        startAuto();
      });
    });
  }

  function movePacket() {
    const packet = document.getElementById('pfPacket');
    const container = document.getElementById('pfNodes');
    if (!packet || !container) return;
    const nodes = container.querySelectorAll('.pf-node');
    if (!nodes.length) return;
    const activeNode = nodes[activeStep];
    const containerRect = container.closest('.pf-flow-wrap').getBoundingClientRect();
    const nodeRect = activeNode.getBoundingClientRect();
    const nodeCenter = nodeRect.left + nodeRect.width / 2 - containerRect.left;
    packet.style.left = nodeCenter + 'px';
    packet.style.top = '50%';
  }

  function updateActive() {
    const flow = FLOWS[activeFlow];
    // Update nodes
    const nodes = document.querySelectorAll('.pf-node');
    nodes.forEach((n, i) => n.classList.toggle('active', i === activeStep));
    // Update connectors
    const lines = document.querySelectorAll('.pf-connector-line');
    lines.forEach((l, i) => l.classList.toggle('lit', i < activeStep));
    // Update dots
    const dots = document.querySelectorAll('.pf-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === activeStep));
    // Update card
    renderDetail(flow, activeStep, true);
    // Move packet
    movePacket();
  }

  function startAuto() {
    clearAuto();
    autoTimer = setInterval(() => {
      const flow = FLOWS[activeFlow];
      activeStep = (activeStep + 1) % flow.steps.length;
      updateActive();
    }, 2800);
  }

  function clearAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-position packet on resize
  window.addEventListener('resize', () => {
    if (document.getElementById('pfNodes')) movePacket();
  });

})();
