"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CategorySplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Fast, kinetic motion for Gen Z
  const genZY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const genZRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  // Slow, cinematic parallax for Professional
  const proY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const proOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-black overflow-hidden flex flex-col md:flex-row">
      
      {/* Gen Z Side */}
      <div className="w-full md:w-1/2 min-h-[60vh] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/10">
        <motion.div 
          style={{ y: genZY, rotate: genZRotate }}
          className="relative text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-black italic tracking-tighter text-white uppercase leading-none"
          >
            Gen Z
          </motion.h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
            {["Kinetic", "Internet-Native", "Fast", "Aggressive"].map((tag, i) => (
              <span key={i} className="text-xs uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Professional Side */}
      <div className="w-full md:w-1/2 min-h-[60vh] flex items-center justify-center p-8 relative">
        <motion.div 
          style={{ y: proY, opacity: proOpacity }}
          className="relative text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-white uppercase leading-relaxed">
            Professional
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="w-[1px] h-12 bg-white/20" />
            <p className="text-xs tracking-[0.2em] text-white/50 uppercase max-w-[200px]">
              Luxury. Cinematic. Timeless.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
