import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    name: 'Fashion & Retail',
    slug: 'fashion-retail',
    description: 'Order automation, product queries, cart recovery, and DM-to-checkout flows.',
    icon: 'shopping-bag',
    capabilities: ['Cart Recovery', 'Order Updates', 'Product FAQs'],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    description: 'Lead qualification, viewing bookings, pipeline reminders, and buyer follow-ups.',
    icon: 'home',
    capabilities: ['Lead Scoring', 'Viewing Slots', 'CRM Routing'],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Appointment booking, patient follow-ups, smart triage, and FAQ automation.',
    icon: 'heart-pulse',
    capabilities: ['Appointments', 'Follow-Ups', 'Patient FAQs'],
  },
  {
    name: 'Education',
    slug: 'education',
    description: 'Student inquiries, enrollment flows, fee reminders, and course guidance.',
    icon: 'graduation-cap',
    capabilities: ['Admissions', 'Fee Flows', 'Student FAQs'],
  },
  {
    name: 'Food & Restaurants',
    slug: 'food-restaurants',
    description: 'Menu questions, reservations, order status, delivery updates, and loyalty prompts.',
    icon: 'utensils',
    capabilities: ['Reservations', 'Menu FAQs', 'Order Status'],
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    description: 'Shipment tracking, quote automation, dispatch alerts, and exception handling.',
    icon: 'truck',
    capabilities: ['Tracking', 'Quotes', 'Dispatch'],
  },
  {
    name: 'Finance & Insurance',
    slug: 'finance-insurance',
    description: 'Lead generation, policy support, quote pre-qualification, and appointment scheduling.',
    icon: 'shield-check',
    capabilities: ['Policy FAQs', 'Lead Intake', 'Scheduling'],
  },
  {
    name: 'B2B Services',
    slug: 'b2b-services',
    description: 'Discovery calls, proposal flows, client onboarding, and support handoffs.',
    icon: 'briefcase',
    capabilities: ['Discovery', 'Proposals', 'Onboarding'],
  },
];
