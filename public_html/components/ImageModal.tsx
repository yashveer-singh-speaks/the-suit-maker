"use client";

import React from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  title,
  category,
  description,
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-matte/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row bg-matte border border-gold/40 rounded-sm overflow-hidden shadow-luxury-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-matte/70 text-ivory/80 hover:text-gold transition-colors"
          aria-label="Close image modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Preview Container */}
        <div className="relative w-full md:w-3/5 h-80 sm:h-96 md:h-auto min-h-[400px] bg-matte-deep flex items-center justify-center p-4">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-2"
            priority
          />
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-charcoal/80 bg-matte/95">
          <div>
            {category && (
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold block mb-1">
                {category}
              </span>
            )}
            <h3 className="font-serif text-2xl text-ivory mb-3">
              {title || alt}
            </h3>
            {description && (
              <p className="text-xs text-ivory/70 leading-relaxed font-sans mb-6">
                {description}
              </p>
            )}

            <div className="space-y-3 pt-4 border-t border-charcoal/60 text-xs font-sans text-ivory/80">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>House: The Suit Maker</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Atelier: Dwarka Sector 7, New Delhi</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Craft: Bespoke Hand-Cut & Finished</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="tel:8800253261"
              className="w-full block text-center py-2.5 rounded-sm bg-gold text-matte font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Inquire About This Garment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
