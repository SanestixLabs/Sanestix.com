const fs = require('fs');
const path = require('path');

const industries = [
  {
    slug: 'b2b-services',
    name: 'B2B Services',
    heroTitle: 'Scale Your B2B Operations with Intelligent Systems',
    heroSub: 'From automated lead qualification to custom CRM integrations and bespoke software — we build the technology that drives your B2B growth.',
    challenges: [
      { title: 'Long Sales Cycles', desc: 'B2B prospects require nurturing. Manual follow-ups lead to dropped leads and lost revenue.' },
      { title: 'Fragmented Systems', desc: 'Operating across disparate tools creates data silos, slowing down your team and degrading client experience.' },
      { title: 'Lead Qualification Overhead', desc: 'Sales teams waste hours qualifying bad leads instead of closing deals with high-intent decision-makers.' }
    ],
    helpText: 'Sanestix designs custom software, automations, and AI workflows that connect your tech stack, automate repetitive tasks, and empower your sales team to focus on closing.',
    services: [
      { name: 'Custom Software Development', desc: 'Bespoke portals and internal tools to manage your unique B2B operations.' },
      { name: 'CRM Integration & Automation', desc: 'Seamlessly sync data across HubSpot, Salesforce, or your custom CRM to eliminate manual entry.' },
      { name: 'AI Lead Qualification', desc: 'Intelligent chatbots that engage prospects 24/7, ask qualifying questions, and route hot leads to your sales team.' }
    ],
    useCases: [
      { title: 'Automated Client Onboarding', desc: 'Replace manual paperwork with a seamless digital portal that collects documents and provisions accounts instantly.' },
      { title: 'Quote Generation Systems', desc: 'Custom web applications that instantly calculate complex B2B pricing and generate professional proposals.' }
    ]
  },
  {
    slug: 'fashion-retail',
    name: 'Fashion & Retail',
    heroTitle: 'Digital Transformation for Modern Retailers',
    heroSub: 'Elevate your brand with high-performance eCommerce platforms, intelligent inventory automation, and 24/7 personalized customer support.',
    challenges: [
      { title: 'Cart Abandonment', desc: 'High traffic doesn\'t always mean high sales. Customers abandon carts due to friction or lack of immediate support.' },
      { title: 'Customer Support Volume', desc: 'Managing returns, sizing questions, and order tracking across Instagram, WhatsApp, and the web is overwhelming.' },
      { title: 'Inventory Syncing', desc: 'Discrepancies between physical stores and online platforms lead to overselling and frustrated customers.' }
    ],
    helpText: 'We build robust eCommerce ecosystems, integrate intelligent chatbots for instant support, and automate social media engagement to turn followers into loyal customers.',
    services: [
      { name: 'E-Commerce Development', desc: 'High-converting Shopify and custom web stores optimized for speed and mobile experience.' },
      { name: 'Instagram & WhatsApp Automation', desc: 'Automatically reply to comments, send product links via DM, and recover abandoned carts on messaging apps.' },
      { name: 'Generative AI Support', desc: 'AI agents trained on your catalog to recommend products, handle sizing charts, and process returns.' }
    ],
    useCases: [
      { title: 'Social Commerce Engine', desc: 'When a user comments on your Instagram reel, an AI instantly DMs them the exact product link and a limited-time discount.' },
      { title: 'Unified Order Tracking', desc: 'A custom web portal where customers can check order status instantly without tying up your support agents.' }
    ]
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    heroTitle: 'Smart Technology for Real Estate Professionals',
    heroSub: 'Capture property leads 24/7, automate appointment scheduling, and showcase listings with cutting-edge web platforms.',
    challenges: [
      { title: 'After-Hours Leads', desc: 'Property inquiries come in at all hours. Slow response times mean losing clients to competitors.' },
      { title: 'Inefficient Scheduling', desc: 'Coordinating property viewings involves endless back-and-forth messaging.' },
      { title: 'Managing Portfolios', desc: 'Keeping property listings updated across websites, social media, and internal portals is tedious.' }
    ],
    helpText: 'Sanestix builds sophisticated property portals, integrates automated scheduling systems, and deploys conversational AI to qualify buyers and renters instantly.',
    services: [
      { name: 'Web & Portal Development', desc: 'Beautiful, fast-loading property listing websites with advanced search and filtering capabilities.' },
      { name: 'AI Calling Agents', desc: 'Deploy voice AI to handle initial property inquiries, answer basic questions, and pre-qualify leads.' },
      { name: 'Automated Scheduling', desc: 'Systems that allow verified leads to book viewings directly into your calendar without human intervention.' }
    ],
    useCases: [
      { title: '24/7 Property Matchmaker', desc: 'A WhatsApp bot that asks for a client\'s budget and preferred area, instantly sending them matching listings from your database.' },
      { title: 'Custom Broker CRM', desc: 'A bespoke web application to track leads, manage properties, and monitor agent performance in one place.' }
    ]
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    heroTitle: 'Secure Digital Solutions for Healthcare',
    heroSub: 'Enhance patient experiences with custom telemedicine apps, secure patient portals, and automated appointment management systems.',
    challenges: [
      { title: 'Patient Scheduling Bottlenecks', desc: 'Front desk staff spend hours managing appointments, leading to long hold times for patients.' },
      { title: 'Data Security & Compliance', desc: 'Handling patient information requires strict adherence to privacy regulations and secure infrastructure.' },
      { title: 'Fragmented Care Delivery', desc: 'Lack of digital integration between clinics, labs, and patients slows down treatment.' }
    ],
    helpText: 'We develop secure mobile and web applications tailored for the medical field, automating administrative tasks so healthcare professionals can focus on patient care.',
    services: [
      { name: 'Mobile App Development', desc: 'Telemedicine apps for Android and iOS, enabling remote consultations and prescription management.' },
      { name: 'Patient Portals (Web Dev)', desc: 'Secure custom web platforms where patients can view lab results, history, and upcoming appointments.' },
      { name: 'Workflow Automation', desc: 'Automated SMS and WhatsApp reminders to reduce no-shows and streamline intake forms.' }
    ],
    useCases: [
      { title: 'Zero-Touch Intake', desc: 'Patients complete medical history and consent forms digitally before their visit via a secure web link sent by WhatsApp.' },
      { title: 'Integrated Lab Reporting', desc: 'Custom software that automatically notifies patients when results are ready, providing a secure link to view them.' }
    ]
  },
  {
    slug: 'food-restaurants',
    name: 'Food & Restaurants',
    heroTitle: 'Digital Operations for the Food Industry',
    heroSub: 'Streamline ordering, manage deliveries, and build customer loyalty with custom web apps and automated communication.',
    challenges: [
      { title: 'Third-Party App Fees', desc: 'Relying entirely on food delivery platforms eats into profit margins significantly.' },
      { title: 'Peak Hour Chaos', desc: 'Managing phone orders, walk-ins, and online orders simultaneously leads to errors.' },
      { title: 'Customer Retention', desc: 'Getting a customer to order once is easy; building a loyal, repeat customer base is hard without data.' }
    ],
    helpText: 'Sanestix builds direct-to-consumer ordering platforms, automates reservation systems, and creates custom loyalty programs to maximize your margins.',
    services: [
      { name: 'Custom Web & Mobile Apps', desc: 'Your own branded ordering application to bypass third-party commissions and own your customer data.' },
      { name: 'WhatsApp Ordering Bot', desc: 'Allow customers to browse the menu and place orders directly through WhatsApp.' },
      { name: 'Automation & Integrations', desc: 'Sync online orders directly with your kitchen display system (KDS) and POS.' }
    ],
    useCases: [
      { title: 'Direct WhatsApp Sales', desc: 'An AI assistant that takes orders, processes payments, and provides estimated delivery times directly on WhatsApp.' },
      { title: 'Automated Loyalty Marketing', desc: 'Automatically send a personalized discount code to customers who haven\'t ordered in 30 days.' }
    ]
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    heroTitle: 'Intelligent Systems for Modern Logistics',
    heroSub: 'Optimize routes, automate dispatching, and provide real-time tracking with robust custom software and mobile applications.',
    challenges: [
      { title: 'Lack of Visibility', desc: 'Customers and dispatchers struggle to track shipments in real time, leading to constant status inquiries.' },
      { title: 'Manual Dispatching', desc: 'Routing and assigning deliveries manually is inefficient and prone to human error.' },
      { title: 'Driver Communication', desc: 'Coordinating with a fleet on the road using scattered messaging apps creates confusion.' }
    ],
    helpText: 'We engineer custom logistics platforms, driver mobile apps, and automated tracking systems to make your supply chain transparent and efficient.',
    services: [
      { name: 'Custom Software Development', desc: 'Centralized dashboards for dispatchers to manage fleet operations, routing, and analytics.' },
      { name: 'Cross-Platform Mobile Apps', desc: 'Dedicated driver applications for route navigation, proof of delivery, and instant communication.' },
      { name: 'Automated Customer Updates', desc: 'Proactive WhatsApp and SMS notifications providing customers with live tracking links and ETA changes.' }
    ],
    useCases: [
      { title: 'Digital Proof of Delivery (POD)', desc: 'Drivers use a custom mobile app to capture signatures and photos, instantly syncing to the central ERP.' },
      { title: 'AI-Powered Support', desc: 'A generative AI bot that can query the database to answer customer questions like "Where is my package?" instantly.' }
    ]
  },
  {
    slug: 'finance-insurance',
    name: 'Finance & Insurance',
    heroTitle: 'Secure, Scalable Financial Technology',
    heroSub: 'Modernize your financial services with custom web portals, automated claim processing, and intelligent customer engagement.',
    challenges: [
      { title: 'Complex Onboarding', desc: 'KYC, document collection, and compliance checks create friction for new clients.' },
      { title: 'Heavy Support Load', desc: 'Clients frequently inquire about policy details, account balances, or claim statuses.' },
      { title: 'Legacy Systems', desc: 'Outdated internal software slows down operations and poses security risks.' }
    ],
    helpText: 'Sanestix builds highly secure custom applications, integrates intelligent virtual assistants, and automates compliance workflows for the financial sector.',
    services: [
      { name: 'Web Application Development', desc: 'Secure client portals for policy management, account dashboards, and document uploads.' },
      { name: 'AI Agents & Chatbots', desc: 'Intelligent assistants capable of explaining complex financial products and retrieving account info securely.' },
      { name: 'Workflow Automation', desc: 'Automate the collection and verification of KYC documents to speed up client onboarding.' }
    ],
    useCases: [
      { title: 'Automated Claims Initiation', desc: 'Clients can start an insurance claim via a secure web form or WhatsApp bot, instantly updating the CRM.' },
      { title: 'Smart Financial Calculators', desc: 'Interactive web tools that help users calculate premiums or investment returns, capturing them as leads.' }
    ]
  },
  {
    slug: 'death-care',
    name: 'Death Care & Memorial',
    heroTitle: 'Compassionate Digital Solutions for Death Care',
    heroSub: 'Streamline operations with sensitive, easy-to-use web platforms and communication systems that respect families during difficult times.',
    challenges: [
      { title: 'Sensitive Communication', desc: 'Handling inquiries requires immense tact; rigid, generic automated systems feel inappropriate.' },
      { title: 'Administrative Burden', desc: 'Funeral directors are bogged down by paperwork when they need to focus on comforting families.' },
      { title: 'Digital Legacy', desc: 'Families increasingly expect modern ways to share obituaries, collect donations, and memorialize loved ones online.' }
    ],
    helpText: 'We build elegant, respectful websites and internal management software to help death care professionals handle logistics smoothly and support families better.',
    services: [
      { name: 'Custom Websites & Portals', desc: 'Beautifully designed websites that offer online obituaries, floral ordering, and service information.' },
      { name: 'Internal Management Software', desc: 'Custom CRM and scheduling tools to manage service logistics, staff, and documentation quietly in the background.' },
      { name: 'Gentle Automation', desc: 'Tasteful, carefully tuned AI assistants that can provide directions, service times, and basic information 24/7 without losing the human touch.' }
    ],
    useCases: [
      { title: 'Digital Memorial Pages', desc: 'Custom web platforms where families can securely upload photos, leave tributes, and live-stream services.' },
      { title: 'Streamlined Intake', desc: 'Secure digital forms that allow families to provide necessary biographical details for paperwork at their own pace, from home.' }
    ]
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    heroTitle: 'Transforming the Learning Experience',
    heroSub: 'Empower institutions and creators with custom Learning Management Systems (LMS), mobile apps, and automated enrollment pipelines.',
    challenges: [
      { title: 'Student Engagement', desc: 'Keeping students engaged in a digital environment requires interactive and intuitive platforms.' },
      { title: 'Enrollment Friction', desc: 'The admissions process is often manual, leading to lost prospective students.' },
      { title: 'Administrative Overload', desc: 'Teachers and staff spend too much time grading, scheduling, and answering routine student questions.' }
    ],
    helpText: 'Sanestix develops robust educational software, automates student onboarding, and implements AI to support personalized learning and administration.',
    services: [
      { name: 'Web & Mobile Apps', desc: 'Custom e-learning platforms, student portals, and mobile applications for on-the-go learning.' },
      { name: 'Generative AI Integration', desc: 'AI tutors that can explain concepts, provide study materials, and answer course-specific questions 24/7.' },
      { name: 'Enrollment Automation', desc: 'Automated CRM pipelines that nurture prospective students from inquiry to registration.' }
    ],
    useCases: [
      { title: '24/7 Campus Assistant', desc: 'A chatbot that answers questions about tuition, deadlines, and campus facilities across web and WhatsApp.' },
      { title: 'Custom LMS Development', desc: 'A bespoke platform tailored to your curriculum, featuring video hosting, quizzes, and automated progress tracking.' }
    ]
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    heroTitle: 'Digital Infrastructure for Manufacturing',
    heroSub: 'Bridge the gap between the factory floor and the back office with custom ERP solutions, inventory software, and B2B portals.',
    challenges: [
      { title: 'Supply Chain Silos', desc: 'Disconnects between procurement, production, and sales lead to delays and inefficiencies.' },
      { title: 'Legacy Software', desc: 'Many manufacturers rely on outdated, on-premise systems that are hard to use and impossible to integrate.' },
      { title: 'B2B Order Complexity', desc: 'Handling custom quotes, bulk orders, and technical specifications manually is error-prone.' }
    ],
    helpText: 'We modernize industrial operations by building custom web applications, integrating modern APIs with legacy systems, and automating B2B sales processes.',
    services: [
      { name: 'Custom Software & ERPs', desc: 'Cloud-based dashboards for real-time visibility into production, inventory, and logistics.' },
      { name: 'B2B Web Portals', desc: 'Secure portals where distributors and wholesale clients can place orders, track shipments, and view invoices.' },
      { name: 'Process Automation', desc: 'Automated workflows for quote approvals, purchase order generation, and inventory alerts.' }
    ],
    useCases: [
      { title: 'Automated Quoting Engine', desc: 'A web tool that allows clients to input technical specs and instantly receive an estimated quote based on current material costs.' },
      { title: 'IoT Data Visualization', desc: 'Custom dashboards that ingest data from factory sensors to monitor machine health and predict maintenance needs.' }
    ]
  },
  {
    slug: 'travel',
    name: 'Travel & Hospitality',
    heroTitle: 'Elevating the Traveler Journey',
    heroSub: 'Drive direct bookings, automate customer service, and provide unforgettable digital experiences with custom travel tech.',
    challenges: [
      { title: 'OTA Commissions', desc: 'High reliance on Online Travel Agencies eats into margins. Direct bookings are hard to capture.' },
      { title: '24/7 Guest Support', desc: 'Travelers across different time zones need immediate answers about bookings, amenities, and local guides.' },
      { title: 'Complex Itineraries', desc: 'Coordinating flights, hotels, and tours involves multiple systems and fragmented communication.' }
    ],
    helpText: 'Sanestix builds high-converting booking engines, automates guest communication, and develops mobile apps that serve as personal travel concierges.',
    services: [
      { name: 'Web Booking Platforms', desc: 'Fast, beautiful custom websites optimized to drive direct reservations and upsell experiences.' },
      { name: 'WhatsApp & AI Agents', desc: 'Multilingual AI assistants that handle booking modifications, answer FAQs, and recommend local attractions.' },
      { name: 'Mobile App Development', desc: 'Custom apps for hotels or tour operators, enabling mobile check-in, digital room keys, and itinerary management.' }
    ],
    useCases: [
      { title: 'Automated Pre-Arrival Upsell', desc: 'An automated WhatsApp flow sent 48 hours before check-in, offering room upgrades or spa bookings.' },
      { title: 'Dynamic Tour Portal', desc: 'A custom web application that allows travel agents to drag-and-drop services to build and share dynamic itineraries with clients.' }
    ]
  },
  {
    slug: 'legal-finance',
    name: 'Legal Services',
    heroTitle: 'Secure Tech for Legal Professionals',
    heroSub: 'Protect client data, streamline case management, and automate intake with highly secure custom software and web solutions.',
    challenges: [
      { title: 'Document Overload', desc: 'Managing, searching, and organizing thousands of case files manually is inefficient.' },
      { title: 'Client Intake Time', desc: 'Lawyers spend billable hours conducting basic initial consultations and gathering preliminary facts.' },
      { title: 'Strict Confidentiality', desc: 'Off-the-shelf software often fails to meet the stringent security and compliance requirements of the legal sector.' }
    ],
    helpText: 'We develop secure, compliant custom applications, integrate advanced search capabilities, and automate client intake to optimize your firm\'s billable hours.',
    services: [
      { name: 'Custom Software Development', desc: 'Bespoke case management systems tailored to your firm\'s specific workflows and practice areas.' },
      { name: 'Secure Web Portals', desc: 'Encrypted client portals for secure document sharing, invoice payment, and case status updates.' },
      { name: 'AI Intake Assistants', desc: 'Intelligent bots that conduct initial legal triage, gather facts, and schedule consultations for qualified leads.' }
    ],
    useCases: [
      { title: 'Automated Conflict Checking', desc: 'Custom integrations that instantly cross-reference new inquiries against your database to flag potential conflicts of interest.' },
      { title: 'RAG Knowledge Bases', desc: 'Internal AI tools trained on your firm\'s past cases and templates, allowing lawyers to instantly retrieve relevant precedents.' }
    ]
  }
];

