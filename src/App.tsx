import React, { useState } from 'react';
import { ARCHIVE_PIECES } from './data/archiveData';
import { ArchivePiece, CartItem, CurrencyCode } from './types';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroCover } from './components/HeroCover';
import { ManifestoSection } from './components/ManifestoSection';
import { LookbookSection } from './components/LookbookSection';
import { ArchiveSection } from './components/ArchiveSection';
import { PieceModal } from './components/PieceModal';
import { CartDrawer } from './components/CartDrawer';
import { ColophonFooter } from './components/ColophonFooter';

export const App: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<ArchivePiece | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<CurrencyCode>('EUR');

  const handleSelectPieceById = (pieceId: string) => {
    const found = ARCHIVE_PIECES.find((p) => p.id === pieceId);
    if (found) {
      setSelectedPiece(found);
    }
  };

  const handleAddToCart = (piece: ArchivePiece, size: string) => {
    setCartItems((prev) => [
      ...prev,
      {
        piece,
        selectedSize: size,
        quantity: 1,
        addedAt: Date.now(),
      },
    ]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen w-full bg-silent-void text-silent-bone selection:bg-silent-bloodGlow selection:text-white">
      {/* 35mm Analog Film Grain Procedural Texture */}
      <GrainOverlay />

      {/* Haute-Couture Dynamic Interactive Cursor */}
      <CustomCursor />

      {/* Minimal Top Header */}
      <Navigation
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onSelectCurrency={setCurrency}
      />

      {/* 1. Cover / The Veil (Landing Hero) */}
      <HeroCover />

      {/* 2. The Manifesto (Philosophy of Absence) */}
      <ManifestoSection />

      {/* 3. Lookbook / Editorial Flow (The Magazine Spreads) */}
      <LookbookSection
        onSelectPiece={handleSelectPieceById}
      />

      {/* 4. The Archive / Collection (Hermetic E-Commerce) */}
      <ArchiveSection
        pieces={ARCHIVE_PIECES}
        onSelectPiece={(piece) => setSelectedPiece(piece)}
        currency={currency}
      />

      {/* 5. Archival Piece Inspector Modal */}
      <PieceModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* 6. The Private Drawer / Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        currency={currency}
      />

      {/* 7. Colophon / Footer */}
      <ColophonFooter
        currency={currency}
        onSelectCurrency={setCurrency}
      />
    </div>
  );
};

export default App;
