"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroProps = {
  heading: string;
  subheading: string;
  body: string;
  buttonLink: string;
  buttonText: string;
  secondHeading: string;
  secondBody: string;
};

const Hero = ({
  heading,
  subheading,
  body,
  buttonLink,
  buttonText,
  secondHeading,
  secondBody,
}: HeroProps): JSX.Element => {
  const ready = useStore((state) => state.ready);

  useGSAP(
    () => {
      if (!ready) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          { opacity: 0, y: 30 },
          "+=.8",
        )
        .from(".hero-body", { opacity: 0, y: 10 })
        .from(".hero-button", { opacity: 0, y: 10, duration: 0.6 });

      // Gris dès le départ — avant tout scroll
      gsap.set(".text-side-heading .split-word, .text-side-body .split-word", {
        color: "#D4B0A0",
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          { backgroundColor: "#FFFFFF" },
          { backgroundColor: "#FFF3EE", overwrite: "auto" },
          1,
        )
      gsap.to(".text-side-heading .split-word, .text-side-body .split-word", {
        color: "#0F0F0F",
        stagger: 0.6,
        ease: "none",
        duration: 0.3,
        scrollTrigger: {
          trigger: ".text-side",
          start: "top center",
          end: "bottom top",
          scrub: 3,
        },
      });
    },
    { dependencies: [ready] },
  );

  return (
    <Bounded className="hero opacity-0">
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen">
        <Scene />
        <Bubbles count={150} speed={2} repeat={true} />
      </View>

      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <div className="hero-subheading mt-8 text-2xl font-semibold text-gray-900 md:text-4xl lg:text-6xl">
              <p>{subheading}</p>
            </div>
            <div className="hero-body mt-4 text-base font-normal text-gray-600 md:text-2xl">
              <p>{body}</p>
            </div>
            <Button
              buttonLink={buttonLink}
              buttonText={buttonText}
              className="hero-button mt-12"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] flex h-screen items-center justify-center px-6 md:px-20">
          <div className="w-full max-w-4xl">
            <h2 className="text-side-heading font-display font-black uppercase leading-[1] text-gray-900" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
              <TextSplitter text={secondHeading} />
            </h2>
            <div className="text-side-body mt-6 font-display font-black uppercase leading-[1.1] text-gray-900" style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}>
              <TextSplitter text={secondBody} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
