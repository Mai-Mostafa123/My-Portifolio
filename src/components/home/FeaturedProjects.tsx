//@ts-nocheck
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Github, Eye, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface FeaturedProjectsProps {
  onOpenLiveDemo: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenLiveDemo }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const featuredList = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-[#F5FBFF]/60 dark:bg-[#0B0F17]/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('projects.title', 'Selected Work')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
              {t('projects.title', 'Featured Full Stack Projects')}
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-300 max-w-2xl">
              {t('projects.subtitle', 'A collection of production-grade web platforms, cloud monitoring systems, and AI integrations engineered with performance in mind.')}
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-[#A7D8F0] dark:border-slate-800 text-[#172033] dark:text-slate-200 font-bold text-xs hover:bg-[#0077B6] hover:text-white transition-all group shadow-2xs"
          >
            <span>{t('projects.filterAll', 'Browse All Projects')} ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8] group-hover:translate-x-1 group-hover:text-white transition-all" />
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/70 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 p-5 shadow-xs hover:shadow-xl hover:shadow-[#0077B6]/10 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Project Image & Badge */}
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#A7D8F0]/30 dark:border-slate-800 bg-[#F5FBFF] dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#0077B6] dark:text-[#38BDF8] font-bold text-[10px] uppercase tracking-wider border border-[#A7D8F0] dark:border-slate-800 shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#172033]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-[#172033] dark:text-slate-200 font-bold text-xs shadow-md hover:bg-[#0077B6] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('projects.quickSandbox', 'Quick Sandbox')}
                    </button>
                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="px-4 py-2 rounded-full bg-[#172033] dark:bg-slate-800 text-white font-bold text-xs shadow-md hover:bg-[#0077B6] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-white" /> {t('projects.fullDetails', 'Full Details')}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#172033] dark:text-white group-hover:text-[#0077B6] dark:group-hover:text-[#38BDF8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-800/80 backdrop-blur-xs border border-[#A7D8F0]/40 dark:border-slate-700/60 text-[11px] font-semibold text-[#172033] dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-full bg-[#DFF4FF] dark:bg-slate-800 text-[10px] font-bold text-[#0077B6] dark:text-[#38BDF8]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-4 border-t border-[#A7D8F0]/30 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:border-[#87CEEB] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onOpenLiveDemo(project)}
                    className="px-3 py-1.5 rounded-full bg-[#F5FBFF] dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 text-[#0077B6] dark:text-[#38BDF8] font-bold text-xs hover:bg-[#DFF4FF] dark:hover:bg-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </button>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 rounded-full bg-[#0077B6] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{t('projects.fullDetails', 'View Details')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prominent View All Projects Banner Button */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#0077B6] text-white font-extrabold text-sm shadow-md hover:shadow-xl hover:scale-[1.03] transition-all border border-white/40"
          >
            <span>{t('projects.filterAll', 'View All Projects Gallery')}</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
};

