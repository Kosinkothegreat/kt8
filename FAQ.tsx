import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Services",
    questions: [
      {
        question: "What industries do you specialize in?",
        answer:
          "We serve enterprise clients across finance, healthcare, e-commerce, and Web3 ecosystems. Our expertise spans traditional industries adopting digital transformation and blockchain-native organizations requiring enterprise-grade infrastructure.",
      },
      {
        question: "How do you ensure project security and compliance?",
        answer:
          "Security is embedded in every phase. We follow DevSecOps practices, conduct continuous security testing, implement zero-trust architecture, and ensure compliance with ISO 27001, SOC 2, GDPR, and industry-specific regulations.",
      },
      {
        question: "What is your typical project timeline?",
        answer:
          "Discovery and planning: 2-4 weeks. Solution architecture: 3-6 weeks. Implementation varies by scope (8-24 weeks typical). We deliver in iterative sprints with regular milestones and continuous deployment.",
      },
    ],
  },
  {
    category: "Technology",
    questions: [
      {
        question: "What technology stack do you use?",
        answer:
          "We're technology-agnostic and select the best tools for your needs. Common stacks include React/Next.js, Node.js, Python, Solidity, cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), and blockchain protocols (Ethereum, Polygon, Solana).",
      },
      {
        question: "Do you provide AI and machine learning services?",
        answer:
          "Yes. We design and deploy custom AI solutions including predictive analytics, natural language processing, computer vision, and intelligent automation. Our ML pipelines are production-ready, scalable, and ethically implemented.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Absolutely. We specialize in hybrid architectures and legacy modernization. Our integration approach includes API development, data migration, microservices architecture, and ensuring backward compatibility while enabling future scalability.",
      },
    ],
  },
  {
    category: "Engagement",
    questions: [
      {
        question: "How do you price your services?",
        answer:
          "We offer flexible engagement models: fixed-price projects, time & materials, retainer agreements, and equity partnerships for early-stage ventures. Pricing depends on scope, timeline, and technology complexity. Contact us for a custom quote.",
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes. We provide managed services including 24/7 monitoring, incident response, security updates, performance optimization, and continuous improvement. Support packages are tailored to your operational needs and SLA requirements.",
      },
      {
        question: "What is the onboarding process?",
        answer:
          "Initial consultation (30-60 min) → Discovery workshop → Proposal & SOW → Project kickoff → Iterative delivery with weekly sync. We assign a dedicated account manager and technical lead to ensure seamless collaboration.",
      },
    ],
  },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleFAQ = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 py-24">
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
          Knowledge Base
        </h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Quick answers to common questions about our services, technology, and
          engagement process.
        </p>
      </div>

      <div className="space-y-12">
        {faqs.map((section) => (
          <div key={section.category} className="space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <h3 className="text-zinc-300 text-sm tracking-[0.5em] uppercase font-black">
                {section.category}
              </h3>
            </div>

            <div className="space-y-4">
              {section.questions.map((faq, index) => {
                const key = `${section.category}-${index}`;
                const isActive = activeIndex === key;

                return (
                  <div
                    key={index}
                    className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${isActive
                      ? "border-blue-500/50 bg-zinc-900/60 ring-4 ring-blue-500/5"
                      : "border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700"
                      }`}
                  >
                    <button
                      onClick={() => toggleFAQ(section.category, index)}
                      className="w-full text-left px-8 py-6 flex items-start justify-between gap-4"
                    >
                      <span
                        className={`font-bold text-base leading-relaxed transition-colors ${isActive ? "text-blue-400" : "text-white"
                          }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-all duration-500 ${isActive
                          ? "rotate-180 text-blue-400"
                          : "text-zinc-500 group-hover:text-zinc-400"
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <div className="h-px bg-linear-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 mb-6"></div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
