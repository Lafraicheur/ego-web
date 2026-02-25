"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Bounded } from "@/components/Bounded";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type DownloadProps = {
  heading: string;
  body: string;
};

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.32.18.69.2 1.05.03l12.2-6.85-2.78-2.78-10.47 9.6zM.31 1.31C.12 1.64 0 2.07 0 2.61v18.78c0 .54.12.97.31 1.29l.07.07 10.52-10.52v-.25L.38 1.24l-.07.07zM20.44 10.4l-2.85-1.6-3.12 3.12 3.12 3.12 2.88-1.62c.82-.46.82-1.22-.03-1.68v.06zM4.23.21L16.43 7.1l-2.78 2.78L3.18.28C3.54.11 3.91.14 4.23.21v-.07z" />
  </svg>
);

const Download = ({ heading, body }: DownloadProps): JSX.Element => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".download-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".dl-heading", { y: 80, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".dl-body", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".dl-card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "back.out(1.5)",
      }, "-=0.3");
  });

  return (
    <Bounded
      id="download"
      className="download-section bg-[#FF4C00] py-36 text-white"
    >
      <div className="w-full text-center">
        <h2 className="dl-heading font-display text-balance text-5xl font-black uppercase md:text-7xl lg:text-8xl">
          {heading.split("e-Go").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="normal-case">e-Go</span>}
            </span>
          ))}
        </h2>

        <p className="dl-body mx-auto mt-8 max-w-xl text-balance text-xl text-white/80">
          {body}
        </p>

        {/* Deux cartes d'application */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">

          {/* e-Go Client */}
          <div className="dl-card rounded-3xl bg-black/20 p-8 text-left ring-2 ring-white/20 backdrop-blur-sm">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-white/60">
              Pour les passagers
            </div>
            <h3 className="mb-1 font-display text-3xl font-black">e-Go Client</h3>
            <p className="mb-6 text-sm text-white/70">
              Trouvez un taxi, suivez votre trajet et partagez votre course avec vos proches.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <AppleIcon />
                <div>
                  <div className="text-xs opacity-70">Disponible sur</div>
                  <div className="text-base font-black leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <PlayIcon />
                <div>
                  <div className="text-xs opacity-70">Disponible sur</div>
                  <div className="text-base font-black leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* e-Go Taxi */}
          <div className="dl-card rounded-3xl bg-black/20 p-8 text-left ring-2 ring-white/20 backdrop-blur-sm">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-white/60">
              Pour les conducteurs
            </div>
            <h3 className="mb-1 font-display text-3xl font-black">e-Go Taxi</h3>
            <p className="mb-6 text-sm text-white/70">
              Trouvez des clients à proximité, fixez vos prix et gérez vos courses de la journée.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <AppleIcon />
                <div>
                  <div className="text-xs opacity-70">Disponible sur</div>
                  <div className="text-base font-black leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <PlayIcon />
                <div>
                  <div className="text-xs opacity-70">Disponible sur</div>
                  <div className="text-base font-black leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        <p className="mt-12 text-sm font-medium uppercase tracking-widest text-white/50">
          ★★★★★ &nbsp; Noté 4,8/5 par nos utilisateurs
        </p>
      </div>
    </Bounded>
  );
};

export default Download;
