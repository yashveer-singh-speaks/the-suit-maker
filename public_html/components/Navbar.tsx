"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, Scissors } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Men's", href: "/men-s-tailoring" },
  { name: "Women's", href: "/women-s-tailoring" },
  { name: "Kids' Wear", href: "/kids-wear" },
  { name: "Alteration Services", href: "/alteration-services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Accessories", href: "/accessories" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-matte/90 backdrop-blur-xl border-b border-gold/25 py-3 shadow-luxury-dark"
            : "bg-gradient-to-b from-matte/80 via-matte/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="The Suit Maker Homepage"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/40 p-0.5 bg-matte">
                <Image
                  src="/assets/logo.png"
                  alt="The Suit Maker Crest"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.25em] text-lg sm:text-xl font-medium text-ivory group-hover:text-gold transition-colors">
                  THE SUIT MAKER
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-sans">
                  Savile Row Inspiration
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-sans ${
                      isActive
                        ? "text-gold font-semibold"
                        : "text-ivory/80 hover:text-gold hover:opacity-100"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Phone & Book Appointment */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:8800253261"
                className="flex items-center space-x-1.5 text-xs text-ivory/80 hover:text-gold transition-colors tracking-wider"
                title="Call The Suit Maker"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>8800253261</span>
              </a>

              <Link
                href="/contact-us"
                className="tactile-button inline-flex items-center space-x-2 px-4 py-2 rounded-sm bg-gradient-to-r from-gold/90 to-gold text-matte font-semibold text-xs uppercase tracking-wider hover:from-gold-light hover:to-gold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Fitting</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <Link
                href="/contact-us"
                className="px-2.5 py-1.5 rounded-sm bg-gold text-matte font-semibold text-[11px] uppercase tracking-wider md:hidden"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ivory hover:text-gold focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold" />
                ) : (
                  <Menu className="w-6 h-6 text-ivory" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-matte/98 backdrop-blur-2xl border-b border-gold/20 px-6 pt-6 pb-8 transition-all animate-fadeIn">
            <div className="flex flex-col space-y-3 pb-6 border-b border-charcoal/50">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-widest py-2 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-gold font-bold pl-2 border-l-2 border-gold"
                        : "text-ivory/80 hover:text-gold"
                    }`}
                  >
                    <span>{link.name}</span>
                    <Scissors className="w-3.5 h-3.5 opacity-40 text-gold" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 flex flex-col space-y-4">
              <a
                href="tel:8800253261"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-sm border border-gold/40 text-ivory text-xs uppercase tracking-widest hover:border-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Studio: 8800253261</span>
              </a>

              <a
                href="https://wa.me/918800253261?text=Hello%20The%20Suit%20Maker,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-sm bg-gold text-matte font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>WhatsApp Appointment</span>
              </a>

              <p className="text-[11px] text-ivory/50 text-center font-sans tracking-wide pt-2">
                Dwarka Sector 7, Ramphal Chowk, New Delhi - 110075
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
