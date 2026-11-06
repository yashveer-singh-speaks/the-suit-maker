"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Bespoke Suit");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and phone number.");
      return;
    }

    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C6A15B", "#F8F3E8", "#0B1F3A"],
      });
    } catch {}

    const formattedText = encodeURIComponent(
      `Hello The Suit Maker Studio,\n\nI would like to inquire about an appointment:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Preferred Date:* ${date || "Earliest Available"}\n*Inquiry Notes:* ${message || "General consultation"}\n\nThank you!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/918800253261?text=${formattedText}`, "_blank");
    }, 1000);
  };

  return (
    <div className="bg-ivory text-matte min-h-screen pt-24 pb-20">
      {/* 
        ========================================================================
        HERO SECTION: OPEN COMMUNICATION & WELCOME
        ========================================================================
      */}
      <section className="relative py-16 sm:py-24 bg-matte text-ivory border-b border-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Atelier Coordinates & Consultations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory leading-tight mt-2 mb-4 font-normal">
            Visit The Dwarka Flagship Studio
          </h1>
          <p className="text-sm sm:text-base text-ivory/80 font-sans max-w-2xl mx-auto leading-relaxed">
            We welcome personal consultations, fabric viewings, bespoke suit fittings, and wardrobe alterations at our multi-generational tailoring atelier in Dwarka Sector 7, New Delhi.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        MAIN CONTACT GRID: VERIFIED DETAILS & INTERACTIVE FORM
        ========================================================================
      */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Verified Business Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-gold/30 shadow-luxury">
              <h2 className="font-serif text-2xl text-matte mb-6 pb-2 border-b border-gold/20">
                Verified Atelier Information
              </h2>

              <div className="space-y-6 text-xs sm:text-sm font-sans text-charcoal">
                {/* Primary Address */}
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-matte block font-medium">Primary Flagship Address</strong>
                    <p className="text-charcoal/80 leading-relaxed mt-0.5">
                      Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, Near Vardhman Mall, Near Om Bikaner Sweets, New Delhi - 110075, India.
                    </p>
                    <p className="text-[11px] text-charcoal/60 mt-1 italic">
                      (Alternate listing: Shop No. E-558, V Mart, Above Fashion Lover Shop, Ramphal Chowk Road)
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-matte block font-medium">Direct Master Tailor Line</strong>
                    <a
                      href="tel:8800253261"
                      className="text-gold font-bold hover:underline text-base block mt-0.5"
                    >
                      +91 88002 53261 / 8800253261
                    </a>
                    <span className="text-[11px] text-charcoal/60">Available for calls and direct WhatsApp</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-matte block font-medium">Operating Hours</strong>
                    <p className="text-charcoal/80 mt-0.5">
                      9:30 AM – 10:00 PM
                    </p>
                    <span className="text-gold font-medium text-xs block">
                      Open All 7 Days of the Week
                    </span>
                  </div>
                </div>

                {/* Email & Web */}
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-matte block font-medium">Digital Channels</strong>
                    <a
                      href="mailto:info@thesuitmaker.in"
                      className="text-charcoal/80 hover:text-gold block"
                    >
                      info@thesuitmaker.in
                    </a>
                    <span className="text-charcoal/60 text-xs block">
                      Official: https://thesuitmaker.in/
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-charcoal/10">
                <a
                  href="https://wa.me/918800253261?text=Hello%20The%20Suit%20Maker,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-gold-glow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Guarantee */}
            <div className="glass-panel p-6 rounded-sm border border-gold/30 space-y-3 text-xs font-sans">
              <h3 className="font-serif text-lg text-matte font-medium">The Suit Maker Promise</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Multi-generational pattern masters. We never rush a client fitting. Every appointment includes fabric appraisal, styling advice, and 42 anatomical measurements.
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Appointment & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-matte p-8 sm:p-10 rounded-sm border border-gold/40 shadow-luxury-dark text-ivory">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                      Online Appointment & Inquiries
                    </span>
                    <h2 className="font-serif text-3xl text-ivory mt-1">
                      Reserve Your Sartorial Session
                    </h2>
                    <p className="text-xs text-ivory/70 font-sans mt-2">
                      Submit your details below. Our team formats and confirms your fitting with the head cutter immediately.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
                    <div>
                      <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Yashveer Singh"
                        className="w-full px-4 py-3 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                          Phone Number (WhatsApp Preferred) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                          Sartorial Service Intent *
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm text-sm"
                        >
                          <option value="Bespoke Suit">Bespoke 2-Piece / 3-Piece Suit</option>
                          <option value="Tuxedo & Eveningwear">Tuxedo & Formal Eveningwear</option>
                          <option value="Royal Wedding Sherwani">Royal Indian Sherwani</option>
                          <option value="Bandhgala / Jodhpuri">Modern Indian Bandhgala</option>
                          <option value="Women's Tailoring">Women’s Power Suit / Haute Gown</option>
                          <option value="Kids' Wear">Kids’ Formalwear / Occasionwear</option>
                          <option value="Alteration Services">Garment Alteration & Reshaping</option>
                          <option value="Corporate / Group Fitting">Corporate / Wedding Party Group</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                        Preferred Fitting Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                        Timeline & Style Notes
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your upcoming event date, desired fabric, or any specific styling preferences..."
                        className="w-full px-4 py-3 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-gold-glow flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Booking & Connect via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-ivory/50 pt-2 font-sans">
                      Your privacy is protected. We will never share your personal contact information.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-ivory">Inquiry Dispatched</h3>
                  <p className="text-xs sm:text-sm text-ivory/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gold">{name}</strong>. Your appointment request for <strong className="text-ivory">{service}</strong> has been transmitted to our senior tailoring desk.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:8800253261"
                      className="px-6 py-3 rounded-sm bg-gold text-matte font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
                    >
                      Call Desk: +91 88002 53261
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-sm border border-charcoal text-ivory/80 text-xs uppercase tracking-wider hover:text-ivory"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        INTERACTIVE MAP SECTION: DWARKA SECTOR 7, NEW DELHI
        ========================================================================
      */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gold/20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Locate The Atelier
          </span>
          <h2 className="font-serif text-3xl text-matte mt-1 mb-3">
            Interactive Studio Map: Ramphal Chowk, Dwarka
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-sans">
            Conveniently situated in the heart of Ramphal Chowk, Dwarka Sector 7, near Vardhman Mall and Om Bikaner Sweets.
          </p>
        </div>

        <div className="w-full h-96 rounded-sm overflow-hidden border border-gold/40 shadow-luxury bg-matte-deep relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2285117366367!2d77.06788577615024!3d28.582390886548777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b111e1f1bb5%3A0x6b4ef8fa1943f550!2sRamphal%20Chowk%20Rd%2C%20Sector%207%20Dwarka%2C%20Dwarka%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Suit Maker Studio Location in Ramphal Chowk, Dwarka Sector 7, New Delhi"
          />
        </div>
      </section>
    </div>
  );
}
