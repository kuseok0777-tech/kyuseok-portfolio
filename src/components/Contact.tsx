import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { profile } from "../data/resume";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Let's Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-slate-400 leading-relaxed text-lg">
              I am open to junior engineering roles, project collaborations, mentorship
              conversations, and any opportunity to grow as a professional engineer in
              Canada.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Whether you are a hiring manager, a P.Eng looking to mentor, or just
              someone who wants to connect — feel free to reach out.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email</p>
                  <p className="text-white font-medium text-sm">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Location</p>
                  <p className="text-white font-medium text-sm">{profile.location}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all text-slate-400 hover:text-white group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — message card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-white font-bold text-lg mb-1">Send a Message</h3>
            <p className="text-slate-500 text-sm mb-6">
              Or reach me directly at{" "}
              <a href={`mailto:${profile.email}`} className="text-blue-400 hover:underline">
                {profile.email}
              </a>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${profile.email}`;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-blue-500/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
