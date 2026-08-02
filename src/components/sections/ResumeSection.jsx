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

  const generatePrintableHtmlTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parth_Nitin_Tantak_Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
    
    @page {
      size: A4 portrait;
      margin: 10mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #ffffff;
      color: #0f172a;
      padding: 24px;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
    }

    .header {
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .name {
      font-size: 26px;
      font-weight: 800;
      color: #020617;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }

    .subtitle {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: #de6430;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    .contact {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #334155;
      text-align: right;
    }

    .contact-item {
      margin-bottom: 3px;
    }

    .section {
      margin-bottom: 22px;
    }

    .section-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title-icon {
      width: 10px;
      height: 10px;
      background: rgba(222, 100, 48, 0.15);
      border: 1px solid rgba(222, 100, 48, 0.4);
      border-radius: 3px;
      display: inline-block;
    }

    .summary-text {
      font-size: 12px;
      color: #334155;
      padding-left: 18px;
    }

    .timeline {
      padding-left: 18px;
      border-left: 2px solid #e2e8f0;
      margin-left: 6px;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 16px;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #de6430;
      position: absolute;
      left: -23px;
      top: 5px;
      border: 2px solid #ffffff;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 12px;
      color: #0f172a;
    }

    .item-sub {
      font-size: 11px;
      color: #64748b;
      margin-top: 2px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding-left: 18px;
    }

    .skill-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 9px 12px;
      font-size: 11px;
    }

    .skill-card strong {
      color: #0f172a;
    }

    .projects-list {
      padding-left: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .project-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px 12px;
    }

    .project-title {
      font-weight: 700;
      font-size: 12px;
      color: #0f172a;
      display: flex;
      justify-content: space-between;
    }

    .project-desc {
      font-size: 11px;
      color: #475569;
      margin-top: 4px;
    }

    .achievements-list {
      padding-left: 18px;
      list-style: none;
    }

    .achievements-list li {
      position: relative;
      padding-left: 14px;
      font-size: 11.5px;
      color: #334155;
      margin-bottom: 5px;
    }

    .achievements-list li::before {
      content: '•';
      color: #de6430;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 class="name">Parth Nitin Tantak</h1>
      <p class="subtitle">B.Tech Information Technology Student | Aspiring Software Developer</p>
    </div>
    <div class="contact">
      <div class="contact-item">Kalewadi, Pimpri-Chinchwad, Pune, India</div>
      <div class="contact-item">+91 88558 90656 • tantakparth@gmail.com</div>
      <div class="contact-item" style="color: #de6430;">github.com/parthtantak • linkedin.com/in/parthtantak</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">
      <span class="section-title-icon"></span>
      Professional Summary
    </div>
    <p class="summary-text">
      Motivated B.Tech IT student at Zeal College of Engineering & Research, Pune. Proficient in structured programming with C and C++, modern frontend web development (JavaScript, React, Tailwind CSS), and algorithmic problem solving. Dedicated to clean software engineering and user-focused web interfaces.
    </p>
  </div>

  <div class="section">
    <div class="section-title">
      <span class="section-title-icon"></span>
      Education
    </div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="item-header">
          <span>B.Tech in Information Technology — <span style="font-weight:400; color:#334155;">Zeal College of Engineering & Research, Pune</span></span>
          <span style="font-family:'JetBrains Mono'; font-size:11px; color:#64748b;">2025 — 2029 (2nd Year)</span>
        </div>
        <p class="item-sub">Focus on Programming & Problem Solving (C/C++), Web Engineering, Engineering Mathematics, and Computer Architecture.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="item-header">
          <span>Higher Secondary Certificate (HSC - 12th) — <span style="font-weight:400; color:#334155;">Pratibha Jr. College, Pune</span></span>
          <span style="font-family:'JetBrains Mono'; font-size:11px; color:#059669;">Completed</span>
        </div>
        <p class="item-sub">Science Stream with Distinction in Physics, Chemistry, and Mathematics (PCM).</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="item-header">
          <span>Secondary School Certificate (SSC - 10th) — <span style="font-weight:400; color:#334155;">Infant Jesus High School, Pune</span></span>
          <span style="font-family:'JetBrains Mono'; font-size:11px; color:#059669;">Completed</span>
        </div>
        <p class="item-sub">First Class Distinction with strong mathematical and analytical foundations.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">
      <span class="section-title-icon"></span>
      Technical Skills
    </div>
    <div class="skills-grid">
      <div class="skill-card">
        <strong>Languages: </strong>C, C++, JavaScript (ES6+), HTML5, CSS3
      </div>
      <div class="skill-card">
        <strong>Frontend & Tools: </strong>React.js, Vite, Tailwind CSS, Git, GitHub
      </div>
      <div class="skill-card">
        <strong>Core Concepts: </strong>Data Structures (DSA), OOP, Web Systems
      </div>
      <div class="skill-card">
        <strong>Productivity: </strong>MS Office, Linux CLI, Clean UI Architecture
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">
      <span class="section-title-icon"></span>
      Key Projects
    </div>
    <div class="projects-list">
      <div class="project-card">
        <div class="project-title">
          <span>CIE-2 Tracker & Termwork Management System <span style="font-weight:400; color:#64748b;">(React, Node.js, Express.js, MySQL, Tailwind CSS)</span></span>
          <span style="font-family:'JetBrains Mono'; font-size:11px; color:#de6430;">Full-Stack Web App</span>
        </div>
        <p class="project-desc">A full-stack web application for managing CIE-2 activities, termwork submissions, teacher evaluation, marks tracking, performance analysis, PDF uploads, role-based authentication, and report generation.</p>
      </div>
      <div class="project-card">
        <div class="project-title">
          <span>Airport Reservation Management System <span style="font-weight:400; color:#64748b;">(C++, OOP, File Handling)</span></span>
          <span style="font-family:'JetBrains Mono'; font-size:11px; color:#64748b;">C++ Console App</span>
        </div>
        <p class="project-desc">A console-based C++ application that manages flight schedules, ticket booking, cancellation, passenger records, seat allocation, and reservation management using Object-Oriented Programming and file handling.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">
      <span class="section-title-icon"></span>
      Achievements
    </div>
    <ul class="achievements-list">
      <li><strong>Academic Distinction (12th Board):</strong> Top grades in Physics, Chemistry, and Mathematics (PCM).</li>
      <li><strong>Web Development Certification (2024):</strong> Completed responsive UI engineering and JavaScript ES6+ modules.</li>
      <li><strong>Sports & Co-Curricular:</strong> Active athlete in Cricket, Basketball, Volleyball and competitive E-Sports tournaments.</li>
    </ul>
  </div>
</body>
</html>
`;

  const handleDownloadPdf = () => {
    audioFx.playClick();
    setIsDownloading(true);
    showToast('Generating vector PDF template...', 'info');

    try {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);

      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(generatePrintableHtmlTemplate());
      doc.close();

      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          setIsDownloading(false);
          showToast('Vector PDF template rendered successfully!', 'success');
        }, 1000);
      }, 300);
    } catch (err) {
      console.error('PDF Export Error:', err);
      setIsDownloading(false);
      showToast('Failed to export PDF.', 'error');
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
                  <span>{isDownloading ? 'Exporting...' : 'Download Resume'}</span>
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
