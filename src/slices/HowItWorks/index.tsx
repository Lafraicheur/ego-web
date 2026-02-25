"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Bounded } from "@/components/Bounded";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HowItWorksProps = {
  steps: { number: string; title: string; body: string }[];
};

const HowItWorks = ({ steps }: HowItWorksProps): JSX.Element => {
  useGSAP(() => {
    // Heading slides in from bottom
    gsap.from(".how-heading", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".how-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Steps stagger-reveal
    gsap.from(".step-item", {
      x: -50,
      opacity: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".how-steps",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Number counter line draw
    gsap.from(".step-line", {
      scaleX: 0,
      transformOrigin: "left center",
      stagger: 0.18,
      duration: 0.6,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".how-steps",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <Bounded
      id="how"
      className="how-section bg-[#0F0F0F] py-28 text-white"
    >
      <div className="w-full max-w-5xl">
        <h2 className="how-heading mb-20 text-center text-5xl font-display font-black uppercase text-[#FF4C00] md:text-7xl">
          Comment ça marche ?
        </h2>

        <div className="how-steps grid gap-14 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="step-item">
              {/* Number + decorative line */}
              <div className="flex items-center gap-4">
                <span className="text-7xl font-black leading-none text-[#FF4C00] opacity-25">
                  {step.number}
                </span>
                <div className="step-line h-px flex-1 bg-[#FF4C00] opacity-30" />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="font-display text-2xl font-black uppercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-400">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default HowItWorks;
