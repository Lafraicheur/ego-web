"use client";

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FloatingPhone from "@/components/FloatingPhone";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BG_COLORS = ["#FFF3EE", "#FFF8F5", "#F0FAFF"];

export default function Scene() {
  const phoneRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!phoneRef.current) return;

      const sections = gsap.utils.toArray(".feature-section");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".features-view",
          endTrigger: ".features-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      sections.forEach((_, index) => {
        if (!phoneRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;
        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;

        scrollTl
          .to(phoneRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            phoneRef.current.rotation,
            { y: yRotation, ease: "back.inOut" },
            "<",
          )
          .to(".features-container", {
            backgroundColor: gsap.utils.wrap(BG_COLORS, index),
          });
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group
      ref={phoneRef}
      position-x={isDesktop ? 1 : 0}
      rotation-y={isDesktop ? -0.3 : 0}
    >
      <FloatingPhone
        screenColor="#FF4C00"
        floatSpeed={1.5}
        rotationIntensity={0.5}
      />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.0} />
    </group>
  );
}
