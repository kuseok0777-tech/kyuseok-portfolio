import { motion } from "framer-motion";
import { Cpu, Layers, CheckCircle2, TrendingUp } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/resume";

const icons = [Cpu, Layers];
const gradients = [
  "from-blue-500 to-violet-600",
  "from-emerald-500 to-cyan-600",
];
const glowColors = [
  "group-hover:shadow-blue-500/10",
  "group-hover:shadow-emerald-500/10",
];
const borderHover = [
  "hover:border-blue-500/30",
  "hover:border-emerald-500/30",
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
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
            What I've Built
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Projects</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex flex-col p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 ${borderHover[i % borderHover.length]} hover:bg-slate-900 transition-all duration-300 group overflow-hidden shadow-xl ${glowColors[i % glowColors.length]} hover:shadow-2xl`}
              >
                {/* Top glow line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                    i === 0 ? "via-blue-500/60" : "via-emerald-500/60"
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                {/* Icon + subtitle */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  {/* Metric badge */}
                  <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl">
                    <TrendingUp size={13} className="text-blue-400" />
                    <span className="text-white font-black text-sm">
                      {proj.metric.value}
                    </span>
                    <span className="text-slate-400 text-xs">{proj.metric.label}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1.5">
                  {proj.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {proj.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Education note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-shrink-0 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Academic
          </div>
          <p className="text-slate-400 text-sm">
            Both projects completed as part of the B.A.Sc. Mechanical Engineering program at{" "}
            <span className="text-white font-semibold">Queen's University</span>. All FEA
            modelling, simulation setup, and result interpretation were done independently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
