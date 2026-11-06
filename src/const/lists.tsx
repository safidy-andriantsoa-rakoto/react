import { 
  BriefcaseBusinessIcon,
  Cpu,
  Globe,
  MonitorIcon,
  SchoolIcon, 
  Terminal
} from "lucide-react";
import type { CardProps, ExperienceItem, Project, SkillCategory } from "../interface/interface";

export const cards: CardProps[] = [
  { 
    title: 'Développement web',
    content: 'Je crée es interfaces modernes et responsives avec HTML, CSS, JavaScript et React.',
    icon: BriefcaseBusinessIcon,
    link: '#competences',
  },
  {
    title: 'Mes projets',
    content: 'Découvrez mes projets personnels et les applications web que je développe.',
    icon: MonitorIcon,
    link: '#projets',
  }, 
  { 
    title: 'Ma formation',
    content: 'Je développe mes compétences techniques et j’apprends chaque jour de nouvelles technologies.',
    icon: SchoolIcon,
    link: '#formation',
  }, 
];
 
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SaaS Analytics Dashboard",
    description: "Real-time data visualization platform built with React, TypeScript, and Tailwind CSS. Integrated REST APIs and interactive data charts.",
    category: "Full-Stack",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "AI Workspace Assistant",
    description: "Productivity platform helping software teams summarize pull requests and automate developer documentation workflows.",
    category: "Full-Stack",
    tags: ["React", "TypeScript", "Tailwind CSS", "NestJS", "OpenAI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "High-Performance Cache Engine",
    description: "In-memory key-value storage engine implemented in C++ with multi-threading support and LRU eviction policy.",
    category: "Systems / C++",
    tags: ["C++20", "Multi-threading", "Data Structures", "Benchmarking"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "E-Commerce Design System",
    description: "Accessible, highly customizable UI component library crafted with Tailwind CSS and React for rapid frontend development.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "Storybook", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"]
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="w-5 h-5 text-blue-600" />,
    skills: ["Node.js / Express", "NestJS", "Fastify", "C/C++", "REST APIs", "PostgreSQL/MySQL/SQLite", "Prisma ORM"]
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    skills: ["Docker", "Git & GitHub", "Vite", "AWS: S3, EC2", "Linux / Bash", "Vercel"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Mai 2026 - Septembre 2026",
    role: "Stage en développeur Full-Stack",
    company: "Industrie du secteur textile",
    description: "Conception et évolution d’un ERP web full-stack sous React, TypeScript et NestJS, axé sur l’optimisation des processus métiers. Développement d'endpoints REST backend, modélisation des données (PostgreSQL/MySQL via TypeORM) et renforcement de la sécurité de l'authentification avec la mise en place d'un SSO (Single Sign-On) entre les applications. Optimisation globale des performances, refactorisation du code et résolution de bugs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "NestJS", "Laravel", "Docker", "AWS S3"]
  },
  {
    period: "2022 - 2026",
    role: "Tronc-commun",
    company: "42Antananarivo",
    description: "Ecole avec la pédagogie Pear-to-Peer Learning.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Fastify","REST APIs", "C/C++"]
  },
  {
    period: "2021 - 2023",
    role: "DTS: Science informatique",
    company: "CNTEMAD",
    description: "Université télé-enseignement de Madagascar.",
    technologies: []
  }
];

