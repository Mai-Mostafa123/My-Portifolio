//@ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Mail, Phone, MessageSquare, MapPin, Calendar, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '../components/home/ContactSection';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What type of software roles or contracts are you open to?',
      a: 'I am open to Senior Full Stack Software Engineer roles, Lead Frontend Engineer positions, and high-impact web development consulting contracts.'
    },
    {
      q: 'What is your preferred technology stack?',
      a: 'My primary stack is React, TypeScript, Node.js, Express, Next.js, Tailwind CSS, PostgreSQL/MongoDB, and AWS/Google Cloud services.'
    },
    {
      q: 'Are you available for remote work across timezones?',
      a: 'Yes! I am based in San Francisco, CA (PST) and have extensive experience working with distributed engineering teams across North America and Europe.'
    },
    {
      q: 'How quickly can you start on a new project?',
      a: 'Depending on current sprint commitments, I can typically onboard within 1-2 weeks.'
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
          <span className="text-xs font-semibold text-[#64748B]">Contact & Availability</span>
        </div>

        {/* Form Section Reuse */}
        <ContactSection />

        {/* FAQ Accordion */}
        <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#A7D8F0]/40 shadow-xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#172033] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0077B6]" /> Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#64748B]">Quick answers regarding availability, tech stack, and engagement models.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-[#A7D8F0]/30 overflow-hidden bg-[#F5FBFF]/80 backdrop-blur-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left font-bold text-xs text-[#172033] flex items-center justify-between hover:bg-white/80 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#0077B6] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-4 text-xs text-[#64748B] leading-relaxed border-t border-[#A7D8F0]/30 bg-white/60"
                    >
                      <p className="pt-2">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
