import NavBar from './components/navbar.tsx'
import Card from './components/card.tsx'
import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusinessIcon, EngineIcon, GlobeIcon, MonitorIcon, SchoolIcon } from 'lucide-react';

function App() {
        const cards: {
            title: string,
            content: string,
            icon: LucideIcon,
            link: string
        }[] = [ { 
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

  return (
    <>
      <div className="pb-[20%] md:pb-[10%]">  
        <NavBar></NavBar>
      </div>
        <div className="pl-[5%] pr-[5%] mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                content={card.content}
                icon={card.icon}
                link={card.link}
              />
            ))} 
        </div>
    </>
  )
}

export default App

