import { 
  BriefcaseBusinessIcon,
  Cpu,
  Globe,
  MonitorIcon,
  SchoolIcon, 
  Terminal
} from "lucide-react";
import type { CardProps, ExperienceItem, Project, SkillCategory } from "../interface/interface";

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

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
        title: "ft_transcendence",
        description: "Plateforme de réseau social et de tchat en temps réel développée en équipe, avec messagerie instantanée, système d'amis et gestion d'utilisateurs.",
        category: "Full-Stack",
        tags: ["React", "TypeScript", "Fastify", "Socket.io", "Prisma", "PostgreSQL", "Docker"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/safidy-andriantsoa-rakoto/ft_transcendence",
        liveUrl: "",
        featured: true
  },
  {
        id: 2,
        title: "Webserver C++ (webserv)",
        description: "Serveur HTTP/1.1 monolithique et non-bloquant développé en binôme en C++98 avec gestion des I/O via Epoll et support des méthodes GET, POST, DELETE.",
        category: "Systems",
        tags: ["C++", "Epoll", "Network Programming", "HTTP/1.1", "Sockets"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/safidy-andriantsoa-rakoto/WEBSERVER",
        liveUrl: "",
        featured: true
  },
  {
    id: 3,
    title: "Projets POO C++",
    description: "Série de modules pratiques explorant les concepts avancés de la programmation orientée objet en C++ (encapsulation, héritage, polymorphisme, templates STL).",
    category: "POO / C++",
    tags: ["C++", "OOP", "STL", "Memory Management", "Algorithms"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "",
    liveUrl: "",
    featured: false
  },
  {
    id: 4,
    title: "Minishell",
    description: "Interpréteur de commandes (shell) développé en binôme en C, reproduisant le comportement de Bash avec gestion des processus, signaux, pipes et redirections.",
    category: "Systems",
    tags: ["C", "Unix", "Processes", "Signals", "Pipes", "Syscalls"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    githubUrl: "",
    liveUrl: "",
    featured: false
  },
  {
    id: 5,
    title: "Cub3D",
    description: "Moteur graphique 3D en Raycasting développé en binôme en C avec la bibliothèque MiniLibX, inspiré du célèbre jeu Wolfenstein 3D.",
    category: "Graphics / C",
    tags: ["C", "MiniLibX", "Raycasting", "Mathematics", "Geometry", "Computer Graphics"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "",
    liveUrl: "",
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
    description: "Une école avec la pédagogie Peer-to-Peer Learning : sans professeurs ni cours théoriques, on apprend en réalisant des projets concrets et en s'aidant entre élèves.",
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

