"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function TaxiSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Corps */}
      <rect x="10" y="42" width="170" height="38" rx="6" fill="#FF4C00" />
      {/* Toit */}
      <path d="M50 42 L65 18 L135 18 L152 42 Z" fill="#FF4C00" />
      {/* Vitres */}
      <rect x="66" y="20" width="20" height="20" rx="2" fill="#93c5fd" opacity="0.4" />
      <rect x="90" y="20" width="30" height="20" rx="2" fill="#93c5fd" opacity="0.4" />
      <path d="M122 42 L135 21 L120 20 L120 42 Z" fill="#93c5fd" opacity="0.4" />
      {/* Capot avant */}
      <path d="M152 42 L178 46 L180 64 L152 80 Z" fill="#e64300" />
      {/* Phare */}
      <rect x="174" y="48" width="10" height="8" rx="2" fill="white" opacity="0.9" />
      {/* Feu arrière */}
      <rect x="8" y="52" width="6" height="12" rx="2" fill="#ff9070" />
      {/* Bas de caisse */}
      <rect x="28" y="76" width="145" height="6" rx="2" fill="#cc3a00" />
      {/* Enseigne TAXI */}
      <rect x="85" y="8" width="38" height="12" rx="3" fill="white" />
      <rect x="88" y="11" width="32" height="6" rx="1" fill="#FF4C00" />
      {/* Roue arrière */}
      <circle cx="50" cy="82" r="16" fill="#1a1a1a" />
      <circle cx="50" cy="82" r="9" fill="#2d2d2d" />
      <circle cx="50" cy="82" r="4" fill="#3d3d3d" />
      {/* Roue avant */}
      <circle cx="148" cy="82" r="16" fill="#1a1a1a" />
      <circle cx="148" cy="82" r="9" fill="#2d2d2d" />
      <circle cx="148" cy="82" r="4" fill="#3d3d3d" />
    </svg>
  );
}

function ClientPinSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M28 0C12.5 0 0 12.5 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.5 43.5 0 28 0Z"
        fill="white"
      />
      <circle cx="28" cy="23" r="9" fill="#0F0F0F" />
      <ellipse cx="28" cy="36" rx="13" ry="9" fill="#0F0F0F" />
    </svg>
  );
}

export default function TaxiTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !carRef.current) return;

    gsap.fromTo(
      carRef.current,
      { x: "-200vw" },
      {
        x: "0",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "center center",
          scrub: 1.5,
        },
      },
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[25vh] items-center overflow-hidden bg-[#0F0F0F]"
    >
      {/* Route */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="h-[68px] w-full bg-[#1c1c1c]" />
        {/* Bandes de marquage */}
        <div className="absolute inset-0 flex items-center gap-7 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-10 flex-shrink-0 rounded-full bg-white/20"
            />
          ))}
        </div>
        {/* Bordures route */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#2d2d2d]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#2d2d2d]" />
      </div>

      {/* Taxi — arrive depuis la gauche */}
      <div
        ref={carRef}
        className="absolute right-[30%] top-1/2 flex -translate-y-[60%] flex-col items-center gap-1 md:right-[18%]"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4C00]">
          e-Go Taxi
        </span>
        <TaxiSVG className="w-32 md:w-44" />
      </div>

      {/* Client — fixe à droite */}
      <div className="absolute right-[8%] top-1/2 flex -translate-y-[65%] flex-col items-center gap-1">
        <ClientPinSVG className="w-9 md:w-12" />
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
          Votre client
        </span>
      </div>
    </section>
  );
}
