import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Tab = "terms" | "privacy";

interface Section {
  heading: string;
  body: React.ReactNode;
}

const termsSections: Section[] = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using any service, product, or platform provided by Kosinko Technologies Global Limited ("Kosinko", "we", "our", "us"), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.`,
  },
  {
    heading: "2. Services Provided",
    body: "Kosinko Technologies provides enterprise cybersecurity consulting, DevSecOps implementation, penetration testing, SOC operations, software development, AI and automation solutions, Web3/blockchain security services, and proprietary software products. Specific engagements are governed by individual Statement of Work (SOW) agreements signed prior to engagement commencement.",
  },
  {
    heading: "3. Authorised Use",
    body: "All security testing and offensive security activities are conducted exclusively under written authorisation from the asset owner. Any unauthorised reproduction or use of our tools, methodologies, reports, or intellectual property is strictly prohibited and may result in legal action.",
  },
  {
    heading: "4. Intellectual Property",
    body: "All products, tools, frameworks, and software developed by Kosinko Technologies, including CyberShield Enterprise Matrix, OctaVault, Octavian, Vanaa UAT Planner Pro, Megen Analyzer, and Kosinko Punks, remain the exclusive intellectual property of Kosinko Technologies Global Limited unless otherwise agreed in writing via a signed licensing agreement.",
  },
  {
    heading: "5. Confidentiality",
    body: "Kosinko Technologies treats all client information, security findings, vulnerabilities, and engagement data as strictly confidential. We operate under standard Non-Disclosure Agreement terms and will not disclose client information to any third party without explicit written consent, except where required by applicable law.",
  },
  {
    heading: "6. Limitation of Liability",
    body: "To the maximum extent permitted by applicable law, Kosinko Technologies shall not be liable for indirect, incidental, special, or consequential damages arising from engagements or use of our products. Our aggregate liability is limited to the total fees paid for the specific service giving rise to the claim.",
  },
  {
    heading: "7. Governing Law",
    body: "These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved through arbitration in Lagos State, Nigeria, in accordance with the Arbitration and Conciliation Act. International clients may negotiate alternative dispute resolution terms prior to engagement.",
  },
  {
    heading: "8. Modifications",
    body: "We reserve the right to update these Terms of Service at any time. Continued use of our services following any update constitutes acceptance of the revised terms. Significant changes will be communicated to active clients via email.",
  },
  {
    heading: "9. Contact",
    body: (
      <>
        For questions regarding these terms, contact us at{" "}
        <a
          href="mailto:info@kosinkotechnologies.com"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          info@kosinkotechnologies.com
        </a>{" "}
        or call{" "}
        <a
          href="https://wa.me/2349167286944"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          +234 916 728 6944
        </a>
        .
      </>
    ),
  },
];

const privacySections: Section[] = [
  {
    heading: "1. Information We Collect",
    body: (
      <ul className="space-y-2 list-none">
        {[
          "Contact details provided directly: name, email address, phone number, company name.",
          "Engagement and project details shared in briefs, discovery sessions, and SOWs.",
          "Usage data from our web platforms, applications, and analytics tools.",
          "Technical data such as IP addresses, browser type, and device identifiers (collected automatically via standard web protocols).",
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="text-blue-500 mt-1 shrink-0 text-xs">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    heading: "2. How We Use Your Information",
    body: (
      <ul className="space-y-2 list-none">
        {[
          "To deliver contracted services, security engagements, and technical reports.",
          "To communicate project updates, findings, and invoices.",
          "To improve our products, services, and internal methodologies.",
          "To send relevant security advisories or service updates (with prior consent).",
          "To comply with legal obligations under Nigerian law and applicable international standards.",
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="text-blue-500 mt-1 shrink-0 text-xs">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    heading: "3. Data Protection",
    body: "We comply with Nigeria's NDPR (Nigeria Data Protection Regulation) and applicable international standards including GDPR where relevant. All data at rest and in transit is encrypted using AES-256 standards. We do not sell, rent, or trade personal data to third parties under any circumstances.",
  },
  {
    heading: "4. Data Retention",
    body: "Client engagement data is retained for a minimum of 5 years in accordance with professional services standards and Nigerian regulatory requirements. You may request deletion of personal data subject to legal and contractual retention obligations.",
  },
  {
    heading: "5. Cookies & Tracking",
    body: "Our website uses minimal, performance-only cookies to improve user experience. We do not deploy tracking cookies for behavioural advertising. You may disable cookies in your browser settings without affecting core website functionality.",
  },
  {
    heading: "6. Third-Party Services",
    body: "We use trusted third-party services for cloud hosting, communication, and analytics (e.g., EmailJS for contact forms). These providers are contractually bound to maintain data confidentiality and are selected based on their security compliance posture.",
  },
  {
    heading: "7. Your Rights",
    body: (
      <ul className="space-y-2 list-none">
        {[
          "Right to access the personal data we hold about you.",
          "Right to correct inaccurate or outdated personal data.",
          "Right to request deletion of your data (subject to legal obligations).",
          "Right to withdraw consent for marketing communications at any time.",
          "Right to lodge a complaint with Nigeria's NITDA or your local data protection authority.",
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="text-blue-500 mt-1 shrink-0 text-xs">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    heading: "8. Privacy Contact",
    body: (
      <>
        For all data privacy enquiries, contact us at{" "}
        <a
          href="mailto:info@kosinkotechnologies.com"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          info@kosinkotechnologies.com
        </a>
        . We will respond within 5 business days.
      </>
    ),
  },
];

const AccordionItem: React.FC<{ section: Section; index: number }> = ({
  section,
  index,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
        open
          ? "border-blue-500/50 bg-zinc-900/60 ring-4 ring-blue-500/5"
          : "border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
      >
        <span
          className={`font-bold text-base transition-colors ${
            open ? "text-blue-400" : "text-white"
          }`}
        >
          {section.heading}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-all duration-500 ${
            open ? "rotate-180 text-blue-400" : "text-zinc-500"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-8 pt-2">
          <div className="h-px bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 mb-6"></div>
          <div className="text-zinc-400 text-sm leading-relaxed">{section.body}</div>
        </div>
      </div>
    </div>
  );
};

const TermsPrivacy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("terms");

  const sections = activeTab === "terms" ? termsSections : privacySections;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-20 pb-24 px-6 pt-12 reveal">

      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
          Legal Documentation
        </h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
          {activeTab === "terms" ? "Terms of Service" : "Privacy Policy"}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-black">
          Last Updated: March 2026 · Kosinko Technologies Global Limited
        </p>
      </div>

      {/* Tab Toggle */}
      <div className="flex gap-2 p-1 rounded-2xl border border-zinc-800 bg-zinc-900/30 w-fit mx-auto">
        {(["terms", "privacy"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.4em] transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            {tab === "terms" ? "Terms of Service" : "Privacy Policy"}
          </button>
        ))}
      </div>

      {/* Intro blurb */}
      <div className="service-card rounded-[2.5rem] p-10 relative overflow-hidden ring-1 ring-white/5">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
        <p className="text-zinc-400 text-sm leading-relaxed font-light">
          {activeTab === "terms"
            ? "These Terms of Service govern your access to and use of all services, products, and platforms provided by Kosinko Technologies Global Limited. By engaging with us, you confirm acceptance of these terms."
            : "This Privacy Policy explains how Kosinko Technologies Global Limited collects, uses, stores, and protects your personal information in accordance with the Nigeria Data Protection Regulation (NDPR) and applicable international standards."}
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {sections.map((section, i) => (
          <AccordionItem key={section.heading} section={section} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-6 pt-8">
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-black">
          Questions about our legal terms?
        </p>
        <a
          href="mailto:info@kosinkotechnologies.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-blue-400 bg-blue-500/20 text-blue-100 text-xs font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-black transition-all"
        >
          Contact Our Legal Team
        </a>
      </div>

    </div>
  );
};

export default TermsPrivacy;
