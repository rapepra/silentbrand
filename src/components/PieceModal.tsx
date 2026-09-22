import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArchivePiece, CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/archiveData';

interface PieceModalProps {
  piece: ArchivePiece | null;
  onClose: () => void;
  onAddToCart: (piece: ArchivePiece, size: string) => void;
  currency: CurrencyCode;
}

export const PieceModal: React.FC<PieceModalProps> = ({
  piece,
  onClose,
  onAddToCart,
  currency,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  if (!piece) return null;

  const images = [
    piece.primaryImage,
    piece.secondaryImage,
    piece.detailImage,
  ].filter(Boolean) as string[];

  const formatPrice = (amountEur: number) => {
    const rateInfo = CURRENCY_RATES[currency] || { symbol: '€', rate: 1.0 };
    const converted = Math.round(amountEur * rateInfo.rate);
    return `${rateInfo.symbol}${converted.toLocaleString()}`;
  };

  const handleAdd = () => {
    const sizeToUse = selectedSize || piece.measurements[0]?.size || 'UNIQUE';
    onAddToCart(piece, sizeToUse);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 select-none">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-silent-black border border-white/15 text-silent-bone shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-4 right-4 z-30">
            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-white/20 hover:border-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              [ ESC / CLOSE ]
            </button>
          </div>

          {/* Left: High-Res Garment Visualizer */}
          <div className="lg:w-1/2 p-6 md:p-10 bg-silent-carbon/60 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Main Visual Display */}
            <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden border border-white/5 my-auto bg-silent-void">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={images[selectedImageIndex] || piece.primaryImage}
                alt={piece.name}
                className="max-h-[85%] max-w-[85%] object-contain filter contrast-[1.05]"
              />

              <div className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.3em] text-silent-ash uppercase">
                SPECIMEN VIEW 0{selectedImageIndex + 1} / 0{images.length}
              </div>
            </div>

            {/* Thumbnail View Switcher */}
            <div className="flex gap-3 pt-6 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`h-14 w-14 border p-1 bg-silent-void transition-all ${
                    selectedImageIndex === idx
                      ? 'border-silent-bone scale-105 shadow-blood-subtle'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Archival TechPack Dossier */}
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-8">
            {/* Header / Code & Pricing */}
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.3em] text-silent-ash">
                <span>{piece.code}</span>
                <span className="text-white/80">{piece.edition}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wide">
                {piece.name}
              </h2>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xl tracking-wider text-silent-bone font-medium">
                  {formatPrice(piece.price)}
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-silent-ash uppercase px-2 py-0.5 border border-white/10">
                  {piece.status}
                </span>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="font-sans text-xs md:text-sm text-silent-ash leading-relaxed font-light">
              {piece.description}
            </p>

            {/* Garment Anatomy Breakdown */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-white/90 uppercase border-b border-white/10 pb-1">
                STRUCTURAL ANATOMY
              </h4>
              <ul className="space-y-1.5 font-mono text-[9px] tracking-[0.2em] text-silent-ash">
                {piece.anatomy.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/40">†</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Millimetric Measurement Specifications Table */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.3em] text-white/90 uppercase border-b border-white/10 pb-1">
                <span>MEASUREMENTS (CM)</span>
                <span className="text-silent-ash text-[8px]">SELECT PATTERN SIZE</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[9px] tracking-[0.2em]">
                  <thead>
                    <tr className="border-b border-white/10 text-silent-ash">
                      <th className="py-1">SIZE</th>
                      <th className="py-1">CHEST</th>
                      <th className="py-1">SHOULDER</th>
                      <th className="py-1">LENGTH</th>
                      <th className="py-1">HEM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {piece.measurements.map((m) => (
                      <tr
                        key={m.size}
                        onClick={() => setSelectedSize(m.size)}
                        className={`cursor-pointer transition-colors ${
                          (selectedSize || piece.measurements[0]?.size) === m.size
                            ? 'bg-white/10 text-white font-bold'
                            : 'text-silent-ash hover:text-white'
                        }`}
                      >
                        <td className="py-1.5">{m.size}</td>
                        <td className="py-1.5">{m.chest}</td>
                        <td className="py-1.5">{m.shoulder}</td>
                        <td className="py-1.5">{m.length}</td>
                        <td className="py-1.5">{m.hem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Material Authenticity & Origin */}
            <div className="grid grid-cols-2 gap-4 font-mono text-[8px] tracking-[0.25em] text-silent-ash border-t border-white/10 pt-4">
              <div>
                <span className="block text-white/40 mb-0.5">COMPOSITION</span>
                <span className="text-silent-bone">{piece.material}</span>
              </div>
              <div>
                <span className="block text-white/40 mb-0.5">ORIGIN</span>
                <span className="text-silent-bone">{piece.origin}</span>
              </div>
            </div>

            {/* Acquisition Action */}
            <div className="pt-2">
              <button
                onClick={handleAdd}
                data-cursor="ACQUIRE"
                className="w-full py-3.5 bg-silent-bone text-silent-void hover:bg-white transition-all duration-300 font-mono text-[10px] tracking-[0.35em] uppercase font-bold flex items-center justify-center gap-3 shadow-lg"
              >
                {addedNotice ? (
                  <span>ALLOCATION ADDED TO DRAWER ✓</span>
                ) : (
                  <span>REQUEST PIECE ALLOCATION</span>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
