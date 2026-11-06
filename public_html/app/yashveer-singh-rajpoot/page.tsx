import React from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Code2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yashveer Singh Rajpoot | The Sovereign Profile",
  description:
    "The official sovereign profile of Yashveer Singh Rajpoot, founder of yashveer labs and rajpoot industries. Digital systems architect and technology strategist.",
};

export default function YashveerSinghRajpootPage() {
  return (
    <div className="bg-matte text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-sans font-semibold">
          Architectural Profile
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory mt-4 mb-6 leading-tight">
          Yashveer Singh Rajpoot
        </h1>
        <p className="text-sm sm:text-base text-gold/90 font-mono tracking-widest uppercase mb-8">
          Founder: Yashveer Labs · Founder: Rajpoot Industries
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          True luxury is not merely styled; it is structurally engineered from the ground up. Synthesizing advanced software architectures with heavy physical manufacturing precision.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">Philosophy</span>
            <h2 className="font-serif text-2xl text-ivory">Sartorial Technological Synergy</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              A bespoke suit pattern and a clean codebase share the exact same requirement: zero excess, absolute mathematical balance, and functional perfection.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">Software Core</span>
            <h2 className="font-serif text-2xl text-ivory">Yashveer Labs Foundry</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Engineering ultra-high performance digital engines that bypass generic website templates in favor of hand-written, instantaneous edge systems.
            </p>
            <Link href="/yashveer-labs" className="text-xs text-gold hover:underline inline-block pt-2">
              Explore Yashveer Labs →
            </Link>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">Physical Horizon</span>
            <h2 className="font-serif text-2xl text-ivory">Rajpoot Industries</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Stealth hardware engineering, precision CNC titanium milling, and permanent industrial materials designed to endure for decades.
            </p>
            <Link href="/rajpoot-industries" className="text-xs text-gold hover:underline inline-block pt-2">
              Explore Rajpoot Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Link Footer Mesh */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 mt-12 text-xs font-sans text-ivory/60 space-y-4">
        <p>Architectural ecosystem connections:</p>
        <div className="flex flex-wrap justify-center gap-4 text-gold">
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
          <span>·</span>
          <Link href="/yashveer" className="hover:underline">Yashveer</Link>
          <span>·</span>
          <Link href="/yashveer-singh" className="hover:underline">Yashveer Singh</Link>
          <span>·</span>
          <Link href="/yashveerlabs" className="hover:underline">YashveerLabs</Link>
          <span>·</span>
          <Link href="/rajpootindustries" className="hover:underline">RajpootIndustries</Link>
          <span>·</span>
          <Link href="/yashveer-singh-rajpoot-the-founder-of-yashveer-labs-and-rajpoot-industries" className="hover:underline">Master Manifesto</Link>
        </div>
      </section>
    </div>
  );
}
