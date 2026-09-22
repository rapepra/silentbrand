import React from 'react';
import { motion } from 'framer-motion';

export const HeroCover: React.FC = () => {
  const scrollToContent = () => {
    const manifesto = document.getElementById('manifesto');
    if (manifesto) {
      manifesto.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-silent-void flex items-center justify-center select-none">
      {/* Editorial Background Image with Low-Exposure Chiaroscuro */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 0.72 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/editorial/silent_hero_cover.jpg"
          alt="SILENT Issue 001 — Void and Matter"
          className="h-full w-full object-cover object-center filter brightness-[0.7] contrast-[1.18] grayscale-[0.35]"
        />
        {/* Deep atmospheric gradients and subtle blood tint vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-silent-void via-silent-void/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-silent-void/80 via-transparent to-silent-void" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 shadow-blood-subtle" />
      </motion.div>

      {/* Editorial Typographic Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-full pt-32 pb-16">
        {/* Top Cryptic Issue Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-between items-start border-b border-white/10 pb-4"
        >
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.35em] text-silent-ash uppercase">
            <span>VOL. 01 / ARCHIVE MANIFEST</span>
            <span className="hidden sm:inline mx-3 text-white/20">|</span>
            <span className="hidden sm:inline text-silent-bone/80">THE LUXURY OF DISAPPEARANCE</span>
          </div>

          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-silent-ash text-right uppercase">
            <span>48.8566° N, 2.3522° E</span>
            <div className="text-[8px] text-white/30 tracking-widest mt-0.5">LIMITED PRESS ALLOCATION</div>
          </div>
        </motion.div>

        {/* Centerpiece Monolithic Title */}
        <div className="my-auto py-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.6em', y: 30 }}
            animate={{ opacity: 1, letterSpacing: '0.4em', y: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-extrabold text-silent-bone tracking-[0.25em] md:tracking-[0.4em] uppercase text-center pl-4 md:pl-8 select-none">
              SILENT
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.6, delay: 1.0 }}
            className="mt-6 md:mt-8 max-w-xl text-center"
          >
            <p className="font-editorial-italic text-lg md:text-2xl text-silent-bone/85 font-light tracking-wide">
              "We do not design garments to be seen. We construct armor to vanish."
            </p>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.35em] text-silent-ash uppercase mt-3">
              ISSUE 001 — VOID &amp; MATTER
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="flex justify-between items-end border-t border-white/10 pt-6"
        >
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-silent-ash uppercase">
            <div>FABRICATED IN JAPAN &amp; ITALY</div>
            <div className="text-silent-bone/50 text-[8px] mt-0.5">RESTRICTED CIRCULATION</div>
          </div>

          <button
            onClick={scrollToContent}
            data-cursor="ENTER"
            className="group flex flex-col items-center gap-2 focus:outline-none"
            aria-label="Scroll to manifesto"
          >
            <span className="font-mono text-[9px] tracking-[0.35em] text-silent-ash group-hover:text-silent-bone transition-colors duration-300">
              EXPLORE ARCHIVE
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-silent-bone to-transparent group-hover:h-14 transition-all duration-500" />
          </button>

          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-silent-ash text-right uppercase">
            <div>AUTUMN / WINTER 2026</div>
            <div className="text-silent-bone/50 text-[8px] mt-0.5">COLLECTION 001 &amp; 002</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
