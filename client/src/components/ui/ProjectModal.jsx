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
  const tabsAvailable = TAB_CONFIG.filter((t) => project[t.key]?.length > 0);

  return (
    <AnimatePresence>
      {/* ── Full-screen container ── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* ── Modal Window ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 340 }}
          style={{
            backgroundColor: 'var(--modal-bg)',
            borderColor: 'var(--modal-border)',
          }}
          className="modal-root relative z-10 w-full max-w-2xl my-auto rounded-2xl sm:rounded-3xl border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* ── Decorative top-right glow ── */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--accent-1), transparent 70%)',
              opacity: 0.18,
              pointerEvents: 'none',
              filter: 'blur(30px)',
            }}
          />

          {/* Close Button (Always accessible top-right) */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full cursor-pointer transition-all touch-target"
            style={{
              background: 'var(--modal-chip-bg)',
              border: '1px solid var(--modal-chip-border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-1)';
              e.currentTarget.style.borderColor = 'var(--accent-1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--modal-chip-border)';
            }}
          >
            <X size={18} />
          </button>

          {/* ══════════════ SCROLLABLE MODAL BODY ══════════════ */}
          <div className="overflow-y-auto flex-1 hide-scrollbar">
            {/* Thumbnail Banner */}
            {project.image && (
              <div
                className="w-full h-36 xs:h-44 sm:h-52 relative overflow-hidden shrink-0 border-b"
                style={{ borderColor: 'var(--modal-divider)' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, var(--modal-bg) 100%)',
                  }}
                />
              </div>
            )}

            {/* Header Content */}
            <div className="p-4 sm:p-7 md:p-8 pb-3 sm:pb-4 relative">
              {/* Category Badge */}
              <span
                className="inline-block mb-2 sm:mb-3 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border"
                style={{
                  background: 'var(--modal-badge-bg)',
                  borderColor: 'var(--modal-badge-border)',
                  color: 'var(--accent-1)',
                }}
              >
                {project.category}
              </span>

              <h2
                className="text-xl xs:text-2xl sm:text-3xl font-extrabold font-display leading-tight mb-2 pr-10"
                style={{ color: 'var(--modal-heading)' }}
              >
                {project.title}
              </h2>

              <p
                className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4"
                style={{ color: 'var(--modal-subtext)' }}
              >
                {project.tagline}
              </p>

              {/* Description box */}
              {project.description && (
                <p
                  className="text-xs sm:text-sm leading-relaxed rounded-xl p-3 sm:p-4 mb-4 border"
                  style={{
                    color: 'var(--modal-body-text)',
                    background: 'var(--modal-desc-bg)',
                    borderColor: 'var(--modal-desc-border)',
                  }}
                >
                  {project.description}
                </p>
              )}

              {/* Tech Stack */}
              <div className="mb-2">
                <div className="flex items-center gap-1.5 mb-2">
                  <Cpu size={13} style={{ color: 'var(--accent-1)' }} />
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: 'var(--modal-label)' }}
                  >
                    Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border"
                      style={{
                        background: 'var(--modal-chip-bg)',
                        borderColor: 'var(--modal-chip-border)',
                        color: 'var(--modal-chip-text)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ══════════════ HORIZONTAL SCROLLABLE TABS ══════════════ */}
            <div
              className="px-3 sm:px-7 md:px-8 border-b sticky top-0 z-10"
              style={{
                borderColor: 'var(--modal-divider)',
                backgroundColor: 'var(--modal-bg)',
              }}
            >
              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto hide-scrollbar whitespace-nowrap py-1">
                {tabsAvailable.map(({ key, label, icon: Icon }) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all touch-target shrink-0 ${
                        isActive
                          ? 'border-b-2 font-bold'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        background: isActive ? 'var(--modal-tab-active-bg)' : 'transparent',
                        color: isActive ? 'var(--modal-heading)' : 'var(--modal-label)',
                        borderBottomColor: isActive ? 'var(--accent-1)' : 'transparent',
                      }}
                    >
                      <Icon
                        size={14}
                        style={{ color: isActive ? 'var(--accent-1)' : 'var(--modal-label)' }}
                      />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ══════════════ TAB CONTENT ══════════════ */}
            <div className="p-4 sm:p-7 md:p-8 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Section heading */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    {React.createElement(
                      TAB_CONFIG.find((t) => t.key === activeTab)?.icon || Layers,
                      {
                        size: 15,
                        style: { color: 'var(--accent-1)' },
                      }
                    )}
                    <span
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--modal-label)' }}
                    >
                      {SECTION_LABEL[activeTab]}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 sm:gap-2.5 list-none m-0 p-0">
                    {activeData.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm leading-relaxed"
                        style={{
                          background: 'var(--modal-item-bg)',
                          borderColor: 'var(--modal-item-border)',
                          color: 'var(--modal-body-text)',
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{
                            color: CHECK_COLOR[activeTab],
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ══════════════ FOOTER ACTIONS ══════════════ */}
          <div
            className="p-3.5 sm:p-5 md:px-8 border-t flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0"
            style={{
              borderColor: 'var(--modal-divider)',
              background: 'var(--modal-footer-bg)',
            }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md transition-all touch-target"
              style={{
                background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
              }}
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all touch-target"
              style={{
                background: 'var(--modal-chip-bg)',
                borderColor: 'var(--modal-chip-border)',
                color: 'var(--modal-heading)',
              }}
            >
              <Github size={15} />
              <span>Source Code</span>
            </a>

            {project.security?.length > 0 && (
              <div
                className="w-full xs:w-auto xs:ml-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-bold"
                style={{
                  background: 'rgba(90,138,94,0.12)',
                  borderColor: 'rgba(90,138,94,0.40)',
                  color: 'var(--accent-2)',
                }}
              >
                <Lock size={12} />
                <span>{project.security.length} Security Layers</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
