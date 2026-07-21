import React, { useState } from 'react';

export default function HeaderNav({ activeTab, onTabChange, projectCount = 5, certCount = 8 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects', badge: projectCount },
    { id: 'certificates', label: 'Certificates', badge: certCount },
    { id: 'education', label: 'Education & Impact' },
    { id: 'skills', label: 'Skills Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-purple-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button onClick={() => onTabChange('overview')} className="flex items-center gap-3 group text-left">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-400 to-amber-300 p-0.5 shadow-md shadow-purple-200 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-display font-extrabold text-xl text-purple-700">
              MU
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-xl text-purple-950 tracking-tight block">Muskan Uppal</span>
            <span className="text-xs font-medium text-purple-600 block -mt-1">Full-Stack Engineer</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-purple-50/80 p-1.5 rounded-full border border-purple-100 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-300'
                    : 'text-purple-900 hover:text-purple-700 hover:bg-purple-100/60'
                }`}
              >
                {item.label}
                {item.badge !== undefined && (
                  <span
                    className={`ml-1.5 px-2 py-0.5 text-xs rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-purple-200/60 text-purple-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/muskanuppal08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/80 border border-purple-200 text-purple-700 hover:bg-purple-100 hover:scale-110 transition-all shadow-sm"
            title="GitHub Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/muskanuppal08/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/80 border border-blue-200 text-blue-600 hover:bg-blue-100 hover:scale-110 transition-all shadow-sm"
            title="LinkedIn Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
          </a>
          <button
            onClick={() => onTabChange('contact')}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold text-sm shadow-md shadow-purple-200 transition-all"
          >
            Hire Muskan ✨
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl bg-purple-100/80 text-purple-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

      </div>

      {/* Mobile Drawer Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white/95 backdrop-blur-xl border-b border-purple-100 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setMobileOpen(false);
              }}
              className="text-left px-4 py-2.5 rounded-xl font-semibold text-purple-900 hover:bg-purple-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
