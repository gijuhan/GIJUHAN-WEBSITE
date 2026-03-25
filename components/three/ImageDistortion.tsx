"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uHoverState;
  uniform float uTime;
  varying vec2 vUv;
  
  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }
  
  float noise(vec2 n) {
    const vec2 d = vec2(0.0, 1.0);
    vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;
    
    float distortionX = noise(uv * 4.0 + uTime * 0.5) * 0.1;
    float distortionY = noise(uv * 4.0 + uTime * 0.5 + 100.0) * 0.1;
    
    vec2 distortedUv = uv + vec2(distortionX, distortionY) * uHoverState;
    distortedUv = clamp(distortedUv, 0.0, 1.0);
    
    float r = texture2D(uTexture, distortedUv + vec2(0.01 * uHoverState, 0.0)).r;
    float g = texture2D(uTexture, distortedUv).g;
    float b = texture2D(uTexture, distortedUv - vec2(0.01 * uHoverState, 0.0)).b;
    
    vec4 originalColor = texture2D(uTexture, uv);
    vec4 distortedColor = vec4(r, g, b, originalColor.a);
    vec4 tintedColor = distortedColor + vec4(0.1, 0.02, 0.0, 0.0) * uHoverState;
    
    gl_FragColor = mix(originalColor, tintedColor, uHoverState);
  }
`;

function Scene({ imageUrl, isHovered }: { imageUrl: string; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Load texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  // Use a targeted value to smoothly interpolate the hover state
  const targetHoverValue = useRef(0);

  const uniforms = useRef({
    uTexture: { value: texture },
    uHoverState: { value: 0 },
    uTime: { value: 0 }
  });

  useFrame((state, delta) => {
    targetHoverValue.current = THREE.MathUtils.lerp(
      targetHoverValue.current,
      isHovered ? 1 : 0,
      delta * 4
    );
    
    uniforms.current.uHoverState.value = targetHoverValue.current;
    if (targetHoverValue.current > 0.01) {
      uniforms.current.uTime.value += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent={true}
      />
    </mesh>
  );
}

interface ImageDistortionProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  isHovered?: boolean;
}

export default function ImageDistortion({
  imageUrl,
  className = "",
  isHovered = false,
}: ImageDistortionProps) {
  // We use fallback background color while 3D is initializing or if WebGL fails
  return (
    <div className={`relative overflow-hidden w-full h-full bg-surface ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: false }} // antialias not strictly needed for 2D plane
        dpr={[1, 2]} // Support high-DPI displays
        style={{ width: "100%", height: "100%" }}
      >
        <Scene imageUrl={imageUrl} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
