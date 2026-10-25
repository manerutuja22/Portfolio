export default function Toast({ toast }) {
  const ok = toast.type !== "error";
  return (
    <div
      className={`fixed bottom-6 right-6 bg-[#0F172A] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 z-50 transition-all duration-300 ${
        toast.show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className={`w-6 h-6 rounded-full ${ok ? "bg-emerald-500" : "bg-red-500"} text-white flex items-center justify-center text-xs`}>
        <i className={`fa-solid ${ok ? "fa-check" : "fa-xmark"}`}></i>
      </div>
      <div>
        <p className="text-xs font-bold">{toast.title}</p>
        <p className="text-[11px] text-slate-300">{toast.body}</p>
      </div>
    </div>
  );
}
