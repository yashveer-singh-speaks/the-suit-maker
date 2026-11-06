"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, CheckCircle2, Calendar, Phone, ArrowRight, Watch, Gem, Briefcase } from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

export default function AccessoriesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        SECTION 1: THE FINAL POLISH (HERO INTENT)
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Sartorial Accents & Accoutrements
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight font-normal">
                The Final Polish: <br />
                <span className="gold-gradient-text italic font-serif">Completing The Architecture.</span>
              </h1>
              <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl">
                Fine accessories are not decorative afterthoughts; they are structural anchors. Hand-folded pure silk ties, whole-cut French calfskin oxfords, solid brass accents, and hand-rolled linen pocket squares proportioned to your suit lapels.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="tactile-button px-7 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Curate Wardrobe Suite</span>
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
              <div className="relative w-full max-w-sm aspect-square rounded-sm overflow-hidden border border-gold/40 shadow-luxury-dark bg-matte-deep">
                <Image
                  src="/assets/image-13.png"
                  alt="Editorial Sartorial Flat-Lay Accessories - The Suit Maker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                  <p className="font-serif text-sm text-ivory">The Coordinated Accoutrements</p>
                  <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">Dwarka Flagship Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2 - 6: ACCESSORY CATEGORIES
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Handcrafted Accents
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Curated Complements in Natural Materials
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
            Every piece is selected to harmonize with our suit silhouettes, ensuring lapel proportions, shoe leathers, and tie dimples align flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Seven-Fold Silk Ties */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Seven-Fold Pure Silk Ties</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Constructed without synthetic interlinings by folding a continuous sheet of heavy Italian silk seven times over itself. Yields a substantial knot that holds its dimple all day.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Jacquard weave, grenadine & printed foulard</li>
              <li>• Matching width to 3.25" and 3.5" house lapels</li>
              <li>• Hand-rolled edges with single bar tack</li>
            </ul>
          </div>

          {/* Card 2: Handcrafted French Calfskin Shoes */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Whole-Cut French Calfskin Oxfords</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Carved from a single flawless piece of full-grain leather without seams across the vamp. Hand-burnished in deep espresso, cognac, and mirror black.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Goodyear-welted channeled leather soles</li>
              <li>• Quilted velvet evening slippers for galas</li>
              <li>• Sleek slim Chelsea boots in suede</li>
            </ul>
          </div>

          {/* Card 3: Solid Metal Cufflinks & Collar Pins */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Sartorial Jewelry & Cufflinks</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Solid sterling silver and 18k yellow gold-plated links inlaid with natural black onyx, mother-of-pearl, and lapis lazuli.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Vintage bar collar pins to elevate tie knots</li>
              <li>• Matching shirt stud sets for black-tie</li>
              <li>• Engraved monogram initial plaques</li>
            </ul>
          </div>

          {/* Card 4: Fine Leather Goods & Belts */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Full-Grain Leather Dress Belts</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Cut from the exact same leather hides as our dress shoes to provide an unbroken color match across your belt and footwear.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Solid brass feathered buckle options</li>
              <li>• Slim breast-pocket cardholders</li>
              <li>• Structured executive leather briefcases</li>
            </ul>
          </div>

          {/* Card 5: Hand-Rolled Pocket Squares */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Irish Linen & Silk Squares</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Stiff white Irish linen with colored shoestring rolled edges that hold a sharp presidential fold without collapsing inside your breast pocket.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Contrast hand-rolled edges</li>
              <li>• Vintage paisley silk prints</li>
              <li>• Formal white evening linen</li>
            </ul>
          </div>

          {/* Card 6: Seasonal Cashmere Scarves & Hosiery */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <h3 className="font-serif text-2xl text-matte mb-2">Woven Cashmere & Egyptian Cotton</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Featherlight woven cashmere scarves designed to tuck cleanly beneath overcoat lapels, paired with breathable over-the-calf formal socks.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• 100% Mongolian combed cashmere</li>
              <li>• Over-the-calf ribbed formal socks (stay up)</li>
              <li>• Silk evening scarves with hand-tied fringe</li>
            </ul>
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
            In-Studio Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Coordinate Your Complete Wardrobe Suite
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Experience our complete accessory archive in person at our Dwarka Sector 7 studio. Bring your suit or consult our master stylist for optimal color pairings.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Inquire for Accessory Suite
            </button>
            <a
              href="tel:8800253261"
              className="px-8 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              Call Studio: 8800253261
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Accessories Inquiry"
      />
    </div>
  );
}
