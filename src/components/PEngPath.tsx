import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { pengSteps } from "../data/resume";

const statusConfig = {
  active: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    dot: "bg-emerald-400",
    label: "In Progress",
  },
  upcoming: {
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    dot: "bg-blue-400",
    label: "Upcoming",
  },
  future: {
    icon: Circle,
    color: "text-slate-500",
    bg: "bg-slate-800/60 border-slate-700",
    dot: "bg-slate-600",
    label: "Future",
  },
} as const;

export default function PEngPath() {
  const { ref, inView } = useInView();

  return (
    <section
      id="peng"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Long-Term Goal
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">P.Eng Path</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-400 max-w-2xl mb-14 leading-relaxed"
        >
          Professional licensure is not just a credential — it is a commitment to
          engineering excellence, ethical practice, and accountability. Here is how I
          am building toward P.Eng registration with PEO Ontario.
        </motion.p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-5">
            {pengSteps.map((step, i) => {
                  const cfg = statusConfig[step.status as keyof typeof statusConfig];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full items-center justify-center border-2 ${cfg.bg}`}
                  >
                    <span className="text-white font-black text-sm">{step.step}</span>
                  </div>

                  <div
                    className={`p-5 sm:p-6 rounded-2xl border ${cfg.bg} hover:scale-[1.01] transition-transform duration-200`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-white font-bold text-base flex-1">
                        {step.title}
                      </h3>
                      <span
                        className={`flex items-center gap-1.5 text-xs font-medium ${cfg.color} w-fit`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PEO note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-white font-semibold">PEO Ontario</span> requires 48 months
            of supervised engineering experience, including 12 months in a Canadian
            environment, plus successful completion of the Professional Practice Examination
            (PPE). I am actively accumulating and documenting qualifying experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
