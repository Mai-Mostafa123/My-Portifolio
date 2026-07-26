//@ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ArrowLeft, Search, ShieldCheck, CheckCircle2, Eye, Download, Sparkles, Filter, Home } from 'lucide-react';
import { certificationsData } from '../data/certificationsData';
import { Certification } from '../types';

interface CertificationsPageProps {
  onOpenCertModal: (cert: Certification) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onOpenCertModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cloud & Infrastructure', 'Frontend Engineering', 'Backend & Databases'];

  const filtered = certificationsData.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.certificateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const totalHours = certificationsData.reduce((acc, curr) => acc + (curr.hours || 0), 0);

  return (
    <div className="pt-28 pb-20 bg-transparent min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#A7D8F0]/30 pb-8">
          <div className="space-y-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0077B6] hover:text-[#172033] transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              Verified Technical Certifications
            </h1>
            <p className="text-sm text-[#64748B] max-w-xl">
              A comprehensive showcase of professional credentials, cloud architect accreditations, and specialized software engineering certificates.
            </p>
          </div>

          <Link
            to="/"
            className="px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-[#A7D8F0]/40 text-xs font-bold text-[#172033] hover:border-[#87CEEB] hover:bg-white transition-colors flex items-center gap-2 w-fit shadow-2xs"
          >
            <Home className="w-4 h-4 text-[#87CEEB]" /> Back to Home
          </Link>
        </div>

        {/* Animated Statistics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-2xs text-center space-y-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#F5FBFF]/80 flex items-center justify-center text-[#0077B6] mb-2 border border-[#A7D8F0]/30">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-3xl font-extrabold text-[#172033] block">{certificationsData.length}</span>
            <span className="text-xs font-semibold text-[#64748B]">Total Certifications</span>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-2xs text-center space-y-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#F5FBFF]/80 flex items-center justify-center text-emerald-600 mb-2 border border-[#A7D8F0]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-3xl font-extrabold text-[#172033] block">{totalHours}+ Hrs</span>
            <span className="text-xs font-semibold text-[#64748B]">Learning & Lab Hours</span>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-2xs text-center space-y-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#F5FBFF]/80 flex items-center justify-center text-[#0096C7] mb-2 border border-[#A7D8F0]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-3xl font-extrabold text-[#172033] block">4 Top Issuers</span>
            <span className="text-xs font-semibold text-[#64748B]">AWS, Meta, GCP, MongoDB</span>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#87CEEB] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certificate or skill (e.g. AWS, React)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-[#A7D8F0]/40 text-xs font-medium text-[#172033] focus:outline-none focus:border-[#87CEEB] focus:bg-white transition-all"
              />
            </div>

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

        {/* Certifications Grid */}
        {filtered.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md p-12 text-center rounded-3xl border border-[#A7D8F0]/40 space-y-3">
            <p className="text-base font-bold text-[#172033]">No certifications match your query</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7]"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-2xs hover:shadow-lg hover:border-[#87CEEB] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5FBFF]/80 border border-[#A7D8F0]/30 flex items-center justify-center text-[#0077B6] group-hover:scale-105 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#DFF4FF] text-[#0077B6] font-bold text-[10px] uppercase">
                        {cert.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#172033] group-hover:text-[#0077B6] transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#64748B] mt-1">
                        {cert.organization} • {cert.issueDate}
                      </p>
                      <p className="text-[10px] font-mono text-[#0077B6] mt-0.5">
                        ID: {cert.certificateId}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-[#F5FBFF]/80 border border-[#A7D8F0]/30 text-[10px] font-medium text-[#172033]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#A7D8F0]/30">
                    <button
                      onClick={() => onOpenCertModal(cert)}
                      className="w-full py-2.5 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-white" /> View Certificate & Verification
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
