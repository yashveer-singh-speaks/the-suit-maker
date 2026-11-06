"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck, Ruler } from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

export default function MensTailoringPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedFit, setSelectedFit] = useState<"slim" | "regular" | "athletic">("slim");

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        SECTION 1: THE MODERN GENTLEMAN (HERO INTENT)
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-matte via-matte/80 to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Men’s Sartorial Architecture
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight font-normal">
                The Signature Cut: <br />
                <span className="gold-gradient-text italic font-serif">Power, Grace & Structure.</span>
              </h1>
              <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl">
                Outfitting the world’s most discerning gentlemen for their highest moments. Engineered with a structured European shoulder, clean suppressed waist, and commanding fluid drape.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="tactile-button px-7 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Men’s Consultation</span>
                </button>
                <a
                  href="tel:8800253261"
                  className="px-7 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call: 8800253261</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden border border-gold/40 shadow-luxury-dark bg-matte-deep">
                <Image
                  src="/assets/black-suit-man.png"
                  alt="The Modern Gentleman in Bespoke Black Suit - The Suit Maker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                  <p className="font-serif text-sm text-ivory">Obsidian Bespoke Two-Piece</p>
                  <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">Hand-Crafted in Dwarka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: READY-TO-WEAR & BESPOKE DROP VARIATIONS
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Anatomical Drop Profiles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Flawless Adaptability Across Masculine Builds
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
            All pieces are constructed with generous internal fabric allowances for immediate in-house micro-altering by our master cutter.
          </p>

          {/* Fit Selector Tabs */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-8">
            {(["slim", "regular", "athletic"] as const).map((fit) => (
              <button
                key={fit}
                onClick={() => setSelectedFit(fit)}
                className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest transition-all font-sans ${
                  selectedFit === fit
                    ? "bg-matte text-gold border border-gold shadow-sm font-semibold"
                    : "bg-white text-charcoal border border-charcoal/20 hover:border-gold"
                }`}
              >
                {fit.toUpperCase()} FIT
              </button>
            ))}
          </div>
        </div>

        {/* Selected Fit Details */}
        <div className="glass-panel p-8 rounded-sm max-w-4xl mx-auto border border-gold/30">
          {selectedFit === "slim" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl text-matte mb-3">The Architectural Slim Drop (Drop 7/8)</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans mb-4">
                  A high armhole, narrowed waist suppression, and tapered cuffed trousers that accentuate a lean, modern silhouette. Perfect for modern business and sleek evening occasions.
                </p>
                <ul className="space-y-2 text-xs font-sans text-charcoal">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Structured minimal shoulder padding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Narrow 3.0-inch notch or peak lapel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Flat-front tapered trousers with zero break</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white p-2 border border-gold/20">
                <Image
                  src="/assets/image-12.png"
                  alt="Slim Fit Bespoke Suit - The Suit Maker"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}

          {selectedFit === "regular" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl text-matte mb-3">The Classical British Regular Drop (Drop 6)</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans mb-4">
                  Generous chest canvas drape, moderate waist shaping, and straight-leg trousers. Designed for timeless corporate authority and effortless movement throughout long boardroom days.
                </p>
                <ul className="space-y-2 text-xs font-sans text-charcoal">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Roped shoulder with gentle roping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Classical 3.5-inch notch lapel roll</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Single-pleat trousers with clean half-break</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white p-2 border border-gold/20">
                <Image
                  src="/assets/image-1.png"
                  alt="Regular Fit Three Piece Suit - The Suit Maker"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}

          {selectedFit === "athletic" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl text-matte mb-3">The Athletic V-Taper Drop (Drop 8/9)</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans mb-4">
                  Engineered specifically for broad shoulders, muscular chest, and trim waistlines. Eliminates chest collar gaping while providing room in the bicep and thigh.
                </p>
                <ul className="space-y-2 text-xs font-sans text-charcoal">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Wide dramatic peak lapel framing broad chest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Enhanced chest suppression with side ease</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Pleated athletic thigh with tailored ankle</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white p-2 border border-gold/20">
                <Image
                  src="/assets/image-14.png"
                  alt="Athletic Fit Custom Suit - The Suit Maker"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3, 4, 5 & 6: BESPOKE WARDROBE CATEGORIES
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            The Complete Wardrobe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Curated Categories of Masculine Elegance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Custom Shirting */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block mb-2">
              Sea Island & Egyptian Cotton
            </span>
            <h3 className="font-serif text-xl text-matte mb-3">Custom Bespoke Shirting</h3>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              Long-staple cotton fibers woven to 140s and 160s thread counts. Choose between the classical spread, formal cutaway, and evening wingtip collar with discrete ribcage monograms.
            </p>
            <div className="text-xs text-gold font-medium font-sans">Mother of Pearl Buttons · Removable Stays</div>
          </div>

          {/* Card 2: Tuxedo & Evening */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block mb-2">
              Black-Tie & Gala Standard
            </span>
            <h3 className="font-serif text-xl text-matte mb-3">The Midnight Blue Tuxedo</h3>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              Favored over pure black for superior depth under artificial event chandeliers. Hand-faced silk grosgrain lapels, covered buttons, and braided trouser side-stripes.
            </p>
            <div className="text-xs text-gold font-medium font-sans">Satin Shawl / Peak · Matching Cummerbund</div>
          </div>

          {/* Card 3: Royal Sherwani & Bandhgala */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block mb-2">
              Imperial Indian Heritage
            </span>
            <h3 className="font-serif text-xl text-matte mb-3">Sherwanis & Bandhgalas</h3>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              Imperial groom wear hand-cut in raw silk and fine wools. Standing mandarin collars, hand-worked zari borders, and regal tonal buttons.
            </p>
            <div className="text-xs text-gold font-medium font-sans">Jodhpuri Silhouettes · Basra Pearl Pairing</div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 7: THE PRIVATE FITTING ROOM CALL TO ACTION
        ========================================================================
      */}
      <section className="py-20 bg-matte text-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Lock Your Measurements
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Establish Your Digital Pattern Profile
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Once measured at our Dwarka Sector 7 studio, your 42-point pattern is archived in our private registry for seamless lifetime reordering and alterations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Book Master Tailor Session
            </button>
            <Link
              href="/contact-us"
              className="px-8 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              Atelier Coordinates & Hours
            </Link>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Bespoke Suit"
      />
    </div>
  );
}
