"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html, OrbitControls } from "@react-three/drei";
import { useRouter } from "next/navigation";

// Define the services for the planets
const PLANET_SERVICES = [
  { title: "Design", href: "/services/design", color: "#C9A84C" },
  { title: "Development", href: "/services/development", color: "#9CA3AF" },
  { title: "Marketing", href: "/services/marketing", color: "#E63946" },
  { title: "Solutions", href: "/services/solutions", color: "#C9A84C" },
  { title: "Support", href: "/services/support", color: "#9CA3AF" },
];

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#E63946") },
      uColor2: { value: new THREE.Color("#C9A84C") },
      uColor3: { value: new THREE.Color("#0A0A0A") },
    }),
    []
  );

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    
    // Simplex noise
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vNormal = normal;
      vec3 pos = position;
      float noise = snoise(pos * 1.5 + uTime * 0.3) * 0.15;
      pos += normal * noise;
      vPosition = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    
    void main() {
      float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
      vec3 color = mix(uColor3, uColor1, fresnel * 0.6);
      color = mix(color, uColor2, sin(vUv.y * 6.28 + uTime * 0.5) * 0.3 + 0.3);
      float scanline = sin(vPosition.y * 40.0 + uTime * 2.0) * 0.02;
      color += scanline;
      float alpha = 0.85 + fresnel * 0.15;
      gl_FragColor = vec4(color, alpha);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.8, 0.01, 16, 100]} />
      <meshBasicMaterial color="#C9A84C" transparent opacity={0.3} />
    </mesh>
  );
}

function Planet({ service, radius, angle, speed, color, inclination, tilt }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime * speed + angle;
      // Orbit strictly in the local X-Z plane 
      groupRef.current.position.x = Math.cos(t) * radius;
      groupRef.current.position.z = Math.sin(t) * radius;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      const targetScale = hovered ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group rotation={[inclination, 0, tilt]}>
      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.003, 64, 100]} />
        <meshBasicMaterial color={color} transparent opacity={hovered ? 0.8 : 0.15} />
      </mesh>

      <group ref={groupRef}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
          onClick={(e) => {
            e.stopPropagation();
            router.push(service.href);
          }}
        >
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial 
            color={hovered ? "#ffffff" : color} 
            emissive={hovered ? color : "#000000"}
            emissiveIntensity={hovered ? 2 : 0}
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
        
        {/* NASA Interactive Style Label */}
        <Html distanceFactor={15} position={[0, 0, 0]} zIndexRange={[100, 0]}>
          <div 
            className={`transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-60'}`}
            style={{ pointerEvents: 'none' }}
          >
            {/* Connecting Diagonal Line */}
            <div className={`w-8 h-px bg-gradient-to-r from-transparent ${hovered ? 'to-gold' : 'to-border'} -mt-4 ml-3 transform rotate-45 origin-bottom-left transition-colors`} />
            
            {/* Label UI */}
            <div 
              className={`ml-10 -mt-6 px-3 py-1.5 backdrop-blur-md border-l-2 bg-surface/80 text-[10px] sm:text-xs font-[family-name:var(--font-syne)] uppercase tracking-widest cursor-pointer pointer-events-auto flex flex-col gap-0.5 transition-all ${hovered ? 'border-l-gold border-y border-r border-gold/20 text-gold scale-105 shadow-[0_0_20px_rgba(201,168,76,0.3)]' : 'border-l-border border-y border-r border-transparent text-muted hover:text-text hover:border-l-muted'}`}
              onPointerEnter={() => setHovered(true)}
              onPointerLeave={() => setHovered(false)}
              onClick={() => router.push(service.href)}
            >
              <span className="font-bold tracking-[0.2em]">{service.title}</span>
              <span className={`text-[8px] normal-case tracking-normal overflow-hidden transition-all duration-300 ${hovered ? 'max-h-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                // Access Module
              </span>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

function PlanetarySystem() {
  return (
    <group>
      {PLANET_SERVICES.map((s, i) => (
        <Planet 
          key={s.title} 
          service={s} 
          radius={2.6 + i * 0.7} 
          angle={(i * Math.PI * 2) / PLANET_SERVICES.length} 
          speed={0.1 + (i * 0.015)} 
          color={s.color} 
          inclination={(i % 2 === 0 ? 1 : -1) * 0.08 * i} // Staggered inclination
          tilt={(i % 3 === 0 ? 1 : -1) * 0.1 * i} // Staggered tilt
        />
      ))}
    </group>
  );
}

export default function HeroOrb() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 2.5, 7.5], fov: 50 }}
        dpr={[1, 2]}
        className="!absolute inset-0 cursor-grab active:cursor-grabbing"
      >
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3} 
          maxPolarAngle={Math.PI / 1.6} 
          minPolarAngle={Math.PI / 4} 
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#E63946" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#C9A84C" />
        <Orb />
        <GlowRing />
        <PlanetarySystem />
      </Canvas>
    </div>
  );
}
