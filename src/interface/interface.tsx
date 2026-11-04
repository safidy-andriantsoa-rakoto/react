import { LucideIcon } from "lucide-react";
import React from "react";

export interface CardProps {
  title: string;
  content: string;
  icon: LucideIcon;
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Systems / C++';
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

