/* ============================================================
   SANESTIX — Type Definitions
   ============================================================ */

export interface Service {
  title: string;
  slug: string;
  description: string;
  tag: string;
  tagVariant: 'primary' | 'muted';
  icon: string;
  features: string[];
}

export interface Industry {
  name: string;
  slug: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface Testimonial {
  name: string;
  initials: string;
  role: string;
  quote: string;
  badge: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
  linkedin: string;
}

export interface Package {
  label: string;
  name: string;
  description: string;
  dividerText: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'ghost';
  whatsappMessage: string;
  featured?: boolean;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  note: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessFlowStep {
  icon: string;
  label: string;
  detail: string;
  desc: string;
  stat: string;
}

export interface ProcessFlow {
  label: string;
  steps: ProcessFlowStep[];
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface MegaMenuGroup {
  title: string;
  items: NavLink[];
  accent?: boolean;
}
