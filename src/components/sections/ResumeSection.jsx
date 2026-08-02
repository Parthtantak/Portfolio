import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
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
  Award,
  FileText,
  AlertCircle
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { audioFx } from '../../utils/audio';

export const ResumeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('success');
  const paperRef = useRef(null);

  const showToast = (msg, type = 'success') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownloadPdf = async () => {
    audioFx.playClick();
    setIsDownloading(true);
    showToast('Generating high-resolution A4 PDF...', 'info');

    try {
      const targetElement = paperRef.current || document.querySelector('.resume-paper-document');
      if (!targetElement) {
        throw new Error('Resume element not found.');
      }

      // Render high-definition canvas (scale: 2.5 for crisp rendering)
      const canvas = await html2canvas(targetElement, {
        scale: 2.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
        onclone: (clonedDoc) => {
          const clonedPaper = clonedDoc.querySelector('.resume-paper-document');
          if (clonedPaper) {
            clonedPaper.style.transform = 'none';
            clonedPaper.style.margin = '0';
            clonedPaper.style.boxShadow = 'none';
            clonedPaper.style.borderRadius = '0';
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, Math.min(imgHeight, pdfHeight));
      pdf.save('Parth_Nitin_Tantak_Resume.pdf');
      
      showToast('Parth_Nitin_Tantak_Resume.pdf downloaded successfully!', 'success');
    } catch (err) {
      console.error('PDF Download Exception:', err);
      showToast('Failed to generate PDF. Please try again.', 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-8 sm:py-10 relative z-10 font-sans">
      
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border text-xs font-mono font-bold flex items-center gap-2.5 ${
              toastType === 'error'
                ? 'bg-rose-950/90 text-rose-200 border-rose-500/30'
                : toastType === 'info'
                ? 'bg-zinc-900/90 text-zinc-200 border-white/10'
                : 'bg-emerald-950/90 text-emerald-200 border-emerald-500/30'
            }`}
          >
            {toastType === 'error' ? (
              <AlertCircle className="w-4 h-4 text-rose-400" />
            ) : (
              <Check className="w-4 h-4 text-emerald-400" />
            )}
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Line */}
        <div className="flex items-center gap-4 mb-8 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">06 — resume</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
          <span className="px-3 py-1 rounded-full bg-[#de6430]/15 text-[#de6430] border border-[#de6430]/30 text-[11px] font-mono font-bold">
            ATS-Optimized A4 Document
          </span>
        </div>

        {/* Top Action Bar & Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] relative inline-block">
              Curriculum Vitae
              <span className="block h-1 w-12 bg-[#de6430] rounded-full mt-1.5" />
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal max-w-xl">
              ATS-compliant, structured single-page resume layout ready for recruiters and applications.
            </p>
          </div>

          {/* Action Buttons: View Resume & Download Resume */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                audioFx.playClick();
                setModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold font-mono flex items-center gap-2 hover:bg-stone-200/50 dark:hover:bg-[#1C1F26] active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-[#de6430]" />
              <span>View Full Resume</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold font-sans flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer disabled:opacity-60"
            >
              {isDownloading ? (
                <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
              ) : (
                <Download className="w-4 h-4 text-[#de6430]" />
              )}
              <span>{isDownloading ? 'Downloading PDF...' : 'Download Resume'}</span>
            </button>
          </div>
        </div>

        {/* Embedded Real Paper Document Preview (White Paper with Crisp Dark Text) */}
        <div 
          ref={paperRef}
          className="resume-paper-document bg-white text-slate-900 border border-stone-200 shadow-2xl rounded-[24px] p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto space-y-9 font-sans transition-all relative overflow-hidden"
        >
          {/* Header Contact Block */}
          <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-lg">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                PARTH NITIN TANTAK
              </h1>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#de6430] uppercase tracking-wider leading-relaxed accent-text">
                B.TECH INFORMATION TECHNOLOGY STUDENT | ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-700 w-full md:w-auto text-left md:text-right muted-text">
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                <span>Kalewadi, Pimpri-Chinchwad, Pune, India</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                <span>+91 88558 90656</span>
                <span className="text-slate-400">•</span>
                <Mail className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                <span>tantakparth@gmail.com</span>
              </div>
              <div className="flex items-center md:justify-end gap-2 text-[#de6430] font-medium pt-0.5 accent-text">
                <GithubIcon className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <a href="https://github.com/parthtantak" target="_blank" rel="noreferrer" className="hover:underline">github.com/parthtantak</a>
                <span className="text-slate-400">•</span>
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
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                PROFESSIONAL SUMMARY
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-11">
              Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving. Dedicated to clean software engineering and user-focused web interfaces.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                EDUCATION
              </h3>
            </div>
            
            <div className="ml-4 pl-7 border-l-2 border-slate-200 space-y-6 relative">
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                  <span>B.Tech in Information Technology — <span className="font-normal text-slate-700">Zeal College of Engineering & Research, Pune</span></span>
                  <span className="font-mono text-slate-500 text-xs font-semibold shrink-0">2025 — 2029 (2nd Year)</span>
                </div>
                <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                  Focus on Programming & Problem Solving (C/C++), Web Engineering, Engineering Mathematics, and Computer Architecture.
                </p>
              </div>

              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                  <span>Higher Secondary Certificate (HSC - 12th) — <span className="font-normal text-slate-700">Pratibha Jr. College, Pune</span></span>
                  <span className="font-mono text-emerald-600 text-xs font-semibold shrink-0">Completed</span>
                </div>
                <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                  Science Stream with Distinction in Physics, Chemistry, and Mathematics (PCM).
                </p>
              </div>

              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                  <span>Secondary School Certificate (SSC - 10th) — <span className="font-normal text-slate-700">Infant Jesus High School, Pune</span></span>
                  <span className="font-mono text-emerald-600 text-xs font-semibold shrink-0">Completed</span>
                </div>
                <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
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
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                TECHNICAL SKILLS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-11">
              <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Languages: </span>
                  <span className="text-slate-700">C, C++, JavaScript (ES6+), HTML5, CSS3</span>
                </div>
              </div>

              <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Frontend & Tools: </span>
                  <span className="text-slate-700">React.js, Vite, Tailwind CSS, Git, GitHub</span>
                </div>
              </div>

              <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Core Concepts: </span>
                  <span className="text-slate-700">Data Structures (DSA), OOP, Web Systems</span>
                </div>
              </div>

              <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Productivity: </span>
                  <span className="text-slate-700">MS Office, Linux CLI, Clean UI Architecture</span>
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
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                KEY PROJECTS
              </h3>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              <div className="skill-box p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                  <span>CIE-2 Tracker & Termwork Management System <span className="font-normal text-slate-600">(React, Node.js, Express.js, MySQL, Tailwind CSS)</span></span>
                  <span className="font-mono text-[#de6430] text-xs font-semibold accent-text">Full-Stack Web App</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A full-stack web application for managing CIE-2 activities, termwork submissions, teacher evaluation, marks tracking, performance analysis, PDF uploads, role-based authentication, and report generation.
                </p>
              </div>

              <div className="skill-box p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                  <span>Airport Reservation Management System <span className="font-normal text-slate-600">(C++, OOP, File Handling)</span></span>
                  <span className="font-mono text-slate-500 text-xs font-semibold muted-text">C++ Console App</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
              <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                ACHIEVEMENTS
              </h3>
            </div>
            
            <ul className="space-y-2.5 pl-0 sm:pl-11 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-slate-900">Academic Distinction (12th Board): </span>
                  <span>Top grades in Physics, Chemistry, and Mathematics (PCM).</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-slate-900">Web Development Certification (2024): </span>
                  <span>Completed responsive UI engineering and JavaScript ES6+ modules.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-slate-900">Sports & Co-Curricular: </span>
                  <span>Active athlete in Cricket, Basketball, Volleyball and competitive E-Sports tournaments.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Clean Distraction-Free Minimalist Resume Viewer Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 overflow-hidden"
          >
            {/* Minimalist Top Bar */}
            <div className="w-full max-w-4xl bg-zinc-900/90 dark:bg-[#111216] border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-xl z-30 shrink-0 font-mono text-xs mb-4">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#de6430]" />
                <span className="font-bold text-zinc-100 hidden sm:inline">Parth_Nitin_Tantak_Resume.pdf</span>
                <span className="font-bold text-zinc-100 sm:hidden">Resume.pdf</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadPdf}
                  disabled={isDownloading}
                  className="px-4 py-2 rounded-xl bg-[#de6430] text-white hover:bg-[#c85528] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-60"
                >
                  {isDownloading ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
                </button>

                <button
                  onClick={() => {
                    audioFx.playClick();
                    setModalOpen(false);
                  }}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 transition-all cursor-pointer"
                  title="Close Viewer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Centered Scrollable A4 Document Canvas */}
            <div className="w-full max-w-4xl flex-1 overflow-y-auto p-2 sm:p-6 flex justify-center items-start scrollbar-thin">
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                className="resume-paper-document bg-white text-slate-900 border border-stone-200 shadow-2xl rounded-[24px] p-6 sm:p-10 lg:p-12 w-full max-w-4xl space-y-9 font-sans transition-all relative my-auto"
              >
                {/* Header Contact Block */}
                <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-1.5 max-w-lg">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                      PARTH NITIN TANTAK
                    </h1>
                    <p className="text-xs sm:text-sm font-mono font-bold text-[#de6430] uppercase tracking-wider leading-relaxed accent-text">
                      B.TECH INFORMATION TECHNOLOGY STUDENT | ASPIRING SOFTWARE DEVELOPER
                    </p>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-700 w-full md:w-auto text-left md:text-right muted-text">
                    <div className="flex items-center md:justify-end gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                      <span>Kalewadi, Pimpri-Chinchwad, Pune, India</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                      <span>+91 88558 90656</span>
                      <span className="text-slate-400">•</span>
                      <Mail className="w-3.5 h-3.5 text-[#de6430] shrink-0 accent-text" />
                      <span>tantakparth@gmail.com</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2 text-[#de6430] font-medium pt-0.5 accent-text">
                      <GithubIcon className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                      <a href="https://github.com/parthtantak" target="_blank" rel="noreferrer" className="hover:underline">github.com/parthtantak</a>
                      <span className="text-slate-400">•</span>
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
                    <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                      PROFESSIONAL SUMMARY
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-11">
                    Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving. Dedicated to clean software engineering and user-focused web interfaces.
                  </p>
                </div>

                {/* Education Timeline */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-[#de6430]/40 bg-[#de6430]/10 flex items-center justify-center text-[#de6430] shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                      EDUCATION
                    </h3>
                  </div>
                  
                  <div className="ml-4 pl-7 border-l-2 border-slate-200 space-y-6 relative">
                    <div className="relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                        <span>B.Tech in Information Technology — <span className="font-normal text-slate-700">Zeal College of Engineering & Research, Pune</span></span>
                        <span className="font-mono text-slate-500 text-xs font-semibold shrink-0">2025 — 2029 (2nd Year)</span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                        Focus on Programming & Problem Solving (C/C++), Web Engineering, Engineering Mathematics, and Computer Architecture.
                      </p>
                    </div>

                    <div className="relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                        <span>Higher Secondary Certificate (HSC - 12th) — <span className="font-normal text-slate-700">Pratibha Jr. College, Pune</span></span>
                        <span className="font-mono text-emerald-600 text-xs font-semibold shrink-0">Completed</span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                        Science Stream with Distinction in Physics, Chemistry, and Mathematics (PCM).
                      </p>
                    </div>

                    <div className="relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#de6430] absolute -left-[33px] top-1.5 ring-4 ring-white" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                        <span>Secondary School Certificate (SSC - 10th) — <span className="font-normal text-slate-700">Infant Jesus High School, Pune</span></span>
                        <span className="font-mono text-emerald-600 text-xs font-semibold shrink-0">Completed</span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal mt-1 leading-relaxed">
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
                    <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                      TECHNICAL SKILLS
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-11">
                    <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">Languages: </span>
                        <span className="text-slate-700">C, C++, JavaScript (ES6+), HTML5, CSS3</span>
                      </div>
                    </div>

                    <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">Frontend & Tools: </span>
                        <span className="text-slate-700">React.js, Vite, Tailwind CSS, Git, GitHub</span>
                      </div>
                    </div>

                    <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">Core Concepts: </span>
                        <span className="text-slate-700">Data Structures (DSA), OOP, Web Systems</span>
                      </div>
                    </div>

                    <div className="skill-box p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">Productivity: </span>
                        <span className="text-slate-700">MS Office, Linux CLI, Clean UI Architecture</span>
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
                    <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                      KEY PROJECTS
                    </h3>
                  </div>

                  <div className="space-y-4 pl-0 sm:pl-11">
                    <div className="skill-box p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                        <span>CIE-2 Tracker & Termwork Management System <span className="font-normal text-slate-600">(React, Node.js, Express.js, MySQL, Tailwind CSS)</span></span>
                        <span className="font-mono text-[#de6430] text-xs font-semibold accent-text">Full-Stack Web App</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A full-stack web application for managing CIE-2 activities, termwork submissions, teacher evaluation, marks tracking, performance analysis, PDF uploads, role-based authentication, and report generation.
                      </p>
                    </div>

                    <div className="skill-box p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-1">
                        <span>Airport Reservation Management System <span className="font-normal text-slate-600">(C++, OOP, File Handling)</span></span>
                        <span className="font-mono text-slate-500 text-xs font-semibold muted-text">C++ Console App</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
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
                    <h3 className="text-xs sm:text-sm font-mono font-extrabold text-slate-900 uppercase tracking-widest">
                      ACHIEVEMENTS
                    </h3>
                  </div>
                  
                  <ul className="space-y-2.5 pl-0 sm:pl-11 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900">Academic Distinction (12th Board): </span>
                        <span>Top grades in Physics, Chemistry, and Mathematics (PCM).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900">Web Development Certification (2024): </span>
                        <span>Completed responsive UI engineering and JavaScript ES6+ modules.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#de6430] shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-slate-900">Sports & Co-Curricular: </span>
                        <span>Active athlete in Cricket, Basketball, Volleyball and competitive E-Sports tournaments.</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
