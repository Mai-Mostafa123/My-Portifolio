//@ts-nocheck
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Award, Calendar, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { Certification } from '../../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172033]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#A7D8F0] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#F5FBFF]/80 backdrop-blur-md px-6 py-4 border-b border-[#A7D8F0]/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold text-[#172033]">Verified Credentials</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#DFF4FF] text-[#64748B] hover:text-[#172033]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Content */}
          <div className="p-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#A7D8F0]/40 bg-gradient-to-br from-[#F5FBFF]/80 to-[#DFF4FF]/40 p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/90 shadow-md border border-[#A7D8F0] flex items-center justify-center text-[#87CEEB]">
                <Award className="w-8 h-8 text-[#0077B6]" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#DFF4FF] text-[#0077B6] font-semibold text-xs mb-2">
                  {certification.category}
                </span>
                <h3 className="text-xl font-bold text-[#172033]">{certification.title}</h3>
                <p className="text-sm font-medium text-[#64748B]">{certification.organization}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748B] pt-2 border-t border-[#A7D8F0]/40">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#87CEEB]" /> Issued: {certification.issueDate}
                </span>
                <span className="font-mono text-[#172033] bg-white/90 px-2 py-0.5 rounded border border-[#A7D8F0]/40">
                  ID: {certification.certificateId}
                </span>
                {certification.hours && (
                  <span className="text-[#0077B6] font-semibold">
                    {certification.hours} Learning Hours
                  </span>
                )}
              </div>
            </div>

            {/* Skills Covered */}
            <div>
              <h4 className="text-xs font-bold text-[#172033] uppercase tracking-wider mb-2.5">
                Competencies & Skills Verified
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#F5FBFF]/80 border border-[#A7D8F0]/40 text-xs font-medium text-[#172033] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <a
                href={certification.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Verify Credentials Online</span> <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
