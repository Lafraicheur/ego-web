"use client";

import { useState } from "react";
import { EGoLogo } from "@/components/EGoLogo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white/80 backdrop-blur-sm md:relative md:bg-transparent md:backdrop-blur-none md:-mb-28">
        <div className="flex items-center justify-between px-4 py-3 md:px-12 md:py-5">
          <EGoLogo className="z-10" />

          {/* Hamburger (mobile uniquement) */}
          <button
            className="z-[60] flex flex-col gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${open ? "translate-y-2 rotate-45 bg-white" : "bg-gray-900"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${open ? "opacity-0" : "bg-gray-900"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45 bg-white" : "bg-gray-900"}`} />
          </button>
        </div>
      </header>

      {/* Overlay plein écran */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0F0F] transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          <a
            href="#how"
            onClick={() => setOpen(false)}
            className={`text-4xl font-black uppercase tracking-widest text-white transition-all duration-500 hover:text-[#FF4C00] ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "150ms" : "0ms" }}
          >
            Comment ça marche
          </a>

          <a
            href="#download"
            onClick={() => setOpen(false)}
            className={`rounded-full bg-[#FF4C00] px-10 py-4 text-2xl font-black uppercase tracking-widest text-white transition-all duration-500 hover:bg-[#e04400] ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "250ms" : "0ms" }}
          >
            Télécharger
          </a>
        </nav>

        {/* Déco bas de page */}
        <p
          className={`absolute bottom-10 text-xs font-medium uppercase tracking-widest text-white/30 transition-all duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: open ? "350ms" : "0ms" }}
        >
          e-Go — Abidjan
        </p>
      </div>
    </>
  );
}
