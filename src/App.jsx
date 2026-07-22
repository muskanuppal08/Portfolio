import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    greenbyte: {
      title: "Green Byte — E-Waste Facility Manager",
      subtitle: "Full-Stack Environmental Sustainability Platform",
      date: "Jun 2026",
      badge: "ReactJs • Laravel • Leaflet Maps • MySQL",
      github: "https://github.com/muskanuppal08",
      impact: "70% Reduction in manual facility management effort",
      overview: "Developed a full-stack e-waste management platform enabling users to identify battery damage, access recycling guidance, and locate nearby recycling facilities with interactive Leaflet map navigation.",
      modules: [
        { title: "Module 1: Battery Damage Diagnostics & Guidance Engine", desc: "Step-by-step diagnostic workflows for users to inspect battery swelling or corrosion and obtain safe disposal guidelines." },
        { title: "Module 2: Leaflet Maps & Geo-Facility Locator", desc: "Integrates Leaflet Maps API with Laravel spatial queries to pinpoint nearby certified e-waste recycling centers." },
        { title: "Module 3: Responsive Management Admin Dashboard", desc: "Allows facility operators to manage inventory, track incoming e-waste weight, and handle user requests." },
        { title: "Module 4: Scalable Database & REST API Infrastructure", desc: "Engineered 6+ relational database tables with MySQL and structured JSON REST APIs." }
      ],
      stack: ["React.js", "Laravel", "MySQL", "Leaflet Maps API", "REST APIs", "JSON", "Tailwind CSS"]
    },
    inmemorydb: {
      title: "In-Memory Database Engine",
      subtitle: "Transactional Key-Value Storage & Query Engine",
      date: "Jan 2026",
      badge: "Core Java • Data Structures • ACID Transactions",
      github: "https://github.com/muskanuppal08",
      impact: "Sub-millisecond high-frequency read/write throughput",
      overview: "Architected a custom in-memory key-value database engine supporting nested transactions, rollbacks, atomic operations, and concurrent execution locks.",
      modules: [
        { title: "Module 1: Nested Transaction & Rollback Controller", desc: "Implements BEGIN, COMMIT, and ROLLBACK commands using stacked transactional snapshots." },
        { title: "Module 2: O(1) Hash Indexing & Key-Value Storage", desc: "Optimized memory layout for constant time key lookups, data mutations, and multi-field queries." }
      ],
      stack: ["Core Java", "Algorithms & DSA", "Concurrency Locks", "IntelliJ IDEA"]
    },
    carrental: {
      title: "Car Rental MERN Platform",
      subtitle: "Full-Stack Vehicle Rental & Fleet Management System",
      date: "Sep 2025 - Dec 2026",
      badge: "React.js • Node.js • Express.js • MongoDB",
      github: "https://github.com/muskanuppal08",
      impact: "65% Operations efficiency improvement",
      overview: "Built a full-stack MERN car rental platform featuring role-based User and Admin dashboards, real-time fleet availability toggling, flexible rental options (with or without driver), and automated booking workflows.",
      modules: [
        { title: "Module 1: Role-Based Authentication & Authorization", desc: "Secure JWT user and admin authentication with role-based routing." },
        { title: "Module 2: Admin Real-Time Fleet Control Panel", desc: "Empowers fleet administrators to toggle vehicle availability and adjust daily rental rates." },
        { title: "Module 3: User Booking Engine & Driver Selection", desc: "Allows customers to filter vehicles, select rental duration, and choose self-drive vs. driver options." },
        { title: "Module 4: Scalable REST API & MongoDB Schema", desc: "Constructed 15+ REST APIs and 5 structured MongoDB collections." }
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"]
    },
    strangerthings: {
      title: "Stranger Things Immersive Web Experience",
      subtitle: "Retro Synthwave 80s Audio-Visual UI Showcase",
      date: "Nov 2025",
      badge: "React.js • Web Audio API • Tailwind CSS",
      github: "https://github.com/muskanuppal08",
      impact: "Immersive 80s retro audio-visual web experience",
      overview: "Engineered a Stranger Things themed interactive web application featuring ambient synthwave audio, glowing upside-down world toggles, and episode interactive guides.",
      modules: [
        { title: "Module 1: Interactive Upside-Down Theme Engine", desc: "Real-time state switcher transforming lighting, font glows, and particle backgrounds." },
        { title: "Module 2: Web Audio API Synth Engine", desc: "Generates retro 80s ambient synth soundscapes natively in the browser." }
      ],
      stack: ["React.js", "Web Audio API", "Tailwind CSS", "CSS Keyframe Animations"]
    },
    cocacola: {
      title: "Coca-Cola Creative Brand Experience",
      subtitle: "Vibrant Interactive Product Showcase & 3D UI",
      date: "Oct 2025",
      badge: "React.js • Glassmorphic CSS • Smooth Scroll",
      github: "https://github.com/muskanuppal08",
      impact: "High-engagement glassmorphic promotional showcase",
      overview: "Designed an interactive brand web application featuring dynamic product visualizers, color theme transitions, particle animations, and responsive promotional showcases.",
      modules: [
        { title: "Module 1: Glassmorphic Product Carousel", desc: "Fluid card carousel with dynamic color glow accents matching beverage flavors." },
        { title: "Module 2: Dynamic Color-Shift Engine", desc: "Seamless background color transitions matching scroll position and product interactions." }
      ],
      stack: ["React.js", "Glassmorphism CSS", "Tailwind CSS", "Micro-Interactions"]
    },
    petrofy: {
      title: "Petrofy — Digital Patrolling & Billing System",
      subtitle: "Enterprise Patrolling & Dynamic Billing Platform",
      date: "Feb - May 2025",
      badge: "React • Node / PHP • MySQL / MongoDB",
      github: "https://github.com/muskanuppal08",
      impact: "60% Manual workload reduction via automation",
      overview: "Designed and implemented a digital billing system with real-time dynamic data handling for instant updates, secure REST APIs for CRUD operations, and pagination for large datasets.",
      modules: [
        { title: "Module 1: Real-Time Dynamic Billing Engine", desc: "Calculates patrol billing rates instantly based on distance, shift hours, and fuel consumption." },
        { title: "Module 2: Large Dataset Dynamic Pagination", desc: "Optimized frontend and backend query execution with server-side pagination." },
        { title: "Module 3: Employee Data Automation & Security", desc: "Automates duty assignment logging, employee profile tracking, and secure record storage." }
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "React.js", "MySQL / MongoDB", "PHP / Node.js", "REST APIs"]
    },
    pizzaslider: {
      title: "Pizza-Slider Interactive Component UI",
      subtitle: "Modular React Slider Interface & Carousel Engine",
      date: "Apr 2026",
      badge: "React.js • Tailwind CSS • State Management",
      github: "https://github.com/muskanuppal08",
      impact: "Modular component UI with 60fps micro-animations",
      overview: "Engineered an interactive multi-card slider interface in React with dynamic state management, enabling users to browse categorized pizza menus with next/previous smooth navigation.",
      modules: [
        { title: "Module 1: Component-Driven Reusable UI Architecture", desc: "Architected props-based modular React components keeping code clean and maintainable." },
        { title: "Module 2: Dynamic State Carousel", desc: "Custom hooks and state handling for fluid multi-card transitions." }
      ],
      stack: ["React.js", "JavaScript ES6+", "Tailwind CSS", "UI/UX Design Systems"]
    },
    employeejava: {
      title: "Java Desktop Employee Management System",
      subtitle: "Desktop Swing & AWT Administrative CRUD Application",
      date: "Sep - Dec 2025",
      badge: "Core Java • Java Swing • AWT • JDBC • MySQL",
      github: "https://github.com/muskanuppal08",
      impact: "Clean desktop application following strict OOP principles",
      overview: "Developed a desktop-based Employee Management System in Java, enabling administrators to perform complete CRUD operations on employee records without reliance on web frameworks.",
      modules: [
        { title: "Module 1: Native Java Swing & AWT Graphical Interface", desc: "Designed custom desktop windows, input forms, and record tables." },
        { title: "Module 2: JDBC Relational Data Access Layer", desc: "Integrated MySQL database using JDBC driver to execute prepared SQL queries." }
      ],
      stack: ["Core Java", "Java Swing", "AWT", "JDBC", "MySQL Workbench", "IntelliJ IDEA"]
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen font-sans bg-gradient-to-br from-purple-50 via-indigo-50/50 to-pink-50 text-purple-950">
      
      {/* Header Nav Component */}
      <HeaderNav activeTab={activeTab} onTabChange={handleTabChange} projectCount={Object.keys(projectsData).length} />

      {/* Main Container - Full Screen Width */}
      <main className="pt-28 pb-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {activeTab === 'overview' && (
          <Hero onTabChange={handleTabChange} onOpenProject={(id) => setSelectedProject(id)} />
        )}
        {activeTab === 'projects' && (
          <ProjectsSection onOpenProject={(id) => setSelectedProject(id)} />
        )}
        {activeTab === 'certificates' && <CertificatesSection />}
        {activeTab === 'education' && <EducationSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Project Detail Modal Component */}
      <ProjectModal
        projectKey={selectedProject}
        projectsData={projectsData}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="w-full py-8 text-center text-xs font-semibold text-purple-900/70 border-t border-purple-100 bg-white/40">
        <div className="max-w-[1600px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Muskan Uppal — Designed with SOLID Component Architecture</span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://drive.google.com/drive/folders/1KSsouD3JdV48q32g9Lw8wfs_Iyy7W80M?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-800 font-bold transition-all shadow-sm flex items-center gap-1"
            >
              Verify Credentials Folder 📁
            </a>
            <span>•</span>
            <a href="https://github.com/muskanuppal08" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/muskanuppal08/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}