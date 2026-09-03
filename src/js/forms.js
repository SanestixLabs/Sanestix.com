/* ============================================================
   SANESTIX — Contact Form
   ============================================================ */

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

// Expose globally
window.submitForm = submitForm;
