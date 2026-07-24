import React, { useState, useEffect, useCallback } from "react";
import { Hero } from "./src/components/Hero";
import { ServiceGrid } from "./src/components/ServiceGrid";
import { ServiceDetail } from "./src/components/ServiceDetail";
import { Methodology } from "./src/components/Methodology";
import Header from "./src/components/Header";
import Disciplines from "./src/components/Disciplines";
import Products from "./src/components/Products";
import TechStackLabel from "./src/components/TechStackLabel";
import Contact from "./src/components/Contact";
import Footer from "./src/components/footer";
import FAQ from "./src/components/FAQ";
import Blog from "./src/components/Blog";
import { BlogPage } from "./src/components/BlogPage";
import About from "./src/components/About";
import TrustedBy from "./src/components/TrustedBy";
import TermsPrivacy from "./src/components/TermsPrivacy";
import ProductDetail from "./src/components/ProductDetail";
import { ChevronUp } from "lucide-react";

export type View = "home" | "service-detail" | "about" | "terms" | "product-detail" | "blog" | "blog-category" | "article";

const pathToView = (path: string): { view: View; id: string | null; cat: string | null } => {
  if (path === "/about") return { view: "about", id: null, cat: null };
  if (path === "/blog") return { view: "blog", id: null, cat: null };
  if (path === "/legal" || path === "/privacy" || path === "/terms") return { view: "terms", id: null, cat: null };
  const blogCat = path.match(/^\/blog\/category\/(.+)$/);
  if (blogCat) return { view: "blog-category", id: null, cat: blogCat[1] };
  const blogArt = path.match(/^\/blog\/(.+)$/);
  if (blogArt) return { view: "article", id: blogArt[1], cat: null };
  const svc = path.match(/^\/services\/(.+)$/);
  if (svc) return { view: "service-detail", id: svc[1], cat: null };
  const prod = path.match(/^\/products\/(.+)$/);
  if (prod) return { view: "product-detail", id: prod[1], cat: null };
  return { view: "home", id: null, cat: null };
};

const viewToPath = (view: View, id: string | null, cat: string | null): string => {
  if (view === "about") return "/about";
  if (view === "blog") return "/blog";
  if (view === "terms") return "/legal";
  if (view === "blog-category" && cat) return `/blog/category/${cat}`;
  if (view === "article" && id) return `/blog/${id}`;
  if (view === "service-detail" && id) return `/services/${id}`;
  if (view === "product-detail" && id) return `/products/${id}`;
  return "/";
};

// Light mode CSS variables injected into :root
const lightModeStyles = `
  body.light-mode {
    background-color: #f8fafc !important;
    color: #0f172a !important;
  }
  body.light-mode .service-card {
    background: rgba(241,245,249,0.8) !important;
    border-color: rgba(148,163,184,0.3) !important;
  }
  body.light-mode .bg-grid {
    background-image:
      linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px) !important;
  }
  body.light-mode .cursor-glow {
    background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.06), transparent 80%) !important;
  }
  body.light-mode .metallic-text {
    background: linear-gradient(180deg, #0f172a 0%, #475569 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
  body.light-mode .text-zinc-400 { color: #475569 !important; }
  body.light-mode .text-zinc-500 { color: #64748b !important; }
  body.light-mode .text-zinc-600 { color: #94a3b8 !important; }
  body.light-mode .text-zinc-700 { color: #cbd5e1 !important; }
  body.light-mode .text-white   { color: #0f172a !important; }
  body.light-mode .border-zinc-800, body.light-mode .border-zinc-900 { border-color: #e2e8f0 !important; }
  body.light-mode .bg-zinc-900\\/30, body.light-mode .bg-zinc-900\\/20, body.light-mode .bg-black\\/20 { background-color: rgba(241,245,249,0.6) !important; }
  body.light-mode footer { background-color: #f1f5f9 !important; }
`;

