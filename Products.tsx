import React from "react";
import CybershieldImg from "../images/CybershieldMatrix_Project.jpeg";
import NFTsImg        from "../images/NFTs_Projects.jpeg";
import OctavaultImg   from "../images/octavault.jpeg";
import OctavianImg    from "../images/octavian.jpeg";
import OctaviandmImg  from "../images/octaviandm.jpeg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: "cybershield",
    name: "CyberShield Enterprise Matrix",
    tagline: "The world's most comprehensive cybersecurity tool intelligence system.",
    image: CybershieldImg,
    tag: "Threat Intelligence",
  },
  {
    id: "octavault",
    name: "OctaVault",
    tagline: "Password Checker Master: military-grade credential security for enterprise.",
    image: OctavaultImg,
    tag: "Password Security",
  },
  {
    id: "octavian",
    name: "Octavian Product Management Matrix",
    tagline: "Interactive enterprise solution matrix for product management consulting.",
    image: OctavianImg,
    tag: "Product Management",
  },
  {
    id: "octaviandm",
    name: "Octavian Data Management Matrix",
    tagline: "Enterprise data management solution tracker with comparative intelligence.",
    image: OctaviandmImg,
    tag: "Data Management",
  },
  {
    id: "vanaa8",
    name: "Vanaa\u221e UAT Planner Pro",
    tagline: "Enterprise-grade User Acceptance Testing: structured, automated, ship-ready.",
    image: "https://i.ibb.co/LX3rDKG8/image.png",
    tag: "Test Automation",
  },
  {
    id: "kmgrc",
    name: "Kosinko & My GRC",
    tagline: "Security-first Governance, Risk & Compliance: automated, AI-driven, enterprise-ready.",
    image: "https://i.ibb.co/HTgTn6T0/Screenshot-From-2026-03-23-02-20-37.png",
    tag: "GRC Platform",
  },
  {
    id: "aegis",
    name: "Aegis Cyber Security Academy",
    tagline: "The elite training ground for the next generation of digital defenders.",
    image: "https://i.ibb.co/PsRptMFH/Screenshot-From-2026-03-23-03-52-50.png",
    tag: "Cybersecurity Training",
  },
  {
    id: "nfts",
    name: "Kosinko Punks NFT",
    tagline: "Where imagination meets art and creativity becomes magical.",
    image: NFTsImg,
    tag: "NFT Collection",
  },
];

interface ProductsProps {
  onSelectProduct: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <div className="w-full space-y-12">
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">Our Products</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        <p className="text-zinc-500 text-base font-light max-w-xl mx-auto">
          Eight production-grade platforms, each solving a distinct enterprise problem,
          each built with the security rigour Kosinko is known for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product.id)}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all duration-500 hover:border-blue-500/50 cursor-pointer hover:-translate-y-1"
          >
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-zinc-700 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 backdrop-blur-sm">
              {product.tag}
            </div>
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={typeof product.image === "string" ? product.image : product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/8 transition-all duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-white text-base font-black tracking-wide uppercase leading-tight">
                {product.name}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-2">
                {product.tagline}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  View Details &rarr;
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
