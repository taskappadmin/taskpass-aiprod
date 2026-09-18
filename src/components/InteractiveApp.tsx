import React from "react";

interface InteractiveAppProps {
  darkMode: boolean;
}

export default function InteractiveApp({ darkMode }: InteractiveAppProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div className="w-full max-w-md px-6">
        <div className={`rounded-3xl border p-6 shadow-2xl ${darkMode ? "border-slate-700 bg-slate-900/80" : "border-slate-300 bg-slate-100 text-slate-900"}`}>
          <div className="text-xs uppercase tracking-[0.28em] text-emerald-400">Taskpass</div>
          <h1 className="mt-4 text-3xl font-bold">AI productivity cockpit</h1>
          <p className="mt-3 text-sm text-slate-300">
            Project shell initialized for taskpass-aiprod.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm">Ready for app development</span>
          </div>
        </div>
      </div>
    </div>
  );
}
