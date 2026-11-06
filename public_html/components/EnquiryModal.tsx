"use client";

import React, { useState } from "react";
import { X, Check, Phone, MessageSquare, Calendar, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultIntent = "Bespoke Suit" }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState(defaultIntent);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dispatchMethod, setDispatchMethod] = useState<"whatsapp" | "phone">("whatsapp");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and contact phone number.");
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

    const message = encodeURIComponent(
      `Hello The Suit Maker,\n\nI would like to book a private fitting consultation.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${intent}\n*Preferred Date:* ${date || "Earliest Available"}\n*Notes:* ${notes || "None"}\n\nThank you!`
    );

    if (dispatchMethod === "whatsapp") {
      setTimeout(() => {
        window.open(`https://wa.me/918800253261?text=${message}`, "_blank");
      }, 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-matte/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-matte border border-gold/40 rounded-sm shadow-luxury-dark p-6 sm:p-8 text-ivory">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ivory/60 hover:text-gold transition-colors"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Private Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory mt-1">
                Schedule Atelier Fitting
              </h3>
              <p className="text-xs text-ivory/70 font-sans mt-2">
                At our Dwarka Sector 7 studio or discuss bespoke requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
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
                  className="w-full px-3 py-2.5 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2.5 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                    Garment Intent
                  </label>
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="w-full px-3 py-2.5 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm"
                  >
                    <option value="Bespoke Suit">Bespoke 2-Piece / 3-Piece Suit</option>
                    <option value="Tuxedo & Eveningwear">Tuxedo & Formal Eveningwear</option>
                    <option value="Wedding Sherwani">Royal Wedding Sherwani</option>
                    <option value="Bandhgala / Jodhpuri">Modern Indian Bandhgala</option>
                    <option value="Women's Tailoring">Women’s Power Suit / Dress</option>
                    <option value="Kids' Wear">Kids’ Milestone Tailoring</option>
                    <option value="Alteration Services">Garment Alteration & Reshaping</option>
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
                  className="w-full px-3 py-2.5 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-ivory/80 uppercase tracking-wider mb-1 font-medium">
                  Style Preferences / Measurement Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Fabric choice, upcoming event date, fitting preferences..."
                  className="w-full px-3 py-2 bg-matte-deep border border-charcoal focus:border-gold outline-none text-ivory transition-colors rounded-sm"
                />
              </div>

              <div className="pt-2">
                <label className="block text-[11px] text-ivory/60 mb-2 uppercase tracking-wider">
                  Dispatch Preference:
                </label>
                <div className="flex space-x-4 mb-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="dispatch"
                      checked={dispatchMethod === "whatsapp"}
                      onChange={() => setDispatchMethod("whatsapp")}
                      className="accent-[#C6A15B]"
                    />
                    <span className="text-ivory/90">Instant WhatsApp Booking (Recommended)</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-matte font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-gold-glow flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit Appointment Request</span>
                </button>
              </div>

              <div className="text-center pt-2 text-[11px] text-ivory/50">
                Or call directly at{" "}
                <a href="tel:8800253261" className="text-gold font-medium hover:underline">
                  +91 88002 53261
                </a>{" "}
                (Open 9:30 AM – 10:00 PM)
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-2xl text-ivory">Request Initiated</h4>
            <p className="text-xs text-ivory/70 leading-relaxed max-w-sm mx-auto font-sans">
              Thank you, <span className="text-gold font-semibold">{name}</span>. Your consultation request for <span className="text-ivory font-medium">{intent}</span> has been formatted. Our master tailor will review your requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:8800253261`}
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-sm border border-gold text-gold text-xs uppercase tracking-wider hover:bg-gold hover:text-matte transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio: 8800253261</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-sm bg-matte-deep text-ivory/70 border border-charcoal text-xs uppercase tracking-wider hover:text-ivory transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
