import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MapPin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-secondary border-t border-border-glass pt-16 pb-12 overflow-hidden">
      {/* Glow effects */}
      <div className="glow-orb-1 -top-20 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-glass">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-1 to-accent-2 p-0.5 flex items-center justify-center shadow-glow-indigo">
                <div className="w-full h-full bg-bg-card rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-lg gradient-text">JK</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                Jawad Khan
              </span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-6">
              Full Stack MERN Web Developer &amp; Flutter Mobile Developer crafting high-performance, responsive web &amp; mobile experiences with modern 3D interactive design.
            </p>

            <div className="flex items-center gap-2 text-text-muted text-xs font-medium">
              <MapPin className="w-4 h-4 text-accent-2" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a href="#hero" className="hover:text-accent-2 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-2 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-2 transition-colors">Skill Set</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-2 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent-2 transition-colors">Experience &amp; Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-2 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div>
            <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent-1 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-bg-card border border-border-glass group-hover:border-accent-1 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent-2 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-bg-card border border-border-glass group-hover:border-accent-2 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Jawad Khan. Built with MERN Stack, Flutter, Three.js &amp; Tailwind CSS.</p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-bg-card border border-border-glass text-text-secondary hover:text-accent-2 hover:border-accent-2 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
