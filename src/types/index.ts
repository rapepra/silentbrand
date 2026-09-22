export interface ArchivePiece {
  id: string;
  code: string;
  name: string;
  drop: 'DROP 001' | 'DROP 002';
  price: number;
  edition: string;
  status: 'AVAILABLE' | 'LOW ALLOCATION' | 'ARCHIVED';
  category: 'TOPS' | 'OUTERWEAR' | 'TROUSERS' | 'KNITWEAR';
  primaryImage: string;
  secondaryImage?: string;
  detailImage?: string;
  material: string;
  gsm: string;
  origin: string;
  silhouette: string;
  description: string;
  anatomy: string[];
  measurements: {
    size: string;
    chest: string;
    shoulder: string;
    length: string;
    hem: string;
  }[];
}

export interface LookItem {
  id: string;
  number: string;
  title: string;
  sub: string;
  image: string;
  quote: string;
  relatedPieceId?: string;
  aspect: 'portrait' | 'square' | 'wide';
}

export interface CartItem {
  piece: ArchivePiece;
  selectedSize: string;
  quantity: number;
  addedAt: number;
}

export type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'JPY';
