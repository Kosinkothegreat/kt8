import React from "react";

const stats = [
  { value: "28+",  label: "Clients Served" },
  { value: "17+",  label: "Projects Delivered" },
  { value: "7+",   label: "Products Launched" },
  { value: "100%", label: "Client Satisfaction" },
];

const clients = [
  {
    name: "Blokes & Divas",
    logoUrl: "https://images.squarespace-cdn.com/content/v1/58c6eef1579fb39aff498a43/1572715400923-QWENSN9O5YBBWTL8JXSS/Blokes+%26+Divas-01.png?format=1500w",
    fallback: "Blokes & Divas",
    dark: false,
  },
  {
    name: "Sigsoe Events",
    logoUrl: "https://alternative-pink-dzjlodgxom.edgeone.app/DarkModeLogo-removebg-preview-CeqcVkEn.png",
    fallback: "Sigsoe Events",
    dark: true,
  },
  {
    name: "EDURescue Consultancy",
    logoUrl: "https://i.ibb.co/v4Qpzbhr/Edu-Rescue-Light-Blue-Final.png",
    fallback: "EDURescue Consultancy",
    dark: false,
  },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="w-full border-y border-zinc-900/50 bg-black/20 py-20 reveal">
      <div className="max-w-6xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">Trusted By</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
          <p className="text-zinc-500 text-sm font-light max-w-sm mx-auto">
            Organisations that trust Kosinko to secure and build their digital presence.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-zinc-900/60 rounded-2xl p-8 bg-zinc-900/20">
          {stats.map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <div className="text-2xl md:text-4xl font-heading font-black metallic-text tracking-tight">{s.value}</div>
              <div className="text-[9px] tracking-[0.45em] uppercase text-zinc-600 font-black">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Top clients heading */}
        <div className="text-center">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">Top Clients</span>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              title={client.name}
              className="group flex items-center justify-center px-10 py-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:border-blue-500/30 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-1 min-w-[200px] min-h-[90px] cursor-default"
            >
              <img
                src={client.logoUrl}
                alt={client.name}
                className={`max-h-12 max-w-[160px] object-contain opacity-50 group-hover:opacity-95 transition-all duration-500 filter ${
                  client.dark ? "invert brightness-200" : "grayscale"
                } group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100`}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const sibling = el.nextElementSibling as HTMLElement | null;
                  if (sibling) sibling.style.display = "block";
                }}
              />
              <span className="hidden text-zinc-400 text-sm font-black uppercase tracking-widest group-hover:text-blue-300 transition-colors">
                {client.fallback}
              </span>
            </div>
          ))}

          {/* Placeholder */}
          <div className="flex items-center justify-center px-10 py-6 rounded-2xl border border-zinc-800/30 border-dashed bg-zinc-900/10 min-w-[200px] min-h-[90px] cursor-default">
            <span className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.4em] text-center leading-relaxed">
              Your company<br />could be here
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
