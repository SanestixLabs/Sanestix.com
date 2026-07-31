/* ============================================================
   SANESTIX — AI Chatbot & Robot Tracking
   ============================================================ */

/* Move robot into chatbot demo */
(function () {
  const robotVisual = document.querySelector('.hero-visual');
  const chatbotSlot = document.getElementById('chatbotRobotSlot');
  if (!robotVisual || !chatbotSlot) return;

  robotVisual.removeAttribute('style');
  chatbotSlot.appendChild(robotVisual);
})();

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

/* ── CHATBOT — n8n Webhook Integration ── */
const N8N_WEBHOOK_URL = 'https://n8n.sanestix.cloud/webhook/Chatbot';

const chatHistory = [];
let isBotTyping = false;

function addMsg(type, text, delay = 0) {
  setTimeout(() => {
    const msgs = document.getElementById('demoChatMsgs');
    if (!msgs) return;
    const div = document.createElement('div'); div.className = `msg ${type}`;
    const initials = type === 'bot' ? 'SX' : 'You';
    div.innerHTML = `<div class="msg-avatar">${initials}</div><div><div class="msg-bubble">${text}</div><span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>`;
    msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
  }, delay);
}

function showTyping() {
  const msgs = document.getElementById('demoChatMsgs');
  if (!msgs) return null;
  const t = document.createElement('div'); t.className = 'msg bot'; t.id = 'typing';
  t.innerHTML = '<div class="msg-avatar">SX</div><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
  return t;
}

function getSessionId() {
  let sid = sessionStorage.getItem('sx_chat_session');
  if (!sid) { sid = 'sx_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); sessionStorage.setItem('sx_chat_session', sid); }
  return sid;
}

async function fetchBotReply(userMessage) {
  chatHistory.push({ role: 'user', content: userMessage });
  const sessionId = getSessionId();

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        chatInput: userMessage,
        sessionId: sessionId,
        source: 'website_chat'
      })
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const reply =
      data.output || data.reply || data.message || data.text || data.response ||
      (Array.isArray(data) && data[0] && (data[0].output || data[0].reply || data[0].message || data[0].text)) ||
      'Thanks for your message! Our team will be in touch shortly.';

    chatHistory.push({ role: 'assistant', content: reply });
    return reply;

  } catch (err) {
    console.error('Chatbot webhook error:', err);
    return 'Got your message! Reach us on <a href="https://wa.me/923014422951" target="_blank" style="color:var(--cyan)">WhatsApp</a> for instant help.';
  }
}

async function sendDemoMsg() {
  if (isBotTyping) return;
  const input = document.getElementById('demoInput');
  if (!input) return;
  const msg = input.value.trim(); if (!msg) return;
  addMsg('user', msg); input.value = '';
  isBotTyping = true;
  const t = showTyping();
  const reply = await fetchBotReply(msg);
  if (t) t.remove(); addMsg('bot', reply);
  isBotTyping = false;
}

async function sendQuickReply(msg) {
  if (isBotTyping) return;
  addMsg('user', msg);
  isBotTyping = true;
  const t = showTyping();
  const reply = await fetchBotReply(msg);
  if (t) t.remove(); addMsg('bot', reply);
  isBotTyping = false;
}

// Expose globally
window.sendDemoMsg = sendDemoMsg;
window.sendQuickReply = sendQuickReply;

setTimeout(() => {
    if (document.getElementById('demoChatMsgs')) {
        addMsg('bot', 'Hi! I am the Sanestix AI Assistant. Ask me anything about our AI web development services, automation packages, or timelines!');
    }
}, 600);
