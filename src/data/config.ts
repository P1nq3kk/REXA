import {
  Code2,
  FileJson,
  MonitorSmartphone,
  Server,
  Palette,
  Terminal,
  Database,
  Globe
} from 'lucide-react';

export const portfolioConfig = {
  personal: {
    name: 'Alex',
    fullName: 'Alex Developer',
    role: 'Web Developer',
    email: 'hello@alexdev.com',
    phone: '+1 (555) 123-4567',
    cvLink: '#',
    portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop', // Realistic waist-up developer placeholder
    logo: 'CodeCraft',
  },
  hero: {
    badge: "I'M A WEB DEVELOPER",
    headlinePart1: "Hi, I'm ",
    headlinePart2: "I build things for the web.",
    description: "I'm a passionate web developer specializing in building exceptional digital experiences with modern technologies.",
    techIcons: [
      { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ]
  },
  about: {
    badge: 'ABOUT ME',
    headline: "I'm passionate about\ncreating digital solutions",
    description: "With 4+ years of experience in web development, I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code.",
    stats: [
      { icon: 'calendar', value: '4+', label: 'Years Experience' },
      { icon: 'code', value: '50+', label: 'Projects Completed' },
      { icon: 'smile', value: '30+', label: 'Happy Clients' },
      { icon: 'trophy', value: '100%', label: 'Client Satisfaction' },
    ]
  },
  skills: {
    badge: 'MY SKILLS',
    headline: 'Technologies I Master',
    categories: [
      {
        skills: [
          { name: 'HTML', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'JavaScript', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'React.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Next.js', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
          { name: 'TypeScript', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'Node.js', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Tailwind CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
          { name: 'Git', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        ]
      }
    ]
  },
  projects: {
    badge: 'FEATURED PROJECTS',
    headline: 'Some of My Recent Work',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with modern UI/UX',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop', // Placeholder e-commerce
        link: '#',
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', // Placeholder app
        link: '#',
      },
      {
        title: 'Crypto Dashboard',
        description: 'Real-time cryptocurrency tracking dashboard',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop', // Placeholder dashboard
        link: '#',
      }
    ]
  },
  contact: {
    badge: "LET'S WORK TOGETHER",
    headline: 'Have a project in mind?',
    description: "I'm always open to discussing new projects and opportunities. Let's create something amazing together!",
    testimonial: {
      quote: "Alex is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding.",
      author: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', // female avatar
    },
    socials: [
      { name: 'GitHub', icon: 'github', link: '#' },
      { name: 'LinkedIn', icon: 'linkedin', link: '#' },
      { name: 'Twitter/X', icon: 'twitter', link: '#' },
      { name: 'Instagram', icon: 'instagram', link: '#' },
    ]
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]
};
