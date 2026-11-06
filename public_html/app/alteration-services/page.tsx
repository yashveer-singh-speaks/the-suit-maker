"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, CheckCircle2, Calendar, Phone, ArrowRight, Clock, Zap, ShieldCheck } from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

export default function AlterationServicesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        SECTION 1: THE ART OF RESHAPING (HERO INTENT)
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Sartorial Restoration & Reshaping
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight font-normal">
                We Do Not Just Alter Sizes. <br />
                <span className="gold-gradient-text italic font-serif">We Re-Architect Garments.</span>
              </h1>
              <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl">
                Honoring your body’s true architecture. We accept high-end suits, tuxedos, evening dresses, sherwanis, and luxury ready-to-wear from any fashion house worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="tactile-button px-7 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Scissors className="w-4 h-4" />
                  <span>Book Pinning Session</span>
                </button>
                <a
                  href="tel:8800253261"
                  className="px-7 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Studio: 8800253261</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-sm overflow-hidden border border-gold/40 shadow-luxury-dark bg-matte-deep">
                <Image
                  src="/assets/image-5.png"
                  alt="Garment reconstruction with basting threads and shears - The Suit Maker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                  <p className="font-serif text-sm text-ivory">Master Cutting Bench</p>
                  <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">Dwarka Sector 7 Alteration Suite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2 & 3: DETAILED ALTERATION CAPABILITIES
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Precision Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Master-Level Tailoring Alterations
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
            Ordinary dry-cleaner alterations often ruin jacket balance by pulling from the wrong seams. Our master cutter analyzes the whole drape before taking a single stitch out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Suit & Jacket Reconstruction */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-3">Suit & Jacket Reconstruction</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Complex anatomical adjustments that maintain internal canvas harmony.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Shoulder Narrowing:</strong> Re-sculpting the shoulder point without collapsing the chest canvas.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Sleeve Shortening from Shoulder:</strong> Preserves functional working surgeon’s cuffs and buttonholes.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Waist & Chest Suppression:</strong> Sculpting a clean athletic taper without rear vent pulling.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Trouser & Skirt Engineering */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-3">Trouser & Skirt Refinements</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Restoring clean drape and zero-bunching around the waist and shoes.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Precision Breaks:</strong> Hand-finished clean break, slight break, or contemporary no-break.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Waist & Seat Resizing:</strong> Eliminating lower-back waistband gaping and seat sagging.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Inseam & Outseam Tapering:</strong> Reshaping wide leg profiles into clean modern lines.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Women's Haute & Evening Gowns */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-3">Haute Gowns & Bridal Fitting</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Delicate, micro-stitch handling of fine silks, lace, beads, and boning.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Multi-Layer Gown Hemming:</strong> Shortening silk, crinoline, and lace while retaining original hem trims.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Bodice Contouring:</strong> Re-anchoring internal stays for secure, non-slip comfort.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span><strong>Strap & Neckline Adjustment:</strong> Calibrating delicate silk straps and armhole heights.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5 & 6: 30-MIN PINNING & 24-HOUR EMERGENCY GALA SERVICE
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-sm border border-gold/30">
            <div className="w-10 h-10 rounded-sm bg-matte text-gold flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">The 30-Minute White-Glove Pinning</h3>
            <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed mb-4">
              A private one-on-one session with our master tailor in our full-length 360-degree mirror fitting suite. Every adjustment is visually chalked and pinned while you stand naturally, allowing you to preview the exact drape before any cutting occurs.
            </p>
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">
              Free Initial Assessment & Quote
            </span>
          </div>

          <div className="glass-panel p-8 rounded-sm border border-gold/30">
            <div className="w-10 h-10 rounded-sm bg-gold text-matte flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">The 24-Hour Express Gala Fix</h3>
            <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed mb-4">
              Have an urgent wedding, diplomatic dinner, or corporate summit tomorrow evening? Our workshop prioritizes critical wardrobe emergencies with rapid turnaround hem, waist, and sleeve adjustments without sacrificing artisanal stitch quality.
            </p>
            <a
              href="tel:8800253261"
              className="text-xs text-gold font-semibold uppercase tracking-wider hover:underline"
            >
              Call Hotline: +91 88002 53261 →
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CALL TO ACTION
        ========================================================================
      */}
      <section className="py-20 bg-matte text-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            In-Studio Consultations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Bring Your Wardrobe to The Master Cutter
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Located at Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, New Delhi. Open 9:30 AM – 10:00 PM daily. Walk-ins welcomed; appointments recommended for complex multi-piece wardrobes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Reserve Fitting Session
            </button>
            <a
              href="https://wa.me/918800253261?text=Hello%20The%20Suit%20Maker,%20I%20have%20a%20garment%20I%20would%20like%20altered."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              Send Photo via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Alteration Services"
      />
    </div>
  );
}
