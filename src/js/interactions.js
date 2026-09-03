/* ============================================================
   SANESTIX — Interactive Elements
   ============================================================ */

/* LUCIDE ICONS + INDUSTRY CARD MICRO-INTERACTIONS */
document.querySelectorAll('.industry-track').forEach(track => {
  if (track.dataset.cloned === 'true') return;
  const originalCards = [...track.children];

  [...originalCards].reverse().forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('tabindex', '-1');
    clone.querySelectorAll('a, button, [tabindex]').forEach(el => el.setAttribute('tabindex', '-1'));
    track.prepend(clone);
  });

  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('tabindex', '-1');
    clone.querySelectorAll('a, button, [tabindex]').forEach(el => el.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
  });

  track.dataset.cloned = 'true';
  track.dataset.sets = '3';
});

document.querySelectorAll('.industry-rail').forEach(rail => {
  const track = rail.querySelector('.industry-track');
  if (!track || rail.dataset.autoRail === 'true') return;

  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let pauseUntil = 0;
  let lastTs = 0;
  let isHovering = false;
  const autoSpeed = window.matchMedia('(max-width: 600px)').matches ? 38 : 30;

  const setWidth = () => track.scrollWidth / (parseInt(track.dataset.sets, 10) || 3);
  const wrapScroll = () => {
    const width = setWidth();
    if (!width) return;
    if (rail.scrollLeft >= width * 2) rail.scrollLeft -= width;
    else if (rail.scrollLeft <= 0) rail.scrollLeft += width;
  };

  const pauseBriefly = (duration = 1400) => {
    pauseUntil = performance.now() + duration;
  };

  const autoMove = (ts) => {
    if (!lastTs) lastTs = ts;
    const delta = ts - lastTs;
    lastTs = ts;

    if (!isDragging && !isHovering && ts > pauseUntil) {
      rail.scrollLeft += autoSpeed * (delta / 1000);
      wrapScroll();
    }

    requestAnimationFrame(autoMove);
  };

  rail.addEventListener('pointerdown', e => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartScroll = rail.scrollLeft;
    rail.classList.add('is-dragging');
    rail.setPointerCapture(e.pointerId);
    pauseBriefly(2400);
  });

  rail.addEventListener('pointermove', e => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    rail.scrollLeft = dragStartScroll - dx;
    wrapScroll();
  });

  const stopDragging = e => {
    if (!isDragging) return;
    isDragging = false;
    rail.classList.remove('is-dragging');
    if (rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId);
    pauseBriefly(1800);
  };

  rail.addEventListener('pointerup', stopDragging);
  rail.addEventListener('pointercancel', stopDragging);
  rail.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      rail.classList.remove('is-dragging');
      pauseBriefly(1800);
    }
  });

  rail.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
    pauseBriefly(1600);
    requestAnimationFrame(wrapScroll);
  }, { passive: true });

  rail.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) isHovering = true;
  });

  rail.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  rail.addEventListener('focusin', () => {
    isHovering = true;
  });

  rail.addEventListener('focusout', () => {
    isHovering = false;
    pauseBriefly(900);
  });

  rail.addEventListener('scroll', () => {
    if (!isDragging) requestAnimationFrame(wrapScroll);
  }, { passive: true });

  rail.dataset.autoRail = 'true';
  requestAnimationFrame(() => {
    rail.scrollLeft = setWidth();
  });
  requestAnimationFrame(autoMove);
});

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      'aria-hidden': 'true'
    }
  });
}

document.querySelectorAll('.glow-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });

  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});

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

/* ── FAQ ── */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => { if (el !== item) el.classList.remove('open'); });
  item.classList.toggle('open', !isOpen);
}

// Expose globally
window.toggleFaq = toggleFaq;

/* ============================================================
   USE CASE CANVAS ANIMATIONS
   ============================================================ */
function ucColors() {
  return {
    bg: '#ffffff',
    cyan: '#00d9ff',
    cyan2: '#00a7d8',
    card: 'rgba(0,217,255,0.1)',
    border: 'rgba(0,174,220,0.25)',
    text: 'rgba(17,17,17,0.92)',
    muted: 'rgba(98,106,114,0.72)',
    gridLine: 'rgba(0,174,220,0.06)',
  };
}

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
    if(tabBtns.length === 0) return;
    
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

/* ── SAAS CARD TILT EFFECT ── */
(function() {
  function applyTilt(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -6;
      const rotY = ((x - cx) / cx) * 6;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.35s';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  }
  document.querySelectorAll('.saas-card--featured').forEach(applyTilt);
})();

/* ── SERVICES ORBIT — tap-to-pause for touch devices ── */
(function() {
  const ring = document.querySelector('.svc-orbit-ring');
  if (!ring) return;
  const cards = ring.querySelectorAll('.svc-orbit-card');

  function closeAll() {
    cards.forEach(c => c.classList.remove('is-active'));
    ring.classList.remove('is-paused');
  }

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Only intercept on touch/coarse-pointer devices; desktop relies on :hover.
      if (window.matchMedia('(hover: hover)').matches) return;
      const alreadyActive = card.classList.contains('is-active');
      closeAll();
      if (!alreadyActive) {
        card.classList.add('is-active');
        ring.classList.add('is-paused');
      } else {
        e.preventDefault();
      }
      // Prevent the "Get a Quote" link from firing on the tap that opens the card.
      if (!alreadyActive) e.preventDefault();
    });
  });

  document.addEventListener('click', (e) => {
    if (!ring.contains(e.target)) closeAll();
  });
})();
