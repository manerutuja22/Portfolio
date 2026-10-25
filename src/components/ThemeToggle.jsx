export default function ThemeToggle({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="w-10 h-10 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] flex items-center justify-center transition-all"
    >
      <i className="fa-solid fa-moon i-moon"></i>
      <i className="fa-solid fa-sun i-sun"></i>
    </button>
  );
}
