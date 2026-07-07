"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Terminal, Award } from "lucide-react";

interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  descriptionPoints: string[];
  techStack: string[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  certificateUrl?: string;
}

const INTERNSHIPS: Internship[] = [
  {
    id: "jpmc",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Job Simulation (Forage)",
    period: "July 2026",
    location: "Virtual Experience",
    certificateUrl: "https://drive.google.com/file/d/1UoS1AwiAh0JmrG9fzLjcGe1HXQDQVuOR/view?usp=drive_link",
    descriptionPoints: [
      "Integrated Apache Kafka into a Spring Boot microservice to consume high-volume transaction messages, implementing robust validation and persistent storage logic via Spring Data JPA with an H2 SQL database.",
      "Connected the microservice to an external REST Incentive API using RestTemplate and built secure consumer-facing endpoints to deliver clean-boundary, optimized JSON responses.",
      "Verified system behavior using Maven test suites and debugger-driven inspection, ensuring full end-to-end reliability across message ingestion, database operations, and API integrations."
    ],
    techStack: [
      "Spring Boot",
      "Apache Kafka",
      "Spring Data JPA",
      "H2 Database",
      "RestTemplate",
      "Java",
      "Maven",
      "REST APIs"
    ],
    gradientFrom: "from-[#0A2240]",
    gradientTo: "to-[#1C3B5E]",
    accentColor: "text-blue-400"
  }
];

export default function Internships() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-background overflow-hidden z-20 border-t border-white/5">
      {/* Dynamic ambient glow behind internships */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
                Professional Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Internships:
            </h2>
          </div>
          <p className="text-neutral-400 font-light max-w-md text-base sm:text-lg">
            Applying core software engineering concepts to industry-standard tool chains, enterprise microservices, and system design pipelines.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-10">
          {INTERNSHIPS.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-blue-500/20 hover:shadow-glow-accent transition-all duration-500 p-8 md:p-10"
            >
              {/* Responsive layout - grid for larger screens, stack for mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left side: Company details, role, date */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${internship.gradientFrom} ${internship.gradientTo} border border-blue-500/20 flex items-center justify-center mb-6 shadow-md`}>
                      <Server className="w-6 h-6 text-blue-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300">
                      {internship.company}
                    </h3>
                    
                    <p className="text-neutral-400 font-medium mt-2 leading-snug">
                      {internship.role}
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-4 lg:pt-0">
                    <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
                      <Calendar className="w-4.5 h-4.5 text-blue-400/80" />
                      <span>{internship.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
                      <MapPin className="w-4.5 h-4.5 text-blue-400/80" />
                      <span>{internship.location}</span>
                    </div>

                    {internship.certificateUrl && (
                      <div className="pt-4">
                        <motion.a
                          href={internship.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 text-sm font-semibold transition-all duration-300 shadow-md shadow-blue-500/5 group cursor-pointer"
                        >
                          <Award className="w-4 h-4 transition-transform group-hover:rotate-12" />
                          <span>View Certificate</span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side: Detailed achievements points & tech badges */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-8 lg:pl-6 lg:border-l lg:border-white/5">
                  <div className="space-y-4">
                    {internship.descriptionPoints.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 className="w-4.5 h-4.5 text-blue-400/80 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills/Tech Badges */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                        Technologies Deployed
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {internship.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/5 text-neutral-300 font-medium border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
