import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ShieldAlert, Cpu, Layers, Sparkles, Eye, ChevronLeft, ChevronRight, Home, Info, Code2, Clock } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { TechBadgeWithTooltip } from '../components/common/TechBadgeWithTooltip';

interface ProjectDetailsPageProps {
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ onOpenLiveDemo }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  const [activeImage, setActiveImage] = useState<number>(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#172033] dark:text-white">Project Not Found</h2>
        <p className="text-xs text-[#64748B] dark:text-slate-400">The requested project identifier does not exist in our dataset.</p>
        <Link to="/projects" className="px-5 py-2.5 rounded-full bg-[#0077B6] text-white font-bold text-xs inline-block">
          Return to Projects Gallery
        </Link>
      </div>
    );
  }

  // Calculate estimated reading time based on total word count
  const totalText = [
    project.shortDescription,
    project.fullDescription,
    project.problem,
    project.solution,
    ...project.features,
    ...project.challenges,
    ...project.results
  ].join(' ');
  const wordCount = totalText.split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 180));

  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="pt-28 pb-20 bg-transparent min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Navigation Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#A7D8F0]/30 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <Link
              to="/projects"
              className="px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 hover:border-[#87CEEB] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Projects
            </Link>
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 text-xs font-bold text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:border-[#87CEEB] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Home className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 text-xs font-bold text-[#172033] dark:text-slate-200 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] flex items-center gap-1.5 shadow-2xs"
            >
              <Github className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> GitHub Repo
            </a>
            <button
              onClick={() => onOpenLiveDemo(project)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white font-bold text-xs hover:brightness-110 flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-white" /> Live Demo Sandbox
            </button>
          </div>
        </div>

        {/* Project Hero Title & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#DFF4FF] dark:bg-[#0077B6]/20 text-[#0077B6] dark:text-[#38BDF8] border border-[#0077B6]/30 font-bold text-xs uppercase tracking-wider">
              {project.category}
            </span>

            {/* Estimated Reading Time Badge */}
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" />
              <span>{readingTimeMinutes} min read</span>
            </span>

            <span className="text-xs text-[#64748B] dark:text-slate-400 font-semibold">• Full Production Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172033] dark:text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-base text-[#64748B] dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Metrics Badges Row */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs text-center">
                  <span className="text-2xl font-extrabold text-[#0077B6] dark:text-[#38BDF8] block">{m.value}</span>
                  <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Image Gallery Frame */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-[#A7D8F0]/40 shadow-lg bg-slate-900 aspect-video">
            <img
              src={project.screenshots[activeImage] || project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
              Screenshot {activeImage + 1} of {project.screenshots.length}
            </div>
          </div>

          {/* Screenshot Thumbnails */}
          {project.screenshots.length > 1 && (
            <div className="flex items-center gap-3">
              {project.screenshots.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative rounded-xl overflow-hidden w-24 h-16 border-2 transition-all ${
                    activeImage === idx ? 'border-[#87CEEB] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs space-y-3">
              <h3 className="text-xl font-bold text-[#172033] dark:text-white">Project Overview</h3>
              <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-rose-200/80 dark:border-rose-900/50 shadow-2xs space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold text-[10px] uppercase border border-rose-200 dark:border-rose-800/40">
                  The Problem
                </span>
                <h4 className="text-base font-bold text-[#172033] dark:text-white">Market Challenge</h4>
                <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-emerald-200/80 dark:border-emerald-900/50 shadow-2xs space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] uppercase border border-emerald-200 dark:border-emerald-800/40">
                  The Solution
                </span>
                <h4 className="text-base font-bold text-[#172033] dark:text-white">Engineered Fix</h4>
                <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#172033] dark:text-white">Key Features & System Capabilities</h3>
              <div className="grid grid-cols-1 gap-2.5 text-xs">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-[#F5FBFF]/80 dark:bg-slate-800/60 backdrop-blur-xs border border-[#A7D8F0]/30 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[#172033] dark:text-slate-200 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Challenges & Measurable Outcomes */}
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#172033] dark:text-white mb-3">Technical Challenges & Workarounds</h3>
                <ul className="space-y-2 text-xs text-[#64748B] dark:text-slate-300">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-[#F5FBFF]/80 dark:bg-slate-800/60 backdrop-blur-xs border border-[#A7D8F0]/30 dark:border-slate-700/60 text-[#172033] dark:text-slate-200 leading-relaxed">
                      ⚡ <strong>Challenge {idx + 1}:</strong> {ch}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#A7D8F0]/30 dark:border-slate-800">
                <h3 className="text-xl font-bold text-[#172033] dark:text-white mb-3">Measurable Results & Impact</h3>
                <ul className="space-y-2 text-xs text-[#172033] dark:text-slate-200">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium">
                      <Sparkles className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8] shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Role & Spec Box */}
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs space-y-4 text-xs">
              <h4 className="font-bold text-[#172033] dark:text-white text-sm uppercase tracking-wider border-b border-[#A7D8F0]/30 dark:border-slate-800 pb-3">
                Project Architecture
              </h4>

              <div>
                <span className="text-[#64748B] dark:text-slate-400 block">My Role:</span>
                <span className="font-bold text-[#172033] dark:text-white text-sm">{project.role}</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#64748B] dark:text-slate-400 font-semibold">Technologies & Tools Used:</span>
                  <span className="text-[10px] text-[#0077B6] dark:text-[#38BDF8] font-bold bg-[#DFF4FF] dark:bg-[#0077B6]/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Info className="w-3 h-3 text-[#0077B6] dark:text-[#38BDF8]" /> Hover badge
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 relative pt-1">
                  {project.technologies.map((t) => (
                    <div
                      key={t}
                      onMouseEnter={() => setHoveredTech(t)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <TechBadgeWithTooltip
                        tech={t}
                        usageText={project.techUsage?.[t]}
                        projectName={project.title}
                        isSelected={(selectedTech || hoveredTech || project.technologies[0]) === t}
                        onSelect={(tech) => setSelectedTech(tech)}
                      />
                    </div>
                  ))}
                </div>

                {/* Technology Spotlight Details Card */}
                <div className="mt-3.5 p-3.5 rounded-2xl bg-[#F5FBFF]/90 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 space-y-1.5 transition-all">
                  <div className="flex items-center justify-between border-b border-[#A7D8F0]/30 dark:border-slate-700 pb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077B6] dark:text-[#38BDF8] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#0077B6] dark:text-[#38BDF8]" /> Tech Utilization Details
                    </span>
                    <span className="text-xs font-extrabold text-[#172033] dark:text-white">
                      {hoveredTech || selectedTech || project.technologies[0]}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed font-medium">
                    {project.techUsage?.[hoveredTech || selectedTech || project.technologies[0]] ||
                      `Utilized for ${hoveredTech || selectedTech || project.technologies[0]} implementation in ${project.title}.`}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#A7D8F0]/30 dark:border-slate-800 space-y-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white font-bold text-xs hover:brightness-110 transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Visit Live Production Site</span> <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 text-[#172033] dark:text-slate-200 font-bold text-xs hover:bg-white dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> View Source Repository
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Prev / Next Navigation Row */}
        <div className="pt-8 border-t border-[#A7D8F0]/30 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate(`/projects/${prevProject.id}`)}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 text-xs font-bold text-[#172033] dark:text-slate-200 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
            <span>Prev: {prevProject.title}</span>
          </button>

          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-full bg-[#DFF4FF]/80 dark:bg-[#0077B6]/20 border border-[#A7D8F0]/40 dark:border-[#0077B6]/40 text-[#0077B6] dark:text-[#38BDF8] font-bold text-xs hover:bg-[#0077B6] hover:text-white transition-colors"
          >
            All Projects List
          </Link>

          <button
            onClick={() => navigate(`/projects/${nextProject.id}`)}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-[#A7D8F0]/40 dark:border-slate-800 text-xs font-bold text-[#172033] dark:text-slate-200 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Next: {nextProject.title}</span>
            <ChevronRight className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
          </button>
        </div>

      </div>
    </div>
  );
};
