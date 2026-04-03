"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Float } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useSpring } from "framer-motion";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  // Track continuous page scroll
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400
  });

  // Track global mouse position for parallax since canvas is pointer-events-none
  const targetPointer = useRef(new THREE.Vector2(0, 0));
  const pointerOffset = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      targetPointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetPointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth pointer movement
    pointerOffset.current.x = THREE.MathUtils.lerp(pointerOffset.current.x, targetPointer.current.x, 0.05);
    pointerOffset.current.y = THREE.MathUtils.lerp(pointerOffset.current.y, targetPointer.current.y, 0.05);

    // Rotate object based on scroll progress, time, and smooth cursor parallax
    const scrollVal = smoothProgress.get() * Math.PI * 4;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + scrollVal + pointerOffset.current.x * Math.PI * 0.5;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + scrollVal * 0.5 - pointerOffset.current.y * Math.PI * 0.5;
    
    // Warp the mesh subtly
    meshRef.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime) * 0.05
    );
    
    // Color shift based on scroll
    if (materialRef.current) {
       const hue = 0.05 + smoothProgress.get() * 0.1; // Shift red to gold
       materialRef.current.color.setHSL(hue, 0.8, 0.5);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
      <TorusKnot ref={meshRef as any} args={[2.5, 0.6, 128, 16, 3, 4]}>
        <meshStandardMaterial
          ref={materialRef}
          color="#E63946"
          roughness={0.1}
          metalness={1}
          wireframe={true}
          transparent
          opacity={0.45}
        />
      </TorusKnot>
    </Float>
  );
}

export default function ScrollObject() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] opacity-100 mix-blend-screen mix-blend-overlay mix-blend-lighten">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#C9A84C" />
        <Scene />
      </Canvas>
    </div>
  );
}
