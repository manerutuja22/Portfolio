import { education, certifications } from "../data/education";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-t border-[#E2E8F0]">
      <div className="wrap">
        <SectionHeader eyebrow="Academic Background" title="Education & Certifications" />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-6">Education</h3>
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 90} className="relative pl-8 pb-8 border-l-2 border-[#E2E8F0] ml-2 last:pb-0">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#2563EB] ring-4 ring-blue-100 dark:ring-blue-900"></span>
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-saas-card">
                  <h4 className="font-bold text-[#0F172A]">{e.title}</h4>
                  <p className="text-sm text-[#64748B]">{e.org}</p>
                  <p className="text-xs font-semibold text-[#2563EB] mt-1">{e.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-6">Certifications</h3>
            <div className="space-y-5">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 90} className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-saas-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl flex-shrink-0"><i className={c.icon}></i></div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{c.title}</h4>
                    <p className="text-sm text-[#64748B]">{c.org}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
