"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Wait 2.8s total for the sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
        >
          {/* Subtle noise layer specifically for loading screen to give it texture before main noise loads */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-white text-sm md:text-lg tracking-[0.3em] font-light uppercase text-center"
            >
              Alexandru Balasoiu
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-4">
             <motion.p
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: "0%", opacity: 0.5 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
               className="text-white text-xs tracking-[0.2em] font-light uppercase"
             >
               Attention Engineering
             </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
