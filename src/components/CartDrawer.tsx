import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem, CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/archiveData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  currency: CurrencyCode;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  currency,
}) => {
  const [inquiryNote, setInquiryNote] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const rateInfo = CURRENCY_RATES[currency] || { symbol: '€', rate: 1.0 };

  const subtotal = items.reduce((acc, item) => {
    return acc + item.piece.price * item.quantity;
  }, 0);

  const formattedSubtotal = `${rateInfo.symbol}${Math.round(subtotal * rateInfo.rate).toLocaleString()}`;

  const handleCheckout = () => {
    if (items.length === 0) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 select-none overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Lateral Slide-Over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-silent-black/95 border-l border-white/15 backdrop-blur-xl shadow-2xl p-6 md:p-8 flex flex-col justify-between text-silent-bone"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <span className="font-mono text-[9px] tracking-[0.35em] text-silent-ash block mb-0.5 uppercase">
                  CONFIDENTIAL DOSSIER
                </span>
                <h3 className="font-serif text-lg font-bold tracking-widest uppercase">
                  THE PRIVATE DRAWER
                </h3>
              </div>

              <button
                onClick={onClose}
                data-cursor="CLOSE"
                className="font-mono text-[10px] tracking-[0.25em] text-silent-ash hover:text-white uppercase p-1.5 focus:outline-none"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-60">
                  <span className="font-mono text-xs tracking-[0.3em]">DRAWER IS EMPTY</span>
                  <p className="font-editorial-italic text-sm text-silent-ash max-w-xs">
                    "No garments allocated yet. Silence awaits your choice."
                  </p>
                </div>
              ) : (
                items.map((item, idx) => {
                  const itemPrice = `${rateInfo.symbol}${Math.round(item.piece.price * rateInfo.rate).toLocaleString()}`;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 border border-white/10 p-3 bg-silent-void/70 relative group"
                    >
                      {/* Thumbnail */}
                      <div className="h-20 w-16 bg-silent-carbon border border-white/5 flex items-center justify-center p-1 shrink-0">
                        <img
                          src={item.piece.primaryImage}
                          alt={item.piece.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start font-mono text-[8px] tracking-[0.25em] text-silent-ash">
                            <span>{item.piece.code}</span>
                            <span className="text-white">{itemPrice}</span>
                          </div>
                          <h4 className="font-serif text-xs font-bold tracking-wider text-silent-bone mt-0.5">
                            {item.piece.name}
                          </h4>
                          <span className="font-mono text-[8px] tracking-wider text-silent-ash block mt-1">
                            PATTERN SIZE: {item.selectedSize}
                          </span>
                        </div>

                        {/* Removal */}
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="font-mono text-[8px] tracking-[0.2em] text-silent-ash hover:text-rose-400 uppercase transition-colors"
                          >
                            [ DISMISS ]
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer / Acquisition Checkout */}
            {items.length > 0 && (
              <div className="border-t border-white/10 pt-5 space-y-4">
                {/* Confidential Notes Field */}
                <div>
                  <label className="block font-mono text-[8px] tracking-[0.25em] text-silent-ash uppercase mb-1">
                    CONFIDENTIAL DELIVERY DIRECTIVE / SIZING INQUIRY:
                  </label>
                  <input
                    type="text"
                    value={inquiryNote}
                    onChange={(e) => setInquiryNote(e.target.value)}
                    placeholder="Enter private address or instructions..."
                    className="w-full bg-silent-void border border-white/10 px-3 py-2 text-xs font-mono tracking-wider text-silent-bone placeholder:text-silent-ash/40 focus:border-white/40 focus:outline-none"
                  />
                </div>

                {/* Subtotal Calculation */}
                <div className="flex justify-between items-baseline font-mono text-[10px] tracking-[0.3em] uppercase pt-1">
                  <span className="text-silent-ash">TOTAL ARCHIVAL ESTIMATE:</span>
                  <span className="font-bold text-base text-white">{formattedSubtotal}</span>
                </div>

                <div className="font-mono text-[8px] tracking-[0.2em] text-silent-ash/70">
                  * INCLUDES INSURED PRIVATE COURIER DIRECT FROM PARIS ATELIER.
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={handleCheckout}
                  disabled={isSubmitted}
                  data-cursor="CHECKOUT"
                  className="w-full py-3.5 bg-silent-bone text-silent-void hover:bg-white transition-all duration-300 font-mono text-[10px] tracking-[0.35em] uppercase font-bold focus:outline-none"
                >
                  {isSubmitted ? (
                    <span>ALLOCATION REQUEST DISPATCHED ✓</span>
                  ) : (
                    <span>CONFIRM PRIVATE ACQUISITION</span>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
