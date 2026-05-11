"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  return (
    <section className="relative w-full py-32 md:py-64 bg-black border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center">
        
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-light tracking-tighter text-white mb-20 md:mb-32 uppercase leading-none">
          Let's build
          <br />
          <span className="italic font-serif">attention.</span>
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
          <MagneticButton>
            <a href="https://instagram.com/alexandrubalasoiu.ro" target="_blank" rel="noopener noreferrer" className="w-full h-full inline-block">Instagram</a>
          </MagneticButton>
          <MagneticButton>
            <a href="mailto:contact@upscaleinnovation.com" className="w-full h-full inline-block">Email</a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://wa.me/40775284225" target="_blank" rel="noopener noreferrer" className="w-full h-full inline-block">WhatsApp</a>
          </MagneticButton>
          <MagneticButton className="bg-white text-black hover:bg-white/80 border-transparent">
            <a href="#" className="w-full h-full inline-block">Book a call</a>
          </MagneticButton>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase text-white/40">
          <p>© {new Date().getFullYear()} Alexandru Balasoiu.</p>
          <p>Attention Engineering Studio</p>
        </div>
        
      </div>
    </section>
  );
}
