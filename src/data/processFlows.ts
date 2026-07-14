import type { ProcessFlow } from '@/types';

export const processFlows: ProcessFlow[] = [
  {
    label: 'Website Flow',
    steps: [
      {
        icon: 'home',
        label: 'Visitor Lands',
        detail: 'Visitor arrives on your website',
        desc: 'A potential customer lands on your site via search, social, or referral — any time of day or night.',
        stat: 'Entry Point',
      },
      {
        icon: 'message-square',
        label: 'AI Greets',
        detail: 'AI chatbot greets instantly',
        desc: 'Your AI assistant appears within seconds — no wait, no generic form. It opens with a personalised, on-brand message tailored to the page.',
        stat: '< 2s response',
      },
      {
        icon: 'check-circle',
        label: 'AI Qualifies',
        detail: 'Intelligent lead qualification',
        desc: 'The AI asks smart questions to understand budget, intent, and timeline — filtering serious buyers from casual browsers automatically.',
        stat: '85% qualified',
      },
      {
        icon: 'user-check',
        label: 'Lead Captured',
        detail: 'Contact details auto-collected',
        desc: 'Name, email, phone, and project brief are captured naturally through conversation — no cold form abandonment.',
        stat: '3× more leads',
      },
      {
        icon: 'briefcase',
        label: 'CRM Synced',
        detail: 'Lead lands in your CRM instantly',
        desc: 'The lead is scored, tagged, and pushed into your CRM pipeline in real time. Your sales team gets an instant notification.',
        stat: 'Zero manual work',
      },
    ],
  },
  {
    label: 'WhatsApp Flow',
    steps: [
      {
        icon: 'message-circle',
        label: 'Message Received',
        detail: 'Customer sends WhatsApp message',
        desc: 'A customer messages your business number — at 2 AM, on a public holiday, any time. The AI is always ready.',
        stat: '24/7 active',
      },
      {
        icon: 'zap',
        label: 'Instant Reply',
        detail: 'AI replies within seconds',
        desc: 'A fully human-sounding reply arrives within 3 seconds. The AI knows your products, tone, pricing, and FAQs — trained specifically on your business.',
        stat: '94% faster',
      },
      {
        icon: 'clock',
        label: 'Qualifies Budget',
        detail: 'Smart qualification conversation',
        desc: 'Through natural back-and-forth, the AI uncovers budget, timeline, and need — turning a cold enquiry into a warm, scored lead automatically.',
        stat: 'Auto-qualified',
      },
      {
        icon: 'calendar',
        label: 'Books Call',
        detail: 'Appointment booked automatically',
        desc: 'If the lead is hot, the AI books a strategy call directly into your calendar — no back-and-forth scheduling emails needed.',
        stat: 'Auto-scheduled',
      },
      {
        icon: 'activity',
        label: 'CRM + Follow-up',
        detail: 'Full CRM sync & follow-up sequences',
        desc: 'Lead data syncs to your CRM instantly. Automated follow-up sequences trigger if no action is taken — no lead ever falls through the cracks.',
        stat: '0 missed leads',
      },
    ],
  },
  {
    label: 'Instagram Flow',
    steps: [
      {
        icon: 'instagram',
        label: 'Comment Trigger',
        detail: 'Keyword detected in comment',
        desc: 'Someone comments "price", "info", or any trigger word you define on your post. The AI detects it in real time — even on posts months old.',
        stat: 'Any post, any time',
      },
      {
        icon: 'message-square',
        label: 'Auto DM Sent',
        detail: 'Instant personalised DM fires',
        desc: 'A personalised direct message lands in their inbox within seconds of the comment — before they scroll away, before they forget about you.',
        stat: 'Instant DM',
      },
      {
        icon: 'home',
        label: 'Product Walk-through',
        detail: 'AI presents options conversationally',
        desc: 'The AI walks them through your products, pricing, and options — answering questions and handling objections just like your best sales rep would.',
        stat: '78% engage',
      },
      {
        icon: 'user-check',
        label: 'Info Captured',
        detail: 'Lead details collected mid-convo',
        desc: 'Contact details, budget, and interest level are captured naturally through the conversation — no cold form, no friction, no drop-off.',
        stat: 'Full lead profile',
      },
      {
        icon: 'briefcase',
        label: 'Hot Lead in CRM',
        detail: 'Scored lead pushed to pipeline',
        desc: 'A hot lead lands in your CRM — tagged with source, engagement score, and full conversation history. Your team picks up exactly where AI left off.',
        stat: 'Ready to close',
      },
    ],
  },
  {
    label: 'eCommerce Flow',
    steps: [
      {
        icon: 'shopping-cart',
        label: 'Order Placed',
        detail: 'Customer places an order',
        desc: 'A customer completes checkout on your store. The AI automation engine fires immediately — no manual action needed from your team.',
        stat: 'Instant trigger',
      },
      {
        icon: 'mail',
        label: 'Confirmation Sent',
        detail: 'Automated order confirmation',
        desc: 'A personalised confirmation message is sent instantly via WhatsApp and email — complete with order summary, timeline, and what to expect next.',
        stat: 'Zero delays',
      },
      {
        icon: 'truck',
        label: 'Shipping Updates',
        detail: 'Real-time shipping notifications',
        desc: 'As the order moves through fulfilment, the AI sends proactive shipping updates — reducing "where is my order?" support tickets to near zero.',
        stat: '80% fewer tickets',
      },
      {
        icon: 'package',
        label: 'Cart Recovery',
        detail: 'Abandoned cart sequences trigger',
        desc: 'If a visitor abandons their cart, a timed sequence fires across WhatsApp and email — with a personalised nudge and optional discount to recover the sale.',
        stat: '32% recovery rate',
      },
      {
        icon: 'trending-up',
        label: 'Repeat Purchase',
        detail: 'Re-engagement campaigns fire',
        desc: 'Post-delivery follow-ups, review requests, and personalised upsell offers are sent at the perfect time — turning one-time buyers into loyal repeat customers.',
        stat: '2.4× LTV increase',
      },
    ],
  },
];
