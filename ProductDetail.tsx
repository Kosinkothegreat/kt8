import React from "react";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { productsData } from "./Products";

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const product = productsData.find((p) => p.id === productId);

  if (!product) return null;

  // Related products, show 3 others
  const related = productsData.filter((p) => p.id !== productId).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-20 pb-24">

      {/* ── Back ── */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors uppercase text-sm tracking-[0.4em] font-bold"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Products
      </button>

      {/* ── Hero ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left, info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              {product.tag}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black metallic-text uppercase tracking-tight leading-[0.9]">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-blue-500/30 via-blue-500/60 to-transparent"></div>

          <p className="text-zinc-400 text-base leading-relaxed font-light border border-zinc-800/50 bg-zinc-900/20 rounded-2xl p-6">
            {product.description}
          </p>

          {/* Highlights strip */}
          <div className="grid grid-cols-2 gap-4">
            {product.highlights.map((h) => (
              <div
                key={h.label}
                className="service-card rounded-xl p-4 space-y-1"
              >
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
                  {h.label}
                </div>
                <div className="text-white font-black text-sm tracking-wide">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 w-full justify-center px-8 py-5 rounded-2xl bg-blue-500 text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-400 transition-all hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.8)] active:scale-[0.99]"
          >
            <ExternalLink className="w-5 h-5" />
            Visit {product.name}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-center text-zinc-700 text-[10px] uppercase tracking-[0.4em] font-black">
            Opens in a new tab · {product.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
          </p>
        </div>

        {/* Right, image */}
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ maxHeight: "420px", objectPosition: "top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            {/* Corner badge */}
            <div className="absolute bottom-4 right-4 px-3 py-2 rounded-xl bg-black/80 border border-zinc-700 backdrop-blur-sm">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300">
                {product.tag}
              </span>
            </div>
          </div>

          {/* Secondary CTA for mobile visibility */}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-blue-400/40 bg-blue-500/10 text-blue-300 text-xs font-black uppercase tracking-[0.3em] hover:bg-blue-500/20 transition-all lg:hidden"
          >
            <ExternalLink className="w-4 h-4" />
            Launch Platform
          </a>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Platform Capabilities
          </h3>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
            Everything {product.name.split(" ")[0]} delivers.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {product.features.map((feature, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 bg-zinc-900/20 border border-zinc-800/50 hover:border-blue-500/30 p-5 rounded-2xl transition-all duration-300 hover:bg-zinc-900/40"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-500/50 group-hover:text-blue-400 shrink-0 mt-0.5 transition-colors" />
              <span className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Final CTA banner ── */}
      <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/5 text-center">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="space-y-6 relative z-10">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Ready to get started?
          </h3>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
            Experience {product.name.split(" ")[0]} first-hand.
          </h2>
          <p className="text-zinc-500 text-base font-light max-w-md mx-auto leading-relaxed">
            {product.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-500 text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-400 transition-all hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.7)]"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Platform
            </a>
            <a
              href="mailto:info@kosinkotechnologies.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-zinc-700 text-zinc-300 font-black text-sm uppercase tracking-[0.3em] hover:border-blue-400 hover:text-blue-300 transition-all"
            >
              Request Enterprise Demo
            </a>
          </div>
        </div>
      </div>

      {/* ── More Products ── */}
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            More Products
          </h3>
          <button
            onClick={onBack}
            className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] hover:text-blue-300 transition-colors"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((p) => (
            <a
              key={p.id}
              href={`/products/${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({ view: "product-detail", id: p.id }, "", `/products/${p.id}`);
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-4 space-y-1">
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
                  {p.tag}
                </div>
                <div className="text-white text-sm font-black uppercase tracking-wide">
                  {p.name}
                </div>
                <div className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
