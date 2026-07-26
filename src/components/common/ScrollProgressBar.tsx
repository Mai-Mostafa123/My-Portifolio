import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth color shift based on scroll depth
  const getGradient = () => {
    if (scrollPercent < 33) {
      return 'from-[#38BDF8] via-[#0077B6] to-[#0096C7]';
    } else if (scrollPercent < 66) {
      return 'from-[#0077B6] via-[#0284C7] to-[#6366F1]';
    } else {
      return 'from-[#6366F1] via-[#8B5CF6] to-[#10B981]';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none no-print bg-slate-200/20 dark:bg-slate-800/20 backdrop-blur-2xs">
      <div
        className={`h-full bg-gradient-to-r ${getGradient()} transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]`}
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};
