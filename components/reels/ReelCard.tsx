"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reel } from "@/data/reels";
import { cn } from "@/lib/utils";
import { useCinematicSound } from "@/hooks/useSound";

interface ReelCardProps {
  reel: Reel;
  onClick: (reel: Reel) => void;
}

export function ReelCard({ reel, onClick }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { playHover } = useCinematicSound();

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHover();
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      layoutId={`reel-container-${reel.id}`}
      className="group relative cursor-pointer aspect-[4/5] md:aspect-[3/4] w-full max-w-[400px] mx-auto bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(reel)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 overflow-hidden shadow-2xl">
        {/* Video layer with native poster and autoplay */}
        <video
          ref={videoRef}
          src={reel.videoSrc}
          poster={reel.posterSrc}
          className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-125 grayscale-[20%] transition-transform duration-700 group-hover:scale-105"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        />

        {/* Heavy Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
      </div>

      {/* Editorial Content Overlay */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 pointer-events-none">
        <motion.div 
          initial={false}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-start"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">
            {reel.subCategory}
          </span>
          <span className="text-[9px] uppercase tracking-widest text-white/40">
            {reel.retentionPercent} Ret.
          </span>
        </motion.div>

        <motion.div 
          initial={false}
          animate={{ y: isHovered ? 5 : 0, opacity: isHovered ? 0.3 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
        >
          <h3 className="text-3xl md:text-4xl font-display font-medium text-white tracking-wide leading-tight drop-shadow-lg">
            {reel.title}
          </h3>
        </motion.div>

        <motion.div 
          initial={false}
          animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end w-full"
        >
          <p className="text-xs text-white/80 font-light tracking-wide">
            {reel.client}
          </p>
          <div className="w-8 h-[1px] bg-white/40 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}
