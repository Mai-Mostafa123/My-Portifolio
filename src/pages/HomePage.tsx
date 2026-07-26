//@ts-nocheck
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { AboutSection } from '../components/home/AboutSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { FeaturedCertifications } from '../components/home/FeaturedCertifications';
import { ContactSection } from '../components/home/ContactSection';
import { Project, Certification } from '../types';

interface HomePageProps {
  onOpenResume: () => void;
  onOpenLiveDemo: (project: Project) => void;
  onOpenCertModal: (cert: Certification) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenResume,
  onOpenLiveDemo,
  onOpenCertModal
}) => {
  return (
    <div className="min-h-screen">
      <HeroSection onOpenResume={onOpenResume} />
      <FeaturedProjects onOpenLiveDemo={onOpenLiveDemo} />
      <AboutSection />
      <TechStackSection />
      <ExperienceTimeline />
      <FeaturedCertifications onOpenCertModal={onOpenCertModal} />
      <ContactSection />
    </div>
  );
};
