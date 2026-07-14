import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Refund Policy — Sanestix',
  description: 'Refund Policy for Sanestix — AI-Powered Web Development & Automation Agency. Our commitment to fair, transparent refund handling.',
  alternates: {
    canonical: 'https://www.sanestix.com/refund-policy',
  },
});

export default function RefundPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-[#060b14] text-text">
      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-8 text-center py-12 relative">
        <div className="inline-flex items-center gap-2 bg-[rgba(0,229,208,0.08)] border border-[rgba(0,229,208,0.12)] rounded-full px-4.5 py-1.5 text-xs font-semibold text-cyan tracking-wider uppercase mb-6">
          💳 Legal Document
        </div>
        <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.04em] mb-4 text-white">
          Refund <span className="text-cyan">Policy</span>
        </h1>
        <p className="text-muted text-[1rem] max-w-[560px] mx-auto leading-relaxed">
          Our commitment to fair outcomes. We stand behind our work — here&apos;s exactly how we handle refund requests.
        </p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap text-sm text-[rgba(255,255,255,0.45)]">
          <div>Effective: <span className="text-cyan font-semibold">January 1, 2026</span></div>
          <div>Last Updated: <span className="text-cyan font-semibold">March 1, 2026</span></div>
          <div>Response Time: <span className="text-cyan font-semibold">Within 7 days</span></div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-6 pb-24">
        {/* Guarantee Banner */}
        <div className="bg-[rgba(0,229,100,0.06)] border-l-3 border-[#00e564] rounded-r-lg p-5 mb-8">
          <p className="m-0 text-white font-medium text-sm leading-relaxed">
            ✅ Our Guarantee: We are committed to delivering high-quality work that meets the agreed scope. If we fall short, we will make it right — through revisions, partial refunds, or full refunds where applicable.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-2xl p-7 md:p-8 mb-12">
          <h2 className="text-cyan font-bold text-xs tracking-[0.08em] uppercase mb-4">Table of Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none p-0 m-0">
            {[
              { id: 'r1', title: 'General Policy' },
              { id: 'r2', title: 'Eligible Refunds' },
              { id: 'r3', title: 'Non-Refundable Items' },
              { id: 'r4', title: 'Refund Scenarios' },
              { id: 'r5', title: 'Refund Process' },
              { id: 'r6', title: 'Revision Policy' },
              { id: 'r7', title: 'Ongoing Services' },
              { id: 'r8', title: 'Third-Party Costs' },
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

        {/* Section r1 */}
        <section id="r1" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              01
            </div>
            <h2 className="text-white font-bold text-lg m-0">General Policy</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix operates a service-based business where work begins immediately upon receipt of the initial deposit. Due to the custom nature of our work — including design, development, AI training, and automation configuration — refunds are handled on a case-by-case basis with fairness to both parties.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Our goal is always client satisfaction. We would rather invest time in revisions and corrections than process a refund, and we encourage clients to raise concerns early so we can address them proactively.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            All refund requests must be submitted in writing to <strong>contact@sanestix.com</strong> within the timeframes specified in this policy.
          </p>
        </section>

        {/* Section r2 */}
        <section id="r2" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              02
            </div>
            <h2 className="text-white font-bold text-lg m-0">Situations Eligible for Refunds</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Refunds (full or partial) may be issued in the following circumstances:
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              '<strong>Project not started:</strong> If you cancel before any work has commenced, you are entitled to a full refund of the deposit',
              '<strong>Failure to deliver:</strong> If Sanestix is unable to deliver the agreed project scope for any reason within our control, you are entitled to a full refund',
              '<strong>Material scope deviation:</strong> If the delivered work materially and substantially deviates from the agreed scope and Sanestix is unable to rectify this after two revision rounds, a partial or full refund may be issued',
              '<strong>Project cancelled by Sanestix:</strong> If we initiate cancellation for reasons other than client breach, a pro-rata refund for work not yet completed will be issued',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
        </section>

        {/* Section r3 */}
        <section id="r3" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              03
            </div>
            <h2 className="text-white font-bold text-lg m-0">Non-Refundable Items</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            The following are generally not eligible for refunds:
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              'Initial deposits once work has commenced',
              'Fees for completed work that met the agreed scope, even if the client changes their mind',
              'Fees for strategy calls, consultations, or planning sessions',
              'Third-party costs (domain registration, hosting, software licences, API fees) that have already been incurred',
              'Fees for project delays caused by the client (late content submission, delayed approvals, etc.)',
              'Monthly maintenance or retainer fees for services already rendered in a billing period',
              'Fees for services where the client has already received and is using the deliverables',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
        </section>

        {/* Section r4 */}
        <section id="r4" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              04
            </div>
            <h2 className="text-white font-bold text-lg m-0">Refund Scenarios</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Here&apos;s a clear breakdown of what to expect in common scenarios:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-[rgba(0,229,100,0.25)] rounded-xl p-5">
              <div className="text-[#00e564] font-bold text-sm mb-3">✅ Eligible for Refund</div>
              <ul className="list-none p-0 m-0 space-y-1.5">
                {[
                  'Cancelled before work begins',
                  'We fail to deliver on agreed scope',
                  'Major unresolvable quality issues',
                  'We cancel the project without cause',
                  'Duplicate payment made in error',
                ].map((s) => (
                  <li key={s} className="text-text-secondary text-xs pl-4 relative before:content-['✓'] before:text-[#00e564] before:absolute before:left-0 before:top-0">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-[rgba(239,68,68,0.25)] rounded-xl p-5">
              <div className="text-red-400 font-bold text-sm mb-3">✗ Not Eligible for Refund</div>
              <ul className="list-none p-0 m-0 space-y-1.5">
                {[
                  'Change of mind after work begins',
                  'Dissatisfaction with style (subjective)',
                  'Delays caused by client',
                  'Completed retainer billing periods',
                  'Third-party platform changes (Meta, etc.)',
                ].map((s) => (
                  <li key={s} className="text-text-secondary text-xs pl-4 relative before:content-['✗'] before:text-red-400 before:absolute before:left-0 before:top-0">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[rgba(0,229,208,0.06)] border-l-3 border-cyan rounded-r-lg p-4.5 text-sm">
            <p className="m-0 text-white font-medium">
              💡 Not sure if your situation qualifies? Contact us at contact@sanestix.com — we&apos;ll review your case personally within 2 business days.
            </p>
          </div>
        </section>

        {/* Section r5 */}
        <section id="r5" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              05
            </div>
            <h2 className="text-white font-bold text-lg m-0">How to Request a Refund</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            To request a refund, follow these steps:
          </p>
          <div className="flex flex-col gap-0 relative">
            {[
              {
                num: 1,
                title: 'Contact us in writing',
                desc: 'Email contact@sanestix.com with subject line &ldquo;Refund Request — [Your Name / Project Name]&rdquo;. Include your project details and a clear description of your concern.',
              },
              {
                num: 2,
                title: 'We acknowledge within 2 business days',
                desc: 'Our team will confirm receipt of your request and assign it to a team member for review.',
              },
              {
                num: 3,
                title: 'Review & resolution within 7 business days',
                desc: 'We will review the project, assess the request against this policy, and respond with a proposed resolution — whether that&apos;s a revision plan, partial refund, or full refund.',
              },
              {
                num: 4,
                title: 'Refund processing (if approved)',
                desc: 'Approved refunds are processed within 10 business days via the original payment method or an agreed alternative.',
              },
            ].map((step, idx, arr) => (
              <div key={step.num} className="flex gap-4 relative pb-6 last:pb-0">
                {idx !== arr.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border pointer-events-none" />
                )}
                <div className="w-10 h-10 rounded-full bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] flex items-center justify-center text-xs font-bold text-cyan shrink-0 relative z-10">
                  {step.num}
                </div>
                <div className="pt-1">
                  <strong className="text-white text-sm block mb-1">{step.title}</strong>
                  <p className="text-text-secondary text-xs leading-relaxed m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section r6 */}
        <section id="r6" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              06
            </div>
            <h2 className="text-white font-bold text-lg m-0">Revision Policy</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Before any refund is considered for quality or scope-related issues, Sanestix will offer the client an opportunity for revisions. Our revision policy is:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              '<strong>Package 1 (AI Website Starter):</strong> 2 rounds of revisions included',
              '<strong>Package 2 (Growth Automation Suite):</strong> 3 rounds of revisions included',
              '<strong>Package 3 (eCommerce AI System):</strong> Unlimited revisions until scope satisfaction within the agreed specification',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            A &ldquo;revision&rdquo; means changes within the original agreed scope. New features, additions, or major scope changes beyond the original agreement will be scoped and quoted separately.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            If after all included revisions the delivered work still does not meet the agreed scope, a partial or full refund discussion may be initiated.
          </p>
        </section>

        {/* Section r7 */}
        <section id="r7" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              07
            </div>
            <h2 className="text-white font-bold text-lg m-0">Ongoing & Retainer Services</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            For monthly maintenance, support retainers, or ongoing automation management services:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Services are billed monthly in advance and fees cover services rendered in that month',
              'You may cancel an ongoing retainer at any time with 14 days\' written notice',
              'Unused days in a cancelled billing period are generally non-refundable, except where Sanestix has failed to provide the agreed service level',
              'If you are dissatisfied with our ongoing service, please raise it immediately — we will address performance issues within 5 business days and work to resolve them',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
        </section>

        {/* Section r8 */}
        <section id="r8" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              08
            </div>
            <h2 className="text-white font-bold text-lg m-0">Third-Party Costs</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            During the course of your project, Sanestix may incur third-party costs on your behalf, including:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Domain registration and hosting setup',
              'Software licences (chatbot platforms, automation tools, etc.)',
              'WhatsApp Business API or Meta platform fees',
              'CRM platform subscription costs',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            These costs are <strong>non-refundable</strong> once incurred, as they are billed directly by third-party providers. Sanestix will always inform you before incurring any third-party costs on your behalf.
          </p>
          <div className="bg-[rgba(255,170,0,0.06)] border-l-3 border-amber-500 rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              ⚠️ Some third-party platforms (Meta, WhatsApp Business) have their own billing and refund policies that are entirely outside Sanestix&apos;s control. We cannot refund fees charged directly by these platforms.
            </p>
          </div>
        </section>

        {/* Contact Card */}
        <div className="bg-card border border-[rgba(0,229,208,0.12)] rounded-2xl p-8 text-center mt-12">
          <h3 className="text-white font-bold text-lg mb-3">Have a Concern About Your Project?</h3>
          <p className="text-text-secondary text-sm mb-6 max-w-[480px] mx-auto leading-relaxed">
            We&apos;re here to make it right. Reach out before you escalate — nine times out of ten, we can resolve it quickly through conversation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:contact@sanestix.com"
              className="inline-flex items-center gap-2 bg-cyan text-[#060b14] font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity no-underline"
            >
              📧 Email Us
            </a>
            <a
              href="https://wa.me/923014422951?text=Hi%20Sanestix!%20I%20have%20a%20question%20about%20a%20refund."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-[rgba(0,229,208,0.2)] text-cyan font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[rgba(0,229,208,0.05)] transition-all no-underline"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
