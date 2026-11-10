import Footer from "../../components/footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-[8%] pt-[15%] sm:md:pt-[8%] space-y-10 animate-fadeIn">
        <section className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              Disponible pour de nouvelles opportunités
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Développeur <br />
              <span className="text-blue-600">
                Full-Stack & Systems
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Je conçois des applications web rapides, évolutives et élégantes avec <strong className="text-slate-900 font-semibold">React, TypeScript, Tailwind CSS</strong> et <strong className="text-slate-900 font-semibold">C++</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/projects')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center gap-2 active:scale-95 transition-all"
              >
                Explorer mes projets <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm shadow-xs active:scale-95 transition-all"
              >
                Prendre contact
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
              <span className="text-slate-500 font-semibold mr-2">Technologies clés:</span>
              {["React", "TypeScript", "Tailwind CSS", "Node.js", "Fastify", "NestJS", "Docker", "C/C++"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-slate-200 shadow-2xs rounded-lg font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">developer.ts</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-800">
                <div>
                  <span className="text-blue-600 font-semibold">interface</span> <span className="text-slate-900 font-bold">Developer</span> &#123;
                </div>
                <div className="pl-4 space-y-1 text-slate-600">
                  <div>name: <span className="text-blue-600">'Safidy'</span>;</div>
                  <div>title: <span className="text-blue-600">'Full-Stack'</span>;</div>
                  <div>skills: [<span className="text-blue-600">'React'</span>, <span className="text-blue-600">'TypeScript'</span>, <span className="text-blue-600">'C++'</span>];</div>
                  <div>focus: <span className="text-blue-600">'Performance & UI/UX'</span>;</div>
                </div>
                <div>&#125;</div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Code Status: Clean
                </span>
                <span>Light Mode Active</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 px-[5%] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">Commun-core 42</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Peer-to-peer learning</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">5 Projets</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Web & Systèmes Déployés</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Code Propre & Typé</div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;