const template = (data) => `---
layout: base.njk
title: "${data.name} Solutions | Sanestix"
description: "${data.heroSub}"
---

<!-- -- HERO -- -->
<section class="hero glass-hero" style="min-height: 70vh; padding-top: 150px;">
  <div class="hero-bg-overlay" aria-hidden="true" style="background: radial-gradient(circle at 50% 50%, rgba(4, 16, 26, 0.8) 0%, #04101a 100%);"></div>
  <div class="container">
    <div class="hero-inner" style="grid-template-columns: 1fr; text-align: center;">
      <div class="hero-text reveal">
        <div class="mega-kicker" style="justify-content: center; margin-bottom: 1rem;">Industry Solutions</div>
        <h1 class="hero-title" style="font-size: 3.5rem; max-width: 900px; margin: 0 auto;">
          <span class="hero-title-static">${data.heroTitle}</span>
        </h1>
        <p class="hero-sub" style="max-width: 700px; margin: 1.5rem auto;">${data.heroSub}</p>
        <a href="contact.html" class="hero-cta-glass liquid-glass btn-glass" aria-label="Let's discuss your idea" style="margin: 0 auto;">Book a Strategy Call</a>
      </div>
    </div>
  </div>
</section>

<!-- -- CHALLENGES -- -->
<section class="challenges" style="padding: 5rem 0; background: var(--bg-alt);">
  <div class="container">
    <div class="section-header reveal">
      <h2>The Challenges <span class="grad">You Face</span></h2>
      <p class="section-desc">We understand the unique friction points in the ${data.name} sector.</p>
    </div>
    <div class="why-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      ${data.challenges.map((c, i) => `
      <div class="why-card reveal" style="transition-delay:.${i*8}s">
        <div class="why-card-accent"></div>
        <div class="why-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div class="why-title">${c.title}</div>
        <div class="why-desc">${c.desc}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- -- HOW WE HELP -- -->
