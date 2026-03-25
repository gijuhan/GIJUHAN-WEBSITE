"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface ServiceNodeProps {
  title: string;
  kanji: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  startAngle: number;
  isActive: boolean;
  onClick: () => void;
}

function OrbitalRing({ radius, color }: { radius: number; color: string }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  const material = useMemo(
    () => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.15 }),
    [color]
  );

  return <primitive object={new THREE.Line(geometry, material)} />;
}

export default function ServiceNode({
  title,
  kanji,
  color,
  orbitRadius,
  orbitSpeed,
  startAngle,
  isActive,
  onClick,
}: ServiceNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const threeColor = useMemo(() => new THREE.Color(color), [color]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Orbital revolution
    if (groupRef.current) {
      const angle = startAngle + t * orbitSpeed;
      groupRef.current.position.x = Math.cos(angle) * orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * orbitRadius;
      // Adds a subtle up/down bobbing
      groupRef.current.position.y = Math.sin(t + startAngle) * 0.2;
    }

    if (!meshRef.current) return;
    
    // Planetary rotation
    meshRef.current.rotation.y = t * 0.5;

    // Scale on hover/active
    const targetScale = hovered || isActive ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

    // Atmosphere Glow pulse
    if (glowRef.current) {
      const pulseScale = 1.6 + Math.sin(t * 3) * 0.1;
      glowRef.current.scale.setScalar(hovered || isActive ? pulseScale : 1.3);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        hovered || isActive ? 0.3 : 0.1;
    }
  });

  return (
    <>
      <OrbitalRing radius={orbitRadius} color={color} />
      
      <group ref={groupRef}>
        {/* Planet Core (Sphere) */}
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={threeColor}
            emissive={threeColor}
            emissiveIntensity={hovered || isActive ? 0.8 : 0.2}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>

        {/* Atmosphere / Glow */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial
            color={threeColor}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Label */}
        <Html
          distanceFactor={15}
          position={[0, -1.2, 0]}
          center
          zIndexRange={[40, 0]}
        >
          <div
            className={`pointer-events-none transition-all duration-500 flex flex-col items-center gap-1 ${
              hovered || isActive ? "opacity-100 translate-y-0 scale-110" : "opacity-50 translate-y-1 scale-100"
            }`}
          >
            <span
              className="font-[family-name:var(--font-shippori)] text-lg font-bold tracking-wider drop-shadow-md"
              style={{ color }}
            >
              {kanji}
            </span>
            <span className="font-[family-name:var(--font-syne)] text-xs tracking-[0.3em] uppercase text-text/80 whitespace-nowrap drop-shadow-md">
              {title}
            </span>
          </div>
        </Html>
      </group>
    </>
  );
}
