import { ArchivePiece, LookItem } from '../types';

export const ARCHIVE_PIECES: ArchivePiece[] = [
  {
    id: 'sl-01',
    code: 'ARCHIVE CODE: SL-01',
    name: 'ANATOMICAL CURVED-SEAM TEE',
    drop: 'DROP 001',
    category: 'TOPS',
    price: 380,
    edition: '24 PIECES CRAFTED',
    status: 'AVAILABLE',
    primaryImage: '/assets/archive/drop001_tee_blade.png',
    secondaryImage: '/assets/editorial/silent_look02_editorial.jpg',
    detailImage: '/assets/editorial/silent_macro_textile.jpg',
    material: '320 GSM Double-Faced Organic Cotton',
    gsm: '320 GSM',
    origin: 'Okayama, Japan / Hand-finished in Paris Atelier',
    silhouette: 'Boxy anatomical curved fit, ergonomic thoracic paneling',
    description: 'Ergonomically sculpted t-shirt featuring dual curved front seam paneling following thoracic muscle lines. The reverse exhibits an occult neo-tribal blade cross insignia executed in tonal charcoal pigment discharge. Raw-cut hem with micro-reinforcements.',
    anatomy: [
      'Dual ergonomic front curvilinear seams',
      'Tonal neo-tribal blade cross back pigment print',
      'Distressed rib collar with reinforced chain-stitch',
      'Micro gothic monogram at upper chest'
    ],
    measurements: [
      { size: 'I (S)', chest: '58 cm', shoulder: '54 cm', length: '64 cm', hem: '56 cm' },
      { size: 'II (M)', chest: '61 cm', shoulder: '56 cm', length: '66 cm', hem: '59 cm' },
      { size: 'III (L)', chest: '64 cm', shoulder: '58 cm', length: '68 cm', hem: '62 cm' }
    ]
  },
  {
    id: 'sl-02',
    code: 'ARCHIVE CODE: SL-02',
    name: 'BATWING HEAVYWEIGHT HOODIE',
    drop: 'DROP 001',
    category: 'OUTERWEAR',
    price: 680,
    edition: '16 PIECES CRAFTED',
    status: 'LOW ALLOCATION',
    primaryImage: '/assets/archive/drop001_hoodie_silent.png',
    secondaryImage: '/assets/archive/drop001_hoodie_mineral.png',
    detailImage: '/assets/editorial/silent_macro_textile.jpg',
    material: '620 GSM Compact French Terry Cotton',
    gsm: '620 GSM',
    origin: 'Milan, Italy / Garment-dyed in charcoal soot',
    silhouette: 'Extreme batwing cut, cropped waist, elongated balloon sleeves, oversized cowl hood',
    description: 'Monumental hooded sweatshirt constructed from 620 GSM dense unbrushed cotton. Features articulated oval elbow reinforcement patches and the archival SILENT condensed serif logo across the chest with hand-applied mineral soot patina.',
    anatomy: [
      'Exaggerated batwing sleeve geometry with tapered rib cuffs',
      'Articulated oval elbow padding panels',
      'Oversized structured cowl hood without drawstrings',
      'Weathered typographic serif chest graphic in bone soot'
    ],
    measurements: [
      { size: 'I (S/M)', chest: '72 cm', shoulder: '68 cm', length: '54 cm', hem: '50 cm' },
      { size: 'II (L/XL)', chest: '76 cm', shoulder: '72 cm', length: '57 cm', hem: '54 cm' }
    ]
  },
  {
    id: 'sl-03',
    code: 'ARCHIVE CODE: SL-03',
    name: 'STAR ARCHITECTURE RAW DENIM',
    drop: 'DROP 001',
    category: 'TROUSERS',
    price: 790,
    edition: '12 PIECES CRAFTED',
    status: 'AVAILABLE',
    primaryImage: '/assets/archive/drop001_denim_star_frayed.png',
    secondaryImage: '/assets/archive/drop001_denim_star_detailed.png',
    detailImage: '/assets/archive/drop001_pantalon_spiral.png',
    material: '16oz Japanese Raw Kurabo Selvedge Denim',
    gsm: '480 GSM',
    origin: 'Kojima, Japan',
    silhouette: 'Extreme wide flare leg with helical spiral inseams',
    description: 'Architectural flare denim engineered with spiral curved seam construction that distorts the leg volume into a sculptural bell. The rear displays a geometric star-patterned yoke with hand-frayed distressed raw seams.',
    anatomy: [
      'Helical spiral seams twisting from groin to bell hem',
      'Hand-frayed raw star yoke back construction',
      '34-inch massive flared leg opening',
      'Oxidized blackened steel shank button & rivets'
    ],
    measurements: [
      { size: 'I (28-30)', chest: 'N/A', shoulder: 'N/A', length: '116 cm', hem: '42 cm' },
      { size: 'II (31-33)', chest: 'N/A', shoulder: 'N/A', length: '118 cm', hem: '44 cm' },
      { size: 'III (34-36)', chest: 'N/A', shoulder: 'N/A', length: '120 cm', hem: '46 cm' }
    ]
  },
  {
    id: 'sl-04',
    code: 'ARCHIVE CODE: SL-04',
    name: 'HERALDIC CROPPED RIBBED KNIT',
    drop: 'DROP 002',
    category: 'KNITWEAR',
    price: 720,
    edition: '14 PIECES CRAFTED',
    status: 'AVAILABLE',
    primaryImage: '/assets/archive/drop002_knit_bondage_black.png',
    secondaryImage: '/assets/archive/drop002_knit_bondage_grey.png',
    detailImage: '/assets/archive/drop002_knit_bondage_shadow.png',
    material: '70% Extra-Fine Merino Wool / 30% Mongolian Cashmere',
    gsm: '520 GSM',
    origin: 'Biella, Italy',
    silhouette: 'Cropped boxy ribbed knit with dropped shoulders and architectural sleeve cuffs',
    description: 'Heavyweight dual-gauge ribbed knit sweater displaying a tonal gothic intarsia cross on the chest. Treated with cold-water enzyme wash for subtle surface distress while maintaining cashmere softness.',
    anatomy: [
      'Tonal gothic intarsia cross insignia',
      'Dual-gauge chunky vertical rib structure',
      'High cropped waistline designed for high-rise trouser pairings',
      'Reinforced rolled neckline'
    ],
    measurements: [
      { size: 'I (S)', chest: '60 cm', shoulder: '55 cm', length: '48 cm', hem: '52 cm' },
      { size: 'II (M)', chest: '63 cm', shoulder: '57 cm', length: '50 cm', hem: '55 cm' },
      { size: 'III (L)', chest: '66 cm', shoulder: '59 cm', length: '52 cm', hem: '58 cm' }
    ]
  },
  {
    id: 'sl-05',
    code: 'ARCHIVE CODE: SL-05',
    name: 'MODULAR BONDAGE TROUSERS',
    drop: 'DROP 002',
    category: 'TROUSERS',
    price: 850,
    edition: '10 PIECES CRAFTED',
    status: 'LOW ALLOCATION',
    primaryImage: '/assets/editorial/silent_look01_model.jpg',
    secondaryImage: '/assets/archive/drop002_knit_bondage_black.png',
    detailImage: '/assets/archive/drop002_knit_bondage_contrast.png',
    material: 'Heavy Dry-Waxed Cotton Canvas & Ballistic Cordura',
    gsm: '490 GSM',
    origin: 'Antwerp Atelier, Belgium',
    silhouette: 'Extreme wide-leg modular bondage trouser with articulated knee darting',
    description: 'Avant-garde tactical bondage trousers equipped with detachable cross-straps, dual front tension clips, and custom blackened steel D-rings. Subtle inverted pentagram tonal embroidery beneath the waistband.',
    anatomy: [
      'Detachable modular cross-leg bondage straps with snap clips',
      'Blackened steel D-rings and industrial eyelets',
      'Subtle tonal inverted pentagram embroidery under left pocket',
      'Dual dimensional bellows cargo pockets with hidden storm flaps'
    ],
    measurements: [
      { size: 'I (28-30)', chest: 'N/A', shoulder: 'N/A', length: '115 cm', hem: '38 cm' },
      { size: 'II (31-33)', chest: 'N/A', shoulder: 'N/A', length: '117 cm', hem: '40 cm' },
      { size: 'III (34-36)', chest: 'N/A', shoulder: 'N/A', length: '119 cm', hem: '42 cm' }
    ]
  },
  {
    id: 'sl-06',
    code: 'ARCHIVE CODE: SL-06',
    name: 'MINERAL ACID-WASH RAGLAN HOOD',
    drop: 'DROP 001',
    category: 'OUTERWEAR',
    price: 640,
    edition: '15 PIECES CRAFTED',
    status: 'AVAILABLE',
    primaryImage: '/assets/archive/drop001_hoodie_mineral.png',
    secondaryImage: '/assets/editorial/silent_hero_cover.jpg',
    detailImage: '/assets/editorial/silent_macro_textile.jpg',
    material: '580 GSM French Terry with Mineral Stone Treatment',
    gsm: '580 GSM',
    origin: 'Milan, Italy',
    silhouette: 'Sculpted raglan hoodie with arched back yoke and dropped hemline',
    description: 'Mineral acid-washed hooded sweatshirt featuring an organic stone wash that generates unpredictable graphite mottling across the surface. Constructed with seamless curved raglan lines and a structured neck collar.',
    anatomy: [
      'Continuous arched raglan sleeve construction without shoulder seam',
      'Irregular mineral acid patina (each garment has unique dye dispersal)',
      'Clean kangaroo pocket with reinforced bartacks',
      'Raw-cut cuffs and waistband with internal stay tape'
    ],
    measurements: [
      { size: 'I (S)', chest: '66 cm', shoulder: 'N/A', length: '56 cm', hem: '54 cm' },
      { size: 'II (M)', chest: '70 cm', shoulder: 'N/A', length: '58 cm', hem: '57 cm' },
      { size: 'III (L)', chest: '74 cm', shoulder: 'N/A', length: '60 cm', hem: '60 cm' }
    ]
  }
];

