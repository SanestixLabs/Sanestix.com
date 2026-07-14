import type { Metadata } from 'next';

const BASE_URL = 'https://www.sanestix.com';

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: overrides.title || 'Sanestix | AI-Powered Web Development & Automation Agency',
    description:
      overrides.description ||
      'Sanestix builds AI-powered websites with custom chatbots, WhatsApp & Instagram automation, CRM integration, and eCommerce systems for Pakistani & UAE businesses. Based in Lahore. Get a free strategy call.',
    keywords:
      'AI web development Lahore, AI chatbot Pakistan, WhatsApp automation Pakistan, Instagram automation, CRM integration Pakistan, eCommerce automation, AI agency Lahore, web development agency Pakistan',
    authors: [{ name: 'Sanestix' }],
    robots: 'index, follow',
    openGraph: {
      title: 'Sanestix – AI-Powered Web Development & Automation Agency',
      description:
        'Custom AI-powered websites with chatbot, WhatsApp & Instagram automation, CRM, and eCommerce. Built for Pakistani & UAE businesses.',
      type: 'website',
      url: BASE_URL,
      siteName: 'Sanestix',
      locale: 'en_PK',
      images: [{ url: '/images/seo/og-image-enhanced.jpg' }],
      ...overrides.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sanestix_',
      title: 'Sanestix – AI-Powered Web Development & Automation Agency',
      description:
        'AI websites, chatbots, WhatsApp & Instagram automation for Pakistani businesses.',
      images: ['/images/seo/twitter-image-enhanced.jpg'],
      ...overrides.twitter,
    },
    alternates: {
      canonical: BASE_URL,
      ...overrides.alternates,
    },
    icons: {
      icon: '/favicon/favicon.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    ...overrides,
  };
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sanestix',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logos/LOGO.png`,
  description:
    'AI-Powered Web Development & Automation Agency based in Lahore, Pakistan. We build AI websites, chatbots, WhatsApp automation, Instagram automation, CRM integration, and eCommerce systems.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '31.5204',
    longitude: '74.3587',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+92-301-4422951',
    contactType: 'Customer Service',
    email: 'contact@sanestix.com',
    availableLanguage: ['English', 'Urdu'],
  },
  sameAs: [
    'https://www.instagram.com/sanestix',
    'https://www.linkedin.com/company/sanestix',
    'https://www.facebook.com/share/14M3fAXpuSW/',
    'https://x.com/sanestix_',
  ],
  founder: [
    { '@type': 'Person', name: 'Saad Faisal Qureshi', jobTitle: 'Co-Founder & CEO' },
    { '@type': 'Person', name: 'Abdul Wahab Siddiqi', jobTitle: 'Co-Founder & COO' },
  ],
  areaServed: ['PK', 'AE', 'GB'],
  serviceType: [
    'AI Web Development',
    'Chatbot Integration',
    'WhatsApp Automation',
    'Instagram Automation',
    'CRM Integration',
    'eCommerce Development',
  ],
};
