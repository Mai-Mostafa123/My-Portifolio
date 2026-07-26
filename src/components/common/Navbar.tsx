//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Menu, X, FileText, Github, Linkedin, Moon, Sun, Globe, Command, Search } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenResume: () => void;
  theme?: 'black' | 'light';
  onToggleTheme?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  theme = 'black',
  onToggleTheme,
  onOpenCommandPalette,
}) => {
  const isBlack = theme === 'black';
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`);
      } else {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { name: t('nav.home', 'Home'), path: '/', isRoute: true },
    { name: t('nav.about', 'About'), path: '/about', isRoute: true },
    { name: t('nav.skills', 'Skills'), path: '/#skills', sectionId: 'skills', isRoute: false },
    { name: t('nav.projects', 'Projects'), path: '/projects', isRoute: true },
    { name: t('nav.certifications', 'Certifications'), path: '/certifications', isRoute: true },
    { name: t('nav.experience', 'Experience'), path: '/#experience', sectionId: 'experience', isRoute: false },
    { name: t('nav.contact', 'Contact'), path: '/contact', isRoute: true }
  ];

  const isActive = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      if (link.path === '/') return location.pathname === '/';
      return location.pathname.startsWith(link.path);
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isBlack
          ? scrolled
            ? 'bg-[#0B0F17]/90 backdrop-blur-xl border-b border-slate-800 py-3 shadow-md'
            : 'bg-[#0B0F17]/75 backdrop-blur-md border-b border-slate-800/60 py-4'
          : scrolled
            ? 'bg-white/75 backdrop-blur-md shadow-sm border-b border-[#A7D8F0]/40 py-3'
            : 'bg-white/60 backdrop-blur-md border-b border-[#A7D8F0]/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#38BDF8] border border-sky-300/40 flex items-center justify-center text-white font-bold shadow-xs group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className={`text-lg font-extrabold tracking-tight group-hover:text-[#38BDF8] transition-colors ${
              isBlack ? 'text-white' : 'text-[#172033]'
            }`}>
              {profileData.name}
            </span>
            <span className={`block text-[10px] font-bold tracking-wider uppercase ${
              isBlack ? 'text-slate-400' : 'text-[#64748B]'
            }`}>
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-md p-1.5 rounded-full border shadow-2xs ${
          isBlack ? 'bg-slate-900/80 border-slate-800' : 'bg-white/50 border-[#A7D8F0]/40'
        }`}>
          {navLinks.map((link) => {
            const active = isActive(link);
            return link.isRoute ? (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  active
                    ? isBlack
                      ? 'bg-[#0077B6] text-white shadow-xs border border-[#38BDF8]/50'
                      : 'bg-white text-[#172033] shadow-xs border border-[#A7D8F0]'
                    : isBlack
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-[#64748B] hover:text-[#172033] hover:bg-white/60'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.sectionId)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isBlack
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-[#64748B] hover:text-[#172033] hover:bg-white/60'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Socials, Theme & Language Toggles, Resume & Contact */}
        <div className="hidden md:flex items-center gap-2">
          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 border shadow-2xs cursor-pointer ${
                isBlack
                  ? 'bg-slate-900/90 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-[#38BDF8]'
                  : 'bg-white/90 text-[#172033] border-[#A7D8F0] hover:bg-white'
              }`}
              title="Open Command Palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" />
              <span className="hidden lg:inline text-[11px] font-semibold text-slate-500 dark:text-slate-400">Search...</span>
              <kbd className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-500 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border shadow-2xs cursor-pointer ${
              isBlack
                ? 'bg-slate-900/90 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-[#38BDF8]'
                : 'bg-white/90 text-[#172033] border-[#A7D8F0] hover:bg-white'
            }`}
            title={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            <Globe className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" />
            <span>{language === 'en' ? 'EN' : 'ES'}</span>
            <span className="text-[10px] text-slate-400">|</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {language === 'en' ? 'ES' : 'EN'}
            </span>
          </button>

          {/* Theme Switcher Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border shadow-2xs cursor-pointer ${
                isBlack
                  ? 'bg-slate-900/90 text-[#38BDF8] border-[#0077B6]/50 hover:bg-slate-800 hover:border-[#38BDF8]'
                  : 'bg-white/90 text-[#172033] border-[#A7D8F0] hover:bg-white'
              }`}
              title={isBlack ? t('theme.light', 'Light Mode') : t('theme.dark', 'Dark Mode')}
            >
              {isBlack ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{t('theme.dark', 'Dark')}</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('theme.light', 'Light')}</span>
                </>
              )}
            </button>
          )}

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`w-8 h-8 rounded-full backdrop-blur-xs border flex items-center justify-center transition-all shadow-2xs ${
              isBlack
                ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-[#38BDF8] hover:text-white'
                : 'bg-white/80 border-[#A7D8F0]/50 text-[#172033] hover:border-[#87CEEB] hover:bg-white'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`w-8 h-8 rounded-full backdrop-blur-xs border flex items-center justify-center transition-all shadow-2xs ${
              isBlack
                ? 'bg-slate-900/80 border-slate-800 text-[#38BDF8] hover:border-[#38BDF8]'
                : 'bg-white/80 border-[#A7D8F0]/50 text-[#0077B5] hover:border-[#87CEEB] hover:bg-white'
            }`}
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className={`px-3 py-1.5 border text-xs font-bold rounded-full shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer ${
              isBlack
                ? 'bg-slate-900/90 border-slate-800 text-[#38BDF8] hover:bg-slate-800'
                : 'bg-white/90 border-[#A7D8F0] text-[#0077B6] hover:bg-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            {t('nav.resume', 'Resume')}
          </button>

          {/* Hire Me / Contact Button */}
          <Link
            to="/contact"
            className="px-3.5 py-1.5 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white text-xs font-bold rounded-full shadow-md hover:brightness-110 transition-all flex items-center gap-1.5"
          >
            {t('nav.hireMe', 'Hire Me')}
          </Link>
        </div>

        {/* Mobile Hamburger Button & Quick Toggles */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-center ${
              isBlack ? 'bg-slate-900 border-slate-800 text-[#38BDF8]' : 'bg-white border-[#A7D8F0] text-[#0077B6]'
            }`}
            title="Toggle Language"
          >
            <Globe className="w-4 h-4" />
          </button>
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-center ${
                isBlack ? 'bg-slate-900 border-slate-800 text-[#38BDF8]' : 'bg-white border-[#A7D8F0] text-amber-500'
              }`}
              title="Toggle Theme"
            >
              {isBlack ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isBlack ? 'bg-slate-900 border-slate-800 text-white' : 'bg-[#F5FBFF] border-[#DFF4FF] text-[#172033]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b px-4 pt-2 pb-6 shadow-lg ${
              isBlack
                ? 'bg-slate-950/95 border-slate-800 text-white'
                : 'bg-white/95 border-[#DFF4FF] text-[#172033]'
            }`}
          >
            <div className="flex flex-col gap-1.5 mt-2">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                      isActive(link)
                        ? isBlack
                          ? 'bg-slate-900 text-[#38BDF8] border border-slate-800'
                          : 'bg-[#F5FBFF] text-[#172033] border border-[#A7D8F0]'
                        : isBlack
                          ? 'text-slate-300 hover:bg-slate-900'
                          : 'text-[#64748B] hover:bg-[#F5FBFF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path, link.sectionId)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
                      isBlack ? 'text-slate-300 hover:bg-slate-900' : 'text-[#64748B] hover:bg-[#F5FBFF]'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              ))}

              <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 flex items-center justify-between mt-2 gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-[#38BDF8] flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'English (EN)' : 'Español (ES)'}</span>
                </button>
                {onToggleTheme && (
                  <button
                    onClick={onToggleTheme}
                    className="flex-1 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-[#38BDF8] flex items-center justify-center gap-1.5"
                  >
                    {isBlack ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
                    <span>{isBlack ? 'Dark' : 'Light'}</span>
                  </button>
                )}
              </div>

              <div className="pt-2 flex items-center justify-around">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                >
                  <Github className="w-4 h-4 text-slate-200" /> GitHub
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                >
                  <Linkedin className="w-4 h-4 text-[#38BDF8]" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

