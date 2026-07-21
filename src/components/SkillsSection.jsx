import React from 'react';

export default function SkillsSection() {
  return (
    <section id="section-skills" className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">Technical Proficiency</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-purple-950 mt-3 mb-4">
          Core Languages & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <p className="text-purple-900/80 text-base">
          Categorized technical skills across programming languages, web frameworks, database engines, developer tools, and core competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Languages */}
        <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl mb-4">💻</div>
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'JavaScript (ES6+)', 'Python', 'C++', 'C', 'PHP'].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-xl bg-purple-100/80 text-purple-900 border border-purple-200 font-semibold text-xs">{s}</span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-800 flex items-center justify-center font-bold text-xl mb-4">⚡</div>
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'Express.js', 'Laravel', 'Tailwind CSS'].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-xl bg-pink-100/80 text-pink-900 border border-pink-200 font-semibold text-xs">{s}</span>
            ))}
          </div>
        </div>

        {/* Databases & APIs */}
        <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4">🗄️</div>
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4">Databases & APIs</h3>
          <div className="flex flex-wrap gap-2">
            {['MySQL', 'MongoDB', 'Redis', 'REST APIs', 'Leaflet Maps'].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-xl bg-emerald-100/80 text-emerald-900 border border-emerald-200 font-semibold text-xs">{s}</span>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4">🛠️</div>
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4">Tools & Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Git & GitHub', 'Postman', 'IntelliJ IDEA', 'Problem Solving', 'Team Leadership'].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-xl bg-amber-100/80 text-amber-900 border border-amber-200 font-semibold text-xs">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
