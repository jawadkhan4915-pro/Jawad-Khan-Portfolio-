import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { FloatingGeometries } from './FloatingGeometries';
import { CanvasLoader } from './CanvasLoader';
import { useMobile } from '../../hooks/useMobile';

export const HeroScene = () => {
  const isMobile = useMobile(768);

  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Responsive Mobile Particle & Geometric Fallback */}
        <div className="glow-orb-1 top-1/4 -left-20 animate-pulse-glow" />
        <div className="glow-orb-2 bottom-1/4 -right-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="w-64 h-64 border border-accent-1/20 rounded-full animate-spin-slow flex items-center justify-center">
          <div className="w-48 h-48 border border-accent-2/20 rounded-full animate-ping opacity-30" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#6C63FF" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#00D4FF" />
        <spotLight position={[0, 15, 10]} angle={0.3} penumbra={1} intensity={1} color="#FF6EC7" />

        <Suspense fallback={<CanvasLoader />}>
          <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={1.5} />
          <FloatingGeometries />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
