//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Sparkles, Volume2, VolumeX, Zap, Disc, Radio, Sliders } from 'lucide-react';
import { profileData } from '../../data/profileData';
interface DancingProfilePhotoProps {
  imgSrc?: string;
  name?: string;
  title?: string;
  className?: string;
}

type DanceMove = 'groovy' | 'bounce' | 'disco' | 'shake' | 'moonwalk' | 'spin' | 'breakdance';

export const DancingProfilePhoto: React.FC<DancingProfilePhotoProps> = ({
  imgSrc = profileData.avatar,
  name = 'Mai Mostafa',
  title = 'Full Stack Developer',
  className = '',
}) => {
  const [isDancing, setIsDancing] = useState(false);
  const [danceMove, setDanceMove] = useState<DanceMove>('groovy');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const beatIntervalRef = useRef<number | null>(null);

  // Web Audio API Rhythmic Synth Beat when dancing
  useEffect(() => {
    if (isDancing && audioEnabled) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        let step = 0;
        const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 349.23, 392.0, 659.25, 587.33, 698.46];

        beatIntervalRef.current = window.setInterval(() => {
          if (!audioCtxRef.current) return;
          const ctx = audioCtxRef.current;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = step % 2 === 0 ? 'sine' : step % 3 === 0 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);

          gain.gain.setValueAtTime(0.09, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 0.2);

          step = (step + 1) % 16;
        }, 200);
      } catch (err) {
        console.warn('Audio playback not supported or prevented:', err);
      }
    } else {
      if (beatIntervalRef.current) {
        clearInterval(beatIntervalRef.current);
        beatIntervalRef.current = null;
      }
    }

    return () => {
      if (beatIntervalRef.current) {
        clearInterval(beatIntervalRef.current);
        beatIntervalRef.current = null;
      }
    };
  }, [isDancing, audioEnabled]);

  // Keyframes based on danceMove
  const getDanceAnimation = () => {
    if (!isDancing) return {};

    switch (danceMove) {
      case 'bounce':
        return {
          y: [0, -22, 0, -12, 0],
          scaleY: [1, 1.12, 0.92, 1.05, 1],
          scaleX: [1, 0.92, 1.08, 0.96, 1],
          transition: { duration: 0.55, repeat: Infinity, ease: 'easeInOut' },
        };
      case 'disco':
        return {
          rotate: [0, -12, 12, -8, 8, 0],
          scale: [1, 1.1, 0.94, 1.08, 1],
          x: [0, -8, 8, -5, 5, 0],
          transition: { duration: 0.45, repeat: Infinity, ease: 'linear' },
        };
      case 'shake':
        return {
          x: [-6, 6, -8, 8, -4, 4, 0],
          y: [-3, 3, -4, 4, 0],
          rotate: [-6, 6, -7, 7, 0],
          transition: { duration: 0.35, repeat: Infinity, ease: 'easeInOut' },
        };
      case 'moonwalk':
        return {
          x: [-30, 30, -30],
          rotate: [-3, 3, -3],
          y: [0, -4, 0],
          transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
        };
      case 'spin':
        return {
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
          transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
        };
      case 'breakdance':
        return {
          rotateX: [0, 25, -25, 0],
          rotateY: [0, 30, -30, 0],
          rotateZ: [0, -15, 15, 0],
          scale: [1, 1.08, 0.95, 1],
          transition: { duration: 0.75, repeat: Infinity, ease: 'easeInOut' },
        };
      case 'groovy':
      default:
        return {
          rotate: [0, -8, 8, -5, 5, 0],
          y: [0, -12, 0, -8, 0],
          scale: [1, 1.06, 0.97, 1.03, 1],
          transition: { duration: 0.65, repeat: Infinity, ease: 'easeInOut' },
        };
    }
  };

  const partyEmojis = ['🎵', '🎶', '✨', '🕺', '💃', '🎉', '⚡', '🌟', '🪩', '🔥', '💥', '🎧'];

  return (
    <div className={`relative group ${className}`}>
      {/* Background Stage Light Laser Glows when Dancing */}
      <AnimatePresence>
        {isDancing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -inset-6 z-0 pointer-events-none rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 blur-xl animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Floating particles during dance party */}
      <AnimatePresence>
        {isDancing && (
          <>
            {partyEmojis.map((emoji, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                  x: (index % 2 === 0 ? 1 : -1) * (12 + index * 10),
                  scale: 0.4,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: -140 - index * 12,
                  x: (index % 2 === 0 ? 1 : -1) * (20 + index * 14),
                  scale: [0.5, 1.25, 1],
                  rotate: [0, index % 2 === 0 ? 35 : -35, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.2 + (index % 3) * 0.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                className="absolute z-30 pointer-events-none text-xl select-none"
                style={{ top: '30%', left: '45%' }}
              >
                {emoji}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Animated Photo Container */}
      <motion.div
        animate={getDanceAnimation()}
        className={`relative z-10 rounded-3xl p-3 backdrop-blur-md shadow-2xl transition-all duration-300 overflow-hidden ${
          isDancing
            ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 border-4 border-amber-300 dark:border-amber-400 shadow-[0_0_35px_rgba(236,72,153,0.7)]'
            : 'bg-white/80 dark:bg-slate-900/80 border border-[#A7D8F0]/60 dark:border-slate-800'
        }`}
      >
        {/* Photo Image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-square">
          <img
            src={imgSrc}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isDancing ? 'scale-105 filter brightness-110 contrast-105 saturate-125' : 'group-hover:scale-105'
            }`}
          />

          {/* Overlaid Laser Beams when Dancing */}
          {isDancing && (
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(236,72,153,0.2) 0%, transparent 60%)',
                  'linear-gradient(135deg, rgba(56,189,248,0.2) 0%, transparent 60%)',
                  'linear-gradient(225deg, rgba(251,191,36,0.2) 0%, transparent 60%)',
                  'linear-gradient(315deg, rgba(168,85,247,0.2) 0%, transparent 60%)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            />
          )}

          {/* Overlaid Gradient & Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-extrabold text-sm sm:text-base flex items-center gap-1.5 drop-shadow-md">
                  {name}{' '}
                  {isDancing ? (
                    <span className="animate-bounce">🕺</span>
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-[#87CEEB]" />
                  )}
                </p>
                <p className="text-[11px] text-slate-200 font-medium">{title}</p>
              </div>

              {/* Mute/Sound Toggle when Dancing */}
              {isDancing && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAudioEnabled(!audioEnabled);
                  }}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-amber-300 border border-amber-300/50 backdrop-blur-xs transition-all cursor-pointer"
                  title={audioEnabled ? 'Mute Music' : 'Enable Music'}
                >
                  {audioEnabled ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>

            {/* Equalizer Wave Visualizer Bar when Dancing */}
            {isDancing && (
              <div className="mt-2.5 flex items-center justify-center gap-1 h-3.5">
                {[40, 90, 60, 100, 35, 85, 55, 95, 75, 45, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', `${h}%`, '20%'] }}
                    transition={{
                      duration: 0.25 + (i % 4) * 0.08,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-1 bg-amber-300 dark:bg-amber-400 rounded-full shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Make Photo Dance Button & Move Selector */}
      <div className="mt-3 relative z-20 flex flex-col items-center gap-2">
        <button
          onClick={() => setIsDancing(!isDancing)}
          className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
            isDancing
              ? 'bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white border-2 border-white/80 animate-pulse scale-102'
              : 'bg-[#0077B6] hover:bg-[#0096C7] dark:bg-[#38BDF8] dark:hover:bg-sky-400 text-white dark:text-slate-950 border border-[#38BDF8] shadow-sm hover:scale-102'
          }`}
        >
          {isDancing ? (
            <>
              <Disc className="w-4 h-4 animate-spin text-amber-200" />
              <span>Stop !</span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 animate-bounce" />
              <span>🕺 Move Photo!</span>
            </>
          )}
        </button>

        {/* Dance Moves Selector when Dancing */}
        <AnimatePresence>
          {isDancing && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -5 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -5 }}
              className="flex flex-wrap items-center justify-center gap-1.5 w-full pt-1"
            >
              {[
                { key: 'groovy', label: 'Groove 🕺' },
                { key: 'bounce', label: 'Bounce ⚡' },
                { key: 'disco', label: 'Disco 🪩' },
                { key: 'shake', label: 'Shake 💃' },
                { key: 'moonwalk', label: 'Glide 🛰️' },
                { key: 'spin', label: 'Spin 🌀' },
                { key: 'breakdance', label: 'Flip 💥' },
              ].map((m) => (
                <button
                  key={m.key}
                  onClick={() => setDanceMove(m.key as DanceMove)}
                  className={`px-2 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                    danceMove === m.key
                      ? 'bg-amber-400 text-slate-950 shadow-xs scale-105 ring-2 ring-amber-300'
                      : 'bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

