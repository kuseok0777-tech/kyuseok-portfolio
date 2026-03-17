import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, MapPin, FileText } from "lucide-react";
import { profile } from "../data/resume";
import { useTyping } from "../hooks/useTyping";

function FloatingParticle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { x: "10%", y: "20%", delay: 0, size: 60 },
  { x: "80%", y: "15%", delay: 1, size: 40 },
  { x: "60%", y: "70%", delay: 2, size: 80 },
  { x: "25%", y: "60%", delay: 0.5, size: 30 },
  { x: "90%", y: "55%", delay: 1.5, size: 50 },
  { x: "45%", y: "85%", delay: 3, size: 35 },
  { x: "5%", y: "80%", delay: 2.5, size: 55 },
  { x: "70%", y: "35%", delay: 0.8, size: 25 },
];

export default function Hero() {
  const typed = useTyping(profile.taglines, 75, 2200);

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.15)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex flex-col">
        {/* Intro block: 이름+태그라인(가변) | 프로필(고정) */}
        <div className="flex flex-row items-center gap-6 sm:gap-8 w-full">
          {/* 왼쪽: 이름+태그라인 — 최소 너비 고정해서 타이핑 시 프로필이 안 흔들리게 */}
          <div className="flex flex-col gap-0.5 min-w-[200px] sm:min-w-[280px] flex-1 max-w-[calc(100%-8rem)] sm:max-w-[calc(100%-10rem)]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight"
            >
              Kyu S.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Choi
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="h-6 sm:h-7 flex items-center min-w-0 overflow-hidden"
            >
              <span className="text-sm sm:text-lg text-slate-500 font-medium truncate block min-w-0">
                {typed}
                <span className="inline-block w-0.5 h-3.5 sm:h-4 bg-blue-400/80 ml-0.5 animate-pulse flex-shrink-0 align-middle" />
              </span>
            </motion.div>
          </div>
          {/* 프로필 사진: 고정 크기·고정 위치, 태그라인 영향 안 받음 */}
          {"avatar" in profile && profile.avatar && (
            <div className="flex flex-shrink-0 items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 xl:w-52 xl:h-52">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-slate-600/50 ring-offset-2 ring-offset-slate-950 shadow-xl"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          )}
        </div>

        {/* 구분선 */}
        <div className="mt-10 pt-10 border-t border-slate-800/80 w-full max-w-2xl" />

        {/* 요약·위치·CTA — 명확한 계층 */}
        <div className="flex flex-col gap-5 max-w-2xl w-full mt-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center gap-2 text-slate-500 text-sm"
          >
            <MapPin size={14} className="flex-shrink-0 text-slate-600" />
            {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
            >
              <Mail size={16} />
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
            >
              View Case Studies
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll down */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
