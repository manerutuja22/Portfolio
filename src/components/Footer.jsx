import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-12">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm">{profile.initials}</div>
          <p className="text-xs text-[#64748B]">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] shadow-sm transition-all">
          Back to Top <i className="fa-solid fa-arrow-up text-xs"></i>
        </button>
      </div>
    </footer>
  );
}
