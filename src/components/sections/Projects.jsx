import React, { useState } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-8 sm:py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Line */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">03 — projects</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        {/* Title & Top Right Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
              Featured Projects & Systems
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              Full-stack web applications and structured C++ software solutions engineered with a focus on performance, data integrity, and real-world utility.
            </p>
          </div>
        </div>

        {/* 2 Projects GlassOS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-sans">
          {portfolioData.projects.map((proj) => (
            <GlassCard 
              key={proj.id} 
              showDots 
              title={`system_${proj.num}`} 
              hoverTilt 
              className="flex flex-col justify-between !p-0 overflow-hidden"
            >
              {/* Upper Box: GlassOS Header Card */}
              <div className="bg-stone-200/40 dark:bg-zinc-800/40 p-6 sm:p-8 relative flex flex-col justify-between h-44 border-b border-[var(--border-color)] backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] font-medium">
                  <span className="font-bold text-[var(--text-primary)]">PROJECT {proj.num}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#de6430]/15 border border-[#de6430]/30 text-[10px] tracking-wider uppercase font-semibold text-[#de6430]">
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {proj.headerTitle}
                </h3>
              </div>

              {/* Lower Box: Content & Overview */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-stone-200/60 dark:bg-white/5 text-[var(--text-primary)] border border-stone-300/80 dark:border-white/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Clean Professional Overview Button */}
                  <div className="pt-2 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified Architecture</span>
                    </span>

                    <button
                      onClick={() => setSelectedProject(selectedProject?.id === proj.id ? null : proj)}
                      className="px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white flex items-center gap-1.5 font-mono text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#de6430]" />
                      <span>{selectedProject?.id === proj.id ? 'Close Overview' : 'View Details'}</span>
                    </button>
                  </div>

                  {/* Expandable Overview Details */}
                  {selectedProject?.id === proj.id && (
                    <div className="p-4 rounded-xl bg-stone-100/80 dark:bg-[#111216]/90 border border-stone-300/80 dark:border-white/10 space-y-2 text-xs font-sans text-[var(--text-secondary)] transition-all animate-fadeIn">
                      <div className="font-bold font-mono text-[#de6430] uppercase text-[11px] tracking-wider">
                        Key Engineering Highlights:
                      </div>
                      {proj.id === 'cie2-tracker' ? (
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>End-to-end management of CIE-2 academic activities and termwork assignments.</li>
                          <li>Role-based access control (RBAC) separating student submissions and faculty grading.</li>
                          <li>MySQL database schema optimized for marks aggregation and PDF report generation.</li>
                        </ul>
                      ) : (
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>Modular Object-Oriented C++ architecture separating passenger and flight objects.</li>
                          <li>Binary file storage for persistent ticket booking, cancellation, and seat allocation.</li>
                          <li>Interactive menu-driven console CLI designed for efficiency and zero data corruption.</li>
                        </ul>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
