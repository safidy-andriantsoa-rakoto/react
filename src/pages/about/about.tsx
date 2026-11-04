function About(){
  return (
    <>
     <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                À Propos
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Développeur passionné par la qualité logicielle.
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Mon parcours combine le développement web moderne en React/TypeScript avec une solide compréhension des bases algorithmiques en C++. J'aime créer des applications performantes, bien structurées et centrées sur l'expérience utilisateur.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Compétences Techniques</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-slate-900">{cat.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-blue-600" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Parcours & Expérience</h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="text-xs font-bold text-blue-600">{exp.period}</div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role} — <span className="text-slate-600 font-normal">{exp.company}</span></h3>
                      <p className="text-sm text-slate-600">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map(t => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
    </>
  )
}

export default About;
