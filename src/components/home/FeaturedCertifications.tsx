//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, ArrowRight, Eye } from 'lucide-react';
import { certificationsData } from '../../data/certificationsData';
import { Certification } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import {certicationsData} from '../../data/certificationsData';
interface FeaturedCertificationsProps {
  onOpenCertModal: (cert: Certification) => void;
}

export const FeaturedCertifications: React.FC<FeaturedCertificationsProps> = ({ onOpenCertModal }) => {
  const { t } = useLanguage();
  const featured = certificationsData.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-20 bg-[#F5FBFF]/60 dark:bg-[#0B0F17]/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('about.certifications', 'Industry Recognition')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
              {t('about.certifications', 'Featured Certifications')}
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-300 max-w-2xl">
              Verified certifications from Tawar &Ghayar , minstry of youth and sports , WE for ATS validating technical mastery.
            </p>
          </div>

          <Link
            to="/certifications"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-[#A7D8F0] dark:border-slate-800 text-[#172033] dark:text-slate-200 font-bold text-xs hover:bg-[#0077B6] hover:text-white transition-all group shadow-2xs"
          >
            <span>{t('projects.filterAll', 'View All Certifications')} ({certificationsData.length})</span>
            <ArrowRight className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8] group-hover:translate-x-1 group-hover:text-white transition-all" />
          </Link>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5FBFF] dark:bg-slate-800 border border-[#A7D8F0]/40 dark:border-slate-700 flex items-center justify-center text-[#87CEEB] group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-[#0077B6] dark:text-[#38BDF8]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#DFF4FF] dark:bg-slate-800 text-[#0077B6] dark:text-[#38BDF8] font-bold text-[10px] uppercase">
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base font-bold text-[#172033] dark:text-white group-hover:text-[#0077B6] dark:group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#64748B] dark:text-slate-300 mt-1">
                    {cert.organization} • {cert.issueDate}
                  </p>
                  <p className="text-[10px] font-mono text-[#0077B6] dark:text-[#38BDF8] mt-0.5">
                    ID: {cert.certificateId}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md bg-[#F5FBFF]/80 dark:bg-slate-800 border border-[#A7D8F0]/30 dark:border-slate-700 text-[10px] font-medium text-[#172033] dark:text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="text-[10px] text-[#64748B] dark:text-slate-400 font-semibold">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-[#A7D8F0]/30 dark:border-slate-800">
                <button
                  onClick={() => onOpenCertModal(cert)}
                  className="w-full py-2.5 rounded-full bg-[#0077B6] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-white" /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prominent View All Certifications Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/certifications"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#0077B6] text-white font-extrabold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] transition-all border border-white/40"
          >
            <span>View All Certifications Showcase</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
};

