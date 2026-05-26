"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Github } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1 Transforms (0% to 22%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], ["0%", "-60%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.22], [1, 0.95]);

  // Section 2 Transforms (22% to 52%)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.45, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.52], ["40%", "-40%"]);

  // Section 3 Transforms (52% to 95%)
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.95], ["40%", "-40%"]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
      {/* SECTION 1: Center Aligned Hero */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-glow-accent pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-neutral-300 uppercase">
            M.S. CS @ UMBC &bull; Creative Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-sm"
        >
          AYUSH RATHOD <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-white to-neutral-400 block mt-2">
            Bridging AI, Systems & Design
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl font-light leading-relaxed"
        >
          Computer Science graduate engineer leveraging machine learning, high-performance C++/Python pipelines, and immersive web architectures to engineer state-of-the-art applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4 justify-center pointer-events-auto text-sm text-neutral-400 font-light"
        >
          <a href="mailto:ayushrathod03@gmail.com" className="hover:text-accent-light transition-colors">
            ayushrathod03@gmail.com
          </a>
          <span>&bull;</span>
          <a href="tel:6674310256" className="hover:text-accent-light transition-colors">
            667-431-0256
          </a>
          <span>&bull;</span>
          <a
            href="https://github.com/ayushrathod03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </motion.div>

      {/* SECTION 2: Left Aligned Feature */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 max-w-xl pr-4"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold tracking-widest text-accent-light uppercase mb-3 block">
            01 // CORE FOCUS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Architectures.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Integrating robust machine learning models like real-time YOLO object detection, isolation forests, and PyTorch NLP classifiers directly into seamless production ecosystems.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>
      </motion.div>

      {/* SECTION 3: Right Aligned Feature */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-6 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-xl pl-4 text-right ml-auto"
      >
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold tracking-widest text-accent-light uppercase mb-3 block">
            02 // FULL-STACK EXECUTION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Scalable backend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-neutral-200 to-neutral-500">
              engineering.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-md">
            Architecting high-concurrency systems, SQL/PLSQL relational schemas, and low-latency APIs powered by C++, Python, and robust database layers.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-l from-accent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