<section style="padding: 5rem 0;">
  <div class="container">
    <div class="reveal" style="background: rgba(4, 16, 26, 0.5); border: 1px solid rgba(0, 229, 208, 0.2); border-radius: 24px; padding: 4rem; text-align: center; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 50% 50%, rgba(0,229,208,0.05) 0%, transparent 50%); z-index: 0; pointer-events: none;"></div>
      <div style="position: relative; z-index: 1;">
        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">How <span class="grad">Sanestix Helps</span></h2>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 800px; margin: 0 auto; line-height: 1.8;">
          ${data.helpText}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- -- RELEVANT SOLUTIONS -- -->
<section style="padding: 5rem 0; background: var(--bg-alt);">
  <div class="container">
    <div class="section-header reveal">
      <h2>Solutions for <span class="grad">${data.name}</span></h2>
      <p class="section-desc">Tailored technology to drive your business forward.</p>
    </div>
    <div class="workflow-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      ${data.services.map((s, i) => `
      <div class="step-card reveal" style="transition-delay:.${i*8}s">
        <div class="step-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="step-title">${s.name}</div>
        <p class="step-desc">${s.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- -- USE CASES -- -->
<section style="padding: 5rem 0;">
  <div class="container">
    <div class="section-header reveal">
      <h2>Transformative <span class="grad">Capabilities</span></h2>
      <p class="section-desc">Real-world applications of Sanestix technology in your industry.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
      ${data.useCases.map((u, i) => `
      <div class="reveal" style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 2.5rem; backdrop-filter: blur(10px); transition-delay:.${i*8}s">
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-bright);">${u.title}</h3>
        <p style="color: var(--text-muted); line-height: 1.6;">${u.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- -- PROCESS -- -->
<section class="how-it-works" id="workflow" style="padding: 5rem 0; background: var(--bg-alt);">
  <div class="container">
    <div class="section-header reveal">
      <h2>Our <span class="grad">Process</span></h2>
      <p class="section-desc">How we deliver exceptional results for ${data.name} clients.</p>
    </div>
    <div class="workflow-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
      <div class="step-card reveal"><span class="step-num">01</span>
        <div class="step-title">Discovery</div>
        <p class="step-desc">We audit your current operations and identify digital bottlenecks.</p>
      </div>
      <div class="step-card reveal" style="transition-delay:.08s"><span class="step-num">02</span>
        <div class="step-title">Architecture</div>
        <p class="step-desc">Mapping out the optimal tech stack and automation workflows.</p>
      </div>
      <div class="step-card reveal" style="transition-delay:.16s"><span class="step-num">03</span>
        <div class="step-title">Development</div>
        <p class="step-desc">Building robust software and integrating intelligent AI systems.</p>
      </div>
      <div class="step-card reveal" style="transition-delay:.24s"><span class="step-num">04</span>
        <div class="step-title">Deployment & Optimization</div>
        <p class="step-desc">Seamless launch followed by continuous monitoring and improvements.</p>
      </div>
    </div>
  </div>
</section>

<!-- -- WHY SANESTIX -- -->
<section class="why-us" style="padding: 5rem 0;">
  <div class="container">
    <div class="section-header reveal">
      <h2>Why Partner with <span class="grad">Sanestix</span></h2>
      <p class="section-desc">We combine deep technical expertise with business acumen.</p>
    </div>
    <div class="why-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <div class="why-card reveal">
        <div class="why-card-accent"></div>
        <div class="why-title">Full-Stack Capabilities</div>
        <div class="why-desc">From complex backend architecture to intuitive user interfaces and AI integrations.</div>
      </div>
      <div class="why-card reveal" style="transition-delay:.1s">
        <div class="why-card-accent"></div>
        <div class="why-title">Security & Compliance First</div>
        <div class="why-desc">We build with enterprise-grade security to protect your data and your clients.</div>
      </div>
      <div class="why-card reveal" style="transition-delay:.2s">
        <div class="why-card-accent"></div>
        <div class="why-title">Focus on ROI</div>
        <div class="why-desc">Every system we build is designed to reduce costs, save time, or drive direct revenue.</div>
      </div>
    </div>
  </div>
</section>

{% include "components/cta-banner.njk" %}
`;

const outDir = path.join(__dirname, '../src/industries');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

industries.forEach(ind => {
  const dirPath = path.join(outDir, ind.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  const filePath = path.join(dirPath, 'index.html');
  fs.writeFileSync(filePath, template(ind));
  console.log('Created: ', filePath);
});

console.log('Done.');
