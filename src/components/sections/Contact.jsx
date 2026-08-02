import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import { audioFx } from '../../utils/audio';
import { GlassCard } from '../common/GlassCard';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (form.message.trim().length < 6) {
      errs.message = 'Message must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    audioFx.playClick();
    navigator.clipboard.writeText(portfolioData.personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    audioFx.playClick();
    
    if (!validate()) return;

    setSending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">07 — contact</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Contact Links */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
                Let's build something — even if it's small.
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
                Have an idea, a project, or just want to chat? I'm always happy to connect with fellow students, mentors, and curious minds.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 font-mono">
              
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl shadow-2xs group hover:border-[#de6430]/50 transition-all">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center shrink-0 group-hover:border-[#de6430] group-hover:scale-105 transition-all shadow-2xs">
                    <Mail className="w-4 h-4 text-[#de6430]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                      EMAIL ME
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[#de6430] transition-colors">
                      {portfolioData.personal.email}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email Address"
                  className="px-3 py-1.5 rounded-xl border border-[var(--border-color)] bg-stone-200/50 dark:bg-zinc-800/60 text-[var(--text-primary)] hover:border-stone-400 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl shadow-2xs group hover:border-[#de6430]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center shrink-0 group-hover:border-[#de6430] group-hover:scale-105 transition-all shadow-2xs">
                  <LinkedinIcon className="w-4 h-4 text-[#de6430]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                    LINKEDIN
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[#de6430] transition-colors">
                    /in/parthtantak
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl shadow-2xs group hover:border-[#de6430]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center shrink-0 group-hover:border-[#de6430] group-hover:scale-105 transition-all shadow-2xs">
                  <GithubIcon className="w-4 h-4 text-[#de6430]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                    GITHUB
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[#de6430] transition-colors">
                    /parthtantak
                  </div>
                </div>
              </a>

            </div>

            {/* Google Maps Location Preview Card */}
            <GlassCard showDots title="location_map.gps" className="!p-3">
              <div className="flex items-center justify-between px-2 pt-1 font-mono text-xs text-[var(--text-muted)] font-semibold mb-2">
                <div className="flex items-center gap-1.5 text-[#de6430]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>LOCATION BADGE</span>
                </div>
                <span>Kalewadi, Pune, India</span>
              </div>

              <div className="w-full h-40 rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <iframe
                  title="Parth Tantak Location - Kalewadi, Pune"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8252277413645!2d73.7845!3d18.625!2m3!1f0!2f20!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c7ab536e1d%3A0x6b63d08c5c369bc5!2sKalewadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.02]"
                />
              </div>
            </GlassCard>

          </div>

          {/* Right Column: Form Glass Card */}
          <div className="lg:col-span-6">
            <GlassCard showDots title="send_message.dispatch" className="!p-8 relative overflow-hidden backdrop-blur-md">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xs">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-extrabold text-[var(--text-primary)] font-sans">
                        Message Sent!
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans">
                        Thank you for reaching out. I'll get back to your email shortly.
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-mono text-[#de6430]">
                      // message delivered safely
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                      
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-[var(--text-primary)]">
                          Your name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          placeholder="Ada Lovelace"
                          className={`w-full px-4 py-3 rounded-xl bg-stone-100/70 dark:bg-[#111216]/80 border text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] dark:placeholder-[#64748B] focus:outline-none transition-all font-medium shadow-2xs ${
                            errors.name
                              ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                              : 'border-[var(--border-color)] focus:border-[#de6430] focus:ring-2 focus:ring-[#de6430]/20'
                          }`}
                        />
                        {errors.name && (
                          <div className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-[var(--text-primary)]">
                          Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          placeholder="you@domain.com"
                          className={`w-full px-4 py-3 rounded-xl bg-stone-100/70 dark:bg-[#111216]/80 border text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] dark:placeholder-[#64748B] focus:outline-none transition-all font-medium shadow-2xs ${
                            errors.email
                              ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                              : 'border-[var(--border-color)] focus:border-[#de6430] focus:ring-2 focus:ring-[#de6430]/20'
                          }`}
                        />
                        {errors.email && (
                          <div className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 font-sans">
                      <label className="block text-xs font-bold text-[var(--text-primary)]">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        placeholder="Tell me a bit about what's on your mind..."
                        className={`w-full px-4 py-3 rounded-xl bg-stone-100/70 dark:bg-[#111216]/80 border text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] dark:placeholder-[#64748B] focus:outline-none transition-all resize-none font-medium shadow-2xs ${
                          errors.message
                            ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                            : 'border-[var(--border-color)] focus:border-[#de6430] focus:ring-2 focus:ring-[#de6430]/20'
                        }`}
                      />
                      {errors.message && (
                        <div className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
                        // direct inbox connection
                      </span>

                      <button
                        type="submit"
                        disabled={sending}
                        className="px-6 py-3 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-sans text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all shadow-xs hover:shadow-md cursor-pointer disabled:opacity-50"
                      >
                        <Send className={`w-3.5 h-3.5 ${sending ? 'animate-bounce' : ''}`} />
                        <span>{sending ? 'Sending...' : 'Send message'}</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
