/**
 * SILENT — The Luxury of Disappearance
 * Optimized Vanilla JS Core Engine (Issue 001)
 */

(function () {
  'use strict';

  // --- Archival Data Repository ---
  const ARCHIVE_DATA = {
    'sl-01': {
      id: 'sl-01',
      code: 'ARCHIVE CODE: SL-01',
      name: 'ANATOMICAL CURVED-SEAM TEE',
      drop: 'DROP 001',
      category: 'TOPS',
      price: 380,
      edition: '24 PIECES CRAFTED',
      status: 'AVAILABLE',
      images: [
        'assets/archive/drop001_tee_blade.png',
        'assets/editorial/silent_look02_editorial.jpg',
        'assets/editorial/silent_macro_textile.jpg'
      ],
      material: '320 GSM Double-Faced Organic Cotton',
      gsm: '320 GSM',
      origin: 'Okayama, Japan / Paris Atelier',
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
    'sl-02': {
      id: 'sl-02',
      code: 'ARCHIVE CODE: SL-02',
      name: 'BATWING HEAVYWEIGHT HOODIE',
      drop: 'DROP 001',
      category: 'OUTERWEAR',
      price: 680,
      edition: '16 PIECES CRAFTED',
      status: 'LOW ALLOCATION',
      images: [
        'assets/archive/drop001_hoodie_silent.png',
        'assets/archive/drop001_hoodie_mineral.png',
        'assets/editorial/silent_macro_textile.jpg'
      ],
      material: '620 GSM Compact French Terry Cotton',
      gsm: '620 GSM',
      origin: 'Milan, Italy / Garment-dyed in charcoal soot',
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
    'sl-03': {
      id: 'sl-03',
      code: 'ARCHIVE CODE: SL-03',
      name: 'STAR ARCHITECTURE RAW DENIM',
      drop: 'DROP 001',
      category: 'TROUSERS',
      price: 790,
      edition: '12 PIECES CRAFTED',
      status: 'AVAILABLE',
      images: [
        'assets/archive/drop001_denim_star_frayed.png',
        'assets/archive/drop001_denim_star_detailed.png',
        'assets/archive/drop001_pantalon_spiral.png'
      ],
      material: '16oz Japanese Raw Kurabo Selvedge Denim',
      gsm: '480 GSM',
      origin: 'Kojima, Japan',
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
    'sl-04': {
      id: 'sl-04',
      code: 'ARCHIVE CODE: SL-04',
      name: 'HERALDIC CROPPED RIBBED KNIT',
      drop: 'DROP 002',
      category: 'KNITWEAR',
      price: 720,
      edition: '14 PIECES CRAFTED',
      status: 'AVAILABLE',
      images: [
        'assets/archive/drop002_knit_bondage_black.png',
        'assets/archive/drop002_knit_bondage_grey.png',
        'assets/archive/drop002_knit_bondage_shadow.png'
      ],
      material: '70% Merino Wool / 30% Mongolian Cashmere',
      gsm: '520 GSM',
      origin: 'Biella, Italy',
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
    'sl-05': {
      id: 'sl-05',
      code: 'ARCHIVE CODE: SL-05',
      name: 'MODULAR BONDAGE TROUSERS',
      drop: 'DROP 002',
      category: 'TROUSERS',
      price: 850,
      edition: '10 PIECES CRAFTED',
      status: 'LOW ALLOCATION',
      images: [
        'assets/editorial/silent_look01_model.jpg',
        'assets/archive/drop002_knit_bondage_black.png',
        'assets/archive/drop002_knit_bondage_contrast.png'
      ],
      material: 'Heavy Dry-Waxed Cotton Canvas & Cordura',
      gsm: '490 GSM',
      origin: 'Antwerp Atelier, Belgium',
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
    'sl-06': {
      id: 'sl-06',
      code: 'ARCHIVE CODE: SL-06',
      name: 'MINERAL ACID-WASH RAGLAN HOOD',
      drop: 'DROP 001',
      category: 'OUTERWEAR',
      price: 640,
      edition: '15 PIECES CRAFTED',
      status: 'AVAILABLE',
      images: [
        'assets/archive/drop001_hoodie_mineral.png',
        'assets/editorial/silent_hero_cover.jpg',
        'assets/editorial/silent_macro_textile.jpg'
      ],
      material: '580 GSM French Terry with Mineral Stone Treatment',
      gsm: '580 GSM',
      origin: 'Milan, Italy',
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
  };

  // --- Currency Configuration ---
  const CURRENCY_RATES = {
    EUR: { symbol: '€', rate: 1.0 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
    JPY: { symbol: '¥', rate: 160.0 }
  };

  let currentCurrency = 'EUR';
  let cartItems = [];
  let currentActivePiece = null;
  let currentSelectedSize = '';

  function formatPrice(eurAmount) {
    const info = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.EUR;
    const converted = Math.round(eurAmount * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  }

  // --- Web Audio API Native Ambient Sound Engine ---
  let audioCtx = null;
  let masterGain = null;
  let isSoundActive = false;

  function initAudio() {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, audioCtx.currentTime);
    filter.Q.setValueAtTime(4.0, audioCtx.currentTime);
    filter.connect(masterGain);

    // Deep sub-bass drone F1
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(43.65, audioCtx.currentTime);
    osc1.connect(filter);

    // Fifth harmonic C2
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(65.41, audioCtx.currentTime);
    osc2.connect(filter);

    // Breathing LFO
    const lfo = audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(0.08, audioCtx.currentTime);
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(40, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    osc1.start();
    osc2.start();
    lfo.start();
  }

  function toggleAudio() {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const soundTrigger = document.getElementById('sound-trigger');
    const soundLabel = document.getElementById('sound-label');

    if (isSoundActive) {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      isSoundActive = false;
      if (soundTrigger) soundTrigger.classList.remove('sound-active');
      if (soundLabel) soundLabel.textContent = 'AUDIO [OFF]';
    } else {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 2.0);
      isSoundActive = true;
      if (soundTrigger) soundTrigger.classList.add('sound-active');
      if (soundLabel) soundLabel.textContent = 'AUDIO [ON]';
    }
  }

  // --- Dynamic Haute-Couture Interactive Cursor ---
  function initCustomCursor() {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';

    const follower = document.createElement('div');
    follower.className = 'cursor-follower';

    const textSpan = document.createElement('span');
    textSpan.className = 'cursor-text';
    follower.appendChild(textSpan);

    document.body.appendChild(dot);
    document.body.appendChild(follower);

    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        textSpan.textContent = text;
        follower.classList.add('has-text');
        follower.classList.add('hovered');
      } else {
        const isInteractive = target.closest('a, button, input, [role="button"]');
        if (isInteractive) {
          textSpan.textContent = '';
          follower.classList.remove('has-text');
          follower.classList.add('hovered');
        } else {
          textSpan.textContent = '';
          follower.classList.remove('has-text');
          follower.classList.remove('hovered');
        }
      }
    });

    // Smooth follower interpolation loop
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    }
    requestAnimationFrame(animateFollower);
  }

  // --- Archival Piece Inspector Modal ---
  function openPieceModal(pieceId) {
    const piece = ARCHIVE_DATA[pieceId];
    if (!piece) return;

    currentActivePiece = piece;
    currentSelectedSize = piece.measurements[0]?.size || 'I';

    const modal = document.getElementById('piece-modal');
    if (!modal) return;

    // Fill data
    document.getElementById('modal-piece-code').textContent = piece.code;
    document.getElementById('modal-piece-edition').textContent = piece.edition;
    document.getElementById('modal-piece-title').textContent = piece.name;
    document.getElementById('modal-piece-price').textContent = formatPrice(piece.price);
    document.getElementById('modal-piece-status').textContent = piece.status;
    document.getElementById('modal-piece-desc').textContent = piece.description;
    document.getElementById('modal-piece-material').textContent = piece.material;
    document.getElementById('modal-piece-origin').textContent = piece.origin;

    // Anatomy items
    const anatomyUl = document.getElementById('modal-anatomy-list');
    anatomyUl.innerHTML = '';
    piece.anatomy.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      anatomyUl.appendChild(li);
    });

    // Measurements table
    const tableBody = document.getElementById('modal-measurements-body');
    tableBody.innerHTML = '';
    piece.measurements.forEach(m => {
      const tr = document.createElement('tr');
      if (m.size === currentSelectedSize) tr.classList.add('selected');
      tr.innerHTML = `
        <td>${m.size}</td>
        <td>${m.chest}</td>
        <td>${m.shoulder}</td>
        <td>${m.length}</td>
        <td>${m.hem}</td>
      `;
      tr.addEventListener('click', () => {
        currentSelectedSize = m.size;
        tableBody.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
        tr.classList.add('selected');
      });
      tableBody.appendChild(tr);
    });

    // Thumbnails & main image
    const mainImg = document.getElementById('modal-main-image');
    mainImg.src = piece.images[0];

    const thumbsContainer = document.getElementById('modal-thumbnails');
    thumbsContainer.innerHTML = '';
    piece.images.forEach((imgSrc, idx) => {
      const btn = document.createElement('button');
      btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.setAttribute('data-cursor', 'VIEW');
      btn.innerHTML = `<img src="${imgSrc}" alt="thumb">`;
      btn.addEventListener('click', () => {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = imgSrc;
          mainImg.style.opacity = '1';
        }, 150);
        thumbsContainer.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('modal-view-label').textContent = `SPECIMEN VIEW 0${idx + 1} / 0${piece.images.length}`;
      });
      thumbsContainer.appendChild(btn);
    });

    document.getElementById('modal-view-label').textContent = `SPECIMEN VIEW 01 / 0${piece.images.length}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePieceModal() {
    const modal = document.getElementById('piece-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Private Drawer / Cart Management ---
  function openCartDrawer() {
    renderCart();
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function addToCart(piece, size) {
    cartItems.push({ piece, size, time: Date.now() });
    updateCartBadge();
    const acquireBtn = document.getElementById('modal-acquire-btn');
    if (acquireBtn) {
      acquireBtn.textContent = 'ALLOCATION ADDED TO DRAWER ✓';
      setTimeout(() => {
        acquireBtn.textContent = 'REQUEST PIECE ALLOCATION';
      }, 2000);
    }
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartBadge();
    renderCart();
  }

  function updateCartBadge() {
    const count = cartItems.length;
    const badge = document.getElementById('drawer-count');
    if (badge) badge.textContent = count;
  }

  function renderCart() {
    const list = document.getElementById('drawer-items-list');
    const emptyState = document.getElementById('drawer-empty');
    const footer = document.getElementById('drawer-footer');
    const totalEl = document.getElementById('drawer-total-amount');

    if (!list) return;

    if (cartItems.length === 0) {
      list.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'flex';

    list.innerHTML = '';
    let totalEur = 0;

    cartItems.forEach((item, idx) => {
      totalEur += item.piece.price;
      const row = document.createElement('div');
      row.className = 'drawer-item';
      row.innerHTML = `
        <div class="drawer-item-thumb">
          <img src="${item.piece.images[0]}" alt="${item.piece.name}">
        </div>
        <div class="drawer-item-info">
          <div>
            <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:8px; letter-spacing:0.2em; color:var(--color-ash);">
              <span>${item.piece.code}</span>
              <span style="color:var(--color-bone);">${formatPrice(item.piece.price)}</span>
            </div>
            <div class="drawer-item-title">${item.piece.name}</div>
            <div class="drawer-item-meta">PATTERN SIZE: ${item.size}</div>
          </div>
          <button class="drawer-item-dismiss" data-idx="${idx}" data-cursor="DISMISS">[ DISMISS ]</button>
        </div>
      `;
      row.querySelector('.drawer-item-dismiss').addEventListener('click', () => removeFromCart(idx));
      list.appendChild(row);
    });

    if (totalEl) totalEl.textContent = formatPrice(totalEur);
  }

  // --- Currency Recalculation ---
  function setCurrency(newCurr) {
    if (!CURRENCY_RATES[newCurr]) return;
    currentCurrency = newCurr;

    document.querySelectorAll('.current-curr-label').forEach(el => el.textContent = newCurr);
    document.querySelectorAll('.footer-curr-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-currency') === newCurr);
    });

    // Update all prices on cards
    document.querySelectorAll('[data-piece-price-eur]').forEach(el => {
      const eur = parseFloat(el.getAttribute('data-piece-price-eur'));
      if (!isNaN(eur)) el.textContent = formatPrice(eur);
    });

    if (currentActivePiece) {
      const modalPrice = document.getElementById('modal-piece-price');
      if (modalPrice) modalPrice.textContent = formatPrice(currentActivePiece.price);
    }

    renderCart();
  }

  // --- Archive Filter ---
  function initArchiveFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.archive-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const drop = card.getAttribute('data-drop');
          if (filter === 'ALL' || drop === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Document Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initArchiveFilters();

    // Audio Trigger
    const soundBtn = document.getElementById('sound-trigger');
    if (soundBtn) soundBtn.addEventListener('click', toggleAudio);

    // Drawer Triggers
    const drawerBtn = document.getElementById('drawer-trigger');
    if (drawerBtn) drawerBtn.addEventListener('click', openCartDrawer);

    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCartDrawer);

    const drawerOverlay = document.getElementById('cart-drawer');
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay) closeCartDrawer();
      });
    }

    // Modal Close Triggers
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePieceModal);

    const modalOverlay = document.getElementById('piece-modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePieceModal();
      });
    }

    // Modal Acquire Trigger
    const acquireBtn = document.getElementById('modal-acquire-btn');
    if (acquireBtn) {
      acquireBtn.addEventListener('click', () => {
        if (currentActivePiece) {
          addToCart(currentActivePiece, currentSelectedSize);
        }
      });
    }

    // Archive cards click
    document.querySelectorAll('[data-open-piece]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-open-piece');
        openPieceModal(id);
      });
    });

    // Currency Switchers in footer
    document.querySelectorAll('.footer-curr-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const curr = btn.getAttribute('data-currency');
        setCurrency(curr);
      });
    });

    // Checkout Simulation
    const checkoutBtn = document.getElementById('drawer-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cartItems.length === 0) return;
        checkoutBtn.textContent = 'ALLOCATION DISPATCHED ✓';
        setTimeout(() => {
          checkoutBtn.textContent = 'CONFIRM PRIVATE ACQUISITION';
          cartItems = [];
          updateCartBadge();
          renderCart();
          closeCartDrawer();
        }, 2200);
      });
    }

    // ESC Key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePieceModal();
        closeCartDrawer();
      }
    });

    // Scroll down indicator
    const scrollDownBtn = document.getElementById('hero-scroll-btn');
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => {
        const manifesto = document.getElementById('manifesto');
        if (manifesto) manifesto.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

})();
