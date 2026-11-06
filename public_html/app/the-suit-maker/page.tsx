import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, ShieldCheck, Sparkles, MapPin, Phone, ArrowRight, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand Manifesto | The Suit Maker",
  description:
    "The official brand manifesto of The Suit Maker. An architectural decree on bespoke suiting, anatomical structure, and multi-generational craftsmanship in New Delhi.",
};

export default function TheSuitMakerManifestoPage() {
  return (
    <div className="bg-matte text-ivory min-h-screen pt-24 pb-20 selection:bg-gold/30">
      {/* Hero Intent */}
      <section className="relative py-20 sm:py-28 border-b border-gold/25 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-sans font-semibold">
            The Brand Manifesto
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory mt-4 mb-6 leading-tight">
            The Sartorial Paradigm: <br />
            <span className="gold-gradient-text italic font-serif">Armor For Those Who Command.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory/80 font-sans leading-relaxed font-light">
            "The Suit Maker" is not merely a label; it is a permanent standard of formal precision. We exist to forge anatomical armor for leaders who shape eras and revere timeless structure.
          </p>
        </div>
      </section>

      {/* Pillars of the House */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-charcoal/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Foundational Tenets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mt-2 mb-4">
            The Three Inviolable Pillars of the House
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-serif text-3xl">01</span>
            <h3 className="font-serif text-2xl text-ivory">Anatomical Architecture</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              Every pattern is custom drafted from 42 precise body points. We balance the shoulder pitch, suppress the waist, and calibrate the blade line so the suit moves as a natural extension of the wearer’s physique.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-serif text-3xl">02</span>
            <h3 className="font-serif text-2xl text-ivory">Material Obsession</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              We strictly reject petroleum-based synthetic polyester fabrics. We cut solely in pure merino wools (Super 130s to Super 160s), Mongolian cashmere, raw mulberry silk, and hand-woven Irish linens.
            </p>
          </div>

          <div className="glass-panel-dark p-8 rounded-sm border border-gold/30 space-y-4">
            <span className="text-gold font-serif text-3xl">03</span>
            <h3 className="font-serif text-2xl text-ivory">Multi-Decadal Longevity</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
              True luxury does not chase fleeting quarterly fashion micro-trends. An authentic full-canvas suit built by The Suit Maker is engineered to endure across 20 to 30 years, passing down as an heirloom.
            </p>
          </div>
        </div>
      </section>

      {/* The Lineage of Craft & Flagship Sanctuary */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
              The Lineage of the Bench
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory">
              Decades of Traditional Cutting Refinement
            </h2>
            <p>
              Operating from our flagship studio at Ramphal Chowk, Dwarka Sector 7, New Delhi, our tailors maintain artisanal methods established over generations. From heavy dry-iron seam shaping to hand-stitching Milanese buttonholes and setting sleeve heads by hand, every garment is an uncompromising piece of sculptural craft.
            </p>
            <div className="pt-4 border-t border-charcoal/60 space-y-2 text-ivory">
              <p><strong>Studio Flagship:</strong> Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, New Delhi - 110075</p>
              <p><strong>Direct Studio Line:</strong> +91 88002 53261</p>
              <p><strong>Operating Hours:</strong> 9:30 AM – 10:00 PM (Daily)</p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact-us"
                className="tactile-button inline-flex items-center space-x-2 px-6 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-light"
              >
                <span>Enter The Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-sm overflow-hidden border border-gold/40 shadow-luxury-dark bg-matte-deep">
              <Image
                src="/assets/founder-portrait.png"
                alt="Master Cutter of The Suit Maker"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                <p className="font-serif text-sm text-ivory">The Head Cutter</p>
                <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">The Suit Maker Atelier</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
