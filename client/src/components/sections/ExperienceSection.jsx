import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Smartphone, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ExperienceSection = () => {
  const timelineItems = [
    {
      type: 'training',
      title: 'Web Development (MERN Stack)',
      institute: 'IT Center',
      location: 'Rahim Yar Khan, Pakistan',
      period: '2025',
      icon: Globe,
      color: 'var(--accent-1)',
      details: [
        'Hands-on mastery of Full Stack MERN development (MongoDB, Express, React, Node.js).',
        'Built production API systems with JWT authentication, bcrypt password hashing, and RBAC.',
        'Implemented aggregation pipelines, pagination, and relational schemas with Mongoose virtuals.',
      ],
    },
    {
      type: 'training',
      title: 'Mobile App Development (Flutter + Dart)',
      institute: 'Smart Start IT Institute',
      location: 'Khanpur, Pakistan',
      period: '2024',
      icon: Smartphone,
      color: 'var(--accent-2)',
      details: [
        'Cross-platform iOS & Android application design with Dart and Flutter framework.',
        'State management, RESTful API integrations, responsive mobile layouts, and local storage sync.',
        'Material 3 design principles, custom widgets, and native feature integrations.',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Software Engineering (BS SE)',
      institute: 'Khawaja Fareed University of Engineering & Information Technology (KFUEIT)',
      location: 'Rahim Yar Khan, Pakistan',
      period: 'In Progress',
      icon: GraduationCap,
      color: 'var(--accent-3)',
      details: [
        'Core computer science & software engineering curriculum.',
        'Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP).',
        'Software Architecture, Software Quality Assurance, and System Analysis & Design.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="glow-orb-1 top-1/2 left-0 opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-accent-1 font-semibold"
          >
            Education &amp; Training
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display text-text-primary mt-2"
          >
            Professional <span className="gradient-text">Timeline</span>
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4">
            Academic degree education and specialized software development institute certifications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-border-glass ml-4 sm:ml-32 space-y-12">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-bg-card border-2 border-accent-1 flex items-center justify-center shadow-glow-indigo group-hover:scale-115 transition-transform">
                  <Icon className="w-4 h-4 text-accent-2" />
                </div>

                {/* Left Period Label (on desktop) */}
                <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
                  <span className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-bg-card border border-border-glass text-accent-2">
                    {item.period}
                  </span>
                </div>

                {/* Timeline Content Glass Card */}
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-bg-secondary text-accent-2 border border-border-glass">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent-1/10 text-accent-1 border border-accent-1/30">
                      {item.type === 'education' ? 'Academic Degree' : 'Professional Training'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary mb-1">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary mb-4">
                    <span className="font-semibold text-text-primary">{item.institute}</span>
                    <span className="flex items-center gap-1 text-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-accent-2" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2 border-t border-border-glass pt-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
