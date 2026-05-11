"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-24 text-center">
          <h2 className="text-sm md:text-base tracking-[0.4em] text-white/50 uppercase">
            Voices
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-md relative grayscale">
              <img 
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <svg className="w-12 h-12 text-white/20 mb-8" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10.8,11.8c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4C13.2,10.7,12.1,11.8,10.8,11.8z M10.8,14.6 c1.6,0,3.2-0.5,4.4-1.5v11.7h-3v-5.8h-2.8v-5.8h1.4L10.8,14.6z M22.6,11.8c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4 c1.3,0,2.4,1.1,2.4,2.4C25,10.7,23.9,11.8,22.6,11.8z M22.6,14.6c1.6,0,3.2-0.5,4.4-1.5v11.7h-3v-5.8h-2.8v-5.8h1.4L22.6,14.6z"/>
            </svg>
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-white mb-8">
              "The editing psychology changed our entire approach. It's not just making videos; it's engineering human attention."
            </p>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-white font-medium">David R.</p>
              <p className="text-xs tracking-widest text-white/50 uppercase mt-2">Creative Director</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
