"use client";

import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { Group } from "three";

type FloatingCarProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  scale?: number;
};

const FloatingCar = forwardRef<Group, FloatingCarProps>(
  (
    {
      floatSpeed = 1.2,
      rotationIntensity = 0.2,
      floatIntensity = 0.4,
      scale = 0.5,
    },
    ref,
  ) => {
    const { scene } = useGLTF("/taxi/taxi.gltf");

    return (
      <group ref={ref}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={[-0.05, 0.05]}
        >
          <primitive
            object={scene}
            scale={scale}
            rotation={[0, Math.PI / 2, 0]}
          />
        </Float>
      </group>
    );
  },
);

FloatingCar.displayName = "FloatingCar";

useGLTF.preload("/taxi/taxi.gltf");

export default FloatingCar;
