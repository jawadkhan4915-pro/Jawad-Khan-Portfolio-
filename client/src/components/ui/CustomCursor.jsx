import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../../hooks/useMobile';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMobile(768);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-2/60 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'var(--accent-1)' : 'var(--accent-2)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-1 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  );
};
