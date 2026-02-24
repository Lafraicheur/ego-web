"use client";

import { forwardRef, ReactNode } from "react";
import { Float, RoundedBox } from "@react-three/drei";
import { Group } from "three";

type FloatingPhoneProps = {
  screenColor?: string;
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingPhone = forwardRef<Group, FloatingPhoneProps>(
  (
    {
      screenColor = "#FF4C00",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
    },
    ref,
  ) => {
    return (
      <group ref={ref}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}

          {/* Phone body */}
          <RoundedBox args={[1.2, 2.4, 0.14]} radius={0.12} smoothness={4}>
            <meshStandardMaterial
              color="#111111"
              metalness={0.8}
              roughness={0.1}
            />
          </RoundedBox>

          {/* Glowing screen */}
          <RoundedBox
            args={[0.98, 2.02, 0.06]}
            radius={0.08}
            smoothness={4}
            position={[0, 0, 0.1]}
          >
            <meshStandardMaterial
              color={screenColor}
              emissive={screenColor}
              emissiveIntensity={0.75}
              metalness={0}
              roughness={0.45}
            />
          </RoundedBox>

          {/* Camera dot */}
          <mesh position={[0, 0.98, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.08, 16]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Home indicator bar */}
          <RoundedBox
            args={[0.3, 0.045, 0.04]}
            radius={0.02}
            smoothness={4}
            position={[0, -0.98, 0.15]}
          >
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.35}
            />
          </RoundedBox>

          {/* Screen glow light */}
          <pointLight
            color={screenColor}
            intensity={10}
            distance={3.5}
            decay={2}
            position={[0, 0, 0.4]}
          />
        </Float>
      </group>
    );
  },
);

FloatingPhone.displayName = "FloatingPhone";

export default FloatingPhone;
