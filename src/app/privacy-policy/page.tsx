import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy — Sanestix',
  description: 'Privacy Policy for Sanestix — AI-Powered Web Development & Automation Agency based in Lahore, Pakistan.',
  alternates: {
    canonical: 'https://www.sanestix.com/privacy-policy',
  },
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-[#060b14] text-text">
      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-8 text-center py-12 relative">
        <div className="inline-flex items-center gap-2 bg-[rgba(0,229,208,0.08)] border border-[rgba(0,229,208,0.12)] rounded-full px-4.5 py-1.5 text-xs font-semibold text-cyan tracking-wider uppercase mb-6">
          🔒 Legal Document
        </div>
        <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.04em] mb-4 text-white">
          Privacy <span className="text-cyan">Policy</span>
        </h1>
        <p className="text-muted text-[1rem] max-w-[560px] mx-auto leading-relaxed">
          How we collect, use, and protect your personal information when you work with Sanestix.
        </p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap text-sm text-[rgba(255,255,255,0.45)]">
          <div>Effective: <span className="text-cyan font-semibold">January 1, 2026</span></div>
          <div>Last Updated: <span className="text-cyan font-semibold">March 1, 2026</span></div>
          <div>Jurisdiction: <span className="text-cyan font-semibold">Pakistan (PECA 2016)</span></div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-6 pb-24">
        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-2xl p-7 md:p-8 mb-12">
          <h2 className="text-cyan font-bold text-xs tracking-[0.08em] uppercase mb-4">Table of Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none p-0 m-0">
            {[
              { id: 's1', title: 'Who We Are' },
              { id: 's2', title: 'Information We Collect' },
              { id: 's3', title: 'How We Use Your Information' },
              { id: 's4', title: 'Information Sharing' },
              { id: 's5', title: 'Data Storage & Security' },
              { id: 's6', title: 'Cookies & Tracking' },
              { id: 's7', title: 'Third-Party Services' },
              { id: 's8', title: 'Your Rights' },
              { id: 's9', title: "Children's Privacy" },
              { id: 's10', title: 'Changes to This Policy' },
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

        {/* Section 1 */}
        <section id="s1" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              01
            </div>
            <h2 className="text-white font-bold text-lg m-0">Who We Are</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is an AI-powered web development and automation agency headquartered in Lahore, Punjab, Pakistan. We provide custom website development, AI chatbot integration, WhatsApp and Instagram automation, CRM integration, eCommerce systems, and related digital services.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            This Privacy Policy governs how we handle personal information collected through our website at <strong>sanestix.com</strong>, during client engagements, and via our communication channels including WhatsApp, email, and contact forms.
          </p>
          <div className="bg-[rgba(0,229,208,0.06)] border-l-3 border-cyan rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              📬 Data Controller: Sanestix &nbsp;|&nbsp; Lahore, Punjab, Pakistan &nbsp;|&nbsp; contact@sanestix.com &nbsp;|&nbsp; +92-301-4422951
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="s2" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              02
            </div>
            <h2 className="text-white font-bold text-lg m-0">Information We Collect</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We collect information you provide directly and information gathered automatically when you visit our website.
          </p>
          <p className="text-white font-bold text-sm leading-relaxed mb-3">Information you provide:</p>
          <ul className="list-none p-0 m-0 mb-5 space-y-2">
            {[
              'Name, email address, phone number, and company name submitted through our contact form or WhatsApp',
              'Business details and project requirements you share during strategy calls or consultations',
              'Billing information required to process payments (handled by our payment processors — we do not store card details)',
              'Communications, feedback, or support requests you send to us',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-white font-bold text-sm leading-relaxed mb-3">Information collected automatically:</p>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              'IP address and approximate geolocation',
              'Browser type, device type, and operating system',
              'Pages visited, time spent on pages, and referring URLs',
              'Interaction data with our AI chatbot widget',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section id="s3" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              03
            </div>
            <h2 className="text-white font-bold text-lg m-0">How We Use Your Information</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We use collected information for the following purposes:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'To respond to enquiries and provide the services you request',
              'To deliver, maintain, and improve our AI-powered systems and websites',
              'To send project updates, invoices, and service-related communications',
              'To conduct free strategy calls and deliver custom project proposals',
              'To analyse website performance and improve user experience',
              'To comply with applicable legal obligations under Pakistani law',
              'To follow up on leads with your prior consent',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            We do not use your data for unsolicited marketing, and we will never sell or rent your personal data to third parties.
          </p>
        </section>

        {/* Section 4 */}
        <section id="s4" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              04
            </div>
            <h2 className="text-white font-bold text-lg m-0">Information Sharing</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Sanestix does not sell, trade, or rent your personal information to any third party. We may share data only in the following limited circumstances:
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              '<strong>Service providers:</strong> Trusted third-party tools we use to operate our business (e.g., cloud hosting, CRM platforms, payment gateways, analytics). These providers are bound by confidentiality obligations.',
              '<strong>Legal compliance:</strong> When required by Pakistani law, court order, or government authority.',
              '<strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred — you will be notified beforehand.',
              '<strong>With your consent:</strong> Any other sharing requires your explicit permission.',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
        </section>

        {/* Section 5 */}
        <section id="s5" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              05
            </div>
            <h2 className="text-white font-bold text-lg m-0">Data Storage & Security</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We implement enterprise-grade security measures to protect your personal information:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'All data is encrypted in transit using TLS/SSL protocols',
              'Data is stored on secure cloud infrastructure with access controls',
              'We conduct regular security audits of our systems',
              'Only authorised Sanestix personnel can access client data',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We retain personal data for as long as necessary to fulfil the purposes outlined in this policy, typically for the duration of our service engagement plus 2 years for financial records. You may request deletion at any time.
          </p>
          <div className="bg-[rgba(239,68,68,0.06)] border-l-3 border-red-500 rounded-r-lg p-4.5 my-5 text-sm">
            <p className="m-0 text-white font-medium">
              ⚠️ While we take all reasonable precautions, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and contact us immediately if you suspect any unauthorised access.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="s6" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              06
            </div>
            <h2 className="text-white font-bold text-lg m-0">Cookies & Tracking</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Our website uses cookies and similar tracking technologies to improve your experience:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              '<strong>Essential cookies:</strong> Required for the website to function correctly (e.g., session management)',
              '<strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)',
              '<strong>Chatbot session cookies:</strong> Enable our AI chatbot to maintain conversation context during your visit',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality. We do not use cookies for cross-site tracking or advertising profiling.
          </p>
        </section>

        {/* Section 7 */}
        <section id="s7" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              07
            </div>
            <h2 className="text-white font-bold text-lg m-0">Third-Party Services</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We use the following third-party services which may process your data subject to their own privacy policies:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              '<strong>WhatsApp Business API</strong> — for client communication (Meta Privacy Policy applies)',
              '<strong>Google Analytics</strong> — for website analytics (Google Privacy Policy applies)',
              '<strong>CRM Platforms</strong> (HubSpot, Zoho, Salesforce, etc.) — used on behalf of clients to manage their leads',
              '<strong>Payment Gateways</strong> — for processing service fees (provider\'s policy applies)',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            We encourage you to review the privacy policies of any third-party services you interact with. We are not responsible for the data practices of external services.
          </p>
        </section>

        {/* Section 8 */}
        <section id="s8" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              08
            </div>
            <h2 className="text-white font-bold text-lg m-0">Your Rights</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              '<strong>Access:</strong> Request a copy of the personal data we hold about you',
              '<strong>Correction:</strong> Request correction of inaccurate or incomplete data',
              '<strong>Deletion:</strong> Request erasure of your personal data (&ldquo;right to be forgotten&rdquo;)',
              '<strong>Restriction:</strong> Request that we limit how we process your data',
              '<strong>Objection:</strong> Object to our processing of your data for marketing purposes',
              '<strong>Data portability:</strong> Request your data in a structured, machine-readable format',
            ].map((li, idx) => (
              <li
                key={idx}
                className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs"
                dangerouslySetInnerHTML={{ __html: li }}
              />
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            To exercise any of these rights, please contact us at <strong>contact@sanestix.com</strong> or via WhatsApp at +92-301-4422951. We will respond within 30 days.
          </p>
        </section>

        {/* Section 9 */}
        <section id="s9" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              09
            </div>
            <h2 className="text-white font-bold text-lg m-0">Children&apos;s Privacy</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            Sanestix&apos;s services are intended for businesses and individuals aged 18 and above. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has submitted data to us, please contact us immediately at <strong>contact@sanestix.com</strong> and we will delete such information promptly.
          </p>
        </section>

        {/* Section 10 */}
        <section id="s10" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
            <div className="bg-[rgba(0,229,208,0.1)] border border-[rgba(0,229,208,0.12)] rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[0.8rem] text-cyan shrink-0">
              10
            </div>
            <h2 className="text-white font-bold text-lg m-0">Changes to This Policy</h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will:
          </p>
          <ul className="list-none p-0 m-0 mb-4 space-y-2">
            {[
              'Update the &ldquo;Last Updated&rdquo; date at the top of this page',
              'Notify active clients via email',
              'Post a prominent notice on our website if changes are material',
            ].map((li) => (
              <li key={li} className="text-text-secondary text-sm leading-relaxed pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0 before:top-0.5 before:text-xs">
                {li}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed">
            Your continued use of our website or services after changes take effect constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Contact Card */}
        <div className="bg-card border border-[rgba(0,229,208,0.12)] rounded-2xl p-8 text-center mt-12">
          <h3 className="text-white font-bold text-lg mb-3">Questions About Your Privacy?</h3>
          <p className="text-text-secondary text-sm mb-6 max-w-[480px] mx-auto leading-relaxed">
            We&apos;re happy to clarify anything in this policy or help you exercise your data rights. Get in touch with us directly.
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
