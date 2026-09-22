# SILENT — The Luxury of Disappearance
### Issue 001: Void & Matter (Haute-Couture E-Commerce & Editorial Archive)

> *"We do not design garments to be seen. We construct armor to vanish."*

**SILENT** is an avant-garde luxury fashion house exploring opacity, contemporary gothic tension, architectural silhouettes, and radical disappearance. This web platform functions as a hybrid between an independent cult art magazine, a private archive, and an opaque acquisition chamber.

---

## Aesthetic DNA & References
* **References:** Yohji Yamamoto, Rick Owens, Enfants Riches Déprimés, SSENSE editorial, high-fashion brutalism.
* **Palette:**
  * Primary Void: Deep carbon and graphite (`#070707`, `#0A0A0A`, `#0F0F0F`, `#141414`).
  * Text: Broken bone white (`#EDEDED`) and ash gray (`#6E6E6E`).
  * Atmospheric Micro-Accent: Coagulated dried blood tint (`#24080C`).
  * Grain: 35mm Tri-X analog film grain overlay with procedural SVG noise.
* **Typography:**
  * Editorial Serifs: *Cinzel*, *Playfair Display*.
  * Technical Monospace: *Space Mono*, *JetBrains Mono*.

---

## Archival Collections (Drop 001 & Drop 002)

1. **[SL-01] Anatomical Curved-Seam Tee:** 320 GSM organic cotton with curved thoracic lines and tonal neo-tribal blade cross back screenprint.
2. **[SL-02] Batwing Heavyweight Hoodie:** 620 GSM loopback French terry with batwing volume, oval elbow articulation, and weathered gothic *SILENT* typography.
3. **[SL-03] Star Architecture Raw Denim:** 16oz Japanese selvedge denim with spiral helical seams and frayed raw-edge star back yoke.
4. **[SL-04] Heraldic Cropped Ribbed Knit:** 520 GSM merino & cashmere dual-gauge knit with intarsia cross insignia.
5. **[SL-05] Modular Bondage Trousers:** 490 GSM dry-waxed canvas with detachable cross-straps, blackened steel D-rings, and inverted pentagram embroidery.
6. **[SL-06] Mineral Acid-Wash Raglan Hood:** 580 GSM stone-treated cotton jersey with irregular graphite patina.

---

## Platform Architecture

```
silentweb/
├── index.html                  # HTML5 with Google Fonts & SEO metadata
├── package.json                # Dependencies & build scripts
├── tailwind.config.js          # Custom haute-couture palette, fonts, shadows
├── vite.config.ts              # Vite bundler configuration
├── src/
│   ├── main.tsx                # React root
│   ├── App.tsx                 # Core layout & global state
│   ├── index.css               # Film grain overlay, variables, brutalist utilities
│   ├── types/index.ts          # TypeScript domain models
│   ├── data/archiveData.ts     # TechPack-aligned piece catalog & lookbook
│   ├── utils/audioEngine.ts    # Web Audio API native dark-drone synthesizer
│   └── components/
│       ├── GrainOverlay.tsx    # 35mm film grain texture
│       ├── CustomCursor.tsx    # Dynamic cursor ("REVEAL", "INQUIRE", "EXPAND")
│       ├── Navigation.tsx      # Minimal header, audio toggle, currency switcher
│       ├── HeroCover.tsx       # Fullscreen chiaroscuro cover "The Veil"
│       ├── ManifestoSection.tsx# Monumental serif philosophical statement
│       ├── LookbookSection.tsx # Asymmetric magazine spreads (figures & macro textiles)
│       ├── ArchiveSection.tsx  # Asymmetric catalog with underexposed hover reveals
│       ├── PieceModal.tsx      # Archival inspector with TechPack measurements & views
│       ├── CartDrawer.tsx      # Obsidian translucent acquisition drawer
│       └── ColophonFooter.tsx  # Physical atelier coordinates & transmissions
└── public/
    └── assets/
        ├── archive/            # Garment technical artworks (Drop 001 & 002)
        └── editorial/          # Haute-couture editorial campaign photography
```

---

## Development & Deployment

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

---

## License & Copyright
© SILENT ARCHIVE. All designs, patterns, and imagery strictly reserved.
