import React, { useState } from 'react';

export default function ProjectsSection({ onOpenProject }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'greenbyte',
      category: 'laravel mern',
      title: 'Green Byte — E-Waste Facility Manager',
      date: 'Jun 2026',
      badge: 'Laravel • React • Leaflet',
      pillClass: 'bg-emerald-100 text-emerald-800',
      desc: 'Full-stack environmental sustainability platform enabling users to diagnose battery damage, access recycling guidance, and locate nearby facilities via Leaflet Maps.',
      metric: '70% Manual Effort Reduced',
      metricClass: 'text-emerald-700 bg-emerald-100/80',
      highlights: ['6+ Database Tables & REST API Architecture', 'Interactive Leaflet Center Locator']
    },
    {
      id: 'inmemorydb',
      category: 'java backend',
      title: 'In-Memory Database Engine',
      date: 'Jan 2026',
      badge: 'Core Java • Data Structures • Key-Value Store',
      pillClass: 'bg-indigo-100 text-indigo-800',
      desc: 'Custom high-performance in-memory key-value database engine supporting nested transactions, rollbacks, O(1) indexed lookups, and concurrency locks.',
      metric: 'Sub-millisecond Query Speed',
      metricClass: 'text-indigo-800 bg-indigo-100/80',
      highlights: ['Transactional BEGIN/COMMIT/ROLLBACK', 'O(1) Hash Indexing & Cache Management']
    },
    {
      id: 'carrental',
      category: 'mern',
      title: 'Car Rental MERN Platform',
      date: 'Dec 2025 - Dec 2026',
      badge: 'React • Node • Express • Mongo',
      pillClass: 'bg-purple-100 text-purple-800',
      desc: 'Full-stack MERN car rental platform featuring role-based User and Admin dashboards, live fleet inventory management, and flexible booking options.',
      metric: '65% Ops Effort Saved',
      metricClass: 'text-purple-800 bg-purple-100/80',
      highlights: ['15+ REST APIs & 5 MongoDB Collections', 'Role-Based Admin Fleet Controller']
    },
    {
      id: 'strangerthings',
      category: 'frontend ui',
      title: 'Stranger Things Immersive Web Experience',
      date: 'Nov 2025',
      badge: 'React.js • Web Audio API • Tailwind CSS',
      pillClass: 'bg-rose-100 text-rose-800',
      desc: 'Retro 80s themed interactive web application inspired by Stranger Things, featuring ambient synthwave audio, glowing upside-down world toggles, and episode interactive guides.',
      metric: 'Interactive Audio-Visual Experience',
      metricClass: 'text-rose-800 bg-rose-100/80',
      highlights: ['Interactive Upside-Down Theme Engine', 'Web Audio API Ambient Synth Soundscapes']
    },
    {
      id: 'cocacola',
      category: 'frontend ui',
      title: 'Coca-Cola Creative Brand Experience',
      date: 'Oct 2025',
      badge: 'React.js • Glassmorphic CSS • Smooth Scroll',
      pillClass: 'bg-red-100 text-red-800',
      desc: 'Vibrant interactive brand web application featuring 3D product visualizers, dynamic color theme transitions, particle animations, and responsive promotional showcases.',
      metric: 'Interactive 3D Brand Showcase',
      metricClass: 'text-red-800 bg-red-100/80',
      highlights: ['Fluid Glassmorphic Product Cards', 'Dynamic Color-Shift Background Engine']
    },
    {
      id: 'pizzaslider',
      category: 'frontend ui',
      title: 'Pizza-Slider Interactive Component UI',
      date: 'Apr 2026',
      badge: 'React.js • Tailwind • ES6+',
      pillClass: 'bg-pink-100 text-pink-800',
      desc: 'Engineered an interactive multi-card slider interface in React with dynamic state management, modular props-based components, and micro-animations.',
      metric: 'Interactive UI Module',
      metricClass: 'text-pink-800 bg-pink-100/80',
      highlights: ['Props-driven modular React architecture', 'Smooth responsive UI/UX transitions']
    },
    {
      id: 'petrofy',
      category: 'laravel mern',
      title: 'Petrofy — Patrolling & Billing',
      date: 'Feb - May 2025',
      badge: 'PHP • MySQL • React • Node',
      pillClass: 'bg-amber-100 text-amber-800',
      desc: 'Digital patrolling billing system featuring real-time dynamic data handling, CRUD REST APIs, dynamic dataset pagination, and MySQL optimization.',
      metric: '60% Manual Workload Cut',
      metricClass: 'text-amber-800 bg-amber-100/80',
      highlights: ['Real-time instant billing engine', 'Dynamic pagination for large datasets']
    },
    {
      id: 'employeejava',
      category: 'java backend',
      title: 'Java Employee Management System',
      date: 'Sep - Dec 2025',
      badge: 'Java Swing • AWT • JDBC • MySQL',
      pillClass: 'bg-blue-100 text-blue-800',
      desc: 'Desktop-based CRUD Employee Management application built with Java Swing & AWT, following OOP principles for clean record management and SQL database integration.',
      metric: 'Desktop Application',
      metricClass: 'text-blue-800 bg-blue-100/80',
      highlights: ['Native Java Swing & AWT GUI', 'JDBC SQL Data Access Layer']
    }
  ];

  const filteredProjects = projects.filter((p) =>
    filter === 'all' ? true : p.category.includes(filter)
  );

  return (
    <section id="section-projects" className="space-y-10 w-full">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">Engineering Portfolio</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-purple-950 mt-3 mb-4">
          Software & Web <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Projects Vault</span>
        </h2>
        <p className="text-purple-900/80 text-base">
          Explore full-stack web applications, in-memory databases, interactive UI showcases, and Java systems built by Muskan Uppal. Click any card to inspect full module architecture and code.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: `All Projects (${projects.length})` },
          { id: 'mern', label: 'MERN / Full-Stack' },
          { id: 'ui', label: 'Interactive UI & Visuals' },
          { id: 'backend', label: 'Backend & Databases' },
          { id: 'laravel', label: 'Laravel / PHP' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
              filter === t.id
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white/80 text-purple-900 hover:bg-purple-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => onOpenProject(p.id)}
            className="glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer group hover:border-purple-300 transition-all bg-white/75 backdrop-blur-xl border border-purple-100 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${p.pillClass}`}>{p.badge}</span>
                <span className="text-xs text-purple-600 font-bold">{p.date}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-purple-950 group-hover:text-purple-700 transition-colors mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-purple-900/80 leading-relaxed mb-6">{p.desc}</p>

              <div className="space-y-2 mb-6">
                {p.highlights.map((h, idx) => (
                  <div key={idx} className="text-xs font-semibold text-purple-950 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.metricClass}`}>{p.metric}</span>
              <span className="text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                View Modules &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
