import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Check, Mail, Phone, MapPin, Globe, Github, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { experienceData } from '../../data/experienceData';
import { skillsData } from '../../data/skillsData';
import { certificationsData } from '../../data/certificationsData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // Create a mock download blob
    const content = `ALEX CHEN - FULL STACK DEVELOPER RESUME\nEmail: ${profileData.email}\nLocation: ${profileData.location}\nGitHub: ${profileData.github}\n\nSUMMARY:\n${profileData.bio}\n\nEXPERIENCE:\n` +
      experienceData.map(exp => `${exp.role} at ${exp.company} (${exp.period})\n- ${exp.achievements.join('\n- ')}`).join('\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Chen_FullStack_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172033]/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#A7D8F0] overflow-hidden my-8"
        >
          {/* Modal Header Controls */}
          <div className="bg-[#F5FBFF]/80 backdrop-blur-md px-6 py-4 border-b border-[#A7D8F0]/40 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold text-[#64748B] ml-2">Resume Preview • Alex_Chen_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-full bg-white/80 border border-[#A7D8F0]/40 text-xs font-semibold text-[#172033] hover:bg-[#DFF4FF] transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" /> Print
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-1.5 rounded-full bg-[#87CEEB] text-white text-xs font-bold shadow-2xs hover:bg-[#0096C7] transition-colors flex items-center gap-1.5"
              >
                {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-100" /> : <Download className="w-3.5 h-3.5 text-white" />}
                {downloaded ? 'Downloaded!' : 'Download Resume'}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-[#DFF4FF] text-[#64748B] hover:text-[#172033] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-white text-[#172033]">
            {/* Header / Contact Banner */}
            <div className="border-b-2 border-[#A7D8F0] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#172033]">{profileData.name}</h1>
                <p className="text-base font-semibold text-[#0077B6] mt-1">{profileData.title}</p>
                <p className="text-xs text-[#64748B] max-w-xl mt-2 leading-relaxed">{profileData.bio}</p>
              </div>

              <div className="text-xs space-y-1.5 text-[#64748B] bg-[#F5FBFF] p-3 rounded-2xl border border-[#DFF4FF] min-w-[220px]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#87CEEB]" /> {profileData.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#87CEEB]" /> {profileData.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#87CEEB]" /> {profileData.location}
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-[#DFF4FF]">
                  <Github className="w-3.5 h-3.5 text-[#172033]" /> github.com
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5] ml-2" /> linkedin.com
                </div>
              </div>
            </div>

            {/* Core Tech Skills Summary */}
            <div>
              <h2 className="text-xs font-bold text-[#172033] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#87CEEB]" /> Core Competencies & Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md bg-[#F5FBFF] border border-[#DFF4FF] text-[11px] font-semibold text-[#172033]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold text-[#172033] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#87CEEB]" /> Professional Experience
              </h2>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l-2 border-[#DFF4FF] space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#172033]">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#DFF4FF] text-[#0077B6]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#64748B]">
                      {exp.company} • <span className="font-normal">{exp.location}</span>
                    </p>
                    <p className="text-xs text-[#64748B] italic">{exp.description}</p>
                    <ul className="list-disc list-inside text-xs text-[#172033] space-y-1 pt-1">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Highlight */}
            <div>
              <h2 className="text-xs font-bold text-[#172033] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#87CEEB]" /> Industry Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {certificationsData.slice(0, 4).map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-[#F5FBFF] border border-[#DFF4FF] space-y-0.5">
                    <p className="font-bold text-[#172033]">{cert.title}</p>
                    <p className="text-[11px] text-[#64748B]">{cert.organization} • {cert.issueDate}</p>
                    <p className="text-[10px] font-mono text-[#0077B6]">ID: {cert.certificateId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
