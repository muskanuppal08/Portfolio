# Muskan Uppal — Professional Developer Portfolio

A visually stunning, high-performance developer portfolio styled with a dreamy, vibrant pastel aesthetic, featuring glassmorphism, animated mesh backgrounds, and dynamic micro-animations. Built following **SOLID Component Architecture** in React + Vite and Tailwind CSS.

---

## 🚀 Key Features

- 🎨 **Dreamy Pastel Glow Aesthetic**: Combines soft lavender, mint green, warm peach, periwinkle blue, and rose pink with glassmorphism.
- 📦 **SOLID Component Design**: Each section is isolated in its own React component for modularity, clean maintenance, and easy updates.
- 🔍 **Interactive Project Drawer/Modals**: Clicking any project reveals a detailed module-by-module feature breakdown, technology stack, and GitHub links.
- 🏆 **Qualifications & Timeline**: Interactive, visual timeline showcase of education (LPU B.Tech CSE, DAV, Future Foundation) and achievements (National Science Olympiad, 50+ LeetCode DSA solved).
- ⚙️ **Real-Life Contact Form API**: A fully operational backend server (Node.js/Express) that receives, logs, and persists contact messages.

---

## 📁 Component Directory Structure

You can find and update every section independently under the `src/components/` directory:

1. 🧭 `HeaderNav.jsx` — Fixed navigation bar, branding logo, and social link triggers.
2. 🚀 `Hero.jsx` — Catchy hero section, interactive metrics cards, and quick snapshot widgets.
3. 📦 `ProjectsSection.jsx` — Main projects grid featuring category filters.
4. 🔍 `ProjectModal.jsx` — Deep-dive modal window displaying project modules and tech stack tags.
5. 🏆 `CertificatesSection.jsx` — Grid of industry credentials (NPTEL, Infosys Springboard, Coursera, Simplilearn).
6. 🎓 `EducationSection.jsx` — Academic milestone timeline and Olympiad honors.
7. ⚡ `SkillsSection.jsx` — Divided matrix for languages, frameworks, DBs, and tools.
8. 💬 `ContactSection.jsx` — Form with real-life backend fetch calls.

---

## 💼 Integrated Projects Portfolio

- **Green Byte — E-Waste Facility Manager** (Laravel, React, Leaflet Maps, MySQL, 70% effort reduction)
- **In-Memory Database Engine** (Core Java, ACID Transactions, Stacked Rollbacks, O(1) Indexing)
- **Car Rental MERN Platform** (React, Node, Express, MongoDB, 15+ REST APIs, 65% efficiency boost)
- **Stranger Things Immersive Web Experience** (React, Web Audio API, Upside-Down Theme Engine)
- **Coca-Cola Brand UI Showcase** (React, Glassmorphism CSS, flavor color-shift engine)
- **Petrofy — Patrolling & Billing System** (PHP/Node, MySQL/MongoDB, 60% workload reduction)
- **Java Desktop Employee Management System** (Java Swing, AWT, JDBC, MySQL)

---

## ⚙️ Running Locally

### 1. Start the React Frontend App
```bash
npm install
npm run dev
```

### 2. Start the Contact Backend API
```bash
node server/contactServer.js
```
The contact backend server runs on `http://localhost:5000` and saves messages to `server/messages.json`.
