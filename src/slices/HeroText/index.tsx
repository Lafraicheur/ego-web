"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TextSplitter } from "@/components/TextSplitter";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroTextProps = {
  heading: string;
  body: string;
};

const HeroText = ({ heading, body }: HeroTextProps): JSX.Element => {
  useGSAP(() => {
    gsap.set(".hero-text-heading .split-word, .hero-text-body .split-word", {
      color: "#D4B0A0",
    });

    gsap.to(".hero-text-heading .split-word:not(.preserved-word), .hero-text-body .split-word:not(.preserved-word)", {
      color: "#0F0F0F",
      stagger: 0.6,
      ease: "none",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".hero-text-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
    });

    gsap.to(".hero-text-heading .preserved-word, .hero-text-body .preserved-word", {
      color: "#FF4C00",
      stagger: 0.6,
      ease: "none",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".hero-text-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
    });
  });

  return (
    <div className="hero-text-wrapper relative h-[250vh] bg-[#FFF3EE]">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 md:px-20">
        <div className="w-full max-w-4xl">
          <h2
            className="hero-text-heading font-display font-black uppercase leading-[1] text-gray-900"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            <TextSplitter text={heading} preserveWords={["e-Go"]} />
          </h2>
          <div
            className="hero-text-body mt-6 font-display font-black uppercase leading-[1.1] text-gray-900"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
          >
            <TextSplitter text={body} preserveWords={["e-Go"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
