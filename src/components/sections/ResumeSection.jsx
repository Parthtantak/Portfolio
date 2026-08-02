import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Maximize2, 
  X, 
  Check,
  FileText
} from 'lucide-react';
import { audioFx } from '../../utils/audio';

export const ResumeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadPdf = () => {
    audioFx.playClick();
    setDownloaded(true);

    const link = document.createElement('a');
    link.href = '/Parth_Nitin_Tantak_Resume.pdf';
    link.download = 'Parth_Nitin_Tantak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="resume" className="py-8 sm:py-10 relative z-10 font-sans">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Line */}
        <div className="flex items-center gap-4 mb-8 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">06 — resume</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
          <span className="px-3 py-1 rounded-full bg-[#de6430]/15 text-[#de6430] border border-[#de6430]/30 text-[11px] font-mono font-bold">
            Official Resume Document
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
              Official single-page resume layout ready for recruiters, internship applications, and direct PDF download.
            </p>
          </div>

          {/* Action Buttons */}
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
              className="px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold font-sans flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              {downloaded ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Download className="w-4 h-4 text-[#de6430]" />
              )}
              <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
            </button>
          </div>
        </div>

        {/* Embedded Real Paper Document Preview (Matching Theme Accent Color) */}
        <div className="bg-white text-slate-900 border border-stone-200 shadow-2xl rounded-[24px] p-8 sm:p-14 lg:p-16 max-w-4xl mx-auto space-y-7 font-sans leading-relaxed transition-all relative overflow-hidden text-left">
          
          {/* Main Title & Personal Information */}
          <div className="space-y-3 pb-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#de6430] tracking-tight">
              Resume
            </h1>
            <div className="space-y-1.5 text-sm text-slate-800 font-normal">
              <p><span className="font-semibold">Name:</span> Parth Nitin Tantak</p>
              <p><span className="font-semibold">Address:</span> Kalewadi , Pimpri - Chinchwad, Pune, Maharashtra</p>
              <p><span className="font-semibold">Email:</span> tantakparth@gmail.com</p>
              <p><span className="font-semibold">Contact:</span> +91-8855890656</p>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              Motivated and enthusiastic Information Technology(IT) student from Zeal College of Engineering& Research, Pune, seeking opportunities to enhance technical skills and gain practical experience. Eager to contribute innovative ideas, teamwork, and problem-solving skills to achieve organizational and personal growth.
            </p>
          </div>

          {/* Education Qualifications */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Education Qualifications
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
              <li>
                <span className="font-medium">B.Tech (Information Technology)</span> – Zeal Engineering College of Engg& research Narhe Pune, Pursuing (1st Year) Engineering.
              </li>
              <li>
                <span className="font-medium">HSC (12th)</span> – Pratibha Jr. College , Kalbhor nager , Akurdi, Pune.
              </li>
              <li>
                <span className="font-medium">SSC (10th)</span> – Infant Jesus High School, Wakad , Pune.
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Technical Skills
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
              <li>MS Office (Word, PowerPoint)</li>
              <li>Basic Programming (C ,C++)</li>
              <li>Web Developing (using HTML, CSS)</li>
            </ul>
          </div>

          {/* Hobbies & Interests */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Hobbies & Interests
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
              <li>Playing Outdoor Games (Cricket , Basketball , Volley ball , etc..) and also good at E-Sports.</li>
              <li>Keeping knowledge or Exploring the new updates in technology.</li>
              <li>Interested In Drawing</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Achievements
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
              <li>Secured good grades in Chemistry, Physics and Mathematics in 12th standard</li>
            </ul>
          </div>

          {/* Strengths */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
              Strengths
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
              <li>Self-motivated and disciplined</li>
              <li>Quick learner with curiosity for new technologies</li>
              <li>Positive attitude towards challenges</li>
              <li>Ability to work effectively in a team</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Full Resume Viewer Modal (Theme Orange Accents) */}
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
                  className="px-4 py-2 rounded-xl bg-[#de6430] text-white hover:bg-[#c85528] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  {downloaded ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
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

            {/* Centered Scrollable A4 Document Canvas inside Modal */}
            <div className="w-full max-w-4xl flex-1 overflow-y-auto p-2 sm:p-6 flex justify-center items-start scrollbar-thin">
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                className="bg-white text-slate-900 border border-stone-200 shadow-2xl rounded-[24px] p-8 sm:p-14 lg:p-16 w-full max-w-4xl space-y-7 font-sans leading-relaxed transition-all relative my-auto text-left"
              >
                {/* Main Title & Personal Information */}
                <div className="space-y-3 pb-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#de6430] tracking-tight">
                    Resume
                  </h1>
                  <div className="space-y-1.5 text-sm text-slate-800 font-normal">
                    <p><span className="font-semibold">Name:</span> Parth Nitin Tantak</p>
                    <p><span className="font-semibold">Address:</span> Kalewadi , Pimpri - Chinchwad, Pune, Maharashtra</p>
                    <p><span className="font-semibold">Email:</span> tantakparth@gmail.com</p>
                    <p><span className="font-semibold">Contact:</span> +91-8855890656</p>
                  </div>
                </div>

                {/* Career Objective */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Career Objective
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    Motivated and enthusiastic Information Technology(IT) student from Zeal College of Engineering& Research, Pune, seeking opportunities to enhance technical skills and gain practical experience. Eager to contribute innovative ideas, teamwork, and problem-solving skills to achieve organizational and personal growth.
                  </p>
                </div>

                {/* Education Qualifications */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Education Qualifications
                  </h2>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
                    <li>
                      <span className="font-medium">B.Tech (Information Technology)</span> – Zeal Engineering College of Engg& research Narhe Pune, Pursuing (1st Year) Engineering.
                    </li>
                    <li>
                      <span className="font-medium">HSC (12th)</span> – Pratibha Jr. College , Kalbhor nager , Akurdi, Pune.
                    </li>
                    <li>
                      <span className="font-medium">SSC (10th)</span> – Infant Jesus High School, Wakad , Pune.
                    </li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Technical Skills
                  </h2>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
                    <li>MS Office (Word, PowerPoint)</li>
                    <li>Basic Programming (C ,C++)</li>
                    <li>Web Developing (using HTML, CSS)</li>
                  </ul>
                </div>

                {/* Hobbies & Interests */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Hobbies & Interests
                  </h2>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
                    <li>Playing Outdoor Games (Cricket , Basketball , Volley ball , etc..) and also good at E-Sports.</li>
                    <li>Keeping knowledge or Exploring the new updates in technology.</li>
                    <li>Interested In Drawing</li>
                  </ul>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Achievements
                  </h2>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
                    <li>Secured good grades in Chemistry, Physics and Mathematics in 12th standard</li>
                  </ul>
                </div>

                {/* Strengths */}
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#de6430]">
                    Strengths
                  </h2>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-normal pl-4 list-disc">
                    <li>Self-motivated and disciplined</li>
                    <li>Quick learner with curiosity for new technologies</li>
                    <li>Positive attitude towards challenges</li>
                    <li>Ability to work effectively in a team</li>
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
