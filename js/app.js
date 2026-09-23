/**
 * SILENT — The Luxury of Disappearance
 * Optimized Vanilla JS Core Engine with i18n Multilingual System (EN/ES/FR/JA)
 */

(function () {
  'use strict';

  // --- Multilingual Internationalization Dictionary ---
  const I18N = {
    en: {
      nav: {
        sub: "DISAPPEARANCE ARCHIVE",
        issue: "ISSUE 001 — VOID & MATTER",
        audioOn: "AUDIO [ON]",
        audioOff: "AUDIO [OFF]",
        drawer: "DRAWER"
      },
      hero: {
        vol: "VOL. 01 / ARCHIVE MANIFEST",
        motto: "THE LUXURY OF DISAPPEARANCE",
        coords: "48.8566° N, 2.3522° E",
        quote: "“We do not design garments to be seen. We construct armor to vanish.”",
        issue: "ISSUE 001 — VOID & MATTER",
        origin: "FABRICATED IN JAPAN & ITALY",
        restricted: "RESTRICTED ALLOCATION",
        explore: "EXPLORE ARCHIVE",
        season: "AUTUMN / WINTER 2026",
        collections: "COLLECTIONS 001 & 002"
      },
      manifesto: {
        tag: "[ 01 / PRINCIPLE ]",
        badge: "DECLARATION OF DISAPPEARANCE",
        headline: "In an era of relentless algorithmic visibility, <span class=\"highlight\">silence</span> becomes the only authentic luxury.",
        col1Title: "MATERIAL INTEGRITY",
        col1Text: "We reject seasonal acceleration and the vulgarity of mass production. Every piece exists as an unrepeatable specimen—sculpted from 620 GSM unbrushed loopback cotton, 16oz raw Japanese selvedge denim woven on low-tension vintage shuttle looms, and dry-waxed European canvases.",
        col2Title: "RADICAL ANONYMITY",
        col2Text: "The garments are stripped of commercial insignia. Instead, anatomical curved cuts, distressed star geometries, and muted heraldic intarsias offer tactile recognition solely to the initiated. To wear SILENT is to reclaim privacy as an art form.",
        foot1: "NO ADVERTISING. NO SPONSORED GAZE.",
        foot2: "STRICT ALLOCATION OF 10 TO 24 PIECES PER DISCIPLINE"
      },
      lookbook: {
        tag: "[ 02 / EDITORIAL FLOW ]",
        title: "THE MAGAZINE SPREAD",
        subtitle: "PARIS CAMPAIGN SPREAD / COUTURE ARCHITECTURE",
        lead: "“Tactile intimacy captured in monochromatic stillness.”",
        look1Sub: "ISSUE 001 / SPREAD 01",
        look1Title: "LOOK 01 — DESTRUCTED SILHOUETTE",
        look1Btn: "INSPECT FIT [SL-05]",
        look1Dissection: "DISSECTION OF PROPORTION",
        look1Quote: "“The silhouette ceases to represent the human body; it becomes an architectural shelter against surveillance.”",
        look1Text: "The bondage straps allow dynamic contraction of volume, transforming ultra-wide leg bell cuts into articulated geometric contours.",
        look2Fig: "FIG. 02 — SELVEDGE & D-RING",
        look2Caption: "RAW DISTRESSED THREADS / OXIDIZED STEEL",
        look3Tag: "[ SPREAD 02 / ATELIER NOTES ]",
        look3Title: "Muted Heraldry on <span class=\"font-italic\">Heavyweight Cotton</span>",
        look3Quote: "The cross is stripped of dogmatic weight; transformed into a talisman of silence and contained defiance, screenprinted in tonal charcoal pigment discharge.",
        look3Btn: "VIEW ARCHIVE SPEC [SL-01]",
        look3Sub: "ISSUE 001 / SPREAD 03",
        look3Name: "LOOK 03 — HERALDIC OCCULT INTARSIA",
        look3Reveal: "REVEAL PIECE"
      },
      archive: {
        tag: "[ 03 / THE PERMANENT ARCHIVE ]",
        title: "HERMETIC INVENTORY",
        filterAll: "COMPLETE ARCHIVE",
        filterDrop1: "DROP 001",
        filterDrop2: "DROP 002",
        prompt: "INSPECT SPECIFICATION ↗",
        originLabel: "ORIGIN:",
        available: "AVAILABLE",
        lowAllocation: "LOW ALLOCATION",
        quote: "“We do not mass produce. When an edition is exhausted, the pattern is permanently retired to the vault.”",
        vaultNote: "SILENT HERMETIC ARCHIVE — ISSUE 001"
      },
      modal: {
        close: "[ ESC / CLOSE ]",
        viewLabel: "SPECIMEN VIEW",
        anatomyTitle: "STRUCTURAL ANATOMY",
        measurementsTitle: "MEASUREMENTS (CM)",
        clickSizePrompt: "CLICK SIZE TO ALLOCATE",
        thSize: "SIZE",
        thChest: "CHEST",
        thShoulder: "SHOULDER",
        thLength: "LENGTH",
        thHem: "HEM",
        composition: "COMPOSITION",
        origin: "ORIGIN",
        acquireBtn: "REQUEST PIECE ALLOCATION",
        addedBtn: "ALLOCATION ADDED TO DRAWER ✓"
      },
      drawer: {
        dossier: "CONFIDENTIAL DOSSIER",
        title: "THE PRIVATE DRAWER",
        close: "[ CLOSE ]",
        emptyTitle: "DRAWER IS EMPTY",
        emptySub: "“No garments allocated yet. Silence awaits your choice.”",
        directiveLabel: "CONFIDENTIAL DIRECTIVE / SIZING INQUIRY:",
        directivePlaceholder: "Enter private address or instructions...",
        totalLabel: "TOTAL ARCHIVAL ESTIMATE:",
        courierNote: "* INCLUDES INSURED PRIVATE COURIER DIRECT FROM PARIS ATELIER.",
        checkoutBtn: "CONFIRM PRIVATE ACQUISITION",
        dispatchedBtn: "ALLOCATION DISPATCHED ✓",
        dismiss: "[ DISMISS ]",
        sizeLabel: "PATTERN SIZE:"
      },
      footer: {
        title: "SILENT",
        desc: "AN INDEPENDENT ATELIER EXPLORING THE BOUNDARIES OF HIGH COUTURE BRUTALISM, OBSIDIAN TEXTILES, AND TOTAL ANONYMITY.",
        locations: "PHYSICAL LOCATIONS",
        transmissions: "TRANSMISSIONS",
        privateComms: "PRIVATE COMMUNICATIONS:",
        encryptedDispatch: "ENCRYPTED DISPATCH:",
        currencyReg: "CURRENCY REGISTER",
        ecbNote: "REAL-TIME SETTLEMENTS CALCULATED VIA EUROPEAN CENTRAL BANK FIXING.",
        copyright: "© 2026 SILENT ARCHIVE. ALL PATTERNS & DESIGNS COPYRIGHT PROTECTED.",
        privacy: "PRIVACY PROTOCOL",
        terms: "TERMS OF DISAPPEARANCE",
        vault: "VAULT ACCESS",
        issueNote: "ISSUE 001 / MATIÈRE ET VIDE"
      },
      pieces: {
        'sl-01': {
          name: "ANATOMICAL CURVED-SEAM TEE",
          desc: "Ergonomically sculpted t-shirt featuring dual curved front seam paneling following thoracic muscle lines. The reverse exhibits an occult neo-tribal blade cross insignia executed in tonal charcoal pigment discharge. Raw-cut hem with micro-reinforcements.",
          material: "320 GSM DOUBLE-FACED COTTON • TOKYO CUT",
          origin: "JAPAN"
        },
        'sl-02': {
          name: "BATWING HEAVYWEIGHT HOODIE",
          desc: "Monumental hooded sweatshirt constructed from 620 GSM dense unbrushed cotton. Features articulated oval elbow reinforcement patches and the archival SILENT condensed serif logo across the chest with hand-applied mineral soot patina.",
          material: "620 GSM COMPACT FRENCH TERRY • MILAN",
          origin: "ITALY"
        },
        'sl-03': {
          name: "STAR ARCHITECTURE RAW DENIM",
          desc: "Architectural flare denim engineered with spiral curved seam construction that distorts the leg volume into a sculptural bell. The rear displays a geometric star-patterned yoke with hand-frayed distressed raw seams.",
          material: "16OZ KURABO SELVEDGE • FRAYED STAR YOKE",
          origin: "KOJIMA"
        },
        'sl-04': {
          name: "HERALDIC CROPPED RIBBED KNIT",
          desc: "Heavyweight dual-gauge ribbed knit sweater displaying a tonal gothic intarsia cross on the chest. Treated with cold-water enzyme wash for subtle surface distress while maintaining cashmere softness.",
          material: "70% MERINO / 30% CASHMERE • TONAL CROSS",
          origin: "BIELLA"
        },
        'sl-05': {
          name: "MODULAR BONDAGE TROUSERS",
          desc: "Avant-garde tactical bondage trousers equipped with detachable cross-straps, dual front tension clips, and custom blackened steel D-rings. Subtle inverted pentagram tonal embroidery beneath the waistband.",
          material: "490 GSM DRY-WAXED CANVAS • STEEL D-RINGS",
          origin: "ANTWERP"
        },
        'sl-06': {
          name: "MINERAL ACID-WASH RAGLAN HOOD",
          desc: "Mineral acid-washed hooded sweatshirt featuring an organic stone wash that generates unpredictable graphite mottling across the surface. Constructed with seamless curved raglan lines and a structured neck collar.",
          material: "580 GSM FRENCH TERRY • STONE ENZYME",
          origin: "MILAN"
        }
      }
    },

    es: {
      nav: {
        sub: "ARCHIVO DE DESAPARICIÓN",
        issue: "EDICIÓN 001 — VACÍO Y MATERIA",
        audioOn: "AUDIO [ACTIVO]",
        audioOff: "AUDIO [SILENCIO]",
        drawer: "GAVETA"
      },
      hero: {
        vol: "VOL. 01 / MANIFIESTO DE ARCHIVO",
        motto: "EL LUJO DE LA DESAPARICIÓN",
        coords: "48.8566° N, 2.3522° E",
        quote: "“No diseñamos prendas para ser vistos. Construimos armaduras para desaparecer.”",
        issue: "EDICIÓN 001 — VACÍO Y MATERIA",
        origin: "FABRICADO EN JAPÓN E ITALIA",
        restricted: "ASIGNACIÓN RESTRINGIDA",
        explore: "EXPLORAR ARCHIVO",
        season: "OTOÑO / INVIERNO 2026",
        collections: "COLECCIONES 001 Y 002"
      },
      manifesto: {
        tag: "[ 01 / PRINCIPIO ]",
        badge: "DECLARACIÓN DE DESAPARICIÓN",
        headline: "En una era de implacable visibilidad algorítmica, el <span class=\"highlight\">silencio</span> se convierte en el único lujo auténtico.",
        col1Title: "INTEGRIDAD MATERIAL",
        col1Text: "Rechazamos la aceleración estacional y la vulgaridad de la producción en masa. Cada pieza existe como un espécimen irrepetible: esculpido en algodón loopback de 620 GSM sin cepillar, denim selvedge japonés crudo de 16oz tejido en telares antiguos de baja tensión y lonas europeas enceradas en seco.",
        col2Title: "ANONIMATO RADICAL",
        col2Text: "Las prendas se despojan de cualquier insignia comercial. En su lugar, cortes anatómicos curvos, geometrías de estrella deshilachadas e intarsias heráldicas tonales ofrecen reconocimiento táctil únicamente a los iniciados. Vestir SILENT es reclamar la privacidad como obra de arte.",
        foot1: "SIN PUBLICIDAD. SIN MIRADA PATROCINADA.",
        foot2: "ASIGNACIÓN ESTRICTA DE 10 A 24 PIEZAS POR DISCIPLINA"
      },
      lookbook: {
        tag: "[ 02 / FLUJO EDITORIAL ]",
        title: "EL PLIEGO DE REVISTA",
        subtitle: "CAMPAÑA EDITORIAL PARÍS / ARQUITECTURA COUTURE",
        lead: "“Intimidad táctil capturada en quietud monocromática.”",
        look1Sub: "EDICIÓN 001 / PLIEGO 01",
        look1Title: "LOOK 01 — SILUETA DESTRUIDA",
        look1Btn: "INSPECCIONAR PATRÓN [SL-05]",
        look1Dissection: "DISECCIÓN DE LA PROPORCIÓN",
        look1Quote: "“La silueta deja de representar el cuerpo humano; se convierte en un refugio arquitectónico frente a la vigilancia.”",
        look1Text: "Las correas bondage permiten la contracción dinámica del volumen, transformando las perneras anchas acampanadas en contornos geométricos articulados.",
        look2Fig: "FIG. 02 — SELVEDGE Y ANILLA D-RING",
        look2Caption: "HILOS CRUDOS DESHILACHADOS / ACERO OXIDADO",
        look3Tag: "[ PLIEGO 02 / NOTAS DE TALLER ]",
        look3Title: "Heráldica Moteada sobre <span class=\"font-italic\">Algodón Pesado</span>",
        look3Quote: "La cruz se despoja de peso dogmático; se transforma en un talismán de silencio y desafío contenido, serigrafiada en descarga tonal carbón.",
        look3Btn: "VER FICHA DE ARCHIVO [SL-01]",
        look3Sub: "EDICIÓN 001 / PLIEGO 03",
        look3Name: "LOOK 03 — INTARSIA HERÁLDICA OCULTA",
        look3Reveal: "REVELAR PRENDA"
      },
      archive: {
        tag: "[ 03 / EL ARCHIVO PERMANENTE ]",
        title: "INVENTARIO HERMÉTICO",
        filterAll: "ARCHIVO COMPLETO",
        filterDrop1: "DROP 001",
        filterDrop2: "DROP 002",
        prompt: "INSPECCIONAR FICHA ↗",
        originLabel: "ORIGEN:",
        available: "DISPONIBLE",
        lowAllocation: "ASIGNACIÓN LIMITADA",
        quote: "“No producimos en masa. Cuando se agota una edición, el patrón se retira permanentemente a la bóveda.”",
        vaultNote: "ARCHIVO HERMÉTICO SILENT — EDICIÓN 001"
      },
      modal: {
        close: "[ ESC / CERRAR ]",
        viewLabel: "VISTA DEL ESPÉCIMEN",
        anatomyTitle: "ANATOMÍA ESTRUCTURAL",
        measurementsTitle: "MEDIDAS (CM)",
        clickSizePrompt: "SELECCIONA TALLA PARA ASIGNAR",
        thSize: "TALLA",
        thChest: "PECHO",
        thShoulder: "HOMBRO",
        thLength: "LARGO",
        thHem: "BAJO",
        composition: "COMPOSICIÓN",
        origin: "ORIGEN",
        acquireBtn: "SOLICITAR ASIGNACIÓN DE PRENDA",
        addedBtn: "ASIGNACIÓN AÑADIDA A LA GAVETA ✓"
      },
      drawer: {
        dossier: "DOSSIER CONFIDENCIAL",
        title: "LA GAVETA PRIVADA",
        close: "[ CERRAR ]",
        emptyTitle: "LA GAVETA ESTÁ VACÍA",
        emptySub: "“Aún no hay prendas asignadas. El silencio aguarda tu elección.”",
        directiveLabel: "DIRECTIVA CONFIDENCIAL / CONSULTA DE TALLAJE:",
        directivePlaceholder: "Introduce dirección privada o instrucciones de entrega...",
        totalLabel: "ESTIMACIÓN TOTAL DE ARCHIVO:",
        courierNote: "* INCLUYE SERVICIO DE MENSAJERÍA PRIVADA ASEGURADA DESDE EL ATELIER DE PARÍS.",
        checkoutBtn: "CONFIRMAR ADQUISICIÓN PRIVADA",
        dispatchedBtn: "SOLICITUD DE ASIGNACIÓN DESPACHADA ✓",
        dismiss: "[ RETIRAR ]",
        sizeLabel: "TALLA DE PATRÓN:"
      },
      footer: {
        title: "SILENT",
        desc: "ATELIER INDEPENDIENTE QUE EXPLORA LOS LÍMITES DEL BRUTALISMO DE ALTA COSTURA, LOS TEXTILES OBSIDIANA Y EL ANONIMATO TOTAL.",
        locations: "UBICACIONES FÍSICAS",
        transmissions: "TRANSMISIONES",
        privateComms: "COMUNICACIONES PRIVADAS:",
        encryptedDispatch: "DESPACHO ENCRIPTADO:",
        currencyReg: "REGISTRO DE DIVISAS",
        ecbNote: "LIQUIDACIONES EN TIEMPO REAL CALCULADAS VÍA FIJACIÓN DEL BANCO CENTRAL EUROPEO.",
        copyright: "© 2026 ARCHIVO SILENT. TODOS LOS PATRONES Y DISEÑOS PROTEGIDOS POR COPYRIGHT.",
        privacy: "PROTOCOLO DE PRIVACIDAD",
        terms: "TÉRMINOS DE DESAPARICIÓN",
        vault: "ACCESO A BÓVEDA",
        issueNote: "EDICIÓN 001 / MATIÈRE ET VIDE"
      },
      pieces: {
        'sl-01': {
          name: "CAMISETA TÉCNICA DE COSTURA CURVA",
          desc: "Camiseta de corte anatómico con paneles frontales curvados ergonómicos siguiendo la musculatura torácica. La espalda exhibe la cruz heráldica neo-tribal serigrafiada en descarga tonal carbón. Bajo crudo con micro-refuerzos.",
          material: "320 GSM ALGODÓN ORGÁNICO DOBLE FAZ • PATRÓN TOKIO",
          origin: "JAPÓN"
        },
        'sl-02': {
          name: "SUDADERA HEAVYWEIGHT BATWING",
          desc: "Sudadera monumental confeccionada en 620 GSM de algodón loopback denso. Incorpora coderas ovaladas articuladas y el logotipo tipográfico de archivo SILENT en el pecho con pátina mineral aplicada a mano.",
          material: "620 GSM FRENCH TERRY COMPACTO • MILÁN",
          origin: "ITALIA"
        },
        'sl-03': {
          name: "DENIM RAW DE ARQUITECTURA ESTRELLA",
          desc: "Vaquero acampanado arquitectónico diseñado con costuras en espiral que retuercen el volumen hacia una campana escultórica. Trasera con canesú de estrella geométrica y costuras deshilachadas a mano.",
          material: "16OZ KURABO SELVEDGE • CANESÚ ESTRELLA DESHILACHADO",
          origin: "KOJIMA"
        },
        'sl-04': {
          name: "PUNTO CANALÉ CROPPED HERÁLDICO",
          desc: "Jersey de punto grueso canalé con cruz heráldica tonal tejida en intarsia en el pecho. Tratado con lavado de enzimas en frío para conseguir un suave desgaste conservando la calidez de la cachemira.",
          material: "70% LANA MERINO / 30% CACHEMIRA • CRUZ TONAL",
          origin: "BIELLA"
        },
        'sl-05': {
          name: "PANTALÓN TÉCNICO BONDAGE MODULAR",
          desc: "Pantalón avant-garde de pernera ultra-ancha equipado con correas desmontables cruzadas, mosquetones de tensión y anillas D-Ring de acero pavonado. Bordado tonal sutil de estrella invertida.",
          material: "490 GSM CANVAS ENCERADO EN SECO • ANILLAS ACERO",
          origin: "AMBERES"
        },
        'sl-06': {
          name: "SUDADERA RAGLÁN EN LAVADO MINERAL",
          desc: "Sudadera con lavado ácido mineral que produce un moteado orgánico impredecible de grafito. Confeccionada con mangas raglán anatómicas sin costura de hombro y capucha estructurada.",
          material: "580 GSM FRENCH TERRY • TRATADO A LA PIEDRA",
          origin: "MILÁN"
        }
      }
    },

    fr: {
      nav: {
        sub: "ARCHIVE DE DISPARITION",
        issue: "NUMÉRO 001 — LE VIDE ET LA MATIÈRE",
        audioOn: "AUDIO [ACTIVÉ]",
        audioOff: "AUDIO [SILENCE]",
        drawer: "TIROIR"
      },
      hero: {
        vol: "VOL. 01 / MANIFESTE D'ARCHIVE",
        motto: "LE LUXE DE LA DISPARITION",
        coords: "48.8566° N, 2.3522° E",
        quote: "« Nous ne concevons pas de vêtements pour être vus. Nous bâtissons des armures pour disparaître. »",
        issue: "NUMÉRO 001 — LE VIDE ET LA MATIÈRE",
        origin: "FABRIQUÉ AU JAPON ET EN ITALIE",
        restricted: "ALLOCATION RESTREINTE",
        explore: "EXPLORER L'ARCHIVE",
        season: "AUTOMNE / HIVER 2026",
        collections: "COLLECTIONS 001 & 002"
      },
      manifesto: {
        tag: "[ 01 / PRINCIPE ]",
        badge: "DÉCLARATION DE DISPARITION",
        headline: "À une époque de visibilité algorithmique implacable, le <span class=\"highlight\">silence</span> devient le seul luxe authentique.",
        col1Title: "INTÉGRITÉ MATÉRIELLE",
        col1Text: "Nous refusons l'accélération saisonnière et la vulgarité de la confection de masse. Chaque pièce existe en spécimen unique — sculptée dans un coton loopback non brossé de 620 GSM, un denim selvedge brut japonais de 16oz et des toiles cirées à sec.",
        col2Title: "ANONYMAT RADICAL",
        col2Text: "Les pièces sont dépouillées de tout logo commercial. Des coupes anatomiques courbées, des géométries d'étoiles effilochées et des intarsias héraldiques ton sur ton offrent une reconnaissance tactile réservée aux initiés.",
        foot1: "AUCUNE PUBLICITÉ. AUCUN REGARD COMMANDITÉ.",
        foot2: "ALLOCATION STRICTE DE 10 À 24 PIÈCES PAR DISCIPLINE"
      },
      lookbook: {
        tag: "[ 02 / FLUX ÉDITORIAL ]",
        title: "LE CAHIER ÉDITORIAL",
        subtitle: "CAMPAGNE ÉDITORIALE PARIS / HAUTE ARCHITECTURE",
        lead: "« Intimité tactile capturée dans un calme monochrome. »",
        look1Sub: "NUMÉRO 001 / PLANCHE 01",
        look1Title: "LOOK 01 — SILHOUETTE DÉCONSTRUITE",
        look1Btn: "INSPECTER LA COUPE [SL-05]",
        look1Dissection: "DISSECTION DES PROPORTIONS",
        look1Quote: "« La silhouette cesse d'épouser le corps ; elle devient un abri architectural face à la surveillance. »",
        look1Text: "Les sangles bondage permettent une contraction dynamique du volume, convertissant les jambes évasées en contours géométriques articulés.",
        look2Fig: "FIG. 02 — SELVEDGE & ANNEAU D-RING",
        look2Caption: "FILS BRUTS EFFILOCHÉS / ACIER OXYDÉ",
        look3Tag: "[ PLANCHE 02 / NOTES D'ATELIER ]",
        look3Title: "Héraldique Sombre sur <span class=\"font-italic\">Coton Lourd</span>",
        look3Quote: "La croix est délestée de tout dogme ; elle devient un talisman de silence et de résistance contenue, sérigraphiée par décharge charbon.",
        look3Btn: "VOIR LA FICHE D'ARCHIVE [SL-01]",
        look3Sub: "NUMÉRO 001 / PLANCHE 03",
        look3Name: "LOOK 03 — INTARSIA HÉRALDIQUE OCCULTE",
        look3Reveal: "RÉVÉLER LA PIÈCE"
      },
      archive: {
        tag: "[ 03 / L'ARCHIVE PERMANENTE ]",
        title: "INVENTAIRE HERMÉTIQUE",
        filterAll: "TOUTE L'ARCHIVE",
        filterDrop1: "DROP 001",
        filterDrop2: "DROP 002",
        prompt: "INSPECTER LA PIÈCE ↗",
        originLabel: "ORIGINE :",
        available: "DISPONIBLE",
        lowAllocation: "ALLOCATION LIMITÉE",
        quote: "« Nous ne produisons pas en série. Lorsqu'une édition s'épuise, le patron rejoint définitivement la chambre forte. »",
        vaultNote: "ARCHIVE HERMÉTIQUE SILENT — NUMÉRO 001"
      },
      modal: {
        close: "[ ÉCHAP / FERMER ]",
        viewLabel: "VUE DU SPÉCIMEN",
        anatomyTitle: "ANATOMIE STRUCTURALE",
        measurementsTitle: "MESURES (CM)",
        clickSizePrompt: "CHOISIR UNE TAILLE POUR L'ALLOCATION",
        thSize: "TAILLE",
        thChest: "POITRINE",
        thShoulder: "ÉPAULE",
        thLength: "LONGUEUR",
        thHem: "OURLET",
        composition: "COMPOSITION",
        origin: "ORIGINE",
        acquireBtn: "DEMANDER UNE ALLOCATION DE PIÈCE",
        addedBtn: "ALLOCATION AJOUTÉE AU TIROIR ✓"
      },
      drawer: {
        dossier: "DOSSIER CONFIDENTIEL",
        title: "LE TIROIR PRIVÉ",
        close: "[ FERMER ]",
        emptyTitle: "LE TIROIR EST VIDE",
        emptySub: "« Aucune pièce allouée pour le moment. Le silence attend votre choix. »",
        directiveLabel: "DIRECTIVE CONFIDENTIELLE / DEMANDE DE MESURE :",
        directivePlaceholder: "Indiquez votre adresse privée ou vos consignes...",
        totalLabel: "ESTIMATION TOTALE D'ARCHIVE :",
        courierNote: "* COMPREND LE COURSIER PRIVÉ ASSURÉ EXPÉDIÉ DEPUIS L'ATELIER DE PARIS.",
        checkoutBtn: "CONFIRMER L'ACQUISITION PRIVÉE",
        dispatchedBtn: "DEMANDE D'ALLOCATION EXPÉDIÉE ✓",
        dismiss: "[ RETIRER ]",
        sizeLabel: "TAILLE PATRON :"
      },
      footer: {
        title: "SILENT",
        desc: "ATELIER INDÉPENDANT EXPLORANT LES CONFINS DU BRUTALISME HAUTE COUTURE, DES TEXTILES OBSIDIENNE ET DE L'ANONYMAT TOTAL.",
        locations: "EMPLACEMENTS PHYSIQUES",
        transmissions: "TRANSMISSIONS",
        privateComms: "COMMUNICATIONS PRIVÉES :",
        encryptedDispatch: "TRANSMISSION CHIFFRÉE :",
        currencyReg: "REGISTRE DES DEVISES",
        ecbNote: "RÈGLEMENTS EN TEMPS RÉEL FIXÉS SELON LA BANQUE CENTRALE EUROPÉENNE.",
        copyright: "© 2026 ARCHIVE SILENT. TOUS DROITS RÉSERVÉS.",
        privacy: "PROTOCOLE DE CONFIDENTIALITÉ",
        terms: "CONDITIONS DE DISPARITION",
        vault: "ACCÈS CHAMBRE FORTE",
        issueNote: "NUMÉRO 001 / MATIÈRE ET VIDE"
      },
      pieces: {
        'sl-01': {
          name: "T-SHIRT ANATOMIQUE À COUTURES COURBES",
          desc: "T-shirt à coupe anatomique avec découpes thoraciques ergonomiques. Le dos arbore une croix héraldique néo-tribale imprimée en décharge pigmentaire charbon.",
          material: "320 GSM COTON BIOLOGIQUE DOUBLE-FACE • COUPE TOKYO",
          origin: "JAPON"
        },
        'sl-02': {
          name: "HOODIE LOURD COUPE CHAUVE-SOURIS",
          desc: "Sweatshirt monumental en coton loopback 620 GSM dense. Équipé d'empiècements ovales aux coudes et du monogramme SILENT patiné à la cendre minérale.",
          material: "620 GSM FRENCH TERRY COMPACT • MILAN",
          origin: "ITALIE"
        },
        'sl-03': {
          name: "DENIM BRUT ARCHITECTURE ÉTOILE",
          desc: "Denim architectural évasé à coutures hélicoïdales torsadées. L'arrière dévoile un empiècement en étoile géométrique aux bords bruts frangés.",
          material: "16OZ KURABO SELVEDGE • CANESÚ ÉTOILE EFFILOCHÉ",
          origin: "KOJIMA"
        },
        'sl-04': {
          name: "TRICOT CÔTELÉ CROPPED HÉRALDIQUE",
          desc: "Pull en grosse côte orné d'une croix héraldique en intarsia ton sur ton sur le torse. Traité au lavage enzymatique à froid alliant douceur et patine.",
          material: "70% LAINE MÉRINOS / 30% CACHEMIRE • CROIX TONALE",
          origin: "BIELLA"
        },
        'sl-05': {
          name: "PANTALON BONDAGE MODULAIRE",
          desc: "Pantalon tactique ample doté de sangles croisées amovibles, mousquetons et anneaux D-Ring en acier bruni. Broderie fine d'étoile inversée.",
          material: "490 GSM TOILE DE COTON CIRÉ • ANNEAUX ACIER",
          origin: "ANVERS"
        },
        'sl-06': {
          name: "HOODIE RAGLAN DÉLAVAGE MINÉRAL",
          desc: "Sweatshirt à capuche au délavage minéral acide dessinant des marbrures graphite uniques. Confectionné en manches raglan sans couture d'épaule.",
          material: "580 GSM FRENCH TERRY • LAVÉ À LA PIERRE",
          origin: "MILAN"
        }
      }
    },

    ja: {
      nav: {
        sub: "消失のアーカイヴ",
        issue: "創刊第001号 — 虚無と物質",
        audioOn: "音響 [作動]",
        audioOff: "音響 [消音]",
        drawer: "私的保管箱"
      },
      hero: {
        vol: "VOL. 01 / 記録原簿",
        motto: "消失という至高の贅沢",
        coords: "48.8566° N, 2.3522° E",
        quote: "「我らは見られるための衣を作らぬ。消失するための鎧を仕立てる。」",
        issue: "第001号 — 虚無と物質",
        origin: "日本およびイタリアにて制作",
        restricted: "極小限定配分",
        explore: "記録庫を閲覧",
        season: "2026年 秋冬",
        collections: "第001集・第002集"
      },
      manifesto: {
        tag: "[ 01 / 原則 ]",
        badge: "完全消失への宣言",
        headline: "過剰な情報と可視性の時代において、<span class=\"highlight\">沈黙</span>こそが唯一の本物の贅沢となる。",
        col1Title: "素材への絶対的誠実",
        col1Text: "私たちは季節ごとの消費加速や大量生産の卑俗さを拒絶します。すべての作品は代替不可能な標本として存在します。620GSMの超高密度フレンチテリー、旧式シャトル織機で織り上げられた16oz生セルビッジデニム、欧州産ドライワックスキャンバスによって彫刻されています。",
        col2Title: "徹底的匿名性",
        col2Text: "衣服から商業的な表徴は完全に排除されています。人体に沿う曲線カッティング、断ち切りの星型幾何学ヨーク、同系色の紋章編み込みのみが、本物を知る者にだけ触覚的な確証を与えます。",
        foot1: "商業広告の完全排除。買収された視線の拒否。",
        foot2: "各型10着〜24着のみの厳格な配分制限"
      },
      lookbook: {
        tag: "[ 02 / 誌面展開 ]",
        title: "限定誌面記録",
        subtitle: "パリ・エディトリアル / 建築的クチュール",
        lead: "「単色世界の静寂に宿る、触覚的親密さ。」",
        look1Sub: "第001号 / 見開き 01",
        look1Title: "LOOK 01 — 解体された輪郭",
        look1Btn: "構造を検証 [SL-05]",
        look1Dissection: "プロポーションの解剖",
        look1Quote: "「輪郭はもはや人体を模倣しない。監視の視線に対する建築的シェルターへと昇華する。」",
        look1Text: "ボンデージストラップが布地のボリュームを自在に収縮させ、極太のフレアシルエットを立体幾何学へと変容させます。",
        look2Fig: "図版 02 — セルビッジとDリング",
        look2Caption: "断ち切り生糸の質感 / 燻し酸化鋼材",
        look3Tag: "[ 見開き 02 / 工房手記 ]",
        look3Title: "重厚なる綿織物に宿る <span class=\"font-italic\">沈黙の紋章</span>",
        look3Quote: "十字架から教義の重圧は削ぎ落とされ、沈黙と静かな抵抗の護符へと昇華。墨炭色の抜染顔料によって背面に定着されています。",
        look3Btn: "仕様書を閲覧 [SL-01]",
        look3Sub: "第001号 / 見開き 03",
        look3Name: "LOOK 03 — 秘教的紋章インターシャ",
        look3Reveal: "作品を露わにする"
      },
      archive: {
        tag: "[ 03 / 恒久記録庫 ]",
        title: "秘匿所蔵一覧",
        filterAll: "全作品一覧",
        filterDrop1: "第001集",
        filterDrop2: "第002集",
        prompt: "詳細仕様を開示 ↗",
        originLabel: "生産地:",
        available: "配分可能",
        lowAllocation: "残少",
        quote: "「私たちは決して大量に作らない。限定数が尽きた時、その型紙は永久に金庫へと封印される。」",
        vaultNote: "サイレント秘匿保管庫 — 第001号"
      },
      modal: {
        close: "[ 閉じる / ESC ]",
        viewLabel: "標本視点",
        anatomyTitle: "構造的解剖",
        measurementsTitle: "寸法仕様 (CM)",
        clickSizePrompt: "希望サイズを選択して割当申請",
        thSize: "寸法",
        thChest: "身幅",
        thShoulder: "肩幅",
        thLength: "着丈",
        thHem: "裾幅",
        composition: "組成素材",
        origin: "原産地",
        acquireBtn: "限定制作分の割当を申請する",
        addedBtn: "保管箱に登録されました ✓"
      },
      drawer: {
        dossier: "機密受託調書",
        title: "私的保管箱",
        close: "[ 閉じる ]",
        emptyTitle: "保管箱は空です",
        emptySub: "「まだ割り当てられた衣服はありません。沈黙があなたの決断を待っています。」",
        directiveLabel: "機密配送指示 / サイズ特記事項:",
        directivePlaceholder: "配送先または個別指示を入力...",
        totalLabel: "所蔵評価額合計:",
        courierNote: "* パリ工房より保険付き私設クーリエ便にて厳封直送されます。",
        checkoutBtn: "私的取得手続きを確定",
        dispatchedBtn: "割当申請が受理されました ✓",
        dismiss: "[ 削除 ]",
        sizeLabel: "選択サイズ:"
      },
      footer: {
        title: "SILENT",
        desc: "ハイファッションのブルータリズム、漆黒のテキスタイル、完全なる匿名性の境界を探求する独立アトリエ。",
        locations: "実体工房",
        transmissions: "通信回線",
        privateComms: "私的連絡先:",
        encryptedDispatch: "暗号化交信:",
        currencyReg: "決済通貨設定",
        ecbNote: "欧州中央銀行の基準為替相場によりリアルタイム算出。",
        copyright: "© 2026 SILENT ARCHIVE. 全てのパターンおよびデザインは保護されています。",
        privacy: "機密保持規定",
        terms: "消失規約",
        vault: "金庫アクセス",
        issueNote: "第001号 / 虚無と物質"
      },
      pieces: {
        'sl-01': {
          name: "解剖学的曲線裁断Tシャツ",
          desc: "胸郭筋肉の走行線に沿う立体曲線パネル構造。背面には墨炭色で抜染された先鋭な秘教的紋章ブレードクロスを配置。断ち切り裾仕上げ。",
          material: "320 GSM 両面編みオーガニックコットン • 東京型",
          origin: "日本"
        },
        'sl-02': {
          name: "超肉厚蝙蝠袖フーディー",
          desc: "620 GSMの超高密度裏毛を採用した彫刻的シルエット。関節に追従する楕円形エルボーパッチと、煤染めパティーナ加工によるSILENTロゴ。",
          material: "620 GSM 緊縮フレンチテリー • ミラノ",
          origin: "イタリア"
        },
        'sl-03': {
          name: "星型建築生セルビッジデニム",
          desc: "螺旋を描くスパイラルシームが裾のフレアへと立体的にねじれる構造設計。背面ヨークには手作業で断ち切られた星型パターンを配置。",
          material: "16OZ クラボウ生セルビッジ • 断ち切り星型ヨーク",
          origin: "児島"
        },
        'sl-04': {
          name: "紋章柄短丈リブニット",
          desc: "胸元に漆黒同色インターシャで十字紋章を編み込んだヘビーウェイト畦編みニット。カシミヤの極上の肌触りと適度な風合いを残す低温酵素洗い加工。",
          material: "メリノウール 70% / モンゴル産カシミヤ 30%",
          origin: "ビエッラ"
        },
        'sl-05': {
          name: "モジュラー・ボンデージトラウザー",
          desc: "脱着可能な交差ストラップと燻し鋼Dリングを備えた極太シルエット。ウエスト下に控えめな逆五芒星の同色刺繍を施したタクティカル仕立て。",
          material: "高密度ドライワックスキャンバス • 燻し鋼Dリング",
          origin: "アントワープ"
        },
        'sl-06': {
          name: "鉱物酸洗ラグランフーディー",
          desc: "不規則なグラファイト模様を生み出すストーン酵素ウォッシュ。肩接ぎを廃した流麗なアール形状のラグランスリーブと自立する立体フード。",
          material: "580 GSM ストーンウォッシュフレンチテリー",
          origin: "ミラノ"
        }
      }
    }
  };

  // --- Archival Garments Repository ---
  const ARCHIVE_DATA = {
    'sl-01': {
      id: 'sl-01',
      code: 'ARCHIVE CODE: SL-01',
      drop: 'DROP 001',
      price: 380,
      edition: '24 PIECES CRAFTED',
      statusKey: 'available',
      images: [
        'assets/archive/drop001_tee_blade.png',
        'assets/editorial/silent_look02_editorial.jpg',
        'assets/editorial/silent_macro_textile.jpg'
      ],
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
      drop: 'DROP 001',
      price: 680,
      edition: '16 PIECES CRAFTED',
      statusKey: 'lowAllocation',
      images: [
        'assets/archive/drop001_hoodie_silent.png',
        'assets/archive/drop001_hoodie_mineral.png',
        'assets/editorial/silent_macro_textile.jpg'
      ],
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
      drop: 'DROP 001',
      price: 790,
      edition: '12 PIECES CRAFTED',
      statusKey: 'available',
      images: [
        'assets/archive/drop001_denim_star_frayed.png',
        'assets/archive/drop001_denim_star_detailed.png',
        'assets/archive/drop001_pantalon_spiral.png'
      ],
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
      drop: 'DROP 002',
      price: 720,
      edition: '14 PIECES CRAFTED',
      statusKey: 'available',
      images: [
        'assets/archive/drop002_knit_bondage_black.png',
        'assets/archive/drop002_knit_bondage_grey.png',
        'assets/archive/drop002_knit_bondage_shadow.png'
      ],
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
      drop: 'DROP 002',
      price: 850,
      edition: '10 PIECES CRAFTED',
      statusKey: 'lowAllocation',
      images: [
        'assets/editorial/silent_look01_model.jpg',
        'assets/archive/drop002_knit_bondage_black.png',
        'assets/archive/drop002_knit_bondage_contrast.png'
      ],
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
      drop: 'DROP 001',
      price: 640,
      edition: '15 PIECES CRAFTED',
      statusKey: 'available',
      images: [
        'assets/archive/drop001_hoodie_mineral.png',
        'assets/editorial/silent_hero_cover.jpg',
        'assets/editorial/silent_macro_textile.jpg'
      ],
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

  let currentLang = localStorage.getItem('silent_lang') || 'en';
  let currentCurrency = 'EUR';
  let cartItems = [];
  let currentActivePiece = null;
  let currentSelectedSize = '';

  function formatPrice(eurAmount) {
    const info = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.EUR;
    const converted = Math.round(eurAmount * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  }

  // --- Reactive Multilingual (i18n) Engine ---
  function getI18nText(path, lang = currentLang) {
    const dict = I18N[lang] || I18N.en;
    const parts = path.split('.');
    let cur = dict;
    for (const p of parts) {
      if (cur && cur[p] !== undefined) {
        cur = cur[p];
      } else {
        return path;
      }
    }
    return cur;
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('silent_lang', lang);

    // Update active state in lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update text content with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getI18nText(key, lang);
      if (val) {
        if (val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update attributes with data-i18n-attr (e.g. "placeholder:drawer.directivePlaceholder")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrConfig = el.getAttribute('data-i18n-attr');
      const [attr, key] = attrConfig.split(':');
      const val = getI18nText(key, lang);
      if (val && attr) {
        el.setAttribute(attr, val);
      }
    });

    // Update pieces in the archive catalog
    Object.keys(ARCHIVE_DATA).forEach(pieceId => {
      const piece = ARCHIVE_DATA[pieceId];
      const pTrans = (I18N[lang].pieces && I18N[lang].pieces[pieceId]) || (I18N.en.pieces && I18N.en.pieces[pieceId]);
      if (!pTrans) return;

      const card = document.querySelector(`.archive-card[data-open-piece="${pieceId}"]`);
      if (card) {
        const titleEl = card.querySelector('.card-name');
        if (titleEl) titleEl.textContent = pTrans.name;

        const descEl = card.querySelector('.card-desc');
        if (descEl) descEl.textContent = pTrans.material;

        const statusEl = card.querySelector('.card-status-bar span:last-child');
        if (statusEl) {
          statusEl.textContent = piece.statusKey === 'lowAllocation' ? I18N[lang].archive.lowAllocation : I18N[lang].archive.available;
        }

        const originEl = card.querySelector('.card-status-bar span:first-child');
        if (originEl) {
          originEl.textContent = `${I18N[lang].archive.originLabel} ${pTrans.origin}`;
        }
      }
    });

    // Update modal if currently open
    if (currentActivePiece) {
      updateModalLanguage();
    }

    // Re-render cart in current language
    renderCart();
  }

  function updateModalLanguage() {
    if (!currentActivePiece) return;
    const pTrans = (I18N[currentLang].pieces && I18N[currentLang].pieces[currentActivePiece.id]) || (I18N.en.pieces && I18N.en.pieces[currentActivePiece.id]);
    if (!pTrans) return;

    document.getElementById('modal-piece-title').textContent = pTrans.name;
    document.getElementById('modal-piece-desc').textContent = pTrans.desc;
    document.getElementById('modal-piece-material').textContent = pTrans.material;
    document.getElementById('modal-piece-origin').textContent = pTrans.origin;
    document.getElementById('modal-piece-status').textContent = currentActivePiece.statusKey === 'lowAllocation' ? I18N[currentLang].archive.lowAllocation : I18N[currentLang].archive.available;
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
      if (soundLabel) soundLabel.textContent = I18N[currentLang].nav.audioOff;
    } else {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 2.0);
      isSoundActive = true;
      if (soundTrigger) soundTrigger.classList.add('sound-active');
      if (soundLabel) soundLabel.textContent = I18N[currentLang].nav.audioOn;
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

    const pTrans = (I18N[currentLang].pieces && I18N[currentLang].pieces[pieceId]) || (I18N.en.pieces && I18N.en.pieces[pieceId]);

    // Fill data
    document.getElementById('modal-piece-code').textContent = piece.code;
    document.getElementById('modal-piece-edition').textContent = piece.edition;
    document.getElementById('modal-piece-title').textContent = pTrans.name;
    document.getElementById('modal-piece-price').textContent = formatPrice(piece.price);
    document.getElementById('modal-piece-status').textContent = piece.statusKey === 'lowAllocation' ? I18N[currentLang].archive.lowAllocation : I18N[currentLang].archive.available;
    document.getElementById('modal-piece-desc').textContent = pTrans.desc;
    document.getElementById('modal-piece-material').textContent = pTrans.material;
    document.getElementById('modal-piece-origin').textContent = pTrans.origin;

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
        document.getElementById('modal-view-label').textContent = `${I18N[currentLang].modal.viewLabel} 0${idx + 1} / 0${piece.images.length}`;
      });
      thumbsContainer.appendChild(btn);
    });

    document.getElementById('modal-view-label').textContent = `${I18N[currentLang].modal.viewLabel} 01 / 0${piece.images.length}`;
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
      acquireBtn.textContent = I18N[currentLang].modal.addedBtn;
      setTimeout(() => {
        acquireBtn.textContent = I18N[currentLang].modal.acquireBtn;
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
      const pTrans = (I18N[currentLang].pieces && I18N[currentLang].pieces[item.piece.id]) || (I18N.en.pieces && I18N.en.pieces[item.piece.id]);
      const pName = pTrans ? pTrans.name : item.piece.id;

      const row = document.createElement('div');
      row.className = 'drawer-item';
      row.innerHTML = `
        <div class="drawer-item-thumb">
          <img src="${item.piece.images[0]}" alt="${pName}">
        </div>
        <div class="drawer-item-info">
          <div>
            <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:8px; letter-spacing:0.2em; color:var(--color-ash);">
              <span>${item.piece.code}</span>
              <span style="color:var(--color-bone); font-weight:600;">${formatPrice(item.piece.price)}</span>
            </div>
            <div class="drawer-item-title">${pName}</div>
            <div class="drawer-item-meta">${I18N[currentLang].drawer.sizeLabel} ${item.size}</div>
          </div>
          <button class="drawer-item-dismiss" data-idx="${idx}" data-cursor="DISMISS">${I18N[currentLang].drawer.dismiss}</button>
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

  // --- Archive Drop Filter ---
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

    // Initialize Language (default or stored)
    applyLanguage(currentLang);

    // Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

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
        checkoutBtn.textContent = I18N[currentLang].drawer.dispatchedBtn;
        setTimeout(() => {
          checkoutBtn.textContent = I18N[currentLang].drawer.checkoutBtn;
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
