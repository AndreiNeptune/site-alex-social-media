"use client";

import { motion } from "framer-motion";
import { useCinematicSound } from "@/hooks/useSound";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/alexandrubalasoiu.ro" },
  { name: "Email", href: "mailto:contact@upscaleinnovation.com" },
  { name: "WhatsApp", href: "https://wa.me/40775284225" },
];

export function Footer() {
  const { playHover } = useCinematicSound();
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black py-32 md:py-48 overflow-hidden border-t border-white/[0.03]">
      
      {/* Atmospheric Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <video
          src="https://videos.pexels.com/video-files/3205315/3205315-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-[100px] grayscale"
        />
      </div>

      {/* Subtle Grain / Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none" />

      <div className="container relative z-20 mx-auto px-8 md:px-16 flex flex-col items-center text-center">
        
        {/* Editorial Statement - Restrained & Paced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white/80 tracking-tight leading-tight">
            Stories built for <br />
            <span className="text-white/40 italic text-2xl md:text-4xl">emotional retention.</span>
          </h2>
          <div className="mt-8 h-[1px] w-8 bg-white/10 mx-auto" />
        </motion.div>

        {/* Minimal Social Layer */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-32">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 2 }}
              className="group relative text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-white/50 hover:text-white/80 transition-colors duration-1000"
            >
              {link.name}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-700 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 2 }}
            className="text-center"
          >
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/40 mb-4">
              Direct Contact
            </p>
            <a 
              href="mailto:contact@upscaleinnovation.com"
              onMouseEnter={playHover}
              className="text-lg md:text-2xl font-light text-white/80 hover:text-white transition-colors duration-700"
            >
              contact@upscaleinnovation.com
            </a>
            <a 
              href="https://maps.google.com/?q=Bulevardul+Unirii+75,+București"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="mt-4 text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-white/60 transition-colors duration-700 block"
            >
              Bulevardul Unirii 75, București
            </a>
          </motion.div>
        </div>

        {/* Archival Metadata Layer - Visible but Retained */}
        <div className="w-full max-w-4xl pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-[7px] md:text-[8px] tracking-[0.5em] uppercase font-medium text-white">
              Alexandru Balasoiu
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.5em] uppercase text-white/80">
              Creative Archive — {year}
            </span>
          </div>

          <div className="flex gap-12">
            <span className="text-[7px] md:text-[8px] tracking-[0.5em] uppercase text-white/80">
              Upscale Innovation Group
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.5em] uppercase italic text-white/60">
              Digital Ecosystem Engineering
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
