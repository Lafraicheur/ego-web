"use client";

import { useRef } from "react";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCar from "@/components/FloatingCar";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scene() {
  const isReady = useStore((state) => state.isReady);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const carRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);

  useGSAP(() => {
    if (!carRef.current || !groupRef.current) return;

    isReady();

    // Position de départ : sous le titre e-Go
    gsap.set(groupRef.current.position, { y: isDesktop ? 0.2 : 0.2 });

    // Animation d'intro
    if (window.scrollY < 20) {
      gsap.from(carRef.current.position, {
        y: -6,
        duration: 3,
        ease: "back.out(1.4)",
      });
      gsap.from(carRef.current.rotation, {
        y: -Math.PI * 2,
        duration: 3,
        ease: "back.out(1.4)",
      });
    }

    // Animation au scroll
    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .to(groupRef.current.rotation, { y: Math.PI * 2 })
      .to(
        groupRef.current.position,
        { x: 1.5, y: 1.5, duration: 3, ease: "sine.inOut" },
        1.3,
      );
  });

  return (
    <group ref={groupRef}>
      <FloatingCar ref={carRef} scale={isDesktop ? 1.5 : 0.9} />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
