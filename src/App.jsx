import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CyberCanvas } from './components/background/CyberCanvas';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';

// Lazy loaded below-the-fold sections
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Education = lazy(() => import('./components/sections/Education').then(m => ({ default: m.Education })));
const Achievements = lazy(() => import('./components/sections/Achievements').then(m => ({ default: m.Achievements })));
const ResumeSection = lazy(() => import('./components/sections/ResumeSection').then(m => ({ default: m.ResumeSection })));
const GithubDashboard = lazy(() => import('./components/sections/GithubDashboard').then(m => ({ default: m.GithubDashboard })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

const SectionLoader = () => (
  <div className="py-12 flex items-center justify-center font-mono text-xs text-[var(--text-muted)]">
    <span className="w-2 h-2 rounded-full bg-[#de6430] animate-pulse mr-2" />
    <span>Loading spatial panel...</span>
  </div>
);

export function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleCustomOpenCmd = () => setCmdOpen(true);
    window.addEventListener('open-command-palette', handleCustomOpenCmd);
    return () => window.removeEventListener('open-command-palette', handleCustomOpenCmd);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 selection:bg-[#de6430]/20 selection:text-[#de6430]">
      {/* Scroll Reading Progress Line */}
      <ScrollProgress />

      {/* Interactive Mesh Background Canvas */}
      <CyberCanvas />

      {/* GlassOS Sticky Navigation Header */}
      <Navbar
        onOpenCmd={() => setCmdOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Spatial Matrix */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionLoader />}>
          <Projects />
          <Education />
          <Achievements />
          <ResumeSection />
          <GithubDashboard />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
      />
    </div>
  );
}

export default App;
