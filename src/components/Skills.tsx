import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/resume";

const COLORS = [
  "#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#0ea5e9", "#a855f7",
  "#14b8a6", "#64748b",
];

const LINE_START_R_OFFSET = 4;
const ARROW_LENGTH = 48;
const LABEL_GAP = 8;
const LABEL_PUSH_OUT = 32;

function DonutChart({
  items,
  category,
  delay = 0,
  inView,
}: {
  items: { name: string; level: number }[];
  category: string;
  delay?: number;
  inView: boolean;
}) {
  const anglePer = 360 / items.length;
  const segments = items.map((item, i) => ({
    name: item.name,
    startAngle: i * anglePer,
    endAngle: (i + 1) * anglePer,
    color: COLORS[i % COLORS.length],
  }));

  const height = 340;
  const width = 640;
  const viewBoxMinX = -100;
  const cx = viewBoxMinX + width / 2;
  const cy = height / 2;
  const r = 58;
  const strokeWidth = 26;
  const lineStartR = r + strokeWidth / 2 + LINE_START_R_OFFSET;
  const lineEndR = lineStartR + ARROW_LENGTH;
  const labelRBase = lineEndR + LABEL_GAP;

  const toXY = (deg: number, radius: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
  };

  const pathD = (start: number, end: number) => {
    const [x1, y1] = toXY(start, r);
    const [x2, y2] = toXY(end, r);
    const large = end - start > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <motion.svg
        viewBox={`${viewBoxMinX} 0 ${width} ${height}`}
        className="w-full max-w-[min(100%,400px)] aspect-[640/340] sm:max-w-[480px] lg:max-w-[560px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay, type: "spring", stiffness: 90, damping: 18 }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="5"
            refX="5"
            refY="2.5"
            orient="auto"
          >
            <path d="M0 0 L5 2.5 L0 5 Z" fill="rgb(148 163 184)" />
          </marker>
        </defs>

        {segments.map((seg, i) => {
          const midAngle = (seg.startAngle + seg.endAngle) / 2;
          const isEngineering = category === "Engineering";
          const isSoftware = category === "Software";
          const pushOut =
            (isEngineering &&
              (seg.name === "Constructability Review" || seg.name === "Piping Codes & Standards")) ||
            (isSoftware && (seg.name === "Python" || seg.name === "AutoCAD"));

          const labelR = pushOut ? labelRBase + LABEL_PUSH_OUT : labelRBase;
          const [x1, y1] = toXY(midAngle, lineStartR);
          const [lx, ly] = toXY(midAngle, labelR);
          const labelAnchorDefault = midAngle >= 90 && midAngle < 270 ? "end" : "start";
          const labelAnchor =
            seg.name === "3D Model Coordination" ? "end" : labelAnchorDefault;
          const lineD = `M ${lx} ${ly} L ${x1} ${y1}`;

          return (
            <g key={seg.name}>
              <motion.path
                d={pathD(seg.startAngle, seg.endAngle)}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0.9 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{
                  pathLength: { duration: 0.85, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.35, delay: delay + i * 0.04 },
                }}
                className="drop-shadow-sm transition-opacity duration-200 hover:opacity-100"
              />
              <motion.path
                d={lineD}
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="1.25"
                strokeOpacity="0.85"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{
                  duration: 0.35,
                  delay: delay + 0.2 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <motion.text
                x={lx}
                y={ly}
                textAnchor={labelAnchor as "start" | "end" | "middle"}
                dominantBaseline="middle"
                className="fill-slate-200 font-medium select-none"
                style={{ fontSize: "12px", fontFamily: "inherit" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: delay + 0.38 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {seg.name}
              </motion.text>
            </g>
          );
        })}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r - strokeWidth}
          fill="rgb(15 23 42)"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: delay + 0.4, type: "spring", stiffness: 220, damping: 24 }}
        />
      </motion.svg>
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

        <div className="flex flex-col gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3 w-full">
              <span className="flex-1 h-px bg-slate-800" />
              Software & Tools
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <DonutChart items={software} category="Software" delay={0.2} inView={inView} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3 w-full">
              <span className="flex-1 h-px bg-slate-800" />
              Engineering Competencies
              <span className="flex-1 h-px bg-slate-800" />
            </h3>
            <DonutChart items={engineering} category="Engineering" delay={0.35} inView={inView} />
          </motion.div>
        </div>

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
