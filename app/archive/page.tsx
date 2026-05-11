"use client";

import { motion } from "framer-motion";
import { mockReels } from "@/data/reels";
import { ReelCard } from "@/components/reels/ReelCard";
import { useState } from "react";
import { Reel } from "@/data/reels";
import { ReelModal } from "@/components/reels/ReelModal";
import Link from "next/link";

export default function ArchivePage() {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  return (
    <main className="bg-black min-h-screen py-24 md:py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <header className="mb-24">
          <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-12 inline-block">
            ← Return to Curation
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-4">
            Master Archive
          </h1>
          <p className="text-sm text-white/40 tracking-widest uppercase">
            A deep repository of attention systems.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} onClick={setSelectedReel} />
          ))}
        </div>
      </div>

      {selectedReel && (
        <ReelModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
      )}
    </main>
  );
}
