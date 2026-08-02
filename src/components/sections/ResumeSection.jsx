import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Printer, 
  Maximize2, 
  X, 
  Check,
  MapPin,
  Phone,
  Mail,
  User,
  GraduationCap,
  Code2,
  Briefcase,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { audioFx } from '../../utils/audio';

export const ResumeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    audioFx.playClick();
    window.print();
  };

  const handleDownload = () => {
    audioFx.playClick();
    const element = document.createElement('a');
    const resumeText = `
PARTH NITIN TANTAK
Pune, Maharashtra, India | +91 88558 90656 | tantakparth@gmail.com
GitHub: https://github.com/parthtantak | LinkedIn: https://linkedin.com/in/parthtantak

SUMMARY
Motivated 2nd Year B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving.

EDUCATION
- B.Tech in Information Technology | Zeal College of Engineering & Research, Pune (2025 – 2029, 2nd Year)
- Higher Secondary Certificate (HSC - 12th) | Pratibha Jr. College, Pune (Distinction in PCM)
- Secondary School Certificate (SSC - 10th) | Infant Jesus High School, Pune (First Class Distinction)

TECHNICAL SKILLS
- Languages: C, C++, JavaScript (ES6+), HTML5, CSS3
- Frontend & Tools: React.js, Vite, Tailwind CSS, Git, GitHub
- Core Concepts: Data Structures (DSA), OOP, Web Systems
- Productivity: MS Office, Linux CLI, Clean UI Architecture

KEY PROJECTS
- Parth's Minimal Developer Portfolio (React, Vite, Tailwind CSS)
- C++ Algorithmic Workbench & Inventory System (C++, OOP, File I/O)

CERTIFICATIONS & ACHIEVEMENTS
- Academic Distinction in Physics, Chemistry & Math (12th Board)
- Web Development & Responsive UI Engineering Certification
- Sports & Competitive E-Sports Accolades
    `.trim();

    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Parth_Nitin_Tantak_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-8 sm:py-10 relative z-10 font-sans print:py-0 print:m-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0">
        
        {/* Section Header Line */}
        <div className="flex items-center gap-4 mb-8 text-xs font-mono print:hidden">
          <span className="text-[#de6430] font-semibold">06 — resume</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
          <span className="px-3 py-1 rounded-full bg-[#de6430]/15 text-[#de6430] border border-[#de6430]/30 text-[11px] font-mono font-bold">
            ATS-Optimized Layout
          </span>
        </div>

        {/* Top Action Bar & Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 print:hidden">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] relative inline-block">
              Curriculum Vitae
              <span className="block h-1 w-12 bg-[#de6430] rounded-full mt-1.5" />
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal max-w-xl">
              ATS-compliant, structured single-page resume layout ready for recruiters, internship applications, and printing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                audioFx.playClick();
                setModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold font-mono flex items-center gap-2 hover:bg-stone-200/50 dark:hover:bg-[#1C1F26] active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-[#de6430]" />
              <span>Fullscreen</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold font-mono flex items-center gap-2 hover:bg-stone-200/50 dark:hover:bg-[#1C1F26] active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#de6430]" />
              <span>Print PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold font-sans flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
              <span>{copied ? 'Downloaded!' : 'Download Resume'}</span>
            </button>
          </div>
        </div>

        {/* Embedded GlassOS Resume Paper Preview Card (Matching Screenshot) */}
        <div className="bg-white dark:bg-[#0c0e14] border border-stone-300/80 dark:border-white/10 rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl max-w-4xl mx-auto space-y-9 font-sans print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:rounded-none transition-all">
          
          {/* Contact Header Block */}
          <div className="border-b border-stone-200 dark:border-white/10 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-lg">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
                PARTH NITIN TANTAK
              </h1>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#de6430] uppercase tracking-wider leading-relaxed">
                B.TECH INFORMATION TECHNOLOGY STUDENT | ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-[var(--text-secondary)] w-full md:w-auto text-left md:text-right">
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <span>Kalewadi, Pimpri-Chinchwad, Pune, India</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <span>+91 88558 90656</span>
                <span className="text-[var(--text-muted)]">•</span>
                <Mail className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <span>tantakparth@gmail.com</span>
              </div>
              <div className="flex items-center md:justify-end gap-2 text-[#de6430] font-medium pt-0.5">
                <GithubIcon className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <a href="https://github.com/parthtantak" target="_blank" rel="noreferrer" className="hover:underline">github.com/parthtantak</a>
                <span className="text-[var(--text-muted)]">•</span>
                <LinkedinIcon className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <a href="https://linkedin.com/in/parthtantak" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/parthtantak</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <User className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-widest">
                PROFESSIONAL SUMMARY
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal pl-11">
              Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving. Dedicated to clean software engineering and user-focused web interfaces.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-widest">
                EDUCATION
              </h3>
            </div>
            
            <div className="ml-4 pl-7 border-l-2 border-stone-200 dark:border-white/10 space-y-6 relative">
              {/* Item 1 */}
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white dark:ring-[#0c0e14]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-[var(--text-primary)] gap-1">
                  <span>B.Tech in Information Technology — <span className="font-normal text-[var(--text-secondary)]">Zeal College of Engineering & Research, Pune</span></span>
                  <span className="font-mono text-[var(--text-muted)] text-xs font-semibold shrink-0">2025 — 2029 (2nd Year)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-normal mt-1 leading-relaxed">
                  Focus on Programming & Problem Solving (C/C++), Web Engineering, Engineering Mathematics, and Computer Architecture.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white dark:ring-[#0c0e14]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-[var(--text-primary)] gap-1">
                  <span>Higher Secondary Certificate (HSC - 12th) — <span className="font-normal text-[var(--text-secondary)]">Pratibha Jr. College, Pune</span></span>
                  <span className="font-mono text-emerald-500 dark:text-emerald-400 text-xs font-semibold shrink-0">Completed</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-normal mt-1 leading-relaxed">
                  Science Stream with Distinction in Physics, Chemistry, and Mathematics (PCM).
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white dark:ring-[#0c0e14]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-[var(--text-primary)] gap-1">
                  <span>Secondary School Certificate (SSC - 10th) — <span className="font-normal text-[var(--text-secondary)]">Infant Jesus High School, Pune</span></span>
                  <span className="font-mono text-emerald-500 dark:text-emerald-400 text-xs font-semibold shrink-0">Completed</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-normal mt-1 leading-relaxed">
                  First Class Distinction with strong mathematical and analytical foundations.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-widest">
                TECHNICAL SKILLS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-11">
              <div className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Languages: </span>
                  <span className="text-[var(--text-secondary)]">C, C++, JavaScript (ES6+), HTML5, CSS3</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Frontend & Tools: </span>
                  <span className="text-[var(--text-secondary)]">React.js, Vite, Tailwind CSS, Git, GitHub</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Core Concepts: </span>
                  <span className="text-[var(--text-secondary)]">Data Structures (DSA), OOP, Web Systems</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Productivity: </span>
                  <span className="text-[var(--text-secondary)]">MS Office, Linux CLI, Clean UI Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-widest">
                KEY PROJECTS
              </h3>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-[var(--text-primary)] gap-1">
                  <span>CIE-2 Tracker & Termwork Management System <span className="font-normal text-[var(--text-secondary)]">(React, Node.js, Express.js, MySQL, Tailwind CSS)</span></span>
                  <span className="font-mono text-[#de6430] text-xs font-semibold">Full-Stack Web App</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A full-stack web application for managing CIE-2 activities, termwork submissions, teacher evaluation, marks tracking, performance analysis, PDF uploads, role-based authentication, and report generation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-100/70 dark:bg-[#12151e]/80 border border-stone-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-[var(--text-primary)] gap-1">
                  <span>Airport Reservation Management System <span className="font-normal text-[var(--text-secondary)]">(C++, OOP, File Handling)</span></span>
                  <span className="font-mono text-[var(--text-muted)] text-xs font-semibold">C++ Console App</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A console-based C++ application that manages flight schedules, ticket booking, cancellation, passenger records, seat allocation, and reservation management using Object-Oriented Programming and file handling.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[var(--text-primary)] uppercase tracking-widest">
                ACHIEVEMENTS
              </h3>
            </div>
            
            <ul className="space-y-2.5 pl-0 sm:pl-11 text-xs text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Academic Distinction (12th Board): </span>
                  <span>Top grades in Physics, Chemistry, and Mathematics (PCM).</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Web Development Certification (2024): </span>
                  <span>Completed responsive UI engineering and JavaScript ES6+ modules.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Sports & Co-Curricular: </span>
                  <span>Active athlete in Cricket, Basketball, Volleyball and competitive E-Sports tournaments.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Fullscreen Interactive Zoom Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-[#0c0e14] border border-stone-300 dark:border-white/10 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
            >
              <div className="sticky top-0 float-right z-20">
                <button
                  onClick={() => {
                    audioFx.playClick();
                    setModalOpen(false);
                  }}
                  className="p-2 rounded-full bg-stone-100 dark:bg-[#1C1F26] text-[var(--text-primary)] transition-all cursor-pointer shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8 font-sans pt-2">
                <div className="border-b border-stone-200 dark:border-white/10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">PARTH NITIN TANTAK</h1>
                    <p className="text-xs sm:text-sm font-mono font-bold text-[#de6430]">B.Tech Information Technology Student</p>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-secondary)] text-right">
                    <div>Pune, Maharashtra, India</div>
                    <div>+91 88558 90656 • tantakparth@gmail.com</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-extrabold text-[var(--text-primary)] border-b border-stone-200 dark:border-white/10 pb-1">SUMMARY</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving.
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-stone-200 dark:border-white/10">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 rounded-full border border-[var(--border-color)] text-xs font-bold font-mono flex items-center gap-2 hover:bg-stone-100 dark:hover:bg-[#1C1F26] text-[var(--text-primary)]"
                  >
                    <Printer className="w-4 h-4 text-[#de6430]" />
                    <span>Print Document</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-5 py-2 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download TXT</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
