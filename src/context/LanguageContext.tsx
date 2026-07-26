import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../i18n/translations.json';

export type Language = 'en' | 'es';

type Translations = typeof translationsData;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return saved === 'es' ? 'es' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Helper to retrieve nested keys like "nav.home" or "contact.title"
  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    const dict = (translationsData as any)[language] || (translationsData as any)['en'];
    
    let current = dict;
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Fallback to English if missing in current language
        let fallback = (translationsData as any)['en'];
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return defaultValue || key;
          }
        }
        return typeof fallback === 'string' ? fallback : defaultValue || key;
      }
    }

    return typeof current === 'string' ? current : defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
