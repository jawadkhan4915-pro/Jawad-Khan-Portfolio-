import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Github, Code2, Layers } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolioData';
import profilePhoto from '../../assets/jawad-profile.jpg';

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

          {/* Right Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            {/* Floating ambient glow behind photo */}
            <div
              style={{
                position: 'absolute',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(200,169,110,0.28) 0%, rgba(125,174,130,0.15) 45%, transparent 70%)',
                filter: 'blur(32px)',
                zIndex: 0,
              }}
            />

            {/* Photo card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
              style={{ display: 'inline-block' }}
            >
              {/* Gradient border ring */}
              <div
                style={{
                  padding: '3px',
                  borderRadius: '1.75rem',
                  background: 'linear-gradient(135deg, #C8A96E 0%, #7DAE82 50%, #D4C5A9 100%)',
                  boxShadow: '0 0 40px rgba(200,169,110,0.30), 0 0 80px rgba(125,174,130,0.15)',
                }}
              >
                <div
                  style={{
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    width: '260px',
                    height: '340px',
                  }}
                >
                  <img
                    src={profilePhoto}
                    alt="Jawad Khan — Full Stack Developer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '-28px',
                  background: 'rgba(26, 29, 20, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200,169,110,0.35)',
                  borderRadius: '0.75rem',
                  padding: '8px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  minWidth: '76px',
                }}
              >
                <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #C8A96E, #7DAE82)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>2+</span>
                <span style={{ fontSize: '9px', color: '#BDB5A4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'center', lineHeight: 1.3 }}>Years Exp.</span>
              </motion.div>

              {/* Floating projects badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-32px',
                  background: 'rgba(26, 29, 20, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(125,174,130,0.35)',
                  borderRadius: '0.75rem',
                  padding: '8px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  minWidth: '80px',
                }}
              >
                <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #7DAE82, #C8A96E)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>15+</span>
                <span style={{ fontSize: '9px', color: '#BDB5A4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'center', lineHeight: 1.3 }}>Projects</span>
              </motion.div>

              {/* Floating MERN tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, rgba(200,169,110,0.15), rgba(125,174,130,0.15))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200,169,110,0.3)',
                  borderRadius: '2rem',
                  padding: '6px 16px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: '11px', color: '#D4C5A9', fontWeight: 600, fontFamily: 'monospace', letterSpacing: '0.1em' }}>⚡ MERN · Flutter · Node.js</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
