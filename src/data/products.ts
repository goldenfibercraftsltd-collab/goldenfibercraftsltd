import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // --- GARMENT TRIMS & LABELS (TRIMS ART PRODUCT LINE) ---

  // 1. All types of Label
  {
    id: 'lb-1',
    itemCode: 'GFC-LB-001',
    name: 'Care Label',
    category: 'labels',
    categoryLabel: 'All types of Label',
    specification: 'Width: 15mm - 50mm, Printed Satin / Taffeta',
    materials: 'Polyester Satin, Cotton Taffeta',
    moq: '1,000 pcs',
    image: '/products/image10.png',
    featured: true,
    topRank: 1,
    description: 'High-definition printed care instructions label resistant to stone washing and dry cleaning.'
  },
  {
    id: 'lb-2',
    itemCode: 'GFC-LB-002',
    name: 'Printed Label',
    category: 'labels',
    categoryLabel: 'All types of Label',
    specification: 'Custom dimensions, Rotative / Flexo 6-color printing',
    materials: 'Cotton Canvas, Satin Ribbon',
    moq: '1,000 pcs',
    image: '/products/image11.png',
    featured: font => true,
    description: 'Vibrant multicolor flexo printed main and brand accent labels.'
  },
  {
    id: 'lb-3',
    itemCode: 'GFC-LB-003',
    name: 'Woven Main Label',
    category: 'labels',
    categoryLabel: 'All types of Label',
    specification: 'High-density Damask 100/120 denier weaving',
    materials: '100% Polyester Yarn',
    moq: '1,000 pcs',
    image: '/products/image12.png',
    featured: true,
    topRank: 2,
    description: 'Ultra-soft Damask woven brand label with ultrasonic soft edge cutting.'
  },
  {
    id: 'lb-4',
    itemCode: 'GFC-LB-004',
    name: 'Heat Seal Label',
    category: 'labels',
    categoryLabel: 'All types of Label',
    specification: 'Tagless heat transfer foil, 140°C - 160°C application',
    materials: 'Eco TPU / Polyurethane Ink',
    moq: '2,000 pcs',
    image: '/products/image13.png',
    featured: true,
    description: 'Tagless skin-friendly heat transfer label for athletic wear and innerwear.'
  },
  {
    id: 'lb-5',
    itemCode: 'GFC-LB-005',
    name: 'Size Label',
    category: 'labels',
    categoryLabel: 'All types of Label',
    specification: '10mm X 25mm, Woven or Printed',
    materials: 'Damask Satin',
    moq: '1,000 pcs',
    image: '/products/image14.png',
    featured: false,
    description: 'Numeric and letter size tabs ready for collar and side seam insertion.'
  },

  // 2. Hangtag and Additional Tag
  {
    id: 'ht-1',
    itemCode: 'GFC-HT-001',
    name: 'Hang Tag',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: '300gsm - 700gsm Kraft / Art Cardboard',
    materials: 'FSC Certified Cardstock',
    moq: '1,000 pcs',
    image: '/products/image1.jpeg',
    featured: true,
    topRank: 3,
    description: 'Premium garment price and brand hangtag with spot UV, foil stamping, and debossing.'
  },
  {
    id: 'ht-2',
    itemCode: 'GFC-HT-002',
    name: 'BCI Tag',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: '100% Recycled Cotton Card / Unbleached Paper',
    materials: 'Recycled Fiber',
    moq: '1,000 pcs',
    image: '/products/image2.png',
    featured: true,
    description: 'Better Cotton Initiative certified eco hangtag printed with soy-based ink.'
  },
  {
    id: 'ht-3',
    itemCode: 'GFC-HT-003',
    name: 'Tag String',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Length: 18cm - 22cm, Braided Cord',
    materials: 'Cotton, Waxed Cord, Polyester',
    moq: '5,000 pcs',
    image: '/products/image3.png',
    featured: false,
    description: 'Braided cotton and polyester tag string with clip ends.'
  },
  {
    id: 'ht-4',
    itemCode: 'GFC-HT-004',
    name: 'Tag Pin / Lock Pin',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Standard 3inch / 5inch Plastic & Metal Seal',
    materials: 'Recycled Plastic, Aluminum',
    moq: '5,000 pcs',
    image: '/products/image4.png',
    featured: false,
    description: 'Manual snap-lock pin seal for secure hangtag attachment.'
  },
  {
    id: 'ht-5',
    itemCode: 'GFC-HT-005',
    name: 'Safety Pin',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Size 0 (22mm), Bulb / Pear shape',
    materials: 'Rust-proof Brass & Steel',
    moq: '10,000 pcs',
    image: '/products/image5.png',
    featured: false,
    description: 'Pear-shaped safety pins in antique brass, silver, matte black.'
  },
  {
    id: 'ht-6',
    itemCode: 'GFC-HT-006',
    name: 'Shipping Mark',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Custom export mark tag',
    materials: 'Heavy duty kraft card',
    moq: '1,000 pcs',
    image: '/products/image6.png',
    featured: false,
    description: 'Export carton shipping mark identity card.'
  },
  {
    id: 'ht-7',
    itemCode: 'GFC-HT-007',
    name: 'Carton Sticker',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Barcode GS1 & Destination label',
    materials: 'Self-adhesive Thermal Paper',
    moq: '1,000 pcs',
    image: '/products/image7.png',
    featured: false,
    description: 'High-tack self-adhesive carton barcode label.'
  },
  {
    id: 'ht-8',
    itemCode: 'GFC-HT-008',
    name: 'Paper Rope / Twisted Paper Rope',
    category: 'tags',
    categoryLabel: 'Hangtag & Additional Tag',
    specification: 'Diameter: 2mm - 6mm',
    materials: '100% Twisted Kraft Paper',
    moq: '500 meters',
    image: '/products/image8.png',
    featured: false,
    description: 'Natural twisted paper cord handle for paper bags and hangtags.'
  },

  // 3. Twill tape, Satin tape & Elastic
  {
    id: 'tt-1',
    itemCode: 'GFC-TT-001',
    name: 'Twill Tape',
    category: 'tapes',
    categoryLabel: 'Twill tape, Satin tape & Elastic',
    specification: 'Width: 6mm - 50mm, Herringbone weave',
    materials: '100% Cotton, Poly-Cotton',
    moq: '1,000 meters',
    image: '/products/image15.png',
    featured: true,
    topRank: 4,
    description: 'Herringbone pattern cotton twill tape for neck binding and drawstrings.'
  },
  {
    id: 'tt-2',
    itemCode: 'GFC-TT-002',
    name: 'Satin Ribbon',
    category: 'tapes',
    categoryLabel: 'Twill tape, Satin tape & Elastic',
    specification: 'Width: 3mm - 100mm, Double face',
    materials: 'High-luster Polyester Satin',
    moq: '1,000 meters',
    image: '/products/image16.png',
    featured: true,
    description: 'Silky smooth double-face satin ribbon for premium apparel binding.'
  },
  {
    id: 'tt-3',
    itemCode: 'GFC-TT-003',
    name: 'Drawstring Cord',
    category: 'tapes',
    categoryLabel: 'Twill tape, Satin tape & Elastic',
    specification: 'Diameter: 4mm - 10mm, Round or Flat',
    materials: 'Braided Cotton, Rubberized Tips',
    moq: '1,000 meters',
    image: '/products/image18.png',
    featured: false,
    description: 'Hoodie and waistband drawstring cord with silicone or metal tips.'
  },
  {
    id: 'tt-4',
    itemCode: 'GFC-TT-004',
    name: 'Elastic Webbing',
    category: 'tapes',
    categoryLabel: 'Twill tape, Satin tape & Elastic',
    specification: 'Width: 10mm - 80mm, Woven / Knitted',
    materials: 'Latex-free Polyester Spandex',
    moq: '1,000 meters',
    image: '/products/image24.png',
    featured: true,
    description: 'High-stretch elastic band for waistbands and sleeve cuffs.'
  },

  // 4. Security Tag, Alarm Tag and Hard Tag
  {
    id: 'st-1',
    itemCode: 'GFC-ST-001',
    name: 'Security Tag / RF Soft Label',
    category: 'security',
    categoryLabel: 'Security Tag, Alarm Tag and Hard Tag',
    specification: '8.2MHz RF / 58kHz AM frequency',
    materials: 'Polymer Circuit Film',
    moq: '5,000 pcs',
    image: '/products/image9.png',
    featured: true,
    description: 'Radio-frequency anti-theft security label for retail garment protection.'
  },
  {
    id: 'st-2',
    itemCode: 'GFC-ST-002',
    name: 'AM Hard Tag',
    category: 'security',
    categoryLabel: 'Security Tag, Alarm Tag and Hard Tag',
    specification: 'Super Lock Acousto-Magnetic Hard Tag',
    materials: 'ABS Plastic, Magnetic Lock',
    moq: '1,000 pcs',
    image: '/products/image17.png',
    featured: false,
    description: 'Reusable hard alarm security tag for outerwear and denim.'
  },

  // --- ECO JUTE & SEAGRASS HANDICRAFTS ---

  // Baskets
  {
    id: 's4',
    itemCode: 'GFC-SB-015',
    name: 'Sancerre Seagrass Rectangular Basket',
    category: 'baskets',
    categoryLabel: 'Storage & Laundry Baskets',
    specification: '43cm W x 33cm D x 40cm H',
    materials: 'Water Hyacinth, Seagrass, Jute',
    moq: 'Flexible',
    image: '/products/image17.png',
    featured: true,
    topRank: 5,
    description: 'Sancerre seagrass rectangular woven storage basket crafted with natural water hyacinth and jute.'
  },
  {
    id: 's5',
    itemCode: 'GFC-SB-025',
    name: 'Round Seagrass Cotton Storage Basket',
    category: 'baskets',
    categoryLabel: 'Storage & Laundry Baskets',
    specification: 'Diameter-30cm & Height-30cm',
    materials: 'Seagrass, Cotton Rope',
    moq: 'Flexible',
    image: '/products/image19.png',
    featured: true,
    topRank: 6,
    description: 'Round seagrass basket reinforced with cotton rope accents.'
  },
  {
    id: 's6',
    itemCode: 'GFC-SB-030',
    name: 'Round Shape Jute Storage Basket',
    category: 'baskets',
    categoryLabel: 'Storage & Laundry Baskets',
    specification: 'Diameter 20cm X High 18cm',
    materials: 'Seagrass, Cotton Rope',
    moq: 'Flexible',
    image: '/products/image20.png',
    featured: true,
    topRank: 7,
    description: 'Round shape jute storage basket handwoven with cotton cord.'
  },
  {
    id: 's7',
    itemCode: 'GFC-SB-024',
    name: 'Casafield Round Storage Basket',
    category: 'baskets',
    categoryLabel: 'Storage & Laundry Baskets',
    specification: '17.5 inch X 19 inch High',
    materials: 'Natural Water Hyacinth',
    moq: 'Flexible',
    image: '/products/image21.png',
    featured: true,
    topRank: 8,
    description: 'Casafield round storage basket woven from natural water hyacinth.'
  },
  {
    id: 's8',
    itemCode: 'GFC-SB-030-B',
    name: 'Seagrass Laundry Basket',
    category: 'baskets',
    categoryLabel: 'Storage & Laundry Baskets',
    specification: '15.5 inch X 17 inch High',
    materials: 'Seagrass',
    moq: 'Flexible',
    image: '/products/image22.png',
    featured: false,
    description: 'Seagrass laundry basket with durable braided handles.'
  },

  // Planters
  {
    id: 's15',
    itemCode: 'GFC-SP-0029',
    name: 'Seagrass Planters',
    category: 'planters',
    categoryLabel: 'Planters & Pots',
    specification: 'Custom buyer specifications',
    materials: 'Seagrass',
    moq: 'Flexible',
    image: '/products/image30.png',
    featured: true,
    topRank: 9,
    description: 'Woven seagrass plant pot covers in custom sizes.'
  },
  {
    id: 's16',
    itemCode: 'GFC-FP-006',
    name: 'Jute & Seagrass Floor Planters',
    category: 'planters',
    categoryLabel: 'Planters & Pots',
    specification: '15.5 inch X 17 inch High',
    materials: 'Jute, Seagrass',
    moq: 'Flexible',
    image: '/products/image31.png',
    featured: true,
    topRank: 10,
    description: 'Dual-material jute and seagrass floor planters.'
  },

  // Bags
  {
    id: 's22',
    itemCode: 'GFC-SB-011',
    name: 'Jute Shopping Bag / Customize Bag',
    category: 'bags',
    categoryLabel: 'Jute Bags & Packaging',
    specification: 'W-45cm X 24cm Dia',
    materials: '100% Jute',
    moq: 'Flexible',
    image: '/products/image37.png',
    featured: true,
    description: '100% natural jute shopping bag with padded handles.'
  },
  {
    id: 's23',
    itemCode: 'GFC-TB-012',
    name: 'Tote Bag',
    category: 'bags',
    categoryLabel: 'Jute Bags & Packaging',
    specification: '13 inch X 15 inch',
    materials: '100% Jute',
    moq: 'Flexible',
    image: '/products/image39.png',
    featured: true,
    description: 'Eco tote bag handcrafted from 100% jute fabric.'
  },

  // Home Decor
  {
    id: 's28',
    itemCode: 'GFC-TM-004',
    name: 'Table Mat',
    category: 'decor',
    categoryLabel: 'Home Decor & Mats',
    specification: '33 cm diameter',
    materials: '100% Jute, Cotton Rope',
    moq: 'Flexible',
    image: '/products/image47.png',
    featured: true,
    description: 'Circular woven table placemat.'
  },
  {
    id: 's30',
    itemCode: 'GFC-FM-017',
    name: 'Floor Mat / Rugs',
    category: 'decor',
    categoryLabel: 'Home Decor & Mats',
    specification: '120 cm diameter',
    materials: '100% Jute',
    moq: 'Flexible',
    image: '/products/image50.png',
    featured: true,
    description: 'Round hand-braided 100% jute floor rug.'
  }
];
