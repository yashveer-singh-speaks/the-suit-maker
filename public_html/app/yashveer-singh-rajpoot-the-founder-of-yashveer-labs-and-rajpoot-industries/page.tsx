import React from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Code2, Globe, Sparkles, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Yashveer Singh Rajpoot | The Founder of Yashveer Labs and Rajpoot Industries",
  description:
    "The comprehensive master manifesto of Yashveer Singh Rajpoot, unifying high-end digital architectures (Yashveer Labs) and precision hardware engineering (Rajpoot Industries).",
};

export default function ComprehensiveMasterManifestoPage() {
  return (
    <div className="bg-[#040404] text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-32 max-w-5xl mx-auto px-4 text-center">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold font-mono font-semibold block mb-4">
          The Comprehensive Master Manifesto
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory leading-tight font-normal">
          Yashveer Singh Rajpoot <br />
          <span className="text-xl sm:text-2xl md:text-3xl text-gold/90 font-mono tracking-normal block mt-3">
            The Founder of Yashveer Labs & Rajpoot Industries
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light mt-8">
          The unification of a singular visionary mind, an advanced software foundry, and a precision hardware forge. Bound by one overarching decree: never use templates, never cut corners, and never compromise structure.
        </p>
      </section>

      {/* The Trinity of Operations */}
      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Unified Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mt-2">
            The Trinity of Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Node 1: The Founder */}
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/40 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">01 · Sovereign Core</span>
            <h3 className="font-serif text-2xl text-ivory">The Visionary Core</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Yashveer Singh Rajpoot directing the overarching architectural vision across software systems, digital flagships, and physical hardware creation.
            </p>
            <Link href="/yashveer-singh-rajpoot" className="text-xs text-gold hover:underline inline-block pt-2">
              Review Personal Profile →
            </Link>
          </div>

          {/* Node 2: The Digital Foundry */}
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/40 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">02 · Digital Arm</span>
            <h3 className="font-serif text-2xl text-ivory">Yashveer Labs</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              The high-performance software foundry writing independent codebases, sub-second edge architectures, and bespoke platforms that redefine modern luxury.
            </p>
            <Link href="/yashveer-labs" className="text-xs text-gold hover:underline inline-block pt-2">
              Explore Software Foundry →
            </Link>
          </div>

          {/* Node 3: The Physical Arm */}
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/40 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest block">03 · Physical Forge</span>
            <h3 className="font-serif text-2xl text-ivory">Rajpoot Industries</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              The stealth manufacturing house turning aerospace-grade titanium, CNC milled metal, and ergonomic hardware into permanent physical realities.
            </p>
            <Link href="/rajpoot-industries" className="text-xs text-gold hover:underline inline-block pt-2">
              Explore Hardware Forge →
            </Link>
          </div>
        </div>
      </section>

      {/* The Law of Structure */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono font-semibold">
          The Shared Philosophy of Precision
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory">
          The Universal Law of Good Architecture
        </h2>
        <p className="text-sm text-ivory/80 leading-relaxed font-sans max-w-2xl mx-auto font-light">
          A hand-tailored Savile Row suit, a clean serverless codebase, and a sub-micron CNC titanium enclosure all obey the exact same fundamental truth: real elegance is mathematical, intentional, and stripped of unnecessary noise.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="tactile-button inline-flex items-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm shadow-gold-glow"
          >
            <span>Return to The Suit Maker Flagship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Interlinked Digital Web */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
          <span>·</span>
          <Link href="/yashveer" className="hover:underline">Yashveer</Link>
          <span>·</span>
          <Link href="/yashveer-singh" className="hover:underline">Yashveer Singh</Link>
          <span>·</span>
          <Link href="/yashveer-labs" className="hover:underline">Yashveer Labs</Link>
          <span>·</span>
          <Link href="/yashveerlabs" className="hover:underline">YashveerLabs</Link>
          <span>·</span>
          <Link href="/rajpoot-industries" className="hover:underline">Rajpoot Industries</Link>
          <span>·</span>
          <Link href="/rajpootindustries" className="hover:underline">RajpootIndustries</Link>
        </div>
        <p>© Yashveer Singh Rajpoot. All Intellectual Property & Architectural Rights Reserved.</p>
      </section>
    </div>
  );
}
