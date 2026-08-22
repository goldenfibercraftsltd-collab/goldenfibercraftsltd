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
export const SUB_TAGLINE = "Sustainable Jute | Natural Fiber | Handcrafted Excellence";
export const COMPANY_NAME = "Golden Fiber Crafts Ltd.";
export const OFFICIAL_EMAIL = "info@goldenfibercraftsltd.com";
export const SECONDARY_EMAIL = "shafiq@goldenfibercraftsltd.com";
export const OFFICIAL_WEBSITE = "www.goldenfibercraftsltd.com";

export const COMPANY_ADDRESSES = {
  corporateOffice: "House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh",
  factoryUnit1: "Unit 1: Paler para, Akter market (Beside UTAH Garments), Salna, Gazipur",
  factoryUnit2: "Unit 2: Kacharipara, Milonganj Bazar, Nilganj, Kishoreganj",
};

export const KEY_LEADERSHIP = {
  managingDirector: {
    name: "Md. Shafiq Islam",
    title: "CEO & Managing Director",
    phone: "+8801916-183583",
    email: "shafiq@goldenfibercraftsltd.com",
    image: "/about/md_safiqul_islam.png",
    message: "As the world moves toward sustainable living, we are proud to offer products that are not only beautifully crafted but also contribute to a greener future. Our collection of jute bags, handicrafts, home décor, and natural fiber products by promoting biodegradable and renewable materials, we strive to reduce environmental impact and encourage responsible consumption worldwide. Behind every product is the dedication of our skilled artisans, whose craftsmanship preserves Bangladesh's rich heritage while meeting the expectations of today's international markets. We continuously invest in product development, quality assurance, ethical manufacturing, and customer satisfaction to ensure that every item we produce represents excellence. Our ambition is clear: to establish Golden Fiber Crafts Ltd. as a trusted global partner for sustainable, high-quality, and responsibly crafted products from Bangladesh."
  },
  seniorDirector: {
    name: "Md. Nazrul Islam Uzzal",
    title: "Senior Director & General Manager",
    phone: "+8801721-994082",
    email: "info@goldenfibercraftsltd.com",
    image: "/about/md_nazrul_islam_uzzal.png",
    message: "At Golden Fiber Crafts Ltd., we believe that the future of business belongs to companies that can combine purpose with performance, craftsmanship with innovation, and sustainability with international standards. Our mission is not simply to create beautiful products, but to deliver products that our customers can trust—through consistent quality, responsible production, competitive value, and dependable service. We continuously strengthen our production capabilities, quality-control systems, product development, sourcing, and supply-chain management. Our greatest strength is our people. By working closely with skilled artisans, experienced professionals, and trusted business partners, we connect Bangladesh's traditional craftsmanship with contemporary international design and commercial requirements. We believe that empowering our people and developing their skills is essential to creating sustainable growth."
  }
};

