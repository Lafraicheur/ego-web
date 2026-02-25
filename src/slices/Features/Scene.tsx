"use client";

import { useGLTF, Float, Environment } from "@react-three/drei";

export default function FeatureScene() {
  const { scene } = useGLTF("/DEMANDE_TAXI.glb");

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <primitive object={scene} scale={15} position={[0, -1, 0]} rotation={[0, Math.PI / 6, 0]} />
      </Float>
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.0} />
    </group>
  );
}

useGLTF.preload("/DEMANDE_TAXI.glb");
