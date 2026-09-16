import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Code2,
  Wrench,
  Database,
  Server,
  Code,
  Cpu,
  Layers,
  Terminal,
  FileCode,
  Layout,
  Palette,
  Network,
  ShieldCheck,
  GitBranch,
  Monitor,
  Zap,
  Box,
} from 'lucide-react';
import { SKILLS } from '../../data/portfolioData';

const ICON_MAP = {
  Globe,
  Smartphone,
  Code2,
  Wrench,
  Database,
  Server,
  Code,
  Cpu,
  Layers,
  Terminal,
  FileCode,
  Layout,
  Palette,
  Network,
  ShieldCheck,
  GitBranch,
  Monitor,
  Zap,
  Box,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILLS.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="glow-orb-1 top-1/3 right-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-accent-1 font-semibold"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-bold font-display text-text-primary mt-2"
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </motion.h2>
          <p className="text-text-secondary text-xs sm:text-base mt-3 sm:mt-4">
            Full Stack MERN web engineering, Flutter cross-platform mobile development, and backend security protocols.
          </p>
        </div>

        {/* Category Filters (Horizontally scrollable on mobile, centered on desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto hide-scrollbar pb-3 mb-8 sm:mb-12 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium transition-all shrink-0 touch-target ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-1 to-accent-2 text-white shadow-glow-indigo'
                  : 'bg-bg-card/70 border border-border-glass text-text-secondary hover:text-text-primary hover:border-accent-1/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredSkills.map((skillGroup, groupIdx) => {
            const GroupIcon = ICON_MAP[skillGroup.icon] || Code;

            return (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="glass-card p-5 xs:p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-2/20 border border-accent-1/30 text-accent-2 shrink-0">
                      <GroupIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-text-primary">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {skillGroup.items.map((item, itemIdx) => {
                      const ItemIcon = ICON_MAP[item.icon] || Cpu;

                      return (
                        <div
                          key={itemIdx}
                          className="p-3 sm:p-3.5 rounded-xl bg-bg-secondary/70 border border-border-glass hover:border-accent-1/40 transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-bg-card text-accent-1 group-hover:scale-110 transition-transform shrink-0">
                              <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div>
                              <span className="block text-xs sm:text-sm font-semibold text-text-primary font-display">
                                {item.name}
                              </span>
                              <span className="text-[9.5px] sm:text-[10px] font-mono text-text-muted">
                                {item.level}
                              </span>
                            </div>
                          </div>

                          <div className="w-2 h-2 rounded-full bg-accent-2/80 group-hover:animate-ping shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
