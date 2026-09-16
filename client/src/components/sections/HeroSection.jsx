import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Github, Code2, Layers } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolioData';
import profilePhoto from '../../assets/jawad-profile.jpg';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 xs:pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* 3D R3F Canvas Background */}
      <HeroScene />

      {/* Background Gradient Blurs */}
      <div className="glow-orb-1 top-20 left-10 opacity-40 pointer-events-none" />
      <div className="glow-orb-2 bottom-20 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-bg-card/80 border border-border-glass backdrop-blur-md max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0" />
              <span className="text-[10px] xs:text-xs font-mono tracking-wider text-text-secondary uppercase truncate">
                Available for Full-Time Roles &amp; Freelance
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent-2 shrink-0 hidden xxs:inline" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl xxs:text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-text-primary leading-[1.15] sm:leading-[1.1]">
                Hello, I'm{' '}
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
            </motion.div>

            {/* Subtitle / Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-base xs:text-lg sm:text-2xl font-display font-medium text-text-secondary"
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
              className="flex items-center gap-2 text-text-muted text-xs sm:text-sm"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-3" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2"
            >
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Flutter', 'Dart', 'Tailwind CSS', 'JWT & RBAC'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-lg bg-bg-card/70 border border-border-glass text-text-secondary"
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
              className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-sm sm:text-base shadow-glow-indigo hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all touch-target"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Jawad_Khan_CV.pdf"
                download="Jawad_Khan_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-bg-card/90 border border-accent-1/60 text-accent-1 hover:bg-accent-1/10 hover:border-accent-1 text-sm sm:text-base font-medium transition-all shadow-glow-indigo/20 hover:scale-[1.02] active:scale-[0.98] touch-target"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2.5">
                <a
                  href="#contact"
                  className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-bg-card/80 border border-border-glass text-text-primary hover:border-accent-1 hover:bg-bg-card text-sm sm:text-base font-medium transition-all touch-target"
                >
                  <span>Contact Me</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-2xl bg-bg-card/80 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-2 transition-all touch-target inline-flex items-center justify-center"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
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
              className="relative z-10 max-w-full"
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
                  className="w-[210px] h-[280px] xxs:w-[240px] xxs:h-[315px] sm:w-[260px] sm:h-[340px]"
                  style={{
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
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
                className="absolute top-2 -right-3 xs:top-4 xs:-right-6 sm:-right-7"
                style={{
                  background: 'rgba(26, 29, 20, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200,169,110,0.35)',
                  borderRadius: '0.75rem',
                  padding: '6px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  minWidth: '68px',
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: 800, background: 'linear-gradient(135deg, #C8A96E, #7DAE82)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>2+</span>
                <span style={{ fontSize: '8.5px', color: '#BDB5A4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'center', lineHeight: 1.3 }}>Years Exp.</span>
              </motion.div>

              {/* Floating projects badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute bottom-4 -left-3 xs:bottom-5 xs:-left-6 sm:-left-8"
                style={{
                  background: 'rgba(26, 29, 20, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(125,174,130,0.35)',
                  borderRadius: '0.75rem',
                  padding: '6px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  minWidth: '70px',
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: 800, background: 'linear-gradient(135deg, #7DAE82, #C8A96E)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>15+</span>
                <span style={{ fontSize: '8.5px', color: '#BDB5A4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'center', lineHeight: 1.3 }}>Projects</span>
              </motion.div>

              {/* Floating MERN tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, rgba(200,169,110,0.15), rgba(125,174,130,0.15))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200,169,110,0.3)',
                  borderRadius: '2rem',
                  padding: '4px 12px',
                  whiteSpace: 'nowrap',
                  maxWidth: '92%',
                }}
              >
                <span style={{ fontSize: '10px', color: '#D4C5A9', fontWeight: 600, fontFamily: 'monospace', letterSpacing: '0.08em' }}>⚡ MERN · Flutter · Node.js</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
