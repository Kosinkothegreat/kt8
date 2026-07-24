import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 px-6 relative">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-500 text-[9px] tracking-[0.4em] uppercase font-black">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Operational Protocol v3.1
      </div>
      
      <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter metallic-text leading-[0.95] md:leading-[0.9]">
        NEXT-GEN<br />
        <span className="opacity-70">INNOVATION.</span>
      </h2>
      
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
        <p className="text-xl md:text-3xl text-zinc-400 font-extralight max-w-2xl mx-auto leading-relaxed mt-6 relative z-10">
          Nigeria's leading <span className="text-zinc-100 font-medium">enterprise cybersecurity</span>, <span className="text-zinc-100 font-medium">DevSecOps</span>, <span className="text-zinc-100 font-medium">AI automation</span>, <span className="text-zinc-100 font-medium">Web3</span> and <span className="text-zinc-100 font-medium">software engineering</span> company — delivering SOC operations, penetration testing, GRC, cloud security and full-stack development to enterprises across Africa and globally.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <div className="h-px w-12 bg-zinc-800 self-center"></div>
        <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase font-black">Building Resilience since 2025</p>
        <div className="h-px w-12 bg-zinc-800 self-center"></div>
      </div>
    </div>
  );
};
