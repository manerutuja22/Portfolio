import profileImg from "../assets/images/profile.png";
import { profile, heroTech } from "../data/profile";

export default function Hero() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[22rem] bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <i className="fa-solid fa-code"></i> {profile.role}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Building real-world{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">web apps & data solutions</span> with Python.
            </h1>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <strong className="text-[#0F172A] font-semibold">{profile.name}</strong>, a Computer Science Engineering graduate. I build responsive web apps with React.js, Django and REST APIs, backed by MySQL and PostgreSQL, with a strong foundation in OOP, DBMS and problem solving.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#2563EB] hover:bg-[#3B82F6] shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
                View Projects <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-slate-300 shadow-sm transition-all">Contact Me</a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm text-[#2563EB] bg-blue-50 border border-blue-100 hover:border-[#2563EB] transition-all">
                <i className="fa-solid fa-file-arrow-down mr-2 text-xs"></i> Resume
              </a>
            </div>
            <div className="pt-6 border-t border-[#E2E8F0] mt-8">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Primary Tech Stack</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {heroTech.map((t) => (
                  <span key={t.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white border border-[#E2E8F0] text-[#0F172A] shadow-sm">
                    <i className={t.icon}></i> {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2563EB] to-[#3B82F6] opacity-20 blur-xl animate-pulse-glow"></div>
              <div className="relative bg-white p-3 rounded-3xl border border-[#E2E8F0] shadow-saas-card animate-float max-w-[20rem] sm:max-w-[22.5rem]">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-square">
                  <img src={profileImg} alt={`${profile.name} - ${profile.role}`} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg">{profile.name}</p>
                    <p className="text-xs text-slate-200">{profile.location}</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white border border-[#E2E8F0] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center text-sm"><i className="fa-solid fa-graduation-cap"></i></div>
                  <div><div className="text-[10px] text-[#64748B] font-medium uppercase">B.Tech CSE</div><div className="text-xs font-bold text-[#0F172A]">SGPA 9.16</div></div>
                </div>
                <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-white border border-[#E2E8F0] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm"><i className="fa-solid fa-check-circle"></i></div>
                  <div><div className="text-[10px] text-[#64748B] font-medium uppercase">Projects</div><div className="text-xs font-bold text-[#0F172A]">3 Built</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
