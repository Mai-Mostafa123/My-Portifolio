//@ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Play, CheckCircle2, ShieldAlert, Cpu, RefreshCw, Github } from 'lucide-react';
import { Project } from '../../types';
import { TechBadgeWithTooltip } from './TechBadgeWithTooltip';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'logs' | 'architecture'>('preview');
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    'GET /api/v1/health status: 200 OK',
    'WebSocket connection established on wss://demo.nexuscloud.io',
    'Metrics buffer initialized with 1,000 data frames/sec',
    'Session verified via OAuth token...'
  ]);

  if (!project) return null;

  const triggerSimulation = () => {
    setIsSimulating(true);
    const newLog = `[Event Trigger] simulated high load test on ${project.title} - Response time: 24ms`;
    setLogs((prev) => [newLog, ...prev]);
    setTimeout(() => setIsSimulating(false), 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172033]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#A7D8F0] overflow-hidden my-6"
        >
          {/* Header */}
          <div className="bg-[#F5FBFF]/80 backdrop-blur-md px-6 py-4 border-b border-[#A7D8F0]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#A7D8F0] flex items-center justify-center text-[#172033]">
                <Cpu className="w-4 h-4 text-[#0077B6]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#172033]">{project.title}</h3>
                <p className="text-[11px] text-[#64748B]">Interactive Sandbox Preview Environment</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={triggerSimulation}
                disabled={isSimulating}
                className="px-3 py-1.5 rounded-full bg-white/80 border border-[#A7D8F0]/40 text-xs font-semibold text-[#172033] hover:bg-[#DFF4FF] transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#0077B6] ${isSimulating ? 'animate-spin' : ''}`} />
                Test API Load
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-[#DFF4FF] text-[#64748B] hover:text-[#172033]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sandbox Tabs */}
          <div className="border-b border-[#A7D8F0]/30 bg-[#F5FBFF]/60 backdrop-blur-xs px-6 flex gap-2 pt-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'preview'
                  ? 'border-[#87CEEB] text-[#0077B6] bg-white/90 rounded-t-lg shadow-2xs'
                  : 'border-transparent text-[#64748B] hover:text-[#172033]'
              }`}
            >
              App Interface
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'logs'
                  ? 'border-[#87CEEB] text-[#0077B6] bg-white/90 rounded-t-lg shadow-2xs'
                  : 'border-transparent text-[#64748B] hover:text-[#172033]'
              }`}
            >
              System Logs ({logs.length})
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'architecture'
                  ? 'border-[#87CEEB] text-[#0077B6] bg-white/90 rounded-t-lg shadow-2xs'
                  : 'border-transparent text-[#64748B] hover:text-[#172033]'
              }`}
            >
              Tech Architecture
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            {activeTab === 'preview' && (
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#A7D8F0]/40 bg-slate-900 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top opacity-90 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#87CEEB] text-white font-bold text-[10px] uppercase">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <p className="text-xs text-slate-200">{project.shortDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Key Features Quick Check */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#F5FBFF]/80 backdrop-blur-xs border border-[#A7D8F0]/30 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-[#172033] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="bg-[#172033] text-emerald-400 p-4 rounded-2xl font-mono text-xs space-y-2 h-64 overflow-y-auto border border-slate-700">
                <p className="text-slate-400 border-b border-slate-800 pb-2">// Live Telemetry Buffer (Auto-Updated)</p>
                {logs.map((log, i) => (
                  <p key={i} className="leading-relaxed">
                    <span className="text-sky-400">[{new Date().toLocaleTimeString()}]</span> {log}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-4 text-xs text-[#172033]">
                <div className="p-4 rounded-2xl bg-[#F5FBFF]/80 border border-[#A7D8F0]/30">
                  <h5 className="font-bold text-[#0077B6] mb-1">Problem Statement</h5>
                  <p className="text-[#64748B] leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5FBFF]/80 border border-[#A7D8F0]/30">
                  <h5 className="font-bold text-[#0077B6] mb-1">Engineered Solution</h5>
                  <p className="text-[#64748B] leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#172033] mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((t) => (
                      <TechBadgeWithTooltip
                        key={t}
                        tech={t}
                        usageText={project.techUsage?.[t]}
                        projectName={project.title}
                        size="sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#A7D8F0]/30">
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#F5FBFF]/80 border border-[#A7D8F0]/40 text-[#172033] font-semibold text-xs hover:bg-[#DFF4FF] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" /> Source Code
                </a>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Launch Production Site</span> <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
