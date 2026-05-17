import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import ResumeDetails from "@/components/ResumeDetails";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-background selection:bg-accent selection:text-white">
      {/* 
        Component 1 & 2: The Sticky Scroller & Parallax Overlay
        Wraps the 500vh tracking container, custom WebP sequence canvas scrubbing,
        and synchronized parallax text layers tailored to Ayush Rathod.
      */}
      <ScrollyCanvas />

      {/* 
        Component 3: The Work Grid Showcase
        Positioned sequentially below the 500vh cinematic scrubbing container.
        Features interactive glassmorphism layout cards featuring Ayush's 4 core published projects.
      */}
      <Projects />

      {/* 
        Component 4: Core Resume Details
        Presents Education (M.S. & B.E.), Technical Skills Grid,
        Leadership experience, Research Publications, and direct contact widgets.
      */}
      <ResumeDetails />
    </main>
  );
}
