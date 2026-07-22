import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/Button/Button";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] min-h-[750px] w-full overflow-hidden bg-ink-900 selection:bg-gold-500/30"
    >
      {/* 1. CINEMATIC VIDEO ENGINE */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover scale-105"
          src="/assets/video1.mp4"
          poster="/assets/bg111.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Multi-Layer Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/40 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/40 to-transparent" />
        
        {/* Film Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-10 h-full container-px flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div 
            style={{ y: y1, opacity }}
            className="lg:col-span-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6 lg:mb-8"
            >
              <span className="h-[1px] w-12 bg-gold-500/60" />
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-gold-400">
                Est. MMXXIV • GALZVIRT Sports Agency
              </span>
            </motion.div>
{/* High-Impact Title */}
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
  /* 
    FIX: Changed leading-[0.9] to leading-[1.05] and added py-2 
    so descenders (like 'g') are not clipped by bounding boxes.
  */
  className="font-display leading-[1.05] tracking-tighter text-white select-none"
>
  <span className="block text-[12vw] sm:text-[8vw] lg:text-[6.5vw] uppercase font-bold">
    Building
  </span>
  
  {/* 
    FIX: Added inline-block, pb-3, and px-1. 
    'inline-block' creates an isolated render box for the gradient/clip.
    'pb-3' adds bottom padding specifically for the lower tail of the 'g'.
    'px-1' prevents horizontal italic clipping on edge letters.
  */}
  <span className="inline-block pb-3 px-1 text-[12vw] sm:text-[8vw] lg:text-[6.5vw] italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200">
    Global Legacies.
  </span>
</motion.h1>

            {/* Clean Stacked Content Block (Text + Actions) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 lg:mt-10 max-w-xl space-y-8"
            >
              {/* Blended Text Paragraph */}
              <p className="text-silver-300/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed border-l-2 border-gold-500/40 pl-5 backdrop-blur-[2px]">
                Redefining football representation through strategic excellence and 
                an unwavering commitment to elite talent.
              </p>
              
              {/* Desktop-Optimized Button Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  to="/players" 
                  className="group relative inline-flex items-center justify-center overflow-hidden bg-gold-500 text-black px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-95"
                >
                  <span className="relative z-10">Our Roster</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                </Button>
                
                <Button 
                  to="/contact" 
                  variant="outline" 
                  className="inline-flex items-center justify-center backdrop-blur-md border border-white/20 text-white hover:border-gold-500/50 hover:bg-white/5 transition-all px-8 py-4 font-medium text-xs uppercase tracking-[0.2em]"
                >
                  Partner With Us
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* 3. FLOATING STATS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="hidden lg:flex flex-col gap-8 lg:col-span-4 items-end"
          >
             {[
               { label: "Elite Athletes", val: "50+" },
               { label: "Pro Transfers", val: "120" },
               { label: "Global Reach", val: "24" }
             ].map((stat, i) => (
               <div key={i} className="text-right group cursor-default">
                 <p className="text-gold-400 font-display text-4xl lg:text-5xl font-bold mb-1 group-hover:italic transition-all duration-300">{stat.val}</p>
                 <p className="text-silver-400 uppercase tracking-[0.25em] text-[10px] font-medium">{stat.label}</p>
               </div>
             ))}
          </motion.div>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="relative h-12 w-[1px] bg-gradient-to-b from-transparent via-gold-500/40 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/3 w-full bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-silver-400/80">Discover</span>
      </motion.div>
    </section>
  );
}