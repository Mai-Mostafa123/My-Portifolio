//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const statusMessages = [
    'Initializing Developer Workspace...',
    'Loading React & TypeScript Modules...',
    'Connecting Microservices & APIs...',
    'Configuring Light Blue Palette...',
    'Portfolio Ready!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        const capped = Math.min(next, 100);

        if (capped > 20 && capped < 45) setStatusIndex(1);
        else if (capped >= 45 && capped < 75) setStatusIndex(2);
        else if (capped >= 75 && capped < 95) setStatusIndex(3);
        else if (capped >= 95) setStatusIndex(4);

        return capped;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#F5FBFF] via-white to-[#DFF4FF] px-4"
        >
          {/* Subtle Background Glowing Spheres */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#A7D8F0]/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DFF4FF]/60 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo Icon */}
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 rounded-full border-2 border-dashed border-[#87CEEB] flex items-center justify-center p-2"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-[#A7D8F0]/40 border border-[#A7D8F0] flex items-center justify-center text-[#172033]"
                >
                  <Code2 className="w-8 h-8 text-[#87CEEB]" />
                </motion.div>
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-[#87CEEB] animate-bounce" />
              </div>
            </div>

            {/* Title & Tagline */}
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-[#172033] tracking-tight mb-1"
            >
            Mai Mostafa
            </motion.h2>
            <p className="text-xs uppercase tracking-widest text-[#64748B] font-semibold mb-6 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#87CEEB]" /> Full Stack Portfolio
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/80 p-1.5 rounded-full border border-[#A7D8F0]/60 shadow-inner mb-4">
              <motion.div
                className="h-2.5 rounded-full bg-gradient-to-r from-[#A7D8F0] via-[#87CEEB] to-[#60A5FA]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="w-full flex items-center justify-between text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium min-h-[1.25rem]">
                {progress === 100 ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#87CEEB] animate-ping" />
                )}
                {statusMessages[statusIndex]}
              </span>
              <span className="font-mono font-bold text-[#172033]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
