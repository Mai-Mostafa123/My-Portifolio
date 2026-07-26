//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Home,
  FolderKanban,
  Award,
  User,
  Mail,
  FileText,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  Sparkles,
  Command,
  ExternalLink,
  X,
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';
import { Project } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleTheme?: () => void;
  onOpenLiveDemo?: (project: Project) => void;
  theme?: 'black' | 'light';
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Navigation' | 'Actions' | 'Projects';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onToggleTheme,
  onOpenLiveDemo,
  theme = 'black',
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Construct items list
  const navigationItems: CommandItem[] = [
    {
      id: 'nav-home',
      title: t('nav.home', 'Home Page'),
      subtitle: 'Overview, featured projects, and tech stack',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />,
      action: () => {
        navigate('/');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: t('nav.projects', 'Projects Showcase'),
      subtitle: 'Browse all software development projects',
      category: 'Navigation',
      icon: <FolderKanban className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />,
      action: () => {
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'nav-certifications',
      title: t('nav.certifications', 'Certifications Showcase'),
      subtitle: 'Verified credentials from AWS, Meta, Google, and MongoDB',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />,
      action: () => {
        navigate('/certifications');
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: t('nav.about', 'About Me'),
      subtitle: 'Bio, philosophy, skills, and background',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />,
      action: () => {
        navigate('/about');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: t('nav.contact', 'Contact & Socials'),
      subtitle: 'Get in touch or leave a message',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />,
      action: () => {
        navigate('/contact');
        onClose();
      },
    },
  ];

  const actionItems: CommandItem[] = [
    {
      id: 'action-resume',
      title: 'View Interactive Resume',
      subtitle: 'Open full PDF resume modal & download options',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-emerald-500" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'action-theme',
      title: theme === 'black' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      subtitle: 'Toggle color appearance across the application',
      category: 'Actions',
      icon:
        theme === 'black' ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-500" />
        ),
      action: () => {
        if (onToggleTheme) onToggleTheme();
        onClose();
      },
    },
    {
      id: 'action-lang',
      title: `Switch Language (${language === 'en' ? 'Español' : 'English'})`,
      subtitle: 'Toggle interface language preference',
      category: 'Actions',
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      action: () => {
        toggleLanguage();
        onClose();
      },
    },
  ];

  const projectItems: CommandItem[] = projectsData.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: `${p.category} • ${p.technologies.slice(0, 3).join(', ')}`,
    category: 'Projects',
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    action: () => {
      navigate(`/projects/${p.id}`);
      onClose();
    },
  }));

  const allItems = [...navigationItems, ...actionItems, ...projectItems];

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(search.toLowerCase())) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Keep selected index within bounds when filtering
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-[#0F172A] border border-[#A7D8F0]/50 dark:border-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Header Search Input */}
          <div className="p-4 border-b border-[#A7D8F0]/30 dark:border-slate-800/80 flex items-center gap-3 bg-[#F5FBFF]/50 dark:bg-slate-900/50">
            <Search className="w-5 h-5 text-[#0077B6] dark:text-[#38BDF8]" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type a command or search projects & pages..."
              className="w-full bg-transparent border-none text-sm sm:text-base font-medium text-[#172033] dark:text-white focus:outline-none placeholder:text-[#64748B] dark:placeholder:text-slate-500"
            />
            <div className="flex items-center gap-1.5">
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
                ESC
              </kbd>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results List */}
          <div className="overflow-y-auto p-2 space-y-1 flex-grow">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-sm text-[#64748B] dark:text-slate-400">
                No commands or projects found matching "<span className="font-semibold text-[#172033] dark:text-slate-200">{search}</span>".
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0077B6] text-white shadow-md'
                        : 'hover:bg-[#F5FBFF] dark:hover:bg-slate-800/60 text-[#172033] dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl flex items-center justify-center ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-[#F5FBFF] dark:bg-slate-800 border border-[#A7D8F0]/30 dark:border-slate-700'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className={`font-bold text-xs sm:text-sm ${isSelected ? 'text-white' : 'text-[#172033] dark:text-white'}`}>
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className={`text-[11px] ${isSelected ? 'text-sky-100' : 'text-[#64748B] dark:text-slate-400'}`}>
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md uppercase font-bold ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}>
                        {item.category}
                      </span>
                      {isSelected && <ArrowRight className="w-4 h-4 text-white" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Guide */}
          <div className="p-3 bg-[#F5FBFF] dark:bg-slate-900/80 border-t border-[#A7D8F0]/30 dark:border-slate-800 flex items-center justify-between text-[11px] text-[#64748B] dark:text-slate-400 font-medium px-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded shadow-2xs">↑</kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded shadow-2xs">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded shadow-2xs">↵</kbd>
                <span>Select</span>
              </span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <Command className="w-3 h-3 text-[#0077B6] dark:text-[#38BDF8]" />
              <span>Quick Actions Menu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
