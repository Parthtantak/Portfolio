import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { audioFx } from '../../utils/audio';
import { GlassCard } from '../common/GlassCard';

export const Education = () => {
  const items = [
    {
      title: 'B.Tech in Information Technology',
      period: '2025 — 2029 (Ongoing, 2nd year)',
      location: 'Zeal College of Engineering & Research, Narhe, Pune',
      status: 'Ongoing (2nd Year)',
      statusStyle: 'bg-[#de6430]/15 text-[#de6430] border-[#de6430]/40',
      courses: ['C / C++ Programming', 'Web Engineering', 'Engineering Math', 'Digital Systems'],
      description:
        'Currently in the second year. Building fundamentals in programming, mathematics for computing, and digital systems while exploring web development on the side.',
    },
    {
      title: 'Higher Secondary (HSC, 12th)',
      period: 'Completed',
      location: 'Pratibha Junior College, Kalbhor Nagar, Akurdi, Pune',
      status: 'First Class Distinction (PCM)',
      statusStyle: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40',
      courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      description:
        'Science stream with strong grades in Chemistry, Physics and Mathematics — the gateway that pulled me towards computer science and engineering.',
    },
    {
      title: 'Secondary School Certificate (SSC, 10th)',
      period: 'Completed',
      location: 'Infant Jesus High School, Wakad, Pune',
      status: 'Completed with Distinction',
      statusStyle: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40',
      courses: ['Mathematics', 'Science', 'English', 'Social Studies'],
      description:
        'Built early discipline and curiosity for science, math and technology that shaped my decision to pursue Information Technology.',
    },
  ];

  return (
    <section id="education" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">04 — education</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
                The classroom is just the start.
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
                I'm currently in the second year of my B.Tech in Information Technology. The real learning happens in late-night side projects, tutorials, and the occasional hour-long battle with a missing semicolon.
              </p>
            </div>

            {/* Academic Overview Glass Window Box */}
            <GlassCard showDots title="academic_snapshot.sys">
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#de6430] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>ACADEMIC SNAPSHOT</span>
                </div>
                <div className="space-y-2 text-[var(--text-secondary)] font-medium">
                  <div className="flex justify-between pb-1 border-b border-[var(--border-color)]">
                    <span>Stream</span>
                    <span className="font-bold text-[var(--text-primary)]">B.Tech IT</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-[var(--border-color)]">
                    <span>University</span>
                    <span className="font-bold text-[var(--text-primary)]">Zeal COE Pune</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standing</span>
                    <span className="font-bold text-[#de6430]">2nd Year Student</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute top-6 bottom-6 left-5 sm:left-6 w-[2px] bg-gradient-to-b from-[#de6430] via-stone-300 dark:via-zinc-700 to-transparent" />

            <div className="space-y-8">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onMouseEnter={() => audioFx.playHover()}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center shrink-0 z-10 shadow-md group-hover:scale-110 group-hover:bg-[#de6430] dark:group-hover:bg-[#de6430] dark:group-hover:text-white transition-all duration-300 mt-1">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <GlassCard showDots title={`milestone_0${idx+1}.log`} hoverTilt className="flex-1">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border self-start sm:self-auto ${item.statusStyle}`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                        {item.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)] mr-1 font-semibold">
                          <BookOpen className="w-3 h-3 text-[#de6430]" />
                          <span>Focus:</span>
                        </div>
                        {item.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[11px] font-mono font-medium text-[var(--text-primary)]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
