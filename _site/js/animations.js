/* ============================================================
   SANESTIX — Core Animations
   ============================================================ */

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

/* Hero dynamic headline */
(function () {
  const dynamicText = document.getElementById('heroDynamicText');
  if (!dynamicText) return;

  const phrases = ['smarter automation', 'effortless scaling', 'modern software'];
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function tick() {
    const current = phrases[phraseIndex];

    if (typing) {
      charIndex++;
      dynamicText.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        typing = false;
        setTimeout(tick, 1500);
        return;
      }
      setTimeout(tick, 60);
    } else {
      charIndex--;
      dynamicText.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 32);
    }
  }

  tick();
})();

/* ── PARTICLE CANVAS ── */
(function () {
  const canvas = document.getElementById('gravCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
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
    const c = '0,174,220';
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
