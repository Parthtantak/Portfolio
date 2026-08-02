import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">06 — certifications</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        {/* Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              Verified Credentials
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              Structured course completions and technical programming certifications validated through rigorous evaluations.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard showDots title={`credential_0${idx + 1}.cert`} hoverTilt className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] font-bold">
                      <Award className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] font-medium">{cert.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight font-sans">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-muted)]">Verified Record</span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[#de6430] hover:text-[#de6430] transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
