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

/* ── DEMO CHATBOT ── */
const demoReplies = {
  'what services do you offer?': 'We build AI-powered websites, chatbots, WhatsApp & Instagram automation, CRM integration, and full eCommerce systems — all custom-engineered for your business. 🚀',
  'what are your packages?': 'We have 3 packages:\n\n🔹 Starter — AI Website + Chatbot\n🔹 Growth — Full social automation\n🔹 Enterprise — eCommerce AI System\n\nAll packages are quote-based — reach out for a free estimate!',
  'how fast is delivery?': 'Most projects go live in 2–7 days. Starter in 5–7 days, Growth in 7–12 days, Enterprise 2–3 weeks. We\'ve even gone live in 48 hours for urgent cases ⚡',
  'book a free call': 'Absolutely! Book your free 30-min strategy call: 👉 <a href="#contact" style="color:var(--cyan)">Fill out the form below</a> or message us on <a href="https://wa.me/923014422951" target="_blank" style="color:var(--cyan)">WhatsApp</a>.',
};
function getReply(msg) {
  const lower = msg.toLowerCase();
  for (const [k, v] of Object.entries(demoReplies)) { if (lower.includes(k.split(' ')[0]) || lower === k) return v; }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) return 'We work on a custom quote basis — every business is different! Reach out for a free strategy call and we\'ll give you a precise quote tailored to your needs 🎯';
  if (lower.includes('crm')) return 'We integrate with HubSpot, Zoho, Salesforce, Pipedrive, Notion, Google Sheets, and most other CRMs. If you don\'t have one yet, we\'ll recommend the best fit!';
  if (lower.includes('whatsapp') || lower.includes('instagram')) return 'Yes! We automate both WhatsApp and Instagram — DM auto-replies, comment triggers, lead qualification, follow-up sequences 📱';
  return 'Great question! The best way is a quick free call with our team. <a href="#contact" style="color:var(--cyan)">Click here to book yours →</a>';
}
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
function sendDemoMsg() {
  const input = document.getElementById('demoInput');
  const msg = input.value.trim(); if (!msg) return;
  addMsg('user', msg); input.value = '';
  const t = showTyping();
  setTimeout(() => { t.remove(); addMsg('bot', getReply(msg)); }, 900 + Math.random() * 600);
}
function sendQuickReply(msg) {
  addMsg('user', msg);
  const t = showTyping();
  setTimeout(() => { t.remove(); addMsg('bot', getReply(msg)); }, 900 + Math.random() * 600);
}
setTimeout(() => addMsg('bot', '👋 Hi! I\'m the Sanestix AI Assistant. Ask me about our AI web development services, automation, or timelines!'), 600);

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
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath();
}

