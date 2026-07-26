//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Mail, Github, Linkedin, Sparkles, Code, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../context/LanguageContext';
import { DancingProfilePhoto } from '../common/DancingProfilePhoto';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#F5FBFF] dark:bg-[#0B0F17] transition-colors">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#A7D8F0]/30 dark:from-[#0077B6]/20 via-[#DFF4FF]/50 dark:via-sky-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#A7D8F0]/25 dark:bg-[#0077B6]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#DFF4FF]/60 dark:bg-[#0077B6]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/60 dark:border-slate-800 shadow-2xs text-xs font-semibold text-[#172033] dark:text-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[#0077B6] dark:text-[#38BDF8] font-bold">{t('hero.badge', profileData.status)}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] dark:text-white tracking-tight leading-[1.12]">
                Building Modern <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#48CAE4] bg-clip-text text-transparent">
                  Full Stack
                </span> Web Experiences.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#64748B] dark:text-slate-300 pt-1">
                {t('hero.role', 'Senior Full Stack Engineer & Cloud Architect')}
              </p>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              {t('hero.subtext', 'Hi, I\'m Mai Mostafa. I specialize in designing scalable React frontend architectures, event-driven Node.js backend microservices, and resilient cloud software.')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                to="/projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white font-bold text-sm shadow-lg shadow-[#0077B6]/30 hover:brightness-110 hover:scale-[1.02] transition-all flex items-center gap-2 border border-white/40"
              >
                <span>{t('hero.exploreProjects', 'View My Projects')}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0] dark:border-slate-800 text-[#172033] dark:text-slate-200 font-bold text-sm shadow-2xs hover:bg-white dark:hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
                <span>{t('nav.resume', 'Download Resume')}</span>
              </button>

              <Link
                to="/contact"
                className="px-5 py-3 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-900/50 backdrop-blur-sm border border-[#A7D8F0]/40 dark:border-slate-800 text-[#64748B] dark:text-slate-300 font-semibold text-sm hover:text-[#172033] dark:hover:text-white hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
                <span>{t('hero.contactMe', 'Contact Me')}</span>
              </Link>
            </motion.div>

            {/* Social Links & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[#A7D8F0]/30 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">{t('footer.connect', 'Connect')}:</span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 flex items-center justify-center text-[#172033] dark:text-slate-200 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 flex items-center justify-center text-[#0077B5] dark:text-[#38BDF8] hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B] dark:text-slate-300">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs rounded-full border border-[#A7D8F0]/30 dark:border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> 3+ Yrs Exp
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs rounded-full border border-[#A7D8F0]/30 dark:border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" /> AWS Certified
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Developer Avatar & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Outer Glowing Orbital Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#A7D8F0]/80 dark:border-slate-700 animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-4 rounded-full border border-[#A7D8F0]/30 dark:border-slate-800 pointer-events-none" />

              {/* Central Profile Card Frame with Dancing Capability */}
              <div className="absolute inset-2 sm:inset-4 flex flex-col justify-center">
                <DancingProfilePhoto
                  name={profileData.name}
                  title={t('hero.role', profileData.title)}
                />
              </div>

              {/* Floating Stat Badge 1: 28+ Projects */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#A7D8F0] dark:border-slate-800 shadow-md flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#DFF4FF] dark:bg-sky-950/80 flex items-center justify-center text-[#0077B6] dark:text-[#38BDF8]">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033] dark:text-white">28+ Projects</p>
                  <p className="text-[10px] text-[#64748B] dark:text-slate-400">{t('hero.projectsBuilt', 'Built & Deployed')}</p>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2: 99.9% Uptime */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -right-4 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#A7D8F0] dark:border-slate-800 shadow-md flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033] dark:text-white">99.9% Uptime</p>
                  <p className="text-[10px] text-[#64748B] dark:text-slate-400">fullStack Systems</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

