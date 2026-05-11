"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockReels, Reel, ReelCategory } from "@/data/reels";
import { ReelCard } from "@/components/reels/ReelCard";
import { ReelModal } from "@/components/reels/ReelModal";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ReelsArchive() {
  const [activeCategory, setActiveCategory] = useState<ReelCategory | "all">("all");
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  useEffect(() => {
    const handleSetCategory = (e: Event) => {
      const customEvent = e as CustomEvent<ReelCategory>;
      setActiveCategory(customEvent.detail);
    };
    window.addEventListener("set-category", handleSetCategory);
    return () => window.removeEventListener("set-category", handleSetCategory);
  }, []);

  const filteredReels = activeCategory === "all" 
    ? mockReels 
    : mockReels.filter(r => r.category === activeCategory);

  return (
    <section id="archive" className="relative w-full py-32 md:py-64 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 md:mb-48 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] md:text-xs tracking-[0.5em] text-white/50 uppercase mb-8 block"
            >
              The Archive
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white leading-tight">
              A curated system of <br />
              <span className="italic opacity-80">attention engineering.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12">
            {["all", "gen-z", "professional"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={cn(
                  "text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-700 relative pb-2 group",
                  activeCategory === cat ? "text-white" : "text-white/50 hover:text-white/80"
                )}
              >
                <span className="relative z-10">{cat === "all" ? "All" : cat === "gen-z" ? "Gen Z" : "Pro"}</span>
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white/60"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
              </button>
            ))}
          </div>
        </div>

        {/* Floating Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-32 md:gap-y-64">
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2, 
                  delay: (index % 3) * 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={cn(
                  "relative",
                  // Asymmetrical vertical offsets
                  index % 3 === 1 ? "lg:mt-48" : "",
                  index % 3 === 2 ? "lg:mt-24" : ""
                )}
              >
                <ReelCard reel={reel} onClick={setSelectedReel} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Minimal hidden link to archive */}
        <div className="mt-48 flex justify-center">
          <Link 
            href="/archive" 
            className="text-[9px] tracking-[0.6em] uppercase text-white/5 hover:text-white/20 transition-colors duration-1000"
          >
            Access Full Archive
          </Link>
        </div>

      </div>

      {/* Immersive Modal */}
      <AnimatePresence>
        {selectedReel && (
          <ReelModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
