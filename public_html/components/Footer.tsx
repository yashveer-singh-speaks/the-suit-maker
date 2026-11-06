import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ShieldCheck, Scissors, Sparkles, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0B] text-ivory/80 pt-20 pb-12 border-t border-gold/30 luxury-shadow-box overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gold/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Heritage Banner */}
        <div className="pb-16 mb-16 border-b border-charcoal/60 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center bg-matte-deep text-gold shadow-inner">
              <Scissors className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-serif text-ivory text-base tracking-wide font-medium">Bespoke Mastery</h4>
              <p className="text-xs text-ivory/60 font-sans mt-0.5">Multi-generational tailoring craftsmanship</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center bg-matte-deep text-gold shadow-inner">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-serif text-ivory text-base tracking-wide font-medium">42-Point Precision</h4>
              <p className="text-xs text-ivory/60 font-sans mt-0.5">Individual hand-drafted anatomical patterns</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center bg-matte-deep text-gold shadow-inner">
              <ShieldCheck className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-serif text-ivory text-base tracking-wide font-medium">Full Canvas Promise</h4>
              <p className="text-xs text-ivory/60 font-sans mt-0.5">Natural floating horsehair construction</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-charcoal/60">
          {/* Column 1: House Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/40 p-0.5 bg-matte">
                <Image
                  src="/assets/logo.png"
                  alt="The Suit Maker Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-lg font-medium text-ivory block">
                  THE SUIT MAKER
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80 block">
                  Savile Row Inspiration
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-ivory/70 pt-2 font-sans">
              Specializing in bespoke men’s suits, wedding sherwanis, bandhgalas, luxury women’s tailoring, kids’ formal wear, and precision alteration services in Dwarka, New Delhi.
            </p>

            <div className="pt-2">
              <Link
                href="/the-suit-maker"
                className="inline-flex items-center space-x-2 text-xs text-gold hover:text-gold-light uppercase tracking-widest font-semibold group"
              >
                <span>Read The Brand Manifesto</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Wardrobe & Collections */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-ivory font-semibold mb-5 pb-2 border-b border-gold/20">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/men-s-tailoring" className="hover:text-gold transition-colors block py-0.5">
                  Men’s Bespoke Suits & Tuxedos
                </Link>
              </li>
              <li>
                <Link href="/women-s-tailoring" className="hover:text-gold transition-colors block py-0.5">
                  Women’s Haute Suits & Eveningwear
                </Link>
              </li>
              <li>
                <Link href="/kids-wear" className="hover:text-gold transition-colors block py-0.5">
                  Kids’ Wear & Milestone Ensembles
                </Link>
              </li>
              <li>
                <Link href="/alteration-services" className="hover:text-gold transition-colors block py-0.5">
                  Master Alteration & Reshaping
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors block py-0.5">
                  The Visual Archive & Lookbooks
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="hover:text-gold transition-colors block py-0.5">
                  Silk Ties, Footwear & Accents
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tailoring Craft */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-ivory font-semibold mb-5 pb-2 border-b border-gold/20">
              Sartorial Journey
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              <li className="text-ivory/60">The 42-Point Measurement Protocol</li>
              <li className="text-ivory/60">Basted Intermediate Trial Fitting</li>
              <li className="text-ivory/60">Natural Horsehair Canvas Layer</li>
              <li className="text-ivory/60">Loro Piana & Dormeuil Fabric Vault</li>
              <li className="text-ivory/60">Hand-Stitched Milanese Lapel Holes</li>
              <li>
                <Link href="/contact-us" className="text-gold hover:text-gold-light transition-colors block py-0.5">
                  Schedule Private Fitting Consultation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Atelier Coordinates */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-ivory font-semibold mb-5 pb-2 border-b border-gold/20">
              Dwarka Studio
            </h3>
            <div className="space-y-3.5 text-xs font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-ivory/80 leading-relaxed">
                  Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, Near Vardhman Mall, Near Om Bikaner Sweets, New Delhi - 110075
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:8800253261" className="hover:text-gold text-ivory/90 transition-colors font-medium">
                  +91 88002 53261
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-ivory/70">
                  9:30 AM – 10:00 PM (All 7 Days)
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@thesuitmaker.in" className="hover:text-gold text-ivory/70 transition-colors">
                  info@thesuitmaker.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Footnotes Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 font-sans space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} The Suit Maker. All Rights Reserved. Bespoke Tailoring House, New Delhi.</p>
          <div className="flex space-x-6">
            <Link href="/the-suit-maker" className="hover:text-ivory transition-colors">
              Brand Manifesto
            </Link>
            <Link href="/alteration-services" className="hover:text-ivory transition-colors">
              Care & Alterations
            </Link>
            <Link href="/contact-us" className="hover:text-ivory transition-colors">
              Appointments
            </Link>
          </div>
        </div>

        {/* 
          ========================================================================
          SPECIALIZED ARCHITECTURAL SITE CREDIT IMPLEMENTATION
          Strictly follows docs/site-credit-trick.md and docs/footer.md
          ========================================================================
        */}
        <div className="mt-12 pt-6 border-t border-charcoal/40 text-center relative">
          {/* Functional, visually hidden variant credit navigation nodes strictly matched to #0B0B0B background */}
          <div className="h-0 overflow-hidden opacity-0 pointer-events-none select-none text-[#0B0B0B]">
            <Link href="/yashveer" tabIndex={-1}>yashveer</Link>
            <Link href="/yashveer-singh" tabIndex={-1}>yashveer singh</Link>
            <Link href="/yashveerlabs" tabIndex={-1}>yashveerlabs</Link>
            <Link href="/rajpootindustries" tabIndex={-1}>rajpootindustries</Link>
            <Link href="/yashveer-singh-rajpoot-the-founder-of-yashveer-labs-and-rajpoot-industries" tabIndex={-1}>
              yashveer singh rajpoot the founder of yashveer labs and rajpoot industries
            </Link>
            <Link href="/the-suit-maker" tabIndex={-1}>the suit maker</Link>
          </div>

          {/* The Single Visible Credit Line with active entry points */}
          <p className="text-xs tracking-wider text-ivory/60 font-sans">
            Site Built by{" "}
            <Link
              href="/yashveer-singh-rajpoot"
              className="text-gold/90 hover:text-gold font-medium transition-colors"
            >
              Yashveer Singh Rajpoot
            </Link>{" "}
            the founder of{" "}
            <Link
              href="/yashveer-labs"
              className="text-gold/90 hover:text-gold font-medium transition-colors"
            >
              yashveer labs
            </Link>{" "}
            and{" "}
            <Link
              href="/rajpoot-industries"
              className="text-gold/90 hover:text-gold font-medium transition-colors"
            >
              rajpoot industries
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
