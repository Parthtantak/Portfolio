import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export const Skills = () => {
  const programmingSkills = [
    { name: 'C / C++', note: 'Primary languages', level: 70 },
    { name: 'HTML', note: 'Semantic markup', level: 80 },
    { name: 'CSS', note: 'Layout & responsive', level: 65 },
    { name: 'JavaScript', note: 'Basics & DOM', level: 40 },
  ];

  const toolSkills = [
    { name: 'Git', note: 'Version control basics', level: 55 },
    { name: 'VS Code', note: 'Daily driver editor', level: 85 },
    { name: 'MS Office', note: 'Word, PowerPoint', level: 80 },
  ];

  const dabblingSkills = ['DSA', 'OOP', 'Linux basics', 'GitHub', 'Markdown'];

  return (
    <section id="skills" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">02 — skills</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10">
          {/* Left Title & Subtitle */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              The toolkit, honestly measured.
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              I'm a beginner — and I'd rather show you where I'm comfortable and where I'm still climbing than overstate my level. The bars below reflect today's reality, not tomorrow's plans.
            </p>
          </div>

          {/* Right 2-Card Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Programming Window Card */}
            <GlassCard showDots title="programming.env" hoverTilt>
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
                  <Code2 className="w-4 h-4 shrink-0" />
                  <span>PROGRAMMING</span>
                </div>

                <div className="space-y-4">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 font-sans">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                        <span>{skill.name}</span>
                        <span className="font-mono text-xs font-bold text-[#de6430]">{skill.level}%</span>
                      </div>
                      <div className="text-[11px] font-mono text-[var(--text-muted)]">
                        {skill.note}
                      </div>
                      <div className="w-full h-2 rounded-full bg-stone-200/80 dark:bg-zinc-800/80 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-[#de6430] dark:from-zinc-100 dark:via-zinc-200 dark:to-[#de6430] rounded-full shadow-2xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Tools Window Card */}
            <GlassCard showDots title="developer_tools.env" hoverTilt className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold mb-5">
                  <Wrench className="w-4 h-4 shrink-0" />
                  <span>TOOLS</span>
                </div>

                <div className="space-y-4">
                  {toolSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 font-sans">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                        <span>{skill.name}</span>
                        <span className="font-mono text-xs font-bold text-[#de6430]">{skill.level}%</span>
                      </div>
                      <div className="text-[11px] font-mono text-[var(--text-muted)]">
                        {skill.note}
                      </div>
                      <div className="w-full h-2 rounded-full bg-stone-200/80 dark:bg-zinc-800/80 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-[#de6430] dark:from-zinc-100 dark:via-zinc-200 dark:to-[#de6430] rounded-full shadow-2xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Also Dabbling In */}
              <div className="pt-4 border-t border-[var(--border-color)] space-y-2 mt-6">
                <div className="text-[11px] font-mono text-[#de6430] font-medium">
                  // also dabbling in
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {dabblingSkills.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[#de6430]/60 font-medium transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </GlassCard>

          </div>
        </div>

      </div>
    </section>
  );
};
