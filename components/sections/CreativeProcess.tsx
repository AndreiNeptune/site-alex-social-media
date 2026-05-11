"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { title: "HOOK", desc: "Interrupt pattern. Capture attention instantly." },
  { title: "RETENTION", desc: "Sustain focus through pacing and micro-tension." },
  { title: "STORYTELLING", desc: "Deliver value wrapped in narrative." },
  { title: "EDITING", desc: "Sensory optimization. Sound, motion, flow." },
  { title: "DISTRIBUTION", desc: "Algorithmic alignment and social seeding." },
  { title: "PERFORMANCE", desc: "Data-driven iteration and scaling." }
];

export function CreativeProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Precise translation: move by 100vw for each step minus the first one
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 left-6 md:left-12 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-[1px] bg-white/30" />
            <h2 className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 uppercase font-medium">
              The Process
            </h2>
          </motion.div>
        </div>

        <motion.div 
          style={{ x }} 
          className="flex h-full items-center gap-0"
        >
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-10 md:px-32 lg:px-64"
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-6 mb-12">
                  <span className="text-[10px] md:text-xs tracking-[0.4em] text-white/20 font-medium">
                    PHASE 0{i + 1}
                  </span>
                  <div className="h-[1px] w-12 md:w-24 bg-white/10" />
                </div>
                
                <h3 className="text-5xl md:text-7xl lg:text-9xl font-display font-medium tracking-tight text-white mb-8 md:mb-12 uppercase leading-[0.9]">
                  {step.title}
                </h3>
                
                <p className="text-lg md:text-2xl lg:text-3xl text-white/50 font-light leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Progress Bar (Subtle) */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-white/5">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-white/20 origin-left"
          />
        </div>

      </div>
    </section>
  );
}
