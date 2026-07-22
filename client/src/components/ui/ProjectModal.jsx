import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-bg-card/95 border border-border-glass rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 backdrop-blur-xl overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-accent-1/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-bg-secondary/80 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-1 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-1/10 text-accent-2 border border-accent-1/30 mb-3">
            {project.category}
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-2">
            {project.title}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mb-6">
            {project.tagline}
          </p>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-accent-1" /> Tech Stack & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-bg-secondary text-text-primary border border-border-glass"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-accent-2" /> Key Highlights & Implementations
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-glass">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-sm shadow-glow-indigo hover:opacity-95 transition-all"
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
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