export const TECHNICAL_INFORMATION = {
  officeStaff: "30",
  artisans: "Approximate 15,000 (Directly & Indirectly)",
  productionCapacityMonth: "50X40' HQ Containers",
  productionLeadTime: "70-90 days",
  paymentTerms: "LC at sight or TT (30% Advance & 70% against copy of Shipping documents)",
  annualTurnover: "5 million USD"
};

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
  },
  // --- ALL SUBCATEGORIES REAL PRODUCTS ---
  {
  "id": "GFC-JFM-001",
  "slug": "handwoven-jute-doormat-gfc-jfm-001",
  "code": "GFC-JFM-001",
  "name": "Handwoven Jute Doormat",
  "category": "jute",
  "categoryName": "Jute",
  "categorySlug": "jute",
  "subCategory": "floor-mats",
  "image": "/products/gfc_jfm_001.jpg",
  "galleryImages": [
    "/products/gfc_jfm_001.jpg"
  ],
  "description": "Heavyweight handwoven natural golden jute entrance doormat with intricate braided borders for eco-friendly home entrances.",
  "longDescription": {
    "overview": "Crafted from 100% premium Bangladesh golden jute, this durable natural doormat effectively traps dirt while providing a warm, organic welcome to residential and commercial doorways.",
    "craftsmanship": "Hand-braided and densely stitched by master jute artisans using thick 4-ply natural jute rope.",
    "exportDetails": "Shipped rolled and bundled in master export cartons of 10 pieces with moisture-protective poly liners.",
    "careInstructions": "Shake or vacuum regularly. Spot clean with dry or slightly damp cloth."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.045,
  "setPerCarton": 10,
  "nwPerCtn": 8.5,
  "gwPerCtn": 9.8,
  "material": "100% Golden Jute Fiber",
  "color": "Natural Golden Honey",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-JFM-001"
    },
    {
      "key": "Item Name",
      "value": "Handwoven Jute Doormat"
    },
    {
      "key": "Specification",
      "value": "60cm x 90cm"
    },
    {
      "key": "Materials",
      "value": "100% Natural Jute"
    },
    {
      "key": "MOQ",
      "value": "200 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "100% Natural Fiber",
    "Heavy-Duty Weave",
    "High Moisture Absorption",
    "Biodegradable"
  ]
},
  {
  "id": "GFC-JP-001",
  "slug": "braided-jute-ottoman-pouf-gfc-jp-001",
  "code": "GFC-JP-001",
  "name": "Braided Jute Ottoman Pouf",
  "category": "jute",
  "categoryName": "Jute",
  "categorySlug": "jute",
  "subCategory": "poufs",
  "image": "/products/gfc_jp_001.jpg",
  "galleryImages": [
    "/products/gfc_jp_001.jpg"
  ],
  "description": "Chic cylindrical hand-braided jute ottoman pouf designed for sustainable living room seating, footrests, and bohemian interior accents.",
  "longDescription": {
    "overview": "This handcrafted cylindrical pouf offers both functional extra seating and rich artisanal texture. Stuffed with dense EPS beads or recycled cotton filling for lasting structural firmness.",
    "craftsmanship": "Artisans hand-coil thick braided golden jute strands in spiral formation, bound with heavy-duty hidden stitching.",
    "exportDetails": "Individually packed in heavy-duty export poly-bags inside 5-ply master cartons.",
    "careInstructions": "Vacuum with soft brush attachment. Keep in dry indoor locations."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.075,
  "setPerCarton": 2,
  "nwPerCtn": 6,
  "gwPerCtn": 7.5,
  "material": "Golden Jute Outer Shell, Cotton/EPS Inner",
  "color": "Natural Tan / Amber",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-JP-001"
    },
    {
      "key": "Item Name",
      "value": "Braided Jute Ottoman Pouf"
    },
    {
      "key": "Specification",
      "value": "45cm Dia x 35cm Height"
    },
    {
      "key": "Materials",
      "value": "100% Jute Rope Exterior"
    },
    {
      "key": "MOQ",
      "value": "100 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Hand-Braided Shell",
    "Firm & Comfortable Seating",
    "Boho Chic Living Decor",
    "Eco-Friendly"
  ]
},
  {
  "id": "GFC-SFM-001",
  "slug": "natural-seagrass-floor-mat-gfc-sfm-001",
  "code": "GFC-SFM-001",
  "name": "Natural Seagrass Floor Mat",
  "category": "seagrass",
  "categoryName": "Seagrass",
  "categorySlug": "seagrass",
  "subCategory": "floor-mats",
  "image": "/products/gfc_sfm_001.jpg",
  "galleryImages": [
    "/products/gfc_sfm_001.jpg"
  ],
  "description": "Flat-woven coastal seagrass area mat featuring a tight herringbone texture and natural non-slip organic surface.",
  "longDescription": {
    "overview": "Ideal for hallways, living areas, and covered patios. The dense natural weave resists heavy foot traffic while providing an organic cooling effect.",
    "craftsmanship": "Loom-woven and hand-finished by coastal Bangladesh artisans using seasoned seagrass blades.",
    "exportDetails": "Packed rolled in moisture-resistant master cartons of 6 pieces.",
    "careInstructions": "Shake out dirt or vacuum without beater bar."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.055,
  "setPerCarton": 6,
  "nwPerCtn": 7.2,
  "gwPerCtn": 8.6,
  "material": "100% Coastal Seagrass",
  "color": "Natural Olive-Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-SFM-001"
    },
    {
      "key": "Item Name",
      "value": "Natural Seagrass Floor Mat"
    },
    {
      "key": "Specification",
      "value": "90cm x 150cm"
    },
    {
      "key": "Materials",
      "value": "100% Natural Seagrass"
    },
    {
      "key": "MOQ",
      "value": "150 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Durable Herringbone Texture",
    "Naturally Stain Resistant",
    "Cool Underfoot",
    "Export Certified"
  ]
},
  {
  "id": "GFC-SPM-001",
  "slug": "round-seagrass-table-placemat-set-gfc-spm-001",
  "code": "GFC-SPM-001",
  "name": "Round Seagrass Table Placemat Set",
  "category": "seagrass",
  "categoryName": "Seagrass",
  "categorySlug": "seagrass",
  "subCategory": "placemats",
  "image": "/products/gfc_spm_001.jpg",
  "galleryImages": [
    "/products/gfc_spm_001.jpg"
  ],
  "description": "Set of 6 handcrafted round seagrass placemats with matching drink coasters for tropical and farmhouse dining settings.",
  "longDescription": {
    "overview": "Protect tabletops from hot plates with thick, heat-insulated seagrass placemats. Adds rustic coastal charm to everyday dining and holiday entertaining.",
    "craftsmanship": "Hand-woven with concentric spiral braids and reinforced stitched edges to prevent unraveling.",
    "exportDetails": "Tied with natural raffia ribbon in sets of 6 placemats + 6 coasters. 24 sets per master carton.",
    "careInstructions": "Wipe clean with a damp sponge and allow to air dry."
  },
  "unit": "S/6 Set",
  "cbmPerCarton": 0.038,
  "setPerCarton": 24,
  "nwPerCtn": 6.8,
  "gwPerCtn": 8,
  "material": "Natural Coastal Seagrass",
  "color": "Natural Two-Tone Seagrass",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-SPM-001"
    },
    {
      "key": "Item Name",
      "value": "Round Seagrass Table Placemat Set"
    },
    {
      "key": "Specification",
      "value": "35cm Dia (Placemat) / 10cm Dia (Coaster)"
    },
    {
      "key": "Materials",
      "value": "100% Natural Seagrass"
    },
    {
      "key": "MOQ",
      "value": "300 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Heat-Resistant Table Protection",
    "Includes Matching Coasters",
    "Gift-Ready Ribbon Tie",
    "Sustainable Living"
  ]
},
  {
  "id": "GFC-ST-001",
  "slug": "seagrass-serving-tray-with-handles-gfc-st-001",
  "code": "GFC-ST-001",
  "name": "Seagrass Serving Tray with Handles",
  "category": "seagrass",
  "categoryName": "Seagrass",
  "categorySlug": "seagrass",
  "subCategory": "trays",
  "image": "/products/gfc_st_001.jpg",
  "galleryImages": [
    "/products/gfc_st_001.jpg"
  ],
  "description": "Rectangular coastal seagrass serving tray with integrated curved handles and solid polished wooden base.",
  "longDescription": {
    "overview": "Ideal for breakfast in bed, serving drinks and snacks, or organizing coffee table decor, candles, and magazines.",
    "craftsmanship": "Handwoven seagrass walls wrapped securely around a treated wooden base with ergonomic raised handles.",
    "exportDetails": "Packed in shrink wrap with corner protections. 12 pieces per master carton.",
    "careInstructions": "Wipe with dry or slightly damp cloth. Do not immerse in water."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.042,
  "setPerCarton": 12,
  "nwPerCtn": 5.5,
  "gwPerCtn": 6.8,
  "material": "Natural Seagrass, Solid Wood Base",
  "color": "Natural Amber & Honey Wood",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-ST-001"
    },
    {
      "key": "Item Name",
      "value": "Seagrass Serving Tray with Handles"
    },
    {
      "key": "Specification",
      "value": "42cm x 28cm x 7cm"
    },
    {
      "key": "Materials",
      "value": "Seagrass & Solid Wood"
    },
    {
      "key": "MOQ",
      "value": "250 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Solid Wooden Base",
    "Built-in Ergonomic Handles",
    "Multipurpose Organization",
    "Artisan Handcrafted"
  ]
},
  {
  "id": "GFC-SPB-001",
  "slug": "seagrass-pet-basket-bed-gfc-spb-001",
  "code": "GFC-SPB-001",
  "name": "Seagrass Pet Basket Bed",
  "category": "seagrass",
  "categoryName": "Seagrass",
  "categorySlug": "seagrass",
  "subCategory": "baskets",
  "image": "/products/gfc_spb_001.jpg",
  "galleryImages": [
    "/products/gfc_spb_001.jpg"
  ],
  "description": "Natural woven seagrass pet basket bed with low entryway and removable soft organic cotton cushion for cats and small dogs.",
  "longDescription": {
    "overview": "An eco-friendly alternative to synthetic plastic pet beds. The breathable natural seagrass weave provides a cozy, claw-resistant haven for pets while seamlessly blending with home decor.",
    "craftsmanship": "Reinforced handwoven structure made with thick sun-dried seagrass cord over a durable wire core.",
    "exportDetails": "Nested in sets of 2 or 3 per master export carton.",
    "careInstructions": "Spot clean seagrass with brush. Cushion cover is machine washable."
  },
  "unit": "Single / S/2",
  "cbmPerCarton": 0.068,
  "setPerCarton": 4,
  "nwPerCtn": 4.8,
  "gwPerCtn": 6.2,
  "material": "100% Coastal Seagrass, Cotton Cushion",
  "color": "Natural Seagrass Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-SPB-001"
    },
    {
      "key": "Item Name",
      "value": "Seagrass Pet Basket Bed"
    },
    {
      "key": "Specification",
      "value": "50cm Dia x 20cm Height"
    },
    {
      "key": "Materials",
      "value": "Natural Seagrass & Cotton"
    },
    {
      "key": "MOQ",
      "value": "150 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Breathable Natural Fibers",
    "Includes Soft Washable Cushion",
    "Claw-Resistant Weave",
    "Pet Safe & Chemical Free"
  ]
},
  {
  "id": "GFC-KPM-001",
  "slug": "kaisa-grass-round-placemat-gfc-kpm-001",
  "code": "GFC-KPM-001",
  "name": "Kaisa Grass Round Placemat",
  "category": "kans-grass",
  "categoryName": "Kans Grass",
  "categorySlug": "kans-grass",
  "subCategory": "placemats",
  "image": "/products/gfc_kpm_001.jpg",
  "galleryImages": [
    "/products/gfc_kpm_001.jpg"
  ],
  "description": "Traditional round dining placemat hand-stitched from wild riverbank Kaisa grass bound with natural off-white cotton wrapping.",
  "longDescription": {
    "overview": "Harvested wild along the river floodplains of Bangladesh, Kaisa grass is known for its remarkable rigidity and natural pale golden color. Beautifully wrapped with cotton cord for modern dining elegance.",
    "craftsmanship": "Coiled by hand and cross-stitched using authentic Bengali needle binding techniques.",
    "exportDetails": "Bundled in sets of 6 pcs per inner pack. Master carton contains 36 sets.",
    "careInstructions": "Wipe dry with clean cloth."
  },
  "unit": "S/6 Set",
  "cbmPerCarton": 0.034,
  "setPerCarton": 12,
  "nwPerCtn": 4.5,
  "gwPerCtn": 5.6,
  "material": "Wild Kaisa Grass, Cotton Cord",
  "color": "Pale Gold & Off-White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-KPM-001"
    },
    {
      "key": "Item Name",
      "value": "Kaisa Grass Round Placemat"
    },
    {
      "key": "Specification",
      "value": "33cm Diameter"
    },
    {
      "key": "Materials",
      "value": "Kaisa Grass & Cotton"
    },
    {
      "key": "MOQ",
      "value": "300 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Wild Harvested Fiber",
    "Hand-Bound Cotton Stitching",
    "Heat-Resistant",
    "Fair Trade Artisan Made"
  ]
},
  {
  "id": "GFC-KT-001",
  "slug": "kans-grass-bread-fruit-tray-gfc-kt-001",
  "code": "GFC-KT-001",
  "name": "Kans Grass Bread & Fruit Tray",
  "category": "kans-grass",
  "categoryName": "Kans Grass",
  "categorySlug": "kans-grass",
  "subCategory": "trays",
  "image": "/products/gfc_kt_001.jpg",
  "galleryImages": [
    "/products/gfc_kt_001.jpg"
  ],
  "description": "Oval handwoven Kans grass serving basket tray with integrated loop handles for artisan bread, fruits, and table centerpieces.",
  "longDescription": {
    "overview": "A rustic dining centerpiece tray tailored for bakery displays, breakfast tables, and dry food presentation. Durable wild grass walls keep goods aerated and fresh.",
    "craftsmanship": "Artisans hand-wrap Kaisa grass bundles with unbleached cotton cord into an oval contour with sturdy loop handles.",
    "exportDetails": "Bulk packed 20 pieces per export carton with corner padding.",
    "careInstructions": "Shake off dry crumbs. Spot clean with dry towel."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.04,
  "setPerCarton": 20,
  "nwPerCtn": 5.2,
  "gwPerCtn": 6.4,
  "material": "Kans (Kaisa) Wild Grass, Cotton Rope",
  "color": "Natural Straw & White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-KT-001"
    },
    {
      "key": "Item Name",
      "value": "Kans Grass Bread & Fruit Tray"
    },
    {
      "key": "Specification",
      "value": "38cm L x 24cm W x 10cm H"
    },
    {
      "key": "Materials",
      "value": "100% Wild Kaisa Grass"
    },
    {
      "key": "MOQ",
      "value": "250 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Organic Bread & Fruit Server",
    "Integrated Handles",
    "Food-Safe Natural Material",
    "Export Quality"
  ]
},
  {
  "id": "GFC-DLB-001",
  "slug": "date-leaf-storage-hamper-gfc-dlb-001",
  "code": "GFC-DLB-001",
  "name": "Date Leaf Storage Hamper Set",
  "category": "date-leaf",
  "categoryName": "Date Leaf",
  "categorySlug": "date-leaf",
  "subCategory": "baskets",
  "image": "/materials/orig_BDD-03.jpg",
  "galleryImages": [
    "/materials/orig_BDD-03.jpg"
  ],
  "description": "Authentic Bangladesh date palm leaf braided hamper baskets with fitted lids for eco-friendly nursery and living storage.",
  "longDescription": {
    "overview": "Crafted from sun-bleached date palm leaves, these traditional nested hampers offer generous storage capacity with a lightweight, smooth natural texture.",
    "craftsmanship": "Braided by skilled women weavers using thin date leaf strips stitched into sturdy cylindrical hamper forms.",
    "exportDetails": "Nested in sets of 3 or 4 inside master corrugated cartons.",
    "careInstructions": "Keep in dry ventilated areas."
  },
  "unit": "S/3 Set",
  "cbmPerCarton": 0.062,
  "setPerCarton": 4,
  "nwPerCtn": 3.5,
  "gwPerCtn": 4.8,
  "material": "100% Date Palm Leaf",
  "color": "Natural Cream / Pale Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-DLB-001"
    },
    {
      "key": "Item Name",
      "value": "Date Leaf Storage Hamper Set"
    },
    {
      "key": "Specification",
      "value": "S/3: D25xH20cm, D30xH25cm, D35xH30cm"
    },
    {
      "key": "Materials",
      "value": "100% Date Palm Leaf"
    },
    {
      "key": "MOQ",
      "value": "200 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Fitted Woven Lids",
    "Nested S/3 Set",
    "Lightweight & Tough",
    "Zero Chemical Treatment"
  ]
},
  {
  "id": "GFC-DPM-001",
  "slug": "braided-date-palm-leaf-placemat-gfc-dpm-001",
  "code": "GFC-DPM-001",
  "name": "Braided Date Palm Leaf Placemat Set",
  "category": "date-leaf",
  "categoryName": "Date Leaf",
  "categorySlug": "date-leaf",
  "subCategory": "placemats",
  "image": "/materials/orig_BDD-31.jpg",
  "galleryImages": [
    "/materials/orig_BDD-31.jpg"
  ],
  "description": "Round handwoven date leaf table placemats featuring a refined geometric braided weave for natural dining settings.",
  "longDescription": {
    "overview": "Bring earthy elegance to dining tables. These hand-braided date palm mats lie flat, resist heat from warm dishes, and highlight authentic Bangladeshi handicraft heritage.",
    "craftsmanship": "Finely sliced date palm fronds are sun-cured and braided by hand into intricate circular concentric patterns.",
    "exportDetails": "Packaged in sets of 6 or 12 placemats per box.",
    "careInstructions": "Spot clean with damp cloth and dry thoroughly."
  },
  "unit": "S/6 Set",
  "cbmPerCarton": 0.03,
  "setPerCarton": 20,
  "nwPerCtn": 5,
  "gwPerCtn": 6.2,
  "material": "Natural Date Palm Leaf",
  "color": "Natural Pale Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-DPM-001"
    },
    {
      "key": "Item Name",
      "value": "Braided Date Palm Leaf Placemat Set"
    },
    {
      "key": "Specification",
      "value": "35cm Diameter"
    },
    {
      "key": "Materials",
      "value": "100% Date Palm Fronds"
    },
    {
      "key": "MOQ",
      "value": "300 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Fine Braided Pattern",
    "Naturally Heat-Resistant",
    "Lightweight & Flexible",
    "Artisan Handmade"
  ]
},
  {
  "id": "GFC-DT-001",
  "slug": "date-leaf-decorative-tray-gfc-dt-001",
  "code": "GFC-DT-001",
  "name": "Date Leaf Decorative Utility Tray",
  "category": "date-leaf",
  "categoryName": "Date Leaf",
  "categorySlug": "date-leaf",
  "subCategory": "trays",
  "image": "/products/image20.png",
  "galleryImages": [
    "/products/image20.png"
  ],
  "description": "Shallow rectangular date leaf woven tray with side handles for vanity storage, desk organization, and tabletop display.",
  "longDescription": {
    "overview": "A versatile shallow organizer tray hand-braided from resilient date palm leaves. Fits towels, cosmetics, desk stationery, or coffee table decor.",
    "craftsmanship": "Braided over a lightweight bamboo sub-frame for crisp rectangular structure.",
    "exportDetails": "Nested in sets of 3 inside master cartons.",
    "careInstructions": "Dust with soft brush."
  },
  "unit": "S/3 Set",
  "cbmPerCarton": 0.045,
  "setPerCarton": 12,
  "nwPerCtn": 4.2,
  "gwPerCtn": 5.5,
  "material": "Date Palm Leaf, Bamboo Frame",
  "color": "Natural Cream-Tan",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-DT-001"
    },
    {
      "key": "Item Name",
      "value": "Date Leaf Decorative Utility Tray"
    },
    {
      "key": "Specification",
      "value": "38cm x 26cm x 8cm"
    },
    {
      "key": "Materials",
      "value": "Date Palm Leaf & Bamboo"
    },
    {
      "key": "MOQ",
      "value": "250 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Structured Rectangular Profile",
    "Built-in Handholes",
    "Lightweight Organizer",
    "Biodegradable"
  ]
},
  {
  "id": "GFC-RB-001",
  "slug": "open-weave-rattan-storage-basket-gfc-rb-001",
  "code": "GFC-RB-001",
  "name": "Open Weave Rattan Storage Basket",
  "category": "rattan",
  "categoryName": "Rattan",
  "categorySlug": "rattan",
  "subCategory": "baskets",
  "image": "/materials/orig_BDC-02.jpg",
  "galleryImages": [
    "/materials/orig_BDC-02.jpg"
  ],
  "description": "Premium natural rattan cane storage basket with open lattice weave and reinforced rim for high-end home decor.",
  "longDescription": {
    "overview": "Combining traditional cane weaving with modern open-air aesthetics, this rattan basket provides luxurious storage for throws, cushions, and magazines.",
    "craftsmanship": "Hand-bent and woven using seasoned Bangladesh Calamus rattan poles and fine cane splints.",
    "exportDetails": "Shipped nested in master cartons of 4 sets with anti-humidity desiccant.",
    "careInstructions": "Wipe with damp cloth."
  },
  "unit": "S/3 Set",
  "cbmPerCarton": 0.07,
  "setPerCarton": 2,
  "nwPerCtn": 4,
  "gwPerCtn": 5.5,
  "material": "100% Natural Rattan Cane",
  "color": "Warm Amber Cane",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-RB-001"
    },
    {
      "key": "Item Name",
      "value": "Open Weave Rattan Storage Basket"
    },
    {
      "key": "Specification",
      "value": "38cm Dia x 32cm Height"
    },
    {
      "key": "Materials",
      "value": "100% Natural Rattan"
    },
    {
      "key": "MOQ",
      "value": "150 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Solid Cane Rim",
    "Open Lattice Weave",
    "High Durability",
    "Luxury Resort Aesthetic"
  ]
},
  {
  "id": "GFC-RF-001",
  "slug": "handcrafted-rattan-accent-furniture-gfc-rf-001",
  "code": "GFC-RF-001",
  "name": "Handcrafted Rattan Accent Stool & Table",
  "category": "rattan",
  "categoryName": "Rattan",
  "categorySlug": "rattan",
  "subCategory": "furnitures",
  "image": "/materials/orig_BDC-06.jpg",
  "galleryImages": [
    "/materials/orig_BDC-06.jpg"
  ],
  "description": "Artisanal rattan accent stool and side table hand-bent and tied for indoor living rooms, sunrooms, and boutique hotels.",
  "longDescription": {
    "overview": "Elevate interior living spaces with sustainable cane furniture. Sturdy enough to function as occasional seating or a stylish plant and beverage side table.",
    "craftsmanship": "Steam-bent solid rattan poles bound with natural cane peel bindings and coated with clear protective lacquer.",
    "exportDetails": "Individual box packaging with reinforced cardboard corner protectors.",
    "careInstructions": "Indoor and covered outdoor use only. Clean with soft dry towel."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.085,
  "setPerCarton": 1,
  "nwPerCtn": 3.8,
  "gwPerCtn": 5.2,
  "material": "Natural Seasoned Rattan Cane",
  "color": "Natural Golden Honey",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-RF-001"
    },
    {
      "key": "Item Name",
      "value": "Handcrafted Rattan Accent Stool & Table"
    },
    {
      "key": "Specification",
      "value": "40cm Dia x 45cm Height"
    },
    {
      "key": "Materials",
      "value": "100% Solid Rattan"
    },
    {
      "key": "MOQ",
      "value": "100 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Solid Rattan Frame",
    "Steam-Bent Construction",
    "Lightweight Yet Sturdy",
    "Timeless Boho Design"
  ]
},
  {
  "id": "GFC-RM-001",
  "slug": "sunburst-rattan-wall-mirror-gfc-rm-001",
  "code": "GFC-RM-001",
  "name": "Sunburst Rattan Wall Mirror",
  "category": "rattan",
  "categoryName": "Rattan",
  "categorySlug": "rattan",
  "subCategory": "mirrors",
  "image": "/products/image54.png",
  "galleryImages": [
    "/products/image54.png"
  ],
  "description": "Boho statement sunburst rattan wall mirror with handcrafted petal rays and central high-clarity glass mirror.",
  "longDescription": {
    "overview": "A striking focal piece for entryway walls, bedrooms, and vanity spaces. Handwoven radiating cane rays create organic warmth and artistic depth.",
    "craftsmanship": "Precision assembled by master cane craftsmen with a solid wooden backing and heavy-duty wall hanging hook.",
    "exportDetails": "Packaged in custom styrofoam-lined master boxes to ensure zero transit breakage.",
    "careInstructions": "Clean glass with standard glass cleaner. Dust frame with soft feather duster."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.048,
  "setPerCarton": 4,
  "nwPerCtn": 5.5,
  "gwPerCtn": 7.2,
  "material": "Natural Rattan Cane, Glass Mirror, Wood Backing",
  "color": "Natural Amber Gold",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-RM-001"
    },
    {
      "key": "Item Name",
      "value": "Sunburst Rattan Wall Mirror"
    },
    {
      "key": "Specification",
      "value": "60cm Overall Dia (25cm Mirror Glass)"
    },
    {
      "key": "Materials",
      "value": "Natural Rattan & HD Glass"
    },
    {
      "key": "MOQ",
      "value": "150 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Sunburst Ray Design",
    "High-Clarity Glass",
    "Styrofoam Safe Packing",
    "Statement Wall Accent"
  ]
},
  {
  "id": "GFC-BF-001",
  "slug": "bamboo-eco-living-furniture-gfc-bf-001",
  "code": "GFC-BF-001",
  "name": "Bamboo Eco Living Stool & Decor",
  "category": "bamboo",
  "categoryName": "Bamboo",
  "categorySlug": "bamboo",
  "subCategory": "furnitures",
  "image": "/materials/orig_BDB-06.jpg",
  "galleryImages": [
    "/materials/orig_BDB-06.jpg"
  ],
  "description": "Solid split bamboo eco furniture stool and plant stand handcrafted from seasoned Bangladesh timber bamboo.",
  "longDescription": {
    "overview": "Crafted from sustainable mature bamboo culms, this compact stool / accent stand combines exceptional strength with low environmental footprint.",
    "craftsmanship": "Treated for pest and mold resistance, machine sanded smooth, and finished with non-toxic natural wood sealer.",
    "exportDetails": "Packed in flat master cartons with foam edge protectors.",
    "careInstructions": "Wipe with dry or damp cloth."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.052,
  "setPerCarton": 2,
  "nwPerCtn": 4.5,
  "gwPerCtn": 5.8,
  "material": "100% Solid Seasoned Bamboo",
  "color": "Natural Bamboo Yellow-Gold",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-BF-001"
    },
    {
      "key": "Item Name",
      "value": "Bamboo Eco Living Stool & Decor"
    },
    {
      "key": "Specification",
      "value": "35cm x 35cm x 42cm"
    },
    {
      "key": "Materials",
      "value": "Solid Timber Bamboo"
    },
    {
      "key": "MOQ",
      "value": "150 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Pest & Mold Treated",
    "High Load Capacity",
    "100% Renewable Bamboo",
    "Smooth Polished Surface"
  ]
},
  {
  "id": "GFC-PFB-001",
  "slug": "palm-fiber-utility-storage-basket-gfc-pfb-001",
  "code": "GFC-PFB-001",
  "name": "Palm Fiber Utility Storage Basket",
  "category": "palm-fiber",
  "categoryName": "Palm Fiber",
  "categorySlug": "palm-fiber",
  "subCategory": "baskets",
  "image": "/materials/orig_BSL-01.jpg",
  "galleryImages": [
    "/materials/orig_BSL-01.jpg"
  ],
  "description": "Rugged natural palmyra palm fiber storage basket with durable structured walls and natural earth tone aesthetics.",
  "longDescription": {
    "overview": "Made from tough Palmyra palm fiber (Borassus Flabellifer), these rugged storage containers provide exceptional resistance to wear, making them ideal for tools, firewood, or heavy laundry.",
    "craftsmanship": "Coarsely woven by rural artisans using thick hand-twisted palm fibers over an iron/cane frame.",
    "exportDetails": "Nested in sets of 3 inside heavy corrugated export boxes.",
    "careInstructions": "Brush off dirt. Suitable for indoor and sheltered outdoor use."
  },
  "unit": "S/3 Set",
  "cbmPerCarton": 0.065,
  "setPerCarton": 3,
  "nwPerCtn": 5.2,
  "gwPerCtn": 6.8,
  "material": "100% Natural Palmyra Palm Fiber",
  "color": "Dark Brown & Natural Earthy Tone",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-PFB-001"
    },
    {
      "key": "Item Name",
      "value": "Palm Fiber Utility Storage Basket"
    },
    {
      "key": "Specification",
      "value": "36cm Dia x 34cm Height"
    },
    {
      "key": "Materials",
      "value": "Palmyra Palm Fiber"
    },
    {
      "key": "MOQ",
      "value": "200 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Ultra Heavy-Duty Fiber",
    "Weather Resistant",
    "Deep Earthy Texture",
    "Zero Synthetic Additives"
  ]
},
  {
  "id": "GFC-PPM-001",
  "slug": "palm-fiber-round-table-mat-gfc-ppm-001",
  "code": "GFC-PPM-001",
  "name": "Palm Fiber Round Table Mat Set",
  "category": "palm-fiber",
  "categoryName": "Palm Fiber",
  "categorySlug": "palm-fiber",
  "subCategory": "placemats",
  "image": "/materials/orig_BSL-02.jpg",
  "galleryImages": [
    "/materials/orig_BSL-02.jpg"
  ],
  "description": "Heavy-duty heat-resistant round table placemat set hand-braided from natural Palmyra palm stalk fibers.",
  "longDescription": {
    "overview": "Designed for robust dining and kitchen hot-pot protection, palm fiber mats provide superior thermal insulation and distinctive rustic tactile texture.",
    "craftsmanship": "Braided using tough palm stalk strands coiled in tight concentric rings and heavy-stitched for lie-flat permanence.",
    "exportDetails": "Packed in sets of 6 pcs per carton.",
    "careInstructions": "Wipe clean with a damp sponge."
  },
  "unit": "S/6 Set",
  "cbmPerCarton": 0.032,
  "setPerCarton": 18,
  "nwPerCtn": 5.8,
  "gwPerCtn": 7,
  "material": "100% Palm Fiber",
  "color": "Natural Earth Brown",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-PPM-001"
    },
    {
      "key": "Item Name",
      "value": "Palm Fiber Round Table Mat Set"
    },
    {
      "key": "Specification",
      "value": "35cm Diameter"
    },
    {
      "key": "Materials",
      "value": "Natural Palm Fiber"
    },
    {
      "key": "MOQ",
      "value": "300 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Superior Heat Resistance",
    "Rugged Natural Texture",
    "Protects Delicate Surfaces",
    "Long-lasting Durability"
  ]
},
  {
  "id": "GFC-WPM-001",
  "slug": "water-hyacinth-braided-placemat-set-gfc-wpm-001",
  "code": "GFC-WPM-001",
  "name": "Water Hyacinth Braided Placemat Set",
  "category": "water-hyacinth",
  "categoryName": "Water Hyacinth",
  "categorySlug": "water-hyacinth",
  "subCategory": "placemats",
  "image": "/materials/orig_BWH-02.jpg",
  "galleryImages": [
    "/materials/orig_BWH-02.jpg"
  ],
  "description": "Thick braided water hyacinth round dining placemats featuring a soft golden honey tone and chunky organic texture.",
  "longDescription": {
    "overview": "Handcrafted from dried water hyacinth stalks harvested from Bangladesh freshwater rivers. Provides thick, soft cushion protection for wooden dinner tables.",
    "craftsmanship": "Braided into thick rope braids and coiled in spiral geometry with tight hidden stitching.",
    "exportDetails": "Tied in sets of 6 pieces with jute twine. Master box holds 20 sets.",
    "careInstructions": "Spot clean and dry completely before storing."
  },
  "unit": "S/6 Set",
  "cbmPerCarton": 0.038,
  "setPerCarton": 20,
  "nwPerCtn": 6.2,
  "gwPerCtn": 7.6,
  "material": "100% Aquatic Water Hyacinth",
  "color": "Honey Warm Gold",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-WPM-001"
    },
    {
      "key": "Item Name",
      "value": "Water Hyacinth Braided Placemat Set"
    },
    {
      "key": "Specification",
      "value": "36cm Diameter"
    },
    {
      "key": "Materials",
      "value": "100% Water Hyacinth"
    },
    {
      "key": "MOQ",
      "value": "250 Sets"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Chunky Braided Weave",
    "Natural Honey Tone",
    "Eco River Harvest",
    "Soft Table Cushion"
  ]
},
  {
  "id": "GFC-JHR-001",
  "slug": "recycled-jhuta-braided-area-rug-gfc-jhr-001",
  "code": "GFC-JHR-001",
  "name": "Recycled Jhuta Braided Area Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/image52.png",
  "galleryImages": [
    "/products/image52.png"
  ],
  "description": "Vibrant circular area rug hand-braided from upcycled textile yarn (Jhuta) combined with natural golden jute braids.",
  "longDescription": {
    "overview": "An eco-positive zero-waste innovation: leftover garment export cotton yarn (Jhuta) is combined with jute to create colorful, reversible, and washable accent rugs.",
    "craftsmanship": "Intertwined and braided by hand, coiled in concentric rings with high-tensile industrial stitching.",
    "exportDetails": "Rolled and packed 6 rugs per master carton with moisture barrier.",
    "careInstructions": "Spot clean or hand wash gentle cycle."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.065,
  "setPerCarton": 6,
  "nwPerCtn": 11.5,
  "gwPerCtn": 13,
  "material": "Recycled Cotton Jhuta & Jute Fiber",
  "color": "Multicolor Bohemian Accent",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-JHR-001"
    },
    {
      "key": "Item Name",
      "value": "Recycled Jhuta Braided Area Rug"
    },
    {
      "key": "Specification",
      "value": "100cm Diameter"
    },
    {
      "key": "Materials",
      "value": "Upcycled Cotton & Jute"
    },
    {
      "key": "MOQ",
      "value": "150 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "Zero-Waste Upcycled Design",
    "Reversible Double-Sided Use",
    "Soft Underfoot",
    "Vibrant Bohemian Style"
  ]
},
  {
  "id": "GFC-CR-001",
  "slug": "handwoven-organic-cotton-rug-gfc-cr-001",
  "code": "GFC-CR-001",
  "name": "Handwoven Organic Cotton Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "cotton-rugs",
  "image": "/products/image50.png",
  "galleryImages": [
    "/products/image50.png"
  ],
  "description": "Minimalist Scandinavian handwoven flatweave rug crafted from 100% natural unbleached cotton yarn with fringe tassel trim.",
  "longDescription": {
    "overview": "Soft, breathable, and machine washable area rug ideal for bedrooms, nursery floors, and modern bathroom suites.",
    "craftsmanship": "Handloom woven by traditional Bengali cotton weavers with delicate geometric ribbing and knotted fringe ends.",
    "exportDetails": "Folded in individual poly bags. 10 pieces per master carton.",
    "careInstructions": "Machine washable on gentle cycle in cold water."
  },
  "unit": "Single Piece",
  "cbmPerCarton": 0.05,
  "setPerCarton": 10,
  "nwPerCtn": 9,
  "gwPerCtn": 10.5,
  "material": "100% Natural Cotton Yarn",
  "color": "Natural Off-White / Cream",
  "specifications": [
    {
      "key": "Item Code",
      "value": "GFC-CR-001"
    },
    {
      "key": "Item Name",
      "value": "Handwoven Organic Cotton Rug"
    },
    {
      "key": "Specification",
      "value": "70cm x 120cm"
    },
    {
      "key": "Materials",
      "value": "100% Pure Cotton"
    },
    {
      "key": "MOQ",
      "value": "200 Pcs"
    },
    {
      "key": "Country of Origin",
      "value": "Bangladesh"
    }
  ],
  "features": [
    "100% Pure Natural Cotton",
    "Machine Washable",
    "Soft & Hypoallergenic",
    "Hand-Knotted Fringe"
  ]
},
];
