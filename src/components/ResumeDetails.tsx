"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Terminal, Github } from "lucide-react";

export default function ResumeDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-background border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* COLUMN 1: The Deep End (Education) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">The Deep End</h3>
            </div>
            
            <div className="space-y-6">
              {/* Master Degree - Deep Sea Gradient */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0B192C] via-[#0f2540] to-[#1E3E62] border border-cyan-500/30 shadow-lg shadow-cyan-500/5 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                <span className="inline-block text-[11px] font-bold text-cyan-300 bg-cyan-500/15 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                  Expected May 2027 &bull; GPA: 3.9
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  M.S. in Computer Science
                </h4>
                <p className="text-sm text-neutral-300 font-medium mt-1">
                  University of Maryland, Baltimore County (UMBC)
                </p>
                <p className="text-xs text-neutral-400 mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Baltimore, MD
                </p>
              </motion.div>

              {/* Bachelor Degree */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/[0.02] transition-colors relative overflow-hidden group"
              >
                <span className="inline-block text-[11px] font-bold text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3 group-hover:text-cyan-300 group-hover:bg-cyan-500/15 transition-colors">
                  Aug 2021 &ndash; May 2025 &bull; GPA: 3.0
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  B.E. in Computer Engineering
                </h4>
                <p className="text-sm text-neutral-300 font-medium mt-1">
                  Minor in Data Science &bull; SKNCOE, SPPU
                </p>
                <p className="text-xs text-neutral-400 mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-cyan-400 transition-colors" />
                  Pune, India
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMN 2: Laps & Milestones (Leadership) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Laps & Milestones</h3>
            </div>

            {/* Swimming Pool Lane Timeline */}
            <div className="relative pl-8 ml-3 space-y-10">
              {/* Vertical Lane Line (Tiled pattern) */}
              <div className="absolute left-[9px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-500 rounded-full opacity-60" />
              <div className="absolute left-[6px] top-2 bottom-2 w-[9px] border-l border-r border-dashed border-cyan-400/20 pointer-events-none" />

              {/* IEEE Head */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="relative group cursor-default"
              >
                {/* Floating buoy node */}
                <span className="absolute -left-[38px] top-1 w-[20px] h-[20px] rounded-full bg-cyan-400 border-4 border-background shadow-glow-accent group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
                
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                  Dec 2023 &ndash; May 2025
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  IEEE Volunteers Head
                </h4>
                <p className="text-xs text-neutral-400 font-medium mt-0.5">
                  Smt. Kashibai Navale College of Engineering
                </p>
                <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed border-l-2 border-cyan-400/30 pl-3">
                  Managed end-to-end volunteer operations for large-scale club fests. Strategic deployment of teams to ensure comprehensive multi-location coverage. Optimized resource allocation facilitating smooth execution of national-level events.
                </p>
              </motion.div>

              {/* Event Coordinator */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="relative group cursor-default"
              >
                {/* Floating buoy node */}
                <span className="absolute -left-[38px] top-1 w-[20px] h-[20px] rounded-full bg-blue-500 border-4 border-background shadow-glow-accent group-hover:scale-125 transition-all duration-300" />
                
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest block mb-1">
                  Nov 2023 &ndash; Feb 2024
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Event Coordinator &ndash; Java Code Building
                </h4>
                <p className="text-xs text-neutral-400 font-medium mt-0.5">
                  Techtonic 2024 (National Level Techfest)
                </p>
                <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed border-l-2 border-blue-400/30 pl-3">
                  Directed logistics and live debugging execution managing 50 participants. Coordinated zero-downtime client environments and streamlined registration workflows, significantly increasing structural operational efficiency.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMN 3: The Toolkit (Core Skills & Publication) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-8 relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl backdrop-blur-sm justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">The Toolkit</h3>
              </div>

              {/* Skills Floating Pills Grid */}
              <div className="grid grid-cols-2 gap-3 relative">
                {/* Subtle aquatic gradient glow behind skills */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl pointer-events-none" />
                
                {[
                  { name: "C++", type: "Systems/Core" },
                  { name: "Java", type: "OOP/Backend" },
                  { name: "Python", type: "AI/ML/Scripting" },
                  { name: "SQL / MySQL", type: "Relational DB" },
                  { name: "HTML5", type: "Semantic/Canvas" },
                  { name: "CSS3 / Tailwind", type: "Advanced UI" },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 0 15px rgba(6, 182, 212, 0.25)",
                      borderColor: "rgba(6, 182, 212, 0.4)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="p-3.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">
                      {skill.name}
                    </span>
                    <span className="text-[9px] text-neutral-500 group-hover:text-cyan-400/60 transition-colors block mt-0.5 uppercase tracking-wider font-semibold">
                      {skill.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Research Publication box - aquatic theme */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0B192C]/50 via-[#0f2540]/30 to-[#1E3E62]/40 border border-cyan-500/30 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-cyan-400 mb-3 font-semibold">
                <Award className="w-4 h-4 text-cyan-300 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Research Publication</span>
              </div>
              <h5 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                AI-Powered Video and Image Processing for Video Meetings
              </h5>
              <p className="text-[11px] text-neutral-400 mt-2 font-light leading-relaxed">
                Authored by Ayush Rathod et al. Published in IJARSCT (ISSN: 2581-9429, Vol. 4 Issue 4). Proposes highly optimized Jitsi real-time pipeline algorithms.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Concluding Footer interaction */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-neutral-500 text-sm font-light"
        >
          <p>© {new Date().getFullYear()} Ayush Rathod. Engineered with Next.js 14 & Framer Motion.</p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:ayushrathod03@gmail.com"
              className="text-neutral-400 hover:text-accent-light transition-colors duration-200 font-medium"
            >
              ayushrathod03@gmail.com
            </a>
            <span>&bull;</span>
            <span className="text-neutral-400 font-medium">667-431-0256</span>
            <span>&bull;</span>
            <a
              href="https://github.com/ayushrathod03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-light transition-colors duration-200 flex items-center gap-1.5 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
