//@ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';
import { skillsData } from '../../data/skillsData';
import { useLanguage } from '../../context/LanguageContext';

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database & Cloud', 'Tools & DevOps'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#F5FBFF]/60 dark:bg-[#0B0F17]/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('about.skills', 'Technical Expertise')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
            {t('about.skills', 'Tech Stack & Engineering Skills')}
          </h2>
          <p className="text-sm text-[#64748B] dark:text-slate-300">
            Proven expertise across modern web frontend frameworks, backend microservices, databases, and DevOps workflows.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0077B6] text-white shadow-md scale-105'
                    : 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-xs text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-[#A7D8F0]/40 dark:border-slate-800'
                }`}
              >
                {cat === 'All' ? t('projects.filterAll', 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-800 text-[#0077B6] dark:text-[#38BDF8] border border-[#A7D8F0]/40 dark:border-slate-700">
                      {skill.category}
                    </span>
                    {skill.popular && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200/80 dark:border-amber-800/60">
                        <Sparkles className="w-3 h-3" /> Core
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#172033] dark:text-white group-hover:text-[#0077B6] dark:group-hover:text-[#38BDF8] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Meter & Years */}
                <div className="pt-4 mt-3 border-t border-[#A7D8F0]/20 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#64748B] dark:text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-[#172033] dark:text-slate-200 font-bold">{skill.level}% • {skill.years} Yrs</span>
                  </div>
                  <div className="w-full bg-[#F5FBFF] dark:bg-slate-950 h-2 rounded-full overflow-hidden border border-[#A7D8F0]/30 dark:border-slate-800">
                    <div
                      className="bg-gradient-to-r from-[#0077B6] to-[#0096C7] h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

