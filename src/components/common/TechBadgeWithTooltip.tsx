import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Code2 } from 'lucide-react';

interface TechBadgeWithTooltipProps {
  tech: string;
  usageText?: string;
  projectName?: string;
  size?: 'sm' | 'md';
  isSelected?: boolean;
  onSelect?: (tech: string) => void;
}

export const TechBadgeWithTooltip: React.FC<TechBadgeWithTooltipProps> = ({
  tech,
  usageText,
  projectName,
  size = 'md',
  isSelected = false,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultUsage =
    usageText ||
    `Utilized for ${tech} implementation and core architectural features${projectName ? ` in ${projectName}` : ''}.`;

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={() => onSelect && onSelect(tech)}
        className={`rounded-full font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
          size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
        } ${
          isHovered
            ? 'bg-[#0077B6] text-white border-[#0077B6] shadow-md scale-105 z-20'
            : isSelected
            ? 'bg-[#0077B6] text-white border-[#38BDF8] shadow-2xs'
            : 'bg-[#F5FBFF]/90 dark:bg-slate-800/90 text-[#172033] dark:text-slate-200 border-[#A7D8F0]/50 dark:border-slate-700/60 hover:bg-[#DFF4FF] dark:hover:bg-slate-700'
        }`}
      >
        <Cpu
          className={`w-3 h-3 ${
            isHovered
              ? 'text-white animate-spin'
              : isSelected
              ? 'text-white'
              : 'text-[#0077B6] dark:text-[#38BDF8]'
          }`}
        />
        <span>{tech}</span>
      </button>

      {/* Hover-Activated Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 z-40 w-64 sm:w-72 pointer-events-none"
          >
            <div className="bg-[#172033]/95 dark:bg-slate-950/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-[#A7D8F0]/30 dark:border-slate-700 space-y-2 text-xs relative">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
                <span className="font-extrabold text-[#38BDF8] flex items-center gap-1.5 text-xs">
                  <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" /> {tech}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                  Tech Utilization
                </span>
              </div>
              <p className="text-[11px] text-slate-200 leading-relaxed font-sans font-normal">
                {defaultUsage}
              </p>
              {/* Caret */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#172033] dark:border-t-slate-950" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
