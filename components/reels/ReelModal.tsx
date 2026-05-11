"use client";

import { useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { Reel } from "@/data/reels";
import { X } from "lucide-react";
import { useCinematicSound } from "@/hooks/useSound";

interface ReelModalProps {
  reel: Reel;
  onClose: () => void;
}

export function ReelModal({ reel, onClose }: ReelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { playImpact } = useCinematicSound();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    playImpact();
    return () => {
      document.body.style.overflow = "";
    };
  }, [playImpact]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col md:flex-row overflow-hidden"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 p-4 z-50 group"
      >
        <div className="relative flex items-center justify-center">
          <X className="w-6 h-6 text-white/50 group-hover:text-white transition-colors duration-500" />
          <div className="absolute inset-0 scale-0 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />
        </div>
      </button>

      {/* Video Container (Left) */}
      <motion.div 
        layoutId={`reel-container-${reel.id}`}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        className="relative w-full h-[50vh] md:w-[45%] md:h-full bg-black border-r border-white/5 flex items-center justify-center cursor-grab active:cursor-grabbing md:cursor-default"
      >
        <div className="w-full h-full md:p-12 md:pb-12 pb-0">
          <video
            ref={videoRef}
            src={reel.videoSrc}
            className="w-full h-full object-cover md:rounded-lg shadow-2xl"
            autoPlay
            loop
            controls={false}
            playsInline
          />
        </div>
        {/* Swipe indicator mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/20 md:hidden pointer-events-none" />
      </motion.div>

      {/* Breakdown Panel (Right) */}
      <div className="w-full h-[50vh] md:w-[55%] md:h-full overflow-y-auto px-6 py-12 md:p-24 hide-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-8 bg-white/30" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
                Creative Breakdown
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-wide leading-tight mb-4">
              {reel.title}
            </h2>
            <p className="text-sm text-white/40 tracking-widest uppercase">
              {reel.client} — {reel.niche}
            </p>
          </div>

          {/* Advanced Metrics (Monochrome, Typography-driven) */}
          <div className="grid grid-cols-3 gap-y-10 gap-x-4 mb-20 border-y border-white/10 py-10">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">Total Views</span>
              <span className="text-2xl md:text-3xl font-light text-white">{reel.views}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">Watch Time</span>
              <span className="text-2xl md:text-3xl font-light text-white">{reel.watchTime}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">Retention</span>
              <span className="text-2xl md:text-3xl font-light text-white">{reel.retentionPercent}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">Replay Factor</span>
              <span className="text-xl md:text-2xl font-light text-white">{reel.replayFactor}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">Saves/Shares</span>
              <span className="text-xl md:text-2xl font-light text-white">{reel.saves} / {reel.shares}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">CTR Impact</span>
              <span className="text-xl md:text-2xl font-light text-white">{reel.ctrIncrease}</span>
            </div>
          </div>

          {/* Psychological Breakdown */}
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] pt-1">Objective</h4>
              <p className="text-white/90 font-light leading-relaxed text-sm md:text-base">
                {reel.objective}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] pt-1">Hook Strategy</h4>
              <p className="text-white/90 font-light leading-relaxed text-sm md:text-base">
                {reel.hookStrategy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] pt-1">Retention</h4>
              <p className="text-white/90 font-light leading-relaxed text-sm md:text-base">
                {reel.retentionTactic}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] pt-1">Pacing</h4>
              <p className="text-white/90 font-light leading-relaxed text-sm md:text-base">
                {reel.emotionalPacing}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 border-t border-white/5 pt-12">
              <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] pt-1">Architecture</h4>
              <div className="flex flex-col gap-2 text-sm text-white/60 font-light">
                <p>Audience: <span className="text-white/90">{reel.audienceType}</span></p>
                <p>Pattern: <span className="text-white/90">{reel.attentionPattern}</span></p>
                <p>CTA Logic: <span className="text-white/90">{reel.ctaLogic}</span></p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
