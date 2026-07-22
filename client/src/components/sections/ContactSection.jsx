import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContact } from '../../services/api';
import { PERSONAL_INFO } from '../../data/portfolioData';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export const ContactSection = () => {
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSubmissionState({ loading: true, success: false, error: null });

    try {
      const response = await submitContact(data);
      if (response && response.success) {
        setSubmissionState({ loading: false, success: true, error: null });
        reset();
      } else {
        throw new Error(response.message || 'Submission failed');
      }
    } catch (err) {
      setSubmissionState({
        loading: false,
        success: false,
        error: err.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-secondary/60 border-t border-border-glass">
      <div className="glow-orb-1 top-1/3 left-10 opacity-30 pointer-events-none" />
      <div className="glow-orb-2 bottom-10 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-accent-2 font-semibold"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display text-text-primary mt-2"
          >
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4">
            Have a project in mind, a job opportunity, or want to discuss full-stack &amp; mobile development? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold font-display text-text-primary mb-2">
                Contact Information
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Available for full-stack MERN engineering, Flutter mobile development, system architecture, and technical consulting.
              </p>

              <div className="space-y-4 pt-4 border-t border-border-glass">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary/70 border border-border-glass hover:border-accent-1 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-accent-1/10 text-accent-1 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-text-muted">Direct Email</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-1 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary/70 border border-border-glass hover:border-accent-2 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-accent-2/10 text-accent-2 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-text-muted">GitHub Repository</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-2 transition-colors">
                      @jawadkhan4915-pro
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary/70 border border-border-glass">
                  <div className="p-3 rounded-lg bg-accent-3/10 text-accent-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-text-muted">Location</span>
                    <span className="text-sm font-semibold text-text-primary">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold font-display text-text-primary mb-6">
              Send a Direct Message
            </h3>

            {/* Success Alert */}
            <AnimatePresence>
              {submissionState.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-success/15 border border-success/30 text-success flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Thank you for reaching out, Jawad Khan will get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Alert */}
            <AnimatePresence>
              {submissionState.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-error/15 border border-error/30 text-error flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Submission Error</h4>
                    <p className="text-xs text-text-secondary mt-0.5">{submissionState.error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary/80 border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-1 transition-all text-sm"
                  />
                  {errors.name && (
                    <span className="text-xs text-error mt-1 block">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary/80 border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-1 transition-all text-sm"
                  />
                  {errors.email && (
                    <span className="text-xs text-error mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  placeholder="Project Inquiry / Job Offer"
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary/80 border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-1 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  placeholder="Hi Jawad, I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary/80 border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-1 transition-all text-sm resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-error mt-1 block">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submissionState.loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-semibold text-sm shadow-glow-indigo hover:shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionState.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
