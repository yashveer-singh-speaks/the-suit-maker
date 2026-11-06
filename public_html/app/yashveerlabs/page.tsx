import React from "react";
import Link from "next/link";
import { Code, Terminal, CheckCircle2, Shield, Activity, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YashveerLabs | Full-Stack Digital Production Studio",
  description:
    "YashveerLabs delivers high-end, production-ready digital flagships, custom interfaces, and zero-error web engines for luxury houses and enterprise leaders.",
};

export default function YashveerLabsStudioPage() {
  return (
    <div className="bg-matte text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono font-semibold">
          Digital Production Floor
        </span>
        <h1 className="font-mono text-4xl sm:text-6xl text-ivory mt-4 mb-4 font-bold tracking-tight">
          YASHVEERLABS
        </h1>
        <p className="text-sm text-gold/90 font-mono tracking-widest uppercase mb-6">
          High-Performance Digital Studio
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          Delivering production-ready, zero-glitch web engines that combine the craftsmanship of high-end tailoring with modern edge infrastructure.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Code className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Front-End Artistry</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Crafting bespoke interfaces with custom glassmorphism, responsive editorial grids, and fluid micro-interactions tailored for elite brands.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Activity className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Zero-Error Coding</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Strict linting, automated TypeScript verification, semantic accessibility compliance, and rock-solid cross-browser testing.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Shield className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Vercel & Edge Deployment</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Global CDN edge caching, sub-second TTFB, responsive image optimization, and instant DNS routing for international luxury clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/yashveer-labs" className="hover:underline">Innovation Hub</Link>
          <span>·</span>
          <Link href="/rajpootindustries" className="hover:underline">RajpootIndustries</Link>
          <span>·</span>
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">The Founder</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© YashveerLabs. Production Studio Registry.</p>
      </section>
    </div>
  );
}
