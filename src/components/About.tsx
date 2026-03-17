import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView";

const cards = [
  {
    icon: GraduationCap,
    logo: "/queens-logo.png",
    title: "Education",
    body: "B.A.Sc. in Mechanical Engineering, Queen's University — graduated June 2025 with coursework in FEA, thermodynamics, machine design, and fluid mechanics.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    body: "Project Engineer at GMODIS Inc., working on Canada's NextStar Energy battery manufacturing plant — one of the country's most significant industrial projects.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Wrench,
    title: "Technical Focus",
    body: "Piping constructability, P&ID coordination, 3D model clash detection, code-based testing decisions, and field instruction writing for complex process systems.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Target,
    title: "Goal",
    body: "Building the experience log, engineering judgement, and professional discipline required for P.Eng licensure through PEO Ontario.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a mechanical engineer who thrives at the intersection of technical
              analysis and field execution. My day-to-day work involves turning complex
              engineering documents into practical action items that real crews can
              execute safely and on time.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At the NextStar Energy battery plant, I work alongside international
              project teams to ensure that every piping installation aligns with P&IDs,
              3D models, and applicable codes. I identify issues before they become
              expensive rework, and I document engineering decisions clearly.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I enjoy taking on challenges and finding practical solutions. Living
              abroad for more than 10 years taught me how to adapt, stay persistent,
              and figure things out along the way.
            </p>
          </motion.div>

          {/* Right — cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div
                  className={`rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform overflow-hidden ${
                    "logo" in c && c.logo
                      ? "w-16 h-16 sm:w-20 sm:h-20 bg-white p-1"
                      : `w-10 h-10 bg-gradient-to-br ${c.color}`
                  }`}
                >
                  {"logo" in c && c.logo ? (
                    <img src={c.logo} alt={c.title} className="w-full h-full object-contain" />
                  ) : (
                    <c.icon size={18} className="text-white" />
                  )}
                </div>
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
