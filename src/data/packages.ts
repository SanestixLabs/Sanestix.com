import type { Package } from '@/types';

export const packages: Package[] = [
  {
    label: 'Package 1',
    name: 'AI Website Starter',
    description:
      'For businesses that need a professional AI-powered online presence that captures and qualifies leads automatically — without the manual work.',
    dividerText: "What's Included",
    features: [
      '100% custom website design & development',
      'AI chatbot integration',
      'Smart lead capture forms',
      'Basic CRM integration',
      'Mobile-first, SEO optimized',
      '5–7 day delivery',
    ],
    ctaText: 'Get a Free Quote',
    ctaVariant: 'ghost',
    whatsappMessage:
      'Hi%20Sanestix!%20I%20want%20a%20quote%20for%20Package%201%20-%20AI%20Website%20Starter.',
  },
  {
    label: 'Package 2 — Most Popular',
    name: 'Growth Automation Suite',
    description:
      'Everything in Package 1 plus full social media automation. For businesses ready to capture every lead across all channels — without lifting a finger.',
    dividerText: 'Everything in Package 1, plus',
    features: [
      'WhatsApp 24/7 intelligent automation',
      'Instagram DM automation flows',
      'Comment keyword triggers to auto DM',
      'Advanced lead routing & AI scoring',
      'CRM workflow automation',
      '7–12 day delivery',
    ],
    ctaText: 'Get a Free Quote',
    ctaVariant: 'primary',
    whatsappMessage:
      'Hi%20Sanestix!%20I%20want%20a%20quote%20for%20Package%202%20-%20Growth%20Automation%20Suite.',
    featured: true,
  },
  {
    label: 'Package 3',
    name: 'eCommerce AI System',
    description:
      'Everything in Package 2 plus a full eCommerce engine. For stores that want AI handling every stage — from first click to repeat customer.',
    dividerText: 'Everything in Package 2, plus',
    features: [
      'Full eCommerce store development',
      'Automated order confirmation & updates',
      'Abandoned cart recovery sequences',
      'Payment gateway integration',
      'Customer follow-up automation',
      'Dedicated account manager',
    ],
    ctaText: 'Talk to Us',
    ctaVariant: 'ghost',
    whatsappMessage:
      'Hi%20Sanestix!%20I%20want%20a%20quote%20for%20Package%203%20-%20eCommerce%20AI%20System.',
  },
];
