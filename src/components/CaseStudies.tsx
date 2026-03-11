import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { caseStudies } from "../data/resume";
import { FileText, AlertCircle, Search, Wrench, CheckCircle2 } from "lucide-react";

function CaseCard({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl bg-slate-800/40 border border-slate-700/50 overflow-hidden hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 group"
    >
      <div className="p-6 sm:p-8">
        <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-1">
          {study.perspective}
        </p>
        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors">
          {study.title}
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText size={16} className="text-slate-500 flex-shrink-0" />
              <span className="text-slate-400 font-medium text-sm">Context</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pl-6">{study.context}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-amber-500/80 flex-shrink-0" />
              <span className="text-slate-400 font-medium text-sm">Problem</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pl-6">{study.problem}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Search size={16} className="text-cyan-400/80 flex-shrink-0" />
              <span className="text-slate-400 font-medium text-sm">Analysis</span>
            </div>
            <ul className="text-slate-300 text-sm leading-relaxed pl-6 space-y-1 list-disc list-inside">
              {study.analysis.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wrench size={16} className="text-emerald-400/80 flex-shrink-0" />
              <span className="text-slate-400 font-medium text-sm">Engineering Actions</span>
            </div>
            <ul className="text-slate-300 text-sm leading-relaxed pl-6 space-y-1 list-disc list-inside">
              {study.actions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} className="text-green-400/80 flex-shrink-0" />
              <span className="text-slate-400 font-medium text-sm">Result</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pl-6">{study.result}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const { ref, inView } = useInView();

  return (
    <section
      id="case-studies"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-slate-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Engineering in Practice
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Case Studies</h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Selected examples from commissioning and piping work at a large-scale EV battery
            manufacturing facility.
          </p>
        </motion.div>

        <div className="space-y-10">
          {caseStudies.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
