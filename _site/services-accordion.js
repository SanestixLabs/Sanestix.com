/* ============================================================
   SERVICES ACCORDION
   Shared component. Include services-accordion.css in <head> and
   drop <div id="services-accordion"></div> where the section
   should appear, then load this script — it injects the full
   section markup and wires up the accordion behavior. Edit the
   SERVICES list below to add/remove/reorder services.
   ============================================================ */
(function () {
  var ICONS = {
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    grid: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/>'
  };

  var SERVICES = [
    {
      icon: 'code',
      title: 'Software Development',
      desc: 'Custom software built around how your business actually operates — from lean MVPs to full-scale platforms that hold up under real usage.',
      bullets: ['Custom Software Development', 'SaaS Development', 'MVP Development', 'Legacy Application Modernization'],
      href: '/services/software-development/'
    },
    {
      icon: 'bolt',
      title: 'Automation Solutions',
      desc: 'End-to-end automation that captures, qualifies, and converts leads across every channel — WhatsApp, voice, chat, and beyond — without manual effort.',
      bullets: ['AI Calling Agent', 'AI Website Development', 'Smart Chatbot Integration', 'WhatsApp Automation', 'Instagram Automation', 'CRM Integration', 'E-Commerce Automation', 'Lead Generation Systems', 'Custom Workflows'],
      href: '/services/automation-solutions/'
    },
    {
      icon: 'grid',
      title: 'AI Solutions',
      desc: 'Build intelligent products using AI, machine learning, and advanced data engineering — systems that learn and improve, not just automate fixed rules.',
      bullets: ['Custom AI Development', 'Machine Learning Solutions', 'Computer Vision', 'AI Integration Services'],
      href: '/services/ai-solutions/'
    },
    {
      icon: 'spark',
      title: 'Generative & Agentic AI',
      desc: 'Deploy autonomous agents and generative systems that plan, decide, and act on their own to get real work done.',
      bullets: ['Generative AI Development', 'AI Agents', 'LLM Integration', 'RAG & Knowledge Systems'],
      href: '/services/generative-agentic-ai/'
    },
    {
      icon: 'phone',
      title: 'Mobile App Development',
      desc: 'Native and cross-platform apps engineered for performance, retention, and scale, from first release through growth.',
      bullets: ['Android Application', 'iOS Application', 'Cross-Platform Apps', 'Flutter Development'],
      href: '/services/mobile-app-development/'
    },
    {
      icon: 'globe',
      title: 'Web Development',
      desc: 'Fast, conversion-focused websites and web apps built to perform under real traffic, not just look good in a demo.',
      bullets: ['Custom Websites', 'WordPress Development', 'Shopify Development', 'Web Application Development'],
      href: '/services/web-development/'
    }
  ];

  var DEFAULT_OPEN_INDEX = 0;
  var CTA_HREF = '/contact.html';

  function pad(n) { return String(n).padStart(2, '0'); }

  function buildBullets(bullets) {
    return bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('');
  }

  function buildItem(service, index) {
    var active = index === DEFAULT_OPEN_INDEX;
    return (
      '<div class="svc-acc-item' + (active ? ' active' : '') + '" data-index="' + index + '">' +
        '<button class="svc-acc-header" type="button" aria-expanded="' + (active ? 'true' : 'false') + '">' +
          '<span class="svc-acc-num">' + pad(index + 1) + '</span>' +
          '<h3 class="svc-acc-title">' + service.title + '</h3>' +
          '<span class="svc-acc-toggle"><span class="bar bar-h"></span><span class="bar bar-v"></span></span>' +
        '</button>' +
        '<div class="svc-acc-panel">' +
          '<div class="svc-acc-panel-inner">' +
            '<div class="svc-acc-visual"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + ICONS[service.icon] + '</svg></div>' +
            '<div class="svc-acc-body">' +
              '<p>' + service.desc + '</p>' +
              '<ul class="svc-acc-bullets">' + buildBullets(service.bullets) + '</ul>' +
              '<a href="' + (service.href || CTA_HREF) + '" class="svc-acc-more">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function init() {
    var mount = document.getElementById('services-accordion');
    if (!mount) return;

    var items = SERVICES.map(buildItem).join('');

    mount.innerHTML =
      '<section class="svc-acc-section" id="services">' +
        '<div class="container">' +
          '<div class="svc-acc-top">' +
            '<h2>Services <span class="grad">We Offer</span></h2>' +
            '<div class="svc-acc-meta">' +
              '<p class="svc-acc-desc">From strategy to delivery — automation engineering that actually converts.</p>' +
              '<a href="' + CTA_HREF + '" class="svc-acc-cta">Get a Custom Quote ' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>' +
          '<div class="svc-acc-list">' + items + '</div>' +
        '</div>' +
      '</section>';

    function closePanel(item) {
      var panel = item.querySelector('.svc-acc-panel');
      item.classList.remove('active');
      item.querySelector('.svc-acc-header').setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = '0px';
    }

    function openPanel(item) {
      var panel = item.querySelector('.svc-acc-panel');
      item.classList.add('active');
      item.querySelector('.svc-acc-header').setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    var allItems = mount.querySelectorAll('.svc-acc-item');

    // Set the default-open panel's height immediately (no animation on load)
    allItems.forEach(function (item) {
      var panel = item.querySelector('.svc-acc-panel');
      panel.style.maxHeight = item.classList.contains('active') ? panel.scrollHeight + 'px' : '0px';
    });

    mount.querySelectorAll('.svc-acc-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var item = header.closest('.svc-acc-item');
        var wasActive = item.classList.contains('active');

        allItems.forEach(function (openItem) {
          if (openItem.classList.contains('active')) closePanel(openItem);
        });

        if (!wasActive) openPanel(item);
      });
    });

    // Keep the open panel's height accurate if content reflows (e.g. resize)
    window.addEventListener('resize', function () {
      allItems.forEach(function (item) {
        if (item.classList.contains('active')) {
          var panel = item.querySelector('.svc-acc-panel');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
