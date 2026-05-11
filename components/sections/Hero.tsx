"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  "SCROLL STOPPING CONTENT.",
  "DIFFERENT AUDIENCES.",
  "DIFFERENT PSYCHOLOGY.",
  "ENGINEERED ATTENTION."
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (category: "gen-z" | "professional") => {
    // Lenis is handled by the data-lenis-prevent or standard smooth scrolling
    const element = document.getElementById("archive");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // In a real implementation we would also update the filter state via context or props
      // For now we just dispatch a custom event
      window.dispatchEvent(new CustomEvent('set-category', { detail: category }));
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        src="https://videos.pexels.com/video-files/3205315/3205315-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 px-4">
        
        <div 
          className="h-48 md:h-64 flex items-center justify-center overflow-hidden mix-blend-difference"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)' }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -50, opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-4xl md:text-6xl lg:text-8xl font-display font-medium tracking-[0.05em] text-white"
            >
              {headlines[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Minimal subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/40 font-light"
        >
          Engineering Human Attention
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-20 flex flex-col sm:flex-row gap-8 md:gap-16"
        >
          <button 
            onClick={() => handleScrollTo("gen-z")}
            className="group relative px-6 py-2 overflow-hidden text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors"
          >
            <span className="relative z-10">Discover Gen Z</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left transform scale-x-100 transition-transform duration-700 group-hover:scale-x-0" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
          </button>
          
          <button 
            onClick={() => handleScrollTo("professional")}
            className="group relative px-6 py-2 overflow-hidden text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors"
          >
            <span className="relative z-10">Discover Professional</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left transform scale-x-100 transition-transform duration-700 group-hover:scale-x-0" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
