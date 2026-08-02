import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sparkles, Sun, Moon } from 'lucide-react';
import { audioFx } from '../../utils/audio';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Awards' },
  { id: 'resume', label: 'Resume' },
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ onOpenCmd, isDarkMode, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Scroll detection & IntersectionObserver logic for 60FPS section spy
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY + 8) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 8) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for active section detection
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent background scroll during mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    audioFx.playClick();
    setMobileMenuOpen(false);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible || mobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[var(--glass-bg)]/90 backdrop-blur-2xl border-b border-[var(--border-color)] shadow-md shadow-black/5 dark:shadow-black/20 brightness-[1.02]'
            : 'py-4 sm:py-5 bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with GlassOS Specular Badge */}
          <motion.button
            onClick={() => scrollTo('hero')}
            onMouseEnter={() => audioFx.playHover()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer select-none"
          >
            <div className="relative w-8 h-8 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-extrabold text-xs flex items-center justify-center font-mono shadow-xs overflow-hidden">
              <span className="relative z-10">PT</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#de6430]/0 via-[#de6430]/30 to-amber-500/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[var(--text-primary)] font-sans group-hover:text-[#de6430] transition-colors leading-tight">
                Parth Tantak
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono tracking-wider">GLASS OS</span>
            </div>
          </motion.button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200/40 dark:bg-[#111216]/80 border border-stone-300/50 dark:border-white/10 backdrop-blur-md shadow-2xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredNav === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => {
                    setHoveredNav(item.id);
                    audioFx.playHover();
                  }}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`text-xs font-sans tracking-wide transition-colors duration-200 relative px-3 py-1.5 rounded-full cursor-pointer select-none ${
                    isActive
                      ? 'text-zinc-950 dark:text-[#F8FAFC] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white dark:bg-[#1C1F26] rounded-full border border-stone-300/80 dark:border-white/10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-stone-200/60 dark:bg-[#1C1F26]/50 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#de6430] rounded-full shadow-[0_0_8px_rgba(222,100,48,0.75)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            {/* Light / Dark GlassOS Theme Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                audioFx.playClick();
                onToggleTheme();
              }}
              onMouseEnter={() => audioFx.playHover()}
              title="Toggle GlassOS Theme"
              className="p-2 rounded-full border border-stone-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-[var(--text-primary)] hover:border-stone-400 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-2xs"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </motion.button>

            {/* Quick Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                audioFx.playClick();
                onOpenCmd();
              }}
              onMouseEnter={() => audioFx.playHover()}
              title="Search (Ctrl+K)"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-2xs group"
            >
              <Search className="w-3.5 h-3.5 text-[#de6430] group-hover:scale-110 transition-transform" />
              <span className="font-sans font-medium">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-100 dark:bg-zinc-800 rounded border border-stone-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                ⌘K
              </kbd>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                audioFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl text-[var(--text-primary)] cursor-pointer hover:bg-stone-200/70 dark:hover:bg-zinc-800/70 transition-colors border border-transparent"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-30 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 z-40 lg:hidden p-5 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#de6430]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[var(--text-muted)] uppercase">
                    Navigation
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  {navItems.length} Sections
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02, duration: 0.2 }}
                      onClick={() => scrollTo(item.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold shadow-xs'
                          : 'text-[var(--text-primary)] hover:bg-stone-200/70 dark:hover:bg-zinc-800/70 font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#de6430]" />}
                    </motion.button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-stone-200/80 dark:border-zinc-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCmd();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-200/70 dark:bg-zinc-800/70 hover:bg-stone-300/70 dark:hover:bg-zinc-700/70 text-xs font-mono font-medium text-[var(--text-primary)] transition-colors"
                >
                  <Search className="w-4 h-4 text-[#de6430]" />
                  <span>Open Command Palette (⌘K)</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
