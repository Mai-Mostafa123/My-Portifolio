import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'Vitual guard',
    title: 'Heart Rate Monitor & Virtual Guard',
    shortDescription: 'Real-time heart Rate Monitoring to check pulse and alert the user if it goes above or below a certain threshold.',
    fullDescription: 'Heart Rate Monitor The Heart Rate Monitor is a smart healthcare project designed to measure and monitor a person heart rate in real time. The system uses a heart rate sensor detect pulse signals and display the users heart rate ',
    category: 'health',
    technologies: ['C++,python'],
     image: '../../public/vital 1.png',
    screenshots: [
      '../../public/vital 1.png',
      '../../public/vital 1.png',
      '../../public/vital 1.png'
    ],
    githubUrl: 'https://github.com/example/nexus-cloud',
    liveUrl: 'https://nexus-cloud-demo.example.com',
    featured: true,
    features: [
    'Real-time heart rate measurement',
    'OLED display for live BPM',
    'Data logging and history tracking',
    'Web/Mobile dashboard integration',
    'Alerts for abnormal heart rate'
  ],
  problem: 'Current heart rate monitoring devices can be expensive and not easily accessible.',
  solution: 'By using a pulse sensor and microcontroller, we developed a compact device that measures heart rate in real time and provides instant feedback through a display and a connected dashboard.',
  role: 'Full Stack & Embedded Systems Developer',
  challenges: [
    'Filtering noisy signals from the sensor',
    'Getting accurate BPM calculation',
    'Real-time data handling and display',
    'Connecting hardware data to a web dashboard'
  ],
  results: [
    'Accurate real-time heart rate monitoring',
    'User-friendly interface and dashboard',
    'Portable and affordable solution',
    'Helpful for fitness tracking and health awareness'
  ],
  metrics: [
    { label: 'Accuracy', value: '95%' },
    { label: 'Response Time', value: '< 1s' },
    { label: 'System Uptime', value: '99.9%' }
  ],
  techUsage: {
    
    'Arduino & C++': 'Handles pulse sensor signal processing and OLED display driving'
  },
  },
  {
  id: 'cola-site',
  title: 'Bigcola Website',
  shortDescription: 'Bigcola website for marketing products',
  fullDescription: 'A modern marketing landing page built to showcase Bigcola products and make online shopping easier and more interactive.',
  category: 'Frontend',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: '../../public/cola.png',
  screenshots: [
    '../../public/cola.png',
    '../../public/cola2.png',
    '../../public/cola3.png'
  ],
  githubUrl: 'https://github.com/Mai-Mostafa123/Big-cola.git',
  liveUrl: 'https://mai-mostafa123.github.io/Big-cola/',
  featured: true,
  features: [
    'Responsive design fully optimized for mobile, tablet, and desktop viewports',
    'Interactive product showcase highlighting various beverage flavors and sizes',
    'Smooth animations and modern layout for an engaging brand experience',
    'User-friendly navigation and clear call-to-action buttons'
  ],
  problem: 'The brand needed an engaging, modern online presence to showcase products effectively and drive customer engagement.',
  solution: 'Designed and built a fast, visually appealing frontend landing page with structured layouts and smooth CSS styling.',
  role: 'Frontend Developer',
  challenges: [
    'Ensuring smooth CSS transitions without compromising performance',
    'Creating a fully responsive grid system across all mobile devices'
  ],
  results: [
    'Delivered a clean, high-performance landing page for product marketing',
    'Enhanced user experience with intuitive browsing and crisp visual assets'
  ],
  metrics: [
    { label: 'Mobile Score', value: '100%' },
    { label: 'Load Speed', value: '< 1.0s' }
  ],
  techUsage: {
    'HTML5': 'Provides structured semantic components for accessibility and clear SEO layout.',
    'CSS3': 'Used for custom layouts, responsive flex/grid, smooth hover effects, and modern UI styling.'
  }
},
  {
  id: 'FoodLover website',
  title: 'FoodLover Website',
  shortDescription: 'Interactive online restaurant platform for menu browsing and table reservations',
  fullDescription: 'A fully responsive restaurant website designed to offer seamless menu exploration, featured dishes showcase, and effortless food ordering or reservation experience.',
  category: 'Frontend',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: '../../public/res1.png',
  screenshots: [
    '../../public/res2.png',
    '../../public/res3.png',
    '../../public/res4.png'
  ],
  githubUrl: 'https://github.com/Mai-Mostafa123/Resturant.git',
  liveUrl: 'https://mai-mostafa123.github.io/Resturant',
  featured: true,
  features: [
    'Interactive digital menu with category filtering (Appetizers, Mains, Desserts, Drinks)',
    'Responsive online reservation form with real-time input validation',
    'Customer testimonials section and interactive special offers showcase',
    'Embedded location map and opening hours display for easy navigation'
  ],
  problem: 'Traditional paper menus and static sites lacked visual appeal and hindered quick online reservations and orders.',
  solution: 'Built an intuitive, visually rich frontend interface that displays high-quality dish imagery and simplifies customer bookings.',
  role: 'Frontend Developer',
  challenges: [
    'Optimizing high-resolution food images for fast page load speed across devices',
    'Building smooth responsive navigation and filter UI for dynamic menu categories'
  ],
  results: [
    'Created an engaging digital menu that enhances visual appeal and customer interaction',
    'Improved site loading performance and user experience across mobile and desktop screens'
  ],
  metrics: [
    { label: 'Mobile Performance', value: '98%' },
    { label: 'Avg Page Load', value: '< 1.2s' }
  ],
  techUsage: {
    'HTML5': 'Structured semantic content ensuring full accessibility for menu and booking sections.',
    'CSS3': 'Delivers custom layouts, responsive flexbox/grid systems, smooth animations, and visual styling.',
    'JavaScript': 'Powers interactive menu filtering, smooth scrolling, and form validation logic.'
  }
},
{
  id: 'Appexy Project',
  title: 'Appexy Website',
  shortDescription: 'Modern responsive landing page built with HTML, CSS, Bootstrap, and JavaScript',
  fullDescription: 'Appexy is a sleek, fully responsive landing page designed to showcase software products and mobile applications with clean modern UI layouts and smooth user interactions.',
  category: 'Frontend',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  image: '../../public/app1.png',
  screenshots: [
    '../../public/app2.png',
    '../../public/app3.png',
    '../../public/app4.png',
    '../../public/app5.png'
  ],
  githubUrl: 'https://github.com/Mai-Mostafa123/Appexy.git',
  liveUrl: 'https://mai-mostafa123.github.io/Appexy/',
  featured: true,
  features: [
    'Fully responsive layout built using Bootstrap grid system',
    'Clean hero section with call-to-action buttons and feature showcase',
    'Interactive UI elements powered by JavaScript for seamless user experience',
    'Cross-browser compatible with clean CSS styling and animations'
  ],
  problem: 'Businesses needed a lightweight, high-converting landing page to showcase modern mobile apps and software products effectively.',
  solution: 'Designed and developed a responsive frontend website leveraging Bootstrap for rapid grid alignment and interactive JS UI widgets.',
  role: 'Frontend Developer',
  challenges: [
    'Customizing Bootstrap styles to match a unique modern design system',
    'Ensuring crisp, responsive typography and elements across all mobile device viewports'
  ],
  results: [
    'Delivered a fast-loading landing page with 100% responsive layout coverage',
    'Created intuitive product navigation and clean interactive component sections'
  ],
  metrics: [
    { label: 'Responsive Score', value: '100%' },
    { label: 'Page Load Speed', value: '< 1.0s' }
  ],
  techUsage: {
    'HTML5': 'Provides structured, accessible, and semantic content layout.',
    'CSS3': 'Delivers custom animations, smooth transitions, and visual theme styling.',
    'Bootstrap': 'Accelerates layout development with fully responsive grid systems and components.',
    'JavaScript': 'Powers dynamic user interactions, mobile navigation toggle, and UI behaviors.'
  }
},
  
  {
  id: 'Pixzile',
  title: 'Pixelize Website',
  shortDescription: 'Modern, fully responsive frontend agency & portfolio landing page',
  fullDescription: 'Pixelize is a sleek and modern web application template designed to showcase agency services, creative portfolios, and digital products with dynamic UI components and smooth user interactions.',
  category: 'Frontend',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: '../../public/pix1.png',
  screenshots: [
    '../../public/pix1.png',
    '../../public/pix2.png',
    '../../public/pix3.png',
  ],
  githubUrl: 'https://github.com/Mai-Mostafa123/pix-.git',
  liveUrl: 'https://themewagon.github.io/Pixelize/',
  featured: false,
  features: [
    'Fully responsive layout optimized across all screen sizes and mobile viewports',
    'Interactive navigation menu with smooth scrolling to page sections',
    'Modern service cards and portfolio showcase section',
    'Contact form section with client-side input validation'
  ],
  problem: 'Businesses needed a clean, modern, and engaging web presence to display creative services effectively.',
  solution: 'Developed a high-performance, lightweight landing page with flexible layouts and clean code structure.',
  role: 'Frontend Developer & UI Designer',
  challenges: [
    'Creating custom responsive grid layouts without relying on heavy external CSS frameworks',
    'Ensuring cross-browser layout consistency and pixel-perfect element alignments'
  ],
  results: [
    'Delivered a clean, fast-loading portfolio template with intuitive user experience',
    'Achieved top accessibility and performance scores on mobile and desktop devices'
  ],
  metrics: [
    { label: 'Responsive Score', value: '100%' },
    { label: 'Page Speed Score', value: '98%' },
    { label: 'Load Time', value: '< 0.8s' }
  ],
  techUsage: {
    'HTML5': 'Structured semantic layouts ensuring strong SEO foundations and web accessibility.',
    'CSS3': 'Delivers modern visual styling, custom animations, and responsive flexbox/grid layouts.',
    'JavaScript': 'Powers dynamic interface interactions, responsive navigation menus, and form handling.'
  }
},
  {
  id: 'Feane',
  title: 'Feane Burger & Restaurant',
  shortDescription: 'Modern, fully responsive fast food and burger restaurant landing page',
  fullDescription: 'Feane is an interactive fast food ordering platform designed to showcase delicious burger menus, special offers, and provide an intuitive food ordering experience with dynamic menu filtering.',
  category: 'Frontend',
  technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
  image: '../../public/fean1.png',
  screenshots: [
    '../../public/fean2.png',
    '../../public/fean3.png',
    '../../public/fean4.png'
  ],
  githubUrl: 'https://github.com/Mai-Mostafa123/feane.git',
  liveUrl: 'https://mai-mostafa123.github.io/feane/',
  featured: false,
  features: [
    'Interactive menu section with instant category filtering (Burger, Pizza, Pasta, Fries)',
    'Dynamic online food order form and table reservation modal',
    'Eye-catching promotional banners for daily deals and discounts',
    'Customer review carousel and embedded interactive location map'
  ],
  problem: 'Fast food spots need a visually compelling, mobile-friendly platform to display menu items clearly and drive online orders.',
  solution: 'Engineered a highly responsive, clean frontend interface using SCSS and JavaScript to make food menu navigation fast and visual.',
  role: 'Frontend Developer',
  challenges: [
    'Creating smooth filtering transitions for dynamic menu items across different categories',
    'Structuring modular SCSS styles for clean, scalable, and maintainable styling'
  ],
  results: [
    'Delivered an appetizing digital menu experience with high visual engagement',
    'Achieved fast performance and perfect responsiveness on mobile and desktop viewports'
  ],
  metrics: [
    { label: 'Mobile Performance', value: '100%' },
    { label: 'Page Speed', value: '< 1.0s' }
  ],
  techUsage: {
    'HTML5': 'Structured semantic layouts ensuring accessible menu sections and reservation forms.',
    'CSS/SCSS': 'Provides custom styling, nested modular components, vibrant theme colors, and responsive layouts.',
    'JavaScript': 'Powers dynamic category menu filtering, smooth UI navigation, and interactive modal dialogs.'
  }
}
];
