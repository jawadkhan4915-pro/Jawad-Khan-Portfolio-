import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary text-text-primary overflow-hidden"
    >
      <div className="glow-orb-1 top-1/3 left-1/3 animate-pulse-glow" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <div className="inline-block p-4 mb-4 rounded-2xl bg-bg-card/80 border border-border-glass shadow-2xl">
          <span className="font-display font-bold text-3xl tracking-tighter gradient-text">
            JK
          </span>
        </div>
        <h2 className="font-display text-2xl font-bold tracking-wide mb-1 text-text-primary">
          JAWAD KHAN
        </h2>
        <p className="text-xs text-text-secondary tracking-widest uppercase mb-8">
          Full Stack MERN &amp; Flutter Engineer
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-bg-secondary rounded-full overflow-hidden border border-border-glass relative">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-1 to-accent-2"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="inline-block mt-3 text-xs font-mono text-text-muted">
          {progress}%
        </span>
      </motion.div>
    </motion.div>
  );
};
