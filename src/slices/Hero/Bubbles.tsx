"use client";

import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

// Using Object3D as a container to efficiently set and update positions for each bubble instance
const o = new THREE.Object3D();

// Customizations in case you want to use this in other scenes.
export function Bubbles({
  count = 300,
  speed = 5,
  bubbleSize = 0.05,
  opacity = 0.5,
  repeat = true,
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // An array that holds all of our bubbles' speeds
  const bubbleSpeed = useRef(new Float32Array(count));
  const minSpeed = speed * 0.001;
  const maxSpeed = speed * 0.005;

  // Cursor tracking
  const mousePosRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(false);
  const mouseStrengthRef = useRef(0); // 0 = idle, 1 = cursor actif
  const mouseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Create geometry and material for our mesh
  const geometry = new THREE.SphereGeometry(bubbleSize, 16, 16);

  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity,
  });

  // Runs once to create and place our bubbles
  useEffect(() => {
    // Access the instanced mesh
    const mesh = meshRef.current;
    if (!mesh) {
      return;
    }

    // Create {count} number of bubbles in random locations
    for (let i = 0; i < count; i++) {
      o.position.set(
        gsap.utils.random(-4, 4),
        gsap.utils.random(-4, 4),
        gsap.utils.random(-4, 4),
      );

      // Update matrix so that the position is applied
      o.updateMatrix();
      // Apply the updated matrix from Object3D to the mesh at index i.
      mesh.setMatrixAt(i, o.matrix);

      // Set a random bubble speed
      bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
    }

    mesh.instanceMatrix.needsUpdate = true;
    return () => {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    };
  }, [count, minSpeed, maxSpeed]);

  // Écoute les mouvements du cursor et convertit en coordonnées monde (-4 à 4)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * 4;
      mousePosRef.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * 4;
      mouseActiveRef.current = true;

      if (mouseTimerRef.current) clearTimeout(mouseTimerRef.current);
      mouseTimerRef.current = setTimeout(() => {
        mouseActiveRef.current = false;
      }, 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimerRef.current) clearTimeout(mouseTimerRef.current);
    };
  }, []);

  // useFrame runs on every animation frame
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // Assign current body color to bubble so it looks natural
    material.color = new THREE.Color(document.body.style.backgroundColor);

    // Interpolation douce vers 1 (actif) ou 0 (idle)
    if (mouseActiveRef.current) {
      mouseStrengthRef.current = Math.min(1, mouseStrengthRef.current + 0.04);
    } else {
      mouseStrengthRef.current = Math.max(0, mouseStrengthRef.current - 0.02);
    }

    const strength = mouseStrengthRef.current;

    for (let i = 0; i < count; i++) {
      meshRef.current.getMatrixAt(i, o.matrix);
      o.position.setFromMatrixPosition(o.matrix);

      // Remontée normale (réduite progressivement quand cursor actif)
      o.position.y += bubbleSpeed.current[i] * (1 - strength * 0.8);

      // Attraction vers le cursor
      if (strength > 0) {
        const dx = mousePosRef.current.x - o.position.x;
        const dy = mousePosRef.current.y - o.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Répulsion légère quand très proche (effet tourbillon)
        const force =
          dist < 0.4
            ? -strength * 0.008
            : (strength * 0.012) / (dist * 0.4 + 0.5);

        o.position.x += dx * force;
        o.position.y += dy * force;
      }

      // Reset bubble position if it moves off the top of the screen
      if (o.position.y > 4 && repeat) {
        o.position.y = -2; // Reset to bottom
        o.position.x = gsap.utils.random(-4, 4);
        o.position.z = gsap.utils.random(0, 8);
      }

      o.updateMatrix();
      meshRef.current.setMatrixAt(i, o.matrix);
    }

    // Mark the instance matrix as needing an update, so the new positions of the bubbles are rendered.
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      position={[0, 0, 0]}
      material={material}
      geometry={geometry}
    ></instancedMesh>
  );
}
