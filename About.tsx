import React from "react";
import { MapPin, Mail, Phone, Globe, Shield, Zap, Users, Code2 } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Security-First Mindset",
    desc: "Every product, engagement, and line of code starts with one question: how could this be attacked? Security isn't a feature; it is the foundation everything else is built on.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    desc: "We tell clients what they need to hear, not what they want to hear. Honest assessments, clear reporting, and zero hidden findings.",
  },
  {
    num: "03",
    title: "African Excellence",
    desc: "Proudly African and globally competitive. We prove every day that world-class cybersecurity expertise is engineered right here in Nigeria.",
  },
  {
    num: "04",
    title: "Continuous Innovation",
    desc: "Threats evolve daily. Our research, products, and methodologies evolve to match, from AI-driven threat intelligence to Web3 security frameworks.",
  },
  {
    num: "05",
    title: "Client Partnership",
    desc: "We don't deliver reports and disappear. We partner long-term: implementing, training, and maintaining security posture well beyond initial engagement.",
  },
  {
    num: "06",
    title: "Ethical Operations",
    desc: "All penetration testing, research, and security tooling is conducted under strict ethical guidelines, written authority, and responsible disclosure principles.",
  },
];

const stats = [
  { value: "2025", label: "Founded" },
  { value: "7+", label: "Live Products" },
  { value: "Lagos, Nigeria", label: "Headquarters" },
  { value: "Global", label: "Operations" },
];

const disciplines = [
  { icon: Shield, label: "Enterprise Cybersecurity", color: "text-blue-400" },
  { icon: Code2, label: "Full-Stack Development", color: "text-cyan-400" },
  { icon: Zap, label: "AI & Automation", color: "text-purple-400" },
  { icon: Users, label: "DevSecOps Consulting", color: "text-orange-400" },
];

const techTags = [
  "Microsoft Azure","Palo Alto Networks","CrowdStrike",
  "ISO 27001","NDPR","GDPR","SOC 2","Docker","Kubernetes","React",
  "TypeScript","Python","Solidity","Polygon","OpenSea","Azure Sentinel",
  "SIEM","SOAR","Burp Suite","Metasploit","Nessus","Trivy","Nikto",
];

const About: React.FC = () => {
  return (
    <div className="w-full space-y-40 pb-24">

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-12 space-y-10 reveal">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-500 text-[9px] tracking-[0.4em] uppercase font-black">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Est. 2025 · Headquarter Lagos, Nigeria
        </div>

        <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter metallic-text leading-[0.95] md:leading-[0.9]">
          SECURITY<br />
          <span className="opacity-70">FIRST.</span>
        </h2>

        <p className="text-xl md:text-3xl text-zinc-400 font-extralight max-w-3xl leading-relaxed">
          Kosinko Technologies Global Limited is an{" "}
          <span className="text-zinc-100 font-medium">enterprise cybersecurity</span>{" "}
          and software engineering company, architecting resilient digital futures
          for organisations worldwide.
        </p>

        <div className="flex flex-wrap justify-start gap-6 pt-4">
          <div className="h-px w-12 bg-zinc-800 self-center"></div>
          <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase font-black">
            Built on security, doubled for prosperity
          </p>
          <div className="h-px w-12 bg-zinc-800 self-center"></div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-y border-zinc-900/60 bg-zinc-900/20 py-16 reveal">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="text-3xl md:text-5xl font-heading font-black metallic-text tracking-tight">
                {s.value}
              </div>
              <div className="text-[9px] tracking-[0.5em] uppercase text-zinc-600 font-black">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start reveal">
        <div className="space-y-8">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Our Mission
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            Built to protect what matters most.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <p className="text-zinc-400 leading-relaxed text-base font-light">
            We believe security should be an enabler, not a bottleneck. Founded in 2025,
            Kosinko Technologies was born from the conviction that African tech organisations
            deserve world-class cybersecurity, and the world deserves African innovation.
          </p>
          <p className="text-zinc-400 leading-relaxed text-base font-light">
            Our team of certified security engineers, developers, and architects operates
            across every layer of the technology stack, from network perimeter to cloud-native
            applications, smart contract auditing to enterprise GRC frameworks.
          </p>
        </div>

        <div className="service-card rounded-[2.5rem] p-10 space-y-8 ring-1 ring-white/5 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <h4 className="text-xs tracking-[0.5em] uppercase text-blue-500 font-black border-b border-zinc-800 pb-4">
            Core Disciplines
          </h4>
          <div className="space-y-6">
            {disciplines.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 group-hover:border-zinc-700 transition-all">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-zinc-300 text-sm font-bold uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-zinc-500 items-start pt-4 border-t border-zinc-800">
            <MapPin className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
            <span className="text-xs uppercase tracking-widest font-bold leading-relaxed">
              Headquarter Lagos, Nigeria<br />
              <span className="text-zinc-600">Remote (Global)</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="max-w-6xl mx-auto px-6 space-y-16 reveal">
        <div className="text-center space-y-6">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Our Values
          </h3>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
            The principles that drive us.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.num}
              className="service-card rounded-3xl p-8 flex flex-col gap-6 group hover:-translate-y-1 transition-all duration-500"
            >
              <span className="text-5xl font-heading font-black text-zinc-800 group-hover:text-zinc-700 transition-colors leading-none">
                {v.num}
              </span>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">
                  {v.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
              <div className="mt-auto w-8 h-1 bg-zinc-800 group-hover:w-full group-hover:bg-blue-600/50 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack Tags ── */}
      <section className="max-w-6xl mx-auto px-6 space-y-10 reveal">
        <div className="text-center space-y-6">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Technology Stack
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            The platforms we master.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-500 text-[11px] font-black uppercase tracking-widest hover:border-zinc-700 hover:text-zinc-300 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="max-w-6xl mx-auto px-6 reveal">
        <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/10">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
                Get In Touch
              </h3>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
                Let's build something resilient together.
              </h2>
            </div>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "+234 916 728 6944", href: "https://wa.me/2349167286944" },
                { icon: Mail, label: "info@kosinkotechnologies.com", href: "mailto:info@kosinkotechnologies.com" },
                { icon: Globe, label: "kosinkotechnologies.com", href: "https://kosinkotechnologies.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 group-hover:border-blue-500/40 transition-all">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-zinc-400 text-xs uppercase tracking-widest font-bold group-hover:text-blue-300 transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
