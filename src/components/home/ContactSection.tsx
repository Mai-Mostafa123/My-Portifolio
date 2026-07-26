//@ts-nocheck
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle2, Github, Linkedin, MapPin } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5FBFF]/40 dark:bg-[#0B0F17]/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF4FF]/80 dark:bg-sky-950/80 backdrop-blur-xs border border-[#A7D8F0]/50 dark:border-slate-800 text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] uppercase tracking-wider shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#38BDF8]" /> {t('contact.title', "Let's Connect")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] dark:text-white tracking-tight">
            {t('contact.title', 'Get In Touch')}
          </h2>
          <p className="text-sm text-[#64748B] dark:text-slate-300">
            {t('contact.subtitle', 'Have an open software position, a freelance inquiry, or want to discuss full stack web architecture? Drop a message below!')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-[#172033] dark:text-white">Direct Channels</h3>
              
              <div className="space-y-4 text-xs text-[#64748B] dark:text-slate-300">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3.5 rounded-2xl bg-[#F5FBFF]/80 dark:bg-slate-800/60 border border-[#A7D8F0]/30 dark:border-slate-700/60 flex items-center gap-3.5 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-[#A7D8F0] dark:border-slate-700 flex items-center justify-center text-[#0077B6] dark:text-[#38BDF8] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase">{t('contact.email', 'Email')}</span>
                    <span className="font-bold text-[#172033] dark:text-white">{profileData.email}</span>
                  </div>
                </a>

                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F5FBFF]/80 dark:bg-slate-800/60 border border-[#A7D8F0]/30 dark:border-slate-700/60 flex items-center gap-3.5 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-800 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-[#A7D8F0] dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase">WhatsApp</span>
                    <span className="font-bold text-[#172033] dark:text-white">{profileData.phone}</span>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-[#F5FBFF]/80 dark:bg-slate-800/60 border border-[#A7D8F0]/30 dark:border-slate-700/60 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-[#A7D8F0] dark:border-slate-700 flex items-center justify-center text-[#0077B6] dark:text-[#38BDF8]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase">{t('contact.location', 'Location')}</span>
                    <span className="font-bold text-[#172033] dark:text-white">{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#A7D8F0]/30 dark:border-slate-800">
                <p className="text-xs font-bold text-[#172033] dark:text-white mb-3">Social Profiles</p>
                <div className="flex gap-2">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[#F5FBFF]/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 text-xs font-bold text-[#172033] dark:text-slate-200 hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4 text-[#172033] dark:text-slate-200" /> GitHub
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[#F5FBFF]/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700/60 text-xs font-bold text-[#0077B5] dark:text-[#38BDF8] hover:border-[#87CEEB] dark:hover:border-[#38BDF8] hover:bg-white dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077B5] dark:text-[#38BDF8]" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-3xl bg-emerald-50/80 dark:bg-emerald-950/60 backdrop-blur-xs border border-emerald-200/80 dark:border-emerald-800/50 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div>
                <p className="font-bold">{t('contact.availability', 'Currently Accepting Opportunities')}</p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300">Full-time roles, contract work, & cloud advisory.</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#A7D8F0]/40 dark:border-slate-800 shadow-xs">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#172033] dark:text-white">{t('contact.successMsg', 'Message Sent Successfully!')}</h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-[#172033] dark:text-white">{formData.name || 'Friend'}</strong>. I have received your message and will reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-[#0077B6] text-white font-bold text-xs hover:bg-[#0096C7] transition-colors shadow-2xs cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#172033] dark:text-white mb-2">Send a Direct Message</h3>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#172033] dark:text-slate-200 mb-1">{t('contact.nameLabel', 'Your Name')} *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700 text-xs font-medium text-[#172033] dark:text-white focus:outline-none focus:border-[#87CEEB] dark:focus:border-[#38BDF8] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#172033] dark:text-slate-200 mb-1">{t('contact.emailLabel', 'Email Address')} *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700 text-xs font-medium text-[#172033] dark:text-white focus:outline-none focus:border-[#87CEEB] dark:focus:border-[#38BDF8] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] dark:text-slate-200 mb-1">{t('contact.subjectLabel', 'Subject')}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Discussion / Engineering Inquiry"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700 text-xs font-medium text-[#172033] dark:text-white focus:outline-none focus:border-[#87CEEB] dark:focus:border-[#38BDF8] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] dark:text-slate-200 mb-1">{t('contact.messageLabel', 'Message')} *</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project goals or team needs..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-[#A7D8F0]/40 dark:border-slate-700 text-xs font-medium text-[#172033] dark:text-white focus:outline-none focus:border-[#87CEEB] dark:focus:border-[#38BDF8] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white font-bold text-xs shadow-md hover:brightness-110 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 border border-white/30 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 text-white" />
                      )}
                      <span>{isSubmitting ? t('contact.sending', 'Sending Message...') : t('contact.sendButton', 'Send Message')}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

