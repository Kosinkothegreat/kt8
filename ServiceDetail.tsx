import React, { useState } from "react";
import { services } from "./ServiceGrid";
import {
  ArrowLeft, CheckCircle2, ChevronDown, ExternalLink,
  Globe, Shield, Zap, GraduationCap, ArrowRight
} from "lucide-react";

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onContact: () => void;
}

interface SubService {
  title: string;
  body: string;
}

interface RichContent {
  overview: string;
  subServices: SubService[];
  realWorld: { title: string; description: string };
  impact: string;
  training: string;
  specs: string[];
  learnMoreUrl?: string;
  ctaLabel?: string;
}

const richContent: Record<string, RichContent> = {
  consulting: {
    overview:
      "At Kosinko Technologies Global Limited, our consulting practice sits at the intersection of technology, strategy, and business performance. We don't just advise, we partner with your leadership team to design, execute, and sustain transformation initiatives that deliver measurable outcomes. Whether you are a startup defining your technology foundation, an SME digitising your operations, or an enterprise navigating a complex multi-year transformation, our consultants bring the depth of experience and the breadth of expertise to guide every stage of the journey.",
    subServices: [
      {
        title: "Cybersecurity Consulting",
        body: "We deliver comprehensive cybersecurity risk assessments that identify your most critical assets, map your threat landscape, and quantify the potential business impact of security incidents. We design tailored cybersecurity roadmaps, prioritising the controls, technologies, and processes that will deliver the greatest risk reduction. We advise on regulatory compliance including GDPR, ISO 27001, SOC 2, NDPR, and PCI DSS. For organisations that have experienced security incidents, we provide post-incident consulting: helping leadership understand what happened, why, the full impact, and how to prevent recurrence. We also advise boards and executive teams on communicating security posture and incidents to investors and regulators.",
      },
      {
        title: "Business Digitalisation",
        body: "We begin with a comprehensive digital maturity assessment, evaluating your current technology stack, business processes, data infrastructure, and workforce capabilities against industry benchmarks. From this foundation, we design your digital transformation roadmap, sequencing technology adoption, process redesign, and change management initiatives that minimise disruption while maximising pace. We advise on technology selection across every layer, ERP, CRM, cloud infrastructure, collaboration tools, customer-facing digital channels, and operational automation platforms. We manage vendor selection, build business cases for technology investments, and provide ongoing advisory support throughout implementation.",
      },
      {
        title: "Business Development Consulting",
        body: "We work with founders, commercial directors, and business development teams to define their ideal client profile, map their total addressable market, and build structured business development frameworks that generate consistent pipeline. We design outreach strategies, develop compelling value propositions, and create the sales collateral, pitch decks, and proposal frameworks that win new business. For technology companies, we advise on go-to-market strategy for new products, helping engineering-led organisations translate technical capabilities into commercially compelling offerings. We also advise on strategic partnership development: identifying, approaching, and structuring relationships that expand reach, capabilities, and revenue.",
      },
      {
        title: "Finance Consulting",
        body: "We deliver financial health assessments that evaluate your current financial position, cash flow dynamics, cost structure, and revenue quality, identifying risks, inefficiencies, and opportunities not always visible in standard financial reporting. We design financial management frameworks that give leadership real-time visibility into financial performance and support strategic planning with accurate financial modelling. For technology businesses and startups seeking investment, we advise on financial structuring, valuation, investor relations, and the preparation of financial materials that meet institutional investor standards. We also advise on financial technology selection for accounting platforms, financial reporting tools, and treasury management systems.",
      },
      {
        title: "Data Migration Consulting",
        body: "We begin with a comprehensive data audit: cataloguing your existing data assets, assessing data quality, identifying dependencies, and mapping relationships between data, systems, and business processes. From this, we design a migration architecture defining the technical approach, tooling, sequencing, rollback procedures, and validation protocols. We manage migrations across all major scenarios: legacy system to cloud, on-premise database to SaaS, monolithic architecture to microservices, and cross-cloud migrations between AWS, Azure, and Google Cloud. Every migration is executed with a zero-data-loss mandate, with comprehensive testing, parallel-run periods, and data reconciliation processes that validate integrity before source systems are decommissioned.",
      },
      {
        title: "Business Continuity Consulting",
        body: "We develop comprehensive Business Continuity Plans (BCPs) that identify critical business functions, quantify acceptable downtime and data loss tolerances (RTO and RPO), and define the procedures, resources, and responsibilities required to maintain those functions through any disruption scenario. Our practice covers Disaster Recovery planning: designing backup architectures, failover systems, and recovery procedures that meet your RTO and RPO requirements. We design and facilitate business continuity exercises, tabletop simulations and live drills that test your plans, train your teams, and identify gaps before a real incident exposes them. We also advise on supply chain resilience, crisis communication planning, and insurance frameworks.",
      },
    ],
    realWorld: {
      title: "Legacy Banking Migration",
      description:
        "We helped a regional bank move from a 20-year-old monolithic core to a microservices architecture, reducing transaction latency by 40% and eliminating three legacy system dependencies.",
    },
    impact:
      "We act as your CTO-as-a-Service and strategic partner, ensuring your technology roadmap aligns with market demands, internal scaling capabilities, and regulatory requirements simultaneously.",
    training:
      "Our Architecture Masterclass trains your internal leads to maintain and evolve complex systems using industry-standard design patterns. Business Digitalisation bootcamps bring your leadership team to digital fluency.",
    specs: [
      "Digital Maturity Assessment & Roadmap",
      "Cloud Migration Architecture",
      "Legacy System Modernisation",
      "Vendor Selection & Procurement Advisory",
      "Financial Structuring & Investor Relations",
      "Business Continuity & Disaster Recovery Planning",
    ],
    learnMoreUrl: "https://share-eu1.hsforms.com/1T1gnhBEfQiyIHQxx8pzoUQ2fznzl",
    ctaLabel: "Enquire About Consulting",
  },

  "cyber-security": {
    overview:
      "Cybersecurity is not a department at Kosinko Technologies; it is the foundation upon which every service we deliver is built. Our cybersecurity practice delivers enterprise-grade, multi-layered defence architectures that protect your most critical assets from the full spectrum of modern cyber threats. We operate at every layer of your security posture, from network perimeter to endpoint, cloud infrastructure to human workforce, ensuring that no single point of failure can compromise your organisation.",
    subServices: [
      {
        title: "Penetration Testing & Offensive Security",
        body: "We simulate real-world cyberattacks against your infrastructure using the same tools employed by sophisticated threat actors: Nmap for network discovery and port scanning, Nikto for web server vulnerability analysis, Nessus for enterprise-grade vulnerability assessment, and Trivy for container and infrastructure security scanning. Our red team conducts external and internal network penetration tests, web application security assessments, mobile application security testing, cloud infrastructure assessments across AWS and Azure, and full adversarial red team engagements that test your technology, people, and processes simultaneously. Every engagement concludes with a prioritised remediation roadmap and a retest engagement to validate vulnerabilities have been effectively closed.",
      },
      {
        title: "Multi-Layer Defence Architecture",
        body: "We design and implement defence-in-depth security architectures that operate across every layer of your environment simultaneously: network security, endpoint protection, application security, identity and access management, data security, and operational security controls. Our Zero Trust framework implementations eliminate the assumption that anything inside your network is safe, ensuring that every user, device, and service is continuously authenticated and authorised before accessing any resource.",
      },
      {
        title: "Azure SOC & Cloud Security Operations",
        body: "We operate dedicated Security Operations Centres on Microsoft Azure, providing 24/7 continuous monitoring, threat detection, and incident response using Microsoft Sentinel, SIEM integration, and real-time global threat intelligence feeds. Our SOC analysts monitor your entire cloud estate around the clock, executing pre-defined incident response playbooks that contain threats in minutes rather than days.",
      },
      {
        title: "CyberShield Enterprise Matrix",
        body: "Our own intelligence platform, available at cybershieldmatrix.kosinkotechnologies.com, is the world's most comprehensive cybersecurity tool intelligence system. CyberShield Enterprise Matrix ranks, rates, and compares every major cybersecurity tool across all 26 domains of infrastructure security including SIEM, EDR, XDR, Email Security, Identity & Access Management, Network Detection & Response, Cloud Security, Endpoint Protection, and more. Using Gartner Magic Quadrant methodology, independent global research, and comprehensive real-world testing, CyberShield Matrix gives CISOs, security architects, and enterprise procurement teams the objective intelligence they need to make the right security technology decisions.",
      },
      {
        title: "Compliance & Regulatory Security",
        body: "We guide and implement security controls aligned to GDPR, ISO 27001, SOC 2, NDPR, PCI DSS, and HIPAA, ensuring your security posture satisfies both operational excellence and regulatory requirements without over-investing in controls that don't address your actual risk profile. Our compliance advisory combines technical implementation with documentation, policy development, and audit readiness support.",
      },
    ],
    realWorld: {
      title: "Global E-Commerce Protection",
      description:
        "Implemented a Zero-Trust network architecture for a major retailer, stopping a sophisticated SQL injection attempt within 11 seconds of detection. Reduced attack surface by 67% over 90 days.",
    },
    impact:
      "We deploy multi-layered defence-in-depth, including automated threat hunting, AI-driven anomaly detection, and 24/7 SOC operations, to ensure your organisation is always protected, always monitored, always resilient.",
    training:
      "Our Red Team Simulation practices give your staff real-world experience defending against sophisticated phishing and ransomware attacks. Our Cyber Security Academy (Aegis) offers certification pathways from SOC Analyst to Red Team Operator.",
    specs: [
      "Zero-Trust Architecture Implementation",
      "24/7 Azure SOC with Microsoft Sentinel",
      "Penetration Testing (Nmap, Nikto, Nessus, Trivy)",
      "SIEM, SOAR, and EDR Integration",
      "GDPR · ISO 27001 · SOC 2 · NDPR · PCI DSS",
      "Post-Incident Forensics & Remediation",
    ],
    learnMoreUrl: "https://share-eu1.hsforms.com/1hkVon3SfS6eMCunuJpBlxA2fznzl",
    ctaLabel: "Request Security Assessment",
  },

  "web-development": {
    overview:
      "Great software is the engine of every successful modern business. Our Web Development practice delivers custom websites, web applications, and digital platforms that are performant, scalable, secure, and built to the highest engineering standards. We cover the complete spectrum of web development, from marketing websites and e-commerce platforms to complex enterprise web applications and API-driven platforms, with security embedded into every layer from the first line of code.",
    subServices: [
      {
        title: "Website Design & Development",
        body: "We design and develop high-converting, visually exceptional websites that communicate your brand, engage your audience, and drive measurable business outcomes. Every website we build is engineered for performance: fast load times, responsive across all devices, optimised for search engines, and accessible to all users. Our design process combines deep business understanding with exceptional aesthetic sensibility, producing websites that don't just look great, but actively work as your most powerful marketing and sales asset. We build on modern frameworks including React and Next.js, with CMS integration for teams that need editorial control over their content.",
      },
      {
        title: "Web Application Development",
        body: "We engineer complex, custom web applications that solve specific business problems at enterprise scale. From internal operational platforms and customer-facing portals to SaaS products and multi-tenant platforms, our full-stack engineering team brings deep expertise across the complete web application stack. We architect for scalability, designing systems that handle your current load and grow with your business without requiring fundamental re-engineering. We design for security, implementing authentication, authorisation, input validation, data encryption, and API security as foundational requirements, not afterthoughts.",
      },
      {
        title: "E-Commerce Development",
        body: "We build full-featured, conversion-optimised e-commerce platforms that turn visitors into customers and customers into loyal advocates. From product catalogue and inventory management to payment processing, order management, customer accounts, and post-purchase experience, we engineer every element of your commerce platform for maximum conversion and operational efficiency. Our e-commerce builds are mobile-first, performance-optimised, and integrated with the marketing, analytics, and operational tools your business depends on.",
      },
      {
        title: "API Development & Integration",
        body: "Modern businesses run on connected systems. We design and develop secure, well-documented RESTful and GraphQL APIs that connect your applications, expose your data and capabilities to partners and customers, and integrate your systems into a coherent, efficient digital ecosystem. We also deliver complex system integration projects, connecting your web applications to ERP systems, payment gateways, third-party services, data platforms, and legacy infrastructure through secure, reliable API integrations.",
      },
      {
        title: "Mobile App Development",
        body: "We build native and cross-platform mobile applications for Android and iOS that deliver exceptional user experiences and measurable business value. Using React Native and Flutter, we develop cross-platform applications that share a significant proportion of their codebase between platforms, reducing development cost and time to market while maintaining the performance and native feel that users expect. We cover the complete mobile development lifecycle, from concept and UX design through development, testing, and app store submission to ongoing maintenance and feature development.",
      },
    ],
    realWorld: {
      title: "E-Commerce Platform Modernisation",
      description:
        "Built a high-performance React-based storefront with Node.js backend for a retail client, improving page load times by 60%, increasing mobile conversion by 35%, and reducing infrastructure costs by 40%.",
    },
    impact:
      "We create modern, performant web applications using industry-standard tools and frameworks, ensuring your digital presence stands out and scales effortlessly, with security embedded from the first line of code.",
    training:
      "Our Modern Web Stack Bootcamp teaches your team React, TypeScript, and Node.js fundamentals, enabling them to build and maintain enterprise-grade applications. We also offer code review and developer mentoring services.",
    specs: [
      "React · Next.js · TypeScript · Node.js",
      "RESTful & GraphQL API Development",
      "React Native & Flutter Mobile Apps",
      "CI/CD Pipeline & DevSecOps Integration",
      "CMS Integration & Headless Architecture",
      "Performance Optimisation & SEO Engineering",
    ],
    ctaLabel: "Start a Web Project",
  },

  nft: {
    overview:
      "Non-Fungible Tokens represent one of the most significant shifts in how ownership, authenticity, and value are established and transferred in the digital economy. Kosinko Technologies builds the infrastructure, platforms, and smart contracts that power NFT ecosystems, engineered with the security, scalability, and technical rigour that the blockchain environment demands. Our own collection, Kosinko Punks, available on OpenSea, is a living example of our NFT capabilities.",
    subServices: [
      {
        title: "NFT Platform Development",
        body: "We design and build full-featured NFT minting platforms, enabling creators, brands, and enterprises to mint, manage, list, and sell NFTs across multiple blockchain networks. Our platforms handle the complete NFT lifecycle, from wallet connection and asset upload through minting, listing, sale, transfer, and royalty distribution. We build for multi-chain compatibility, supporting Ethereum, Solana, BNB Chain, Polygon, and other major networks. Every platform is built with a security-first approach, protecting both the platform operator and the end users who trust it with their digital assets.",
      },
      {
        title: "Smart Contract Development & Auditing",
        body: "The smart contract is the heart of every NFT project, and a poorly written smart contract is an invitation to exploitation. We develop NFT smart contracts that are rigorously tested, formally verified where appropriate, and audited for the full range of known vulnerability classes including re-entrancy attacks, integer overflow and underflow, access control vulnerabilities, and logic flaws that could enable unauthorised minting, fund drainage, or ownership manipulation. We also audit existing smart contracts for projects requiring independent security validation before deployment or a major mint event.",
      },
      {
        title: "NFT Marketplace Infrastructure",
        body: "We build custom NFT marketplace infrastructure, enabling peer-to-peer trading, auction mechanics, royalty enforcement, and secondary market functionality for your NFT ecosystem. Whether you need a standalone marketplace for your specific collection or a multi-collection marketplace serving a broader community, we engineer the complete technical infrastructure including smart contracts, backend APIs, indexing services, and front-end marketplace interfaces.",
      },
      {
        title: "Real-World Asset Tokenization",
        body: "We build the technical infrastructure for tokenising real-world assets, bringing physical and financial assets including real estate, commodities, securities, intellectual property, and collectibles onto the blockchain as NFTs or fungible tokens. Our RWA tokenisation solutions combine smart contract engineering with legal and compliance frameworks that ensure on-chain representations of real-world assets meet the regulatory requirements of the jurisdictions in which they operate.",
      },
      {
        title: "Kosinko Punks Community",
        body: "Our own NFT collection on OpenSea at opensea.io/Kosinko1 is a community of rare, limited-edition Kosinko Punks that represent the spirit, identity, and creative vision of the Kosinko Technologies ecosystem. Where imagination meets art and creativity becomes magical. Each Kosinko Punk is a unique piece of digital ownership, rare, collectible, and part of a growing community of holders who share a love for art, technology, and the decentralised future. Powered by the KAGT token on the Polygon blockchain.",
      },
    ],
    realWorld: {
      title: "Real Estate Tokenisation, Lagos",
      description:
        "Created a fractional ownership platform for luxury properties in Lagos, allowing micro-investments through secure ERC-1155 smart contracts, reducing minimum investment threshold from ₦50M to ₦500K.",
    },
    impact:
      "Our focus is on utility and security. We ensure every NFT project has robust metadata architecture, gas-optimised minting logic, re-entrancy protected smart contracts, and seamless marketplace integration.",
    training:
      "Our Web3 Product Management programme teaches you how to build community-driven economies around digital assets, covering tokenomics, community engagement, marketplace strategy, and secondary market management.",
    specs: [
      "ERC-721 & ERC-1155 Smart Contract Standards",
      "Multi-chain: Ethereum · Solana · Polygon · BNB",
      "Smart Contract Auditing & Formal Verification",
      "Marketplace Integration (OpenSea, custom)",
      "Real-World Asset Tokenisation",
      "Community & Treasury Management Advisory",
    ],
    learnMoreUrl: "https://opensea.io/Kosinko1?collectionSlugs=kosinko-punks",
    ctaLabel: "Explore Kosinko Punks",
  },

  crypto: {
    overview:
      "The on-chain financial economy is no longer experimental; it is a global infrastructure that is growing, maturing, and integrating with traditional finance at an accelerating pace. Kosinko Technologies builds the secure crypto and DeFi infrastructure that powers this economy, from custom token creation and blockchain transaction management to full DeFi protocol engineering and cryptographic wallet systems. Every system we build is designed with the security rigour that blockchain environments demand, where code is law and vulnerabilities are permanent.",
    subServices: [
      {
        title: "Custom Token Creation & Management",
        body: "We design, develop, and deploy custom cryptocurrency tokens tailored to your specific business requirements, whether you need a utility token for your platform ecosystem, a governance token for a decentralised protocol, a security token representing ownership in a real-world asset, or a stablecoin pegged to fiat currency or a basket of assets. Our token creation service covers the complete lifecycle from tokenomics design, defining your token's supply mechanics, distribution schedule, vesting schedules, utility functions, and economic incentives, through smart contract development and auditing, to deployment across your chosen blockchain network. Following launch, we provide ongoing token management services.",
      },
      {
        title: "DeFi Protocol Development",
        body: "We engineer full-featured Decentralized Finance protocols, building the on-chain financial infrastructure that enables lending, borrowing, trading, yield generation, and liquidity provision without centralised intermediaries. Our DeFi development capabilities cover Decentralized Exchange (DEX) protocols, automated market makers (AMMs), yield farming and liquidity mining platforms, lending and borrowing protocols, staking and rewards infrastructure, and cross-chain bridge mechanisms. Every DeFi protocol we build is subjected to rigorous security testing, because in DeFi, a smart contract vulnerability is not an IT incident; it is a permanent, irreversible loss of funds.",
      },
      {
        title: "Cryptographic Wallet Development",
        body: "We build secure, custom cryptocurrency wallet solutions for platforms, enterprises, and protocols that need wallet functionality beyond what off-the-shelf solutions provide. Our wallet development covers both custodial and non-custodial architectures, designing the cryptographic key management, transaction signing, and security infrastructure appropriate to your use case. For enterprise deployments, we implement multi-signature wallet architectures that require multiple authorised signatories to approve transactions above defined thresholds, providing institutional-grade security for treasury management.",
      },
      {
        title: "Stablecoin Infrastructure",
        body: "We design and build stablecoin systems, both algorithmic stablecoins that maintain their peg through on-chain mechanisms and collateral-backed stablecoins that are over-collateralised by other crypto assets. Our stablecoin implementations include the complete technical infrastructure: minting and redemption mechanisms, collateral management systems, liquidation engines, and governance frameworks that allow the stablecoin system to adapt to changing market conditions.",
      },
      {
        title: "Web3 Architecture Consulting",
        body: "We advise organisations entering the blockchain and crypto space on the strategic and technical decisions that will define the success of their on-chain operations: chain selection and multi-chain strategy, tokenomics design, smart contract architecture, regulatory compliance strategy, security architecture, and go-to-market approach. Our Web3 consulting practice draws on deep experience building production blockchain systems to provide advice grounded in engineering reality rather than theoretical possibility.",
      },
    ],
    realWorld: {
      title: "Cross-Border Payment Protocol",
      description:
        "Built a stablecoin-based settlement system for a pan-African tech firm, reducing cross-border transfer fees from 7% to under 0.5% while maintaining full transaction auditability and compliance documentation.",
    },
    impact:
      "Security is paramount across every engagement. We conduct rigorous audits of all smart contracts, implement multi-signature controls, and design the operational security procedures that protect user capital and maintain system integrity.",
    training:
      "Our Solidity Deep-Dive programme trains developers in high-security smart contract coding practices and EVM optimisation. Our DeFi Security module covers the most common attack vectors and how to engineer against them from day one.",
    specs: [
      "EVM Smart Contract Development (Solidity)",
      "DeFi Protocol Architecture & Auditing",
      "Multi-Signature Wallet Engineering",
      "Tokenomics Design & Token Launch",
      "Stablecoin & Cross-Chain Infrastructure",
      "Web3 Architecture & Chain Selection Advisory",
    ],
    ctaLabel: "Discuss Your Web3 Project",
  },

  automation: {
    overview:
      "The businesses that will define the next decade are not the ones working the hardest; they are the ones that have automated what was slowing everyone else down. Kosinko Technologies builds intelligent automation systems that eliminate manual, repetitive, and time-consuming processes, freeing your teams to focus on the high-value, creative, and strategic work that actually drives growth. Our automation practice spans robotic process automation, artificial intelligence integration, machine learning model deployment, and the design of end-to-end automated workflows that operate continuously without human intervention.",
    subServices: [
      {
        title: "Robotic Process Automation (RPA)",
        body: "We identify, design, and deploy software robots that automate the repetitive, rule-based tasks that consume significant portions of your workforce's time: data entry, document processing, report generation, system-to-system data transfers, invoice processing, compliance checks, and hundreds of other process types currently performed manually. Our RPA implementations begin with thorough process analysis, mapping your workflows, identifying automation candidates, quantifying time and cost savings, and prioritising by ROI. We build robust, maintainable automation scripts that handle exceptions gracefully, log activity comprehensively, and alert human operators when they encounter scenarios requiring human judgment.",
      },
      {
        title: "AI & Machine Learning Integration",
        body: "We integrate artificial intelligence and machine learning capabilities into your business operations, moving beyond simple rule-based automation to systems that learn, adapt, and make intelligent decisions based on data. Our AI integration practice covers predictive analytics models that forecast demand and detect anomalies; natural language processing systems for customer communications and document analysis; computer vision systems for quality control, security monitoring, and operational intelligence; and recommendation engines that personalise experiences across customer-facing and operational applications. We design, train, validate, and deploy machine learning models addressing your specific business problems, from fraud detection to predictive maintenance.",
      },
      {
        title: "Agentic AI Systems",
        body: "We build agentic AI systems, autonomous AI agents that can execute complex, multi-step workflows without human intervention. Unlike simple automation scripts that follow fixed rules, agentic systems can plan, reason, use tools, and adapt their approach based on the outcomes of their actions. We deploy agentic systems for use cases including automated research and analysis, intelligent customer service escalation, automated report generation and distribution, and complex operational workflows involving multiple systems and decision points.",
      },
      {
        title: "Vanaa∞ UAT Planner Pro",
        body: "Our own automation product, available at vanaa8.kosinkotechnologies.com, is an enterprise User Acceptance Testing platform that automates and structures the entire UAT process for development teams. Vanaa∞ enables teams to create structured test plans, assign testers, track test execution in real time, log and manage defects, and execute formal sign-off workflows, eliminating the manual coordination, spreadsheet management, and email chains that make UAT one of the most administratively burdensome phases of software delivery. Built by Kosinko Technologies for the teams that understand that shipping software is easy, but shipping the right software is everything.",
      },
      {
        title: "Integration & Systems Connectivity",
        body: "Modern business automation requires systems to talk to each other reliably. We design and build the integration layer that connects your business applications: CRM, ERP, accounting platforms, communication tools, data warehouses, and operational systems, into a coherent, automated ecosystem where data flows automatically between systems and processes trigger each other without manual intervention. Our integration architecture uses a combination of API integrations, event-driven messaging, and middleware platforms to create reliable, maintainable connectivity that eliminates manual data re-entry and information silos.",
      },
    ],
    realWorld: {
      title: "Automated Compliance Reporting",
      description:
        "Reduced a fintech firm's monthly compliance reporting time from 5 days to 15 minutes using intelligent RPA and automated data piping, saving over 800 hours of manual work per year.",
    },
    impact:
      "We identify manual bottlenecks and implement elegant, maintainable automation solutions that grow alongside your business, from simple RPA scripts to full agentic AI systems capable of managing complex operational workflows autonomously.",
    training:
      "Our Workflow Engineering workshop empowers your operations team to create their own automated scripts and pipelines. Our AI Integration Bootcamp teaches your developers to build, train, and deploy production-ready ML models.",
    specs: [
      "Robotic Process Automation (RPA)",
      "AI & Machine Learning Model Deployment",
      "Agentic AI System Architecture",
      "Vanaa∞ UAT Planner Pro",
      "API Integration & Event-Driven Architecture",
      "Workflow Design & Process Optimisation",
    ],
    learnMoreUrl: "https://vanaa8.kosinkotechnologies.com/",
    ctaLabel: "Explore Automation Solutions",
  },
};

