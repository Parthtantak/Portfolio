import React from 'react';
import { Sparkles } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-8 sm:py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">01 — about</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Heading, Bio & Focus Box */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              A second-year student building skills that outlast trends.
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              <p>
                Hi, I'm Parth — a second-year B.Tech Information Technology student at Zeal College of Engineering & Research, Pune. I'm at the very beginning of my engineering journey, and I'm using every project, every late-night bug, and every small win to build a strong foundation.
              </p>
              <p>
                Right now I'm focused on getting comfortable with C and C++, sharpening my problem-solving skills, and shipping small web pages with HTML and CSS. I'm self-motivated, a quick learner, and genuinely curious about new technologies — from low-level programming to modern web tools.
              </p>
            </div>

            {/* Currently Exploring Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl text-xs font-sans text-[var(--text-primary)] shadow-2xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
              <span>Currently exploring: DSA, web fundamentals, Git workflows.</span>
            </div>

            {/* Current Focus Window Box */}
            <GlassCard showDots title="system_focus.config">
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#de6430] font-medium">
                  // current_focus
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-primary)] font-sans font-normal">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#de6430] font-bold text-base">•</span>
                    <span>Strengthening C++ and OOP fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#de6430] font-bold text-base">•</span>
                    <span>Solving 3–5 DSA problems every week</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#de6430] font-bold text-base">•</span>
                    <span>Shipping small web pages with HTML / CSS / JS</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Portrait Window Card & 2x2 Glass Stats */}
          <div className="lg:col-span-6 space-y-6">

            {/* Theme-Matched Profile Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#de6430]/20 via-transparent to-amber-500/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src="./parth.jpg"
                  alt="Parth Nitin Tantak"
                  className="w-full h-full object-cover object-top filter contrast-[1.04] saturate-[1.08] brightness-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-950/75 text-white text-[11px] font-mono backdrop-blur-md border border-white/20 shadow-xs flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-xs bg-[#de6430]" />
                  <span>Zeal COE Pune</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-base font-bold font-sans tracking-tight">
                    Parth Nitin Tantak
                  </div>
                  <div className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                    <span>B.Tech IT '29</span>
                    <span className="text-[#de6430] font-semibold">Pune, MH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2x2 GlassOS Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard hoverTilt className="!p-5">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  2nd
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mt-1 font-semibold">
                  YEAR OF STUDY
                </div>
              </GlassCard>

              <GlassCard hoverTilt className="!p-5">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  IT
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mt-1 font-semibold">
                  MAJOR
                </div>
              </GlassCard>

              <GlassCard hoverTilt className="!p-5">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  Pune
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mt-1 font-semibold">
                  BASED IN
                </div>
              </GlassCard>

              <GlassCard hoverTilt className="!p-5">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  03
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mt-1 font-semibold">
                  PROJECTS BUILT
                </div>
              </GlassCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
