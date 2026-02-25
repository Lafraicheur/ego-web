"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00000000]">
          e-Go Taxi
        </span>
        <Image
          src="/taxi.png"
          alt="e-Go Taxi"
          width={176}
          height={88}
          className="w-32 md:w-44"
        />
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
