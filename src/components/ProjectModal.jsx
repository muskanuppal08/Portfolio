import React from 'react';

export default function ProjectModal({ projectKey, projectsData, onClose }) {
  if (!projectKey || !projectsData[projectKey]) return null;

  const data = projectsData[projectKey];

  return (
    <div className="fixed inset-0 z-50 bg-indigo-950/40 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border-2 border-purple-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">{data.badge}</span>
          <span className="text-xs text-purple-600 font-bold ml-2">{data.date}</span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-purple-950 mb-1">{data.title}</h3>
        <p className="text-sm font-semibold text-purple-700 mb-4">{data.subtitle}</p>

        <div className="p-4 rounded-2xl bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-bold mb-6 flex items-center gap-2">
          <span>🏆 Impact Milestone:</span> {data.impact}
        </div>

        <h4 className="font-display font-bold text-lg text-purple-950 mb-2">Project Overview</h4>
        <p className="text-sm text-purple-900/80 leading-relaxed mb-6">{data.overview}</p>

        {/* Module Breakdown */}
        <h4 className="font-display font-bold text-lg text-purple-950 mb-3">Feature & Module Breakdown</h4>
        <div className="space-y-3 mb-6">
          {data.modules.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-purple-50/80 border border-purple-100">
              <h5 className="font-display font-bold text-base text-purple-950 mb-1">{m.title}</h5>
              <p className="text-xs text-purple-900/80 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h4 className="font-display font-bold text-lg text-purple-950 mb-3">Tech Stack & Tools</h4>
        <div className="flex flex-wrap gap-2 mb-8">
          {data.stack.map((s, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200">
              {s}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-purple-950 text-white font-bold text-sm hover:bg-purple-800 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View GitHub Repository
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-purple-100 text-purple-900 font-bold text-sm hover:bg-purple-200"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
