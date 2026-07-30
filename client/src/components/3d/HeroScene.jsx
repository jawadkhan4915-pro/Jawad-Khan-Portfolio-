import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { FloatingGeometries } from './FloatingGeometries';
import { useMobile } from '../../hooks/useMobile';

/* ─────────────────────────────────────────────────────────────────
   HeroScene – Sleek modern 3D R3F Canvas scene with floating
   geometries and ambient particles on desktop.
───────────────────────────────────────────────────────────────── */
export const HeroScene = () => {
  const isMobile = useMobile(768);

  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Mobile: simple glow orbs + ring */}
        <div className="glow-orb-1 top-1/4 -left-20 animate-pulse-glow" />
        <div className="glow-orb-2 bottom-1/4 -right-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="w-64 h-64 border border-accent-1/20 rounded-full animate-spin-slow flex items-center justify-center">
          <div className="w-48 h-48 border border-accent-2/20 rounded-full animate-ping opacity-30" />
        </div>
        {/* Mobile cherry blossoms / particles */}
        <div className="mobile-petals-container absolute inset-0 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#C8A96E" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#7DAE82" />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="#D4C5A9" />

        <Suspense fallback={null}>
          <Sparkles count={60} scale={10} size={2.5} speed={0.4} color="#C8A96E" opacity={0.6} />
          <Sparkles count={40} scale={12} size={2} speed={0.3} color="#7DAE82" opacity={0.5} />
          <FloatingGeometries />
        </Suspense>
      </Canvas>
    </div>
  );
};

