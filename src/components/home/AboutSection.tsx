//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Cloud, Zap, ArrowRight, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      title: t('about.strength1Title', 'Full Stack Architecture'),
      description: t('about.strength1Desc', 'Building end-to-end web architectures using React, Next.js, Node.js, Express, and microservice workflows.'),
      icon: Code2,
      color: 'text-[#0077B6] dark:text-[#38BDF8]'
    },
    {
      title: t('about.strength2Title', 'Cloud Infrastructure & DevOps'),
      description: t('about.strength2Desc', 'Designing resilient, auto-scaling deployment pipelines on AWS and GCP with Docker and serverless functions.'),
      icon: Cloud,
      color: 'text-[#0096C7] dark:text-[#38BDF8]'
    },
    {
      title: t('about.strength3Title', 'High Performance & Speed'),
      description: t('about.strength3Desc', 'Optimizing web vitals, bundle splitting, database indexing, and Redis caching for sub-second page loads.'),
      icon: Zap,
      color: 'text-amber-500 dark:text-amber-400'
    },
    {
      title: t('about.strength4Title', 'Clean Code & Accessibility'),
      description: t('about.strength4Desc', 'Writing maintainable TypeScript, strict component design patterns, and WCAG AA accessible UI interfaces.'),
      icon: ShieldCheck,
      color: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F5FBFF]/40 dark:bg-[#0B0F17]/60 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider shadow-2xs">
            <UserCheck className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('about.title', 'About Me')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
            {t('about.title', 'Passionate Engineering & Product Mindset')}
          </h2>
          <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
            {t('about.subtitle', 'Bridging technical precision with human-centered design to build software that users love and engineering teams enjoy maintaining.')}
          </p>
        </div>

        {/* Bio & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-sm space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#172033] dark:text-white flex items-center gap-2">
              My Developer Journey <Sparkles className="w-5 h-5 text-[#87CEEB]" />
            </h3>
            <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
              {t('about.bio', profileData.bio)}
            </p>
            <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
             My software engineering journey began 3 years ago when I joined WE—a pivotal milestone that truly shaped my career. Over the past three years, I haven't just learned to code; I've mastered the art of building complete, user-centric digital applications from the ground up.
I built a solid foundation across the full stack, mastering dynamic frontend tools like React, JavaScript, Tailwind CSS, and Bootstrap, alongside robust backend frameworks and databases including Node.js, PHP, Laravel, and MySQL.
Beyond technical execution, this journey transformed me into a confident technical leader. I’ve cultivated essential leadership skills, strategic problem-solving, and a product-focused mindset—empowering me to take full ownership of projects, guide technical decisions, and deliver scalable, high-value solutions."
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-5 py-2.5 rounded-full bg-[#0077B6] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors inline-flex items-center gap-2 shadow-2xs"
              >
                <span>{t('about.readMore', 'Read Full Biography & Values')}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </motion.div>

          {/* Right Metrics Stat Box Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0077B6] dark:text-[#38BDF8] block">3+</span>
              <span className="text-xs font-semibold text-[#172033] dark:text-white block">Years Experience</span>
              <span className="text-[10px] text-[#64748B] dark:text-slate-400">Full Stack Development</span>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0096C7] dark:text-[#38BDF8] block">28+</span>
              <span className="text-xs font-semibold text-[#172033] dark:text-white block">Completed Projects</span>
              <span className="text-[10px] text-[#64748B] dark:text-slate-400">SaaS & Enterprise</span>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block">100%</span>
              <span className="text-xs font-semibold text-[#172033] dark:text-white block">Client Satisfaction</span>
              <span className="text-[10px] text-[#64748B] dark:text-slate-400">Code Quality First</span>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-500 dark:text-amber-400 block">8</span>
              <span className="text-xs font-semibold text-[#172033] dark:text-white block">courses Certifications</span>
              <span className="text-[10px] text-[#64748B] dark:text-slate-400">Python, JS, React, TailwindCss</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Strengths Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-[#87CEEB] dark:hover:border-[#38BDF8] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5FBFF] dark:bg-slate-800 border border-[#A7D8F0]/40 dark:border-slate-700 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h4 className="text-base font-bold text-[#172033] dark:text-white">{item.title}</h4>
                <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

