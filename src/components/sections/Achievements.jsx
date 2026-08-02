import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">07 — achievements</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        {/* Title & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              Honors & Recognitions
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              Academic distinction, sports championships, and creative arts awards recognizing milestones along the way.
            </p>
          </div>
        </div>

        {/* GlassOS Bento Grid with Structured Equal-Height Slot Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch font-mono">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full flex flex-col"
            >
              <GlassCard
                showDots
                title={`honor_0${idx + 1}.sys`}
                hoverTilt
                className="h-full flex flex-col group"
                contentClassName="h-full flex flex-col justify-between flex-1"
              >
                {/* Slot 1: Badge & Status Row */}
                <div className="flex items-center justify-between h-7 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-bold text-purple-600 dark:text-purple-400 shrink-0">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] font-medium shrink-0">
                    {item.date}
                  </span>
                </div>

                {/* Slot 2 & 3 & 4: Category, Title & Description Container */}
                <div className="flex-1 flex flex-col justify-start">
                  {/* Category Label */}
                  <div className="text-xs text-[#de6430] font-bold uppercase tracking-wider h-4 mb-2 flex items-center">
                    {item.category}
                  </div>

                  {/* Reserved Title Container (Strict 2-line height alignment) */}
                  <div className="h-14 sm:h-16 flex items-start mb-3">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug font-sans group-hover:text-[#de6430] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Container */}
                  <div className="flex-1">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