export const LOOKBOOK_LOOKS: LookItem[] = [
  {
    id: 'look-01',
    number: 'LOOK 01',
    title: 'DESTRUCTED SILHOUETTE',
    sub: 'ISSUE 001 / SPREAD 01',
    image: '/assets/editorial/silent_look01_model.jpg',
    quote: 'The silhouette ceases to represent the human body; it becomes an architectural shelter against surveillance.',
    relatedPieceId: 'sl-05',
    aspect: 'portrait'
  },
  {
    id: 'look-02',
    number: 'LOOK 02',
    title: 'OBSIDIAN MACRO TEXTURE',
    sub: 'ISSUE 001 / MATERIALITY',
    image: '/assets/editorial/silent_macro_textile.jpg',
    quote: 'Tactile honesty. 16oz raw selvedge denim woven on vintage Toyoda shuttle looms, unwashed, stiff with intention.',
    relatedPieceId: 'sl-03',
    aspect: 'square'
  },
  {
    id: 'look-03',
    number: 'LOOK 03',
    title: 'HERALDIC OCCULT INTARSIA',
    sub: 'ISSUE 001 / SPREAD 03',
    image: '/assets/editorial/silent_look02_editorial.jpg',
    quote: 'The cross is stripped of dogmatic weight; transformed into a talisman of silence and contained defiance.',
    relatedPieceId: 'sl-01',
    aspect: 'portrait'
  },
  {
    id: 'look-04',
    number: 'LOOK 04',
    title: 'THE MONOLITHIC COWL',
    sub: 'ISSUE 001 / COVER FORM',
    image: '/assets/editorial/silent_hero_cover.jpg',
    quote: 'To disappear is not to cease existing; it is the ultimate assertion of sovereignty over one\'s visual presence.',
    relatedPieceId: 'sl-02',
    aspect: 'wide'
  }
];

export const CURRENCY_RATES = {
  EUR: { symbol: '€', rate: 1.0 },
  USD: { symbol: '$', rate: 1.08 },
  GBP: { symbol: '£', rate: 0.85 },
  JPY: { symbol: '¥', rate: 160.0 },
};
