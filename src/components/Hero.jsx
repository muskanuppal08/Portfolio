import React from 'react';

export default function Hero({ onTabChange, onOpenProject }) {
  return (
    <section id="section-overview" className="space-y-16">
      
      {/* Main Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 text-purple-900 border border-purple-200 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Available for Full-Stack & Engineering Roles
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight text-purple-950 mb-6">
            Building Scalable Web Solutions with{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Modern Tech & Precision
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-purple-900/80 max-w-2xl font-normal leading-relaxed mb-8">
            Hi! I'm <strong className="text-purple-950 font-semibold">Muskan Uppal</strong>, a Computer Science Engineer specializing in{' '}
            <span className="text-purple-700 font-semibold">React.js, Node.js, MERN Stack, Laravel, Java, and MySQL</span>. I engineer high-efficiency web applications, REST APIs, and responsive management platforms.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onTabChange('projects')}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white font-bold text-base shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              Explore Featured Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

            <button
              onClick={() => onTabChange('certificates')}
              className="px-7 py-4 rounded-2xl bg-white/90 border border-purple-200 text-purple-900 font-bold text-base shadow-sm hover:bg-purple-50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              View Verified Certificates
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </button>

            <a
              href="/Muskancv.pdf"
              download="Muskan_Uppal_Resume.pdf"
              className="px-7 py-4 rounded-2xl bg-purple-100/80 border border-purple-200 text-purple-955 font-bold text-base shadow-sm hover:bg-purple-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              Download Resume 📥
            </a>
          </div>
        </div>

        {/* Profile Card & Key Metrics */}
        <div className="lg:col-span-4">
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden bg-white/75 backdrop-blur-xl border border-purple-100 shadow-xl">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-400 to-pink-400 p-1 shadow-md">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center font-display font-black text-2xl text-purple-800">
                  MU
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-purple-950">Muskan Uppal</h3>
                <p className="text-sm text-purple-700">LPU B.Tech CSE (CGPA 7.34)</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Himachal Pradesh</span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-100/60 border border-purple-200/60">
                <span className="block text-2xl font-black font-display text-purple-800">5+</span>
                <span className="text-xs font-medium text-purple-900">Major Full-Stack Projects</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-200/60">
                <span className="block text-2xl font-black font-display text-emerald-800">70%</span>
                <span className="text-xs font-medium text-emerald-900">Effort Reduction Metric</span>
              </div>
              <div className="p-4 rounded-2xl bg-pink-100/60 border border-pink-200/60">
                <span className="block text-2xl font-black font-display text-pink-800">50+</span>
                <span className="text-xs font-medium text-pink-900">LeetCode DSA Solved</span>
              </div>
              <div className="p-4 rounded-2xl bg-blue-100/60 border border-blue-200/60">
                <span className="block text-2xl font-black font-display text-blue-800">15+</span>
                <span className="text-xs font-medium text-blue-900">REST APIs Engineered</span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="mt-6 pt-6 border-t border-purple-100 flex flex-col gap-2 text-xs font-medium text-purple-900">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:uppalmuskan268@gmail.com" className="hover:underline">uppalmuskan268@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+91 7876439594</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Snapshot Cards */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-purple-950">Top Featured Projects</h2>
            <p className="text-sm text-purple-800">Click any project to inspect module architecture & features</p>
          </div>
          <button onClick={() => onTabChange('projects')} className="text-purple-700 font-bold text-sm hover:underline flex items-center gap-1">
            View All 5 Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onClick={() => onOpenProject('greenbyte')} className="glass-card rounded-3xl p-6 cursor-pointer hover:border-emerald-300 transition-all bg-white/75 backdrop-blur-md border border-purple-100 shadow-md">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">ReactJs • Laravel • Leaflet</span>
            <h3 className="font-display font-bold text-xl text-purple-950 mt-3 mb-2">Green Byte — E-Waste Manager</h3>
            <p className="text-sm text-purple-900/80 mb-4 line-clamp-2">Full-stack e-waste management platform with Leaflet Maps locator and 70% manual effort reduction.</p>
            <div className="text-xs font-bold text-emerald-700 flex justify-between pt-4 border-t border-purple-100">
              <span>⚡ 70% Effort Reduced</span>
              <span>Details &rarr;</span>
            </div>
          </div>

          <div onClick={() => onOpenProject('carrental')} className="glass-card rounded-3xl p-6 cursor-pointer hover:border-purple-300 transition-all bg-white/75 backdrop-blur-md border border-purple-100 shadow-md">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">MERN Stack • Node • MongoDB</span>
            <h3 className="font-display font-bold text-xl text-purple-950 mt-3 mb-2">MERN Car Rental System</h3>
            <p className="text-sm text-purple-900/80 mb-4 line-clamp-2">Role-based User & Admin dashboards, 15+ REST APIs, real-time fleet availability & vehicle booking.</p>
            <div className="text-xs font-bold text-purple-700 flex justify-between pt-4 border-t border-purple-100">
              <span>🚗 15+ REST APIs</span>
              <span>Details &rarr;</span>
            </div>
          </div>

          <div onClick={() => onOpenProject('petrofy')} className="glass-card rounded-3xl p-6 cursor-pointer hover:border-amber-300 transition-all bg-white/75 backdrop-blur-md border border-purple-100 shadow-md">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">MERN / PHP • MySQL</span>
            <h3 className="font-display font-bold text-xl text-purple-950 mt-3 mb-2">Petrofy — Patrolling & Billing</h3>
            <p className="text-sm text-purple-900/80 mb-4 line-clamp-2">Digital patrolling billing system with real-time dynamic data handling and 60% workload reduction.</p>
            <div className="text-xs font-bold text-amber-700 flex justify-between pt-4 border-t border-purple-100">
              <span>⛽ 60% Workload Saved</span>
              <span>Details &rarr;</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}