//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Code2, ShieldCheck, Cpu, Terminal, FileText, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { profileData } from '../data/profileData';
import { DancingProfilePhoto } from '../components/common/DancingProfilePhoto';

interface AboutPageProps {
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume }) => {
  const principles = [
    {
      title: 'Human-Centered Design',
      desc: 'Software must feel intuitive and natural. I prioritize accessibility, clean typography, and responsive touch targets.'
    },
    {
      title: 'Type Safety & Test Discipline',
      desc: 'Strict TypeScript interfaces and modular components reduce runtime defects and make codebase maintenance effortless.'
    },
    {
      title: 'Performance & Low Latency',
      desc: 'Sub-second page renders, streaming WebSockets, indexed database queries, and aggressive CDN caching.'
    },
    {
      title: 'Scalable system  Architecture',
      desc: 'Containerized microservices using Docker, serverless functions, and event pub/sub queues on AWS & GCP.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-transparent min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation */}
        <div className="border-b border-[#A7D8F0]/30 pb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0077B6] hover:text-[#172033] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-full bg-[#87CEEB] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-white" /> Download Full Resume
          </button>
        </div>

        {/* Bio Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#DFF4FF] text-[#0077B6] font-bold text-xs uppercase tracking-wider">
              Engineering Biography
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172033] tracking-tight">
              About Mai Mostafa
            </h1>
            <p className="text-base text-[#64748B] leading-relaxed">
              {profileData.bio}
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              My engineering approach combines deep technical craftsmanship with product empathy. Over my 3+ years in full stack engineering, I have scaled SaaS platforms to tens of thousands of active users and mentored development teams on modern React & Node.js patterns.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <DancingProfilePhoto
                name={profileData.name}
                title={profileData.title}
              />
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#172033]">Core Engineering Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#F5FBFF]/80 border border-[#A7D8F0]/30 flex items-center justify-center text-[#0077B6]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#172033]">{p.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Code Architecture Philosophy Box */}
        <div className="bg-[#172033]/90 backdrop-blur-xl text-white p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <span className="flex items-center gap-2 text-sky-400 font-bold">
              <Terminal className="w-4 h-4" /> mai-mostafa-philosophy.ts
            </span>
            <span className="text-[10px] text-slate-400">TypeScript 5.8 • Strict Mode</span>
          </div>
          <pre className="text-sky-300 leading-relaxed overflow-x-auto">
{`interface DeveloperMission {
  cleanCode: boolean;
  userExperience: 'Delightful' | 'Accessible' | 'High Performance';
  cloudScalability: '99.99% Uptime';
  deliverValue: () => Promise<void>;
}

export const alexChen: DeveloperMission = {
  cleanCode: true,
  userExperience: 'Delightful',
  cloudScalability: '99.99% Uptime',
  async deliverValue() {
    await buildFullStackApp({
      frontend: 'React + TypeScript + Tailwind',
      backend: 'Node.js + Express + Redis',
      cloud: 'AWS / Cloud Run + Docker'
    });
  }
};`}
          </pre>
        </div>

      </div>
    </div>
  );
};
