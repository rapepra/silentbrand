import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArchivePiece, CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/archiveData';

interface ArchiveSectionProps {
  pieces: ArchivePiece[];
  onSelectPiece: (piece: ArchivePiece) => void;
  currency: CurrencyCode;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({
  pieces,
  onSelectPiece,
  currency,
}) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'DROP 001' | 'DROP 002'>('ALL');

  const filteredPieces = pieces.filter((piece) => {
    if (activeFilter === 'ALL') return true;
    return piece.drop === activeFilter;
  });

  const formatPrice = (amountEur: number) => {
    const rateInfo = CURRENCY_RATES[currency] || { symbol: '€', rate: 1.0 };
    const converted = Math.round(amountEur * rateInfo.rate);
    return `${rateInfo.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="archive" className="relative w-full bg-silent-void text-silent-bone py-32 px-6 md:px-12 select-none border-t border-silent-blood/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Discreet Drop Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8 gap-8">
          <div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-silent-ash uppercase mb-2">
              [ 03 / THE PERMANENT ARCHIVE ]
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-[0.1em] uppercase">
              HERMETIC INVENTORY
            </h2>
          </div>

          {/* Minimal Filter Toggles */}
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.25em] uppercase">
            {(['ALL', 'DROP 001', 'DROP 002'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`pb-1 transition-all duration-300 focus:outline-none ${
                  activeFilter === filter
                    ? 'text-silent-bone border-b border-silent-bone'
                    : 'text-silent-ash hover:text-white border-b border-transparent'
                }`}
              >
                {filter === 'ALL' ? 'COMPLETE ARCHIVE' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Intentionally Asymmetrical 3-Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPieces.map((piece, index) => {
            // Asymmetric vertical stagger: column 2 and 3 push slightly downwards for organic editorial rhythm
            const isOffset = index % 3 === 1 ? 'lg:translate-y-12' : index % 3 === 2 ? 'lg:translate-y-24' : '';

            return (
              <motion.article
                key={piece.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.0, delay: (index % 3) * 0.15 }}
                className={`group cursor-pointer flex flex-col justify-between ${isOffset}`}
                onClick={() => onSelectPiece(piece)}
                data-cursor="REVEAL"
              >
                {/* Image Container with Underexposed to Sharp Reveal Transition */}
                <div className="relative overflow-hidden bg-silent-carbon border border-white/10 aspect-[3/4] mb-6 shadow-obsidian-glow">
                  {/* Status / Edition Ribbon */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 pointer-events-none">
                    <span className="font-mono text-[8px] tracking-[0.3em] bg-silent-black/80 backdrop-blur-md px-2 py-1 text-silent-bone border border-white/10 uppercase">
                      {piece.drop}
                    </span>
                    <span className="font-mono text-[7px] tracking-[0.25em] text-silent-ash px-2 py-0.5 uppercase">
                      {piece.edition}
                    </span>
                  </div>

                  {/* Primary Garment Artwork / Photo */}
                  <img
                    src={piece.primaryImage}
                    alt={piece.name}
                    className="w-full h-full object-contain p-6 filter brightness-[0.7] contrast-[1.15] grayscale-[0.3] group-hover:brightness-100 group-hover:contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Subtle hover gradient veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-silent-void/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                  {/* Hover prompt label */}
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-silent-bone bg-silent-black/90 px-2 py-1 border border-white/20">
                      INSPECT SPECIFICATION ↗
                    </span>
                  </div>
                </div>

                {/* Technical Product Metadata (Microtypography) */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between items-baseline font-mono text-[9px] tracking-[0.3em] text-silent-ash">
                    <span>{piece.code}</span>
                    <span className="text-silent-bone font-medium">{formatPrice(piece.price)}</span>
                  </div>

                  <h3 className="font-serif text-base md:text-lg font-bold tracking-wider text-silent-bone group-hover:text-white transition-colors">
                    {piece.name}
                  </h3>

                  <p className="font-mono text-[8px] tracking-[0.2em] text-silent-ash uppercase line-clamp-1">
                    {piece.material} • {piece.gsm}
                  </p>

                  <div className="flex justify-between items-center pt-2 font-mono text-[8px] tracking-[0.25em]">
                    <span className="text-silent-ash/70">ORIGIN: {piece.origin.split('/')[0]}</span>
                    <span className={`uppercase ${piece.status === 'LOW ALLOCATION' ? 'text-amber-500/80' : 'text-silent-bone/80'}`}>
                      {piece.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-40 text-center border-t border-white/10 pt-12">
          <p className="font-editorial-italic text-lg md:text-xl text-silent-ash font-light max-w-xl mx-auto">
            "We do not mass produce. When an edition is exhausted, the pattern is permanently retired to the vault."
          </p>
          <div className="font-mono text-[9px] tracking-[0.35em] text-silent-ash uppercase mt-4">
            SILENT HERMETIC ARCHIVE — ISSUE 001
          </div>
        </div>
      </div>
    </section>
  );
};
