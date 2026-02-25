"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── Nuages ───────────────────────────────────────────────────

function CloudShape({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 320 160"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="160" cy="120" rx="150" ry="48" fill="currentColor" />
      <circle cx="85"  cy="88"  r="62" fill="currentColor" />
      <circle cx="165" cy="65"  r="72" fill="currentColor" />
      <circle cx="248" cy="90"  r="55" fill="currentColor" />
    </svg>
  );
}

// position / taille / délai d'animation de chaque nuage
const CLOUDS = [
  { top: "5%",  left: "48%", w: 440, opacity: 0.75, duration: 5,   delay: 0   },
  { top: "22%", left: "68%", w: 280, opacity: 0.55, duration: 6.5, delay: 1.2 },
  { top: "55%", left: "42%", w: 380, opacity: 0.65, duration: 7,   delay: 2.5 },
  { top: "68%", left: "64%", w: 300, opacity: 0.50, duration: 5.5, delay: 0.8 },
  { top: "38%", left: "30%", w: 200, opacity: 0.40, duration: 8,   delay: 3.5 },
];

// ─── Écrans mockup ────────────────────────────────────────────

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center px-4 py-2",
        dark ? "bg-[#0F0F0F]" : "bg-white",
      )}
    >
      <div
        className={clsx(
          "h-4 w-20 rounded-full",
          dark ? "bg-[#1a1a1a]" : "bg-gray-100",
        )}
      />
    </div>
  );
}

