"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Maximize2,
  Layers,
  Award,
} from "lucide-react";
import ThreeFabricCanvas from "@/components/ThreeFabricCanvas";
import EnquiryModal from "@/components/EnquiryModal";
import ImageModal from "@/components/ImageModal";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("Bespoke Suit");

  // Lightbox modal state
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
    description: string;
  } | null>(null);

  // Quick helper to trigger booking modal
  const openBooking = (intent: string) => {
    setSelectedIntent(intent);
    setEnquiryOpen(true);
  };

  return (
    <div className="relative w-full bg-ivory text-matte overflow-hidden selection:bg-gold/30">
      {/* 
        ========================================================================
        SECTION 0: THE GRAND ENTRANCE (HERO CINEMATIC CANVAS)
        docs/website-sections.md: Full-bleed, silent, slow-motion ambient video
        ========================================================================
      */}
      <section className="relative min-h-screen flex items-center justify-center bg-matte overflow-hidden pt-20">
        {/* Full-bleed ambient video background with poster fallback */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/black-suit-man.png"
            className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-1000 ease-out"
          >
            <source src="/assets/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Gradients to blend smoothly into Matte Black and Warm Ivory */}
          <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/60 to-matte/70 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.8)_100%)] z-10" />
        </div>

        {/* 3D Atmospheric fabric physics canvas in foreground */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <ThreeFabricCanvas className="w-full h-full" />
        </div>

        {/* Hero Narrative Content */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/40 bg-matte/80 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">
              Dwarka Sector 7, New Delhi · Bespoke Atelier
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-lg">
            Mastery In Every <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-serif">Sartorial Line.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/80 font-sans leading-relaxed mb-10 font-light">
            Generations of bespoke tailoring, handcrafted full-canvas suits, royal sherwanis, and precision alterations—for individuals who command presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking("Bespoke Suit")}
              className="tactile-button w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-[0.2em] rounded-sm shadow-gold-glow flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Private Fitting</span>
            </button>

            <Link
              href="/gallery"
              className="tactile-button w-full sm:w-auto px-8 py-4 bg-transparent border border-gold/40 text-ivory hover:text-gold hover:border-gold font-semibold text-xs uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore The Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key Trust Tickers */}
          <div className="mt-16 pt-8 border-t border-charcoal/50 grid grid-cols-2 sm:grid-cols-4 gap-6 text-ivory/70 text-xs font-sans">
            <div>
              <span className="text-gold font-serif text-lg block">42-Point</span>
              <span>Anatomical Draft</span>
            </div>
            <div>
              <span className="text-gold font-serif text-lg block">Full Canvas</span>
              <span>Horsehair Chest Piece</span>
            </div>
            <div>
              <span className="text-gold font-serif text-lg block">Multi-Gen</span>
              <span>Heritage Cutters</span>
            </div>
            <div>
              <span className="text-gold font-serif text-lg block">Dwarka Sec 7</span>
              <span>Flagship Workshop</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 1: ESTABLISH IMMEDIATE AUTHORITY (THE MASTERPIECE)
        docs/website-sections.md: Extreme minimalism, single masterpiece tuxedo jacket
        IMAGE 1: image-1.png (Navy three-piece masterpiece suit on mannequin)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Architecture of the Silhouette
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-matte mt-3 mb-6">
              Full Floating Canvas. Pure Merino Precision.
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed">
              True bespoke tailoring begins beneath the fabric. Our suits are engineered with a free-floating natural horsehair canvas that molds organically to the contours of your chest over time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image 1: Bespoke Three-Piece Masterpiece */}
            <div className="lg:col-span-7 flex justify-center">
              <div
                className="relative w-full max-w-md aspect-[3/4] bg-white rounded-sm p-4 border border-gold/30 shadow-luxury group cursor-pointer overflow-hidden"
                onClick={() =>
                  setModalImage({
                    src: "/assets/image-1.png",
                    alt: "Navy Bespoke Three-Piece Suit",
                    title: "The Sovereign Three-Piece Suit",
                    category: "Bespoke Masterpiece",
                    description:
                      "Crafted from Super 150s midnight navy merino wool with hand-finished pick-stitched lapels, five-button tailored vest, and precision-cuffed trousers.",
                  })
                }
              >
                {/* HOMEPAGE IMAGE 1/21 */}
                <Image
                  src="/assets/image-1.png"
                  alt="Navy Bespoke Three-Piece Suit - The Suit Maker"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 right-4 bg-matte/80 text-gold p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute top-4 left-4 bg-ivory/90 border border-gold/30 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-sans font-medium">
                  Asset 01 · Sovereign Navy 3-Piece
                </div>
              </div>
            </div>

            {/* Architectural Points */}
            <div className="lg:col-span-5 space-y-8 font-sans">
              <div className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-2xl text-matte mb-2">Hand-Stitched Milanese Lapel Hole</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  Every buttonhole is hand-cut and corded with pure silk thread using traditional artisanal gimp, requiring over an hour of solitary bench precision per lapel.
                </p>
              </div>

              <div className="border-l-2 border-gold/60 pl-6">
                <h3 className="font-serif text-2xl text-matte mb-2">Natural Shoulder & High Armhole</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  A high-cut scye provides commanding mobility without pulling the jacket collar away from the neck. Structured yet light enough for all-day boardroom comfort.
                </p>
              </div>

              <div className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-serif text-2xl text-matte mb-2">Functional Surgeon’s Cuffs</h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  Four genuine horn buttons with functional unfastening buttonholes—the definitive hallmark of custom Savile Row-inspired craftsmanship.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBooking("Bespoke Suit")}
                  className="tactile-button inline-flex items-center space-x-3 px-6 py-3 bg-matte text-ivory text-xs uppercase tracking-widest hover:bg-charcoal rounded-sm"
                >
                  <span>Inquire for Sovereign Cut</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: CULTIVATE AN AURA OF EXCLUSIVITY & PRESTIGE
        docs/website-sections.md: Lineage of master tailors, Autumn Allocation
        IMAGE 2: founder-portrait.png (The Founder / Master Cutter in ivory suit)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-matte text-ivory relative border-b border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Multi-Generational Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight">
                Generations of Pattern Cutting & Sartorial Dedication.
              </h2>
              <p className="text-sm text-ivory/80 font-sans leading-relaxed">
                Operating from our flagship studio at Ramphal Chowk, Dwarka Sector 7, The Suit Maker has upheld a lineage of traditional pattern making, hand-cutting, and bespoke finishing passed down through family generations.
              </p>
              <p className="text-sm text-ivory/80 font-sans leading-relaxed">
                We believe a bespoke garment is a personal biography in cloth. Every paper pattern is hand-drafted from 42 individual client measurements, ensuring no two cuts in our archive are identical.
              </p>

              {/* Autumn Allocation Card */}
              <div className="p-6 rounded-sm bg-matte-deep border border-gold/30 mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    Strict Seasonal Allocation
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40">
                    Strictly Limited
                  </span>
                </div>
                <h3 className="font-serif text-xl text-ivory">The Autumn Vicuña & Cashmere Suiting</h3>
                <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                  Exclusive micro-batch fabric allotment from historic Italian mills, available exclusively by private appointment.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => openBooking("Autumn Allocation")}
                    className="text-xs text-gold hover:text-gold-light uppercase tracking-wider font-semibold inline-flex items-center space-x-1"
                  >
                    <span>Request Allocation Access</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Image 2: The Founder / Master Cutter */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className="relative w-full max-w-md aspect-square bg-matte-deep rounded-sm border border-gold/40 p-3 shadow-luxury-dark group cursor-pointer overflow-hidden"
                onClick={() =>
                  setModalImage({
                    src: "/assets/founder-portrait.png",
                    alt: "The Founder and Master Cutter - The Suit Maker",
                    title: "The Master Cutter & Founder",
                    category: "Heritage Lineage",
                    description:
                      "Seated in a hand-tailored ivory pinstripe two-piece suit with chocolate silk tie and walnut leather loafers, representing decades of sartorial mastery.",
                  })
                }
              >
                {/* HOMEPAGE IMAGE 2/21 */}
                <Image
                  src="/assets/founder-portrait.png"
                  alt="The Founder and Master Cutter - The Suit Maker"
                  fill
                  className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-matte/90 border border-gold/30 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-gold font-sans font-medium">
                  Asset 02 · Master Cutter
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-matte/90 backdrop-blur-md p-3 border border-gold/20 rounded-sm">
                  <p className="font-serif text-sm text-ivory">The Master Tailor, The Suit Maker</p>
                  <p className="text-[11px] text-gold/80 font-sans">Dwarka Sector 7 Flagship Atelier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: SIGNAL UNSHAKABLE TRUST
        docs/website-sections.md: Understated proof, ambassador photography
        IMAGE 3: black-suit-man.png (The modern gentleman in all-black bespoke suit)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image 3: The Gentleman in All-Black Bespoke Suit */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div
                className="relative w-full max-w-md aspect-square bg-matte rounded-sm border border-gold/40 p-3 shadow-luxury group cursor-pointer overflow-hidden"
                onClick={() =>
                  setModalImage({
                    src: "/assets/black-suit-man.png",
                    alt: "The Modern Gentleman in All-Black Bespoke Suit",
                    title: "The Obsidian Black Bespoke Suit",
                    category: "Executive Ambassador",
                    description:
                      "Cut with a structured high shoulder, suppressed waist, and midnight horn buttons. Built for high-stakes presence and timeless elegance.",
                  })
                }
              >
                {/* HOMEPAGE IMAGE 3/21 */}
                <Image
                  src="/assets/black-suit-man.png"
                  alt="The Modern Gentleman in All-Black Bespoke Suit - The Suit Maker"
                  fill
                  className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-matte/90 border border-gold/30 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-gold font-sans font-medium">
                  Asset 03 · Obsidian Black Commission
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Client Trust & Dignity
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-matte leading-tight">
                Crafted for Discerning Leaders & Celebrated Milestones.
              </h2>
              <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                Whether creating bespoke boardroom armor for executive leaders, regal wedding sherwanis for grooms, or precision tuxedos for galas, our work speaks with quiet authority.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-sans text-xs">
                <div className="p-4 bg-white/70 border border-gold/20 rounded-sm">
                  <span className="text-gold font-serif text-lg block mb-1">White-Glove Fitting</span>
                  <p className="text-charcoal/70">
                    Comprehensive consultation with personal fabric selection, anatomical mapping, and private trial fittings.
                  </p>
                </div>
                <div className="p-4 bg-white/70 border border-gold/20 rounded-sm">
                  <span className="text-gold font-serif text-lg block mb-1">Direct Master Contact</span>
                  <p className="text-charcoal/70">
                    Speak directly with the head cutter at +91 88002 53261 throughout your garment’s creation.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-6 text-xs text-charcoal/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>100% Bespoke Craft</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Free Lifetime Adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: CRAFTSMANSHIP & CONSTRUCTION (INSIDE THE ATELIER)
        docs/website-sections.md: Full canvas, basted stage, hand-finished detailing
        IMAGE 4: image-5.png (Basted fitting with visible white stitches and shears)
        IMAGE 5: image-9.png (Master tailor at cutting table with brass shears and mannequin)
        IMAGE 6: image-11.png (Master tailor inspecting navy shawl lapel dinner jacket basting)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-navy text-ivory relative border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Atelier Benchmark
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-3 mb-6">
              Inside The Cutting Room: The Intermediate Basted Fitting
            </h2>
            <p className="text-sm text-ivory/80 font-sans leading-relaxed">
              No genuine bespoke suit goes straight from scissors to finish. We assemble an intermediate canvas shell in temporary white basting thread to sculpt balance, pitch, and posture on your living body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 4: The Basted Intermediate Fitting */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-5.png",
                  alt: "Intermediate Basted Fitting - The Suit Maker",
                  title: "The Intermediate Basted Fitting",
                  category: "Atelier Stage 02",
                  description:
                    "Temporary cotton basting stitches lock the chest canvas and shoulder pitch for live contour adjustments in our Dwarka cutting room.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 4/21 */}
                <Image
                  src="/assets/image-5.png"
                  alt="Client intermediate basted fitting with tailor shears and chalk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 04 · Basted Shell
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">The Anatomical Baste</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Raw canvas and chalked seams are verified directly on the client to guarantee zero pulling across the back blades.
              </p>
            </div>

            {/* Image 5: Master Tailor with Brass Shears at Cutting Table */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-9.png",
                  alt: "Master Tailor at Cutting Table with Brass Shears",
                  title: "Master Cutter at the Benchmark Table",
                  category: "Artisanal Pattern Cutting",
                  description:
                    "Our head cutter with traditional brass tailor's shears, drafting chalk, and pins, with shelves of pure wool bolts in the background.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 5/21 */}
                <Image
                  src="/assets/image-9.png"
                  alt="Master tailor with brass shears and tape measure at cutting table"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 05 · Cutting Bench
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">Artisanal Shear Work</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Every bolt of wool is chalk-drawn by hand and hand-cut with heavy traditional brass shears to maintain grain tension.
              </p>
            </div>

            {/* Image 6: Basted Shawl-Lapel Tuxedo Construction */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-11.png",
                  alt: "Shawl Lapel Tuxedo Basted Fitting",
                  title: "Formal Shawl Lapel Assembly",
                  category: "Black-Tie Construction",
                  description:
                    "Master tailor inspecting a midnight blue dinner jacket in size 42 with hand-faced satin shawl lapel and basting stitch markers.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 6/21 */}
                <Image
                  src="/assets/image-11.png"
                  alt="Basted shawl lapel dinner jacket on mannequin with master tailor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 06 · Tuxedo Baste
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">Shawl Lapel Geometry</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Precision curving of the evening shawl lapel, hand-stitched to sit flush against the chest with satin silk contrast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: THE FABRIC VAULT (SOURCING & RAW MATERIALS)
        docs/website-sections.md: Elite mill partnerships, natural fibers, silk & brocade
        IMAGE 7: image-2.png (Mint/sage embroidered silk sherwani in studio)
        IMAGE 8: image-6.png (Dusty rose bespoke bandhgala jacket fitting)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Textile Sourcing Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-matte mt-3 mb-6">
              The Fabric Vault: Pure Merino, Raw Silks & Zari Weaves
            </h2>
            <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
              We curate world-class wools, Scottish tweeds, high-twist tropical wools, and heritage Indian brocades—never synthetic poly-blends. Feel the difference of natural breathability and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image 7: Mint Embroidered Silk Sherwani */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-2.png",
                  alt: "Handcrafted Silk Achkan Sherwani",
                  title: "Mint Silk Achkan with Royal Motifs",
                  category: "Fabric Vault · Heritage Silk",
                  description:
                    "Woven from high-density pure raw silk featuring micro-embroidered royal elephant and floral palace motifs, fitted inside our Dwarka studio.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 7/21 */}
                <Image
                  src="/assets/image-2.png"
                  alt="Gentleman in mint embroidered royal silk sherwani with fabric library in background"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-matte/90 px-2.5 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 07 · Royal Mint Silk
                </span>
              </div>
              <h3 className="font-serif text-2xl text-matte mb-2">Heritage Silk Brocades</h3>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                Intricate tone-on-tone embroidery on pure silk weaves, designed for grooms desiring regal heritage without excessive weight.
              </p>
            </div>

            {/* Image 8: Dusty Rose Bespoke Bandhgala */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-6.png",
                  alt: "Dusty Rose Bespoke Bandhgala Jacket Fitting",
                  title: "Dusty Rose Structured Bandhgala",
                  category: "Fabric Vault · Lightweight Wool",
                  description:
                    "Bespoke bandhgala cut in soft pastel rose wool with structured collar and tailored ivory trousers, being verified for sleeve pitch by the tailor.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 8/21 */}
                <Image
                  src="/assets/image-6.png"
                  alt="Client fitting a bespoke dusty rose bandhgala with tailor in studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-matte/90 px-2.5 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 08 · Dusty Rose Bandhgala
                </span>
              </div>
              <h3 className="font-serif text-2xl text-matte mb-2">Contemporary Pastel Wools</h3>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                Modern Indian silhouettes in featherlight Super 130s wools, combining traditional Jodhpuri standing collars with clean European minimalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: THE CUSTOMISATION MATRIX (LAPELS & SILHOUETTES)
        docs/website-sections.md: Lapel architecture, lining artistry, silhouettes
        IMAGE 9: image-12.png (Charcoal 2-piece tailored suit with classic notch lapel)
        IMAGE 10: modern-indian-bandhgala-man.png (Modern charcoal structured Indian Bandhgala)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-matte text-ivory relative border-b border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Customisation Matrix
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-3 mb-6">
              Lapel Geometry & Silhouette Expression
            </h2>
            <p className="text-sm text-ivory/80 font-sans leading-relaxed">
              Every detail is calibrated to your physical stature and personal aesthetic. Compare the clean lines of classical European notch tailoring with the majestic standing collar of the royal Bandhgala.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image 9: Classical Notch Two-Piece Suit */}
            <div
              className="glass-panel-dark p-6 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-12.png",
                  alt: "Classic Notch Lapel Charcoal Two-Piece Suit",
                  title: "The Classical Notch Two-Piece",
                  category: "Customisation Matrix · European Cut",
                  description:
                    "Engineered with a 3.25-inch balanced notch lapel, dual rear vents, flap pockets, and hand-pleated cuffed trousers.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-6 bg-white p-2">
                {/* HOMEPAGE IMAGE 9/21 */}
                <Image
                  src="/assets/image-12.png"
                  alt="Charcoal tailored two-piece suit on invisible mannequin - The Suit Maker"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-matte/90 px-3 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 09 · Notch Lapel Classical Cut
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-2">The Savile Notch Lapel</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed mb-4">
                The quintessential proportion for executive business and daytime diplomacy. Precision step gorge set high on the chest to elongate the torso.
              </p>
              <ul className="text-xs text-gold/90 font-sans space-y-1.5">
                <li>• Balanced 3.25-inch lapel width</li>
                <li>• Bemberg silk anti-static inner lining</li>
                <li>• Slanted ticket pocket customization</li>
              </ul>
            </div>

            {/* Image 10: Modern Indian Bandhgala */}
            <div
              className="glass-panel-dark p-6 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/modern-indian-bandhgala-man.png",
                  alt: "Modern Indian Bandhgala Suit - The Suit Maker",
                  title: "The Modern Charcoal Bandhgala",
                  category: "Customisation Matrix · Indian Royal",
                  description:
                    "A structured high mandarin collar closed with solid metal buttons, paired with pleated trousers in charcoal flannel wool.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-6">
                {/* HOMEPAGE IMAGE 10/21 */}
                <Image
                  src="/assets/modern-indian-bandhgala-man.png"
                  alt="Man in charcoal structured modern Indian Bandhgala suit - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-matte/90 px-3 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 10 · Modern Indian Bandhgala
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-2">The Jodhpuri Mandarin Collar</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed mb-4">
                A seamless marriage of imperial Indian heritage and crisp Western tailoring. The stiffened standing collar frames the jawline with absolute distinction.
              </p>
              <ul className="text-xs text-gold/90 font-sans space-y-1.5">
                <li>• Interlined reinforced collar stand</li>
                <li>• Bespoke metal or covered buttons</li>
                <li>• Custom chest pocket watch slot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 7: THE CAPSULE COLLECTIONS (CURATED WARDROBES)
        docs/website-sections.md: Boardroom, Gala Evening, Wedding, Women's Power, Bridal
        IMAGE 11: image-14.png (Navy suit on walnut wooden hanger - Boardroom Armor)
        IMAGE 12: image-10.png (Ivory dinner jacket on grand marble staircase - Gala Evening)
        IMAGE 13: royal-indian-sherwani.png (Imperial antique gold raw silk sherwani - Royal Wedding)
        IMAGE 14: sculpted-power-suit.png (Charcoal sculpted hourglass power suit - Power Woman)
        IMAGE 15: burgundy-fitted-dress.png (Burgundy silk satin evening gown - Evening Soiree)
        IMAGE 16: royal-indian-lehenga.png (Royal crimson bridal couture lehenga - Haute Bridal)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Capsule Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-matte mt-3 mb-6">
              Curated Wardrobes For High-Stakes Occasions
            </h2>
            <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
              From boardroom diplomacy to grand black-tie galas, imperial royal weddings, and power tailoring for visionary women—explore our signature editions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 11: The Boardroom Armor */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-14.png",
                  alt: "Navy Bespoke Suit on Walnut Hanger",
                  title: "The Boardroom Armor",
                  category: "Capsule Collection 01",
                  description:
                    "Deep imperial navy two-piece suit resting on handcrafted walnut hanger with sky-blue formal shirt and silk foulard tie.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 11/21 */}
                <Image
                  src="/assets/image-14.png"
                  alt="Navy bespoke suit on walnut wooden hanger - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 11 · Boardroom Navy
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">The Boardroom Armor</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                Double-twisted Super 130s merino wool engineered to resist creasing across transatlantic business flights.
              </p>
            </div>

            {/* Image 12: The Gala Evening Tuxedo */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-10.png",
                  alt: "Gentleman in Ivory Dinner Jacket on Marble Staircase",
                  title: "The White-Tie Gala Dinner Jacket",
                  category: "Capsule Collection 02",
                  description:
                    "Ivory single-breasted dinner jacket with silk shawl lapels, black silk bow tie, cummerbund, and patent oxfords on marble stairs.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 12/21 */}
                <Image
                  src="/assets/image-10.png"
                  alt="Gentleman in ivory dinner jacket on marble staircase - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 12 · Gala Ivory Tuxedo
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">The Gala Evening</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                A radiant ivory dinner jacket paired with midnight black trousers, capturing ambient chandeliers at grand banquets.
              </p>
            </div>

            {/* Image 13: Royal Indian Sherwani */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/royal-indian-sherwani.png",
                  alt: "Royal Indian Sherwani in Antique Gold Raw Silk",
                  title: "The Imperial Groom Sherwani",
                  category: "Capsule Collection 03",
                  description:
                    "Hand-embroidered in antique gold zari on pure raw silk, accessorized with multi-strand Basra pearls and ivory dhoti.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 13/21 */}
                <Image
                  src="/assets/royal-indian-sherwani.png"
                  alt="Imperial groom in antique gold raw silk sherwani - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 13 · Royal Sherwani
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">The Imperial Sherwani</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                Royal wedding couture crafted with authentic antique gold threadwork, celebrating Indian bridal majesty.
              </p>
            </div>

            {/* Image 14: Sculpted Women's Power Suit */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/sculpted-power-suit.png",
                  alt: "Sculpted Hourglass Women's Power Suit",
                  title: "The Sculpted X-Silhouette",
                  category: "Capsule Collection 04",
                  description:
                    "Charcoal women's power suit with suppressed waist, high peak lapels, flared trousers, and pure silk camisole.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 14/21 */}
                <Image
                  src="/assets/sculpted-power-suit.png"
                  alt="Model in sculpted charcoal women's power suit - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 14 · Sculpted Power Suit
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">Women’s Power Silhouette</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                Engineered specifically for female executives breaking barriers—blending razor-sharp architecture with feminine grace.
              </p>
            </div>

            {/* Image 15: Burgundy Eveningwear Gown */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/burgundy-fitted-dress.png",
                  alt: "Burgundy Fitted Silk Evening Dress",
                  title: "The Crimson Evening Soirée",
                  category: "Capsule Collection 05",
                  description:
                    "Fluid burgundy silk crepe evening dress featuring asymmetric draped neckline, side slit, and body-sculpting panels.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 15/21 */}
                <Image
                  src="/assets/burgundy-fitted-dress.png"
                  alt="Model in burgundy fitted evening dress - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 15 · Burgundy Evening Gown
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">Haute Eveningwear</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                Custom cocktail and gala dresses hand-draped to flatter movement and command attention at high-profile soirées.
              </p>
            </div>

            {/* Image 16: Royal Indian Bridal Lehenga */}
            <div
              className="bg-white p-4 rounded-sm border border-gold/30 shadow-luxury group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/royal-indian-lehenga.png",
                  alt: "Royal Indian Lehenga in Crimson and Maroon",
                  title: "The Regal Heritage Lehenga",
                  category: "Capsule Collection 06",
                  description:
                    "Multi-paneled bridal masterpiece featuring intricate zardozi, peacock motifs, and dual dupattas in blood-red velvet and silk.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 16/21 */}
                <Image
                  src="/assets/royal-indian-lehenga.png"
                  alt="Bride in royal crimson, maroon and black Indian lehenga - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 16 · Royal Bridal Lehenga
                </span>
              </div>
              <h3 className="font-serif text-xl text-matte mb-1">Haute Bridal Couture</h3>
              <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                Opulent Indian bridalwear tailored with millimeter precision, hand-worked by master karigars for unforgettable ceremonies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 8: THE SARTORIAL FITTING EXPERIENCE (THE REAL PROCESS)
        docs/website-sections.md: Consultation, Pinning, Final Hand-Off
        IMAGE 17: image-3.png (Master tailor with tape measure standing beside client in grey suit)
        IMAGE 18: image-4.png (Master tailor measuring female client in tailored dress)
        IMAGE 19: image-8.png (Master tailor fitting client in sharp charcoal blazer)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-matte text-ivory relative border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Real Atelier Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory mt-3 mb-6">
              The Fitting Room Experience: Precision Hand-Measurements
            </h2>
            <p className="text-sm text-ivory/80 font-sans leading-relaxed">
              Step inside our Ramphal Chowk studio. Experience the genuine dialogue between client and master cutter where posture, shoulder slope, and personal stance are carefully mapped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 17: Master Tailor with Client in Finished Grey Suit */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-3.png",
                  alt: "Master Tailor with Tape Measure Beside Client in Grey Suit",
                  title: "Final Appraisal: Grey Textured Two-Piece",
                  category: "Fitting Journey · Stage 03",
                  description:
                    "Master tailor with measuring tape inspecting the completed drape, balanced lapel roll, and clean trouser break on a satisfied client in the workshop.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 17/21 */}
                <Image
                  src="/assets/image-3.png"
                  alt="Master tailor with tape measure standing beside client in grey suit - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 17 · Final Appraisal
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">Stage 03: Final Appraisal</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Verification of sleeve cuff showing exactly half-an-inch of shirt linen, with crisp clean crease lines down the trouser legs.
              </p>
            </div>

            {/* Image 18: Master Tailor with Female Client in Tailored Sheath Dress */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-4.png",
                  alt: "Master Tailor Measuring Female Client in Tailored Dress",
                  title: "Stage 01: Female Anatomical Consultation",
                  category: "Fitting Journey · Stage 01",
                  description:
                    "Master cutter conducting precision measurement protocol for a custom plaid sheath dress inside The Suit Maker studio.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 18/21 */}
                <Image
                  src="/assets/image-4.png"
                  alt="Master tailor with measuring tape standing beside client in tailored dress - The Suit Maker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 18 · Female Fitting Protocol
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">Stage 01: The Consultation</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Dedicated measurement protocol calibrated for women’s formalwear—ensuring effortless comfort across the bust, waist, and hips.
              </p>
            </div>

            {/* Image 19: Master Tailor with Client in Charcoal Peak Lapel Blazer */}
            <div
              className="glass-panel-dark p-4 rounded-sm border border-gold/30 group cursor-pointer"
              onClick={() =>
                setModalImage({
                  src: "/assets/image-8.png",
                  alt: "Master Tailor Fitting Client in Charcoal Blazer",
                  title: "Stage 02: Peak Lapel Balance Check",
                  category: "Fitting Journey · Stage 02",
                  description:
                    "Master cutter confirming chest buttoning stance and razor-sharp peak lapel roll on a client in our Dwarka fitting room.",
                })
              }
            >
              <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
                {/* HOMEPAGE IMAGE 19/21 */}
                <Image
                  src="/assets/image-8.png"
                  alt="Client trying on tailored charcoal blazer with peak lapels beside master tailor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-matte/90 px-2 py-0.5 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 19 · Peak Lapel Balance
                </span>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">Stage 02: Stance Calibration</h3>
              <p className="text-xs text-ivory/70 font-sans leading-relaxed">
                Adjusting the jacket waist button height relative to the client’s naval to achieve the most commanding athletic proportion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 9 & 10: THE ACCESSORY COMPLEMENT & LUXURY FLAT-LAY
        docs/website-sections.md: Seven-fold ties, leather goods, flat-lay architecture
        IMAGE 20: image-13.png (Luxury flat-lay: charcoal suit, oxford shoes, tie, shears, chalk)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                The Final Flourish
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-matte leading-tight">
                The Accessory Complement: Coordinated Architecture
              </h2>
              <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                Fine tailoring requires harmonic accents. Every accessory in our suite—from seven-fold woven silk ties to French calfskin dress oxfords, full-grain belts, and solid brass shears—is proportioned to complement the house cut.
              </p>

              <div className="space-y-4 pt-2 font-sans text-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5 font-serif font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-matte text-sm">Seven-Fold Pure Silk Ties</h4>
                    <p className="text-charcoal/70">Hand-folded from a single square of silk without synthetic interlining, delivering an unmatched heavy dimple knot.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5 font-serif font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-matte text-sm">Whole-Cut French Calfskin Oxfords</h4>
                    <p className="text-charcoal/70">Seamless single-piece leather dress shoes mirror-polished to reflect formal dinner attire.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5 font-serif font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-matte text-sm">Hand-Rolled Irish Linen Squares</h4>
                    <p className="text-charcoal/70">Contrast-edged pocket squares rolled and stitched entirely by hand by our bench artisans.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/accessories"
                  className="tactile-button inline-flex items-center space-x-2 px-6 py-3 bg-matte text-ivory text-xs uppercase tracking-widest hover:bg-charcoal rounded-sm"
                >
                  <span>Explore All Accessories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </div>

            {/* Image 20: The Luxury Flat-Lay Composition */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className="relative w-full max-w-lg aspect-square bg-white rounded-sm border border-gold/40 p-4 shadow-luxury group cursor-pointer overflow-hidden"
                onClick={() =>
                  setModalImage({
                    src: "/assets/image-13.png",
                    alt: "Luxury Menswear Flat-Lay with Tailor Shears and Accessories",
                    title: "The Editorial Sartorial Flat-Lay",
                    category: "Accessories & Accents",
                    description:
                      "A complete formal wardrobe composition: charcoal suit, crisp poplin shirt, blue silk tie, watch, belt, shears, chalk, and calfskin dress shoes.",
                  })
                }
              >
                {/* HOMEPAGE IMAGE 20/21 */}
                <Image
                  src="/assets/image-13.png"
                  alt="Editorial flat-lay styling: suit, oxford shoes, silk tie, watch, belt, tailor shears and chalk - The Suit Maker"
                  fill
                  className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-matte/90 px-3 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 20 · Sartorial Flat-Lay Suite
                </span>
                <div className="absolute bottom-4 right-4 bg-matte/80 text-gold p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 11: THE YOUNG LEGACY (KIDS' WEAR & GENERATIONAL TAILORING)
        docs/website-sections.md: Generational craft, milestone moments, comfort
        IMAGE 21: image-7.png (Toddler fitted for miniature jacquard tuxedo suit)
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-matte text-ivory relative border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image 21: Toddler Being Fitted for Miniature Jacquard Tuxedo */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div
                className="relative w-full max-w-md aspect-square bg-matte-deep rounded-sm border border-gold/40 p-3 shadow-luxury-dark group cursor-pointer overflow-hidden"
                onClick={() =>
                  setModalImage({
                    src: "/assets/image-7.png",
                    alt: "Toddler Being Fitted for Miniature Jacquard Tuxedo by Tailor",
                    title: "The Young Legacy: Generational Fitting",
                    category: "Kids' Wear · Milestone Attire",
                    description:
                      "Master cutter carefully pinning and adjusting a custom jacquard navy tuxedo suit on a toddler standing on the cutting bench with parents looking on.",
                  })
                }
              >
                {/* HOMEPAGE IMAGE 21/21 */}
                <Image
                  src="/assets/image-7.png"
                  alt="Toddler fitted for miniature jacquard tuxedo suit by master tailor on workshop counter - The Suit Maker"
                  fill
                  className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-matte/90 px-3 py-1 text-[10px] text-gold font-sans uppercase tracking-wider rounded-sm border border-gold/30">
                  Asset 21 · Kids' Milestone Tuxedo
                </span>
                <div className="absolute bottom-4 left-4 right-4 bg-matte/90 backdrop-blur-md p-3 border border-gold/20 rounded-sm">
                  <p className="font-serif text-sm text-ivory">Generational Heritage: Father & Son Tailoring</p>
                  <p className="text-[11px] text-gold/80 font-sans">Crafted with generous growth allowances</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                The Young Legacy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight">
                Outfitting The Next Generation for Life’s Milestones.
              </h2>
              <p className="text-sm text-ivory/80 font-sans leading-relaxed">
                True elegance begins early. We craft downscaled formal wear for boys and girls using the exact same premium natural wools and silks as our adult collections—engineered with soft scratch-free linings and flexible seam allowances that grow with the child.
              </p>

              <div className="space-y-3 pt-2 text-xs font-sans text-ivory/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Hidden seam allowances allow future expanding adjustments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Ultra-soft breathable silk-satin inner linings gentle on skin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Matching father-and-son and mother-and-daughter wedding sets</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/kids-wear"
                  className="tactile-button px-6 py-3 bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light rounded-sm transition-colors"
                >
                  Explore Kids’ Collection
                </Link>

                <button
                  onClick={() => openBooking("Kids' Wear")}
                  className="px-6 py-3 border border-gold/40 text-ivory hover:text-gold text-xs uppercase tracking-widest rounded-sm transition-colors"
                >
                  Book Family Fitting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 12 & 13: THE ATELIER INVITATION & DWArKA STUDIO DIRECTORY
        docs/website-sections.md: Atelier Coordinates, Booking, Verified Info
        ========================================================================
      */}
      <section className="py-24 sm:py-32 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-sm bg-matte text-ivory border border-gold/40 shadow-luxury-dark relative overflow-hidden">
            {/* Ambient Gold Halo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                  Personal Fitting Invitation
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight">
                  Begin Your Sartorial Journey with The Suit Maker.
                </h2>
                <p className="text-sm text-ivory/80 font-sans leading-relaxed">
                  Visit our tailoring studio in Dwarka Sector 7, New Delhi, or reserve an initial consultation with our master cutter to discuss your custom wardrobe, wedding ensemble, or wardrobe alterations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-sans text-xs">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ivory block mb-1">Studio Address</strong>
                      <span className="text-ivory/70 leading-relaxed block">
                        Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, Near Vardhman Mall, Near Om Bikaner Sweets, New Delhi - 110075
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ivory block mb-1">Operating Hours</strong>
                      <span className="text-ivory/70 block">
                        9:30 AM – 10:00 PM
                      </span>
                      <span className="text-gold/80 block mt-0.5">
                        Open all 7 days of the week
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openBooking("General Consultation")}
                    className="tactile-button px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm shadow-gold-glow flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Fitting Session</span>
                  </button>

                  <a
                    href="tel:8800253261"
                    className="tactile-button px-8 py-4 bg-matte-deep border border-gold/40 text-ivory hover:text-gold hover:border-gold font-semibold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call: +91 88002 53261</span>
                  </a>
                </div>
              </div>

              {/* Verified Atelier Card & Quick Contact */}
              <div className="lg:col-span-5 bg-matte-deep/90 border border-gold/30 p-6 sm:p-8 rounded-sm space-y-6">
                <div className="text-center pb-4 border-b border-charcoal">
                  <div className="relative w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden border border-gold/50 p-1 bg-matte">
                    <Image
                      src="/assets/logo.png"
                      alt="The Suit Maker Monogram"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-ivory">The Suit Maker</h3>
                  <p className="text-xs text-gold/80 font-sans uppercase tracking-widest">Dwarka Sector 7 Studio</p>
                </div>

                <div className="space-y-3 text-xs font-sans text-ivory/80">
                  <div className="flex justify-between py-1 border-b border-charcoal/50">
                    <span className="text-ivory/50">Direct Phone:</span>
                    <a href="tel:8800253261" className="text-gold font-medium hover:underline">
                      +91 88002 53261
                    </a>
                  </div>
                  <div className="flex justify-between py-1 border-b border-charcoal/50">
                    <span className="text-ivory/50">Official Web:</span>
                    <span className="text-ivory">thesuitmaker.in</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-charcoal/50">
                    <span className="text-ivory/50">Consultations:</span>
                    <span className="text-ivory">In-Person & WhatsApp</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-charcoal/50">
                    <span className="text-ivory/50">Specialties:</span>
                    <span className="text-right text-ivory/90">Bespoke, Wedding, Alterations</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/918800253261?text=Hello%20The%20Suit%20Maker,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 block text-center rounded-sm bg-gold text-matte font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          src={modalImage.src}
          alt={modalImage.alt}
          title={modalImage.title}
          category={modalImage.category}
          description={modalImage.description}
        />
      )}

      {/* Interactive Consultation / Fitting Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent={selectedIntent}
      />
    </div>
  );
}
