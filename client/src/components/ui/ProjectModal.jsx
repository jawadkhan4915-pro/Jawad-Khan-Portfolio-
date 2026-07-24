import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, Github, CheckCircle2, Layers, Cpu,
  ShieldCheck, GitBranch, Database, Code2, Zap, Lock
} from 'lucide-react';

const TAB_CONFIG = [
  { key: 'highlights', label: 'Overview', icon: Layers },
  { key: 'oopStrategy', label: 'OOP Strategy', icon: Code2 },
  { key: 'dataHandling', label: 'Data Handling', icon: Database },
  { key: 'algorithms', label: 'Algorithms', icon: Zap },
  { key: 'security', label: 'Security', icon: ShieldCheck },
];

const ICON_COLOR = {
  highlights: 'var(--accent-2)',
  oopStrategy: 'var(--accent-1)',
  dataHandling: 'var(--accent-1)',
  algorithms: 'var(--accent-2)',
  security: 'var(--accent-3)',
};

const CHECK_COLOR = {
  highlights: 'var(--success)',
  oopStrategy: 'var(--accent-1)',
  dataHandling: 'var(--accent-1)',
  algorithms: 'var(--accent-2)',
  security: 'var(--accent-2)',
};

const SECTION_LABEL = {
  highlights: 'Key Features & Implementations',
  oopStrategy: 'OOP Design Patterns & Architecture Strategies',
  dataHandling: 'Data Management & Programming Fundamentals',
  algorithms: 'Algorithms, Complexity & CS Fundamentals',
  security: 'Security Architecture & Data Protection',
};

export const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('highlights');

  if (!project) return null;

  const activeData = project[activeTab] || project.highlights || [];
  const tabsAvailable = TAB_CONFIG.filter(t => project[t.key]?.length > 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-3xl bg-bg-card/97 border border-border-glass rounded-2xl shadow-2xl z-10 my-8 backdrop-blur-xl overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, var(--accent-1), transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 70%)' }}
          />

          {/* Header */}
          <div className="relative px-6 sm:px-8 pt-8 pb-0">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-bg-secondary/80 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-1 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-1/10 text-accent-1 border border-accent-1/30 mb-3">
              {project.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-1 pr-10">
              {project.title}
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            {project.description && (
              <p className="text-text-secondary text-sm leading-relaxed mb-5 p-4 rounded-xl bg-bg-secondary/60 border border-border-glass">
                {project.description}
              </p>
            )}

            {/* Tech Stack Badges */}
            <div className="mb-5">
              <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" style={{ color: 'var(--accent-1)' }} />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-bg-secondary text-text-primary border border-border-glass hover:border-accent-1/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 sm:px-8 pt-0">
            <div className="flex flex-wrap gap-1 border-b border-border-glass pb-0">
              {tabsAvailable.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold rounded-t-lg transition-all ${
                    activeTab === key
                      ? 'text-text-primary bg-bg-secondary/60 border-t border-l border-r border-border-glass'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: activeTab === key ? ICON_COLOR[key] : 'inherit' }} />
                  {label}
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTabBar"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                      style={{ background: 'var(--gradient-brand)' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-6 sm:px-8 py-5 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Section Label */}
                <div className="flex items-center gap-2 mb-3">
                  {React.createElement(TAB_CONFIG.find(t => t.key === activeTab)?.icon || Layers, {
                    className: 'w-4 h-4',
                    style: { color: ICON_COLOR[activeTab] },
                  })}
                  <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    {SECTION_LABEL[activeTab]}
                  </h4>
                </div>

                <ul className="space-y-3">
                  {activeData.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed p-3 rounded-xl bg-bg-secondary/40 border border-border-glass hover:border-accent-1/30 transition-colors group"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5 transition-colors"
                        style={{ color: CHECK_COLOR[activeTab] }}
                      />
                      <span className="group-hover:text-text-primary transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 px-6 sm:px-8 py-5 border-t border-border-glass bg-bg-secondary/30">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white hover:opacity-90 transition-all shadow-glow-indigo"
              style={{ background: 'var(--gradient-brand)' }}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-secondary border border-border-glass text-text-primary hover:border-accent-1 font-medium text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            {/* Security badge */}
            {project.security?.length > 0 && (
              <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{ borderColor: 'rgba(125,174,130,0.4)', color: 'var(--accent-2)', background: 'rgba(125,174,130,0.08)' }}>
                <Lock className="w-3 h-3" />
                {project.security.length} Security Layers
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
