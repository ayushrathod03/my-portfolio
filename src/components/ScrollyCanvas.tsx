"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 160;

const BASE_PATH = process.env.NODE_ENV === "production" ? "/my-portfolio" : "";

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `${BASE_PATH}/sequence/frame_${paddedIndex}_delay-0.05s.webp`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames to guarantee zero lag/flickering during scrubbing
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
        // Draw the very first frame as soon as it loads
        if (i === 0 && canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
          }
        }
      };
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, []);

  // Scrub through frames on scroll progress change
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;

    // Map 0-1 progress to frame index
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES)
    );

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Ensure internal canvas resolution perfectly matches the source image aspect ratio
        if (canvas.width !== img.width || canvas.height !== img.height) {
          canvas.width = img.width || 1920;
          canvas.height = img.height || 1080;
        }
        ctx.drawImage(img, 0, 0);
      }
    }
  });

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-background">
      {/* Loading Progress Bar for initial visual feedback */}
      {!imagesLoaded && (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-background">
          <div
            className="h-full bg-accent transition-all duration-150 ease-out"
            style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
          />
        </div>
      )}

      {/* Sticky tracking layer containing the Canvas and synchronized Parallax Overlay */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          id="hero-scrolly-canvas"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Absolute dark overlay gradient to guarantee crisp readable text blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />

        {/* Parallax Overlay sections synchronized perfectly with container scroll */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
