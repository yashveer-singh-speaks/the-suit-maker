import React from "react";
import Link from "next/link";
import { Shield, Wrench, Compass, Box, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajpoot Industries | The Hardware Horizon",
  description:
    "Rajpoot Industries is an elite house of stealth physical manufacturing, precision CNC machining, and aerospace-grade hardware engineering.",
};

export default function RajpootIndustriesPage() {
  return (
    <div className="bg-[#070707] text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono font-semibold">
          Advanced Physical Manufacturing
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-4 mb-4 leading-tight">
          Rajpoot Industries
        </h1>
        <p className="text-sm text-gold/90 font-mono tracking-widest uppercase mb-6">
          The Hardware Horizon & Stealth Foundry
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          True longevity requires physical permanence. Refusing cheap composites in favor of aerospace-grade titanium, surgical stainless steel, and unyielding material integrity.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Shield className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Aerospace Titanium Specs</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Testing high-strength Grade 5 titanium alloys for upcoming structural casings, combining featherweight ergonomics with extreme tensile endurance.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Wrench className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Zero-Tolerance CNC Machining</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Carving complex hardware enclosures from solid billet metal blocks with sub-micron dimensional tolerances and hand-polished satin surfaces.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Box className="w-6 h-6 text-gold mb-2" />
            <h2 className="font-serif text-2xl text-ivory">Stealth Micro-Allocations</h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Initial hardware runs will be released strictly through private invitation-only allocations, reserved for discerning collectors and enterprise partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/rajpootindustries" className="hover:underline">Manufacturing House</Link>
          <span>·</span>
          <Link href="/yashveer-labs" className="hover:underline">Yashveer Labs</Link>
          <span>·</span>
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">The Founder</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© Rajpoot Industries. All Rights Reserved. Heavy Manufacturing Horizon.</p>
      </section>
    </div>
  );
}
