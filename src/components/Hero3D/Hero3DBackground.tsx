import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Hero3DBackground.module.css';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const particleCount = 2000;

  // Generate random particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [particleCount]);

  // Animate particles
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function GeometricShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.2;
      meshRef1.current.rotation.y = time * 0.3;
      meshRef1.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -time * 0.15;
      meshRef2.current.rotation.z = time * 0.25;
      meshRef2.current.position.x = Math.cos(time * 0.3) * 0.5;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.y = time * 0.4;
      meshRef3.current.rotation.z = -time * 0.2;
      meshRef3.current.position.z = Math.sin(time * 0.4) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={meshRef1} position={[-2, 0, -3]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      <mesh ref={meshRef2} position={[2, 0, -4]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <mesh ref={meshRef3} position={[0, 1, -5]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#93c5fd"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </>
  );
}

interface Hero3DBackgroundProps {
  isDarkMode?: boolean;
}

export default function Hero3DBackground({ isDarkMode = false }: Hero3DBackgroundProps) {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        className={styles.canvas}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ParticleField />
        <GeometricShapes />
      </Canvas>
    </div>
  );
}

