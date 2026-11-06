import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YASHVEER | Minimalist Identity",
  description: "The minimalist identity of Yashveer. Stripping away excess to reveal raw architectural focus and sovereign engineering.",
};

export default function YashveerMinimalistPage() {
  return (
    <div className="bg-[#050505] text-ivory min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 selection:bg-gold/30">
      <div className="max-w-4xl mx-auto w-full text-center my-auto py-20">
        <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70 font-mono block mb-8">
          The Sovereign Moniker
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-ivory tracking-[0.15em] font-extralight uppercase select-none">
          YASHVEER
        </h1>
        <p className="max-w-md mx-auto text-xs sm:text-sm text-ivory/60 font-sans tracking-widest mt-8 uppercase font-light leading-relaxed">
          Stripping away excess to reveal raw identity. Zero lag. Zero clutter. Pure architectural logic.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center border-t border-charcoal/40 pt-8 text-[11px] text-ivory/40 font-mono">
        <div className="flex flex-wrap justify-center gap-4 text-gold/80 mb-4">
          <Link href="/yashveer-singh-rajpoot" className="hover:underline">Profile</Link>
          <span>·</span>
          <Link href="/yashveer-labs" className="hover:underline">Yashveer Labs</Link>
          <span>·</span>
          <Link href="/rajpoot-industries" className="hover:underline">Rajpoot Industries</Link>
          <span>·</span>
          <Link href="/the-suit-maker" className="hover:underline">The Suit Maker</Link>
        </div>
        <p>© Yashveer. Authorized Digital Hallmark.</p>
      </div>
    </div>
  );
}
