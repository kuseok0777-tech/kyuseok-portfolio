import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-black text-white text-xs shadow">
            KC
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Kyuseok Choi — Mechanical Engineer
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors group"
        >
          Back to top
          <span className="w-7 h-7 rounded-lg border border-slate-700 group-hover:border-slate-500 flex items-center justify-center transition-colors">
            <ArrowUp size={13} />
          </span>
        </button>
      </div>
    </footer>
  );
}