const App: React.FC = () => {
  const init = pathToView(window.location.pathname);
  const [currentView, setCurrentView] = useState<View>(init.view);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(init.id);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(init.view === "product-detail" ? init.id : null);
  const [blogCategory, setBlogCategory] = useState<string | null>(init.cat);
  const [articleId, setArticleId] = useState<string | null>(init.view === "article" ? init.id : null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Apply light mode class
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  const pushRoute = useCallback((view: View, id: string | null = null, cat: string | null = null) => {
    const path = viewToPath(view, id, cat);
    window.history.pushState({ view, id, cat }, "", path);
    setCurrentView(view);
    if (view === "service-detail") setSelectedServiceId(id);
    if (view === "product-detail") setSelectedProductId(id);
    if (view === "blog-category") setBlogCategory(cat);
    if (view === "article") setArticleId(id);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPop = () => {
      const { view, id, cat } = pathToView(window.location.pathname);
      setCurrentView(view);
      setSelectedServiceId(view === "service-detail" ? id : null);
      setSelectedProductId(view === "product-detail" ? id : null);
      setBlogCategory(cat);
      setArticleId(view === "article" ? id : null);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentView]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => pushRoute("home");
  const navigateTo = (view: View) => pushRoute(view);
  const handleServiceSelect = (id: string) => pushRoute("service-detail", id);
  const handleProductSelect = (id: string) => pushRoute("product-detail", id);
  const handleBlogCategory = (cat: string) => pushRoute("blog-category", null, cat);
  const handleArticle = (id: string) => pushRoute("article", id);

  const scrollToSection = (id: string) => {
    if (currentView !== "home") {
      pushRoute("home");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderMain = () => {
    switch (currentView) {
      case "home":
        return (
          <div className="space-y-40">
            <section id="hero" className="text-center scroll-mt-32 reveal"><Hero /></section>
            <section id="services" className="w-full space-y-20 scroll-mt-32 reveal">
              <Disciplines />
              <ServiceGrid onSelectService={handleServiceSelect} />
            </section>
            <section id="products" className="w-full scroll-mt-32 reveal">
              <Products onSelectProduct={handleProductSelect} />
            </section>
            <TrustedBy />
            <TechStackLabel />
            <section id="methodology" className="w-full scroll-mt-32 reveal"><Methodology /></section>
            <section id="blog" className="w-full scroll-mt-32 reveal">
              <Blog navigateTo={navigateTo} onBlogCategory={handleBlogCategory} onArticle={handleArticle} />
            </section>
            <section id="faq" className="w-full scroll-mt-32 reveal"><FAQ /></section>
            <Contact />
          </div>
        );

      case "service-detail":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <ServiceDetail serviceId={selectedServiceId!} onBack={goHome} onContact={() => scrollToSection("contact")} />
          </div>
        );

      case "product-detail":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <ProductDetail
              productId={selectedProductId!}
              onBack={() => {
                window.history.pushState({}, "", "/");
                setCurrentView("home");
                setTimeout(() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }), 150);
              }}
            />
          </div>
        );

      case "about":
        return <div className="animate-in fade-in slide-in-from-bottom-12 duration-700"><About /></div>;

      case "blog":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <BlogPage onBack={goHome} />
          </div>
        );

      case "blog-category":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <BlogPage initialCategory={blogCategory || undefined} onBack={() => pushRoute("blog")} />
          </div>
        );

      case "article":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <BlogPage initialArticleId={articleId || undefined} onBack={() => pushRoute("blog")} />
          </div>
        );

      case "terms":
        return <div className="animate-in fade-in slide-in-from-bottom-12 duration-700"><TermsPrivacy /></div>;

      default:
        return null;
    }
  };

  return (
    <>
      <style>{lightModeStyles}</style>
      <div className="flex flex-col items-center justify-start min-h-screen py-12 space-y-24 max-w-7xl mx-auto">
        <Header
          scrollToSection={scrollToSection}
          goHome={goHome}
          currentView={currentView}
          navigateTo={navigateTo}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div id="header-sentinel" className="w-full h-px" />
        <main className="w-full">{renderMain()}</main>
        <Footer goHome={goHome} scrollToSection={scrollToSection} navigateTo={navigateTo} />
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-blue-400/50 bg-zinc-900/90 text-blue-300 hover:bg-blue-500 hover:text-black transition-all flex items-center justify-center"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default App;
