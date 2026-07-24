import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, Github, CheckCircle2, Layers, Cpu,
  ShieldCheck, Database, Code2, Zap, Lock
} from 'lucide-react';

const TAB_CONFIG = [
  { key: 'highlights',   label: 'Overview',      icon: Layers      },
  { key: 'oopStrategy',  label: 'OOP Strategy',  icon: Code2       },
  { key: 'dataHandling', label: 'Data Handling',  icon: Database    },
  { key: 'algorithms',   label: 'Algorithms',     icon: Zap         },
  { key: 'security',     label: 'Security',       icon: ShieldCheck },
];

const CHECK_COLOR = {
  highlights:   '#5A8A5E',
  oopStrategy:  '#9B7A3E',
  dataHandling: '#9B7A3E',
  algorithms:   '#5A8A5E',
  security:     '#5A8A5E',
};

const SECTION_LABEL = {
  highlights:   'Key Features & Implementations',
  oopStrategy:  'OOP Design Patterns & Architecture Strategies',
  dataHandling: 'Data Management & Programming Fundamentals',
  algorithms:   'Algorithms, Complexity & CS Fundamentals',
  security:     'Security Architecture & Data Protection',
};

export const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('highlights');

  if (!project) return null;

  const activeData = project[activeTab] || project.highlights || [];
  const tabsAvailable = TAB_CONFIG.filter(t => project[t.key]?.length > 0);

  return (
    <AnimatePresence>
      {/* ── Full-screen container ── */}
      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
        style={{ padding: '24px 16px 48px' }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />

        {/* ── Modal Window ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 28 }}
          transition={{ type: 'spring', damping: 28, stiffness: 340 }}
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '760px',
            marginTop: '16px',
            borderRadius: '20px',
            overflow: 'hidden',
            /* Solid backgrounds — completely opaque in both modes */
            backgroundColor: 'var(--modal-bg)',
            border: '1px solid var(--modal-border)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
          }}
          /* Inject CSS custom props that override per theme */
          className="modal-root"
        >
          {/* ── Decorative top-right glow ── */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent-1), transparent 70%)',
            opacity: 0.18, pointerEvents: 'none', filter: 'blur(30px)',
          }} />

          {/* ══════════════ HEADER ══════════════ */}
          {/* Thumbnail Banner */}
          {project.image && (
            <div style={{
              width: '100%',
              height: '200px',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '1px solid var(--modal-divider)',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, var(--modal-bg) 100%)',
              }} />
            </div>
          )}

          <div style={{ padding: '24px 32px 0', position: 'relative' }}>
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute', top: '20px', right: '20px',
                padding: '8px', borderRadius: '50%', cursor: 'pointer',
                background: 'var(--modal-chip-bg)',
                border: '1px solid var(--modal-chip-border)',
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.borderColor = 'var(--accent-1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--modal-chip-border)'; }}
            >
              <X size={18} />
            </button>

            {/* Category Badge */}
            <span style={{
              display: 'inline-block', marginBottom: '12px',
              padding: '4px 12px', borderRadius: '999px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'var(--modal-badge-bg)',
              border: '1px solid var(--modal-badge-border)',
              color: 'var(--accent-1)',
            }}>
              {project.category}
            </span>

            <h2 style={{
              fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800,
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'var(--modal-heading)',
              marginBottom: '6px', paddingRight: '40px', lineHeight: 1.25,
            }}>
              {project.title}
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--modal-subtext)', marginBottom: '16px', lineHeight: 1.6 }}>
              {project.tagline}
            </p>

            {/* Description box */}
            {project.description && (
              <p style={{
                fontSize: '13px', lineHeight: 1.7,
                color: 'var(--modal-body-text)',
                background: 'var(--modal-desc-bg)',
                border: '1px solid var(--modal-desc-border)',
                borderRadius: '12px', padding: '14px 16px', marginBottom: '20px',
              }}>
                {project.description}
              </p>
            )}

            {/* Tech Stack */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Cpu size={14} style={{ color: 'var(--accent-1)' }} />
                <span style={{
                  fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--modal-label)',
                }}>Tech Stack</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} style={{
                    padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                    fontFamily: 'monospace',
                    background: 'var(--modal-chip-bg)',
                    border: '1px solid var(--modal-chip-border)',
                    color: 'var(--modal-chip-text)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════ TABS ══════════════ */}
          <div style={{ padding: '0 32px', borderBottom: '1px solid var(--modal-divider)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
              {tabsAvailable.map(({ key, label, icon: Icon }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '10px 14px', fontSize: '12px', fontWeight: 600,
                      cursor: 'pointer', border: 'none', borderRadius: '10px 10px 0 0',
                      transition: 'all 0.2s',
                      background: isActive ? 'var(--modal-tab-active-bg)' : 'transparent',
                      color: isActive ? 'var(--modal-heading)' : 'var(--modal-label)',
                      borderBottom: isActive ? '2px solid var(--accent-1)' : '2px solid transparent',
                      outline: 'none',
                    }}
                  >
                    <Icon size={13} style={{ color: isActive ? 'var(--accent-1)' : 'var(--modal-label)' }} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ══════════════ TAB CONTENT ══════════════ */}
          <div style={{ padding: '20px 32px', minHeight: '220px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
              >
                {/* Section heading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  {React.createElement(TAB_CONFIG.find(t => t.key === activeTab)?.icon || Layers, {
                    size: 15,
                    style: { color: 'var(--accent-1)' },
                  })}
                  <span style={{
                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--modal-label)',
                  }}>
                    {SECTION_LABEL[activeTab]}
                  </span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
                  {activeData.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.055 }}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        padding: '12px 14px', borderRadius: '12px',
                        background: 'var(--modal-item-bg)',
                        border: '1px solid var(--modal-item-border)',
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        style={{ color: CHECK_COLOR[activeTab], flexShrink: 0, marginTop: '2px' }}
                      />
                      <span style={{
                        fontSize: '13px', lineHeight: 1.65,
                        color: 'var(--modal-body-text)',
                        fontWeight: 500,
                      }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ══════════════ FOOTER ACTIONS ══════════════ */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px',
            padding: '18px 32px',
            borderTop: '1px solid var(--modal-divider)',
            background: 'var(--modal-footer-bg)',
          }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 24px', borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                color: '#fff', fontSize: '13px', fontWeight: 700,
                textDecoration: 'none', letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
              }}
            >
              Live Demo <ExternalLink size={14} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 24px', borderRadius: '12px',
                background: 'var(--modal-chip-bg)',
                border: '1px solid var(--modal-chip-border)',
                color: 'var(--modal-heading)',
                fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              }}
            >
              <Github size={15} /> Source Code
            </a>

            {project.security?.length > 0 && (
              <div style={{
                marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 14px', borderRadius: '999px',
                background: 'rgba(90,138,94,0.12)',
                border: '1px solid rgba(90,138,94,0.40)',
                color: 'var(--accent-2)',
                fontSize: '11px', fontWeight: 700,
              }}>
                <Lock size={12} />
                {project.security.length} Security Layers
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
