import { Skill } from '../types';

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    level: 95,
    years: 3,
    iconName: 'Atom',
    description: 'Component architecture, Hooks, Context API, Performance Tuning, Concurrent React.',
    popular: true
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 92,
    years: 3,
    iconName: 'FileCode2',
    description: 'Strict type safety, Generics, Utility Types, AST, Interface contracts.',
    popular: true
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 96,
    years: 3,
    iconName: 'Code',
    description: 'Promises, Async/Await, Closures, DOM manipulation, Event Loop.',
    popular: true
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 95,
    years: 3,
    iconName: 'Palette',
    description: 'Utility-first styling, Responsive design, Custom design systems & CSS variables.',
    popular: true
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 88,
    years: 2,
    iconName: 'Globe',
    description: 'App Router, SSR, SSG, Server Actions, Middleware, Edge Runtime.',
    popular: true
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    level: 98,
    years: 3,
    iconName: 'Layout',
    description: 'Semantic markup, Flexbox, CSS Grid, Keyframe animations, Web accessibility (WCAG).',
    popular: false
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    level: 90,
    years: 3,
    iconName: 'Boxes',
    description: 'Responsive Grid, Custom SCSS compilation, Theme customization, Utilities.',
    popular: false
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 92,
    years: 3,
    iconName: 'Server',
    description: 'Asynchronous event driven server, Streams, Worker threads, Microservices.',
    popular: true
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 94,
    years: 3,
    iconName: 'Cpu',
    description: 'REST API routing, Middleware pipeline, Error handling, Security headers (Helmet).',
    popular: true
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 96,
    years: 3,
    iconName: 'Network',
    description: 'API design standards, Swagger/OpenAPI, Rate limiting, CORS, Authentication.',
    popular: true
  },
  {
    name: 'Laravel',
    category: 'Backend',
    level: 96,
    years: 3,
    iconName: 'Building',
    description: 'PHP FRamework, MVC architecture, Eloquent ORM, Blade templating, RESTful APIs.',
    popular: true
  },
  {
    name: 'PHP & Advanced PHP',
    category: 'Backend',
    level: 96,
    years: 3,
    iconName: 'Elephant',
    description: 'server side programing language',
    popular: true
  },

  // Database & Cloud
  {
    name: 'MongoDB',
    category: 'Database & Cloud',
    level: 90,
    years: 1,
    iconName: 'Database',
    description: 'Document modeling, Aggregation pipeline, Mongoose ODM, Atlas indexing.',
    popular: true
  },
  {
    name: 'MySQL',
    category: 'Database & Cloud',
    level: 86,
    years: 1,
    iconName: 'Database',
    description: 'Relational schema design, Indexing, Joins, Drizzle/Prisma ORMs, Transactions.',
    popular: true
  },
  

  // Tools & DevOps
  {
    name: 'Git & GitHub',
    category: 'Tools & DevOps',
    level: 95,
    years: 3,
    iconName: 'GitBranch',
    description: 'Branch management, Pull Requests, Code Reviews, Rebase, GitHub Actions CI/CD.',
    popular: true
  },
  {
    name: 'Adobe Photoshop & Illustrator',
    category: 'Tools & DevOps',
    level: 82,
    years: 2,
    iconName: 'palette',
    description: 'Photo Editing ,Graphic design , visual assests',
    popular: false
  },
  {
    name: 'Microsoft office',
    category: 'Tools & DevOps',
    level: 82,
    years: 5,
    iconName: 'FileText',
    description: 'Documentation,Data analysis,presentation.',
    popular: false
  },
  {
    name: 'Python Tkinter',
    category: 'Tools & DevOps',
    level: 82,
    years: 5,
    iconName: 'Layout',
    description: 'Python GUI development ,desktop applicatuions',
    popular: false
  }

];
