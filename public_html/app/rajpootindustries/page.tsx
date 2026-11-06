import React from "react";
import Link from "next/link";
import { Compass, Cpu, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAJPOOTINDUSTRIES | The Manufacturing House",
  description:
    "RAJPOOTINDUSTRIES is a precision physical engineering house turning raw high-grade metals into functional hardware masterpieces.",
};

export default function RajpootIndustriesHousePage() {
  return (
    <div className="bg-matte text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono font-semibold">
          Industrial Forge & Foundry
        </span>
        <h1 className="font-mono text-4xl sm:text-6xl text-ivory mt-4 mb-4 font-bold tracking-tight">
          RAJPOOTINDUSTRIES
        </h1>
        <p className="text-sm text-gold/90 font-mono tracking-widest uppercase mb-6">
          The Physical Engineering House
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          Turning raw physical materials into structural masterpieces. Where software logic from the lab translates into tactile permanence in the real world.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Compass className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Ergonomic Architecture</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Designing tactile physical forms that fit naturally into the human palm while preserving razor-sharp geometric lines and balance.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Cpu className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Thermal Heat Dissipation</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Engineering internal micro-passageways that keep high-density components completely cool under sustained industrial workloads.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <ShieldCheck className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Engraved Serial Hallmarks</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Every production component leaving the factory floor carries a permanent laser-etched serial code linking it to its master craftsman.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/rajpoot-industries" className="hover:underline">Hardware Horizon</Link>
          <span>·</span>
          <Link href="/yashveer-labs" className="hover:underline">Yashveer Labs</Link>
          <span>·</span>
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">The Founder</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© RAJPOOTINDUSTRIES. Manufacturing House Blueprint.</p>
      </section>
    </div>
  );
}
