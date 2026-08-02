import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import { audioFx } from '../../utils/audio';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          audioFx.playClick();
          window.dispatchEvent(new CustomEvent('open-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      type: 'Navigation',
      label: 'Jump to Home',
      action: () => scrollTo('hero'),
      icon: Terminal,
    },
    {
      type: 'Navigation',
      label: 'View About Me',
      action: () => scrollTo('about'),
      icon: Sparkles,
    },
    {
      type: 'Navigation',
      label: 'View Technical Skills',
      action: () => scrollTo('skills'),
      icon: Sparkles,
    },
    {
      type: 'Navigation',
      label: 'Browse Projects Grid',
      action: () => scrollTo('projects'),
      icon: FileText,
    },
    {
      type: 'Navigation',
      label: 'View Education Track',
      action: () => scrollTo('education'),
      icon: FileText,
    },
    {
      type: 'Navigation',
      label: 'View Live GitHub Activity',
      action: () => scrollTo('activity'),
      icon: Sparkles,
    },
    {
      type: 'Navigation',
      label: 'Send Message / Contact',
      action: () => scrollTo('contact'),
      icon: Mail,
    },

    {
      type: 'Quick Link',
      label: 'Open GitHub Profile',
      action: () => window.open(portfolioData.personal.socials.github, '_blank'),
      icon: GithubIcon,
    },
    {
      type: 'Quick Link',
      label: 'Open LinkedIn Profile',
      action: () => window.open(portfolioData.personal.socials.linkedin, '_blank'),
      icon: LinkedinIcon,
    },
  ];

  const scrollTo = (id) => {
    audioFx.playClick();
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-zinc-950/60 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-xl bg-[#FAF8F5] border border-stone-300 rounded-2xl shadow-2xl overflow-hidden font-sans">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 bg-white/80">
          <Search className="w-5 h-5 text-[#de6430] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search portfolio..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-zinc-900 placeholder-zinc-500 font-sans text-sm focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-zinc-900 rounded-lg cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-zinc-600 font-mono text-sm font-medium">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    audioFx.playClick();
                    item.action();
                  }}
                  onMouseEnter={() => audioFx.playHover()}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-stone-200/60 text-left transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#de6430]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600 font-medium">
                        {item.type}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#de6430] group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-zinc-600 font-medium">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};



