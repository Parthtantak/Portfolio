import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';

export const Projects = () => {
  const projects = [
    {
      num: '01',
      badge: 'C++',
      headerTitle: 'Inventory Management',
      title: 'Inventory Management System',
      description:
        'A console-based inventory system that lets a small store add, update, search and delete products. Built to practice classes, file handling and clean menu-driven CLI design.',
      tags: ['C++', 'OOP', 'File I/O'],
      codeUrl: 'https://github.com/parthtantak',
      demoUrl: 'https://parthtantak.github.io/portfolio/',
    },
    {
      num: '02',
      badge: 'C++',
      headerTitle: 'Fibonacci Generator',
      title: 'Fibonacci Generator using Recursion',
      description:
        'Generates the Fibonacci sequence using both naïve and memoized recursion. A small project that helped me understand call stacks, time complexity and the value of dynamic...',
      tags: ['C++', 'Recursion', 'DSA'],
      codeUrl: 'https://github.com/parthtantak',
      demoUrl: 'https://parthtantak.github.io/portfolio/',
    },
    {
      num: '03',
      badge: 'C++',
      headerTitle: 'Student Management',
      title: 'Student Management System',
      description:
        'A CRUD application to manage student records — names, roll numbers, marks and grades. Focused on clean data modelling and a friendly text interface for non-technical users.',
      tags: ['C++', 'Structs', 'CRUD'],
      codeUrl: 'https://github.com/parthtantak',
      demoUrl: 'https://parthtantak.github.io/portfolio/',
    },
  ];

  return (
    <section id="projects" className="py-8 sm:py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">03 — projects</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        {/* Title & Top Right Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              Small projects, real lessons.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              These are the projects I've built while learning. Each one taught me something specific about C++, problem solving or building for real users.
            </p>
          </div>
        </div>

        {/* 3 Projects GlassOS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {projects.map((proj) => (
            <GlassCard key={proj.num} showDots title={`project_${proj.num}.cpp`} hoverTilt className="flex flex-col justify-between !p-0 overflow-hidden">
              {/* Upper Box: GlassOS Header Card */}
              <div className="bg-stone-200/40 dark:bg-zinc-800/40 p-6 relative flex flex-col justify-between h-44 border-b border-[var(--border-color)] backdrop-blur-md">

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] font-medium">
                  <span>{proj.num}</span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#de6430]">{proj.badge}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {proj.headerTitle}
                </h3>

                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center hover:bg-[#de6430] dark:hover:bg-[#de6430] dark:hover:text-white hover:scale-110 transition-all shadow-xs"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Lower Box: Content & Action Pills */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2 font-mono text-xs">
                    <a
                      href={proj.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-stone-200/50 dark:hover:bg-zinc-800/60 flex items-center gap-1.5 font-medium transition-all shadow-2xs cursor-pointer active:scale-95"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#de6430]" />
                      <span>Code</span>
                    </a>

                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white flex items-center gap-1.5 font-medium transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
