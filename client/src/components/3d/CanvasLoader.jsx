import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="w-16 h-16 border-4 border-accent-1 border-t-accent-2 rounded-full animate-spin mb-3"></div>
      <p className="text-xs font-display tracking-widest text-text-secondary uppercase">
        Loading 3D Engine... {progress.toFixed(0)}%
      </p>
    </Html>
  );
};
