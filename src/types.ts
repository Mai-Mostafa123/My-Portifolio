export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full Stack' | 'Frontend' | 'React' | 'Node.js'  | 'health';
  technologies: string[];
  image: string;
  screenshots: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  results: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  techUsage?: Record<string, string>;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  certificateId: string;
  image: string;
  certificateUrl: string;
  downloadUrl?: string;
  category: 'Cloud & Infrastructure' | 'Frontend Engineering' | 'Backend & Databases' | 'Full Stack';
  skills: string[];
  featured?: boolean;
  hours?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Education';
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  logoBg?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Tools & DevOps';
  level: number; // percentage 0-100
  years: number;
  iconName: string;
  description: string;
  popular?: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  twitter: string;
  yearsExperience: number;
  completedProjects: number;
  happyClients: number;
  certificationsCount: number;
  status: string;
}
