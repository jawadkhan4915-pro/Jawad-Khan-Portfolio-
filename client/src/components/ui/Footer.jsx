import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Github, Mail, MapPin, ArrowUp, Heart, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

/* ─── Infinite Marquee Strip ────────────────────────────────────────── */
const TRAVEL_WORDS = [
  'Full Stack Developer',
  '·',
  'MERN Stack',
  '·',
  'Flutter',
  '·',
  'React.js',
  '·',
  'Node.js',
  '·',
  'MongoDB',
  '·',
  'Express.js',
  '·',
  'JWT Auth',
  '·',
  'Socket.IO',
  '·',
  'Dart',
  '·',
  'Tailwind CSS',
  '·',
  'REST APIs',
  '·',
  'Jawad Khan',
  '·',
];

function InfiniteMarquee({ speed = 40, direction = 'left', italic = false }) {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!trackWidth) return;
    const move = (speed * delta) / 1000;
    const current = x.get();
    const next = direction === 'left' ? current - move : current + move;
    // wrap
    if (direction === 'left' && Math.abs(next) >= trackWidth) {
      x.set(next + trackWidth);
    } else if (direction === 'right' && next >= 0) {
      x.set(next - trackWidth);
    } else {
      x.set(next);
    }
  });

  const items = [...TRAVEL_WORDS, ...TRAVEL_WORDS]; // duplicate for seamless loop

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
      <motion.div
        ref={trackRef}
        style={{ x, display: 'inline-flex', gap: '0', willChange: 'transform' }}
      >
        {items.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              padding: '0 20px',
              fontSize: '15px',
              fontFamily: italic ? "'Playfair Display', Georgia, serif" : "'Space Grotesk', sans-serif",
              fontStyle: italic ? 'italic' : 'normal',
              fontWeight: word === 'Jawad Khan' ? 700 : word === '·' ? 400 : 500,
              color: word === 'Jawad Khan'
                ? '#C8A96E'
                : word === '·'
                ? 'rgba(125,174,130,0.6)'
                : '#BDB5A4',
              letterSpacing: word === '·' ? '0' : '0.03em',
              userSelect: 'none',
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Me', href: '#about' },
    { label: 'Skill Set', href: '#skills' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Experience & Education', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-bg-secondary border-t border-border-glass overflow-hidden" style={{ paddingBottom: 0 }}>
      {/* Glow effects */}
      <div className="glow-orb-1 -top-20 right-10 opacity-25" />
      <div className="glow-orb-2 bottom-0 left-10 opacity-20" />

      {/* ── Travel Typography Strip 1 ── */}
      <div
        style={{
          borderBottom: '1px solid rgba(200,169,110,0.12)',
          borderTop: '1px solid rgba(200,169,110,0.12)',
          paddingTop: '14px',
          paddingBottom: '14px',
          background: 'rgba(200,169,110,0.04)',
          marginTop: 0,
        }}
      >
        <InfiniteMarquee speed={45} direction="left" italic={false} />
      </div>

      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-glass">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-10 h-10 rounded-xl p-0.5 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C8A96E, #7DAE82)' }}>
                <div className="w-full h-full bg-bg-card rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-lg gradient-text">JK</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-text-primary block leading-tight">
                  Jawad Khan
                </span>
                <span className="text-[11px] font-mono text-accent-2 uppercase tracking-widest">Full Stack Developer</span>
              </div>
            </motion.div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-5">
              Full Stack MERN Web Developer &amp; Flutter Mobile Developer crafting high-performance,
              responsive web &amp; mobile experiences with modern interactive design.
            </p>

            <div className="flex items-center gap-2 text-text-muted text-xs font-medium">
              <MapPin className="w-4 h-4 text-accent-2" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold font-display uppercase tracking-wider text-text-primary mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-accent-1 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent-2">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4
              className="text-sm font-semibold font-display uppercase tracking-wider text-text-primary mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
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
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent-2 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-bg-card border border-border-glass group-hover:border-accent-2 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Direct Email</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Jawad Khan.</span>
            <span>Built with</span>
            <Heart className="w-3 h-3 text-accent-1 inline" />
            <span>using MERN Stack, Flutter &amp; Three.js.</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-bg-card border border-border-glass text-text-secondary hover:text-accent-1 hover:border-accent-1 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* ── Travel Typography Strip 2 — italic Playfair, reversed ── */}
      <div
        style={{
          borderTop: '1px solid rgba(125,174,130,0.12)',
          paddingTop: '12px',
          paddingBottom: '12px',
          background: 'rgba(125,174,130,0.04)',
        }}
      >
        <InfiniteMarquee speed={28} direction="right" italic={true} />
      </div>

      {/* Big decorative name — classic editorial style */}
      <div
        style={{
          textAlign: 'center',
          padding: '24px 16px 8px',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.04))',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            background: 'linear-gradient(135deg, rgba(200,169,110,0.18) 0%, rgba(125,174,130,0.12) 50%, rgba(212,197,169,0.18) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            userSelect: 'none',
            paddingBottom: '16px',
          }}
        >
          Jawad Khan
        </motion.p>
      </div>
    </footer>
  );
};
