import { motion } from "framer-motion";
import { Briefcase, Shield, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { experiences, militaryExperience } from "../data/resume";

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Where I've Worked
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {/* Professional experience */}
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 group overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Briefcase size={20} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="flex items-center gap-1.5 text-blue-400 text-xs font-medium bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full w-fit">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                    <span className="text-blue-400 font-semibold text-sm">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 text-sm">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-900/80 border border-slate-700 text-slate-400 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Military */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Shield size={20} className="text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    {militaryExperience.role}
                  </h3>
                  <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full w-fit">
                    <Calendar size={11} />
                    {militaryExperience.period}
                  </span>
                </div>
                <span className="text-emerald-400 font-semibold text-sm block mb-4">
                  {militaryExperience.org}
                </span>

                <ul className="space-y-2.5">
                  {militaryExperience.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