/* ── UC1: WEBSITE CHATBOT ── */
(function () {
  const canvas = document.getElementById('ucCanvas1'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, msgs = [], lastMsgTime = -999;
  const msgData = [
    { role: 'user', text: 'Hi, I need pricing info' },
    { role: 'bot', text: 'Of course! What\'s your budget?' },
    { role: 'user', text: 'Around PKR 100k–200k' },
    { role: 'bot', text: 'Starter package is perfect! ✨' },
    { role: 'bot', text: 'Want me to book a free call?' },
    { role: 'user', text: 'Yes please!' },
    { role: 'bot', text: '✅ Booked! Check your email.' },
  ];
  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio;
  }
  resize(); window.addEventListener('resize', resize);
  function draw() {
    t += 0.016;
    if (t - lastMsgTime > 1.1 && msgs.length < msgData.length) { msgs.push({ ...msgData[msgs.length], born: t, alpha: 0 }); lastMsgTime = t; }
    if (t > msgData.length * 1.2 + 3) { msgs = []; t = 0; lastMsgTime = -999; }
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = C.gridLine; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const hg = ctx.createLinearGradient(0, 0, W, 0);
    hg.addColorStop(0, 'rgba(0,229,208,0.12)'); hg.addColorStop(1, 'rgba(0,184,230,0.08)');
    ctx.fillStyle = hg; ctx.fillRect(0, 0, W, 38);
    ctx.fillStyle = C.cyan; ctx.font = 'bold 11px Sora,sans-serif'; ctx.fillText('● Sanestix AI', 12, 24);
    ctx.fillStyle = '#22c55e'; ctx.font = '10px Sora,sans-serif'; ctx.fillText('Online', W - 60, 24);
    const maxVisible = 4, startIdx = Math.max(0, msgs.length - maxVisible);
    const visSlice = msgs.slice(startIdx);
    visSlice.forEach((m, i) => {
      m.alpha = Math.min(1, (t - m.born) / 0.4);
      const isBot = m.role === 'bot';
      const bw = Math.min(m.text.length * 6.2 + 20, W * 0.62);
      const bh = 28; const y = 48 + i * 36 + Math.max(0, (4 - visSlice.length) * 9);
      const x = isBot ? 10 : W - bw - 10;
      ctx.save(); ctx.globalAlpha = m.alpha;
      ctx.beginPath(); roundRect(ctx, x, y, bw, bh, 10);
      ctx.fillStyle = isBot ? 'rgba(0,229,208,0.1)' : 'rgba(255,255,255,0.07)'; ctx.fill();
      ctx.strokeStyle = isBot ? 'rgba(0,229,208,0.22)' : 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = C.text; ctx.font = '10.5px Sora,sans-serif'; ctx.fillText(m.text, x + 8, y + 18, bw - 16);
      ctx.restore();
    });
    if (msgs.length < msgData.length) {
      const p = ((t * 3) % 1) < 0.5;
      if (p) { ctx.fillStyle = C.cyan; ctx.fillRect(12, H - 26, 2, 16); }
      ctx.strokeStyle = C.border; ctx.lineWidth = 1;
      ctx.beginPath(); roundRect(ctx, 8, H - 32, W - 16, 24, 8); ctx.stroke();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC2: WHATSAPP AUTOMATION ── */
(function () {
  const canvas = document.getElementById('ucCanvas2'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, phase = 0, phaseT = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);
  const steps = [
    { icon: '📱', label: 'Customer messages at 2 AM' },
    { icon: '⚡', label: 'AI replies in 0.3 seconds' },
    { icon: '🔍', label: 'Qualifies budget & needs' },
    { icon: '📅', label: 'Books discovery call' },
    { icon: '✅', label: 'Lead synced to CRM' },
  ];
  function draw() {
    t += 0.016; phaseT += 0.016;
    if (phaseT > 1.4) { phase = (phase + 1) % steps.length; phaseT = 0; }
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = C.gridLine; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const cx = W / 2, startY = 20, stepH = (H - 40) / steps.length;
    steps.forEach((s, i) => {
      const y = startY + i * stepH + stepH / 2;
      const active = i === phase, done = i < phase;
      const pulse = active ? 0.5 + 0.5 * Math.sin(t * 4) : 0;
      if (i < steps.length - 1) {
        const prog = active ? Math.min(phaseT / 1.4, 1) : done ? 1 : 0;
        ctx.strokeStyle = done ? C.cyan : 'rgba(0,229,208,0.15)'; ctx.lineWidth = 1.5;
        ctx.setLineDash(done ? [] : [4, 4]);
        ctx.beginPath(); ctx.moveTo(cx, y + 14); ctx.lineTo(cx, y + stepH * prog); ctx.stroke();
        ctx.setLineDash([]);
        if (active && prog < 1) { ctx.fillStyle = C.cyan; ctx.beginPath(); ctx.arc(cx, y + stepH * prog, 3, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.save();
      if (active) { ctx.shadowColor = C.cyan; ctx.shadowBlur = 12 + pulse * 8; }
      ctx.beginPath(); ctx.arc(cx, y, active ? 13 : done ? 11 : 10, 0, Math.PI * 2);
      const g = ctx.createRadialGradient(cx, y, 0, cx, y, 13);
      g.addColorStop(0, active || done ? C.cyan : 'rgba(0,229,208,0.2)');
      g.addColorStop(1, active || done ? C.cyan2 : 'rgba(0,229,208,0.05)');
      ctx.fillStyle = active || done ? g : 'rgba(0,229,208,0.08)'; ctx.fill();
      ctx.strokeStyle = active || done ? C.cyan : 'rgba(0,229,208,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.restore();
      ctx.font = `${active ? 13 : 11}px serif`; ctx.textAlign = 'center'; ctx.fillText(s.icon, cx, y + 4.5);
      ctx.textAlign = 'left'; ctx.font = `${active ? 'bold ' : ''}${active ? 11 : 10}px Sora,sans-serif`;
      ctx.fillStyle = active ? C.text : done ? C.cyan : 'rgba(94,125,144,0.7)';
      ctx.globalAlpha = active ? 1 : done ? 0.9 : 0.5;
      ctx.fillText(s.label, cx + 18, y + 4.5); ctx.globalAlpha = 1; ctx.textAlign = 'left';
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC3: INSTAGRAM DM ── */
(function () {
  const canvas = document.getElementById('ucCanvas3'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, hearts = [];
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);
  function spawnHeart() { hearts.push({ x: Math.random() * W, y: H + 10, vy: -(0.6 + Math.random() * 0.8), vx: (Math.random() - 0.5) * 0.4, life: 1, size: 8 + Math.random() * 10, rot: Math.random() * Math.PI }); }
  function draw() {
    t += 0.016; if (Math.random() < 0.04) spawnHeart();
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    const og = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
    og.addColorStop(0, 'rgba(131,58,180,0.08)'); og.addColorStop(0.4, 'rgba(253,29,29,0.05)'); og.addColorStop(0.8, 'rgba(252,176,69,0.04)'); og.addColorStop(1, 'transparent');
    ctx.fillStyle = og; ctx.fillRect(0, 0, W, H);
    const pw = 90, ph = 148, px = (W - pw) / 2, py = (H - ph) / 2 - 10;
    ctx.save(); ctx.shadowColor = 'rgba(131,58,180,0.3)'; ctx.shadowBlur = 20;
    ctx.strokeStyle = 'rgba(131,58,180,0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); roundRect(ctx, px, py, pw, ph, 14); ctx.stroke(); ctx.restore();
    ctx.fillStyle = 'rgba(131,58,180,0.25)'; ctx.beginPath(); roundRect(ctx, px + pw / 2 - 18, py + 4, 36, 6, 3); ctx.fill();
    const ig = ctx.createLinearGradient(px, 0, px + pw, 0);
    ig.addColorStop(0, 'rgba(131,58,180,0.3)'); ig.addColorStop(0.5, 'rgba(253,29,29,0.2)'); ig.addColorStop(1, 'rgba(252,176,69,0.3)');
    ctx.fillStyle = ig; ctx.beginPath(); roundRect(ctx, px + 2, py + 16, pw - 4, 28, 8); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = 'bold 8.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Direct Messages', px + pw / 2, py + 34);
    const dms = [{ text: 'price?', y: 0, user: true }, { text: 'DM sent! 📩', y: 1, user: false }, { text: 'Check prices →', y: 2, user: false }];
    dms.forEach((d, i) => {
      const bx = d.user ? px + 6 : px + pw - 62; const by = py + 52 + i * 26; const bw = 55, bh = 18;
      const wave = Math.sin(t * 2 + i * 1.2) * 1.5;
      ctx.fillStyle = d.user ? 'rgba(253,29,29,0.15)' : 'rgba(131,58,180,0.15)';
      ctx.beginPath(); roundRect(ctx, bx, by + wave, bw, bh, 6); ctx.fill();
      ctx.strokeStyle = d.user ? 'rgba(253,29,29,0.3)' : 'rgba(131,58,180,0.3)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = '8px Sora,sans-serif'; ctx.textAlign = 'left'; ctx.fillText(d.text, bx + 5, by + wave + 12);
    });
    const bprog = 0.5 + 0.5 * Math.sin(t * 1.5);
    ctx.save(); ctx.globalAlpha = 0.85 + bprog * 0.15; ctx.shadowColor = C.cyan; ctx.shadowBlur = 8 + bprog * 6;
    ctx.fillStyle = C.card; ctx.strokeStyle = C.cyan; ctx.lineWidth = 1.2;
    ctx.beginPath(); roundRect(ctx, px + pw + 8, py + ph / 2 - 14, 72, 28, 8); ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.cyan; ctx.font = 'bold 8px Sora,sans-serif'; ctx.textAlign = 'center'; ctx.fillText('✅ CRM Synced', px + pw + 44, py + ph / 2 + 4);
    ctx.restore();
    hearts = hearts.filter(h => {
      h.x += h.vx; h.y += h.vy; h.life -= 0.01; if (h.life <= 0 || h.y < -20) return false;
      ctx.save(); ctx.globalAlpha = h.life * 0.7; ctx.translate(h.x, h.y); ctx.rotate(h.rot);
      ctx.font = `${h.size}px serif`; ctx.textAlign = 'center'; ctx.fillText('❤️', 0, 0); ctx.restore(); return true;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();


/* ── UC4: CRM LEAD PIPELINE — Radial Network Graph ── */
(function () {
  const canvas = document.getElementById('ucCanvas4'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);

  const channels = [
    { label: 'Website', icon: '🌐', col: 'rgba(0,229,208,', angle: -Math.PI * 0.85 },
    { label: 'WhatsApp', icon: '💬', col: 'rgba(34,197,94,', angle: -Math.PI * 0.5 },
    { label: 'Instagram', icon: '📷', col: 'rgba(168,85,247,', angle: -Math.PI * 0.15 },
    { label: 'Chatbot', icon: '🤖', col: 'rgba(59,130,246,', angle: Math.PI * 0.15 },
    { label: 'Email', icon: '✉️', col: 'rgba(251,191,36,', angle: Math.PI * 0.5 },
  ];

  // Particles traveling from channel nodes to CRM hub
  let particles = [];
  let particleTimer = 0;
  const activeChan = { idx: 0, t: 0 };

  function spawnParticle(chanIdx) {
    const ch = channels[chanIdx];
    const r = Math.min(W, H) * 0.34;
    const cx = W / 2, cy = H / 2 + 4;
    particles.push({
      chanIdx,
      progress: 0,
      startX: cx + Math.cos(ch.angle) * r,
      startY: cy + Math.sin(ch.angle) * r,
      col: ch.col,
    });
  }

  function draw() {
    t += 0.016;
    particleTimer += 0.016;

    if (particleTimer > 0.38) {
      activeChan.idx = (activeChan.idx + 1) % channels.length;
      for (let i = 0; i < 3; i++) setTimeout(() => spawnParticle(activeChan.idx), i * 90);
      particleTimer = 0;
    }
    particles.forEach(p => { p.progress += 0.028; });
    particles = particles.filter(p => p.progress < 1.15);

    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2 + 4;
    const orbitR = Math.min(W, H) * 0.34;

    // Draw orbit ring
    ctx.save();
    ctx.strokeStyle = 'rgba(0,229,208,0.07)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 8]);
    ctx.beginPath(); ctx.arc(cx, cy, orbitR, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();

    // Draw connection lines from channels to center
    channels.forEach((ch, i) => {
      const nx = cx + Math.cos(ch.angle) * orbitR;
      const ny = cy + Math.sin(ch.angle) * orbitR;
      const isActive = i === activeChan.idx;
      const alpha = isActive ? 0.35 + 0.25 * Math.sin(t * 6) : 0.1;
      ctx.strokeStyle = `${ch.col}${alpha})`;
      ctx.lineWidth = isActive ? 1.5 : 0.8;
      ctx.setLineDash(isActive ? [] : [3, 6]);
      ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(cx, cy); ctx.stroke();
      ctx.setLineDash([]);
    });

    // Draw particles
    particles.forEach(p => {
      const ease = p.progress < 0.5 ? 2 * p.progress * p.progress : -1 + (4 - 2 * p.progress) * p.progress;
      const px = p.startX + (cx - p.startX) * Math.min(ease, 1);
      const py = p.startY + (cy - p.startY) * Math.min(ease, 1);
      const fade = p.progress > 0.85 ? 1 - (p.progress - 0.85) / 0.3 : 1;
      ctx.save();
      ctx.globalAlpha = fade * 0.85;
      ctx.shadowColor = `${p.col}1)`; ctx.shadowBlur = 8;
      ctx.fillStyle = `${p.col}1)`;
      ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    });

    // Draw channel nodes
    channels.forEach((ch, i) => {
      const nx = cx + Math.cos(ch.angle) * orbitR;
      const ny = cy + Math.sin(ch.angle) * orbitR;
      const isActive = i === activeChan.idx;
      const pulse = isActive ? 1 + 0.2 * Math.sin(t * 7) : 1;
      const nr = (isActive ? 16 : 13) * pulse;

      ctx.save();
      if (isActive) { ctx.shadowColor = `${ch.col}0.9)`; ctx.shadowBlur = 22; }
      ctx.fillStyle = `${ch.col}${isActive ? 0.22 : 0.1})`;
      ctx.beginPath(); ctx.arc(nx, ny, nr, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = `${ch.col}${isActive ? 0.9 : 0.35})`;
      ctx.lineWidth = isActive ? 1.8 : 1;
      ctx.stroke();
      ctx.restore();

      ctx.font = `${isActive ? 13 : 11}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(ch.icon, nx, ny + 4.5);

      // Label
      const lx = cx + Math.cos(ch.angle) * (orbitR + 22);
      const ly = cy + Math.sin(ch.angle) * (orbitR + 22);
      ctx.fillStyle = isActive ? `${ch.col}0.95)` : C.muted;
      ctx.font = `${isActive ? 'bold ' : ''}7.5px Sora,sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(ch.label, lx, ly + 3);
    });

    // Draw CRM hub (center)
    const hubPulse = 0.5 + 0.5 * Math.sin(t * 2.2);
    const hubR = 20 + hubPulse * 2;
    ctx.save();
    ctx.shadowColor = 'rgba(0,229,208,0.6)'; ctx.shadowBlur = 24 + hubPulse * 10;
    // Outer glow ring
    ctx.strokeStyle = `rgba(0,229,208,${0.12 + hubPulse * 0.1})`;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, hubR + 8, 0, Math.PI * 2); ctx.stroke();
    // Hub fill
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR);
    grad.addColorStop(0, 'rgba(0,229,208,0.35)');
    grad.addColorStop(1, 'rgba(0,229,208,0.08)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, hubR, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = `rgba(0,229,208,${0.6 + hubPulse * 0.3})`;
    ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();

    ctx.fillStyle = 'rgba(0,229,208,0.95)';
    ctx.font = 'bold 7.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('CRM', cx, cy - 3);
    ctx.font = '6.5px Sora,sans-serif';
    ctx.fillStyle = 'rgba(0,229,208,0.65)';
    ctx.fillText('HUB', cx, cy + 7);

    // Count badge top
    const scored = 6 + Math.floor(t * 0.4) % 8;
    const nb = 0.5 + 0.5 * Math.sin(t * 2.5);
    ctx.save(); ctx.globalAlpha = 0.85 + nb * 0.15;
    ctx.fillStyle = 'rgba(34,197,94,0.1)'; ctx.strokeStyle = 'rgba(34,197,94,0.5)'; ctx.lineWidth = 1;
    ctx.beginPath(); roundRect(ctx, W / 2 - 60, 5, 120, 20, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#22c55e'; ctx.font = 'bold 8px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`⚡ ${scored} leads synced today`, W / 2, 18); ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC5: ECOMMERCE — Animated Order Journey + Revenue Chart ── */
(function () {
  const canvas = document.getElementById('ucCanvas5'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);

  const steps = [
    { icon: '🛒', label: 'Cart',     col: 'rgba(0,229,208,'  },
    { icon: '💳', label: 'Paid',     col: 'rgba(34,197,94,'  },
    { icon: '📦', label: 'Packed',   col: 'rgba(59,130,246,' },
    { icon: '🚚', label: 'Shipped',  col: 'rgba(168,85,247,' },
    { icon: '⭐', label: 'Reviewed', col: 'rgba(251,191,36,' },
  ];

  // Revenue bars data — fills over time
  const barValues = [0.42, 0.58, 0.51, 0.72, 0.65, 0.81, 0.95];
  const barLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  let barFill = 0; // 0→1 animation progress
  let cartPulse = [];
  let currentStep = 0;
  let stepT = 0;

  // Abandoned cart recovery popup
  let recoveryAlpha = 0, recoveryDir = 1;

  function draw() {
    t += 0.016;
    stepT += 0.016;
    if (stepT > 1.1) { currentStep = (currentStep + 1) % steps.length; stepT = 0; }
    barFill = Math.min(1, barFill + 0.012);

    recoveryAlpha += recoveryDir * 0.02;
    if (recoveryAlpha > 1) { recoveryAlpha = 1; recoveryDir = -1; }
    if (recoveryAlpha < 0.15) { recoveryAlpha = 0.15; recoveryDir = 1; }

    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);

    const topH = H * 0.46;
    const botH = H - topH - 12;

    // ── TOP: Order journey pipeline ──
    const nY = topH * 0.54;
    const spacing = (W - 30) / (steps.length - 1);

    steps.forEach((s, i) => {
      const nx = 15 + i * spacing;
      const done = i < currentStep;
      const active = i === currentStep;
      const progress = active ? Math.min(stepT / 1.1, 1) : 0;

      // Connector beam
      if (i < steps.length - 1) {
        const nx2 = 15 + (i + 1) * spacing;
        const lineProgress = done ? 1 : (active ? progress : 0);
        // Track line
        ctx.strokeStyle = 'rgba(0,229,208,0.08)'; ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.beginPath(); ctx.moveTo(nx + 15, nY); ctx.lineTo(nx2 - 15, nY); ctx.stroke();
        if (lineProgress > 0) {
          const endX = nx + 15 + (nx2 - 15 - (nx + 15)) * lineProgress;
          ctx.strokeStyle = `${s.col}0.7)`; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(nx + 15, nY); ctx.lineTo(endX, nY); ctx.stroke();
        }
        // Traveling dot
        if (active && progress < 1) {
          const dotX = nx + 15 + (nx2 - 15 - (nx + 15)) * progress;
          ctx.save(); ctx.shadowColor = `${s.col}1)`; ctx.shadowBlur = 14;
          ctx.fillStyle = `${s.col}1)`; ctx.beginPath(); ctx.arc(dotX, nY, 4.5, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }

      // Node
      const nr = active ? 17 + Math.sin(t * 6) * 1.5 : done ? 14 : 12;
      ctx.save();
      if (active) { ctx.shadowColor = `${s.col}0.8)`; ctx.shadowBlur = 20; }
      ctx.fillStyle = active ? `${s.col}0.22)` : done ? `${s.col}0.13)` : 'rgba(255,255,255,0.03)';
      ctx.beginPath(); ctx.arc(nx, nY, nr, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = active || done ? `${s.col}0.8)` : 'rgba(0,229,208,0.12)';
      ctx.lineWidth = active ? 2 : 1; ctx.stroke();
      ctx.restore();

      ctx.font = `${active ? 14 : 11}px serif`; ctx.textAlign = 'center';
      ctx.fillText(s.icon, nx, nY + 5);

      // Label
      ctx.fillStyle = active ? `${s.col}1)` : done ? `${s.col}0.6)` : C.muted;
      ctx.font = `${active ? 'bold ' : ''}7px Sora,sans-serif`;
      ctx.fillText(s.label, nx, nY + 26);

      // Checkmark for done
      if (done) {
        ctx.save(); ctx.globalAlpha = 0.8;
        ctx.fillStyle = `${s.col}1)`; ctx.font = 'bold 9px serif';
        ctx.fillText('✓', nx, nY - 22); ctx.restore();
      }
    });

    // Step label pill
    const cs = steps[currentStep];
    const labelW = 120, labelX = W / 2 - labelW / 2;
    ctx.save(); ctx.globalAlpha = 0.9;
    ctx.fillStyle = `${cs.col}0.1)`; ctx.strokeStyle = `${cs.col}0.55)`; ctx.lineWidth = 1;
    ctx.beginPath(); roundRect(ctx, labelX, 7, labelW, 20, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = `${cs.col}1)`; ctx.font = 'bold 8px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`${cs.icon} ${cs.label} — processing...`, W / 2, 20); ctx.restore();

    // ── BOTTOM: Mini revenue bars ──
    const bY = topH + 8;
    const barCount = barValues.length;
    const barAreaW = W - 20;
    const bw = barAreaW / barCount - 4;

    ctx.fillStyle = C.muted; ctx.font = '7px Sora,sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Weekly Revenue', 10, bY + 10);
    ctx.fillStyle = 'rgba(34,197,94,0.9)'; ctx.textAlign = 'right';
    ctx.font = 'bold 7.5px Sora,sans-serif';
    ctx.fillText('↑ 23% vs last week', W - 10, bY + 10);

    barValues.forEach((v, i) => {
      const bx = 10 + i * (bw + 4);
      const maxH = botH - 28;
      const fillH = maxH * v * barFill;
      const by = bY + 14 + maxH - fillH;
      const isToday = i === 6;
      const grad = ctx.createLinearGradient(0, by, 0, by + fillH);
      grad.addColorStop(0, `rgba(0,229,208,${isToday ? 0.9 : 0.5})`);
      grad.addColorStop(1, `rgba(0,229,208,${isToday ? 0.3 : 0.15})`);
      ctx.fillStyle = grad;
      ctx.beginPath(); roundRect(ctx, bx, by, bw, fillH, 3); ctx.fill();
      if (isToday) {
        ctx.strokeStyle = 'rgba(0,229,208,0.7)'; ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.fillStyle = isToday ? C.cyan : C.muted;
      ctx.font = `${isToday ? 'bold ' : ''}6.5px Sora,sans-serif`; ctx.textAlign = 'center';
      ctx.fillText(barLabels[i], bx + bw / 2, bY + 14 + maxH + 9);
    });

    // Cart recovery badge
    ctx.save(); ctx.globalAlpha = recoveryAlpha;
    ctx.fillStyle = 'rgba(251,191,36,0.1)'; ctx.strokeStyle = 'rgba(251,191,36,0.5)'; ctx.lineWidth = 1;
    ctx.shadowColor = 'rgba(251,191,36,0.3)'; ctx.shadowBlur = 8;
    ctx.beginPath(); roundRect(ctx, W / 2 - 80, H - 24, 160, 18, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(251,191,36,0.95)'; ctx.font = 'bold 7.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('🛒 Abandoned cart recovered +PKR 4,200', W / 2, H - 11); ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC6: APPOINTMENT BOOKING — Calendar Grid + Live Countdown ── */
(function () {
  const canvas = document.getElementById('ucCanvas6'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);

  // Calendar: 5 cols (Mon-Fri) x 4 rows (time slots)
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  const times = ['9:00', '11:00', '2:00', '4:00'];

  // Pre-assigned bookings
  const booked = [
    { d: 0, t: 0, name: 'Dr. Farhan', col: 'rgba(34,197,94,' },
    { d: 0, t: 2, name: 'Sara M.',    col: 'rgba(0,229,208,' },
    { d: 1, t: 1, name: 'Ahmed R.',   col: 'rgba(168,85,247,' },
    { d: 2, t: 0, name: 'Nadia A.',   col: 'rgba(59,130,246,' },
    { d: 2, t: 3, name: 'Omar S.',    col: 'rgba(251,191,36,' },
    { d: 3, t: 2, name: 'Hina T.',    col: 'rgba(34,197,94,' },
    { d: 4, t: 1, name: 'Bilal K.',   col: 'rgba(0,229,208,' },
  ];

  // "New booking" animation — sweeps in periodically
  let sweepCycle = 0, sweepPhase = 0; // sweepPhase: 0=idle, 1=animating
  const newBookings = [
    { d: 1, t: 3, name: 'Zara A.',   col: 'rgba(168,85,247,' },
    { d: 3, t: 0, name: 'Kamran B.', col: 'rgba(251,191,36,' },
    { d: 4, t: 3, name: 'Fatima R.', col: 'rgba(34,197,94,' },
  ];
  let newBookIdx = 0, newBookProgress = 0, activeNewBook = null;
  let reminderBadgeAlpha = 0, reminderBadgeTimer = 0;

  // Stats ring
  let statsReveal = 0;

  function draw() {
    t += 0.016; sweepCycle += 0.016; statsReveal = Math.min(1, statsReveal + 0.008);

    if (sweepCycle > 2.4 && sweepPhase === 0) {
      activeNewBook = newBookings[newBookIdx % newBookings.length];
      newBookIdx++; newBookProgress = 0; sweepPhase = 1;
    }
    if (sweepPhase === 1) {
      newBookProgress += 0.04;
      if (newBookProgress >= 1) { sweepPhase = 0; sweepCycle = 0; reminderBadgeAlpha = 1; reminderBadgeTimer = 0; }
    }
    reminderBadgeTimer += 0.016;
    if (reminderBadgeTimer > 2) reminderBadgeAlpha = Math.max(0, reminderBadgeAlpha - 0.04);

    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);

    const padL = 30, padT = 30;
    const gridW = W - padL - 8;
    const gridH = H - padT - 34;
    const cellW = gridW / days.length;
    const cellH = gridH / times.length;

    // Grid lines
    ctx.strokeStyle = 'rgba(0,229,208,0.07)'; ctx.lineWidth = 0.8;
    for (let i = 0; i <= days.length; i++) {
      const x = padL + i * cellW;
      ctx.beginPath(); ctx.moveTo(x, padT); ctx.lineTo(x, padT + gridH); ctx.stroke();
    }
    for (let j = 0; j <= times.length; j++) {
      const y = padT + j * cellH;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + gridW, y); ctx.stroke();
    }

    // Day headers
    days.forEach((d, i) => {
      const x = padL + i * cellW + cellW / 2;
      ctx.fillStyle = C.muted; ctx.font = 'bold 7px Sora,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(d, x, padT - 8);
    });

    // Time labels
    times.forEach((tm, j) => {
      const y = padT + j * cellH + cellH / 2 + 3;
      ctx.fillStyle = C.muted; ctx.font = '6.5px Sora,sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(tm, padL - 3, y);
    });

    // Draw booked cells
    booked.forEach(b => {
      const cx = padL + b.d * cellW + 2;
      const cy2 = padT + b.t * cellH + 2;
      const cw = cellW - 4, ch = cellH - 4;
      ctx.fillStyle = `${b.col}0.15)`;
      ctx.beginPath(); roundRect(ctx, cx, cy2, cw, ch, 4); ctx.fill();
      ctx.strokeStyle = `${b.col}0.4)`; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = `${b.col}0.9)`; ctx.font = 'bold 6.5px Sora,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(b.name, cx + cw / 2, cy2 + ch / 2 + 2.5);
    });

    // New booking sweep animation
    if (activeNewBook && sweepPhase === 1) {
      const b = activeNewBook;
      const cx = padL + b.d * cellW + 2;
      const cy2 = padT + b.t * cellH + 2;
      const cw = cellW - 4, ch = cellH - 4;
      const ease = newBookProgress < 0.5 ? 2 * newBookProgress * newBookProgress : -1 + (4 - 2 * newBookProgress) * newBookProgress;

      ctx.save();
      ctx.shadowColor = `${b.col}0.9)`; ctx.shadowBlur = 18;
      ctx.fillStyle = `${b.col}${0.1 + ease * 0.2})`;
      ctx.beginPath(); roundRect(ctx, cx, cy2, cw * ease, ch, 4); ctx.fill();
      ctx.strokeStyle = `${b.col}${0.5 + ease * 0.4})`; ctx.lineWidth = 1.5; ctx.stroke();
      if (ease > 0.5) {
        ctx.fillStyle = `${b.col}${(ease - 0.5) * 2})`; ctx.font = 'bold 6.5px Sora,sans-serif'; ctx.textAlign = 'center';
        ctx.globalAlpha = (ease - 0.5) * 2;
        ctx.fillText(b.name, cx + cw / 2, cy2 + ch / 2 + 2.5);
      }
      ctx.restore();

      // Scan line effect
      ctx.save(); ctx.globalAlpha = (1 - newBookProgress) * 0.5;
      ctx.strokeStyle = `${b.col}1)`; ctx.lineWidth = 1.5;
      const scanX = cx + cw * ease;
      ctx.beginPath(); ctx.moveTo(scanX, cy2 - 3); ctx.lineTo(scanX, cy2 + ch + 3); ctx.stroke();
      ctx.restore();
    }

    // Stats bar at bottom
    const statsY = padT + gridH + 8;
    const totalBooked = booked.length + (newBookIdx > 0 ? Math.min(newBookIdx, newBookings.length) : 0);
    const pct = Math.min(totalBooked / 12, 1);
    ctx.fillStyle = 'rgba(0,229,208,0.06)';
    ctx.beginPath(); roundRect(ctx, padL, statsY, gridW, 13, 6); ctx.fill();
    ctx.fillStyle = 'rgba(0,229,208,0.25)';
    ctx.beginPath(); roundRect(ctx, padL, statsY, gridW * pct * statsReveal, 13, 6); ctx.fill();
    ctx.strokeStyle = 'rgba(0,229,208,0.2)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = C.cyan; ctx.font = 'bold 7px Sora,sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`${totalBooked}/12 slots filled this week`, padL + 5, statsY + 9);

    // Reminder badge
    if (reminderBadgeAlpha > 0) {
      ctx.save(); ctx.globalAlpha = reminderBadgeAlpha;
      ctx.fillStyle = 'rgba(34,197,94,0.12)'; ctx.strokeStyle = 'rgba(34,197,94,0.6)'; ctx.lineWidth = 1;
      ctx.shadowColor = 'rgba(34,197,94,0.4)'; ctx.shadowBlur = 12;
      ctx.beginPath(); roundRect(ctx, W / 2 - 74, H - 24, 148, 18, 100); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#22c55e'; ctx.font = 'bold 7.5px Sora,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('✅ Auto-reminder sent · No-show prevented', W / 2, H - 11); ctx.restore();
    }

    // Header bar
    const hb = 0.5 + 0.5 * Math.sin(t * 1.8);
    ctx.save(); ctx.globalAlpha = 0.85 + hb * 0.15;
    ctx.fillStyle = 'rgba(0,229,208,0.06)'; ctx.strokeStyle = 'rgba(0,229,208,0.2)'; ctx.lineWidth = 1;
    ctx.beginPath(); roundRect(ctx, 8, 4, W - 16, 18, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.cyan; ctx.font = 'bold 7.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('📅 AI Scheduler — Week View', W / 2, 16); ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
})();
