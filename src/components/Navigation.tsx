import React, { useState } from 'react';
import { audioEngine } from '../utils/audioEngine';
import { CurrencyCode } from '../types';

interface NavigationProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: CurrencyCode;
  onSelectCurrency: (c: CurrencyCode) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onSelectCurrency,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const active = audioEngine.toggle();
    setIsPlayingAudio(active);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 md:py-7 mix-blend-difference text-silent-bone select-none transition-all duration-500">
      {/* Brand Anchor */}
      <div className="flex items-center gap-6">
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-start focus:outline-none"
          aria-label="SILENT Home"
        >
          <span className="font-serif text-xl md:text-2xl tracking-[0.35em] font-bold transition-opacity duration-300 group-hover:opacity-60">
            SILENT
          </span>
          <span className="font-mono text-[8px] tracking-[0.4em] text-silent-ash group-hover:text-silent-bone transition-colors duration-300">
            DISAPPEARANCE ARCHIVE
          </span>
        </button>

        <span className="hidden lg:inline-block font-mono text-[9px] tracking-[0.25em] text-silent-ash pl-6 border-l border-white/10">
          PARIS / TOKYO / ED. 001
        </span>
      </div>

      {/* Center Issue Indicator */}
      <div className="hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
        <span className="h-1 w-1 rounded-full bg-silent-bone animate-ping" />
        <span>ISSUE 001 — VOID &amp; MATTER</span>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-5 md:gap-8">
        {/* Currency Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
            className="font-mono text-[10px] tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1 focus:outline-none"
            title="Switch Currency"
          >
            <span>{currency}</span>
            <span className="text-[8px] opacity-50">▾</span>
          </button>

          {showCurrencyMenu && (
            <div className="absolute right-0 mt-2 py-1 bg-silent-black border border-white/15 backdrop-blur-lg flex flex-col min-w-[70px] shadow-2xl z-50">
              {(['EUR', 'USD', 'GBP', 'JPY'] as CurrencyCode[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => {
                    onSelectCurrency(curr);
                    setShowCurrencyMenu(false);
                  }}
                  className={`px-3 py-1 font-mono text-[10px] text-left tracking-wider hover:bg-white/10 transition-colors ${
                    currency === curr ? 'text-silent-bone font-bold' : 'text-silent-ash'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Ambient Sound Toggle */}
        <button
          onClick={handleToggleAudio}
          className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity focus:outline-none group"
          title="Atmospheric Drone Sound"
        >
          <span className="flex items-end gap-[2px] h-3 w-3.5">
            <span
              className={`w-[1.5px] bg-silent-bone transition-all duration-300 ${
                isPlayingAudio ? 'h-3 animate-pulse' : 'h-1'
              }`}
            />
            <span
              className={`w-[1.5px] bg-silent-bone transition-all duration-500 delay-100 ${
                isPlayingAudio ? 'h-2 animate-pulse' : 'h-1.5'
              }`}
            />
            <span
              className={`w-[1.5px] bg-silent-bone transition-all duration-400 delay-75 ${
                isPlayingAudio ? 'h-3.5 animate-pulse' : 'h-1'
              }`}
            />
          </span>
          <span className="hidden sm:inline">{isPlayingAudio ? 'AUDIO [ON]' : 'AUDIO [OFF]'}</span>
        </button>

        {/* The Private Drawer / Cart Trigger */}
        <button
          onClick={onOpenCart}
          data-cursor="DRAWER"
          className="relative font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 focus:outline-none flex items-center gap-2"
        >
          <span>DRAWER</span>
          <span className="text-[9px] text-silent-bone/80 bg-white/10 px-1.5 py-0.5">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
};
