import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-bg-card/80 border border-border-glass text-text-primary hover:border-accent-1 transition-colors shadow-lg focus:outline-none"
      aria-label="Toggle Theme Mode"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 360 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-accent-2" />
        ) : (
          <Moon className="w-5 h-5 text-accent-1" />
        )}
      </motion.div>
    </motion.button>
  );
};
