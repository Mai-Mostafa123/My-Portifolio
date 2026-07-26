//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#F5FBFF] to-[#DFF4FF]/40 dark:from-[#0B0F17] dark:to-slate-950/80 border-t border-[#DFF4FF] dark:border-slate-800 pt-16 pb-12 relative overflow-hidden transition-colors">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A7D8F0]/20 dark:bg-[#0077B6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#DFF4FF] dark:border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-[#0077B6] border border-sky-300/40 flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#172033] dark:text-white tracking-tight">
                  {profileData.name}
                </span>
                <span className="block text-xs text-[#64748B] dark:text-slate-400 font-medium">
                  {profileData.title}
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#64748B] dark:text-slate-400 max-w-md leading-relaxed">
              {t('footer.tagline', profileData.tagline)}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-[#DFF4FF] dark:border-slate-800 flex items-center justify-center text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:border-[#87CEEB] transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-[#DFF4FF] dark:border-slate-800 flex items-center justify-center text-[#64748B] dark:text-[#38BDF8] hover:border-[#87CEEB] transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-[#DFF4FF] dark:border-slate-800 flex items-center justify-center text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:border-[#87CEEB] transition-all shadow-2xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#172033] dark:text-white uppercase tracking-wider mb-4">
              {t('footer.quickLinks', 'Navigation')}
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] dark:text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#172033] dark:hover:text-white transition-colors">{t('nav.home', 'Home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#172033] dark:hover:text-white transition-colors">{t('nav.about', 'About')}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#172033] dark:hover:text-white transition-colors">{t('nav.projects', 'Projects')}</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#172033] dark:hover:text-white transition-colors">{t('nav.certifications', 'Certifications')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#172033] dark:hover:text-white transition-colors">{t('nav.contact', 'Contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-[#172033] dark:text-white uppercase tracking-wider mb-4">
              {t('footer.connect', 'Get In Touch')}
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] dark:text-slate-400">
              <li className="font-medium text-[#172033] dark:text-slate-200">{profileData.location}</li>
              <li>
                <a href={`mailto:${profileData.email}`} className="hover:text-[#0077B6] dark:hover:text-[#38BDF8] transition-colors">
                  {profileData.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] border border-emerald-200 dark:border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {profileData.status}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] dark:text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {profileData.name}. {t('footer.allRightsReserved', 'All rights reserved.')}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#DFF4FF] dark:border-slate-800 text-[#172033] dark:text-slate-200 font-semibold text-xs shadow-xs hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-[#F5FBFF] dark:hover:bg-slate-800 transition-all group cursor-pointer"
          >
            <span>{t('footer.backToTop', 'Back to Top')}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

