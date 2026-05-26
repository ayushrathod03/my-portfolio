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
          {/* COLUMN 1: Education */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent/20 border border-accent/30 text-accent-light">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-10">
              {/* Master Degree */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background transition-transform group-hover:scale-125" />
                <span className="text-xs font-bold text-accent-light uppercase block mb-1">
                  Expected May 2027 &bull; GPA: 3.9
                </span>
                <h4 className="text-lg font-bold text-white">
                  M.S. in Computer Science
                </h4>
                <p className="text-sm text-neutral-400 font-medium mt-0.5">
                  University of Maryland, Baltimore County (UMBC)
                </p>
                <p className="text-xs text-neutral-500 mt-1">Baltimore, MD</p>
              </div>

              {/* Bachelor Degree */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 border-2 border-background transition-transform group-hover:scale-125 group-hover:bg-accent-light" />
                <span className="text-xs font-bold text-neutral-400 uppercase block mb-1">
                  Aug 2021 &ndash; May 2025 &bull; GPA: 3.0
                </span>
                <h4 className="text-lg font-bold text-white">
                  B.E. in Computer Engineering
                </h4>
                <p className="text-sm text-neutral-400 font-medium mt-0.5">
                  Minor in Data Science &bull; SKNCOE, SPPU
                </p>
                <p className="text-xs text-neutral-500 mt-1">Pune, India</p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Leadership & Experience */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent/20 border border-accent/30 text-accent-light">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Leadership</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-10">
              {/* IEEE Head */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background transition-transform group-hover:scale-125" />
                <span className="text-xs font-bold text-accent-light uppercase block mb-1">
                  Dec 2023 &ndash; May 2025
                </span>
                <h4 className="text-lg font-bold text-white">
                  IEEE Volunteers Head
                </h4>
                <p className="text-sm text-neutral-400 font-medium mt-0.5">
                  Smt. Kashibai Navale College of Engineering
                </p>
                <p className="text-xs text-neutral-400 font-light mt-2.5 leading-relaxed">
                  Managed end-to-end volunteer operations for large-scale club fests. Strategic deployment of teams to ensure comprehensive multi-location coverage. Optimized resource allocation facilitating smooth execution of national-level events.
                </p>
              </div>

              {/* Event Coordinator */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 border-2 border-background transition-transform group-hover:scale-125 group-hover:bg-accent-light" />
                <span className="text-xs font-bold text-neutral-400 uppercase block mb-1">
                  Nov 2023 &ndash; Feb 2024
                </span>
                <h4 className="text-lg font-bold text-white">
                  Event Coordinator &ndash; Java Code Building
                </h4>
                <p className="text-sm text-neutral-400 font-medium mt-0.5">
                  Techtonic 2024 (National Level Techfest)
                </p>
                <p className="text-xs text-neutral-400 font-light mt-2.5 leading-relaxed">
                  Directed logistics and live debugging execution managing 50 participants. Coordinated zero-downtime client environments and streamlined registration workflows, significantly increasing structural operational efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Core Skills & Publication */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-accent/20 border border-accent/30 text-accent-light">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Core Skills</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "C++", type: "Systems/Core" },
                  { name: "Java", type: "OOP/Backend" },
                  { name: "Python", type: "AI/ML/Scripting" },
                  { name: "SQL / MySQL", type: "Relational DB" },
                  { name: "HTML5", type: "Semantic/Canvas" },
                  { name: "CSS3 / Tailwind", type: "Advanced UI" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-center"
                  >
                    <span className="text-sm font-bold text-white block">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">
                      {skill.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publication callout box */}
            <div className="mt-12 p-6 rounded-2xl glass-panel relative overflow-hidden group border-accent/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-accent-light mb-2">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Research Publication</span>
              </div>
              <h5 className="text-sm font-bold text-white leading-snug">
                AI-Powered Video and Image Processing for Video Meetings
              </h5>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                Authored by Ayush Rathod et al. Published in IJARSCT (ISSN: 2581-9429, Vol. 4 Issue 4). Proposes highly optimized Jitsi real-time pipeline algorithms.
              </p>
            </div>
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
