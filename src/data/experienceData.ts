import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'freelance-frontend-dev-mostaql',
    role: 'Freelance Frontend Developer',
    company: 'Mostaql Platform',
    period: '05/2024 - Present',
    type: 'Freelance',
    location: 'Remote',
    description: 'Delivering customized, high-quality frontend solutions to clients on the Mostaql platform, ensuring clean code and cross-browser compatibility.',
    achievements: [
      'Developed high-quality, responsive web interfaces and modern layouts.',
      'Utilized modern web technologies including React, JavaScript, Tailwind CSS, and Bootstrap.',
      'Ensured full cross-browser compatibility and optimized performance across devices.'
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3', 'Responsive Web Design']
  },
  {
    id: 'web development and software engineering',
    role: 'Diploma in web development and software engineering',
    company: 'WE school For ATS ', // 👈 Change to your university/college name
    period: '2023 - 2026',        // 👈 Change to your graduation years
    type: 'Education',
    location: 'Egypt',
    description: 'Specialized in Software Engineering, Web Development, and Database Systems.',
    achievements: [
      'Studied core Computer Science fundamentals including Data Structures, Algorithms, and OOP.',
      'Built multiple full-stack and web development practical projects as part of the curriculum.'
    ],
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Management', 'OOP','frontend and backend development, web development frameworks']
  }
];