import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  MapPin,
  Clock,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import { audioFx } from '../../utils/audio';
import { CodeEditorCard } from './CodeEditorCard';
import { MagneticButton } from '../common/MagneticButton';

const roles = [
  ' B.Tech IT Student',
  ' Software Developer',
  ' C++ Programmer',
  ' Problem Solver',
];

export const Hero = () => {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Live Local Time state (IST)
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          fullText.substring(
            0,
            isDeleting ? currentText.length - 1 : currentText.length + 1
          )
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Live Clock effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    audioFx.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-6 flex flex-col justify-between overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading, Subtitle, CTAs & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl text-xs font-mono text-[var(--text-primary)] shadow-2xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#de6430] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#de6430]" />
              </span>
              <span>Available for internships & collabs</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight leading-[1.12] text-[var(--text-primary)] font-sans">
              Hi, I'm Parth.<br />
              I code, I build,<br />
              I learn — in logic.
            </h1>

            {/* Subtitle Paragraph with Typewriter Role */}
            <div className="space-y-1.5 max-w-xl">
              <div className="text-base sm:text-lg font-mono text-[#de6430] font-bold flex items-center gap-1 min-h-[28px]">
                <span>I am a </span>
                <span className="text-[var(--text-primary)] border-b-2 border-[#de6430] pb-0.5">
                  {currentText}
                </span>
                <span className="animate-pulse text-[#de6430]">|</span>
              </div>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                Second Year B.Tech IT Student. <span className="font-bold text-[var(--text-primary)]">Aspiring Software Developer</span> passionate about coding and technology.
              </p>
            </div>

            {/* Location & Live Clock Metadata Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-[var(--text-secondary)] font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#de6430] shrink-0" />
                <span>Kalewadi, Pune</span>
              </div>
              <span className="text-[var(--text-muted)]">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#de6430] shrink-0" />
                <span>{timeStr || '10:44 PM IST'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <button
                  onClick={() => scrollTo('resume')}
                  onMouseEnter={() => audioFx.playHover()}
                  className="px-6 py-3.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-sans text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-md cursor-pointer group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#de6430]" />
                  <span>View Resume</span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={() => scrollTo('contact')}
                  onMouseEnter={() => audioFx.playHover()}
                  className="px-6 py-3.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl text-[var(--text-primary)] font-sans text-xs font-bold flex items-center gap-2 hover:bg-stone-200/50 dark:hover:bg-zinc-800/70 active:scale-95 transition-all shadow-2xs cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#de6430]" />
                  <span>Contact Me</span>
                </button>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => audioFx.playHover()}
                className="p-2.5 rounded-full hover:bg-stone-200/60 dark:hover:bg-zinc-800/60 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => audioFx.playHover()}
                className="p-2.5 rounded-full hover:bg-stone-200/60 dark:hover:bg-zinc-800/60 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                onMouseEnter={() => audioFx.playHover()}
                className="p-2.5 rounded-full hover:bg-stone-200/60 dark:hover:bg-zinc-800/60 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Editor Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center pt-6 lg:pt-0"
          >
            <CodeEditorCard />
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex justify-center pt-8 z-10"
      >
        <button
          onClick={() => scrollTo('about')}
          onMouseEnter={() => audioFx.playHover()}
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
          title="Scroll to About"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-md flex items-center justify-center text-[var(--text-secondary)] group-hover:border-[#de6430] group-hover:text-[#de6430] shadow-2xs"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};
