import { skills } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-y border-[#E2E8F0]">
      <div className="wrap">
        <SectionHeader eyebrow="Technical Proficiency" title="Skills & Tech Stack"
          text="A mix of web development, Python data analysis, databases and tools I use to build end-to-end solutions." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}
              className="skill-card bg-white rounded-xl border border-[#E2E8F0] border-t-2 border-t-transparent p-6 shadow-saas-card flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                <i className={s.icon}></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-lg">{s.title}</h3>
                <p className="text-xs font-semibold text-[#2563EB] mb-2">{s.sub}</p>
                <p className="text-xs text-[#64748B] leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
