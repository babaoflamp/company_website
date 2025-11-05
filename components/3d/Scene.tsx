'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  // Generate random particle positions
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 20;     // x
    particlePositions[i + 1] = (Math.random() - 0.5) * 20; // y
    particlePositions[i + 2] = (Math.random() - 0.5) * 20; // z
  }

  useEffect(() => {
    if (pointsRef.current) {
      // Scroll-based animation
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          if (pointsRef.current) {
            pointsRef.current.rotation.y = self.progress * Math.PI * 2;
            pointsRef.current.rotation.x = self.progress * Math.PI;
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Slow rotation animation
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlePositions} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial
        color="#ff00ff"
        wireframe
        emissive="#ff00ff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
