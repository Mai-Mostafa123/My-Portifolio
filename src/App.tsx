import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { ResumeModal } from './components/common/ResumeModal';
import { CertificateModal } from './components/common/CertificateModal';
import { LiveDemoModal } from './components/common/LiveDemoModal';
import { CommandPalette } from './components/common/CommandPalette';

import { Project, Certification } from './types';

// Lazy-loaded major page components
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage').then((m) => ({ default: m.ProjectDetailsPage })));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage').then((m) => ({ default: m.CertificationsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

const PageFallback = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8">
    <div className="w-10 h-10 border-3 border-[#0077B6] border-t-transparent dark:border-[#38BDF8] dark:border-t-transparent rounded-full animate-spin mb-3" />
    <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 animate-pulse">Loading page...</span>
  </div>
);

const AnimatedRoutes = ({
  setIsResumeOpen,
  setSelectedDemoProject,
  setSelectedCert,
}: {
  setIsResumeOpen: (v: boolean) => void;
  setSelectedDemoProject: (p: Project | null) => void;
  setSelectedCert: (c: Certification | null) => void;
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <HomePage
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
                onOpenCertModal={(cert) => setSelectedCert(cert)}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
              />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetailsPage
                onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
              />
            }
          />
          <Route
            path="/certifications"
            element={
              <CertificationsPage
                onOpenCertModal={(cert) => setSelectedCert(cert)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Keyboard Shortcuts (Cmd/Ctrl + K and Esc to close active modals)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Esc to close active modals or command palette
      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
        } else if (isResumeOpen) {
          setIsResumeOpen(false);
        } else if (selectedCert) {
          setSelectedCert(null);
        } else if (selectedDemoProject) {
          setSelectedDemoProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isCommandPaletteOpen, isResumeOpen, selectedCert, selectedDemoProject]);

  // Theme State (defaulting to Light Theme)
  const [theme, setTheme] = useState<'black' | 'light'>(() => {
    const saved = localStorage.getItem('app_theme');
    return saved === 'black' ? 'black' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    if (theme === 'black') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'black' ? 'light' : 'black'));
  };

  const isBlack = theme === 'black';

  return (
    <Router>
      <ScrollProgressBar />
      <ScrollToTop />

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen ${
          isBlack ? 'bg-[#0B0F17] text-slate-100 dark' : 'bg-[#F5FBFF] text-[#172033]'
        } flex flex-col font-sans selection:bg-[#0077B6] selection:text-white relative overflow-hidden transition-colors duration-300`}
      >
        {/* Global Ambient Frosted Glass Background Blobs */}
        {isBlack ? (
          <>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0077B6]/25 via-[#38BDF8]/10 to-transparent rounded-full -mr-48 -mt-48 opacity-70 blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0077B6]/10 to-transparent rounded-full -ml-32 -mb-32 opacity-60 blur-3xl pointer-events-none z-0" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0077B6]/15 via-[#38BDF8]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
          </>
        ) : (
          <>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#DFF4FF] via-[#A7D8F0]/30 to-transparent rounded-full -mr-48 -mt-48 opacity-70 blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#A7D8F0]/40 via-[#DFF4FF]/30 to-transparent rounded-full -ml-32 -mb-32 opacity-50 blur-3xl pointer-events-none z-0" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#DFF4FF]/30 via-[#A7D8F0]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
          </>
        )}

        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <main className="flex-grow relative z-10">
          <Suspense fallback={<PageFallback />}>
            <AnimatedRoutes
              setIsResumeOpen={setIsResumeOpen}
              setSelectedDemoProject={setSelectedDemoProject}
              setSelectedCert={setSelectedCert}
            />
          </Suspense>
        </main>

        <Footer />

        {/* Global Modals & Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          onToggleTheme={toggleTheme}
          onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
          theme={theme}
        />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        <CertificateModal certification={selectedCert} onClose={() => setSelectedCert(null)} />
        <LiveDemoModal project={selectedDemoProject} onClose={() => setSelectedDemoProject(null)} />
      </div>
    </Router>
  );
}
