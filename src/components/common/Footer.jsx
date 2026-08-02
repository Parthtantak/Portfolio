import React from 'react';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Download, 
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import { audioFx } from '../../utils/audio';

export const Footer = () => {
  const scrollToTop = () => {
    audioFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    audioFx.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[var(--border-color)] bg-[var(--bg-primary)] relative z-10 font-sans transition-colors duration-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Multi-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-color)]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-extrabold text-xs flex items-center justify-center font-mono shadow-2xs">
                PT
              </div>
              <div>
                <span className="text-base font-extrabold text-[var(--text-primary)] tracking-tight block">
                  {portfolioData.personal.name}
                </span>
                <span className="text-[11px] font-mono text-[#de6430] font-semibold block">
                  B.Tech IT Student @ Zeal COE Pune
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-normal max-w-sm">
              Building minimal, intelligent web interfaces with modern frontend technologies and clean C++ software logic.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-primary)] font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#de6430] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#de6430]" />
              </span>
              <span>Available for internships & collabs</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              // NAVIGATION
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)] font-medium">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  01 — Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  02 — About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  03 — Technical Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  04 — Projects Grid
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('education')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  05 — Education Track
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('resume')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  06 — Resume Preview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('activity')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  07 — GitHub Activity
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#de6430] transition-colors cursor-pointer"
                >
                  08 — Initiate Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Location */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              // CONTACT INFO
            </div>

            <div className="space-y-3 text-[var(--text-secondary)] font-medium">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-2 hover:text-[#de6430] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <span className="truncate">{portfolioData.personal.email}</span>
              </a>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#de6430] shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#de6430] shrink-0 mt-0.5" />
                <span>Kalewadi, Pimpri-Chinchwad, Pune</span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#de6430] shrink-0 mt-0.5" />
                <span>Zeal COE & Research, Narhe</span>
              </div>
            </div>
          </div>

          {/* Column 4: Resume CTA & Social Icons */}
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              // CONNECT
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => audioFx.playHover()}
                className="w-9 h-9 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center hover:border-[#de6430] hover:text-[#de6430] hover:scale-105 transition-all shadow-2xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => audioFx.playHover()}
                className="w-9 h-9 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center hover:border-[#de6430] hover:text-[#de6430] hover:scale-105 transition-all shadow-2xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                onMouseEnter={() => audioFx.playHover()}
                className="w-9 h-9 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center hover:border-[#de6430] hover:text-[#de6430] hover:scale-105 transition-all shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => scrollTo('resume')}
              className="w-full px-4 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-sans text-xs font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#de6430]" />
              <span>Resume</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)] font-medium">
          <div>
            © 2026 Parth Nitin Tantak. Made with <Heart className="w-3.5 h-3.5 text-[#de6430] inline fill-[#de6430] mx-0.5" /> in Pune.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">GlassOS Spatial Edition</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#de6430] hover:text-[#de6430] active:scale-95 transition-all cursor-pointer shadow-2xs"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#de6430]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
