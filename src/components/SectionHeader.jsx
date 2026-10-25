export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">{eyebrow}</h2>
      <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">{title}</p>
      {text && <p className="text-[#64748B] text-base">{text}</p>}
    </div>
  );
}
