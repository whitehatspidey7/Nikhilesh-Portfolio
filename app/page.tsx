'use client'; 

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, ExternalLink, Cpu, Send, FileDown, Terminal, GitBranch, Activity, CheckCircle2, Target } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  
  // Typewriter State
  const [typedName, setTypedName] = useState("");
  const fullName = "NIKHILESH EATI";

  // Mouse & Clock Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(clockInterval);
    };
  }, []);

  // Typewriter Effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nameParts = typedName.split(' ');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-cyan-500/30 relative overflow-hidden antialiased">
      
      {/* Subtle High-End Noise & Grid Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Soft Cyan/Indigo Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.07), rgba(139, 92, 246, 0.03), transparent 50%)`
        }}
      />

      {/* Top Telemetry & Nav Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#030712]/70 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-xl tracking-tighter text-white cursor-pointer" onClick={(e) => scrollToSection(e, 'hero')}>NE<span className="text-cyan-400">.</span></span>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              IST  {currentTime || "CALCULATING..."}
            </div>
          </div>

          <nav className="flex gap-6 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-cyan-400 transition-colors">/Experience</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-cyan-400 transition-colors">/Builds</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-cyan-400 transition-colors">/Arsenal</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">/Connect</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-36 relative z-20">
        
        {/* HERO SECTION */}
        <motion.section 
          id="hero" 
          className="pt-12 md:pt-24 max-w-4xl scroll-mt-32 min-h-[50vh]"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest mb-6 uppercase">
            <Terminal size={14} /> Software Engineer & Full Stack Developer
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-8">
            {nameParts[0]}
            {nameParts.length > 1 && (
              <>
                <br />
                {nameParts[1]}
              </>
            )}
            {typedName.length === fullName.length ? (
              <span className="text-cyan-400">.</span>
            ) : (
              <span className="animate-pulse text-cyan-400">_</span>
            )}
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed mb-10 max-w-2xl">
            Full Stack Developer bridging the gap between intricate backend architectures and seamless user experiences. My work spans real-time distributed networks, generative AI integrations, and robust API design. From optimizing enterprise data pipelines to building secure collaborative platforms, I engineer solutions that are scalable, efficient, and resilient.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center pt-2">
            <a href="mailto:nikhileshofficial28@gmail.com?subject=Reaching%20out%20from%20your%20Portfolio" className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-7 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(6,182,212,0.3)] text-sm">
              <Send size={16} /> Email Me
            </a>
            <a href="/NIKHILESH_RESUME_2026.pdf" download="NIKHILESH_RESUME_2026.pdf" className="flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white px-7 py-4 rounded-xl font-semibold transition-all text-sm">
              <FileDown size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/10 pt-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Checkout my //</span>
            <div className="flex flex-wrap gap-6 font-mono text-sm uppercase tracking-wider">
              <a href="https://github.com/whitehatspidey7" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                <FaGithub size={18} className="group-hover:text-white transition-colors" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/nikhilesh-eati-705644251/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                <FaLinkedin size={18} className="group-hover:text-cyan-400 transition-colors" /> LinkedIn
              </a>
              <a href="https://leetcode.com/u/tonystank3000/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group">
                <Code2 size={18} className="group-hover:text-amber-400 transition-colors" /> LeetCode
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <motion.section 
          id="experience" className="space-y-8 scroll-mt-28"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Activity className="text-cyan-400" size={24} />
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Production Footprint</h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">SYSTEM_LOGS // TIMELINE</span>
          </motion.div>

          <div className="border-l border-white/10 ml-3 sm:ml-4 space-y-16 py-4">
            
            {/* Boeing Node */}
            <motion.div variants={fadeInUp} className="relative pl-8 sm:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3 border border-cyan-500/20">
                    Boeing India // Aug 2025 – Present
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Software Development Executive Apprentice</h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/40 px-3 py-2 rounded-lg border border-white/5 w-fit">
                  <CheckCircle2 size={14} className="text-emerald-400" /> STATUS: ACTIVE DEPLOYMENT
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-slate-300 text-sm leading-relaxed font-light">
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 space-y-2 hover:bg-white/[0.04] transition-colors">
                  <span className="text-cyan-400 font-mono text-xs block">01 / SCHEMA OPTIMIZATION</span>
                  <p>Owned development of a production-grade .NET/WPF data analysis tool, implementing a high-performance SQLite schema to transform unstructured flight records into structured, queryable insights.</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 space-y-2 hover:bg-white/[0.04] transition-colors">
                  <span className="text-cyan-400 font-mono text-xs block">02 / LOW-LATENCY PROTOCOLS</span>
                  <p>Engineered a real-time event-driven override system in C# using MQTTnet, architecting a low-latency pub/sub messaging protocol that eliminated manual simulation errors.</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 space-y-2 hover:bg-white/[0.04] transition-colors">
                  <span className="text-cyan-400 font-mono text-xs block">03 / DISTRIBUTED MIGRATION</span>
                  <p>Contributed to the migration of a large-scale synthetic trainer to Unity 6, resolving complex API deprecations and maintaining 100% functional parity across distributed modules.</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 space-y-2 hover:bg-white/[0.04] transition-colors">
                  <span className="text-cyan-400 font-mono text-xs block">04 / AI REINFORCEMENT & DEPLOYMENT</span>
                  <p>Architected automated MSI builds to streamline enterprise simulation pipelines. Built an AI grading app in React Native (Expo) + TS with identity OAuth, alongside a React dashboard for model evaluation feedback pairs.</p>
                </div>
              </div>
            </motion.div>

            {/* College Node */}
            <motion.div variants={fadeInUp} className="relative pl-8 sm:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono mb-3 border border-white/10">
                    IIIT Dharwad // Nov 2022 – May 2026
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">B.Tech Computer Science & Engineering</h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/40 px-3 py-2 rounded-lg border border-white/5 w-fit">
                  <Target size={14} className="text-slate-400" /> GPA: 8.81/10
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-light max-w-3xl">
                Focusing on core principles in Distributed Systems, Data Structures & Algorithms, and modern web architecture. Organizing team-based technical builds and participating in continuous software evaluation.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* BENTO BOX PROJECTS SHOWCASE */}
        <motion.section 
          id="projects" className="space-y-8 scroll-mt-28"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <GitBranch className="text-cyan-400" size={24} />
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Engineered Systems</h3>
            </div>
            <span className="text-xs font-mono text-slate-500"></span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Flagship: Compeer (Spans 2 cols) */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">FLAGSHIP CRDT ENGINE</span>
                  <a href="https://github.com/whitehatspidey7/Compeer--the-collaborative-code-interview-platform" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View Compeer IDE on GitHub">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h4 className="text-3xl font-bold text-white mb-3 tracking-tight">Compeer — Collaborative Interview IDE</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Built a scalable multi-user IDE utilizing Monaco Editor and Y.js (CRDTs) for conflict-free real-time sync across distributed servers via Redis pub/sub. Features WebRTC peer-to-peer video/audio exchange via a custom signaling server, backed by Docker-sandboxed execution.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['Next.js', 'TypeScript', 'Socket.io', 'Y.js', 'Redis', 'WebRTC', 'PostgreSQL', 'Prisma', 'Docker'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2.5 py-1 rounded text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Project 2: CI/CD Analyzer */}
            <motion.div variants={fadeInUp} className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-500">DEVSECOPS</span>
                  <a href="https://github.com/whitehatspidey7/DevSecOps-Pipeline-Vulnerability-Analyzer" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View CI/CD Analyzer on GitHub">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">CI/CD Pipeline Vulnerability Analyzer</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Python backend analyzing GitHub Actions workflows for security misconfigurations via rule-based scanning. Integrates local LLMs (Ollama) to auto-generate remediated YAML configurations.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['Python', 'GitHub Actions', 'Ollama', 'Shell'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2 py-1 rounded text-slate-400">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Project 3: FeistelChat */}
            <motion.div variants={fadeInUp} className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-500">CRYPTOGRAPHY</span>
                  <a href="https://github.com/whitehatspidey7/Feistel-Chat" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View FeistelChat on GitHub">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">FeistelChat</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Web-based chat application incorporating custom Feistel cipher encryption. Messages undergo mathematical encryption prior to transmission, strictly decrypting only upon retrieval.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['React.js', 'Node.js', 'Socket.io', 'Express.js'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2 py-1 rounded text-slate-400">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Project 4: Task Management */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-500">ENTERPRISE MERN</span>
                  <a href="https://github.com/whitehatspidey7/TaskFlow-Role-Based-Task-Management-Platform" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View Task Management System on GitHub">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Task Management System</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Full-stack MERN application featuring strict role-based access control (RBAC) and complete task lifecycle tracking. Designed RESTful APIs secured with JWT authentication, implemented Redux Toolkit for complex global state, and built a dynamic filtering dashboard.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind', 'JWT'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2.5 py-1 rounded text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Project 5: Mobi-Insurance */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-500">DATABASE AUTOMATION</span>
                  <a href="https://github.com/whitehatspidey7/Mobi-insurance" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View Mobi-Insurance Platform on GitHub">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Mobi-Insurance Platform</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Dual-interface web application connecting insurance staff with vehicle owners. Engineered automated MySQL triggers and stored procedures to handle incident claims, verify records, and enforce strict relational consistency across user tiers.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['HTML/CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL Triggers'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2.5 py-1 rounded text-slate-400">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Project 6: Streamflix */}
            <motion.div variants={fadeInUp} className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-500">DYNAMIC UI</span>
                  <a href="https://github.com/whitehatspidey7/VidTube" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" aria-label="View Streamflix on GitHub">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Streamflix</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Dynamic YouTube-inspired media application. Built modular video upload pipelines, seamless playback controllers, personalized profiles, and deep search filtering.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['React.js', 'CSS', 'Node.js', 'REST API'].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-black/50 border border-white/10 px-2 py-1 rounded text-slate-400">{t}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* SKILLS & EDUCATION TAXONOMY */}
        <motion.section 
          id="skills" className="space-y-8 scroll-mt-28"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Cpu className="text-cyan-400" size={24} />
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Technical Taxonomy</h3>
            </div>
            <span className="text-xs font-mono text-slate-500">IIIT DHARWAD // B.TECH CSE (GPA: 8.81)</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {[
              { cat: "LANGUAGES", items: ['TypeScript', 'JavaScript (ES6+)', 'C#', 'Python', 'C++', 'SQL', 'Bash'] },
              { cat: "SYSTEMS & CS", items: ['Distributed Systems', 'WebRTC', 'CRDTs (Y.js)', 'RBAC', 'JWT / OAuth', 'RAG / DSA', 'Docker / CI/CD'] },
              { cat: "BACKEND & DBS", items: ['Node.js', 'Express.js', '.NET / WPF', 'FastAPI', 'Pydantic', 'PostgreSQL', 'Redis', 'MongoDB / SQLite', 'ChromaDB'] },
              { cat: "FRONTEND", items: ['Next.js', 'React.js', 'React Native', 'Expo', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3'] }
            ].map((col, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-black/40 border border-white/[0.07] p-6 rounded-2xl space-y-4">
                <div className="text-cyan-400 flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {col.cat}
                </div>
                <ul className="space-y-2.5 text-slate-400">
                  {col.items.map(s => <li key={s} className="flex items-center gap-2"><span className="text-slate-600">›</span>{s}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONNECT / FOOTER */}
        <motion.section 
          id="contact" className="py-16 scroll-mt-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
        >
          <div className="border border-white/10 rounded-3xl p-10 sm:p-20 text-center relative bg-gradient-to-t from-cyan-950/20 to-transparent">
            <h3 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Let’s build something <span className="underline decoration-cyan-400">scalable</span>.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto font-light mb-10 text-sm sm:text-base">
             Wanna discuss something, suggest something, have an opportunity for me?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:nikhileshofficial28@gmail.com" className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl">
                nikhileshofficial28@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nikhilesh-eati-705644251/" target="_blank" rel="noreferrer" className="bg-black border border-white/15 hover:border-cyan-400 text-white px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                <FaLinkedin className="text-cyan-400" size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

      </main>
      
      <footer className="border-t border-white/5 py-8 text-center text-xs font-mono text-slate-600">
        <p>NIKHILESH EATI // IIIT DHARWAD BATCH OF 2026 // +91 7981394891</p>
      </footer>
    </div>
  );
};

export default Portfolio;