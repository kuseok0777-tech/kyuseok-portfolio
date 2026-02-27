import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/resume";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();
  const software = skills.filter((s) => s.category === "Software");
  const engineering = skills.filter((s) => s.category === "Engineering");

  return (
    <section
      id="skills"
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
            What I Work With
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Skills</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Software */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Software & Tools
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <div className="space-y-5">
              {software.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Engineering Competencies
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <div className="space-y-5">
              {engineering.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-slate-800"
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-5 text-center">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "P&ID",
              "Isometric Drawings",
              "Hydrostatic Testing",
              "Pneumatic Testing",
              "Punch List Management",
              "BOM Analysis",
              "FEA",
              "ASME Standards",
              "CSA Standards",
              "Material Specifications",
              "Field Coordination",
              "Cost Estimation",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-slate-700 text-slate-400 text-xs rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
