import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Github, Code2, Layers } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D R3F Canvas Background */}
      <HeroScene />

      {/* Background Gradient Blurs */}
      <div className="glow-orb-1 top-20 left-10 opacity-40 pointer-events-none" />
      <div className="glow-orb-2 bottom-20 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 border border-border-glass backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-text-secondary uppercase">
                Available for Full-Time Roles &amp; Freelance
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent-2" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-text-primary leading-[1.1]">
                Hello, I'm{' '}
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
            </motion.div>

            {/* Subtitle / Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-display font-medium text-text-secondary"
            >
              <span className="text-accent-2">Full Stack MERN Web Developer</span>
              <span className="text-border-glass hidden sm:inline">|</span>
              <span className="text-accent-1">Flutter Mobile App Developer</span>
            </motion.div>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 text-text-muted text-sm"
            >
              <MapPin className="w-4 h-4 text-accent-3" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Flutter', 'Dart', 'Tailwind CSS', 'JWT & RBAC'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-bg-card/70 border border-border-glass text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-base shadow-glow-indigo hover:shadow-glow-cyan hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-bg-card/80 border border-border-glass text-text-primary hover:border-accent-1 hover:bg-bg-card text-base font-medium transition-all"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-bg-card/80 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-2 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
