"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, Calendar, Phone, ArrowRight, Eye, Sparkles } from "lucide-react";
import ImageModal from "@/components/ImageModal";
import EnquiryModal from "@/components/EnquiryModal";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "all" | "suits" | "indian" | "womens" | "kids" | "atelier";
  categoryLabel: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/assets/image-1.png",
    alt: "Midnight Navy Three-Piece Bespoke Suit",
    title: "The Sovereign Three-Piece Suit",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Super 150s merino wool with floating canvas, tailored vest, and Milanese buttonhole lapel.",
  },
  {
    id: "g2",
    src: "/assets/black-suit-man.png",
    alt: "The Obsidian Black Bespoke Suit",
    title: "The Obsidian Black Commission",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Monochrome boardroom tailoring featuring high structured shoulder and suppressed athletic waist.",
  },
  {
    id: "g3",
    src: "/assets/image-10.png",
    alt: "Ivory Gala Dinner Jacket on Marble Stairs",
    title: "The White-Tie Gala Dinner Jacket",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Hand-faced satin shawl lapels in radiant ivory paired with midnight black trousers.",
  },
  {
    id: "g4",
    src: "/assets/image-12.png",
    alt: "Classical Notch Two-Piece Suit",
    title: "Classical Charcoal Notch Two-Piece",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Precision 3.25-inch notch lapel with cuffed trousers and genuine horn buttons.",
  },
  {
    id: "g5",
    src: "/assets/image-14.png",
    alt: "Navy Bespoke Suit on Walnut Wooden Hanger",
    title: "The Boardroom Armor on Walnut Hanger",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Double-twisted wool suiting presented on solid walnut coat hanger with silk tie.",
  },
  {
    id: "g6",
    src: "/assets/royal-indian-sherwani.png",
    alt: "Imperial Royal Indian Sherwani in Raw Silk",
    title: "Imperial Antique Gold Sherwani",
    category: "indian",
    categoryLabel: "Imperial Indian",
    description: "Opulent raw silk sherwani embroidered in antique gold threadwork with Basra pearls.",
  },
  {
    id: "g7",
    src: "/assets/modern-indian-bandhgala-man.png",
    alt: "Modern Charcoal Indian Bandhgala Suit",
    title: "Modern Charcoal Bandhgala",
    category: "indian",
    categoryLabel: "Imperial Indian",
    description: "Structured high mandarin collar closed with metal buttons in charcoal flannel.",
  },
  {
    id: "g8",
    src: "/assets/image-2.png",
    alt: "Mint Embroidered Silk Achkan in Studio",
    title: "Mint Silk Palace Motif Achkan",
    category: "indian",
    categoryLabel: "Imperial Indian",
    description: "Handcrafted mint silk sherwani with elephant motifs fitted inside our Dwarka studio.",
  },
  {
    id: "g9",
    src: "/assets/image-6.png",
    alt: "Dusty Rose Bespoke Bandhgala Fitting",
    title: "Dusty Rose Structured Bandhgala",
    category: "indian",
    categoryLabel: "Imperial Indian",
    description: "Pastel rose tailored jacket with standing collar being inspected by the master cutter.",
  },
  {
    id: "g10",
    src: "/assets/sculpted-power-suit.png",
    alt: "Sculpted Hourglass Women's Power Suit",
    title: "The Sculpted X-Silhouette",
    category: "womens",
    categoryLabel: "Women’s Haute",
    description: "Charcoal power suit with suppressed waist, high peak lapels, and flared trousers.",
  },
  {
    id: "g11",
    src: "/assets/burgundy-fitted-dress.png",
    alt: "Burgundy Fitted Silk Evening Dress",
    title: "The Crimson Evening Soirée Gown",
    category: "womens",
    categoryLabel: "Women’s Haute",
    description: "Fluid burgundy silk crepe gown with asymmetric draped neckline and side slit.",
  },
  {
    id: "g12",
    src: "/assets/royal-indian-lehenga.png",
    alt: "Royal Indian Bridal Lehenga in Crimson & Maroon",
    title: "Regal Heritage Bridal Lehenga",
    category: "womens",
    categoryLabel: "Women’s Haute",
    description: "Multi-paneled velvet and silk bridal masterpiece embroidered in authentic zardozi.",
  },
  {
    id: "g13",
    src: "/assets/image-4.png",
    alt: "Female Client in Tailored Sheath Dress with Master Tailor",
    title: "Bespoke Sheath Dress Fitting",
    category: "womens",
    categoryLabel: "Women’s Haute",
    description: "Custom plaid sheath dress measured and fitted directly inside our Ramphal Chowk studio.",
  },
  {
    id: "g14",
    src: "/assets/image-7.png",
    alt: "Toddler Being Fitted for Miniature Jacquard Tuxedo",
    title: "The Young Legacy Milestone Tuxedo",
    category: "kids",
    categoryLabel: "Kids’ Wear",
    description: "Master cutter adjusting miniature jacquard tuxedo suit for a young gentleman.",
  },
  {
    id: "g15",
    src: "/assets/founder-portrait.png",
    alt: "The Master Cutter and Founder Seated in Ivory Suit",
    title: "The Master Cutter & Founder",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Head cutter of The Suit Maker seated in hand-tailored ivory pinstripe two-piece suit.",
  },
  {
    id: "g16",
    src: "/assets/image-9.png",
    alt: "Master Tailor with Brass Shears at Cutting Bench",
    title: "The Cutter's Bench & Brass Shears",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Artisanal shear work, drafting chalk, and bolts of pure merino wool in the cutting room.",
  },
  {
    id: "g17",
    src: "/assets/image-5.png",
    alt: "Intermediate Basted Fitting with Shears and Chalk",
    title: "The Anatomical Basted Fitting",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Temporary basting stitches and raw floating canvas trial fitting in the studio.",
  },
  {
    id: "g18",
    src: "/assets/image-11.png",
    alt: "Navy Shawl Lapel Dinner Jacket Baste",
    title: "Dinner Jacket Shawl Lapel Baste",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Master tailor inspecting size 42 navy dinner jacket with white basting threads.",
  },
  {
    id: "g19",
    src: "/assets/image-3.png",
    alt: "Master Tailor Beside Client in Grey Textured Suit",
    title: "Final Appraisal: Grey Textured Two-Piece",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Completed bespoke grey suit verified for posture, sleeve length, and break.",
  },
  {
    id: "g20",
    src: "/assets/image-8.png",
    alt: "Master Tailor Fitting Client in Peak Lapel Blazer",
    title: "Peak Lapel Stance Calibration",
    category: "atelier",
    categoryLabel: "Atelier & Lineage",
    description: "Checking buttoning point and lapel roll on client trying on charcoal blazer.",
  },
  {
    id: "g21",
    src: "/assets/image-13.png",
    alt: "Sartorial Flat-Lay with Tailor Shears and Accessories",
    title: "The Editorial Wardrobe Flat-Lay",
    category: "suits",
    categoryLabel: "Bespoke Suiting",
    description: "Complete ensemble: charcoal suit, oxford shoes, silk tie, watch, belt, shears, chalk.",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [modalImage, setModalImage] = useState<GalleryItem | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            The Living Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight mt-2 mb-4 font-normal">
            The Sartorial Visual Gallery
          </h1>
          <p className="text-sm sm:text-base text-ivory/80 font-sans max-w-2xl mx-auto leading-relaxed">
            A curated photographic exhibition of bespoke commissions, regal Indian wedding couture, women’s power tailoring, and behind-the-scenes artisanal benchwork from our Dwarka atelier.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
            {[
              { label: "All Works (21)", val: "all" },
              { label: "Bespoke Suiting", val: "suits" },
              { label: "Imperial Indian", val: "indian" },
              { label: "Women’s Haute", val: "womens" },
              { label: "Kids’ Wear", val: "kids" },
              { label: "Atelier & Craft", val: "atelier" },
            ].map((btn) => (
              <button
                key={btn.val}
                onClick={() => setFilter(btn.val)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-widest transition-all font-sans ${
                  filter === btn.val
                    ? "bg-gold text-matte font-bold border border-gold shadow-gold-glow"
                    : "bg-matte-deep text-ivory/70 border border-charcoal/80 hover:border-gold/60"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        GALLERY GRID
        ========================================================================
      */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalImage(item)}
              className="group relative bg-white rounded-sm border border-gold/30 shadow-luxury overflow-hidden cursor-pointer hover:border-gold transition-all duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-matte-deep">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte/90 via-matte/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg text-ivory mt-1">{item.title}</h3>
                  <p className="text-xs text-ivory/80 font-sans line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center space-x-1 text-gold text-xs font-semibold">
                    <span>Inspect Masterpiece</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-gold/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gold uppercase tracking-wider block font-sans">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-base text-matte font-medium">{item.title}</h4>
                </div>
                <Maximize2 className="w-4 h-4 text-charcoal/40 group-hover:text-gold transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        CALL TO ACTION
        ========================================================================
      */}
      <section className="py-20 bg-matte text-ivory border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Commission a Piece
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory">
            Recreate or Customize Any Look
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed max-w-xl mx-auto">
            Found a silhouette or fabric in our archive that resonates with your vision? Visit our Dwarka Sector 7 studio or discuss bespoke replication with the master cutter.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="tactile-button px-8 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Inquire About Archive Look
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

      {/* Lightbox Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          src={modalImage.src}
          alt={modalImage.alt}
          title={modalImage.title}
          category={modalImage.categoryLabel}
          description={modalImage.description}
        />
      )}

      {/* Booking Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultIntent="Gallery Inquired Look"
      />
    </div>
  );
}
