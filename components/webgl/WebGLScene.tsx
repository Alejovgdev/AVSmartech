"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

type SceneProps = {
  intensity?: "hero" | "subtle";
};

function NetworkField({ intensity = "hero" }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  const { pointPositions, linePositions } = useMemo(() => {
    const nodes = Array.from({ length: intensity === "hero" ? 86 : 52 }, (_, index) => {
      const angle = index * 0.86;
      const radius = 1.2 + (index % 11) * 0.18;
      const wave = Math.sin(index * 1.73) * 0.42;

      return new THREE.Vector3(
        Math.cos(angle) * radius,
        wave + Math.sin(angle * 0.7) * 0.46,
        Math.sin(angle) * radius * 0.72
      );
    });

    const points = new Float32Array(nodes.flatMap((node) => [node.x, node.y, node.z]));
    const lines: number[] = [];

    nodes.forEach((node, index) => {
      const next = nodes[index + 1];
      const jump = nodes[index + 7];

      if (next) {
        lines.push(node.x, node.y, node.z, next.x, next.y, next.z);
      }

      if (jump && index % 3 === 0) {
        lines.push(node.x, node.y, node.z, jump.x, jump.y, jump.z);
      }
    });

    return {
      pointPositions: points,
      linePositions: new Float32Array(lines)
    };
  }, [intensity]);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || reduced) {
      return;
    }

    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.12) * 0.18 + pointer.x * 0.08;
    groupRef.current.rotation.x = Math.cos(time * 0.1) * 0.08 - pointer.y * 0.04;
    groupRef.current.position.y = Math.sin(time * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef} position={[1.6, 0, 0]} rotation={[0.18, -0.42, 0.04]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#00AEEF" size={0.035} transparent opacity={0.82} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#75DFFF" transparent opacity={intensity === "hero" ? 0.2 : 0.12} />
      </lineSegments>
      <mesh position={[0.2, 0, -0.55]}>
        <torusKnotGeometry args={[1.08, 0.008, 180, 12, 2, 3]} />
        <meshBasicMaterial color="#005BFF" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function WebGLScene({ intensity = "hero" }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 48 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.8} />
      <NetworkField intensity={intensity} />
    </Canvas>
  );
}
