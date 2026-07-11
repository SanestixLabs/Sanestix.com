import type { WorkflowStep } from '@/types';

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description:
      '30 minutes. We audit your current lead capture, identify automation gaps, and map the exact AI system that will drive results for your business.',
    icon: 'phone',
  },
  {
    number: '02',
    title: 'Custom System Blueprint',
    description:
      'We design your entire system — website architecture, chatbot flows, automation sequences, and CRM setup — tailored to your workflow.',
    icon: 'file-text',
  },
  {
    number: '03',
    title: 'Build & AI Training',
    description:
      'Our team builds your site and trains the AI on your products, pricing, tone, and business logic. You review every decision before go-live.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Test & Refine',
    description:
      'We run real-world tests on every chatbot scenario, automation flow, and CRM integration — and refine until everything works perfectly.',
    icon: 'table',
  },
  {
    number: '05',
    title: 'Launch & Go Live',
    description:
      'Smooth deployment to production. Your AI system goes live and immediately starts capturing and converting leads — from hour one.',
    icon: 'rocket',
  },
  {
    number: '06',
    title: 'Ongoing Optimization',
    description:
      'Monthly performance reviews, AI retraining, and proactive updates ensure your system keeps outperforming as your business grows.',
    icon: 'heart',
  },
];
