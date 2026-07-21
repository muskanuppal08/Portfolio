import React from 'react';

export default function EducationSection() {
  return (
    <section id="section-education" className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">Academic Milestone</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-purple-950 mt-3 mb-4">
          Education & <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Achievements</span>
        </h2>
        <p className="text-purple-900/80 text-base">
          Muskan's academic record, competitive Olympiad ranks, and algorithmic problem-solving milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Education Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm">🎓</span>
            Academic Journey
          </h3>

          <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Aug 2023 – Present</span>
                <h4 className="font-display font-extrabold text-xl text-purple-950 mt-2">Lovely Professional University (LPU)</h4>
                <p className="text-sm font-semibold text-purple-800">Bachelor of Technology — Computer Science and Engineering</p>
                <p className="text-xs text-purple-900/70 mt-1">Phagwara, Punjab</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black font-display text-purple-800">CGPA 7.34</span>
                <span className="block text-xs font-medium text-purple-600">Academic Score</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Apr 2022 – Mar 2023</span>
                <h4 className="font-display font-extrabold text-xl text-purple-950 mt-2">Mehr Chand Mahajan DAV Public School</h4>
                <p className="text-sm font-semibold text-purple-800">Intermediate (12th Non-Medical / PCM Science)</p>
                <p className="text-xs text-purple-900/70 mt-1">Baghni, Nurpur, Himachal Pradesh</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black font-display text-pink-700">71.2%</span>
                <span className="block text-xs font-medium text-purple-600">Board Marks</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Apr 2020 – Mar 2021</span>
                <h4 className="font-display font-extrabold text-xl text-purple-950 mt-2">Future Foundation School</h4>
                <p className="text-sm font-semibold text-purple-800">Matriculation (10th Standard)</p>
                <p className="text-xs text-purple-900/70 mt-1">Nurpur, Himachal Pradesh</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black font-display text-emerald-700">96.0%</span>
                <span className="block text-xs font-medium text-purple-600">Distinction Score</span>
              </div>
            </div>
          </div>
        </div>

        {/* Honors */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-display font-bold text-xl text-purple-950 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-sm">🏆</span>
            Honors & Achievements
          </h3>

          <div className="glass-card rounded-3xl p-6 border-l-4 border-l-amber-500 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">National Science Olympiad</div>
            <h4 className="font-display font-bold text-lg text-purple-950 mb-2">Block-Level Top Ranker 🥇</h4>
            <p className="text-sm text-purple-900/80">Secured the top position in the National Science Olympiad at the block level, demonstrating early aptitude in scientific reasoning.</p>
          </div>

          <div className="glass-card rounded-3xl p-6 border-l-4 border-l-purple-500 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">University Class Rank</div>
            <h4 className="font-display font-bold text-lg text-purple-950 mb-2">Top 11–40% Student Rank at LPU ⭐</h4>
            <p className="text-sm text-purple-900/80">Ranked consistently among the top performing batch percentage in Computer Science Engineering at Lovely Professional University.</p>
          </div>

          <div className="glass-card rounded-3xl p-6 border-l-4 border-l-pink-500 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="text-xs font-bold text-pink-700 uppercase tracking-wider mb-1">Data Structures & Algorithms</div>
            <h4 className="font-display font-bold text-lg text-purple-950 mb-2">50+ LeetCode DSA Solved 🧩</h4>
            <p className="text-sm text-purple-900/80">Solved diverse algorithmic challenges across arrays, strings, dynamic programming, and OOP logic in Java.</p>
          </div>

          <div className="glass-card rounded-3xl p-6 border-l-4 border-l-emerald-500 bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Full-Stack Bootcamp</div>
            <h4 className="font-display font-bold text-lg text-purple-950 mb-2">Apna College Sigma 8.0 Graduate 💻</h4>
            <p class="text-sm text-purple-900/80">Successfully completed Apna College's Sigma 8.0 Web Development program, gaining practical full-stack web engineering skills.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
