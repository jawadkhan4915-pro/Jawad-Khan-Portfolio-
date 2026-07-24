import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { fetchProjects } from '../../services/api';
import { ProjectModal } from '../ui/ProjectModal';

export const ProjectsSection = () => {
  const [projectsList, setProjectsList] = useState(PROJECTS);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      if (data && data.length > 0) {
        setProjectsList(data);
      }
    };
    loadProjects();
  }, []);

  const categories = ['All', 'Full Stack', 'Web', 'Mobile'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-bg-secondary/40 border-y border-border-glass">
      <div className="glow-orb-2 bottom-10 right-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-accent-2 font-semibold"
          >
            Featured Portfolio Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display text-text-primary mt-2"
          >
            Production <span className="gradient-text">Projects &amp; SaaS</span> Apps
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4">
            Production-grade web and mobile applications with real live demos, complex databases, and security systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-accent-1 to-accent-2 text-white shadow-glow-indigo'
                  : 'bg-bg-card/70 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-1/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-6 sm:p-7 flex flex-col justify-between relative group cursor-pointer ${
                project.featured ? 'border-accent-1/50 shadow-glow-indigo/20' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Featured Ribbon */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-semibold uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-accent-3/15 text-accent-3 border border-accent-3/30">
                  <Sparkles className="w-3 h-3" /> Featured
                </div>
              )}

              <div>
                {/* Category tag */}
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-2 mb-2 block">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-accent-1 transition-colors mb-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-1 transition-colors shrink-0" />
                </h3>

                {/* Tagline */}
                <p className="text-text-secondary text-xs sm:text-sm mb-3 line-clamp-2 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                {project.description && (
                  <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-bg-secondary text-text-secondary border border-border-glass"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-text-muted">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Technical Detail Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.security?.length > 0 && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border"
                      style={{ borderColor: 'rgba(125,174,130,0.4)', color: 'var(--accent-2)', background: 'rgba(125,174,130,0.08)' }}>
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {project.security.length} Security Layers
                    </span>
                  )}
                  {project.algorithms?.length > 0 && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border"
                      style={{ borderColor: 'rgba(200,169,110,0.4)', color: 'var(--accent-1)', background: 'rgba(200,169,110,0.08)' }}>
                      <Sparkles className="w-2.5 h-2.5" />
                      {project.algorithms.length} Algorithms
                    </span>
                  )}
                  {project.oopStrategy?.length > 0 && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border"
                      style={{ borderColor: 'rgba(200,169,110,0.25)', color: 'var(--accent-3)', background: 'rgba(212,197,169,0.06)' }}>
                      <Layers className="w-2.5 h-2.5" />
                      OOP Patterns
                    </span>
                  )}
                </div>

                <p className="text-[10px] text-text-muted font-mono tracking-wide">↑ Click card to explore technical details</p>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-glass" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium text-xs shadow-glow-indigo hover:opacity-90 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-bg-secondary border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-1 transition-all"
                  title="Source Code Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
