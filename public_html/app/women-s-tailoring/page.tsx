"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, CheckCircle2, Calendar, Phone, ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

export default function WomensTailoringPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        SECTION 1: THE POWER SILHOUETTE (HERO INTENT)
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Haute Women’s Tailoring
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight font-normal">
                The Power Silhouette: <br />
                <span className="gold-gradient-text italic font-serif">Sharp Precision, Fluid Grace.</span>
              </h1>
              <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl">
                Uncompromising, elite tailoring for visionary women. From sculpted architectural power pantsuits to evening gala gowns, royal Indian lehengas, and tailored sheath dresses.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="tactile-button px-7 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Women’s Fitting</span>
                </button>
                <a
                  href="tel:8800253261"
                  className="px-7 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Atelier: 8800253261</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden border border-gold/40 shadow-luxury-dark bg-matte-deep">
                <Image
                  src="/assets/sculpted-power-suit.png"
                  alt="Sculpted Hourglass Women's Power Suit - The Suit Maker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                  <p className="font-serif text-sm text-ivory">The Sculpted X-Silhouette</p>
                  <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">Charcoal Flared Ensemble</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2 & 3: THE TAILORED SUIT & HAUTE GOWNS
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Architectural Wardrobe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Structured Contouring Engineered for the Female Form
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
            Unlike mass-produced women’s suits that are merely downscaled men’s blocks, our patterns are anatomically drafted to celebrate waist curvature, natural bust posture, and fluid leg drape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Power Pantsuit */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-5">
              <Image
                src="/assets/sculpted-power-suit.png"
                alt="Women's Power Suit Architecture"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">The Structured Pantsuit</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Meticulously contoured jackets that define the waistline with peak lapels, paired with high-waisted wide-leg or cigarette trousers.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Structured peak & shawl lapels</li>
              <li>• Matching tailored waistcoat option</li>
              <li>• Internal silk camisole coordination</li>
            </ul>
          </div>

          {/* Card 2: Eveningwear & Gowns */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-5">
              <Image
                src="/assets/burgundy-fitted-dress.png"
                alt="Burgundy Fitted Silk Evening Gown"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">Haute Formal Gowns</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Fluid silk crepe, draped cowl necklines, structured sheaths, and architectural tuxedo dresses that effortlessly transition to gala receptions.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Hand-draped asymmetric necklines</li>
              <li>• Body-contouring interior boning</li>
              <li>• Pure mulberry silk & heavy georgette</li>
            </ul>
          </div>

          {/* Card 3: Royal Bridal Lehenga */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-5">
              <Image
                src="/assets/royal-indian-lehenga.png"
                alt="Regal Indian Bridal Lehenga"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">Royal Bridal Lehengas</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Multi-paneled couture lehengas embroidered in zardozi, blood-red velvet and raw silk with matching bespoke blouses and embroidered veils.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Micro-stitched zardozi peacock motifs</li>
              <li>• Ergonomic can-can weight balance</li>
              <li>• Complete bridal coordinate suite</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4 & 5: REAL WORKSHOP CONSULTATIONS
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-sm border border-gold/40 p-3 shadow-luxury overflow-hidden">
              <Image
                src="/assets/image-4.png"
                alt="Master tailor measuring female client in tailored dress in studio"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-matte/90 p-3 rounded-sm border border-gold/20">
                <p className="font-serif text-sm text-ivory">In-Studio Female Fitting Consultation</p>
                <p className="text-[10px] text-gold/80 font-sans">Ramphal Chowk, Dwarka Sector 7 Studio</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Fitting Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-matte leading-tight">
              Comfort, Ease & Flawless Proportion
            </h2>
            <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
              Every appointment takes place in our private consultation suite. We dedicate time to understanding your lifestyle, movement patterns, and fabric preferences—delivering clothing that inspires quiet, unshakeable confidence.
            </p>

            <div className="space-y-4 pt-2 font-sans text-xs">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-matte block mb-0.5">Zero Bulk Layering</strong>
                  <p className="text-charcoal/70">Custom silk camisoles and unlined lightweight suiting designed to layer seamlessly beneath structured coats.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-matte block mb-0.5">Tailored Skirting & Trousers</strong>
                  <p className="text-charcoal/70">High-waisted wool-crepe pencil skirts and wide-leg trousers engineered to retain crisp lines all day.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-matte block mb-0.5">Complementary Express Alterations</strong>
                  <p className="text-charcoal/70">Full in-house adjustment facility to perfect off-the-rack garments or reshape existing luxury pieces.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="tactile-button px-7 py-3.5 bg-matte text-ivory text-xs uppercase tracking-widest hover:bg-charcoal rounded-sm transition-colors"
              >
                Schedule Private Consultation
              </button>
            </div>
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
            Bespoke Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Reserve Your Private Atelier Fitting
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Experience bespoke women’s tailoring at our Dwarka Sector 7 studio. Bring your visions, fabric inspirations, or existing garments for a master assessment.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Request Fitting Slot
            </button>
            <a
              href="https://wa.me/918800253261?text=Hello%20The%20Suit%20Maker,%20I%20would%20like%20to%20inquire%20about%20women's%20tailoring."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              WhatsApp Studio
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Women's Tailoring"
      />
    </div>
  );
}
