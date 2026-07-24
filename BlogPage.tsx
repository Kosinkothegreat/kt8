import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight, ArrowLeft, Clock, Calendar, Users,
  ChevronRight, BookOpen,
} from "lucide-react";
import { articles, categoryConfig, type Article } from "./blogData";

// ── Tiny scroll + fade hook – avoids the blank-on-back glitch ──────────────
function useMountVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Give React one frame to paint before fading in
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return visible;
}

// ── Article Card ────────────────────────────────────────────────────────────
const ArticleCard: React.FC<{
  article: Article;
  onClick: () => void;
  large?: boolean;
}> = ({ article, onClick, large }) => {
  const cfg = categoryConfig[article.category] ?? categoryConfig["cybersecurity"];
  const Icon = cfg.Icon;
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/20
        hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 flex flex-col
        ${large ? "lg:flex-row" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${
          large ? "lg:w-1/2 min-h-[260px]" : "aspect-video"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div
          className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full
            border border-zinc-700/60 bg-black/60 backdrop-blur-sm ${cfg.color}`}
        >
          <Icon className="w-3 h-3" />
          <span className="text-[9px] font-black uppercase tracking-[0.35em]">{cfg.label}</span>
        </div>
      </div>
      <div
        className={`flex flex-col justify-between p-6 space-y-4 ${large ? "lg:w-1/2" : ""}`}
      >
        <div className="space-y-3">
          <h3
            className={`font-heading font-black text-white leading-tight tracking-tight
              group-hover:text-blue-100 transition-colors
              ${large ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}
          >
            {article.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <span
            className={`text-[10px] font-black uppercase tracking-[0.3em] ${cfg.color}
              opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}
          >
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

// ── Full Article Reader ─────────────────────────────────────────────────────
const ArticleReader: React.FC<{
  article: Article;
  onBack: () => void;
  onRelated: (id: string) => void;
}> = ({ article, onBack, onRelated }) => {
  const visible = useMountVisible();
  const cfg = categoryConfig[article.category] ?? categoryConfig["cybersecurity"];
  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div
      className={`max-w-4xl mx-auto px-6 pb-24 space-y-12 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors
          uppercase text-sm tracking-[0.4em] font-bold mt-8"
      >
        <ChevronRight className="w-4 h-4 rotate-180" /> Back to Blog
      </button>

      {/* Hero image */}
      <div className="relative rounded-2xl overflow-hidden aspect-video border border-zinc-800">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div
          className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full
            border border-zinc-700/60 bg-black/70 backdrop-blur-sm ${cfg.color}`}
        >
          <cfg.Icon className="w-3 h-3" />
          <span className="text-[9px] font-black uppercase tracking-[0.35em]">{cfg.label}</span>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-zinc-400 font-light leading-relaxed border-l-4 border-blue-500/40 pl-6">
          {article.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-zinc-600 text-xs font-black uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            {article.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            {article.author}
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-blue-500/30 via-blue-500/60 to-transparent" />
      </div>

      {/* Body */}
      <div className="space-y-10">
        {article.body.map((section, i) => (
          <div key={i} className="space-y-4">
            {section.heading && (
              <h2 className="text-lg md:text-2xl font-heading font-black text-white tracking-tight">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-zinc-400 leading-relaxed text-base font-light">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-3 mt-4">
                {section.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-zinc-400 text-sm leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/30
              text-zinc-500 text-[10px] font-black uppercase tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="service-card rounded-[2rem] p-10 text-center space-y-5 ring-1 ring-white/5 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
        <h3 className="text-white font-heading font-black text-xl relative z-10">Want to learn more?</h3>
        <p className="text-zinc-500 text-sm font-light max-w-md mx-auto relative z-10">
          Kosinko Technologies delivers the services and products discussed in this article.
          Reach out for a consultation.
        </p>
        <a
          href="mailto:info@kosinkotechnologies.com"
          className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500
            text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-400 transition-all"
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Related articles — properly wired */}
      {related.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
            More in {cfg.label}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => (
              <div
                key={r.id}
                onClick={() => onRelated(r.id)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-800
                  hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-white text-sm font-black leading-snug line-clamp-2
                    group-hover:text-blue-200 transition-colors">
                    {r.title}
                  </p>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${cfg.color} flex items-center gap-1`}>
                    {r.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Full Blog Page ──────────────────────────────────────────────────────────
interface BlogPageProps {
  initialCategory?: string;
  initialArticleId?: string;
  onBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({
  initialCategory,
  initialArticleId,
  onBack,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? "all");
  const [openArticleId, setOpenArticleId] = useState<string | null>(
    initialArticleId ?? null
  );
  const visible = useMountVisible();

  // When a related article is clicked inside the reader
  const handleRelated = useCallback((id: string) => {
    setOpenArticleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Navigate into an article
  const openArticle = useCallback((id: string) => {
    setOpenArticleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Go back from article to listing
  const closeArticle = useCallback(() => {
    setOpenArticleId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const article = openArticleId
    ? articles.find((a) => a.id === openArticleId) ?? null
    : null;

  // ── Article reader ─────────────────────────────────────────────────
  if (article) {
    return (
      <ArticleReader
        key={article.id}           // key forces fresh mount & fade-in on every article
        article={article}
        onBack={closeArticle}
        onRelated={handleRelated}
      />
    );
  }

  // ── Blog listing ───────────────────────────────────────────────────
  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured  = filtered.find((a) => a.featured);
  const spotlight = filtered.find((a) => a.spotlight);
  const rest      = filtered.filter((a) => !a.featured && !a.spotlight);

  const activeCfg =
    activeCategory !== "all" ? categoryConfig[activeCategory] : null;

  return (
    <div
      className={`max-w-6xl mx-auto px-6 pb-24 pt-8 space-y-12 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Back to home */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors
          uppercase text-sm tracking-[0.4em] font-bold"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>

      {/* Page header */}
      <div className="space-y-6">
        {activeCfg ? (
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${activeCfg.bg} border ${activeCfg.border}`}>
              <activeCfg.Icon className={`w-8 h-8 ${activeCfg.color}`} />
            </div>
            <div>
              <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
                Domain
              </div>
              <h1
                className={`text-3xl md:text-5xl font-heading font-black tracking-tight ${activeCfg.color}`}
              >
                {activeCfg.label}
              </h1>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
              Intelligence Hub
            </h3>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
              The Kosinko Blog
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
            <p className="text-zinc-500 text-base font-light max-w-xl mx-auto">
              {articles.length} in-depth articles across{" "}
              {Object.keys(categoryConfig).length} technology domains.
            </p>
          </div>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-black
            uppercase tracking-widest transition-all ${
              activeCategory === "all"
                ? "border-blue-500/60 bg-blue-500/15 text-white"
                : "border-zinc-800 bg-zinc-900/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
            }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> All ({articles.length})
        </button>
        {Object.entries(categoryConfig).map(([key, cfg]) => {
          const Icon = cfg.Icon;
          const count = articles.filter((a) => a.category === key).length;
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-black
                uppercase tracking-widest transition-all ${
                  isActive
                    ? "border-blue-500/60 bg-blue-500/15 text-white"
                    : "border-zinc-800 bg-zinc-900/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : cfg.color}`} />
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Featured */}
      {featured && (
        <div
          onClick={() => openArticle(featured.id)}
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-zinc-800
            hover:border-blue-500/40 transition-all duration-500"
        >
          <div className="relative h-[340px] md:h-[440px] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40
                  text-blue-300 text-[9px] font-black uppercase tracking-[0.4em]">
                  Featured
                </span>
                <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">
                  {featured.date} · {featured.readTime}
                </span>
              </div>
              <h2 className="text-xl md:text-3xl font-heading font-black text-white tracking-tight leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-zinc-400 text-sm font-light line-clamp-2 max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]
                flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Spotlight */}
      {spotlight && (
        <div
          onClick={() => openArticle(spotlight.id)}
          className="group cursor-pointer relative overflow-hidden rounded-3xl border border-orange-500/20
            bg-gradient-to-br from-zinc-900/60 to-black hover:border-orange-500/40 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 space-y-5 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-orange-400 text-[9px] font-black uppercase tracking-[0.5em]">
                  Africa Spotlight
                </span>
              </div>
              <h2 className="text-xl md:text-3xl font-heading font-black text-white tracking-tight leading-tight">
                {spotlight.title}
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-3">
                {spotlight.excerpt}
              </p>
              <span className="text-orange-400 text-xs font-black uppercase tracking-[0.3em]
                flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
            <div className="relative overflow-hidden min-h-[240px] lg:min-h-0">
              <img
                src={spotlight.image}
                alt={spotlight.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Rest of articles */}
      {rest.length > 0 && (
        <div className="space-y-5">
          {rest[0] && (
            <ArticleCard
              article={rest[0]}
              onClick={() => openArticle(rest[0].id)}
              large
            />
          )}
          {rest.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.slice(1).map((a) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  onClick={() => openArticle(a.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-24 space-y-4">
          <div className="text-zinc-700 text-5xl">◎</div>
          <p className="text-zinc-600 text-sm font-black uppercase tracking-widest">
            No articles in this category yet
          </p>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/5 text-center">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="space-y-5 relative z-10 max-w-xl mx-auto">
          <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
            Stay Informed
          </h3>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight">
            Intelligence delivered direct.
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Get Kosinko latest security research, product updates, and technology intelligence.
            No marketing noise. Pure signal.
          </p>
          <a
            href="mailto:info@kosinkotechnologies.com?subject=Subscribe to Kosinko Intelligence"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-500 text-black
              font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-400 transition-all"
          >
            Subscribe via Email <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
export { BlogPage };
