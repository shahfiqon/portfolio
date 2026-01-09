import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useColorMode } from '@docusaurus/theme-common';
import * as THREE from 'three';
import styles from './Hero3DBackground.module.css';

function ParticleField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const particleCount = 3000;

  // Generate random particle positions for starfield
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Spread particles in a wider area
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [particleCount]);

  // Animate particles (slow rotation for starfield effect)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.03;
    }
  });

  // Particle color based on theme
  const particleColor = isDark ? '#ffffff' : '#1a1a2e';

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.9 : 0.7}
        vertexColors={false}
      />
    </Points>
  );
}


interface Hero3DBackgroundProps {
  isDarkMode?: boolean;
}

export default function Hero3DBackground({ isDarkMode }: Hero3DBackgroundProps) {
  const { colorMode } = useColorMode();
  const isDark = isDarkMode !== undefined ? isDarkMode : colorMode === 'dark';
  
  // Background colors for different themes
  const backgroundColor = isDark ? '#1a1a2e' : '#e8eaf6';
  
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        className={styles.canvas}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Theme-aware background */}
        <color attach="background" args={[backgroundColor]} />
        
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 1.5} />
        <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.6 : 0.8} />
        
        <ParticleField isDark={isDark} />
      </Canvas>
    </div>
  );
}

