//@ts-nocheck
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experienceData';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceTimeline: React.FC = () => {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState<string>('All');

  const filtered = filterType === 'All'
    ? experienceData
    : experienceData.filter((exp) => exp.type === filterType);

  return (
    <section id="experience" className="py-20 bg-[#F5FBFF]/40 dark:bg-[#0B0F17]/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('about.experience', 'Career History')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
            {t('about.experience', 'Work Experience & Education')}
          </h2>
          <p className="text-sm text-[#64748B] dark:text-slate-300">
            A timeline of roles, engineering achievements, and academic milestones in web software development.
          </p>

          {/* Filter Options */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['All', 'Full-time', 'Freelance', 'Education'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  filterType === type
                    ? 'bg-[#0077B6] text-white shadow-xs'
                    : 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-xs text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white border border-[#A7D8F0]/40 dark:border-slate-800'
                }`}
              >
                {type === 'All' ? t('projects.filterAll', 'All') : type}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-[#A7D8F0]/50 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {filtered.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-2 border-[#0077B6] dark:border-[#38BDF8] shadow-md flex items-center justify-center text-[#0077B6] dark:text-[#38BDF8] z-10 my-2 sm:my-0">
                    {item.type === 'Education' ? (
                      <GraduationCap className="w-5 h-5 text-[#0077B6] dark:text-[#38BDF8]" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-[#0077B6] dark:text-[#38BDF8]" />
                    )}
                  </div>

                  {/* Content Card Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all space-y-4">
                      
                      {/* Role & Period */}
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-800 backdrop-blur-xs border border-[#A7D8F0]/40 dark:border-slate-700 text-[#0077B6] dark:text-[#38BDF8] font-bold text-xs">
                            {item.period}
                          </span>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100/80 dark:bg-slate-800 text-[#64748B] dark:text-slate-300">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#172033] dark:text-white mt-2">{item.role}</h3>
                        <p className="text-xs font-semibold text-[#64748B] dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                          <span>{item.company}</span> • 
                          <span className="flex items-center gap-1 font-normal">
                            <MapPin className="w-3 h-3 text-[#0077B6] dark:text-[#38BDF8]" /> {item.location}
                          </span>
                        </p>
                      </div>

                      <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements List */}
                      <ul className="space-y-1.5 pt-1">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="text-xs text-[#172033] dark:text-slate-200 flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#A7D8F0]/20 dark:border-slate-800">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-full bg-[#F5FBFF]/80 dark:bg-slate-800 border border-[#A7D8F0]/30 dark:border-slate-700 text-[10px] font-semibold text-[#172033] dark:text-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

