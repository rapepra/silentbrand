import React from 'react';
import { motion } from 'framer-motion';
import { LOOKBOOK_LOOKS } from '../data/archiveData';

interface LookbookSectionProps {
  onSelectPiece: (pieceId: string) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectPiece }) => {
  return (
    <section id="lookbook" className="relative w-full bg-silent-black text-silent-bone py-32 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-silent-ash uppercase mb-2">
              [ 02 / EDITORIAL FLOW ]
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-[0.1em] uppercase">
              THE MAGAZINE SPREAD
            </h2>
          </div>

          <div className="text-right max-w-sm">
            <p className="font-mono text-[10px] tracking-[0.25em] text-silent-ash uppercase">
              PARIS CAMPAIGN SPREAD / COUTURE ARCHITECTURE
            </p>
            <p className="font-editorial-italic text-sm text-silent-bone/70 mt-1">
              "Tactile intimacy captured in monochromatic stillness."
            </p>
          </div>
        </div>

        {/* Magazine Spreads - Asymmetric Flow */}
        <div className="space-y-36 md:space-y-48">
          {/* Spread 01: Look 01 (Full Body Model) paired with Macro Raw Textile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Monumental Model Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 group cursor-pointer"
              onClick={() => onSelectPiece('sl-05')}
              data-cursor="EXPAND"
            >
              <div className="relative overflow-hidden bg-silent-void border border-white/10 aspect-[3/4] shadow-2xl">
                <img
                  src={LOOKBOOK_LOOKS[0].image}
                  alt={LOOKBOOK_LOOKS[0].title}
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] grayscale-[0.25] group-hover:brightness-100 group-hover:contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-silent-void via-transparent to-transparent opacity-80" />
                
                {/* Look Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-silent-ash block mb-1">
                      {LOOKBOOK_LOOKS[0].sub}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-bold tracking-wider">
                      {LOOKBOOK_LOOKS[0].number} — {LOOKBOOK_LOOKS[0].title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.2em] border border-white/20 px-2 py-1 bg-black/60 backdrop-blur-sm group-hover:border-white transition-colors">
                    INSPECT FIT [SL-05]
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.25em] text-silent-ash">
                <span>WARPING BONDAGE SILHOUETTE</span>
                <span>480 GSM DRY WAX</span>
              </div>
            </motion.div>

            {/* Right: Asymmetric Air + Macro Detail + Poetic Quote */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-6 lg:pt-16 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="font-mono text-[9px] tracking-[0.4em] text-silent-ash uppercase">
                  DISSECTION OF PROPORTION
                </div>
                <blockquote className="font-editorial-italic text-xl md:text-2xl text-silent-bone font-light leading-relaxed border-l border-silent-blood pl-6">
                  "{LOOKBOOK_LOOKS[0].quote}"
                </blockquote>
                <p className="font-sans text-xs text-silent-ash leading-relaxed font-light pl-6">
                  The bondage straps are not decorative gestures; they allow dynamic contraction of volume, transforming ultra-wide leg bell cuts into articulated geometric contours.
                </p>
              </motion.div>

              {/* Macro Texture Inset */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="group cursor-pointer max-w-xs ml-auto"
                onClick={() => onSelectPiece('sl-03')}
                data-cursor="TEXTILE"
              >
                <div className="font-mono text-[9px] tracking-[0.3em] text-silent-ash mb-2 uppercase text-right">
                  FIG. 02 — SELVEDGE &amp; D-RING
                </div>
                <div className="relative overflow-hidden border border-white/15 aspect-square shadow-blood-subtle">
                  <img
                    src={LOOKBOOK_LOOKS[1].image}
                    alt={LOOKBOOK_LOOKS[1].title}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <p className="font-mono text-[8px] tracking-[0.25em] text-silent-ash mt-2 text-right">
                  RAW DISTRESSED THREADS / OXIDIZED STEEL
                </p>
              </motion.div>
            </div>
          </div>

          {/* Spread 02: Look 03 (Back Heraldic View) with Massive Negative Space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Vast Negative Space with Micro Technical Sheet */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
              <span className="font-mono text-[9px] tracking-[0.4em] text-silent-ash uppercase block">
                [ SPREAD 02 / ATELIER NOTES ]
              </span>

              <h4 className="font-serif text-2xl md:text-3xl font-light">
                Muted Heraldry on <span className="font-editorial-italic">Heavyweight Cotton</span>
              </h4>

              <p className="font-sans text-xs md:text-sm text-silent-ash leading-relaxed font-light">
                {LOOKBOOK_LOOKS[2].quote}
              </p>

              <div className="border border-white/10 p-5 bg-silent-carbon/60 backdrop-blur-sm space-y-3 font-mono text-[9px] tracking-[0.25em]">
                <div className="flex justify-between border-b border-white/5 pb-2 text-silent-ash">
                  <span>DISCIPLINE</span>
                  <span className="text-silent-bone">ANATOMICAL PATTERNMAKING</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2 text-silent-ash">
                  <span>BACK EMBELLISHMENT</span>
                  <span className="text-silent-bone">CHARCOAL BLADE CROSS</span>
                </div>
                <div className="flex justify-between text-silent-ash">
                  <span>SEAM MORPHOLOGY</span>
                  <span className="text-silent-bone">CURVILINEAR THORACIC</span>
                </div>
              </div>

              <button
                onClick={() => onSelectPiece('sl-01')}
                data-cursor="INSPECT"
                className="font-mono text-[10px] tracking-[0.3em] uppercase py-2 px-4 border border-white/30 hover:border-white hover:bg-white/10 transition-all"
              >
                VIEW ARCHIVE SPEC [SL-01]
              </button>
            </div>

            {/* Right: Look 03 Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2 group cursor-pointer"
              onClick={() => onSelectPiece('sl-01')}
              data-cursor="EXPAND"
            >
              <div className="relative overflow-hidden bg-silent-void border border-white/10 aspect-[3/4] shadow-2xl">
                <img
                  src={LOOKBOOK_LOOKS[2].image}
                  alt={LOOKBOOK_LOOKS[2].title}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] grayscale-[0.2] group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-silent-void via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-silent-ash block mb-1">
                      {LOOKBOOK_LOOKS[2].sub}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-bold tracking-wider">
                      {LOOKBOOK_LOOKS[2].number} — {LOOKBOOK_LOOKS[2].title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.2em] border border-white/20 px-2 py-1 bg-black/60 backdrop-blur-sm group-hover:border-white transition-colors">
                    REVEAL PIECE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