// Feature 0 — Clients à proximité (e-Go Taxi)
function Screen0() {
  return (
    <div className="flex h-full flex-col bg-[#0F0F0F]">
      <StatusBar dark />
      <div className="flex items-center gap-2 bg-[#FF4C00] px-4 py-2">
        <span className="text-xs font-bold text-white">e-Go Taxi</span>
        <span className="ml-auto text-[9px] text-white/60">Abidjan</span>
      </div>
      <div className="relative flex-1 bg-[#111]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#FF4C00 1px, transparent 1px), linear-gradient(90deg, #FF4C00 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {[
          { top: "20%", left: "28%" },
          { top: "38%", left: "64%" },
          { top: "58%", left: "42%" },
          { top: "18%", left: "68%" },
          { top: "68%", left: "22%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={pos}
          >
            <div className="absolute inset-0 animate-ping rounded-full bg-white/40" />
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full bg-[#FF4C00] px-2 py-1 text-[8px] font-bold text-white shadow-lg">
            VOUS
          </div>
        </div>
      </div>
      <div className="bg-[#0F0F0F] px-4 py-3">
        <p className="text-[10px] text-white/50">5 clients cherchent un taxi</p>
        <button className="mt-2 w-full rounded-lg bg-[#FF4C00] py-2 text-xs font-bold text-white">
          Voir les clients
        </button>
      </div>
    </div>
  );
}

// Feature 1 — Taxis disponibles (e-Go Client)
function Screen1() {
  return (
    <div className="flex h-full flex-col bg-[#0F0F0F]">
      <StatusBar dark />
      <div className="flex items-center border-b border-white/10 bg-[#0F0F0F] px-4 py-2">
        <span className="text-xs font-bold text-[#FF4C00]">e-Go</span>
        <span className="ml-auto text-[9px] text-white/40">Abidjan</span>
      </div>
      <div className="relative flex-1 bg-[#111]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {[
          { top: "18%", left: "24%" },
          { top: "32%", left: "62%" },
          { top: "54%", left: "28%" },
          { top: "64%", left: "68%" },
          { top: "14%", left: "54%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4C00] px-1.5 py-0.5 text-[8px]"
            style={pos}
          >
            🚕
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-4 w-4 rounded-full border-2 border-[#FF4C00] bg-white" />
        </div>
      </div>
      <div className="bg-[#0F0F0F] px-4 py-3">
        <p className="text-[10px] text-white/50">5 taxis autour de vous</p>
        <button className="mt-2 w-full rounded-lg bg-white py-2 text-xs font-bold text-[#0F0F0F]">
          Trouver un taxi
        </button>
      </div>
    </div>
  );
}

// Feature 2 — Prix face à face (e-Go Taxi)
function Screen2() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="bg-[#FF4C00] px-4 py-3">
        <p className="text-[10px] text-white/70">Proposition de prix</p>
        <p className="text-2xl font-black text-white">2 500 FCFA</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4C00]/20 text-lg">
              🧑
            </div>
            <span className="text-[9px] text-gray-500">Conducteur</span>
          </div>
          <div className="mx-2 flex flex-1 items-center gap-1">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-[8px] text-gray-400">ACCORD</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg">
              👤
            </div>
            <span className="text-[9px] text-gray-500">Client</span>
          </div>
        </div>
        <div className="w-full rounded-xl bg-orange-50 p-3">
          <p className="text-[9px] text-gray-500">Plateau → Cocody</p>
          <p className="mt-0.5 text-[10px] font-semibold text-gray-700">
            Durée estimée : 18 min
          </p>
        </div>
      </div>
      <div className="flex gap-2 px-4 pb-4">
        <button className="flex-1 rounded-lg border border-gray-200 py-2 text-xs text-gray-500">
          Refuser
        </button>
        <button className="flex-1 rounded-lg bg-[#FF4C00] py-2 text-xs font-bold text-white">
          Accepter
        </button>
      </div>
    </div>
  );
}

// Feature 3 — Partagez votre course (e-Go Client)
function Screen3() {
  return (
    <div className="flex h-full flex-col bg-[#0F0F0F]">
      <StatusBar dark />
      <div className="border-b border-white/10 px-4 py-2">
        <p className="text-xs font-bold text-white">Votre course</p>
        <p className="text-[9px] text-white/40">En cours · 12 min restantes</p>
      </div>
      <div className="relative mx-4 mt-3 h-24 overflow-hidden rounded-xl bg-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 96"
          fill="none"
        >
          <path
            d="M20 76 Q60 30 100 50 Q140 70 180 20"
            stroke="#FF4C00"
            strokeWidth="2.5"
            strokeDasharray="5,3"
          />
          <circle cx="20" cy="76" r="5" fill="#FF4C00" />
          <circle cx="180" cy="20" r="5" fill="white" />
        </svg>
      </div>
      <div className="flex-1 px-4 py-3">
        <p className="mb-2 text-[10px] text-white/40">Partager avec</p>
        <div className="flex gap-2">
          {["👩", "👨", "👦", "👧"].map((e, i) => (
            <div
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base"
            >
              {e}
            </div>
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white/20 text-lg text-white/30">
            +
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button className="w-full rounded-lg bg-white py-2 text-xs font-bold text-[#0F0F0F]">
          Envoyer le lien
        </button>
      </div>
    </div>
  );
}

// Feature 4 — Tableau de bord (e-Go Taxi)
function Screen4() {
  const bars = [60, 40, 80, 55, 70, 45, 90];
  return (
    <div className="flex h-full flex-col bg-[#FFF3EE]">
      <StatusBar />
      <div className="bg-[#FF4C00] px-4 py-3">
        <p className="text-[10px] text-white/70">Tableau de bord</p>
        <p className="text-sm font-black text-white">Aujourd'hui</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[8px] uppercase text-gray-400">Courses</p>
          <p className="text-2xl font-black text-[#FF4C00]">12</p>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[8px] uppercase text-gray-400">Revenus</p>
          <p className="text-lg font-black text-[#0F0F0F]">34 500</p>
          <p className="text-[8px] text-gray-400">FCFA</p>
        </div>
      </div>
      <div className="flex-1 px-3">
        <p className="mb-2 text-[9px] text-gray-400">Cette semaine</p>
        <div className="flex h-16 items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#FF4C00] opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between">
          {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
            <span
              key={i}
              className="flex-1 text-center text-[7px] text-gray-400"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature 5 — Historique des trajets (e-Go Client)
function Screen5() {
  const trips = [
    { from: "Cocody", to: "Plateau", price: "1 500", time: "08:30" },
    { from: "Yopougon", to: "Adjamé", price: "2 200", time: "11:15" },
    { from: "Treichville", to: "Marcory", price: "900", time: "16:45" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#0F0F0F]">
      <StatusBar dark />
      <div className="border-b border-white/10 px-4 py-2">
        <p className="text-xs font-bold text-white">Mes trajets</p>
        <p className="text-[9px] text-white/40">3 courses cette semaine</p>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden px-3 py-2">
        {trips.map((trip, i) => (
          <div key={i} className="rounded-xl bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF4C00]" />
                <span className="text-[10px] text-white">{trip.from}</span>
                <span className="text-[8px] text-white/30">→</span>
                <span className="text-[10px] text-white">{trip.to}</span>
              </div>
              <span className="text-[10px] font-bold text-[#FF4C00]">
                {trip.price} F
              </span>
            </div>
            <p className="mt-1 text-[8px] text-white/30">{trip.time} · Terminé</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <button className="w-full rounded-lg border border-white/10 py-2 text-xs text-white/50">
          Voir tout l'historique
        </button>
      </div>
    </div>
  );
}

const SCREENS = [Screen0, Screen1, Screen2, Screen3, Screen4, Screen5];

// ─── Composant principal ───────────────────────────────────────

type FeaturesProps = {
  items: { tag?: string; heading: string; body: string }[];
};

export default function Features({ items }: FeaturesProps) {
  const outerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIndex = useRef(0);

  useGSAP(() => {
    if (!outerRef.current) return;

    // État initial : seul le premier item est visible
    textRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
    });
    screenRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0 });
    });
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        width: i === 0 ? "24px" : "8px",
        backgroundColor: i === 0 ? "#FF4C00" : "#d1c4bc",
      });
    });

    ScrollTrigger.create({
      trigger: outerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const newIndex = Math.min(
          items.length - 1,
          Math.floor(self.progress * items.length),
        );
        if (newIndex === currentIndex.current) return;

        const prev = currentIndex.current;

        gsap.killTweensOf(textRefs.current[prev]);
        gsap.killTweensOf(textRefs.current[newIndex]);
        gsap.killTweensOf(screenRefs.current[prev]);
        gsap.killTweensOf(screenRefs.current[newIndex]);

        // Sortie
        gsap.to(textRefs.current[prev], {
          opacity: 0,
          y: newIndex > prev ? -40 : 40,
          duration: 0.4,
          ease: "power2.in",
        });
        gsap.to(screenRefs.current[prev], { opacity: 0, duration: 0.3 });
        if (dotRefs.current[prev]) {
          gsap.to(dotRefs.current[prev], {
            width: "8px",
            backgroundColor: "#d1c4bc",
            duration: 0.3,
          });
        }

        // Entrée
        gsap.fromTo(
          textRefs.current[newIndex],
          { opacity: 0, y: newIndex > prev ? 40 : -40 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        );
        gsap.to(screenRefs.current[newIndex], { opacity: 1, duration: 0.4 });
        if (dotRefs.current[newIndex]) {
          gsap.to(dotRefs.current[newIndex], {
            width: "24px",
            backgroundColor: "#FF4C00",
            duration: 0.3,
          });
        }

        currentIndex.current = newIndex;
      },
    });
  });

  return (
    <section
      ref={outerRef}
      id="features"
      className="relative bg-[#FFF3EE]"
      style={{ height: `${items.length * 100}vh` }}
    >
      {/* Conteneur sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Nuages décoratifs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {CLOUDS.map((c, i) => (
            <CloudShape
              key={i}
              className="absolute text-white"
              style={{
                top: c.top,
                left: c.left,
                width: c.w,
                opacity: c.opacity,
                animation: `cloud-float ${c.duration}s ${c.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Téléphone — centré sur l'écran (légèrement à droite du centre) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[58%]">
          <div className="relative h-[300px] w-[150px] md:h-[600px] md:w-[300px]">
            <div className="absolute inset-0 overflow-hidden rounded-[32px] border-[4px] border-[#1a1a1a] shadow-2xl md:rounded-[44px] md:border-[6px]">
              {items.map((_, i) => {
                const ScreenComponent = SCREENS[i];
                return (
                  <div
                    key={i}
                    ref={(el) => { screenRefs.current[i] = el; }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    <ScreenComponent />
                  </div>
                );
              })}
            </div>
            {/* Reflet */}
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent md:rounded-[44px]" />
          </div>
        </div>

        {/* Texte — gauche, très grand */}
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { textRefs.current[i] = el; }}
            className="absolute left-1/2 top-[72%] w-[90%] -translate-x-1/2 -translate-y-1/2 text-center md:left-0 md:top-1/2 md:w-[55%] md:translate-x-0 md:-translate-y-1/2 md:pl-5 md:text-left lg:pl-8"
          >
            {item.tag && (
              <span
                className={clsx(
                  "mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold tracking-widest",
                  item.tag === "e-Go Taxi"
                    ? "bg-[#FF4C00] text-white"
                    : "bg-[#0F0F0F] text-white",
                )}
              >
                {item.tag}
              </span>
            )}
            <h2
              className="font-black uppercase leading-[0.88] text-gray-900"
              style={{ fontSize: "clamp(2.8rem, 7.5vw, 6rem)" }}
            >
              {item.heading}
            </h2>
            <p className="mt-4 max-w-xs text-base text-gray-600 md:text-lg">
              {item.body}
            </p>
          </div>
        ))}

        {/* Points de progression */}
        {/* <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el; }}
              className="h-2 rounded-full"
              style={{ width: "8px", backgroundColor: "#d1c4bc" }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
