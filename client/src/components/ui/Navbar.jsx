import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Send, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2.5 sm:py-3.5 shadow-xl' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-accent-1 to-accent-2 p-0.5 flex items-center justify-center shadow-glow-indigo group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-bg-card rounded-[10px] flex items-center justify-center">
              <span className="font-display font-bold text-sm sm:text-lg gradient-text">JK</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-lg tracking-tight text-text-primary group-hover:text-accent-2 transition-colors">
              Jawad Khan
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-text-muted tracking-wider uppercase -mt-0.5 sm:-mt-1">
              Full Stack &amp; Flutter
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-full bg-bg-card/60 border border-border-glass backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-1/20 to-accent-2/20 border border-accent-1/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions (Theme Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <a
            href="/Jawad_Khan_CV.pdf"
            download="Jawad_Khan_CV.pdf"
            className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-full border border-accent-1/50 bg-bg-card/80 text-accent-1 hover:bg-accent-1/10 hover:border-accent-1 font-medium text-xs transition-all touch-target"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-xs lg:text-sm shadow-glow-indigo hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all touch-target"
          >
            <span>Hire Me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-xl bg-bg-card border border-border-glass text-text-primary focus:outline-none touch-target"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent-2" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden glass-nav border-t border-border-glass px-4 sm:px-6 py-5 safe-pb shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-colors flex items-center justify-between touch-target ${
                      isActive
                        ? 'text-accent-1 bg-accent-1/10 font-semibold border border-accent-1/25'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/80'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-1" />}
                  </a>
                );
              })}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="/Jawad_Khan_CV.pdf"
                  download="Jawad_Khan_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-accent-1/50 bg-bg-card text-accent-1 font-medium text-sm sm:text-base transition-colors touch-target"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-sm sm:text-base shadow-glow-indigo touch-target"
                >
                  <span>Get in Touch</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
