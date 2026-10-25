import { useRef, useState } from "react";
import { profile } from "../data/profile";
import { sendContactEmail } from "../services/emailService";
import Toast from "./Toast";

const input = "w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all";
const label = "block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2";
const social = "w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] flex items-center justify-center transition-all duration-200";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", title: "", body: "" });

  const notify = (type, title, body) => {
    setToast({ show: true, type, title, body });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRef.current.elements._honey?.value) return; // spam bot
    setSending(true);
    try {
      await sendContactEmail(formRef.current);
      formRef.current.reset();
      notify("success", "Message Sent!", "Thank you for reaching out. I'll reply shortly.");
    } catch (err) {
      console.error("EmailJS error:", err);
      notify("error", "Could not send", `Please email me at ${profile.email}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-t border-[#E2E8F0]">
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Get In Touch</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">Let's work together.</p>
              <p className="text-[#64748B] leading-relaxed">Have an opportunity, an internship, or a project idea? Send me a message and I'll usually reply within a day.</p>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center text-lg"><i className="fa-solid fa-envelope"></i></div>
                <div><p className="text-xs text-[#64748B] font-medium">Direct Email</p>
                  <a href={`mailto:${profile.email}`} className="text-sm font-bold text-[#0F172A] hover:text-[#2563EB]">{profile.email}</a></div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg"><i className="fa-solid fa-location-dot"></i></div>
                <div><p className="text-xs text-[#64748B] font-medium">Location</p><p className="text-sm font-bold text-[#0F172A]">{profile.location}</p></div>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Connect on Socials</p>
              <div className="flex items-center gap-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={social}><i className="fa-brands fa-github text-lg"></i></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={social}><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                <a href={profile.phoneLink} className={social}><i className="fa-solid fa-phone text-lg"></i></a>
                <a href={`mailto:${profile.email}`} className={social}><i className="fa-solid fa-paper-plane text-lg"></i></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-saas-card">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label htmlFor="name" className={label}>Your Name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" className={input} /></div>
                <div><label htmlFor="email" className={label}>Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="jane@company.com" className={input} /></div>
              </div>
              <div><label htmlFor="subject" className={label}>Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Project Inquiry / Job Opportunity" className={input} /></div>
              <div><label htmlFor="message" className={label}>Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Hi Rutuja, I'd like to discuss..." className={input}></textarea></div>
              <button type="submit" disabled={sending}
                className="w-full py-3.5 px-6 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] disabled:opacity-60 text-white font-semibold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                {sending ? <><i className="fa-solid fa-circle-notch animate-spin text-xs"></i> Sending...</> : <>Send Message <i className="fa-solid fa-paper-plane text-xs"></i></>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toast toast={toast} />
    </section>
  );
}
