import React from 'react';

export default function CertificatesSection() {
  const certs = [
    {
      title: "Cloud Computing Certification",
      issuer: "NPTEL • National Programme",
      date: "Jan - Apr 2025",
      badge: "NPTEL Certified",
      pillClass: "bg-purple-100 text-purple-800",
      borderColor: "border-l-purple-500",
      desc: "Comprehensive mastery of cloud architectures, virtualization, IaaS/PaaS/SaaS models, and distributed systems."
    },
    {
      title: "Build Generative AI Apps & Solutions",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      badge: "Infosys Certified",
      pillClass: "bg-pink-100 text-pink-800",
      borderColor: "border-l-pink-500",
      desc: "Designing AI-powered workflows, no-code solutions, and implementing LLM integrations for real-world tasks."
    },
    {
      title: "ChatGPT-4 Prompt Engineering & LLM",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      badge: "Infosys Certified",
      pillClass: "bg-amber-100 text-amber-800",
      borderColor: "border-l-amber-500",
      desc: "Advanced prompt engineering techniques, zero-shot/few-shot learning, and Generative AI application optimization."
    },
    {
      title: "Packet Switching Networks & Algorithms",
      issuer: "Coursera",
      date: "Nov 2024",
      badge: "Coursera Verified",
      pillClass: "bg-blue-100 text-blue-800",
      borderColor: "border-l-blue-500",
      desc: "Deep dive into network protocols, packet routing algorithms, data link layer framing, and switching hardware principles."
    },
    {
      title: "Computer Communication Systems",
      issuer: "Coursera",
      date: "Sep - Nov 2024",
      badge: "Coursera Verified",
      pillClass: "bg-teal-100 text-teal-800",
      borderColor: "border-l-teal-500",
      desc: "Foundational principles of digital signal transmission, OSI layer architecture, and network security concepts."
    },
    {
      title: "TCP/IP Advanced Networking Topics",
      issuer: "Coursera",
      date: "Aug - Nov 2024",
      badge: "Coursera Verified",
      pillClass: "bg-indigo-100 text-indigo-800",
      borderColor: "border-l-indigo-500",
      desc: "Advanced IP addressing, subnetting, TCP flow control, congestion avoidance, and socket-level network logic."
    },
    {
      title: "Introduction to Basics of Finance",
      issuer: "Simplilearn",
      date: "Oct 2023",
      badge: "Simplilearn",
      pillClass: "bg-emerald-100 text-emerald-800",
      borderColor: "border-l-emerald-500",
      desc: "Financial literacy, budgeting models, corporate financial fundamentals, and economic analysis principles."
    },
    {
      title: "Java LeetCode & Programming Bootcamp",
      issuer: "Lovely Professional University",
      date: "Jun - Jul 2025",
      badge: "LPU Summer Internship",
      pillClass: "bg-violet-100 text-violet-800",
      borderColor: "border-l-violet-500",
      desc: "Intensive Java programming, OOP, Data Structures & Algorithms, JDBC, and building Desktop CRUD systems."
    }
  ];

  return (
    <section id="section-certificates" className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">Verified Qualifications</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-purple-950 mt-3 mb-4">
          Certificates & <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 bg-clip-text text-transparent">Specialized Training</span>
        </h2>
        <p className="text-purple-900/80 text-base">
          Explore official industry certifications in Cloud Computing, Generative AI, Prompt Engineering, Computer Networks, and Java Development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, idx) => (
          <div key={idx} className={`glass-card rounded-3xl p-6 border-l-4 ${c.borderColor} bg-white/75 backdrop-blur-xl border border-purple-100 shadow-md`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.pillClass}`}>{c.badge}</span>
              <span className="text-xs font-bold text-purple-600">{c.date}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-purple-950 mb-2">{c.title}</h3>
            <p className="text-xs text-purple-900/80 mb-4 leading-relaxed">{c.desc}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-purple-100/60">
              <span className="text-xs font-bold text-purple-700">Issuer: {c.issuer}</span>
              <a
                href="https://drive.google.com/drive/folders/1KSsouD3JdV48q32g9Lw8wfs_Iyy7W80M?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-xs transition-all flex items-center gap-1 shadow-sm"
              >
                View File 🔍
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
