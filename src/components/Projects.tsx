"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, BookOpen } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  published?: string;
}

const PROJECTS: Project[] = [
  {
    id: "ai-video-meetings",
    title: "AI-Powered Video & Image Processing",
    category: "Computer Vision & WebRTC",
    description: "Real-time meeting architecture featuring low-latency background blurring, live facial recognition, and noise suppression. Powered by real-time YOLO object detection, OCR, TensorFlow, MySQL, and WebRTC integration on a custom Jitsi server core.",
    image: "/my-portfolio/projects/ai_video.png",
    tags: ["YOLO", "TensorFlow", "WebRTC", "OCR", "MySQL", "Jitsi"],
    link: "#",
    published: "Published in IJARSCT (Vol. 4, Issue 4)",
  },
  {
    id: "ecommerce-management",
    title: "E-Commerce Management System",
    category: "Full-Stack Enterprise Core",
    description: "Architected a comprehensive platform using PHP, Python, and HTML/CSS to streamline digital storefront operations. Engineered robust SQL and PL/SQL structured schemas enabling secure user registration, automated order workflows, and administrative inventory portals.",
    image: "/my-portfolio/projects/ecommerce.png",
    tags: ["PHP", "Python", "SQL", "PL/SQL", "HTML/CSS"],
    link: "#",
  },
  {
    id: "nlp-classification",
    title: "Deep NLP Sentence Classifier",
    category: "Natural Language Processing",
    description: "Developed a robust multi-class text classification architecture utilizing PyTorch to categorize sophisticated natural language streams. Evaluated optimization performance via custom training loops, Softmax Regression, and aggressive hyperparameter tuning.",
    image: "/my-portfolio/projects/nlp_model.png",
    tags: ["PyTorch", "NLP", "Softmax Regression", "Deep Learning"],
    link: "#",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Anomaly Engine",
    category: "Machine Learning / Security",
    description: "Engineered a high-precision ML detection ecosystem identifying fraudulent transactional vectors utilizing custom Isolation Forest and DBSCAN algorithms. Optimized feature sets to achieve over 90% precision, augmented by custom Python real-time dashboards.",
    image: "/my-portfolio/projects/fraud_detection.png",
    tags: ["Isolation Forest", "DBSCAN", "Python", "Data Visualization"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-background overflow-hidden z-20">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
                Academic & Research Engineering
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-neutral-400 font-light max-w-md text-base sm:text-lg">
            Showcasing scalable multi-stack implementations, production security engines, and advanced machine learning models.
          </p>
        </motion.div>

        {/* Work Grid - perfectly balanced 2x2 layout for 4 premium projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col transition-all duration-300 hover:shadow-glow-accent hover:border-accent/40"
            >
              {/* Image Thumbnail Container */}
              <div className="relative w-full h-72 overflow-hidden bg-neutral-900/50 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                
                {/* Publication badge overlay if available */}
                {project.published && (
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent/80 text-white text-xs font-semibold backdrop-blur-md border border-white/10">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{project.published}</span>
                  </div>
                )}

                {/* Floating link button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 border border-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:rotate-45" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-accent-light uppercase block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-md bg-white/5 text-neutral-300 font-medium border border-white/5 hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
