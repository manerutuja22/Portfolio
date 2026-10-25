import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="wrap">
        <SectionHeader eyebrow="Featured Work" title="Recent Projects"
          text="Real and academic projects where I applied web development and data analysis skills." />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}
              className="project-card bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-saas-card hover:shadow-saas-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden aspect-video bg-slate-100 border-b border-[#E2E8F0]">
                  {p.image ? (
                    <img src={p.image} alt={p.title} loading="lazy" className="img-zoom w-full h-full object-cover" />
                  ) : (
                    <div className="img-zoom w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center text-white/90 text-6xl">
                      <i className={p.icon}></i>
                    </div>
                  )}
                  <div className={`absolute top-4 left-4 ${p.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow`}>{p.badge}</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">{p.title}</h3>
                  <ul className="list-disc pl-5 text-[#64748B] text-sm leading-relaxed space-y-1">
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-[#0F172A] border border-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 flex items-center justify-between border-t border-slate-100 mt-4">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-[#64748B] hover:text-[#0F172A]">
                    <i className="fa-brands fa-github text-base mr-1.5"></i> Source Code
                  </a>
                ) : <span className="text-xs text-[#64748B]">GitHub coming soon</span>}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white text-xs font-semibold shadow transition-colors">
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square ml-1.5 text-[10px]"></i>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
