/* ============================================================
   SANESTIX — Navigation & Global UI
   ============================================================ */

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }
});

/* ── HAMBURGER ── */
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenuEl = document.getElementById('mobileMenu');

function openMobile() {
  if (!mobileMenuEl || !hamburgerBtn) return;
  mobileMenuEl.style.display = 'flex';
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
}
function closeMobile() {
  if (!mobileMenuEl || !hamburgerBtn) return;
  mobileMenuEl.style.display = 'none';
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

// Expose globally for inline onclick handlers in HTML
window.openMobile = openMobile;
window.closeMobile = closeMobile;

if (hamburgerBtn && mobileMenuEl) {
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
}

/* ── SCROLL PROGRESS BAR ── */
(function() {
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#00e5d0,#00b8e6);z-index:9999;transition:width 0.1s linear;width:0;pointer-events:none';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / docH * 100) + '%';
  }, { passive: true });
})();
