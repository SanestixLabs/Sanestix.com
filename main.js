/* ============================================================
   SANESTIX — Main JavaScript
   ============================================================ */

/* ── THEME ── */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('sanestix-theme', t);
  document.getElementById('btnDark').classList.toggle('active', t === 'dark');
  document.getElementById('btnLight').classList.toggle('active', t === 'light');
  const nav = document.getElementById('navbar');
  if (t === 'light') {
    nav.style.setProperty('--nav-text', '#0d1f2d');
    nav.style.setProperty('--nav-muted', '#4a7080');
  } else {
    nav.style.setProperty('--nav-text', '#e8f4f8');
    nav.style.setProperty('--nav-muted', '#5e7d90');
  }
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

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyeIJHqHxTsDhFm4oTUFt-YU4CjQAziAETRf6gGrRmZ1ucr1oL9XUISQXS2VXS2O4o/exec';

  // Send as URLSearchParams — works reliably with no-cors
  const payload = new URLSearchParams({
    name:    document.getElementById('fname').value.trim(),
    email:   document.getElementById('femail').value.trim(),
    phone:   document.getElementById('fphone').value.trim(),
    company: document.getElementById('fcompany').value.trim(),
    service: document.getElementById('fservice').value,
    message: document.getElementById('fmessage').value.trim(),
    source:  'Website Contact Form'
  });

  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode:   'no-cors',
      body:   payload   // NO custom headers — lets browser set content-type automatically
    });

    btn.innerHTML = '✅ Sent! We\'ll call you within 2–4 hours.';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    if (status) status.style.display = 'none';
    form.reset();

    setTimeout(() => {
      const waMsg = encodeURIComponent(
        `Hi Sanestix! New lead just submitted the website form.\n\nName: ${payload.get('name')}\nEmail: ${payload.get('email')}\nPhone: ${payload.get('phone')}\nPackage: ${payload.get('service')}`
      );
      window.open(`https://wa.me/923014422951?text=${waMsg}`, '_blank');
    }, 1500);

    setTimeout(() => {
      btn.innerHTML = 'Send Message &amp; Request Free Call <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.style.background = '';
      btn.disabled = false;
    }, 5000);

  } catch (err) {
    btn.textContent = 'Send Message & Request Free Call';
    btn.disabled = false;
    if (status) {
      status.textContent = '❌ Error. Please WhatsApp us directly at +92-301-4422951';
      status.style.color = '#ef4444';
      status.style.display = 'block';
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

/* ── UC4: CRM LEAD PIPELINE ── */
(function () {
  const canvas = document.getElementById('ucCanvas4'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, activeLead = 0, leadT = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);
  const stages = ['New', 'Qualified', 'Proposal', 'Closed'];
  const stageColors = ['rgba(0,229,208,', 'rgba(59,130,246,', 'rgba(168,85,247,', 'rgba(34,197,94,'];
  const leads = [
    { name: 'Ahmed R.', stage: 0, score: 92 }, { name: 'Sara M.', stage: 1, score: 78 },
    { name: 'Farhan K.', stage: 2, score: 85 }, { name: 'Nadia A.', stage: 0, score: 67 },
    { name: 'Omar S.', stage: 3, score: 95 }, { name: 'Hina T.', stage: 1, score: 71 },
  ];
  function draw() {
    t += 0.016; leadT += 0.016;
    if (leadT > 0.8) { activeLead = (activeLead + 1) % leads.length; leadT = 0; }
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = C.gridLine; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const colW = (W - 20) / stages.length, colH = H - 60, colY = 50;
    stages.forEach((s, i) => {
      const cx = 10 + i * colW + colW / 2, x = 10 + i * colW;
      ctx.fillStyle = `${stageColors[i]}0.06)`; ctx.beginPath(); roundRect(ctx, x + 3, colY - 8, colW - 6, colH, 8); ctx.fill();
      ctx.strokeStyle = `${stageColors[i]}0.18)`; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = `${stageColors[i]}0.9)`; ctx.font = 'bold 8.5px Sora,sans-serif'; ctx.textAlign = 'center'; ctx.fillText(s, cx, colY + 8);
      const count = leads.filter(l => l.stage === i).length;
      ctx.fillStyle = `${stageColors[i]}0.6)`; ctx.font = '8px Sora,sans-serif'; ctx.fillText(`${count} lead${count !== 1 ? 's' : ''}`, cx, colY + 20);
    });
    const colCount = [0, 0, 0, 0];
    leads.forEach((l, li) => {
      const i = l.stage, cardX = 13 + i * colW, cardY = colY + 28 + colCount[i] * 34; colCount[i]++;
      const active = li === activeLead, pulse = active ? 0.5 + 0.5 * Math.sin(t * 3) : 0;
      ctx.save();
      if (active) { ctx.shadowColor = stageColors[i].replace('rgba(', '') + 0.4; ctx.shadowBlur = 10 + pulse * 6; }
      ctx.fillStyle = active ? `${stageColors[i]}0.15)` : 'rgba(255,255,255,0.04)';
      ctx.beginPath(); roundRect(ctx, cardX, cardY, colW - 6, 28, 6); ctx.fill();
      ctx.strokeStyle = active ? `${stageColors[i]}0.5)` : `${stageColors[i]}0.15)`; ctx.lineWidth = active ? 1.5 : 1; ctx.stroke();
      ctx.fillStyle = active ? 'rgba(232,244,248,0.95)' : C.muted; ctx.font = `${active ? 'bold ' : ''}8px Sora,sans-serif`;
      ctx.textAlign = 'left'; ctx.fillText(l.name, cardX + 6, cardY + 12);
      const bw = (colW - 16) * l.score / 100;
      ctx.fillStyle = `${stageColors[i]}0.15)`; ctx.beginPath(); roundRect(ctx, cardX + 5, cardY + 17, colW - 16, 5, 2); ctx.fill();
      ctx.fillStyle = `${stageColors[i]}0.7)`; ctx.beginPath(); roundRect(ctx, cardX + 5, cardY + 17, bw, 5, 2); ctx.fill();
      ctx.restore();
    });
    const nb = 0.5 + 0.5 * Math.sin(t * 2.5);
    ctx.save(); ctx.globalAlpha = 0.8 + nb * 0.2;
    ctx.fillStyle = 'rgba(34,197,94,0.12)'; ctx.strokeStyle = 'rgba(34,197,94,0.5)'; ctx.lineWidth = 1;
    ctx.beginPath(); roundRect(ctx, W / 2 - 42, 4, 84, 22, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#22c55e'; ctx.font = 'bold 8.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('⚡ New lead incoming', W / 2, 18.5); ctx.restore();
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC5: ECOMMERCE ── */
(function () {
  const canvas = document.getElementById('ucCanvas5'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, pkgs = [];
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);
  function spawnPkg() { pkgs.push({ x: -30, y: H * 0.38 + Math.random() * H * 0.2, vx: 0.9 + Math.random() * 0.5, size: 20 + Math.random() * 12, rot: 0, rotV: (Math.random() - 0.5) * 0.03, alpha: 0 }); }
  const events = [
    { icon: '🛒', label: 'Order placed', col: 'rgba(0,229,208,' },
    { icon: '💳', label: 'Payment OK', col: 'rgba(34,197,94,' },
    { icon: '📦', label: 'Packing...', col: 'rgba(59,130,246,' },
    { icon: '🚚', label: 'Shipped!', col: 'rgba(168,85,247,' },
    { icon: '⭐', label: 'Review sent', col: 'rgba(251,191,36,' },
  ];
  let evtPhase = 0, evtT = 0;
  function draw() {
    t += 0.016; evtT += 0.016;
    if (evtT > 1.1) { evtPhase = (evtPhase + 1) % events.length; evtT = 0; }
    if (Math.random() < 0.02) spawnPkg();
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    const beltY = H * 0.55, beltH = 14;
    ctx.fillStyle = 'rgba(0,229,208,0.05)'; ctx.beginPath(); roundRect(ctx, 0, beltY, W, beltH, 4); ctx.fill();
    ctx.strokeStyle = 'rgba(0,229,208,0.15)'; ctx.lineWidth = 1; ctx.stroke();
    for (let i = 0; i < 10; i++) {
      const x = ((t * 40) % (W / 5)) + i * (W / 5) - W / 5;
      ctx.strokeStyle = 'rgba(0,229,208,0.08)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, beltY); ctx.lineTo(x + 20, beltY + beltH); ctx.stroke();
    }
    pkgs = pkgs.filter(p => {
      p.x += p.vx; p.rot += p.rotV; p.alpha = Math.min(1, p.alpha + 0.05); if (p.x > W + 40) return false;
      ctx.save(); ctx.globalAlpha = p.alpha; ctx.translate(p.x, beltY - p.size / 2); ctx.rotate(p.rot);
      ctx.fillStyle = 'rgba(59,130,246,0.15)'; ctx.strokeStyle = 'rgba(59,130,246,0.4)'; ctx.lineWidth = 1;
      ctx.beginPath(); roundRect(ctx, -p.size / 2, -p.size / 2, p.size, p.size, 4); ctx.fill(); ctx.stroke();
      ctx.font = `${p.size * 0.6}px serif`; ctx.textAlign = 'center'; ctx.fillText('📦', 0, p.size * 0.22); ctx.restore(); return true;
    });
    const evtX = 10, evtW = W - 20, evtY = 18;
    events.forEach((e, i) => {
      const nx = evtX + i * (evtW / events.length) + evtW / events.length / 2;
      const active = i === evtPhase, done = i < evtPhase;
      if (i < events.length - 1) {
        ctx.strokeStyle = done ? e.col + '0.6)' : 'rgba(0,229,208,0.1)'; ctx.lineWidth = 1; ctx.setLineDash(done ? [] : [3, 3]);
        ctx.beginPath(); ctx.moveTo(nx + 8, evtY); ctx.lineTo(nx + (evtW / events.length) - 8, evtY); ctx.stroke(); ctx.setLineDash([]);
      }
      ctx.save(); if (active) { ctx.shadowColor = e.col + '0.5)'; ctx.shadowBlur = 14; }
      ctx.beginPath(); ctx.arc(nx, evtY, active ? 10 : 7, 0, Math.PI * 2);
      ctx.fillStyle = active || done ? e.col + '0.2)' : 'rgba(0,229,208,0.05)'; ctx.fill();
      ctx.strokeStyle = active || done ? e.col + '0.7)' : 'rgba(0,229,208,0.15)'; ctx.lineWidth = active ? 2 : 1; ctx.stroke();
      ctx.font = `${active ? 10 : 8.5}px serif`; ctx.textAlign = 'center'; ctx.fillText(e.icon, nx, evtY + 3.5); ctx.restore();
      if (active) { ctx.fillStyle = e.col + '0.9)'; ctx.font = 'bold 8px Sora,sans-serif'; ctx.textAlign = 'center'; ctx.fillText(e.label, nx, evtY + 22); }
    });
    const cr = 0.5 + 0.5 * Math.sin(t * 2);
    ctx.save(); ctx.globalAlpha = 0.85 + cr * 0.15;
    ctx.fillStyle = 'rgba(251,191,36,0.1)'; ctx.strokeStyle = 'rgba(251,191,36,0.4)'; ctx.lineWidth = 1;
    ctx.beginPath(); roundRect(ctx, W / 2 - 68, H - 30, 136, 22, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(251,191,36,0.95)'; ctx.font = 'bold 8.5px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('🛒 Abandoned cart recovered automatically', W / 2, H - 15); ctx.restore();
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── UC6: APPOINTMENT BOOKING ── */
(function () {
  const canvas = document.getElementById('ucCanvas6'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  function resize() { const r = canvas.parentElement.getBoundingClientRect(); W = canvas.width = r.width * devicePixelRatio; H = canvas.height = r.height * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); W /= devicePixelRatio; H /= devicePixelRatio; }
  resize(); window.addEventListener('resize', resize);
  const slots = [
    { time: '9:00 AM', label: 'Dr. Farhan', booked: true, col: 'rgba(34,197,94,' },
    { time: '10:30 AM', label: 'Ahmed R.', booked: true, col: 'rgba(0,229,208,' },
    { time: '12:00 PM', label: 'Available', booked: false, col: 'rgba(94,125,144,' },
    { time: '2:00 PM', label: 'Sara M.', booked: true, col: 'rgba(59,130,246,' },
    { time: '3:30 PM', label: 'Booking...', booked: false, col: 'rgba(168,85,247,' },
    { time: '5:00 PM', label: 'Available', booked: false, col: 'rgba(94,125,144,' },
  ];
  const reminders = [{ text: '⏰ Reminder sent → Ahmed' }, { text: '✅ Confirmed → Dr. Farhan' }, { text: '📅 New booking → Sara M.' }];
  let notifQ = 0, notifT = 0;
  function draw() {
    t += 0.016; notifT += 0.016;
    if (notifT > 2) { notifQ = (notifQ + 1) % reminders.length; notifT = 0; }
    const C = ucColors();
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = C.gridLine; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 22) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 22) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const hg = ctx.createLinearGradient(0, 0, W, 0);
    hg.addColorStop(0, 'rgba(0,229,208,0.1)'); hg.addColorStop(1, 'rgba(0,184,230,0.06)');
    ctx.fillStyle = hg; ctx.beginPath(); roundRect(ctx, 8, 8, W - 16, 26, 8); ctx.fill();
    ctx.strokeStyle = 'rgba(0,229,208,0.2)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = C.cyan; ctx.font = 'bold 9px Sora,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText("📅  Today's Bookings — AI Scheduler", W / 2, 25);
    const sH = (H - 72) / slots.length;
    slots.forEach((s, i) => {
      const y = 40 + i * sH; const active = i === notifQ % slots.length; const wave = active ? Math.sin(t * 3) * 1.5 : 0;
      ctx.save(); if (active && s.booked) { ctx.shadowColor = s.col + '0.4)'; ctx.shadowBlur = 8; }
      ctx.fillStyle = s.booked ? `${s.col}0.1)` : 'rgba(255,255,255,0.02)';
      ctx.beginPath(); roundRect(ctx, 10, y + 1 + wave, W - 20, sH - 3, 6); ctx.fill();
      ctx.strokeStyle = s.booked ? `${s.col}0.3)` : 'rgba(94,125,144,0.1)'; ctx.lineWidth = s.booked ? 1.5 : 1; ctx.stroke();
      ctx.fillStyle = s.booked ? `${s.col}0.9)` : C.muted; ctx.font = 'bold 8.5px Sora,sans-serif'; ctx.textAlign = 'left'; ctx.fillText(s.time, 16, y + sH * 0.62 + wave);
      ctx.fillStyle = s.booked ? C.text : C.muted; ctx.font = '8px Sora,sans-serif'; ctx.fillText(s.label, 70, y + sH * 0.62 + wave);
      if (s.booked) { ctx.fillStyle = s.col + '0.9)'; ctx.beginPath(); ctx.arc(W - 20, y + sH * 0.5 + wave, 4, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    const nf = reminders[notifQ];
    const fadeIn = Math.min(1, notifT / 0.4), fadeOut = notifT > 1.6 ? Math.max(0, 1 - (notifT - 1.6) / 0.4) : 1;
    ctx.save(); ctx.globalAlpha = fadeIn * fadeOut;
    ctx.fillStyle = 'rgba(34,197,94,0.12)'; ctx.strokeStyle = 'rgba(34,197,94,0.5)'; ctx.lineWidth = 1.2;
    ctx.shadowColor = 'rgba(34,197,94,0.3)'; ctx.shadowBlur = 10;
    ctx.beginPath(); roundRect(ctx, W / 2 - 70, H - 26, 140, 22, 100); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#22c55e'; ctx.font = 'bold 8px Sora,sans-serif'; ctx.textAlign = 'center'; ctx.shadowBlur = 0;
    ctx.fillText(nf.text, W / 2, H - 11); ctx.restore();
    requestAnimationFrame(draw);
  }
  draw();
})();
