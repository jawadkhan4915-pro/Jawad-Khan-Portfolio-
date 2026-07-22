import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, Code, ShieldCheck, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-bg-secondary/50 border-y border-border-glass">
      <div className="glow-orb-2 top-1/2 left-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-accent-2 font-semibold"
          >
            Get to Know Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display text-text-primary mt-2"
          >
            Engineering <span className="gradient-text">Web &amp; Mobile</span> Systems
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-1/10 text-accent-1 border border-accent-1/20">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-text-primary">
                  Full Stack Engineer &amp; Mobile Developer
                </h3>
              </div>

              <p className="text-text-secondary text-base leading-relaxed mb-6">
                I am a passionate software engineer based in Rahim Yar Khan, Pakistan. I specialize in designing and deploying full-stack web applications using the <strong className="text-text-primary">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong> and cross-platform mobile apps using <strong className="text-text-primary">Flutter &amp; Dart</strong>.
              </p>

              <p className="text-text-secondary text-base leading-relaxed mb-8">
                My technical depth spans modern frontend user experiences, production REST APIs, real-time Socket.IO systems, and robust database architecture with MongoDB aggregation pipelines. I emphasize secure backend authentication implementations including <strong className="text-accent-2">JWT, Bcrypt hashing, and Role-Based Access Control (RBAC)</strong>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-glass">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 rounded-xl bg-bg-primary/40 border border-border-glass">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-display gradient-text">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-[11px] text-text-muted font-medium tracking-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Education Box */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-2/10 text-accent-2 border border-accent-2/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-text-primary">
                    Academic Education
                  </h3>
                  <span className="text-xs text-text-muted">Degree Program</span>
                </div>
              </div>

              {PERSONAL_INFO.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-bg-secondary/80 border border-border-glass space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent-1/10 text-accent-1 border border-accent-1/30">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-display text-text-primary">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Competencies Box */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent-3/10 text-accent-3 border border-accent-3/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-text-primary">
                  Engineering Principles
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  'Production-grade RESTful API architecture',
                  'JWT Authentication & RBAC Access Control',
                  'Responsive Glassmorphism & Framer Motion UI',
                  'Clean MVC & Repository Code Structure',
                ].map((principle, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
