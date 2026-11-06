"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, CheckCircle2, Calendar, Phone, Heart, Shield, Sparkles } from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

export default function KidsWearPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        SECTION 1: THE YOUNG LEGACY (HERO INTENT)
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Generational Sartorial Heritage
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight font-normal">
                The Young Legacy: <br />
                <span className="gold-gradient-text italic font-serif">Poise, Comfort & Craft.</span>
              </h1>
              <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed max-w-xl">
                Preparing the next generation for life’s milestone moments. Crafted from the exact same luxury natural wools and silks as our adult collections, engineered with gentle soft-touch linings and hidden growth allowances.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="tactile-button px-7 py-3.5 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Family Fitting</span>
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
                  src="/assets/image-7.png"
                  alt="Toddler fitted for miniature jacquard tuxedo suit by master tailor in studio - The Suit Maker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-matte/90 backdrop-blur-md rounded-sm border border-gold/20">
                  <p className="font-serif text-sm text-ivory">Milestone Tuxedo Fitting</p>
                  <p className="text-[10px] text-gold/80 font-sans uppercase tracking-widest">Dwarka Sector 7 Cutting Bench</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2 & 3: BOYS' & GIRLS' OCCASION COLLECTIONS
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Downscaled Perfection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-matte mt-2 mb-4">
            Heirloom Quality Engineered for Freedom of Movement
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
            Children require garments that move with them naturally. We eliminate stiff, itchy synthetic backings in favor of organic cotton poplin, lightweight Italian wools, and smooth satin waistbands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Boys' Milestone Suits */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="w-10 h-10 rounded-sm bg-gold/20 text-gold flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">Boys’ Milestone Suits & Sherwanis</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Two-piece and three-piece suits, miniature royal sherwanis, and black-tie tuxedos. Tailored for family weddings, school honors ceremonies, and holiday galas.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Hidden elastic internal waistband tabs</li>
              <li>• Ultra-soft scratch-free satin lapel facing</li>
              <li>• Pre-tied matching adjustable silk bow tie</li>
            </ul>
          </div>

          {/* Card 2: Girls' Occasion Attire */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="w-10 h-10 rounded-sm bg-gold/20 text-gold flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">Girls’ Elegant Occasionwear</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Structured silk organza and dupioni dresses, cotton-velvet skirts, tailored blazer coats, and custom ceremonial lehengas free of harsh plastic tulles.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Pure silk and breathable organic linings</li>
              <li>• Tailored double-breasted winter coats</li>
              <li>• Coordinated mother-daughter ensembles</li>
            </ul>
          </div>

          {/* Card 3: Growth Allocation Guarantee */}
          <div className="bg-white p-6 rounded-sm border border-gold/30 shadow-luxury">
            <div className="w-10 h-10 rounded-sm bg-gold/20 text-gold flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-matte mb-2">Growth Allocation Guarantee</h3>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed mb-4">
              Children grow quickly. We build all youth garments with generous hidden seam allowances in the sleeves, trouser hems, and waist, allowing the suit to grow with your child.
            </p>
            <ul className="text-xs font-sans text-charcoal space-y-1.5">
              <li>• Up to 2 inches of extendable sleeve length</li>
              <li>• 2.5 inches of trouser let-out allowance</li>
              <li>• Complimentary adjustments in the 1st year</li>
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
            Family Atelier Sessions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Book a Relaxed Family Fitting in Dwarka
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Our master tailor offers patient, unhurried fittings for children of all ages. Bring the whole family to our Ramphal Chowk studio to coordinate wedding wardrobes in unison.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Book Family Appointment
            </button>
            <a
              href="tel:8800253261"
              className="px-8 py-3.5 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              Direct Studio Line: 8800253261
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Kids' Wear"
      />
    </div>
  );
}
