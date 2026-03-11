import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/resume";

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

        <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Software & Tools
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <ul className="flex flex-wrap gap-2">
              {software.map((s) => (
                <li key={s.name}>
                  <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 text-slate-300 text-sm rounded-lg">
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-800" />
              Engineering Competencies
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <ul className="flex flex-wrap gap-2">
              {engineering.map((s) => (
                <li key={s.name}>
                  <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 text-slate-300 text-sm rounded-lg">
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
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