// ── Accordion sub-service ────────────────────────────────────────
const SubServiceItem: React.FC<{ sub: SubService; index: number }> = ({ sub, index }) => {
  const [open, setOpen] = useState(index === 0);
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
        className="w-full text-left px-8 py-6 flex items-start justify-between gap-4"
      >
        <span className={`font-bold text-base leading-relaxed transition-colors ${open ? "text-blue-400" : "text-white"}`}>
          {sub.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-all duration-500 ${open ? "rotate-180 text-blue-400" : "text-zinc-500"}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-8 pb-8 pt-2">
          <div className="h-px bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 mb-6"></div>
          <p className="text-zinc-400 text-sm leading-relaxed">{sub.body}</p>
        </div>
      </div>
    </div>
  );
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onContact }) => {
  const service = services.find((s) => s.id === serviceId);
  const content = richContent[serviceId];

  if (!service || !content) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 pb-24">

      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors uppercase text-sm tracking-[0.4em] font-bold"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Matrix
      </button>

      {/* ── Hero ── */}
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
              <service.Icon className="w-14 h-14 text-blue-400" strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black metallic-text uppercase tracking-tight leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-zinc-200/90 font-light leading-8 max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Quick action */}
          <div className="service-card rounded-2xl p-8 space-y-4 min-w-[240px] lg:self-start">
            <h4 className="text-xs tracking-[0.5em] uppercase text-blue-500 font-black">
              Get Started
            </h4>
            <button
              onClick={onContact}
              className="w-full py-4 rounded-xl bg-blue-500 text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-400 transition-all hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.7)] active:scale-[0.99]"
            >
              {content.ctaLabel ?? "Contact Us"}
            </button>
            {content.learnMoreUrl && (
              <a
                href={content.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-zinc-700 text-zinc-400 font-black text-xs uppercase tracking-[0.3em] hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Learn More
              </a>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="service-card rounded-2xl p-8 border-l-4 border-blue-500/40">
          <h4 className="text-xs tracking-[0.5em] uppercase text-zinc-500 font-black mb-4">Overview</h4>
          <p className="text-zinc-300 text-base leading-relaxed font-light">{content.overview}</p>
        </div>
      </div>

      {/* ── Sub-services accordion ── */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Service Areas
          </h3>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
            What {service.title} covers.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        <div className="space-y-4">
          {content.subServices.map((sub, i) => (
            <SubServiceItem key={sub.title} sub={sub} index={i} />
          ))}
        </div>
      </div>

      {/* ── 2-col: Real world + Impact ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="service-card p-8 rounded-2xl border-l-4 border-blue-500/40 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" /> Real-World Scenario
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
            <strong className="text-zinc-200 block mb-2 not-italic">{content.realWorld.title}:</strong>
            "{content.realWorld.description}"
          </p>
        </div>
        <div className="service-card p-8 rounded-2xl border-l-4 border-emerald-500/40 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" /> The Kosinko Impact
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
            {content.impact}
          </p>
        </div>
      </div>

      {/* ── Technical Core + Training ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Specs */}
        <div className="space-y-6">
          <h4 className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-black border-b border-zinc-900 pb-2">
            Technical Core
          </h4>
          <div className="space-y-3">
            {content.specs.map((spec) => (
              <div
                key={spec}
                className="flex items-center gap-4 group bg-black/20 p-4 rounded-xl border border-transparent hover:border-zinc-800 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500/40 group-hover:text-blue-400 transition-colors shrink-0" />
                <span className="text-zinc-400 text-xs uppercase tracking-wider font-bold">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="service-card p-8 rounded-3xl border border-zinc-800 space-y-6">
          <h4 className="text-sm tracking-[0.5em] uppercase text-blue-500 font-black border-b border-zinc-800 pb-4">
            Training & Mastery
          </h4>
          <div className="flex gap-4">
            <GraduationCap className="w-10 h-10 text-zinc-500 shrink-0" />
            <div className="space-y-2">
              <h5 className="text-white font-bold uppercase text-xs tracking-widest">
                Expert Integration Training
              </h5>
              <p className="text-zinc-500 text-xs leading-relaxed">{content.training}</p>
            </div>
          </div>
          <button
            onClick={onContact}
            className="w-full py-4 border border-blue-400 rounded-xl bg-blue-500/20 text-center text-blue-100 text-xs font-bold tracking-[0.25em] uppercase hover:bg-blue-500 hover:text-black hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.9)] transition-all"
          >
            Enquire About Training
          </button>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/5 text-center">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="space-y-6 relative z-10">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Ready to engage?
          </h3>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
            Start your {service.title} journey.
          </h2>
          <p className="text-zinc-500 text-base font-light max-w-md mx-auto leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-500 text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-400 transition-all hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.7)]"
            >
              <Shield className="w-4 h-4" />
              {content.ctaLabel ?? "Get In Touch"}
            </button>
            {content.learnMoreUrl && (
              <a
                href={content.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-zinc-700 text-zinc-300 font-black text-sm uppercase tracking-[0.3em] hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
