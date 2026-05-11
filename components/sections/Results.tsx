"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Total Views", value: "50M+" },
  { label: "Campaigns", value: "120+" },
  { label: "Avg. Retention Increase", value: "35%" },
];

export function Results() {
  const ref = useRef(null);

  return (
    <section className="relative w-full py-32 md:py-48 bg-black border-y border-white/10" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
