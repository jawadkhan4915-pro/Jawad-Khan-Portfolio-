import React from 'react';
import { AnimeCoderScene } from './AnimeCoderScene';
import { useMobile } from '../../hooks/useMobile';

/* ─────────────────────────────────────────────────────────────────
   HeroScene – switches between mobile fallback and the full
   coder SVG background scene (with anime character removed) on desktop.
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
        {/* Mobile cherry blossoms */}
        <div className="mobile-petals-container absolute inset-0 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <AnimeCoderScene />
    </div>
  );
};


