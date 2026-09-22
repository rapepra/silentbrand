import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative w-full min-h-screen bg-silent-void text-silent-bone py-32 px-6 md:px-16 flex flex-col justify-center border-t border-silent-blood/40"
    >
      {/* Background structural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-12 border-x border-white/20">
          <div className="hidden md:block col-span-3 border-r border-white/20" />
          <div className="hidden md:block col-span-6 border-r border-white/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-silent-ash uppercase">
            [ 01 / PRINCIPLE ]
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-silent-blood to-transparent" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-silent-ash uppercase">
            DECLARATION OF DISAPPEARANCE
          </span>
        </div>

        {/* Monumental Editorial Manifesto Text */}
        <div className="space-y-12 md:space-y-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] tracking-tight max-w-5xl"
          >
            In an era of relentless algorithmic visibility, <span className="font-editorial-italic font-light text-white underline decoration-silent-blood decoration-1 underline-offset-8">silence</span> becomes the only authentic luxury.
          </motion.p>

          {/* Asymmetric Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className="md:col-span-5 space-y-6"
            >
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/90 uppercase border-b border-white/10 pb-2">
                MATERIAL INTEGRITY
              </h3>
              <p className="font-sans text-sm md:text-base text-silent-ash leading-relaxed font-light">
                We reject seasonal velocity and the vulgarity of mass production. Every garment exists as an unrepeatable specimen—sculpted from 620 GSM unbrushed loopback cotton, 16oz raw Japanese selvedge denim woven on low-tension shuttle looms, and dry-waxed European canvases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="md:col-start-7 md:col-span-6 space-y-6"
            >
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/90 uppercase border-b border-white/10 pb-2">
                RADICAL ANONYMITY
              </h3>
              <p className="font-sans text-sm md:text-base text-silent-ash leading-relaxed font-light">
                The garments are not adorned with commercial slogans or bright insignia. Instead, anatomical curved cuts, distressed star geometries, and muted heraldic intarsias offer tactile recognition solely to the initiated. To wear SILENT is to reclaim privacy as an art form.
              </p>
              
              <div className="pt-4 flex items-center gap-6">
                <div className="font-mono text-[9px] tracking-[0.35em] text-silent-ash uppercase">
                  ATELIER ARCHIVE: SL-FOUNDATION
                </div>
                <div className="text-[11px] text-silent-bone/30">†</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimalist Footnote */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-silent-ash font-mono text-[9px] tracking-[0.3em] gap-4">
          <span>NO ADVERTISING. NO SPONSORED GAZE.</span>
          <span>STRICT ALLOCATION OF 10 TO 24 PIECES PER DISCIPLINE</span>
        </div>
      </div>
    </section>
  );
};
