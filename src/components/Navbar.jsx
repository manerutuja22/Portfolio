import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile, navLinks } from "../data/profile";

export default function Navbar({ onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="wrap h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[#3B82F6] transition-colors">
            {profile.initials}
          </div>
          <div>
            <div className="font-bold text-lg tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{profile.name}</div>
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to opportunities
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#64748B]">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#2563EB] transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle onToggle={onToggleTheme} />
          <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-[#2563EB] hover:bg-[#3B82F6] shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
            <i className="fa-solid fa-paper-plane mr-2 text-xs"></i> Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle onToggle={onToggleTheme} />
          <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="p-2 rounded-lg text-[#64748B] hover:bg-slate-100">
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md font-medium text-[#64748B] hover:bg-slate-50 hover:text-[#2563EB]">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-[#2563EB]">Hire Me</a>
        </div>
      )}
    </header>
  );
}
