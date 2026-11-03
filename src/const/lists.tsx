import { 
  BriefcaseBusinessIcon,
  MonitorIcon,
  SchoolIcon 
} from "lucide-react";
import type { CardProps } from "../interface/interface";

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
