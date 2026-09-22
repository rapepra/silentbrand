import React from 'react';
import { CurrencyCode } from '../types';

interface ColophonFooterProps {
  currency: CurrencyCode;
  onSelectCurrency: (c: CurrencyCode) => void;
}

export const ColophonFooter: React.FC<ColophonFooterProps> = ({
  currency,
  onSelectCurrency,
}) => {
  return (
    <footer className="relative w-full bg-silent-black text-silent-bone border-t border-silent-blood/40 py-24 px-6 md:px-16 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-16">
          {/* Brand Colophon */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-[0.3em] block">
              SILENT
            </span>
            <p className="font-mono text-[9px] tracking-[0.25em] text-silent-ash uppercase leading-relaxed">
              AN INDEPENDENT ATELIER EXPLORING THE BOUNDARIES OF HIGH COUTURE BRUTALISM, OBSIDIAN TEXTILES, AND TOTAL ANONYMITY.
            </p>
          </div>

          {/* Ateliers & Coords */}
          <div className="space-y-3 font-mono text-[9px] tracking-[0.25em]">
            <span className="text-white/90 uppercase block border-b border-white/10 pb-1">
              PHYSICAL LOCATIONS
            </span>
            <div className="text-silent-ash space-y-2">
              <div>
                <span className="text-silent-bone block">PARIS TALLER</span>
                <span>RUE DE RICHELIEU, 75001</span>
              </div>
              <div>
                <span className="text-silent-bone block">TOKYO ARCHIVE</span>
                <span>AOYAMA, MINATO-KU</span>
              </div>
              <div>
                <span className="text-silent-bone block">ANTWERP LAB</span>
                <span>KLOOSTERSTRAAT</span>
              </div>
            </div>
          </div>

          {/* Confidential Inquiries */}
          <div className="space-y-3 font-mono text-[9px] tracking-[0.25em]">
            <span className="text-white/90 uppercase block border-b border-white/10 pb-1">
              TRANSMISSIONS
            </span>
            <div className="space-y-2 text-silent-ash">
              <div>
                <span className="text-[8px] text-white/40 block">PRIVATE COMMUNICATIONS:</span>
                <a
                  href="mailto:atelier@silent-archive.com"
                  className="text-silent-bone hover:text-white underline decoration-white/30 transition-colors"
                >
                  atelier@silent-archive.com
                </a>
              </div>
              <div>
                <span className="text-[8px] text-white/40 block">ENCRYPTED DISPATCH:</span>
                <span className="text-silent-bone">PGP KEY: 0x9F42B6A</span>
              </div>
              <div className="pt-1">
                <a
                  href="#manifesto"
                  className="text-[9px] text-silent-ash hover:text-white transition-colors"
                >
                  [ ENCRYPTED TELEGRAM INVITATION ] ↗
                </a>
              </div>
            </div>
          </div>

          {/* Currency & Technical Preferences */}
          <div className="space-y-3 font-mono text-[9px] tracking-[0.25em]">
            <span className="text-white/90 uppercase block border-b border-white/10 pb-1">
              CURRENCY REGISTER
            </span>
            <div className="flex gap-2">
              {(['EUR', 'USD', 'GBP', 'JPY'] as CurrencyCode[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onSelectCurrency(curr)}
                  className={`px-2 py-1 border text-[9px] transition-colors ${
                    currency === curr
                      ? 'border-white text-white font-bold bg-white/10'
                      : 'border-white/10 text-silent-ash hover:text-white hover:border-white/30'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
            <p className="text-[8px] text-silent-ash/60 pt-2 leading-relaxed">
              EXCHANGE RATES ARE CALCULATED IN REAL-TIME FROM EUROPEAN CENTRAL BANK SETTLEMENTS.
            </p>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[8px] tracking-[0.3em] text-silent-ash gap-4">
          <div>
            © {new Date().getFullYear()} SILENT ARCHIVE. ALL PATTERNS &amp; DESIGNS COPYRIGHT PROTECTED.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS OF DISAPPEARANCE</span>
            <span className="hover:text-white transition-colors cursor-pointer">VAULT ACCESS</span>
          </div>
          <div>
            ISSUE 001 / MATIÈRE ET VIDE
          </div>
        </div>
      </div>
    </footer>
  );
};
