import React from "react";
import Link from "next/link";
import { ShieldCheck, Server, LineChart, Cpu, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yashveer Singh | Corporate Strategy & Enterprise Governance",
  description:
    "Corporate profile and enterprise systems governance of Yashveer Singh. Scaling luxury platforms, high-performance infrastructure, and technical oversight.",
};

export default function YashveerSinghCorporatePage() {
  return (
    <div className="bg-matte text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-sans font-semibold">
          Enterprise Governance
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-4 mb-4 leading-tight">
          Yashveer Singh
        </h1>
        <p className="text-sm text-gold/90 font-mono tracking-widest uppercase mb-6">
          Enterprise Systems Strategist & Technical Advisor
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          Providing strategic oversight, cryptographic security governance, and scalable technical infrastructure for elite global enterprises and digital flagship platforms.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Server className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Enterprise Systems Scale</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Architecting resilient serverless and edge architectures capable of handling sudden international traffic surges with sub-second page delivery and zero downtime.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <ShieldCheck className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Data Security Governance</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Enforcing military-grade encryption standards to safeguard private client measurement profiles, bespoke order specifications, and VIP transactional records.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <LineChart className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Technical Integrity Audits</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Rigorous zero-error quality verification, preventing layout shifts, memory leaks, and broken dependencies across multi-platform device matrices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">Sovereign Profile</Link>
          <span>·</span>
          <Link href="/yashveer-labs" className="hover:underline">Yashveer Labs</Link>
          <span>·</span>
          <Link href="/rajpoot-industries" className="hover:underline">Rajpoot Industries</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© Yashveer Singh. Corporate Governance Registry.</p>
      </section>
    </div>
  );
}
