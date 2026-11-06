import React from "react";
import Link from "next/link";
import { Terminal, Cpu, Zap, Code2, Globe, Layers, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yashveer Labs | The Innovation Hub & Software Foundry",
  description:
    "Yashveer Labs is an elite software research and development studio engineering bespoke web engines, spatial interfaces, and luxury digital architectures.",
};

export default function YashveerLabsPage() {
  return (
    <div className="bg-[#080808] text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono font-semibold">
          Software Research & Development
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-ivory mt-4 mb-4 leading-tight">
          Yashveer Labs
        </h1>
        <p className="text-sm text-gold/90 font-mono tracking-widest uppercase mb-6">
          The Bespoke Software Foundry
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
          Engineering high-performance standalone web engines that reject cheap online templates in favor of hand-written, cinema-grade codebases that run instantly worldwide.
        </p>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-16 max-w-6xl mx-auto px-4 border-t border-charcoal/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl text-ivory">Core Technical Disciplines</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Zap className="w-6 h-6 text-gold mb-2" />
            <h3 className="font-serif text-xl text-ivory">Sub-Second Edge Rendering</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Developing ultra-light front-end codebases with hardware-accelerated CSS and optimized asset pipelines for instant global delivery.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Cpu className="w-6 h-6 text-gold mb-2" />
            <h3 className="font-serif text-xl text-ivory">Spatial 3D & Physics Engines</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Integrating real-time Three.js fabric wave algorithms and particle atmospheres directly into standard web browsers without performance drag.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-3">
            <Layers className="w-6 h-6 text-gold mb-2" />
            <h3 className="font-serif text-xl text-ivory">Anatomical Measurement Vaults</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Proprietary data architectures housing 42-point client pattern blueprints with secure cryptographic encryption and lifetime revision tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Notice */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="bg-matte-deep border border-gold/40 p-8 rounded-sm text-center space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-gold font-mono">Flagship Case Study</span>
          <h3 className="font-serif text-2xl text-ivory">The Suit Maker Digital Architecture</h3>
          <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed max-w-xl mx-auto">
            Custom engineered from scratch by Yashveer Labs: 3D shadowbox footer, 21 distinct high-resolution editorial image assets, full-bleed silent ambient video integration, and zero external template bloat.
          </p>
          <div className="pt-2">
            <Link href="/" className="text-xs text-gold hover:underline inline-flex items-center space-x-1 font-semibold uppercase tracking-wider">
              <span>View The Live Flagship Implementation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 text-center border-t border-charcoal/40 text-xs font-sans text-ivory/60">
        <div className="flex flex-wrap justify-center gap-4 text-gold mb-4">
          <Link href="/yashveerlabs" className="hover:underline">YashveerLabs Studio</Link>
          <span>·</span>
          <Link href="/rajpoot-industries" className="hover:underline">Rajpoot Industries</Link>
          <span>·</span>
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">The Founder</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© Yashveer Labs. All Rights Reserved. Advanced Software Foundry.</p>
      </section>
    </div>
  );
}
