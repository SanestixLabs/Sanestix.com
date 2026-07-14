import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service — Sanestix',
  description: 'Terms of Service for Sanestix — AI-Powered Web Development & Automation Agency based in Lahore, Pakistan.',
  alternates: {
    canonical: 'https://www.sanestix.com/terms-of-service',
  },
});

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-[#060b14] text-text">
      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-8 text-center py-12 relative">
        <div className="inline-flex items-center gap-2 bg-[rgba(0,229,208,0.08)] border border-[rgba(0,229,208,0.12)] rounded-full px-4.5 py-1.5 text-xs font-semibold text-cyan tracking-wider uppercase mb-6">
          📋 Legal Document
        </div>
        <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.04em] mb-4 text-white">
          Terms of <span className="text-cyan">Service</span>
        </h1>
        <p className="text-muted text-[1rem] max-w-[560px] mx-auto leading-relaxed">
          The terms and conditions that govern your use of Sanestix&apos;s website and services.
        </p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap text-sm text-[rgba(255,255,255,0.45)]">
          <div>Effective: <span className="text-cyan font-semibold">January 1, 2026</span></div>
          <div>Last Updated: <span className="text-cyan font-semibold">March 1, 2026</span></div>
          <div>Governing Law: <span className="text-cyan font-semibold">Pakistan</span></div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-6 pb-24">
        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-2xl p-7 md:p-8 mb-12">
          <h2 className="text-cyan font-bold text-xs tracking-[0.08em] uppercase mb-4">Table of Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none p-0 m-0">
            {[
              { id: 't1', title: 'Acceptance of Terms' },
              { id: 't2', title: 'Services Description' },
              { id: 't3', title: 'Engagement & Agreements' },
              { id: 't4', title: 'Payment Terms' },
              { id: 't5', title: 'Intellectual Property' },
              { id: 't6', title: 'Client Responsibilities' },
              { id: 't7', title: 'Confidentiality' },
              { id: 't8', title: 'Warranties & Disclaimers' },
              { id: 't9', title: 'Limitation of Liability' },
              { id: 't10', title: 'Termination' },
              { id: 't11', title: 'Dispute Resolution' },
              { id: 't12', title: 'Governing Law' },
            ].map((item, idx) => (
              <li key={item.id} className="m-0 p-0">
                <a
                  href={`#${item.id}`}
                  className="text-text-secondary hover:text-cyan text-sm flex items-center gap-2 no-underline transition-colors py-0.5"
                >
                  <span className="text-cyan font-bold text-[0.7rem] min-w-[20px]">{String(idx + 1).padStart(2, '0')}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section t1 */}
        <section id="t1" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              01
            </div>
            <h2 className="text-white font-bold text-lg m-0">Acceptance of Terms</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            By accessing or using the Sanestix website (sanestix.com), requesting a free strategy call, engaging our services, or entering into a service agreement with Sanestix, you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            If you do not agree to these Terms, please do not use our website or engage our services. We reserve the right to update these Terms at any time, with changes effective upon posting to our website.
          </p>
          <div className="bg-[rgba(0,229,208,0.06)] border-l-3 border-cyan rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              📌 These Terms apply to all visitors, clients, and users of the Sanestix website and services. Engaging our services — even informally via WhatsApp or email — constitutes acceptance of these Terms.
            </p>
          </div>
        </section>

        {/* Section t2 */}
        <section id="t2" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              02
            </div>
            <h2 className="text-white font-bold text-lg m-0">Services Description</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix provides the following digital services to business clients:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Custom AI-powered website design and development',
              'AI chatbot integration and training on client business data',
              'WhatsApp Business API automation and workflow setup',
              'Instagram DM automation and comment trigger systems',
              'CRM integration and lead pipeline setup',
              'eCommerce store development and order automation',
              'AI-powered social media growth and content systems',
              'Ongoing maintenance, optimisation, and support services',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            The specific scope of services for each project is defined in a custom proposal or service agreement issued to the client prior to commencement of work. The scope outlined in that agreement takes precedence over these general Terms where there is a conflict.
          </p>
        </section>

        {/* Section t3 */}
        <section id="t3" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              03
            </div>
            <h2 className="text-white font-bold text-lg m-0">Engagement & Service Agreements</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            All projects begin with a free 30-minute strategy call. Following this, Sanestix will issue a custom proposal outlining:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Project scope and deliverables',
              'Timeline and key milestones',
              'Payment schedule and total investment',
              'Any third-party costs (hosting, software licences, etc.)',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            A project is formally engaged upon receipt of the agreed deposit payment. Verbal or WhatsApp-based agreements are acknowledged but the written proposal/agreement constitutes the binding contract.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            Sanestix reserves the right to decline any project or client engagement at its sole discretion, including but not limited to projects involving unlawful activities, content that violates platform policies, or businesses operating in prohibited sectors.
          </p>
        </section>

        {/* Section t4 */}
        <section id="t4" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              04
            </div>
            <h2 className="text-white font-bold text-lg m-0">Payment Terms</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Payment terms are outlined in each project&apos;s service agreement. General payment terms are as follows:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              '<strong>Deposit:</strong> A non-refundable deposit (typically 50% of the total project fee) is required to initiate work',
              '<strong>Final payment:</strong> The remaining balance is due upon project completion and client approval, before final files are handed over',
              '<strong>Monthly retainers:</strong> Ongoing maintenance or retainer services are billed monthly in advance',
              '<strong>Late payments:</strong> Invoices not paid within 7 days of the due date may result in suspension of services',
              '<strong>Currency:</strong> Invoices are issued in Pakistani Rupees (PKR) unless otherwise agreed for international clients',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            All payments are final unless otherwise agreed in writing. Disputed charges must be raised within 7 days of the invoice date.
          </p>
          <div className="bg-[rgba(255,170,0,0.06)] border-l-3 border-amber-500 rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              ⚠️ Work will not commence until the deposit is received and confirmed. Final deliverables (website files, access credentials, etc.) will not be released until the final payment is cleared.
            </p>
          </div>
        </section>

        {/* Section t5 */}
        <section id="t5" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              05
            </div>
            <h2 className="text-white font-bold text-lg m-0">Intellectual Property</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            <strong>Client-owned content:</strong> All original content, logos, branding, and assets provided by the client remain the intellectual property of the client.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            <strong>Deliverables ownership:</strong> Upon receipt of full payment, the client receives ownership of the final deliverables (website files, custom code, design assets) created specifically for their project.
          </p>
          <p className="text-white font-bold text-sm leading-relaxed mb-3">Sanestix retains rights to:</p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'General methodologies, frameworks, and reusable code components',
              'Third-party tools, plugins, and software incorporated into the project (subject to their respective licences)',
              'Portfolio rights — we reserve the right to feature your project in our portfolio and case studies, unless you request otherwise in writing',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            You may not resell or redistribute Sanestix&apos;s proprietary systems, frameworks, or AI training methodologies without prior written consent.
          </p>
        </section>

        {/* Section t6 */}
        <section id="t6" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              06
            </div>
            <h2 className="text-white font-bold text-lg m-0">Client Responsibilities</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            To ensure timely and successful delivery, clients are expected to:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Provide accurate, complete, and timely information, content, and approvals as requested',
              'Designate a primary point of contact who can make decisions on behalf of the business',
              'Respond to requests for feedback or approval within 3 business days',
              'Provide access credentials (hosting, CRM, social media, etc.) in a timely manner',
              'Ensure that all content and materials provided to Sanestix do not infringe on third-party intellectual property rights',
              'Not use our services for unlawful, deceptive, or harmful activities',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            Delays caused by client inaction, delayed content provision, or delayed approvals may affect project timelines. Sanestix is not liable for timeline extensions resulting from client-side delays.
          </p>
        </section>

        {/* Section t7 */}
        <section id="t7" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              07
            </div>
            <h2 className="text-white font-bold text-lg m-0">Confidentiality</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Both parties agree to maintain the confidentiality of each other&apos;s proprietary information. Specifically:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Sanestix will not disclose client business data, pricing, strategies, or project details to any third party without consent',
              'Clients will not disclose Sanestix&apos;s proprietary methodologies, system architecture, or internal processes',
              'This obligation survives the termination of the service engagement',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            Exceptions apply where disclosure is required by law or where information is already publicly known through no breach of this agreement.
          </p>
        </section>

        {/* Section t8 */}
        <section id="t8" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              08
            </div>
            <h2 className="text-white font-bold text-lg m-0">Warranties & Disclaimers</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix warrants that:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Services will be performed professionally and with reasonable skill and care',
              'Deliverables will substantially conform to the agreed scope',
              'We will address material defects reported within 14 days of project delivery at no additional charge',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix does not warrant that:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Services will achieve specific business outcomes, revenue targets, or lead generation goals (results depend on many factors outside our control)',
              'Our systems will be entirely free from bugs or errors at all times',
              'Third-party platforms (WhatsApp, Instagram, CRMs) will maintain their current APIs or policies',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <div className="bg-[rgba(255,170,0,0.06)] border-l-3 border-amber-500 rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              ⚠️ AI chatbot and automation performance depends on training data quality and ongoing optimisation. We cannot guarantee specific conversion rates or lead volumes.
            </p>
          </div>
        </section>

        {/* Section t9 */}
        <section id="t9" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              09
            </div>
            <h2 className="text-white font-bold text-lg m-0">Limitation of Liability</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            To the maximum extent permitted by applicable Pakistani law, Sanestix&apos;s total liability to any client for any claim arising from or relating to our services shall not exceed the total fees paid by that client for the specific project giving rise to the claim.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix shall not be liable for:
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              'Indirect, incidental, or consequential damages',
              'Loss of profits, revenue, or business opportunity',
              'Data loss or corruption not caused directly by our negligence',
              'Downtime or service disruptions caused by third-party hosting or API providers',
              'Changes in third-party platform policies (Meta, Google, etc.) that affect our automations',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
        </section>

        {/* Section t10 */}
        <section id="t10" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              10
            </div>
            <h2 className="text-white font-bold text-lg m-0">Termination</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            <strong>By the client:</strong> You may terminate a service engagement with 14 days&apos; written notice. Fees paid for work already completed or in progress are non-refundable. Any outstanding balance for work completed to date becomes immediately due.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            <strong>By Sanestix:</strong> We reserve the right to terminate any engagement immediately and without liability if:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'The client violates these Terms or the service agreement',
              'Payment is more than 14 days overdue',
              'The client engages in abusive, threatening, or unlawful conduct',
              'Continued engagement would require us to act in violation of any law',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            Upon termination, each party will return or destroy the other&apos;s confidential materials. Sanestix will provide the client with all completed work files up to the point of termination upon clearance of any outstanding balance.
          </p>
        </section>

        {/* Section t11 */}
        <section id="t11" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              11
            </div>
            <h2 className="text-white font-bold text-lg m-0">Dispute Resolution</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            In the event of a dispute, the parties agree to first attempt to resolve the matter amicably through direct communication. If a dispute cannot be resolved informally within 30 days, it shall be referred to mediation or arbitration in Lahore, Pakistan before any legal proceedings are initiated.
          </p>
        </section>

        {/* Section t12 */}
        <section id="t12" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              12
            </div>
            <h2 className="text-white font-bold text-lg m-0">Governing Law</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising from these Terms or our services that cannot be resolved through mediation shall be subject to the exclusive jurisdiction of the courts of Lahore, Punjab, Pakistan.
          </p>
        </section>

        {/* Contact Card */}
        <div className="bg-card border border-[rgba(0,229,208,0.12)] rounded-2xl p-8 text-center mt-12">
          <h3 className="text-white font-bold text-lg mb-3">Questions About Our Terms?</h3>
          <p className="text-text-secondary text-sm mb-6 max-w-[480px] mx-auto leading-relaxed">
            If anything in these Terms is unclear, reach out before engaging our services — we&apos;re happy to explain anything in plain language.
          </p>
          <a
            href="mailto:contact@sanestix.com"
            className="inline-flex items-center gap-2.5 bg-cyan text-[#060b14] font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity no-underline"
          >
            📧 contact@sanestix.com
          </a>
        </div>
      </div>
    </div>
  );
}
