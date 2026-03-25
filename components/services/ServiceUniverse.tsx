"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import ServiceNode from "./ServiceNode";

export const SERVICE_NODES = [
  {
    id: "design",
    title: "Design",
    kanji: "設計",
    color: "#C9A84C",
    orbitRadius: 3.5,
    orbitSpeed: 0.1,
    startAngle: 0,
  },
  {
    id: "development",
    title: "Development",
    kanji: "開発",
    color: "#60A5FA",
    orbitRadius: 5.0,
    orbitSpeed: 0.08,
    startAngle: Math.PI / 2,
  },
  {
    id: "marketing",
    title: "Marketing",
    kanji: "販売",
    color: "#E63946",
    orbitRadius: 6.5,
    orbitSpeed: 0.06,
    startAngle: Math.PI,
  },
  {
    id: "support",
    title: "Support",
    kanji: "支援",
    color: "#34D399",
    orbitRadius: 8.0,
    orbitSpeed: 0.04,
    startAngle: Math.PI * 1.5,
  },
];

function CameraRig({ activeService }: { activeService: string | null }) {
  const { camera, controls } = useThree();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (activeService) {
      const node = SERVICE_NODES.find((n) => n.id === activeService);
      if (node) {
        const t = state.clock.elapsedTime;
        const angle = node.startAngle + t * node.orbitSpeed;
        const x = Math.cos(angle) * node.orbitRadius;
        const z = Math.sin(angle) * node.orbitRadius;
        // Also factor in the bobbing if needed, but keeping it flat is fine for orbit
        const yOffset = Math.sin(t + node.startAngle) * 0.2;

        // Target camera position (above and slightly back from the planet)
        // We shift the lookAt target slightly to the right so the planet appears on the left side of the screen.
        // The panel takes up the right 45%, so the planet should center in the left 55%.
        const lookX = x + Math.cos(angle - Math.PI / 2) * 1.5;
        const lookZ = z + Math.sin(angle - Math.PI / 2) * 1.5;

        vec.set(x + Math.cos(angle) * 4, 2 + yOffset, z + Math.sin(angle) * 4);
        camera.position.lerp(vec, 0.04);

        if (controls && (controls as any).target) {
          (controls as any).target.lerp(new THREE.Vector3(lookX, yOffset, lookZ), 0.04);
        }
      }
    } else {
      // Global view
      vec.set(0, 10, 20);
      camera.position.lerp(vec, 0.02); // slower lerp for overview
      if (controls && (controls as any).target) {
        (controls as any).target.lerp(new THREE.Vector3(0, 0, 0), 0.04);
      }
    }
  });

  return null;
}

function CentralSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
    }
    if (glowRef.current) {
      const pulse = 1.0 + Math.sin(t * 2) * 0.05;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#FFE259"
          emissive="#FFA751"
          emissiveIntensity={2}
          roughness={0.4}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#FFA751"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <pointLight color="#FFE259" intensity={3} distance={50} />
    </group>
  );
}

// Floating ambient particles/space dust
function SpaceDust() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    const col = new Float32Array(500 * 3);
    const colorOptions = [
      new THREE.Color("#E63946"),
      new THREE.Color("#C9A84C"),
      new THREE.Color("#60A5FA"),
      new THREE.Color("#818CF8"),
      new THREE.Color("#34D399"),
      new THREE.Color("#ffffff")
    ];
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.4} depthWrite={false} sizeAttenuation />
    </points>
  );
}

interface ServiceUniverseProps {
  activeService: string | null;
  onServiceClick: (id: string) => void;
}

export default function ServiceUniverse({ activeService, onServiceClick }: ServiceUniverseProps) {
  return (
    <section className="relative h-[100svh] w-full bg-black overflow-hidden" id="service-universe">
      {/* UI Overlay */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold/60 uppercase">
            GIJUHAN CORE SERVICES
          </span>
        </div>
        <p className="font-[family-name:var(--font-syne)] text-xs text-muted/50 max-w-[200px]">
          Click a planet to explore. Drag to orbit the system.
        </p>
      </div>

      <Canvas
        camera={{ position: [0, 10, 20], fov: 45 }}
        dpr={[1, 2]}
        className="!absolute inset-0 cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={["#050505"]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={!activeService}
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 6}
          minDistance={5}
          maxDistance={40}
        />

        <ambientLight intensity={0.15} />

        <CentralSun />

        {SERVICE_NODES.map((node) => (
          <ServiceNode
            key={node.id}
            {...node}
            isActive={activeService === node.id}
            onClick={() => onServiceClick(node.id)}
          />
        ))}

        <SpaceDust />

        <CameraRig activeService={activeService} />
      </Canvas>
    </section>
  );
}
