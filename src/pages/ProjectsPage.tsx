import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowLeft, Github, ExternalLink, Eye, Layers, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface ProjectsPageProps {
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenLiveDemo }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'React', 'Node.js', 'MERN', 'APIs'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-transparent min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#A7D8F0]/30 pb-8">
          <div className="space-y-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0077B6] hover:text-[#172033] transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              All Engineering Projects
            </h1>
            <p className="text-sm text-[#64748B] max-w-xl">
              Explore my complete portfolio of web applications, cloud dashboards, real-time collaboration engines, and developer tools.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#A7D8F0]/40 text-xs font-bold text-[#172033] shadow-2xs">
              Showing <strong className="text-[#0077B6]">{filteredProjects.length}</strong> of {projectsData.length} Projects
            </span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#87CEEB] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by tech or name (e.g., React, Gemini)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-[#A7D8F0]/40 text-xs font-medium text-[#172033] focus:outline-none focus:border-[#87CEEB] focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5 text-[#64748B] mr-1 hidden sm:inline" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#87CEEB] text-white shadow-2xs'
                      : 'bg-white/80 text-[#64748B] hover:text-[#172033] hover:bg-white border border-[#A7D8F0]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Projects Responsive Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md p-12 text-center rounded-3xl border border-[#A7D8F0]/40 space-y-3">
            <p className="text-base font-bold text-[#172033]">No matching projects found</p>
            <p className="text-xs text-[#64748B]">Try searching for a different keyword or resetting your filter category.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7]"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/70 backdrop-blur-md rounded-3xl border border-[#A7D8F0]/40 p-5 shadow-2xs hover:shadow-xl hover:shadow-[#87CEEB]/20 hover:border-[#87CEEB] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Image & Category Pill */}
                    <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#A7D8F0]/30 bg-[#F5FBFF]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0077B6] font-bold text-[10px] uppercase border border-[#A7D8F0]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Short Desc */}
                    <div>
                      <h3 className="text-lg font-bold text-[#172033] group-hover:text-[#0077B6] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-[#F5FBFF]/80 border border-[#A7D8F0]/30 text-[10px] font-semibold text-[#172033]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[10px] text-[#64748B] font-semibold">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-[#A7D8F0]/30 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/80 border border-[#A7D8F0]/40 text-[#64748B] hover:text-[#172033] hover:border-[#87CEEB]"
                        aria-label="GitHub Repo"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => onOpenLiveDemo(project)}
                        className="px-2.5 py-1.5 rounded-full bg-[#F5FBFF] border border-[#A7D8F0]/40 text-[#0077B6] font-bold text-xs hover:bg-[#DFF4FF]"
                      >
                        Demo
                      </button>
                    </div>

                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="px-3.5 py-1.5 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>Details</span>
                      <Layers className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  );
};
