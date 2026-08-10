export interface ProductSpec {
  key: string;
  value: string;
}

export interface SubCategoryInfo {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  subcategories: SubCategoryInfo[];
}

export interface ProductItem {
  id: string;
  slug: string;
  code: string;
  name: string;
  category: string;
  categoryName: string;
  categorySlug: string;
  subCategory?: string;
  image: string;
  galleryImages: string[];
  description: string;
  longDescription: {
    overview: string;
    craftsmanship: string;
    exportDetails: string;
    careInstructions: string;
  };
  specifications: ProductSpec[];
  features: string[];
  unit?: string;
  cbmPerCarton?: number;
  setPerCarton?: number;
  nwPerCtn?: number;
  gwPerCtn?: number;
  material?: string;
  color?: string;
}

export const TAGLINE = "Nature Woven into Every Creation.";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'jute',
    slug: 'jute',
    name: 'Jute',
    description: 'Eco-friendly golden jute fiber baskets, bags, mats, placemats, poufs & macrames.',
    iconName: 'Package',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'jute-baskets' },
      { id: 'bags', name: 'Bags', slug: 'jute-bags' },
      { id: 'floor-mats', name: 'Floor Mats', slug: 'jute-floor-mats' },
      { id: 'placemats', name: 'Placemats', slug: 'jute-placemats' },
      { id: 'poufs', name: 'Poufs', slug: 'jute-poufs' },
      { id: 'macrames', name: 'Macrames', slug: 'jute-macrames' },
    ]
  },
  {
    id: 'seagrass',
    slug: 'seagrass',
    name: 'Seagrass',
    description: 'Durable coastal seagrass baskets, planters, floor mats, placemats, poufs & trays.',
    iconName: 'Leaf',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'seagrass-baskets' },
      { id: 'planters', name: 'Planters', slug: 'seagrass-planters' },
      { id: 'floor-mats', name: 'Floor Mats', slug: 'seagrass-floor-mats' },
      { id: 'placemats', name: 'Placemats', slug: 'seagrass-placemats' },
      { id: 'trays', name: 'Trays', slug: 'seagrass-trays' },
    ]
  },
  {
    id: 'kans-grass',
    slug: 'kans-grass',
    name: 'Kans Grass',
    description: 'Natural Kans (Kaisa) wild grass handwoven baskets, table placemats, and decorative serving trays.',
    iconName: 'Trees',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'kans-grass-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'kans-grass-placemats' },
      { id: 'trays', name: 'Trays', slug: 'kans-grass-trays' },
    ]
  },
  {
    id: 'date-leaf',
    slug: 'date-leaf',
    name: 'Date Leaf',
    description: 'Traditional Bangladesh date palm leaf braided hampers, placemats, and utility storage trays.',
    iconName: 'Leaf',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'date-leaf-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'date-leaf-placemats' },
      { id: 'trays', name: 'Trays', slug: 'date-leaf-trays' },
    ]
  },
  {
    id: 'rattan',
    slug: 'rattan',
    name: 'Rattan',
    description: 'Premium rattan cane woven furniture, wall mirrors, storage baskets, and decorative wall shelves.',
    iconName: 'Package',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'rattan-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'rattan-placemats' },
      { id: 'furnitures', name: 'Furnitures', slug: 'rattan-furnitures' },
      { id: 'mirrors', name: 'Mirrors', slug: 'rattan-mirrors' },
    ]
  },
  {
    id: 'bamboo',
    slug: 'bamboo',
    name: 'Bamboo',
    description: 'Sustainable split bamboo hampers, storage baskets, and eco-friendly home furniture.',
    iconName: 'Trees',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'bamboo-baskets' },
      { id: 'furnitures', name: 'Furnitures', slug: 'bamboo-furnitures' },
    ]
  },
  {
    id: 'palm-fiber',
    slug: 'palm-fiber',
    name: 'Palm Fiber',
    description: 'Rugged natural palm fiber utility storage baskets and heat-resistant table placemats.',
    iconName: 'Leaf',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'palm-fiber-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'palm-fiber-placemats' },
    ]
  },
  {
    id: 'water-hyacinth',
    slug: 'water-hyacinth',
    name: 'Water Hyacinth',
    description: 'Soft braided aquatic water hyacinth storage baskets and natural dining table placemats.',
    iconName: 'Sparkles',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'water-hyacinth-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'water-hyacinth-placemats' },
    ]
  },
  {
    id: 'rugs',
    slug: 'rugs',
    name: 'Rugs',
    description: 'Hand-braided Jhuta rugs, jute floor rugs, and soft organic cotton rugs.',
    iconName: 'Sparkles',
    subcategories: [
      { id: 'jute-rugs', name: 'Jute Rugs', slug: 'jute-rugs' },
      { id: 'jhuta-rugs', name: 'Jhuta Rugs', slug: 'jhuta-rugs' },
      { id: 'cotton-rugs', name: 'Cotton Rugs', slug: 'cotton-rugs' },
    ]
  },
  {
    id: 'recycle-fabric',
    slug: 'recycle-fabric',
    name: 'Recycle Fabric',
    description: 'Upcycled textile and fabric braided storage baskets & eco hampers.',
    iconName: 'ShoppingBag',
    subcategories: [
      { id: 'baskets', name: 'Baskets', slug: 'recycle-fabric-baskets' },
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  // 1. Seagrass Products
  {
    id: 'GFC-SB-015',
    slug: 'sancerre-seagrass-rectangular-basket-gfc-sb-015',
    code: 'GFC-SB-015',
    name: 'Sancerre Seagrass Rectangular Basket',
    category: 'seagrass',
    categoryName: 'Seagrass',
    categorySlug: 'seagrass',
    subCategory: 'baskets',
    image: '/products/gfc_sb_015.png',
    galleryImages: [
      '/products/gfc_sb_015.png',
      '/products/image18.png'
    ],
    description: 'Masterfully handwoven rectangular storage basket crafted from sustainably harvested Bangladesh coastal seagrass and thick water hyacinth braids.',
    longDescription: {
      overview: 'The Sancerre Seagrass Rectangular Basket (Art No: GFC-SB-015) is designed for premium home organization and luxury wholesale distribution. Featuring a robust internal frame and hand-braided handles, this versatile basket provides structure and natural warmth to living rooms, bedrooms, and retail display shelves.',
      craftsmanship: 'Handcrafted by skilled rural women artisans in southern Bangladesh. Each seagrass strand is sun-dried, hand-twisted into tight ropes, and meticulously woven around a heavy-duty frame to ensure long-term shape retention and durability.',
      exportDetails: 'Shipped in heavy-duty 5-ply export master cartons (2 sets per carton). Every piece undergoes strict quality control for moisture content (<12%), mold-free guarantee, and smooth fiber finish.',
      careInstructions: 'Spot clean gently with a dry or slightly damp cloth. Avoid soaking in water. Keep in a dry, ventilated indoor environment.'
    },
    unit: 'S/3',
    cbmPerCarton: 0.065,
    setPerCarton: 2,
    nwPerCtn: 3.5,
    gwPerCtn: 4.8,
    material: 'Natural Coastal Seagrass',
    color: 'Natural Two-Tone / Beige',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-015' },
      { key: 'Item Name', value: 'Sancerre Seagrass Rectangular Basket' },
      { key: 'Specification', value: '43cm W x 33cm D x 40cm H' },
      { key: 'Materials', value: '100% Coastal Seagrass' },
      { key: 'MOQ', value: '200 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['100% Natural Fiber', 'Handcrafted Craftsmanship', 'Heavy Duty Frame', 'Export Grade Quality']
  },
  {
    id: 'GFC-SB-025',
    slug: 'sancerre-seagrass-rectangular-basket-gfc-sb-025',
    code: 'GFC-SB-025',
    name: 'Sancerre Seagrass Rectangular Basket (Medium)',
    category: 'seagrass',
    categoryName: 'Seagrass',
    categorySlug: 'seagrass',
    subCategory: 'baskets',
    image: '/products/gfc_sb_025.png',
    galleryImages: [
      '/products/gfc_sb_025.png'
    ],
    description: 'Medium cylindrical & rectangular hybrid seagrass basket with soft unbleached cotton rope handles, designed for modern linen and toy storage.',
    longDescription: {
      overview: 'Crafted for multi-purpose home decluttering, the GFC-SB-025 model integrates soft cotton handles with tightly coiled seagrass fibers. It serves as an elegant container for blankets, toys, magazines, or potted plant decor.',
      craftsmanship: 'Woven with dense spiral stitching that keeps the basket lightweight yet structural. The unbleached natural cotton rope wraps seamlessly into the handles for a comfortable ergonomic grip.',
      exportDetails: 'Export packed with protective moisture absorbers in master cartons of 4 sets. Meets EU and US chemical-free eco regulations.',
      careInstructions: 'Dust with a soft brush. Keep away from direct high humidity. Store indoors.'
    },
    unit: 'S/2',
    cbmPerCarton: 0.052,
    setPerCarton: 3,
    nwPerCtn: 2.8,
    gwPerCtn: 3.9,
    material: 'Seagrass, Cotton Rope',
    color: 'Natural Greenish-Gold & White',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-025' },
      { key: 'Item Name', value: 'Sancerre Seagrass Rectangular Basket (Medium)' },
      { key: 'Specification', value: 'Diameter 30cm x Height 30cm' },
      { key: 'Materials', value: 'Seagrass, Cotton Rope' },
      { key: 'MOQ', value: '300 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Natural Seagrass Fiber', 'Soft Cotton Rope Wrap', 'Stackable & Lightweight', 'Eco Living Accent']
  },
  {
    id: 'GFC-SB-017',
    slug: 'round-seagrass-laundry-basket-gfc-sb-017',
    code: 'GFC-SB-017',
    name: 'Round Seagrass Laundry Basket',
    category: 'seagrass',
    categoryName: 'Seagrass',
    categorySlug: 'seagrass',
    subCategory: 'baskets',
    image: '/products/gfc_sb_017.png',
    galleryImages: [
      '/products/gfc_sb_017.png',
      '/products/image26.png'
    ],
    description: 'Tall open-top laundry hamper expertly handwoven with Bangladesh coastal seagrass and thick ear handles.',
    longDescription: {
      overview: 'A classic Scandinavian-style natural hamper. Breathable spiral weave structure prevents damp odors in dirty clothes while adding an organic aesthetic to bathrooms and laundry suites.',
      craftsmanship: 'Hand-twisted seagrass ropes wrapped over structural cane rings for exceptional stability and side strength.',
      exportDetails: 'Packed 3 pieces nested per export carton. Certified FSC eco-sourcing compliant.',
      careInstructions: 'Air out occasionally in sunlight. Vacuum dust with soft upholstery attachment.'
    },
    unit: 'S/3',
    cbmPerCarton: 0.075,
    setPerCarton: 2,
    nwPerCtn: 3.8,
    gwPerCtn: 5.2,
    material: '100% Coastal Seagrass',
    color: 'Natural Seagrass Green-Olive to Beige',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-017' },
      { key: 'Item Name', value: 'Round Seagrass Basket' },
      { key: 'Specification', value: '14 inch Dia x 21 inch High' },
      { key: 'Materials', value: '100% Natural Seagrass' },
      { key: 'MOQ', value: '200 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Tall Laundry Design', 'Built-in Handles', 'Breathable Natural Weave', 'Scandi Minimalist Look']
  },
  {
    id: 'GFC-SP-0029',
    slug: 'seagrass-planters-gfc-sp-0029',
    code: 'GFC-SP-0029',
    name: 'Seagrass Indoor & Outdoor Planters',
    category: 'seagrass',
    categoryName: 'Seagrass',
    categorySlug: 'seagrass',
    subCategory: 'planters',
    image: '/products/gfc_sp_0029.png',
    galleryImages: [
      '/products/gfc_sp_0029.png',
      '/products/gfc_sp_0029_angle.png'
    ],
    description: 'Eco-chic woven seagrass plant basket set featuring internal waterproof PE liners for indoor house plants and patio greens.',
    longDescription: {
      overview: 'Transform indoor greenery with our handwoven seagrass plant pot covers. Designed with built-in thick clear plastic liners to capture excess water drops and prevent soil moisture from touching natural fibers.',
      craftsmanship: 'Woven with dense diagonal seagrass stitching over a stable flat-bottom base.',
      exportDetails: 'Nested set of 3 or 4 sizes per export box. Plastic liners factory stitched into inner top rim.',
      careInstructions: 'Keep plant in nursery pot inside the basket liner. Empty excess water if accumulated.'
    },
    unit: 'S/3',
    cbmPerCarton: 0.058,
    setPerCarton: 3,
    nwPerCtn: 2.6,
    gwPerCtn: 3.7,
    material: 'Seagrass, Waterproof PE Lining',
    color: 'Natural Two-Tone Seagrass',
    specifications: [
      { key: 'Item Code', value: 'GFC-SP-0029' },
      { key: 'Item Name', value: 'Seagrass Planters' },
      { key: 'Specification', value: 'Custom Sizes (6", 8", 10", 12")' },
      { key: 'Materials', value: '100% Seagrass with Waterproof Lining' },
      { key: 'MOQ', value: '250 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Internal Waterproof Plastic Liner', 'Natural Plant Accent', 'Multi-size Set', 'Sustainable Harvest']
  },

  // 2. Jute Products
  {
    id: 'GFC-SB-030',
    slug: 'round-shape-jute-storage-basket-gfc-sb-030',
    code: 'GFC-SB-030',
    name: 'Round Shape Jute Storage Basket',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'baskets',
    image: '/products/gfc_sb_030.png',
    galleryImages: [
      '/products/gfc_sb_030.png',
      '/products/gfc_sb_030_laundry.png'
    ],
    description: 'Charming round handwoven storage basket with cute animal/bear ear accent options or minimal natural weave for nursery & vanity organization.',
    longDescription: {
      overview: 'The GFC-SB-030 model blends playful artisanal aesthetics with functional utility. Perfect for nursery decor, vanity storage, children’s rooms, or eco gift hampers.',
      craftsmanship: 'Hand-coiled using 100% natural jute twine reinforced with inner cotton core. Stitched securely to prevent fraying over years of daily usage.',
      exportDetails: 'Packaged flat-foldable or nested to minimize container freight costs (CBM optimization). Master carton contains 6 sets.',
      careInstructions: 'Wipe with clean dry cloth. Do not machine wash.'
    },
    unit: 'S/3',
    cbmPerCarton: 0.045,
    setPerCarton: 4,
    nwPerCtn: 2.2,
    gwPerCtn: 3.1,
    material: 'Natural Jute, Cotton Yarn',
    color: 'Warm Golden Jute / Beige',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-030' },
      { key: 'Item Name', value: 'Round Shape Jute Storage Basket' },
      { key: 'Specification', value: 'Diameter 20cm x High 18cm' },
      { key: 'Materials', value: '100% Golden Jute' },
      { key: 'MOQ', value: '300 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Eco-Friendly Materials', 'Soft Cotton Rope Trim', 'Multipurpose Storage', 'Foldable & Durable']
  },
  {
    id: 'GFC-SB-011',
    slug: 'jute-shopping-bag-customize-bag-gfc-sb-011',
    code: 'GFC-SB-011',
    name: 'Jute Shopping Bag / Custom Bag',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'bags',
    image: '/products/gfc_sb_011.png',
    galleryImages: [
      '/products/gfc_sb_011.png'
    ],
    description: 'Heavy-duty 100% golden jute shopping tote bag with inner LDPE lamination and padded cotton rope handles.',
    longDescription: {
      overview: 'The golden fiber eco alternative to plastic bags. Designed with water-resistant lamination inside, expanding side gusset, and comfortable padded handles for retail branding and supermarket shopping.',
      craftsmanship: 'Stitched with high-tensile industrial thread and reinforced double X-box stitching on handle joints.',
      exportDetails: 'Export packed 50 pcs per carton. Custom silk screen or azo-free logo printing available.',
      careInstructions: 'Spot clean exterior. Wipe inner laminated lining with wet cloth.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.055,
    setPerCarton: 50,
    nwPerCtn: 12.5,
    gwPerCtn: 14.0,
    material: '100% Bangladesh Golden Jute, Cotton Handles',
    color: 'Natural Golden Tan',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-011' },
      { key: 'Item Name', value: 'Jute Shopping Bag / Customize Bag' },
      { key: 'Specification', value: 'W-45cm x H-35cm x 24cm Gusset' },
      { key: 'Materials', value: '100% Golden Jute' },
      { key: 'MOQ', value: '500 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['A-Grade Golden Jute', 'Water-Resistant Lamination', 'Padded Handles', 'Custom Screen Printing Available']
  },
  {
    id: 'GFC-TB-012',
    slug: 'jute-tote-bag-gfc-tb-012',
    code: 'GFC-TB-012',
    name: 'Artisan Jute Tote Bag',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'bags',
    image: '/products/gfc_tb_012.png',
    galleryImages: [
      '/products/gfc_tb_012.png'
    ],
    description: 'Minimalist chic daily tote bag crafted from fine-spun golden jute with contrasting dark webbed handles.',
    longDescription: {
      overview: 'Ideal for beach outings, farmers markets, eco retail, and promotional corporate giveaways.',
      craftsmanship: 'Precision stitched using fine-mesh jute cloth with smooth touch finish.',
      exportDetails: 'Packed 100 pcs per carton. Low weight per carton for economical air/sea freight.',
      careInstructions: 'Air dry if damp. Do not bleach.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.048,
    setPerCarton: 50,
    nwPerCtn: 10.0,
    gwPerCtn: 11.2,
    material: 'Golden Jute Webbing',
    color: 'Natural Jute & Black/Brown Trim',
    specifications: [
      { key: 'Item Code', value: 'GFC-TB-012' },
      { key: 'Item Name', value: 'Tote Bag' },
      { key: 'Specification', value: '13 inch x 15 inch' },
      { key: 'Materials', value: '100% Natural Jute' },
      { key: 'MOQ', value: '500 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Reusable & Eco-friendly', 'Strong Stitched Handles', 'Biodegradable', 'Export Quality']
  },
  {
    id: 'GFC-PB-008',
    slug: 'promotional-jute-bag-gfc-pb-008',
    code: 'GFC-PB-008',
    name: 'Promotional Jute Bag',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'bags',
    image: '/products/gfc_pb_008.png',
    galleryImages: [
      '/products/gfc_pb_008.png',
      '/products/gfc_pb_010.png'
    ],
    description: 'Compact eco gift bag with soft cotton handles tailored for corporate conferences, trade fairs, and gift packaging.',
    longDescription: {
      overview: 'A high-impact promotional canvas item for green marketing. Large flat printable surface on front and back.',
      craftsmanship: 'Unbleached natural jute cloth with clear PE moisture backing.',
      exportDetails: '100 pcs per carton. OEM printing option for customized logos.',
      careInstructions: 'Store in cool dry location.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.040,
    setPerCarton: 100,
    nwPerCtn: 11.0,
    gwPerCtn: 12.3,
    material: 'Natural Jute Fiber',
    color: 'Natural Tan',
    specifications: [
      { key: 'Item Code', value: 'GFC-PB-008' },
      { key: 'Item Name', value: 'Promotional Bag' },
      { key: 'Specification', value: '22cm x 16cm x 13cm' },
      { key: 'Materials', value: '100% Jute' },
      { key: 'MOQ', value: '500 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Compact & Practical', 'Ideal for Branding', 'Strong Cotton Handles', 'Eco Choice']
  },
  {
    id: 'GFC-WB-007',
    slug: 'jute-wine-bag-gfc-wb-007',
    code: 'GFC-WB-007',
    name: 'Jute Wine Bottle Bag',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'bags',
    image: '/products/gfc_wb_007.png',
    galleryImages: [
      '/products/gfc_wb_007.png',
      '/products/image45.png'
    ],
    description: 'Single & double bottle jute wine tote bag with cane handle and clear window options for wineries & luxury gifts.',
    longDescription: {
      overview: 'Specifically proportioned for standard 750ml wine, champagne, or spirit bottles. Features internal padded dividers and rigid base support.',
      craftsmanship: 'Woven golden jute with reinforced stitched seams and sturdy wooden ring handles.',
      exportDetails: 'Packed 100 pcs per export container box.',
      careInstructions: 'Keep dry.'
    },
    unit: 'Single / Double',
    cbmPerCarton: 0.035,
    setPerCarton: 50,
    nwPerCtn: 6.5,
    gwPerCtn: 7.6,
    material: 'Natural Jute, Cane Handles',
    color: 'Natural Jute & Cane',
    specifications: [
      { key: 'Item Code', value: 'GFC-WB-007' },
      { key: 'Item Name', value: 'Wine Bag' },
      { key: 'Specification', value: '38cm x 10cm x 10cm' },
      { key: 'Materials', value: '100% Jute' },
      { key: 'MOQ', value: '300 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Bottle Protection Divider', 'Clear View Window Option', 'Sturdy Rope Handle', 'Gift Ready']
  },
  {
    id: 'GFC-TM-004',
    slug: 'table-mat-gfc-tm-004',
    code: 'GFC-TM-004',
    name: 'Braided Jute & Cotton Table Mat',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'placemats',
    image: '/products/gfc_tm_004.png',
    galleryImages: [
      '/products/gfc_tm_004.png',
      '/products/gfc_tm_004_angle.png',
      '/products/gfc_tm_004_texture.png'
    ],
    description: 'Hand-braided round table placemat made from concentric golden jute braids interwoven with soft off-white cotton cord.',
    longDescription: {
      overview: 'Elevate eco dining tables with heat-resistant, thick braided placemats. Protects wooden furniture surfaces from hot dinner plates while introducing earthy bohemian textures.',
      craftsmanship: 'Coiled by hand and stitched continuously with strong hidden nylon thread for lie-flat durability.',
      exportDetails: 'Bundled in sets of 6 or 12 placemats. Master carton holds 48 sets.',
      careInstructions: 'Shake off crumbs. Spot clean with damp cloth.'
    },
    unit: 'S/6 Set',
    cbmPerCarton: 0.032,
    setPerCarton: 8,
    nwPerCtn: 5.5,
    gwPerCtn: 6.8,
    material: 'Golden Jute, Cotton Braids',
    color: 'Natural Jute & Cream Contrast',
    specifications: [
      { key: 'Item Code', value: 'GFC-TM-004' },
      { key: 'Item Name', value: 'Table Mat' },
      { key: 'Specification', value: '33 cm Diameter' },
      { key: 'Materials', value: '100% Jute, Cotton Rope' },
      { key: 'MOQ', value: '300 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Heat Resistant Surface', 'Rustic Dining Accent', 'Hand-stitched Border', 'Washable Natural Texture']
  },
  {
    id: 'GFC-PH-008',
    slug: 'plant-holder-macrame-gfc-ph-008',
    code: 'GFC-PH-008',
    name: 'Macrame Jute Plant Holder',
    category: 'jute',
    categoryName: 'Jute',
    categorySlug: 'jute',
    subCategory: 'macrames',
    image: '/products/gfc_ph_008.png',
    galleryImages: [
      '/products/gfc_ph_008.png',
      '/products/image53.png'
    ],
    description: 'Hand-knotted bohemian macrame plant hanger made from natural jute twine and hardwood mounting ring.',
    longDescription: {
      overview: 'Vertical garden accent hanger capable of holding terracotta pots, ceramic planters, or seagrass baskets up to 10 inches in diameter.',
      craftsmanship: 'Hand-knotted by traditional macrame artisans using 4mm 3-ply natural jute rope.',
      exportDetails: 'Individual hangtag packaging. 50 pcs packed per export box.',
      careInstructions: 'Indoor or covered balcony use. Protect from continuous rain exposure.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.028,
    setPerCarton: 50,
    nwPerCtn: 8.5,
    gwPerCtn: 9.6,
    material: 'Natural Jute Twine, Wooden Ring',
    color: 'Natural Beige',
    specifications: [
      { key: 'Item Code', value: 'GFC-PH-008' },
      { key: 'Item Name', value: 'Plant Holder / Macrame' },
      { key: 'Specification', value: 'Length 90cm - 120cm' },
      { key: 'Materials', value: '100% Jute, Cotton Rope' },
      { key: 'MOQ', value: '300 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Hand-knotted Macrame', 'Heavy Weight Capacity', 'Ceiling & Wall Hanging', 'Indoor & Balcony Decor']
  },

  // 3. Kans Grass Products
  {
    id: 'GFC-KB-005',
    slug: 'kaisa-basket-bowl-gfc-kb-005',
    code: 'GFC-KB-005',
    name: 'Kaisa Grass Basket Bowl',
    category: 'kans-grass',
    categoryName: 'Kans Grass',
    categorySlug: 'kans-grass',
    subCategory: 'baskets',
    image: '/products/gfc_kb_005.png',
    galleryImages: [
      '/products/gfc_kb_005.png',
      '/products/image27.png'
    ],
    description: 'Handmade Kaisa grass basket bowl tightly bound with natural off-white cotton thread wrapping.',
    longDescription: {
      overview: 'Kaisa grass grows wild along riverbanks in Bangladesh and is prized for its extreme durability. Bound with cotton thread wrapping, this dish bowl serves as bread/fruit server or tabletop key tray.',
      craftsmanship: 'Bound by hand strand by strand using traditional needle-wrapping technique perfected over generations.',
      exportDetails: 'Bulk packed in export cartons of 12 pieces with corner cushion protection.',
      careInstructions: 'Wipe dry. Safe for dry food items.'
    },
    unit: 'S/3',
    cbmPerCarton: 0.038,
    setPerCarton: 4,
    nwPerCtn: 2.0,
    gwPerCtn: 2.9,
    material: 'Wild Kaisa Grass, Cotton Wrapping',
    color: 'Natural Pale Gold & White Cord',
    specifications: [
      { key: 'Item Code', value: 'GFC-KB-005' },
      { key: 'Item Name', value: 'Kaisa Basket Bowl' },
      { key: 'Specification', value: '6", 10", 14" Diameter Options' },
      { key: 'Materials', value: 'Kaisa Grass, Cotton Wrapped' },
      { key: 'MOQ', value: '400 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Fair Trade Handmade', 'Kaisa Wild Grass', 'Cotton Cord Wrapping', 'Tabletop Organization']
  },

  // 4. Water Hyacinth Products
  {
    id: 'GFC-SB-024',
    slug: 'casafield-round-storage-basket-gfc-sb-024',
    code: 'GFC-SB-024',
    name: 'Casafield Water Hyacinth Round Storage Basket',
    category: 'water-hyacinth',
    categoryName: 'Water Hyacinth',
    categorySlug: 'water-hyacinth',
    subCategory: 'baskets',
    image: '/products/gfc_sb_024.png',
    galleryImages: [
      '/products/gfc_sb_024.png',
      '/products/image24.png'
    ],
    description: 'Spacious jumbo round storage hamper crafted from thick braided natural water hyacinth stems with fitted woven lid.',
    longDescription: {
      overview: 'Designed for substantial household storage, the Casafield Round Storage Basket features a tall cylindrical body with integrated side handles and a sturdy removable lid. Ideal for clothes, extra pillows, and hotel laundry rooms.',
      craftsmanship: 'Hand-braided using thick harvested water hyacinth stalks from river waterways. Naturally dried to preserve its rich honey-golden tone.',
      exportDetails: 'Nested in pairs inside heavy corrugated export boxes. Includes silica gel packs for ocean freight humidity protection.',
      careInstructions: 'Dust periodically. Keep in dry ventilated area.'
    },
    unit: 'Single / Pair',
    cbmPerCarton: 0.088,
    setPerCarton: 2,
    nwPerCtn: 4.5,
    gwPerCtn: 6.2,
    material: 'Natural Water Hyacinth, Iron Frame',
    color: 'Honey Warm Gold',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-024' },
      { key: 'Item Name', value: 'Casafield Round Storage Basket' },
      { key: 'Specification', value: '17.5 inch Dia x 19 inch High' },
      { key: 'Materials', value: 'Natural Water Hyacinth' },
      { key: 'MOQ', value: '150 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Natural Water Hyacinth', 'Spacious Interior', 'Hand-Braided Texture', 'Bio-degradable']
  },

  // 5. Rattan Products
  {
    id: 'GFC-PS-009',
    slug: 'jute-rattan-placement-set-gfc-ps-009',
    code: 'GFC-PS-009',
    name: 'Rattan & Jute Placement Set',
    category: 'rattan',
    categoryName: 'Rattan',
    categorySlug: 'rattan',
    subCategory: 'placemats',
    image: '/products/gfc_ps_009.png',
    galleryImages: [
      '/products/gfc_ps_009.png',
      '/products/image48.png'
    ],
    description: 'Luxury handcrafted dining placemat set combining raw jute mesh center with natural rattan cane rim accent.',
    longDescription: {
      overview: 'A premium tropical resort placemat. Woven rattan outer ring holds the shape crisp and straight while the jute center provides rustic texture.',
      craftsmanship: 'Hand-woven using seasoned Bangladesh rattan cane and combed jute yarns.',
      exportDetails: 'Shipped flat in shrink-wrapped bundles of 6 pcs.',
      careInstructions: 'Wipe clean with damp cloth.'
    },
    unit: 'S/6 Set',
    cbmPerCarton: 0.036,
    setPerCarton: 6,
    nwPerCtn: 4.8,
    gwPerCtn: 6.0,
    material: 'Raw Jute, Rattan Cane',
    color: 'Natural Amber & Golden Jute',
    specifications: [
      { key: 'Item Code', value: 'GFC-PS-009' },
      { key: 'Item Name', value: 'Rattan & Jute Placement Set' },
      { key: 'Specification', value: 'Custom Sizes (30cm - 38cm)' },
      { key: 'Materials', value: 'Jute, Rattan' },
      { key: 'MOQ', value: '250 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Boho Luxury Dining', 'Rattan Frame Reinforcement', 'Natural Color Contrast', 'Handmade Artisan Finish']
  },

  // 6. Rugs & Floor Coverings
  {
    id: 'GFC-FM-017',
    slug: 'floor-mat-rugs-gfc-fm-017',
    code: 'GFC-FM-017',
    name: 'Braided Jute Floor Rug & Area Mat',
    category: 'rugs',
    categoryName: 'Rugs',
    categorySlug: 'rugs',
    subCategory: 'jute-rugs',
    image: '/products/gfc_fm_017.png',
    galleryImages: [
      '/products/gfc_fm_017.png',
      '/products/image51.png'
    ],
    description: 'Substantial round hand-braided golden jute area rug designed for living rooms, hallways, and eco interior design.',
    longDescription: {
      overview: 'Bring organic grounded warmth to modern floors. Heavyweight reversible braided construction ensures flat lie without curling edges.',
      craftsmanship: 'Braided using 100% premium grade Bangladesh golden jute yarn, spiraled and heavy-stitch bound.',
      exportDetails: 'Rolled tightly and packed in heavy poly-bags before placing into master cartons (4 rugs per box).',
      careInstructions: 'Vacuum regularly without beater bar. Spot clean stains with mild soap solution.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.082,
    setPerCarton: 4,
    nwPerCtn: 14.0,
    gwPerCtn: 15.8,
    material: '100% Golden Jute Fiber',
    color: 'Natural Golden Honey',
    specifications: [
      { key: 'Item Code', value: 'GFC-FM-017' },
      { key: 'Item Name', value: 'Floor Mat / Rugs' },
      { key: 'Specification', value: '120 cm Diameter (4 ft)' },
      { key: 'Materials', value: '100% Golden Jute' },
      { key: 'MOQ', value: '100 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Heavy Duty Braided Weave', 'Reversible Design', 'Sound Absorbing & Soft', 'Non-Static Natural Fiber']
  },

  // 7. Bamboo Crafts
  {
    id: 'GFC-BP-007',
    slug: 'bamboo-products-gfc-bp-007',
    code: 'GFC-BP-007',
    name: 'Artisan Bamboo Products & Crafts',
    category: 'bamboo',
    categoryName: 'Bamboo',
    categorySlug: 'bamboo',
    subCategory: 'baskets',
    image: '/products/gfc_bp_007.png',
    galleryImages: [
      '/products/gfc_bp_007.png',
      '/products/image56.png'
    ],
    description: 'Seasoned natural bamboo serving trays, storage organizers, and eco table accessories hand-cut and polished in Bangladesh.',
    longDescription: {
      overview: 'Carved from mature Bangladesh bamboo poles treated for pest resistance. Lightweight, food safe, and water-repellent oil polished for sustainable home living.',
      craftsmanship: 'Precision cut, hand-sanded smooth, and finished with organic food-safe beeswax oil.',
      exportDetails: 'Packed with corner foam guards in master cartons of 12 sets.',
      careInstructions: 'Hand wash with mild soap. Do not soak in dishwasher.'
    },
    unit: 'Assorted / Custom Set',
    cbmPerCarton: 0.045,
    setPerCarton: 6,
    nwPerCtn: 4.0,
    gwPerCtn: 5.2,
    material: '100% Seasoned Bamboo',
    color: 'Natural Bamboo Warm Gold',
    specifications: [
      { key: 'Item Code', value: 'GFC-BP-007' },
      { key: 'Item Name', value: 'Bamboo Products' },
      { key: 'Specification', value: 'Custom Sizes as per Buyer Requirements' },
      { key: 'Materials', value: '100% Natural Bamboo' },
      { key: 'MOQ', value: '200 Sets' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Termite & Mold Treated', 'Food Safe Oil Finish', 'Ultra-Lightweight & Tough', '100% Sustainable']
  },

  // 8. Recycle Fabric / Cotton Rope Products
  {
    id: 'GFC-WB-009',
    slug: 'cotton-rope-laundry-hamper-woven-basket-gfc-wb-009',
    code: 'GFC-WB-009',
    name: 'Cotton Rope Laundry Hamper Woven Basket',
    category: 'recycle-fabric',
    categoryName: 'Recycle Fabric',
    categorySlug: 'recycle-fabric',
    subCategory: 'baskets',
    image: '/products/gfc_wb_009.png',
    galleryImages: [
      '/products/gfc_wb_009.png',
      '/products/gfc_sb_014.png',
      '/products/image1.jpeg'
    ],
    description: 'Modern coiled cotton rope hamper basket designed for nurseries, bedrooms, and clean bathroom decor.',
    longDescription: {
      overview: 'Soft, scratch-free, and chemical-free coiled cotton rope storage hamper. Flexible construction allows easy folding during shipping while standing perfectly upright when unfolded.',
      craftsmanship: 'High-density machine-stitched spiral cotton cord with reinforced double-seam carrying handles.',
      exportDetails: 'Vacuum squeezed and flat-packed to maximize container load efficiency. 6 pcs per master box.',
      careInstructions: 'Hand wash or machine wash gentle cycle in laundry mesh bag.'
    },
    unit: 'Single Piece',
    cbmPerCarton: 0.048,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.4,
    material: '100% Unbleached Cotton Rope',
    color: 'Off-White / Cream',
    specifications: [
      { key: 'Item Code', value: 'GFC-WB-009' },
      { key: 'Item Name', value: 'Cotton Rope Laundry Hamper Woven Basket' },
      { key: 'Specification', value: '16 inch Dia x 18 inch High' },
      { key: 'Materials', value: '100% Natural Cotton Rope' },
      { key: 'MOQ', value: '200 Pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['100% Unbleached Cotton', 'Machine Washable', 'Soft & Scratch Free', 'Durable Coiled Construction']
  }
];
