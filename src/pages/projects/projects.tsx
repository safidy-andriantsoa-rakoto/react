import { useState } from 'react';
import { Link2, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../const/lists';
import Footer from '../../components/footer';

export default function Projects() {
  const [projectCategory, setProjectCategory] = useState<string>('All');

  return (
  <>
    <div className="px-[8%] pt-[8%] space-y-10 animate-fadeIn">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Portfolio
          </span>
          <h1 className="pt-5 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tous les Projets
          </h1>
          <p className="text-slate-600 text-sm">Découvrez l'ensemble de mes travaux récents.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Full-Stack', 'Systems', 'POO / C++', 'Graphics / C'].map((category) => (
            <button
              key={category}
              onClick={() => setProjectCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                projectCategory === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.filter(p => projectCategory === 'All' || p.category === projectCategory).map((project) => (
          <div key={project.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {
                    project.githubUrl &&
                    <>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium">
                      <Link2 className="w-4 h-4" /> Dépôt GitHub
                     </a>
                    {
                      project.liveUrl && 
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-600 font-semibold hover:text-blue-700">
                      Démo Live <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    }
                    </div>
                  </>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    <Footer></Footer>
  </>
  );
}
