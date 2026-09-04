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
export const OFFICIAL_EMAIL = "shafiq@goldenfibercraftsltd.com";
export const SECONDARY_EMAIL = "shafiq@goldenfibercraftsltd.com";
export const OFFICIAL_WEBSITE = "www.goldenfibercraftsltd.com";

export const COMPANY_ADDRESSES = {
  corporateOffice: "House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh",
  factoryUnit1: "Factory 1: Paler para, Akter market (Beside UTAH Garments), Gazipur",
  factoryUnit2: "Factory 2: Kacharipara, Milonganj Bazar, Nilganj, Kishoreganj",
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
    email: "shafiq@goldenfibercraftsltd.com",
    image: "/about/md_nazrul_islam_uzzal.png",
    message: "At Golden Fiber Crafts Ltd., we believe that the future of business belongs to companies that can combine purpose with performance, craftsmanship with innovation, and sustainability with international standards. Our mission is not simply to create beautiful products, but to deliver products that our customers can trust—through consistent quality, responsible production, competitive value, and dependable service. We continuously strengthen our production capabilities, quality-control systems, product development, sourcing, and supply-chain management. Our greatest strength is our people. By working closely with skilled artisans, experienced professionals, and trusted business partners, we connect Bangladesh's traditional craftsmanship with contemporary international design and commercial requirements. We believe that empowering our people and developing their skills is essential to creating sustainable growth."
  }
};

export const TECHNICAL_INFORMATION = {
  officeStaff: "30",
  artisans: "Approximate 10,000 (Directly & Indirectly)",
  productionCapacityMonth: "40X40' HQ Containers",
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
  // ==========================================
  // 6. Jute Macrames & Plant Hangers (Authentic Catalogue Collection - 24 Products)
  // ==========================================
  {
    id: "BCC-05",
    slug: "two-tier-dual-jute-macrame-plant-hanger-bcc-05",
    code: "BCC-05",
    name: "Two-Tier Dual Jute Macrame Plant Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bcc_05.png",
    galleryImages: ["/products/bcc_05.png"],
    description: "Vertical 2-tier dual basket macrame plant hanger handcrafted from twisted golden jute rope with teal accent banding and hanging fringe tassel.",
    longDescription: {
          "overview": "The Two-Tier Dual Jute Macrame Plant Hanger (Art No: BCC-05) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute & Teal Accent",
    specifications: [
          {
                "key": "Item Code",
                "value": "BCC-05"
          },
          {
                "key": "Item Name",
                "value": "Two-Tier Dual Jute Macrame Plant Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute & Teal Accent"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BCC-06",
    slug: "single-bowl-braided-jute-macrame-hanger-bcc-06",
    code: "BCC-06",
    name: "Single Bowl Braided Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bcc_06.png",
    galleryImages: ["/products/bcc_06.png"],
    description: "Chic hand-knotted natural jute macrame plant hanger featuring an integrated textured bowl pot holder with bottom tassel ornament.",
    longDescription: {
          "overview": "The Single Bowl Braided Jute Macrame Hanger (Art No: BCC-06) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Off-White & Natural Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BCC-06"
          },
          {
                "key": "Item Name",
                "value": "Single Bowl Braided Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Off-White & Natural Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-01",
    slug: "beaded-saffron-yellow-jute-macrame-hanger-bjc-01",
    code: "BJC-01",
    name: "Beaded Saffron Yellow Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_01.png",
    galleryImages: ["/products/bjc_01.png"],
    description: "Artisanal macrame plant hanger holding a saffron yellow and royal blue banded pot with decorative polished natural wooden beads.",
    longDescription: {
          "overview": "The Beaded Saffron Yellow Jute Macrame Hanger (Art No: BJC-01) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope & Wood Beads. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope & Wood Beads",
    color: "Natural Jute, Saffron Yellow & Wood Beads",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-01"
          },
          {
                "key": "Item Name",
                "value": "Beaded Saffron Yellow Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope & Wood Beads"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute, Saffron Yellow & Wood Beads"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-04",
    slug: "monochrome-checkered-jute-macrame-hanger-bjc-04",
    code: "BJC-04",
    name: "Monochrome Checkered Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_04.png",
    galleryImages: ["/products/bjc_04.png"],
    description: "Modern macrame hanging planter holding a woven black and white checkered cylinder basket pot with playful hanging loop fringe.",
    longDescription: {
          "overview": "The Monochrome Checkered Jute Macrame Hanger (Art No: BJC-04) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Black & White Checkered Basket with Natural Rope",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-04"
          },
          {
                "key": "Item Name",
                "value": "Monochrome Checkered Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Black & White Checkered Basket with Natural Rope"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-06",
    slug: "sky-blue-banded-jute-macrame-plant-hanger-bjc-06",
    code: "BJC-06",
    name: "Sky Blue Banded Jute Macrame Plant Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_06.png",
    galleryImages: ["/products/bjc_06.png"],
    description: "Hand-knotted 4-strand natural jute hanging plant cradle with a sky-blue accented woven base basket and tassel fringe.",
    longDescription: {
          "overview": "The Sky Blue Banded Jute Macrame Plant Hanger (Art No: BJC-06) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute with Sky Blue Band",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-06"
          },
          {
                "key": "Item Name",
                "value": "Sky Blue Banded Jute Macrame Plant Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute with Sky Blue Band"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-07",
    slug: "two-tier-terracotta-natural-jute-macrame-bjc-07",
    code: "BJC-07",
    name: "Two-Tier Terracotta & Natural Jute Macrame",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_07.png",
    galleryImages: ["/products/bjc_07.png"],
    description: "Double vertical hanging macrame planter featuring an upper natural jute bowl and a lower terracotta red dyed planter bowl with tassels.",
    longDescription: {
          "overview": "The Two-Tier Terracotta & Natural Jute Macrame (Art No: BJC-07) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Terracotta Red",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-07"
          },
          {
                "key": "Item Name",
                "value": "Two-Tier Terracotta & Natural Jute Macrame"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute & Terracotta Red"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-10",
    slug: "tiered-beaded-double-jute-macrame-hanger-bjc-10",
    code: "BJC-10",
    name: "Tiered Beaded Double Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_10.png",
    galleryImages: ["/products/bjc_10.png"],
    description: "Elaborate two-tier knotted jute macrame plant hanger adorned with handcrafted beads and double woven basket holders.",
    longDescription: {
          "overview": "The Tiered Beaded Double Jute Macrame Hanger (Art No: BJC-10) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope & Beads. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope & Beads",
    color: "Natural Golden Jute with Wooden Beads",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-10"
          },
          {
                "key": "Item Name",
                "value": "Tiered Beaded Double Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope & Beads"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute with Wooden Beads"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-11",
    slug: "minimalist-4-strand-jute-macrame-plant-sling-bjc-11",
    code: "BJC-11",
    name: "Minimalist 4-Strand Jute Macrame Plant Sling",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_11.png",
    galleryImages: ["/products/bjc_11.png"],
    description: "Timeless 4-strand twisted jute rope hanging plant sling holding a natural textured woven kaisa-jute plant basket.",
    longDescription: {
          "overview": "The Minimalist 4-Strand Jute Macrame Plant Sling (Art No: BJC-11) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-11"
          },
          {
                "key": "Item Name",
                "value": "Minimalist 4-Strand Jute Macrame Plant Sling"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-13",
    slug: "coiled-jute-pot-macrame-with-pom-pom-tassels-bjc-13",
    code: "BJC-13",
    name: "Coiled Jute Pot Macrame with Pom-Pom Tassels",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_13.png",
    galleryImages: ["/products/bjc_13.png"],
    description: "Decorative macrame plant hanger featuring an integrated round basket pot holder embellished with side pom-pom fringe tassels.",
    longDescription: {
          "overview": "The Coiled Jute Pot Macrame with Pom-Pom Tassels (Art No: BJC-13) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Cream Jute with Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-13"
          },
          {
                "key": "Item Name",
                "value": "Coiled Jute Pot Macrame with Pom-Pom Tassels"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Cream Jute with Tassels"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-14",
    slug: "small-cylinder-basket-jute-macrame-hanger-bjc-14",
    code: "BJC-14",
    name: "Small Cylinder Basket Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_14.png",
    galleryImages: ["/products/bjc_14.png"],
    description: "Compact hanging plant sling crafted from twisted jute rope holding a cylindrical woven basket pot with side accent tassels.",
    longDescription: {
          "overview": "The Small Cylinder Basket Jute Macrame Hanger (Art No: BJC-14) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Golden Jute & Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-14"
          },
          {
                "key": "Item Name",
                "value": "Small Cylinder Basket Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute & Tassels"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-15",
    slug: "slender-natural-jute-macrame-plant-hanger-bjc-15",
    code: "BJC-15",
    name: "Slender Natural Jute Macrame Plant Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_15.png",
    galleryImages: ["/products/bjc_15.png"],
    description: "Delicate fine-rope knotted jute macrame hanger holding a shallow round woven planter bowl with white tassel fringe.",
    longDescription: {
          "overview": "The Slender Natural Jute Macrame Plant Hanger (Art No: BJC-15) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Unbleached Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-15"
          },
          {
                "key": "Item Name",
                "value": "Slender Natural Jute Macrame Plant Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Unbleached Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-17",
    slug: "teal-tasseled-dual-jute-macrame-planter-bjc-17",
    code: "BJC-17",
    name: "Teal Tasseled Dual Jute Macrame Planter",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_17.png",
    galleryImages: ["/products/bjc_17.png"],
    description: "Boho-chic handcrafted macrame plant hanger adorned with turquoise blue dyed tassels and double hanging basket support.",
    longDescription: {
          "overview": "The Teal Tasseled Dual Jute Macrame Planter (Art No: BJC-17) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Jute & Turquoise Teal Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-17"
          },
          {
                "key": "Item Name",
                "value": "Teal Tasseled Dual Jute Macrame Planter"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute & Turquoise Teal Tassels"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-18",
    slug: "terracotta-toned-jute-rope-macrame-hanger-bjc-18",
    code: "BJC-18",
    name: "Terracotta Toned Jute Rope Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_18.png",
    galleryImages: ["/products/bjc_18.png"],
    description: "Warm terracotta dyed jute macrame plant hanger with heavy braided rope knots and a voluminous hanging fringe tassel tail.",
    longDescription: {
          "overview": "The Terracotta Toned Jute Rope Macrame Hanger (Art No: BJC-18) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Warm Terracotta Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-18"
          },
          {
                "key": "Item Name",
                "value": "Terracotta Toned Jute Rope Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Warm Terracotta Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-19",
    slug: "wide-shallow-bowl-jute-macrame-sling-bjc-19",
    code: "BJC-19",
    name: "Wide Shallow Bowl Jute Macrame Sling",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_19.png",
    galleryImages: ["/products/bjc_19.png"],
    description: "Long 4-strand knotted natural jute cord hanging sling cradling an expansive shallow circular woven planter tray basket.",
    longDescription: {
          "overview": "The Wide Shallow Bowl Jute Macrame Sling (Art No: BJC-19) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute Rope. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute Rope",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-19"
          },
          {
                "key": "Item Name",
                "value": "Wide Shallow Bowl Jute Macrame Sling"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute Rope"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-21",
    slug: "conical-flowerpot-jute-macrame-hanger-bjc-21",
    code: "BJC-21",
    name: "Conical Flowerpot Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_21.png",
    galleryImages: ["/products/bjc_21.png"],
    description: "Hand-braided earthy natural jute macrame cord holding a conical handwoven flowerpot planter bowl with bottom loop tassel.",
    longDescription: {
          "overview": "The Conical Flowerpot Jute Macrame Hanger (Art No: BJC-21) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Earthy Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-21"
          },
          {
                "key": "Item Name",
                "value": "Conical Flowerpot Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Earthy Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-22",
    slug: "wide-strap-minimalist-jute-macrame-planter-bjc-22",
    code: "BJC-22",
    name: "Wide-Strap Minimalist Jute Macrame Planter",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_22.png",
    galleryImages: ["/products/bjc_22.png"],
    description: "Modern Scandinavian-inspired minimalist wide-strap braided jute macrame hanger holding an unbleached golden basket pot.",
    longDescription: {
          "overview": "The Wide-Strap Minimalist Jute Macrame Planter (Art No: BJC-22) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-22"
          },
          {
                "key": "Item Name",
                "value": "Wide-Strap Minimalist Jute Macrame Planter"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-23",
    slug: "fine-twisted-cord-jute-macrame-hanger-bjc-23",
    code: "BJC-23",
    name: "Fine Twisted Cord Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_23.png",
    galleryImages: ["/products/bjc_23.png"],
    description: "Slender multi-strand twisted natural jute cord macrame hanger holding a golden round basket planter with bottom tassel.",
    longDescription: {
          "overview": "The Fine Twisted Cord Jute Macrame Hanger (Art No: BJC-23) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-23"
          },
          {
                "key": "Item Name",
                "value": "Fine Twisted Cord Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-35",
    slug: "magenta-tasseled-jute-macrame-plant-hanger-bjc-35",
    code: "BJC-35",
    name: "Magenta Tasseled Jute Macrame Plant Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_35.png",
    galleryImages: ["/products/bjc_35.png"],
    description: "Artisanal natural golden jute plant hanger decorated with vibrant magenta and purple hanging pom-pom fringe tassels.",
    longDescription: {
          "overview": "The Magenta Tasseled Jute Macrame Plant Hanger (Art No: BJC-35) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute (Corchorus capsularis). Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute (Corchorus capsularis)",
    color: "Natural Golden Jute & Magenta Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-35"
          },
          {
                "key": "Item Name",
                "value": "Magenta Tasseled Jute Macrame Plant Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute (Corchorus capsularis)"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute & Magenta Tassels"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-36",
    slug: "openwork-weave-charcoal-jute-macrame-hanger-bjc-36",
    code: "BJC-36",
    name: "Openwork Weave Charcoal Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_36.png",
    galleryImages: ["/products/bjc_36.png"],
    description: "Muted dark charcoal and natural jute braided plant hanger supporting an airy openwork woven planter basket with bottom tassel.",
    longDescription: {
          "overview": "The Openwork Weave Charcoal Jute Macrame Hanger (Art No: BJC-36) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Charcoal Grey & Natural Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-36"
          },
          {
                "key": "Item Name",
                "value": "Openwork Weave Charcoal Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Charcoal Grey & Natural Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-37",
    slug: "tall-cylinder-basket-jute-macrame-hanger-bjc-37",
    code: "BJC-37",
    name: "Tall Cylinder Basket Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_37.png",
    galleryImages: ["/products/bjc_37.png"],
    description: "Deep cylindrical woven pot macrame hanger crafted from heavy-gauge natural jute cords for large indoor foliage and trailing vines.",
    longDescription: {
          "overview": "The Tall Cylinder Basket Jute Macrame Hanger (Art No: BJC-37) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-37"
          },
          {
                "key": "Item Name",
                "value": "Tall Cylinder Basket Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-39",
    slug: "multi-strand-golden-jute-macrame-hanger-bjc-39",
    code: "BJC-39",
    name: "Multi-Strand Golden Jute Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_39.png",
    galleryImages: ["/products/bjc_39.png"],
    description: "Classic multi-strand twisted natural jute macrame plant hanger cradling a golden bowl pot with reinforced hanging loop.",
    longDescription: {
          "overview": "The Multi-Strand Golden Jute Macrame Hanger (Art No: BJC-39) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-39"
          },
          {
                "key": "Item Name",
                "value": "Multi-Strand Golden Jute Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-40",
    slug: "flared-open-cradle-jute-macrame-planter-bjc-40",
    code: "BJC-40",
    name: "Flared Open Cradle Jute Macrame Planter",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_40.png",
    galleryImages: ["/products/bjc_40.png"],
    description: "Wide flared macrame cradle holding a red-rimmed natural jute bowl planter with decorative edge loop appliques.",
    longDescription: {
          "overview": "The Flared Open Cradle Jute Macrame Planter (Art No: BJC-40) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Jute with Red Rim",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-40"
          },
          {
                "key": "Item Name",
                "value": "Flared Open Cradle Jute Macrame Planter"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute with Red Rim"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BJC-41",
    slug: "slender-conical-jute-macrame-plant-hanger-bjc-41",
    code: "BJC-41",
    name: "Slender Conical Jute Macrame Plant Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bjc_41.png",
    galleryImages: ["/products/bjc_41.png"],
    description: "Slender hand-knotted natural jute macrame plant hanger holding a conical natural woven planter basket with fine net webbing.",
    longDescription: {
          "overview": "The Slender Conical Jute Macrame Plant Hanger (Art No: BJC-41) is an artisanal hanging plant hanger handcrafted from 100% Natural Jute. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJC-41"
          },
          {
                "key": "Item Name",
                "value": "Slender Conical Jute Macrame Plant Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },
  {
    id: "BCC-54",
    slug: "denim-blue-seagrass-cotton-macrame-hanger-bcc-54",
    code: "BCC-54",
    name: "Denim Blue Seagrass & Cotton Macrame Hanger",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "macrames",
    image: "/products/bcc_54.png",
    galleryImages: ["/products/bcc_54.png"],
    description: "Contemporary indigo denim blue knotted cotton cord macrame plant hanger holding a fine natural woven mini seagrass planter pot.",
    longDescription: {
          "overview": "The Denim Blue Seagrass & Cotton Macrame Hanger (Art No: BCC-54) is an artisanal hanging plant hanger handcrafted from Natural Seagrass & Dyed Cotton Cord. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.",
          "craftsmanship": "Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.",
          "exportDetails": "Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.",
          "careInstructions": "Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations."
    },
    unit: "S/1",
    cbmPerCarton: 0.035,
    setPerCarton: 24,
    nwPerCtn: 6.2,
    gwPerCtn: 7.5,
    material: "Natural Seagrass & Dyed Cotton Cord",
    color: "Denim Indigo Blue & Natural Seagrass",
    specifications: [
          {
                "key": "Item Code",
                "value": "BCC-54"
          },
          {
                "key": "Item Name",
                "value": "Denim Blue Seagrass & Cotton Macrame Hanger"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Natural Seagrass & Dyed Cotton Cord"
          },
          {
                "key": "Color / Finish",
                "value": "Denim Indigo Blue & Natural Seagrass"
          },
          {
                "key": "Weight Capacity",
                "value": "Up to 10 kg"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly Biodegradable Golden Jute","Authentic Bangladeshi Hand-Knotted Macrame Art","Heavy-Duty Weight Bearing Up to 10kg","Space-Saving Vertical Indoor Botanical Decor"]
  },

  // ==========================================
  // 5. Jute Poufs & Ottomans (Authentic Catalogue Collection - 8 Products)
  // ==========================================
  {
    id: "BJP-01",
    slug: "black-cream-striped-cylindrical-jute-pouf-bjp-01",
    code: "BJP-01",
    name: "Black & Cream Striped Cylindrical Jute Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_01.png",
    galleryImages: ["/products/bjp_01.png"],
    description: "Bold horizontal black and cream striped cylindrical ottoman pouf handwoven from thick braided jute rope with a concentric target ring top.",
    longDescription: {
          "overview": "The Black & Cream Striped Cylindrical Jute Pouf (Art No: BJP-01) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute & Cotton. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute & Cotton",
    color: "Black & Natural Cream Horizontal Stripes",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-01"
          },
          {
                "key": "Item Name",
                "value": "Black & Cream Striped Cylindrical Jute Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute & Cotton"
          },
          {
                "key": "Color / Finish",
                "value": "Black & Natural Cream Horizontal Stripes"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-02",
    slug: "domed-cylinder-natural-jute-pouf-ottoman-bjp-02",
    code: "BJP-02",
    name: "Domed Cylinder Natural Jute Pouf Ottoman",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_02.png",
    galleryImages: ["/products/bjp_02.png"],
    description: "Classic domed cylindrical floor ottoman tightly hand-coiled from golden jute fiber, offering sturdy auxiliary seating and footrest comfort.",
    longDescription: {
          "overview": "The Domed Cylinder Natural Jute Pouf Ottoman (Art No: BJP-02) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-02"
          },
          {
                "key": "Item Name",
                "value": "Domed Cylinder Natural Jute Pouf Ottoman"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-05",
    slug: "square-pyramid-small-capsule-jute-pouf-bjp-05",
    code: "BJP-05",
    name: "Square Pyramid Small Capsule Jute Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_05.png",
    galleryImages: ["/products/bjp_05.png"],
    description: "Compact square pyramidal floor cushion pouf hand-stitched from natural jute braids, ideal for low-seating living spaces and lounge corners.",
    longDescription: {
          "overview": "The Square Pyramid Small Capsule Jute Pouf (Art No: BJP-05) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-05"
          },
          {
                "key": "Item Name",
                "value": "Square Pyramid Small Capsule Jute Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-06",
    slug: "square-pyramid-large-capsule-jute-pouf-bjp-06",
    code: "BJP-06",
    name: "Square Pyramid Large Capsule Jute Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_06.png",
    galleryImages: ["/products/bjp_06.png"],
    description: "Spacious square pyramidal floor ottoman cushion handcrafted with concentric square jute weaves, providing ergonomic floor relaxation.",
    longDescription: {
          "overview": "The Square Pyramid Large Capsule Jute Pouf (Art No: BJP-06) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-06"
          },
          {
                "key": "Item Name",
                "value": "Square Pyramid Large Capsule Jute Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-07",
    slug: "cube-square-structured-jute-ottoman-pouf-bjp-07",
    code: "BJP-07",
    name: "Cube Square Structured Jute Ottoman Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_07.png",
    galleryImages: ["/products/bjp_07.png"],
    description: "Architectural cube ottoman pouf featuring linear textured vertical golden jute braids over a resilient shape-retaining inner core.",
    longDescription: {
          "overview": "The Cube Square Structured Jute Ottoman Pouf (Art No: BJP-07) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-07"
          },
          {
                "key": "Item Name",
                "value": "Cube Square Structured Jute Ottoman Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-08",
    slug: "low-round-drum-jute-cube-pouf-bjp-08",
    code: "BJP-08",
    name: "Low Round Drum Jute Cube Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_08.png",
    galleryImages: ["/products/bjp_08.png"],
    description: "Low-profile wide circular drum floor pouf with smooth side walls and tightly woven top surface, serving as both footrest and coffee table tray stand.",
    longDescription: {
          "overview": "The Low Round Drum Jute Cube Pouf (Art No: BJP-08) is a luxurious artisanal floor seating piece handcrafted from 100% Natural Jute. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-08"
          },
          {
                "key": "Item Name",
                "value": "Low Round Drum Jute Cube Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-09",
    slug: "round-capsule-jute-coir-floor-cushion-bjp-09",
    code: "BJP-09",
    name: "Round Capsule Jute & Coir Floor Cushion",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_09.png",
    galleryImages: ["/products/bjp_09.png"],
    description: "Organic convex round floor capsule cushion stuffed with natural coconut fiber coir and wrapped in soft braided natural unbleached jute.",
    longDescription: {
          "overview": "The Round Capsule Jute & Coir Floor Cushion (Art No: BJP-09) is a luxurious artisanal floor seating piece handcrafted from Natural Jute, Coconut Coir Fibre & Organic Cotton. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "Natural Jute, Coconut Coir Fibre & Organic Cotton",
    color: "Natural Cream Jute & Coir",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-09"
          },
          {
                "key": "Item Name",
                "value": "Round Capsule Jute & Coir Floor Cushion"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Natural Jute, Coconut Coir Fibre & Organic Cotton"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Cream Jute & Coir"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },
  {
    id: "BJP-10",
    slug: "sage-tinted-round-capsule-jute-coir-pouf-bjp-10",
    code: "BJP-10",
    name: "Sage Tinted Round Capsule Jute & Coir Pouf",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "poufs",
    image: "/products/bjp_10.png",
    galleryImages: ["/products/bjp_10.png"],
    description: "Calming sage-tinted round capsule floor ottoman stuffed with breathable eco-friendly coconut coir filling and encased in handwoven jute.",
    longDescription: {
          "overview": "The Sage Tinted Round Capsule Jute & Coir Pouf (Art No: BJP-10) is a luxurious artisanal floor seating piece handcrafted from Natural Jute, Coconut Coir Fibre & Cotton. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.",
          "craftsmanship": "Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.",
          "exportDetails": "Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.",
          "careInstructions": "Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces."
    },
    unit: "S/1",
    cbmPerCarton: 0.095,
    setPerCarton: 2,
    nwPerCtn: 7.8,
    gwPerCtn: 9.5,
    material: "Natural Jute, Coconut Coir Fibre & Cotton",
    color: "Earthy Sage Green & Natural Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJP-10"
          },
          {
                "key": "Item Name",
                "value": "Sage Tinted Round Capsule Jute & Coir Pouf"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Natural Jute, Coconut Coir Fibre & Cotton"
          },
          {
                "key": "Color / Finish",
                "value": "Earthy Sage Green & Natural Jute"
          },
          {
                "key": "Filling Material",
                "value": "High-Density EPS Beads / Coir Fiber Core"
          },
          {
                "key": "MOQ",
                "value": "100 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy-Duty Weight Bearing & Shape Retention","Multi-Functional Seating, Footrest & Coffee Table Ottoman"]
  },

  // ==========================================
  // 4. Jute Placemats (Authentic Catalogue Collection - 10 Products)
  // ==========================================
  {
    id: "BJM-01",
    slug: "handwoven-oval-jute-placemat-bjm-01",
    code: "BJM-01",
    name: "Handwoven Oval Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_01.png",
    galleryImages: ["/products/bjm_01.png", "/products/bjm_01_mkt.jpg"],
    description: "Eco-friendly oval braided natural golden jute dining placemat, providing natural heat insulation and rustic tabletop elegance.",
    longDescription: {
          "overview": "The Handwoven Oval Jute Placemat (Art No: BJM-01) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-01"
          },
          {
                "key": "Item Name",
                "value": "Handwoven Oval Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Golden Jute"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-02",
    slug: "round-jute-placemat-with-mustard-border-bjm-02",
    code: "BJM-02",
    name: "Round Jute Placemat with Mustard Border",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_02.png",
    galleryImages: ["/products/bjm_02.png", "/products/bjm_02_mkt.jpg"],
    description: "Circular coiled jute table charger framed with a sunny mustard golden yellow stitched border accent for modern table settings.",
    longDescription: {
          "overview": "The Round Jute Placemat with Mustard Border (Art No: BJM-02) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Natural Jute & Mustard Yellow Rim",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-02"
          },
          {
                "key": "Item Name",
                "value": "Round Jute Placemat with Mustard Border"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute & Mustard Yellow Rim"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-03",
    slug: "spiral-swirl-washable-jute-placemat-bjm-03",
    code: "BJM-03",
    name: "Spiral Swirl Washable Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_03.png",
    galleryImages: ["/products/bjm_03.png", "/products/bjm_03_mkt.jpg"],
    description: "Dynamic two-tone spiral swirl braided dining mat crafted from natural and moss green dyed jute cords for everyday dining.",
    longDescription: {
          "overview": "The Spiral Swirl Washable Jute Placemat (Art No: BJM-03) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Natural Jute & Moss Green Swirl",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-03"
          },
          {
                "key": "Item Name",
                "value": "Spiral Swirl Washable Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Natural Jute & Moss Green Swirl"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-04",
    slug: "mottled-indigo-green-round-jute-placemat-bjm-04",
    code: "BJM-04",
    name: "Mottled Indigo Green Round Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_04.png",
    galleryImages: ["/products/bjm_04.png", "/products/bjm_04_mkt.jpg"],
    description: "Textured round table charger woven from mottled deep indigo green and natural golden jute fibers with fine braided stitching.",
    longDescription: {
          "overview": "The Mottled Indigo Green Round Jute Placemat (Art No: BJM-04) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Indigo Green & Natural Mottled Weave",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-04"
          },
          {
                "key": "Item Name",
                "value": "Mottled Indigo Green Round Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Indigo Green & Natural Mottled Weave"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-06",
    slug: "denim-blue-flatweave-rectangular-placemat-bjm-06",
    code: "BJM-06",
    name: "Denim Blue Flatweave Rectangular Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_06.png",
    galleryImages: ["/products/bjm_06.png", "/products/bjm_06_mkt.jpg"],
    description: "Handloomed rectangular jute table mat dyed in a handsome slate denim blue shade, perfect for casual dining and hospitality.",
    longDescription: {
          "overview": "The Denim Blue Flatweave Rectangular Placemat (Art No: BJM-06) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Slate Denim Blue",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-06"
          },
          {
                "key": "Item Name",
                "value": "Denim Blue Flatweave Rectangular Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Slate Denim Blue"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-07",
    slug: "classic-elongated-oval-jute-table-mat-bjm-07",
    code: "BJM-07",
    name: "Classic Elongated Oval Jute Table Mat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_07.png",
    galleryImages: ["/products/bjm_07.png", "/products/bjm_07_mkt.jpg"],
    description: "Spacious oval dining placemat woven from smooth unbleached golden jute fiber, offering a protective and organic tabletop shield.",
    longDescription: {
          "overview": "The Classic Elongated Oval Jute Table Mat (Art No: BJM-07) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Unbleached Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-07"
          },
          {
                "key": "Item Name",
                "value": "Classic Elongated Oval Jute Table Mat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Unbleached Natural Golden Jute"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-11",
    slug: "cobalt-white-striped-round-jute-placemat-bjm-11",
    code: "BJM-11",
    name: "Cobalt & White Striped Round Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_11.png",
    galleryImages: ["/products/bjm_11.png", "/products/bjm_11_mkt.jpg"],
    description: "Coastal nautical inspired circular table placemat with high-contrast concentric blue and cream white braided rings.",
    longDescription: {
          "overview": "The Cobalt & White Striped Round Jute Placemat (Art No: BJM-11) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Cobalt Blue & Cream White Stripes",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-11"
          },
          {
                "key": "Item Name",
                "value": "Cobalt & White Striped Round Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Cobalt Blue & Cream White Stripes"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-08",
    slug: "forest-green-braided-round-jute-placemat-bjm-08",
    code: "BJM-08",
    name: "Forest Green Braided Round Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_08.png",
    galleryImages: ["/products/bjm_08.png", "/products/bjm_08_mkt.jpg"],
    description: "Rich forest green and natural tweed-braided round table charger, hand-stitched for superior durability and heat resistance.",
    longDescription: {
          "overview": "The Forest Green Braided Round Jute Placemat (Art No: BJM-08) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Forest Green & Natural Tweed",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-08"
          },
          {
                "key": "Item Name",
                "value": "Forest Green Braided Round Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Forest Green & Natural Tweed"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "DJM-21",
    slug: "berry-wine-spiral-coiled-jute-placemat-djm-21",
    code: "DJM-21",
    name: "Berry Wine Spiral Coiled Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/djm_21.png",
    galleryImages: ["/products/djm_21.png", "/products/djm_21_mkt.jpg"],
    description: "Chic circular dining placemat featuring concentric coils in berry wine plum and natural cream jute cords.",
    longDescription: {
          "overview": "The Berry Wine Spiral Coiled Jute Placemat (Art No: DJM-21) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Berry Wine Plum & Natural Cream",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJM-21"
          },
          {
                "key": "Item Name",
                "value": "Berry Wine Spiral Coiled Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Berry Wine Plum & Natural Cream"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },
  {
    id: "BJM-22",
    slug: "espresso-dark-brown-round-jute-placemat-bjm-22",
    code: "BJM-22",
    name: "Espresso Dark Brown Round Jute Placemat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "placemats",
    image: "/products/bjm_22.png",
    galleryImages: ["/products/bjm_22.png", "/products/bjm_22_mkt.jpg"],
    description: "Sophisticated monochrome dark espresso brown dyed round jute dining charger with clean spiral concentric weave.",
    longDescription: {
          "overview": "The Espresso Dark Brown Round Jute Placemat (Art No: BJM-22) is artisanal tableware handcrafted from 100% Natural Jute. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.",
          "exportDetails": "Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.",
          "careInstructions": "Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water."
    },
    unit: "S/4",
    cbmPerCarton: 0.038,
    setPerCarton: 24,
    nwPerCtn: 7.5,
    gwPerCtn: 8.8,
    material: "100% Natural Jute",
    color: "Deep Espresso Dark Brown",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-22"
          },
          {
                "key": "Item Name",
                "value": "Espresso Dark Brown Round Jute Placemat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/4"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Finish",
                "value": "Deep Espresso Dark Brown"
          },
          {
                "key": "Heat Resistance",
                "value": "Up to 100°C"
          },
          {
                "key": "MOQ",
                "value": "500 Sets"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Eco-Friendly & Biodegradable Jute","Authentic Bangladeshi Hand-Braided Weave","Natural Heat-Resistant Surface Protection","Stain-Resistant Easy Wipe-Clean Maintenance"]
  },

  // ==========================================
  // 3. Jute Floor Mats (Authentic Catalogue Collection - 7 Products)
  // ==========================================
  {
    id: "BJM-10",
    slug: "natural-unbleached-round-jute-area-mat-bjm-10",
    code: "BJM-10",
    name: "Natural Unbleached Round Jute Area Mat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_10_new.jpg",
    galleryImages: ["/products/bjm_10_new.jpg"],
    description: "Minimalist round jute area mat featuring tight continuous coil stitching, offering high durability and organic texture underfoot.",
    longDescription: {
          "overview": "The Natural Unbleached Round Jute Area Mat (Art No: BJM-10) is expertly handcrafted from 100% Natural Jute. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute",
    color: "Unbleached Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-10"
          },
          {
                "key": "Item Name",
                "value": "Natural Unbleached Round Jute Area Mat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Unbleached Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-12",
    slug: "classic-flatweave-rectangular-jute-rug-bjm-12",
    code: "BJM-12",
    name: "Classic Flatweave Rectangular Jute Rug",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_12_new.jpg",
    galleryImages: ["/products/bjm_12_new.jpg"],
    description: "Handloom flatwoven rectangular jute rug and hallway runner with clean selvedge edges, reversible for long-lasting performance.",
    longDescription: {
          "overview": "The Classic Flatweave Rectangular Jute Rug (Art No: BJM-12) is expertly handcrafted from 100% Natural Jute. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute",
    color: "Natural Jute Oatmeal Tone",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-12"
          },
          {
                "key": "Item Name",
                "value": "Classic Flatweave Rectangular Jute Rug"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute Oatmeal Tone"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-13",
    slug: "rectangular-jute-doormat-with-black-border-bjm-13",
    code: "BJM-13",
    name: "Rectangular Jute Doormat with Black Border",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_13_new.jpg",
    galleryImages: ["/products/bjm_13_new.jpg"],
    description: "Heavy-duty rectangular ribbed jute entrance doormat framed with a crisp contrast black fabric border for modern entryways.",
    longDescription: {
          "overview": "The Rectangular Jute Doormat with Black Border (Art No: BJM-13) is expertly handcrafted from 100% Natural Jute & Cotton Canvas Border. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute & Cotton Canvas Border",
    color: "Natural Tan with Black Fabric Border",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-13"
          },
          {
                "key": "Item Name",
                "value": "Rectangular Jute Doormat with Black Border"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute & Cotton Canvas Border"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Tan with Black Fabric Border"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-26",
    slug: "half-moon-semicircle-braided-jute-doormat-bjm-26",
    code: "BJM-26",
    name: "Half-Moon Semicircle Braided Jute Doormat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_26_new.jpg",
    galleryImages: ["/products/bjm_26_new.jpg"],
    description: "Artisanal half-circle semicircular braided jute welcome doormat, designed specifically for doorways, patios, and bedside accents.",
    longDescription: {
          "overview": "The Half-Moon Semicircle Braided Jute Doormat (Art No: BJM-26) is expertly handcrafted from 100% Natural Jute. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-26"
          },
          {
                "key": "Item Name",
                "value": "Half-Moon Semicircle Braided Jute Doormat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-27",
    slug: "concentric-ring-mottled-jute-door-mat-bjm-27",
    code: "BJM-27",
    name: "Concentric Ring Mottled Jute Door Mat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_27_new.jpg",
    galleryImages: ["/products/bjm_27_new.jpg"],
    description: "Decorative circular entrance mat woven with concentric rings of natural and slate charcoal dyed fibers for a textured ripple effect.",
    longDescription: {
          "overview": "The Concentric Ring Mottled Jute Door Mat (Art No: BJM-27) is expertly handcrafted from 100% Natural Jute & Dyed Cotton Thread. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute & Dyed Cotton Thread",
    color: "Natural Jute & Charcoal Mottled Rings",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-27"
          },
          {
                "key": "Item Name",
                "value": "Concentric Ring Mottled Jute Door Mat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute & Dyed Cotton Thread"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute & Charcoal Mottled Rings"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-31",
    slug: "openwork-lattice-ring-jute-mandala-mat-bjm-31",
    code: "BJM-31",
    name: "Openwork Lattice Ring Jute Mandala Mat",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_31_new.jpg",
    galleryImages: ["/products/bjm_31_new.jpg"],
    description: "Intricate round decorative floor rug handcrafted with a central coiled disc surrounded by an airy criss-cross openwork lattice border.",
    longDescription: {
          "overview": "The Openwork Lattice Ring Jute Mandala Mat (Art No: BJM-31) is expertly handcrafted from 100% Natural Jute. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-31"
          },
          {
                "key": "Item Name",
                "value": "Openwork Lattice Ring Jute Mandala Mat"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },
  {
    id: "BJM-32",
    slug: "scalloped-petal-openwork-jute-floor-rug-bjm-32",
    code: "BJM-32",
    name: "Scalloped Petal Openwork Jute Floor Rug",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "floor-mats",
    image: "/products/bjm_32_new.jpg",
    galleryImages: ["/products/bjm_32_new.jpg"],
    description: "Boho-chic handcrafted round jute rug featuring concentric wheel openwork loops and an ornate scalloped petal fringe outer perimeter.",
    longDescription: {
          "overview": "The Scalloped Petal Openwork Jute Floor Rug (Art No: BJM-32) is expertly handcrafted from 100% Natural Jute. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.",
          "craftsmanship": "Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.",
          "exportDetails": "Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.",
          "careInstructions": "Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade."
    },
    unit: "S/1",
    cbmPerCarton: 0.052,
    setPerCarton: 12,
    nwPerCtn: 9.2,
    gwPerCtn: 10.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJM-32"
          },
          {
                "key": "Item Name",
                "value": "Scalloped Petal Openwork Jute Floor Rug"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "300 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Natural Biodegradable Golden Jute","Authentic Bangladeshi Hand-Braided Craftsmanship","Durable Reversible Heavy-Duty Construction","Natural Sound Dampening & Eco Living Aesthetic"]
  },

  // ==========================================
  // 2. Jute Bags (Authentic Catalogue Collection - 28 Products)
  // ==========================================
  {
    id: "BJB-68",
    slug: "checkered-woven-jute-shopping-bag-bjb-68",
    code: "BJB-68",
    name: "Checkered Woven Jute Shopping Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_68_new.jpg",
    galleryImages: ["/products/bjb_68_new.jpg", "/products/bjb_68_lifestyle.jpg"],
    description: "Artisanal handwoven jute shopping tote featuring a stylish two-tone diamond checkered weave with reinforced top handles.",
    longDescription: {
          "overview": "The Checkered Woven Jute Shopping Bag (Art No: BJB-68) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Jute & Bleached Cream Diamond Weave",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-68"
          },
          {
                "key": "Item Name",
                "value": "Checkered Woven Jute Shopping Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute & Bleached Cream Diamond Weave"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-69",
    slug: "conical-jute-fabric-beach-bag-bjb-69",
    code: "BJB-69",
    name: "Conical Jute & Fabric Beach Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_69_new.jpg",
    galleryImages: ["/products/bjb_69_new.jpg"],
    description: "Wide flared conical beach bag crafted from woven golden jute with red-trimmed supportive vertical carry straps.",
    longDescription: {
          "overview": "The Conical Jute & Fabric Beach Bag (Art No: BJB-69) is masterfully handcrafted from Jute & Fabric. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "Jute & Fabric",
    color: "Natural Jute with Red Edge Trimming",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-69"
          },
          {
                "key": "Item Name",
                "value": "Conical Jute & Fabric Beach Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Jute & Fabric"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute with Red Edge Trimming"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-66",
    slug: "dusty-rose-braided-jute-bucket-bag-bjb-66",
    code: "BJB-66",
    name: "Dusty Rose Braided Jute Bucket Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_66_new.jpg",
    galleryImages: ["/products/bjb_66_new.jpg", "/products/bjb_66_lifestyle.jpg"],
    description: "Charming dusty rose dyed coiled jute bucket bag with sturdy upright handle and artisanal woven loop detail.",
    longDescription: {
          "overview": "The Dusty Rose Braided Jute Bucket Bag (Art No: BJB-66) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Dusty Rose / Coral Pink",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-66"
          },
          {
                "key": "Item Name",
                "value": "Dusty Rose Braided Jute Bucket Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Dusty Rose / Coral Pink"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-67",
    slug: "round-jute-gift-bag-with-tassel-bjb-67",
    code: "BJB-67",
    name: "Round Jute Gift Bag with Tassel",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_67_new.jpg",
    galleryImages: ["/products/bjb_67_new.jpg"],
    description: "Circular handwoven natural golden jute handbag featuring long comfortable shoulder straps and decorative vibrant tassels.",
    longDescription: {
          "overview": "The Round Jute Gift Bag with Tassel (Art No: BJB-67) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute with Coral Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-67"
          },
          {
                "key": "Item Name",
                "value": "Round Jute Gift Bag with Tassel"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute with Coral Tassels"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-07",
    slug: "wholesale-jute-utility-bowls-set-of-3--bjb-07",
    code: "BJB-07",
    name: "Wholesale Jute Utility Bowls (Set of 3)",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_07_new.jpg",
    galleryImages: ["/products/bjb_07_new.jpg", "/products/bjb_07_lifestyle.jpg"],
    description: "Versatile nesting trio of shallow round charcoal grey jute tote baskets with integrated side carrying handles.",
    longDescription: {
          "overview": "The Wholesale Jute Utility Bowls (Set of 3) (Art No: BJB-07) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.045,
    setPerCarton: 6,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Charcoal Grey with Natural Stripe Accent",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-07"
          },
          {
                "key": "Item Name",
                "value": "Wholesale Jute Utility Bowls (Set of 3)"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Charcoal Grey with Natural Stripe Accent"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-70",
    slug: "nautical-striped-jute-rope-boat-bag-bjb-70",
    code: "BJB-70",
    name: "Nautical Striped Jute Rope Boat Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_70_new.jpg",
    galleryImages: ["/products/bjb_70_new.jpg", "/products/bjb_70_gallery_1.jpg", "/products/bjb_70_gallery_2.jpg"],
    description: "Wide boat tote constructed from thick coiled jute rope with horizontal navy blue and cream stripes and double handles.",
    longDescription: {
          "overview": "The Nautical Striped Jute Rope Boat Bag (Art No: BJB-70) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Navy Blue & Natural Cream Stripe",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-70"
          },
          {
                "key": "Item Name",
                "value": "Nautical Striped Jute Rope Boat Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Navy Blue & Natural Cream Stripe"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-26",
    slug: "unbleached-natural-jute-backpack-tote-bjb-26",
    code: "BJB-26",
    name: "Unbleached Natural Jute Backpack Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_26_new.jpg",
    galleryImages: ["/products/bjb_26_new.jpg", "/products/bjb_26_lifestyle.jpg"],
    description: "Minimalist sustainable unbleached jute backpack with comfortable wide shoulder straps and relaxed drawstring top.",
    longDescription: {
          "overview": "The Unbleached Natural Jute Backpack Tote (Art No: BJB-26) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Cream Unbleached Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-26"
          },
          {
                "key": "Item Name",
                "value": "Unbleached Natural Jute Backpack Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Cream Unbleached Jute"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-55",
    slug: "two-tone-coiled-rope-jute-boat-tote-bjb-55",
    code: "BJB-55",
    name: "Two-Tone Coiled Rope Jute Boat Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_55_new.jpg",
    galleryImages: ["/products/bjb_55_new.jpg"],
    description: "Elegant wide-mouth boat tote bag crafted from horizontal coiled jute rope with cream upper half and natural tan lower body.",
    longDescription: {
          "overview": "The Two-Tone Coiled Rope Jute Boat Tote (Art No: BJB-55) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Cream White & Natural Tan Gradient",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-55"
          },
          {
                "key": "Item Name",
                "value": "Two-Tone Coiled Rope Jute Boat Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Cream White & Natural Tan Gradient"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-56",
    slug: "handcrafted-golden-jute-classic-tote-bjb-56",
    code: "BJB-56",
    name: "Handcrafted Golden Jute Classic Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_56_new.jpg",
    galleryImages: ["/products/bjb_56_new.jpg", "/products/bjb_56_lifestyle.jpg"],
    description: "Structured square shopping tote made from tightly woven natural golden jute fiber with sturdy integrated shoulder straps.",
    longDescription: {
          "overview": "The Handcrafted Golden Jute Classic Tote (Art No: BJB-56) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-56"
          },
          {
                "key": "Item Name",
                "value": "Handcrafted Golden Jute Classic Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-57",
    slug: "mandala-print-laminated-jute-tote-bjb-57",
    code: "BJB-57",
    name: "Mandala Print Laminated Jute Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_57_new.jpg",
    galleryImages: ["/products/bjb_57_new.jpg"],
    description: "Spacious laminated water-resistant natural jute tote bag decorated with an intricate teal blue artisanal mandala screen print.",
    longDescription: {
          "overview": "The Mandala Print Laminated Jute Tote (Art No: BJB-57) is masterfully handcrafted from 100% Laminated Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Laminated Jute",
    color: "Natural Jute with Teal Blue Mandala",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-57"
          },
          {
                "key": "Item Name",
                "value": "Mandala Print Laminated Jute Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Laminated Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute with Teal Blue Mandala"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-58",
    slug: "color-dipped-jute-basket-bag-with-tassels-bjb-58",
    code: "BJB-58",
    name: "Color-Dipped Jute Basket Bag with Tassels",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_58_new.jpg",
    galleryImages: ["/products/bjb_58_new.jpg", "/products/bjb_58_lifestyle.jpg"],
    description: "Conical flared natural jute basket bag featuring a sunny yellow dipped base and handcrafted pink and orange tassel ornaments.",
    longDescription: {
          "overview": "The Color-Dipped Jute Basket Bag with Tassels (Art No: BJB-58) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Jute, Sun Yellow Base & Pink Tassels",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-58"
          },
          {
                "key": "Item Name",
                "value": "Color-Dipped Jute Basket Bag with Tassels"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Jute, Sun Yellow Base & Pink Tassels"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-59",
    slug: "nautical-slub-striped-flared-jute-bag-bjb-59",
    code: "BJB-59",
    name: "Nautical Slub Striped Flared Jute Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_59_new.jpg",
    galleryImages: ["/products/bjb_59_new.jpg", "/products/bjb_59_hd.jpg"],
    description: "Chic flared market bag with horizontal denim blue and white slub stripes and seamless circular woven carry cutout.",
    longDescription: {
          "overview": "The Nautical Slub Striped Flared Jute Bag (Art No: BJB-59) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Denim Blue & Off-White Stripe",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-59"
          },
          {
                "key": "Item Name",
                "value": "Nautical Slub Striped Flared Jute Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Denim Blue & Off-White Stripe"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-60",
    slug: "striped-jute-oval-bag-with-leather-handles-bjb-60",
    code: "BJB-60",
    name: "Striped Jute Oval Bag with Leather Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_60_new.jpg",
    galleryImages: ["/products/bjb_60_new.jpg", "/products/bjb_60_hd.jpg"],
    description: "Sophisticated oval flared natural jute bag with crisp horizontal black stripes and premium riveted genuine leather handles.",
    longDescription: {
          "overview": "The Striped Jute Oval Bag with Leather Handles (Art No: BJB-60) is masterfully handcrafted from 100% Natural Jute, Genuine Leather. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute, Genuine Leather",
    color: "Natural Cream with Black Stripes & Brown Leather",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-60"
          },
          {
                "key": "Item Name",
                "value": "Striped Jute Oval Bag with Leather Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute, Genuine Leather"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Cream with Black Stripes & Brown Leather"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-61",
    slug: "tri-tone-sun-ocean-jute-flared-bag-bjb-61",
    code: "BJB-61",
    name: "Tri-Tone Sun & Ocean Jute Flared Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_61_new.jpg",
    galleryImages: ["/products/bjb_61_new.jpg", "/products/bjb_61_hd.jpg"],
    description: "Vibrant tri-color flared tote bag with natural tan upper tier, vivid saffron yellow middle band, and royal blue base.",
    longDescription: {
          "overview": "The Tri-Tone Sun & Ocean Jute Flared Bag (Art No: BJB-61) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Natural Tan, Saffron Yellow & Royal Blue",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-61"
          },
          {
                "key": "Item Name",
                "value": "Tri-Tone Sun & Ocean Jute Flared Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Tan, Saffron Yellow & Royal Blue"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-62",
    slug: "charcoal-m-lange-striped-woven-jute-tote-bjb-62",
    code: "BJB-62",
    name: "Charcoal Mélange Striped Woven Jute Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_62_new.jpg",
    galleryImages: ["/products/bjb_62_new.jpg", "/products/bjb_62_hd.jpg"],
    description: "Textured flared shopper bag in charcoal grey and natural mélange pinstripe weave with soft double rope shoulder straps.",
    longDescription: {
          "overview": "The Charcoal Mélange Striped Woven Jute Tote (Art No: BJB-62) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Charcoal Grey & Natural Mélange",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-62"
          },
          {
                "key": "Item Name",
                "value": "Charcoal Mélange Striped Woven Jute Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Charcoal Grey & Natural Mélange"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-63",
    slug: "colorblock-cream-charcoal-jute-tote-bjb-63",
    code: "BJB-63",
    name: "Colorblock Cream & Charcoal Jute Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_63_new.jpg",
    galleryImages: ["/products/bjb_63_new.jpg", "/products/bjb_63_hd.jpg"],
    description: "Modern flared shopper tote with clean cream upper body, charcoal heather base, and elongated upright tubular handles.",
    longDescription: {
          "overview": "The Colorblock Cream & Charcoal Jute Tote (Art No: BJB-63) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Cream Top & Charcoal Grey Bottom",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-63"
          },
          {
                "key": "Item Name",
                "value": "Colorblock Cream & Charcoal Jute Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Cream Top & Charcoal Grey Bottom"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-64",
    slug: "lilac-lemon-striped-jute-ladies-bag-bjb-64",
    code: "BJB-64",
    name: "Lilac & Lemon Striped Jute Ladies Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_64_new.jpg",
    galleryImages: ["/products/bjb_64_new.jpg", "/products/bjb_64_hd.jpg"],
    description: "Feminine flared market tote featuring a dusty lilac mauve top section and cheerful lemon yellow and white striped body.",
    longDescription: {
          "overview": "The Lilac & Lemon Striped Jute Ladies Bag (Art No: BJB-64) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Lilac Mauve, Lemon Yellow & White",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-64"
          },
          {
                "key": "Item Name",
                "value": "Lilac & Lemon Striped Jute Ladies Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Lilac Mauve, Lemon Yellow & White"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-65",
    slug: "golden-jute-oval-basket-bag-with-leather-straps-bjb-65",
    code: "BJB-65",
    name: "Golden Jute Oval Basket Bag with Leather Straps",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_65_new.jpg",
    galleryImages: ["/products/bjb_65_new.jpg", "/products/bjb_65_hd.jpg"],
    description: "Handcrafted flared boat basket bag woven from coarse golden jute, finished with hand-stitched tan leather carry straps.",
    longDescription: {
          "overview": "The Golden Jute Oval Basket Bag with Leather Straps (Art No: BJB-65) is masterfully handcrafted from 100% Natural Jute, Genuine Leather. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute, Genuine Leather",
    color: "Natural Golden Jute with Tan Leather",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-65"
          },
          {
                "key": "Item Name",
                "value": "Golden Jute Oval Basket Bag with Leather Straps"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute, Genuine Leather"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Golden Jute with Tan Leather"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-17",
    slug: "structured-midnight-black-jute-tote-bjb-17",
    code: "BJB-17",
    name: "Structured Midnight Black Jute Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_17_new.jpg",
    galleryImages: ["/products/bjb_17_new.jpg", "/products/bjb_17_hd.jpg"],
    description: "Sleek structured rectangular tote bag crafted from deep black dyed golden jute fiber with reinforced double handles.",
    longDescription: {
          "overview": "The Structured Midnight Black Jute Tote (Art No: BJB-17) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Midnight Jet Black",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-17"
          },
          {
                "key": "Item Name",
                "value": "Structured Midnight Black Jute Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Midnight Jet Black"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-05",
    slug: "indigo-striped-jute-cotton-market-bag-bjb-05",
    code: "BJB-05",
    name: "Indigo Striped Jute-Cotton Market Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_05_new.jpg",
    galleryImages: ["/products/bjb_05_new.jpg", "/products/bjb_05_hd.jpg"],
    description: "Classic market tote bag featuring vertical indigo navy and white pinstripes with natural unbleached jute support handles.",
    longDescription: {
          "overview": "The Indigo Striped Jute-Cotton Market Bag (Art No: BJB-05) is masterfully handcrafted from Jute & Cotton Blend. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "Jute & Cotton Blend",
    color: "Indigo Navy & White Vertical Stripe",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-05"
          },
          {
                "key": "Item Name",
                "value": "Indigo Striped Jute-Cotton Market Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Jute & Cotton Blend"
          },
          {
                "key": "Color / Weave",
                "value": "Indigo Navy & White Vertical Stripe"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-06",
    slug: "eco-textured-jute-jhuta-blend-shopper-bjb-06",
    code: "BJB-06",
    name: "Eco-Textured Jute-Jhuta Blend Shopper",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_06_new.jpg",
    galleryImages: ["/products/bjb_06_new.jpg", "/products/bjb_06_hd.jpg"],
    description: "Sustainable textured eco-bag woven from upcycled cotton-jhuta and natural golden jute with vertical webbing strap handles.",
    longDescription: {
          "overview": "The Eco-Textured Jute-Jhuta Blend Shopper (Art No: BJB-06) is masterfully handcrafted from 60% Jute, 35% Jhuta Recycled Fiber, 5% Cotton. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "60% Jute, 35% Jhuta Recycled Fiber, 5% Cotton",
    color: "Natural Oatmeal Tweed / Earthy Beige",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-06"
          },
          {
                "key": "Item Name",
                "value": "Eco-Textured Jute-Jhuta Blend Shopper"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "60% Jute, 35% Jhuta Recycled Fiber, 5% Cotton"
          },
          {
                "key": "Color / Weave",
                "value": "Natural Oatmeal Tweed / Earthy Beige"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-15",
    slug: "candy-cane-red-striped-coiled-jute-bag-bjb-15",
    code: "BJB-15",
    name: "Candy Cane Red Striped Coiled Jute Bag",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_15_new.jpg",
    galleryImages: ["/products/bjb_15_new.jpg", "/products/bjb_15_hd.jpg"],
    description: "Chic cylindrical bucket bag crafted from off-white coiled rope featuring vibrant scarlet red vertical stripes and red handles.",
    longDescription: {
          "overview": "The Candy Cane Red Striped Coiled Jute Bag (Art No: BJB-15) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Off-White with Scarlet Red Vertical Stripes",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-15"
          },
          {
                "key": "Item Name",
                "value": "Candy Cane Red Striped Coiled Jute Bag"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Off-White with Scarlet Red Vertical Stripes"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-16",
    slug: "classic-monochrome-striped-jute-tote-bjb-16",
    code: "BJB-16",
    name: "Classic Monochrome Striped Jute Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_16_new.jpg",
    galleryImages: ["/products/bjb_16_new.jpg", "/products/bjb_16_hd.jpg"],
    description: "Timeless horizontal striped tote bag in alternating black and cream white jute bands with sleek black rope shoulder straps.",
    longDescription: {
          "overview": "The Classic Monochrome Striped Jute Tote (Art No: BJB-16) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Black & Cream Monochrome Stripe",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-16"
          },
          {
                "key": "Item Name",
                "value": "Classic Monochrome Striped Jute Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Black & Cream Monochrome Stripe"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },
  {
    id: "BJB-25",
    slug: "wide-natural-golden-jute-basket-tote-bjb-25",
    code: "BJB-25",
    name: "Wide Natural Golden Jute Basket Tote",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "bags",
    image: "/products/bjb_25_new.jpg",
    galleryImages: ["/products/bjb_25_new.jpg", "/products/bjb_25_hd.jpg"],
    description: "Expansive boat-style woven market basket bag crafted from 100% untreated golden jute with thick vertical support handles.",
    longDescription: {
          "overview": "The Wide Natural Golden Jute Basket Tote (Art No: BJB-25) is masterfully handcrafted from 100% Natural Jute. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.045,
    setPerCarton: 24,
    nwPerCtn: 6.5,
    gwPerCtn: 7.8,
    material: "100% Natural Jute",
    color: "Pure Natural Golden Jute",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-25"
          },
          {
                "key": "Item Name",
                "value": "Wide Natural Golden Jute Basket Tote"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
          },
          {
                "key": "Color / Weave",
                "value": "Pure Natural Golden Jute"
          },
          {
                "key": "MOQ",
                "value": "500 Pieces"
          },
          {
                "key": "Country of Origin",
                "value": "Bangladesh"
          }
    ],
    features: ["100% Biodegradable & Eco-Friendly Jute","Authentic Bangladeshi Handcrafted Heritage","Heavy Duty Export Quality & Reinforced Stitches","Reusable Sustainable Lifestyle Fashion"]
  },

  // ==========================================
  // 1. Jute Baskets (Authentic Catalogue Collection - 42 Products)
  // ==========================================
  {
    id: "DJB-01",
    slug: "storage-jute-basket-set-of-3--djb-01",
    code: "DJB-01",
    name: "Storage Jute Basket (Set of 3)",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_01_hd.jpg",
    galleryImages: ["/products/djb_01_hd.jpg","/products/djb_01.png"],
    description: "Handwoven shallow round storage jute baskets with red stitched accents.",
    longDescription: {
          "overview": "The Storage Jute Basket (Set of 3) (Art No: DJB-01) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-01"
          },
          {
                "key": "Item Name",
                "value": "Storage Jute Basket (Set of 3)"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-05",
    slug: "jute-fruit-basket-set-of-3--djb-05",
    code: "DJB-05",
    name: "Jute Fruit Basket (Set of 3)",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_05_hd.jpg",
    galleryImages: ["/products/djb_05_hd.jpg","/products/djb_05.png"],
    description: "Teal green dyed coiled jute tabletop fruit baskets with side loop handles.",
    longDescription: {
          "overview": "The Jute Fruit Basket (Set of 3) (Art No: DJB-05) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-05"
          },
          {
                "key": "Item Name",
                "value": "Jute Fruit Basket (Set of 3)"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-25",
    slug: "jute-fruit-basket-with-rings-djb-25",
    code: "DJB-25",
    name: "Jute Fruit Basket with Rings",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_25_hd.jpg",
    galleryImages: ["/products/djb_25_hd.jpg","/products/djb_25.png"],
    description: "Mustard yellow handwoven jute fruit bowl with concentric ring appliques.",
    longDescription: {
          "overview": "The Jute Fruit Basket with Rings (Art No: DJB-25) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-25"
          },
          {
                "key": "Item Name",
                "value": "Jute Fruit Basket with Rings"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-03",
    slug: "jute-round-basket-with-black-rim-djb-03",
    code: "DJB-03",
    name: "Jute Round Basket with Black Rim",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_03_hd.jpg",
    galleryImages: ["/products/djb_03_hd.jpg","/products/djb_03.png"],
    description: "Natural golden jute round organizer baskets with contrasting black stitched top rim.",
    longDescription: {
          "overview": "The Jute Round Basket with Black Rim (Art No: DJB-03) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-03"
          },
          {
                "key": "Item Name",
                "value": "Jute Round Basket with Black Rim"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-11",
    slug: "jute-round-cylinder-bins-djb-11",
    code: "DJB-11",
    name: "Jute Round Cylinder Bins",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_11_hd.jpg",
    galleryImages: ["/products/djb_11_hd.jpg","/products/djb_11.png"],
    description: "Deep black body cylindrical storage baskets with natural jute folded top rim.",
    longDescription: {
          "overview": "The Jute Round Cylinder Bins (Art No: DJB-11) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-11"
          },
          {
                "key": "Item Name",
                "value": "Jute Round Cylinder Bins"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-13",
    slug: "lidded-jute-storage-canisters-djb-13",
    code: "DJB-13",
    name: "Lidded Jute Storage Canisters",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_13_hd.jpg",
    galleryImages: ["/products/djb_13_hd.jpg","/products/djb_13.png"],
    description: "Tri-tone natural and cream cylindrical baskets with fitted lids and top knobs.",
    longDescription: {
          "overview": "The Lidded Jute Storage Canisters (Art No: DJB-13) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-13"
          },
          {
                "key": "Item Name",
                "value": "Lidded Jute Storage Canisters"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-28",
    slug: "two-tone-jute-round-cylinder-planters-djb-28",
    code: "DJB-28",
    name: "Two-Tone Jute Round Cylinder Planters",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_28_hd.jpg",
    galleryImages: ["/products/djb_28_hd.jpg","/products/djb_28.png"],
    description: "Grey and white dipped cylindrical jute planter baskets with clean modern aesthetic.",
    longDescription: {
          "overview": "The Two-Tone Jute Round Cylinder Planters (Art No: DJB-28) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-28"
          },
          {
                "key": "Item Name",
                "value": "Two-Tone Jute Round Cylinder Planters"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-34",
    slug: "jute-mini-baskets-with-handles-djb-34",
    code: "DJB-34",
    name: "Jute Mini Baskets with Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_34_hd.jpg",
    galleryImages: ["/products/djb_34_hd.jpg","/products/djb_34.png"],
    description: "Charcoal black braided mini storage bowls with integrated side loop handles.",
    longDescription: {
          "overview": "The Jute Mini Baskets with Handles (Art No: DJB-34) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-34"
          },
          {
                "key": "Item Name",
                "value": "Jute Mini Baskets with Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-35",
    slug: "cream-jute-cylinder-with-curved-handles-djb-35",
    code: "DJB-35",
    name: "Cream Jute Cylinder with Curved Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_35_hd.jpg",
    galleryImages: ["/products/djb_35_hd.jpg","/products/djb_35.png"],
    description: "Unbleached natural cream jute storage cylinder with curved side handles.",
    longDescription: {
          "overview": "The Cream Jute Cylinder with Curved Handles (Art No: DJB-35) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-35"
          },
          {
                "key": "Item Name",
                "value": "Cream Jute Cylinder with Curved Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-38",
    slug: "forest-green-stripe-cylinder-with-leather-handles-djb-38",
    code: "DJB-38",
    name: "Forest Green Stripe Cylinder with Leather Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_38_hd.jpg",
    galleryImages: ["/products/djb_38_hd.jpg","/products/djb_38.png"],
    description: "Forest green coiled storage buckets with genuine leather loop handles.",
    longDescription: {
          "overview": "The Forest Green Stripe Cylinder with Leather Handles (Art No: DJB-38) is masterfully handcrafted from 100% Natural Jute, Leather. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute, Leather",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-38"
          },
          {
                "key": "Item Name",
                "value": "Forest Green Stripe Cylinder with Leather Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute, Leather"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-40",
    slug: "jute-round-conical-baskets-with-tassels-djb-40",
    code: "DJB-40",
    name: "Jute Round Conical Baskets with Tassels",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_40_hd.jpg",
    galleryImages: ["/products/djb_40_hd.jpg","/products/djb_40.png"],
    description: "Dusty mauve rose conical taper bowls with decorative side tassels.",
    longDescription: {
          "overview": "The Jute Round Conical Baskets with Tassels (Art No: DJB-40) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-40"
          },
          {
                "key": "Item Name",
                "value": "Jute Round Conical Baskets with Tassels"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-41",
    slug: "jute-round-cylinder-with-long-handles-djb-41",
    code: "DJB-41",
    name: "Jute Round Cylinder with Long Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_41_hd.jpg",
    galleryImages: ["/products/djb_41_hd.jpg","/products/djb_41.png"],
    description: "Tall two-tone natural and white laundry baskets with long upright handles.",
    longDescription: {
          "overview": "The Jute Round Cylinder with Long Handles (Art No: DJB-41) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-41"
          },
          {
                "key": "Item Name",
                "value": "Jute Round Cylinder with Long Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-49",
    slug: "mustard-jute-fruit-cup-cylinder-djb-49",
    code: "DJB-49",
    name: "Mustard Jute Fruit Cup Cylinder",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_49_hd.jpg",
    galleryImages: ["/products/djb_49_hd.jpg","/products/djb_49.png"],
    description: "Mustard yellow cylinder organizer buckets with brown leather carry handles.",
    longDescription: {
          "overview": "The Mustard Jute Fruit Cup Cylinder (Art No: DJB-49) is masterfully handcrafted from 100% Natural Jute, Faux Leather. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute, Faux Leather",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-49"
          },
          {
                "key": "Item Name",
                "value": "Mustard Jute Fruit Cup Cylinder"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute, Faux Leather"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-50",
    slug: "colorblock-jute-cylinder-with-handles-djb-50",
    code: "DJB-50",
    name: "Colorblock Jute Cylinder with Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_50.png",
    galleryImages: ["/products/djb_50.png"],
    description: "Tri-color navy blue, mustard yellow, and grey cylinder storage bins with handles.",
    longDescription: {
          "overview": "The Colorblock Jute Cylinder with Handles (Art No: DJB-50) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-50"
          },
          {
                "key": "Item Name",
                "value": "Colorblock Jute Cylinder with Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-65",
    slug: "jute-small-stripe-basket-trays-djb-65",
    code: "DJB-65",
    name: "Jute Small Stripe Basket Trays",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_65.png",
    galleryImages: ["/products/djb_65.png"],
    description: "Low-profile round natural jute organizer trays with golden yellow center stripe.",
    longDescription: {
          "overview": "The Jute Small Stripe Basket Trays (Art No: DJB-65) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-65"
          },
          {
                "key": "Item Name",
                "value": "Jute Small Stripe Basket Trays"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-14",
    slug: "jute-tiffin-box-with-lid-djb-14",
    code: "DJB-14",
    name: "Jute Tiffin Box with Lid",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_14.png",
    galleryImages: ["/products/djb_14.png"],
    description: "Mustard yellow round canister storage boxes with matching fitted domed lids.",
    longDescription: {
          "overview": "The Jute Tiffin Box with Lid (Art No: DJB-14) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-14"
          },
          {
                "key": "Item Name",
                "value": "Jute Tiffin Box with Lid"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BDF-44",
    slug: "oval-bread-basket-with-blue-center-bdf-44",
    code: "BDF-44",
    name: "Oval Bread Basket with Blue Center",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bdf_44.png",
    galleryImages: ["/products/bdf_44.png"],
    description: "Oval natural jute serving bread tray with bright sky blue woven base.",
    longDescription: {
          "overview": "The Oval Bread Basket with Blue Center (Art No: BDF-44) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BDF-44"
          },
          {
                "key": "Item Name",
                "value": "Oval Bread Basket with Blue Center"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BDF-45",
    slug: "oval-jute-cylinder-with-handles-bdf-45",
    code: "BDF-45",
    name: "Oval Jute Cylinder with Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bdf_45.png",
    galleryImages: ["/products/bdf_45.png"],
    description: "Oval shallow coiled natural jute trays with curved side loop handles.",
    longDescription: {
          "overview": "The Oval Jute Cylinder with Handles (Art No: BDF-45) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BDF-45"
          },
          {
                "key": "Item Name",
                "value": "Oval Jute Cylinder with Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BDH-171",
    slug: "handcrafted-kitchen-storage-cylinder-bdh-171",
    code: "BDH-171",
    name: "Handcrafted Kitchen Storage Cylinder",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bdh_171.png",
    galleryImages: ["/products/bdh_171.png"],
    description: "Cylindrical coil-stitched natural fiber storage canister with red accent stripe.",
    longDescription: {
          "overview": "The Handcrafted Kitchen Storage Cylinder (Art No: BDH-171) is masterfully handcrafted from Natural Straw + Jute Thread. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "Natural Straw + Jute Thread",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BDH-171"
          },
          {
                "key": "Item Name",
                "value": "Handcrafted Kitchen Storage Cylinder"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Natural Straw + Jute Thread"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BDH-172",
    slug: "coiled-jute-sunburst-small-bowl-bdh-172",
    code: "BDH-172",
    name: "Coiled Jute Sunburst Small Bowl",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bdh_172.png",
    galleryImages: ["/products/bdh_172.png"],
    description: "Hand-stitched natural fiber shallow bowl with multi-color radial sunburst swirl.",
    longDescription: {
          "overview": "The Coiled Jute Sunburst Small Bowl (Art No: BDH-172) is masterfully handcrafted from Natural Straw + Jute Thread. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "Natural Straw + Jute Thread",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BDH-172"
          },
          {
                "key": "Item Name",
                "value": "Coiled Jute Sunburst Small Bowl"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "Natural Straw + Jute Thread"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-36",
    slug: "jute-cat-ears-toy-basket-djb-36",
    code: "DJB-36",
    name: "Jute Cat Ears Toy Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_36.png",
    galleryImages: ["/products/djb_36.png"],
    description: "Adorable natural cream woven bowl baskets with cat ears and embroidered face.",
    longDescription: {
          "overview": "The Jute Cat Ears Toy Basket (Art No: DJB-36) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-36"
          },
          {
                "key": "Item Name",
                "value": "Jute Cat Ears Toy Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-37",
    slug: "white-braid-basket-with-green-coin-accents-djb-37",
    code: "DJB-37",
    name: "White Braid Basket with Green Coin Accents",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_37.png",
    galleryImages: ["/products/djb_37.png"],
    description: "Off-white coiled jute storage baskets with emerald green stripe and circle coin motifs.",
    longDescription: {
          "overview": "The White Braid Basket with Green Coin Accents (Art No: DJB-37) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-37"
          },
          {
                "key": "Item Name",
                "value": "White Braid Basket with Green Coin Accents"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-04",
    slug: "jute-square-storage-box-cubes-djb-04",
    code: "DJB-04",
    name: "Jute Square Storage Box Cubes",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_04.png",
    galleryImages: ["/products/djb_04.png"],
    description: "Square natural golden jute organization cubes with white horizontal pinstripes.",
    longDescription: {
          "overview": "The Jute Square Storage Box Cubes (Art No: DJB-04) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-04"
          },
          {
                "key": "Item Name",
                "value": "Jute Square Storage Box Cubes"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-07",
    slug: "jute-rectangular-storage-bins-djb-07",
    code: "DJB-07",
    name: "Jute Rectangular Storage Bins",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_07.png",
    galleryImages: ["/products/djb_07.png"],
    description: "Rectangular natural jute organizing bins with white horizontal pinstripes.",
    longDescription: {
          "overview": "The Jute Rectangular Storage Bins (Art No: DJB-07) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-07"
          },
          {
                "key": "Item Name",
                "value": "Jute Rectangular Storage Bins"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-61",
    slug: "large-storage-laundry-basket-with-lid-djb-61",
    code: "DJB-61",
    name: "Large Storage Laundry Basket with Lid",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_61.png",
    galleryImages: ["/products/djb_61.png"],
    description: "Two-tone grey and white cylindrical laundry hampers with matching fitted lids.",
    longDescription: {
          "overview": "The Large Storage Laundry Basket with Lid (Art No: DJB-61) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-61"
          },
          {
                "key": "Item Name",
                "value": "Large Storage Laundry Basket with Lid"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-62",
    slug: "charcoal-heather-storage-basket-with-lid-djb-62",
    code: "DJB-62",
    name: "Charcoal Heather Storage Basket with Lid",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_62.png",
    galleryImages: ["/products/djb_62.png"],
    description: "Charcoal heathered and cream tall cylindrical laundry hampers with lids.",
    longDescription: {
          "overview": "The Charcoal Heather Storage Basket with Lid (Art No: DJB-62) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-62"
          },
          {
                "key": "Item Name",
                "value": "Charcoal Heather Storage Basket with Lid"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-64",
    slug: "jute-storage-basket-with-upright-handles-djb-64",
    code: "DJB-64",
    name: "Jute Storage Basket with Upright Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_64.png",
    galleryImages: ["/products/djb_64.png"],
    description: "Black cylindrical storage bins with white horizontal pinstripe and carry handles.",
    longDescription: {
          "overview": "The Jute Storage Basket with Upright Handles (Art No: DJB-64) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-64"
          },
          {
                "key": "Item Name",
                "value": "Jute Storage Basket with Upright Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BJB-15-CSF",
    slug: "round-cylinder-basket-with-terracotta-stripe-bjb-15-csf",
    code: "BJB-15-CSF",
    name: "Round Cylinder Basket with Terracotta Stripe",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bjb_15_csf.png",
    galleryImages: ["/products/bjb_15_csf.png"],
    description: "Natural jute laundry baskets with terracotta rust pinstripes and side handles.",
    longDescription: {
          "overview": "The Round Cylinder Basket with Terracotta Stripe (Art No: BJB-15-CSF) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-15-CSF"
          },
          {
                "key": "Item Name",
                "value": "Round Cylinder Basket with Terracotta Stripe"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "BJB-15-GRS",
    slug: "round-storage-basket-with-teal-stripe-bjb-15-grs",
    code: "BJB-15-GRS",
    name: "Round Storage Basket with Teal Stripe",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/bjb_15_grs.png",
    galleryImages: ["/products/bjb_15_grs.png"],
    description: "Natural golden jute storage bins with dark teal horizontal stripes and side handles.",
    longDescription: {
          "overview": "The Round Storage Basket with Teal Stripe (Art No: BJB-15-GRS) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "BJB-15-GRS"
          },
          {
                "key": "Item Name",
                "value": "Round Storage Basket with Teal Stripe"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-57",
    slug: "jute-urn-laundry-basket-djb-57",
    code: "DJB-57",
    name: "Jute Urn Laundry Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_57.png",
    galleryImages: ["/products/djb_57.png"],
    description: "Grey woven amphora urn-shaped laundry hampers with black and white accent stripes.",
    longDescription: {
          "overview": "The Jute Urn Laundry Basket (Art No: DJB-57) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-57"
          },
          {
                "key": "Item Name",
                "value": "Jute Urn Laundry Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-60",
    slug: "rectangular-jute-caddy-with-handles-djb-60",
    code: "DJB-60",
    name: "Rectangular Jute Caddy with Handles",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_60.png",
    galleryImages: ["/products/djb_60.png"],
    description: "Deep navy blue and white two-tone rectangular storage caddies with upright handles.",
    longDescription: {
          "overview": "The Rectangular Jute Caddy with Handles (Art No: DJB-60) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-60"
          },
          {
                "key": "Item Name",
                "value": "Rectangular Jute Caddy with Handles"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-66",
    slug: "round-braided-fruit-basket-with-overhead-handle-djb-66",
    code: "DJB-66",
    name: "Round Braided Fruit Basket with Overhead Handle",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_66.png",
    galleryImages: ["/products/djb_66.png"],
    description: "Rustic braided dark charcoal and natural round fruit bowls with tall carry handles.",
    longDescription: {
          "overview": "The Round Braided Fruit Basket with Overhead Handle (Art No: DJB-66) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-66"
          },
          {
                "key": "Item Name",
                "value": "Round Braided Fruit Basket with Overhead Handle"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-71",
    slug: "two-tone-royal-blue-jute-belly-basket-djb-71",
    code: "DJB-71",
    name: "Two-Tone Royal Blue Jute Belly Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_71.png",
    galleryImages: ["/products/djb_71.png"],
    description: "Two-tone natural jute and royal blue collapsible belly basket with handles.",
    longDescription: {
          "overview": "The Two-Tone Royal Blue Jute Belly Basket (Art No: DJB-71) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-71"
          },
          {
                "key": "Item Name",
                "value": "Two-Tone Royal Blue Jute Belly Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-80",
    slug: "jute-bear-face-kids-toy-basket-djb-80",
    code: "DJB-80",
    name: "Jute Bear Face Kids Toy Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_80.png",
    galleryImages: ["/products/djb_80.png"],
    description: "Natural brown jute toy storage hamper with bear ears and stitched bear face.",
    longDescription: {
          "overview": "The Jute Bear Face Kids Toy Basket (Art No: DJB-80) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-80"
          },
          {
                "key": "Item Name",
                "value": "Jute Bear Face Kids Toy Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-82",
    slug: "jute-bunny-kids-toy-basket-djb-82",
    code: "DJB-82",
    name: "Jute Bunny Kids Toy Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_82.png",
    galleryImages: ["/products/djb_82.png"],
    description: "Cream white jute bunny toy storage basket with tall ears and sweet bunny face.",
    longDescription: {
          "overview": "The Jute Bunny Kids Toy Basket (Art No: DJB-82) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-82"
          },
          {
                "key": "Item Name",
                "value": "Jute Bunny Kids Toy Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-81",
    slug: "grey-teddy-bear-jute-toy-storage-hamper-djb-81",
    code: "DJB-81",
    name: "Grey Teddy Bear Jute Toy Storage Hamper",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_81.png",
    galleryImages: ["/products/djb_81.png"],
    description: "Muted grey taupe jute teddy bear storage basket with ears and snout detail.",
    longDescription: {
          "overview": "The Grey Teddy Bear Jute Toy Storage Hamper (Art No: DJB-81) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-81"
          },
          {
                "key": "Item Name",
                "value": "Grey Teddy Bear Jute Toy Storage Hamper"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-08",
    slug: "emerald-green-striped-round-baskets-djb-08",
    code: "DJB-08",
    name: "Emerald Green Striped Round Baskets",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_08.png",
    galleryImages: ["/products/djb_08.png"],
    description: "Vibrant emerald green round storage baskets with white horizontal pinstripes.",
    longDescription: {
          "overview": "The Emerald Green Striped Round Baskets (Art No: DJB-08) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-08"
          },
          {
                "key": "Item Name",
                "value": "Emerald Green Striped Round Baskets"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-85",
    slug: "festive-christmas-santa-belly-basket-djb-85",
    code: "DJB-85",
    name: "Festive Christmas Santa Belly Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_85.png",
    galleryImages: ["/products/djb_85.png"],
    description: "Holiday Santa Claus themed jute belly basket with red hat, beard, and pom-pom nose.",
    longDescription: {
          "overview": "The Festive Christmas Santa Belly Basket (Art No: DJB-85) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-85"
          },
          {
                "key": "Item Name",
                "value": "Festive Christmas Santa Belly Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-84",
    slug: "festive-snowman-jute-belly-basket-djb-84",
    code: "DJB-84",
    name: "Festive Snowman Jute Belly Basket",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_84.png",
    galleryImages: ["/products/djb_84.png"],
    description: "Winter snowman themed off-white jute belly basket with beanie hat and carrot nose.",
    longDescription: {
          "overview": "The Festive Snowman Jute Belly Basket (Art No: DJB-84) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/1",
    cbmPerCarton: 0.058,
    setPerCarton: 12,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-84"
          },
          {
                "key": "Item Name",
                "value": "Festive Snowman Jute Belly Basket"
          },
          {
                "key": "Packaging Unit",
                "value": "S/1"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-61-0",
    slug: "tri-tone-blue-cylinder-jute-baskets-djb-61-0",
    code: "DJB-61-0",
    name: "Tri-Tone Blue Cylinder Jute Baskets",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_61_0.png",
    galleryImages: ["/products/djb_61_0.png"],
    description: "Tri-tone cream, sky blue, and dark navy blue cylindrical planter baskets.",
    longDescription: {
          "overview": "The Tri-Tone Blue Cylinder Jute Baskets (Art No: DJB-61-0) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-61-0"
          },
          {
                "key": "Item Name",
                "value": "Tri-Tone Blue Cylinder Jute Baskets"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-64-0",
    slug: "rectangular-jute-vanity-tray-with-red-trim-djb-64-0",
    code: "DJB-64-0",
    name: "Rectangular Jute Vanity Tray with Red Trim",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_64_0_new.jpg",
    galleryImages: ["/products/djb_64_0_new.jpg"],
    description: "Shallow rectangular natural jute vanity organizer trays with red stripe accents.",
    longDescription: {
          "overview": "The Rectangular Jute Vanity Tray with Red Trim (Art No: DJB-64-0) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-64-0"
          },
          {
                "key": "Item Name",
                "value": "Rectangular Jute Vanity Tray with Red Trim"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },
  {
    id: "DJB-52",
    slug: "red-cream-scalloped-storage-baskets-djb-52",
    code: "DJB-52",
    name: "Red & Cream Scalloped Storage Baskets",
    category: "jute",
    categoryName: "Jute",
    categorySlug: "jute",
    subCategory: "baskets",
    image: "/products/djb_52_new.jpg",
    galleryImages: ["/products/djb_52_new.jpg"],
    description: "Two-tone off-white natural jute and vibrant scarlet red coiled storage baskets with scalloped rim detailing and dual upright carry handles (Set of 3).",
    longDescription: {
          "overview": "The Red & Cream Scalloped Storage Baskets (Art No: DJB-52) is masterfully handcrafted from 100% Natural Jute. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.",
          "craftsmanship": "Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.",
          "exportDetails": "Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.",
          "careInstructions": "Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness."
    },
    unit: "S/3",
    cbmPerCarton: 0.058,
    setPerCarton: 4,
    nwPerCtn: 4.2,
    gwPerCtn: 5.5,
    material: "100% Natural Jute",
    color: "Natural Jute & Dyed Fiber Accents",
    specifications: [
          {
                "key": "Item Code",
                "value": "DJB-52"
          },
          {
                "key": "Item Name",
                "value": "Red & Cream Scalloped Storage Baskets"
          },
          {
                "key": "Packaging Unit",
                "value": "S/3"
          },
          {
                "key": "Materials",
                "value": "100% Natural Jute"
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
    features: ["100% Natural Eco Jute","Authentic Bangladeshi Craftsmanship","Heavy Duty Export Quality","Multi-Purpose Home Organizer"]
  },

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
    image: '/products/gfc_sb_030_new.jpg',
    galleryImages: ["/products/gfc_sb_030_new.jpg"],
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
    image: '/products/gfc_sb_011_new.jpg',
    galleryImages: ['/products/gfc_sb_011_new.jpg', '/products/gfc_sb_011_hd.jpg'],
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

  // 6. Rugs & Floor Coverings (Catalogue Collection)
  {
  "id": "BDR-04",
  "slug": "chunky-braided-natural-jute-beni-rug-bdr-04",
  "code": "BDR-04",
  "name": "Chunky Braided Natural Jute Beni Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_04.png",
  "galleryImages": [
    "/products/bdr_04.png"
  ],
  "description": "Chunky thick-braided natural golden jute Beni textured rectangular area rug and doormat handcrafted from 100% natural jute.",
  "longDescription": {
    "overview": "The Chunky Braided Natural Jute Beni Rug (Art No: BDR-04) delivers organic tactile luxury with heavy-gauge cable-braided golden jute yarns. Ideal for entryways, living rooms, and rustic-modern spaces.",
    "craftsmanship": "Hand-braided using 100% premium grade Bangladesh golden jute yarn, spiraled and heavy-stitch bound for extra durability and cushioned support.",
    "exportDetails": "Rolled tightly and packed in heavy export poly-bags before placing into master cartons (4 to 6 rugs per box).",
    "careInstructions": "Vacuum regularly without beater bar. Spot clean stains with mild soap solution."
  },
  "unit": "Single Piece",
  "material": "100% Natural Jute",
  "color": "Natural Golden Jute",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-04"
    },
    {
      "key": "Material",
      "value": "100% Natural Jute"
    },
    {
      "key": "Weave",
      "value": "Chunky Cable Beni Braided"
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
    "Heavy-Gauge Chunky Braid",
    "100% Pure Golden Jute",
    "Natural Acoustic & Thermal Insulation",
    "Reversible & Long-Lasting"
  ]
},
  {
  "id": "BDR-05",
  "slug": "khaki-jute-cotton-beni-textured-rug-bdr-05",
  "code": "BDR-05",
  "name": "Khaki Jute & Cotton Beni Textured Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_05.png",
  "galleryImages": [
    "/products/bdr_05.png"
  ],
  "description": "Heavy braided khaki golden jute and cotton blend Beni textured rug with reinforced bordered hem.",
  "longDescription": {
    "overview": "The Khaki Jute & Cotton Beni Textured Rug (Art No: BDR-05) features dense ribbed cable rows in earthy khaki tones, combining natural jute strength with cotton flexibility.",
    "craftsmanship": "Braided on hand-operated binding frames using premium jute-cotton blended cords with sturdy fabric edge tape.",
    "exportDetails": "Rolled on core tubes with moisture-barrier wrapping in export master cartons.",
    "careInstructions": "Shake out debris. Vacuum on low suction. Spot clean with damp sponge."
  },
  "unit": "Single Piece",
  "material": "Jute + Cotton",
  "color": "Khaki Earth & Golden Jute",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-05"
    },
    {
      "key": "Material",
      "value": "Jute & Cotton Blend"
    },
    {
      "key": "Weave",
      "value": "Beni Textured Braid"
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
    "Dense Ribbed Cable Weave",
    "Jute-Cotton Blended Strength",
    "Reinforced Edge Binding",
    "High-Traffic Floor Durability"
  ]
},
  {
  "id": "BDR-61",
  "slug": "deep-teal-geometric-diamond-flatweave-rug-bdr-61",
  "code": "BDR-61",
  "name": "Deep Teal Geometric Diamond Flatweave Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_61.png",
  "galleryImages": [
    "/products/bdr_61.png"
  ],
  "description": "Rich dark teal cyan and black geometric diamond motif flatweave floor rug with fine side fringe ends.",
  "longDescription": {
    "overview": "The Deep Teal Geometric Diamond Flatweave Rug (Art No: BDR-61) delivers vibrant jewel-tone sophistication with all-over diamond trellis geometry in rich teal and charcoal.",
    "craftsmanship": "Precision handloom flatwoven using dyed cotton and natural jute yarns by master artisan weavers.",
    "exportDetails": "Packed 15-20 pcs per master export carton or export bale.",
    "careInstructions": "Vacuum regularly. Spot clean with mild detergent."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jute",
  "color": "Deep Teal Cyan & Charcoal Black",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-61"
    },
    {
      "key": "Material",
      "value": "Cotton & Jute"
    },
    {
      "key": "Pattern",
      "value": "Diamond Trellis Flatweave"
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
    "Jewel-Tone Deep Teal Palette",
    "Intricate Geometric Diamond Motif",
    "Lightweight & Reversible",
    "Eco-Friendly Natural Fibers"
  ]
},
  {
  "id": "BDR-59",
  "slug": "mint-aqua-diamond-trellis-flatweave-rug-bdr-59",
  "code": "BDR-59",
  "name": "Mint Aqua Diamond Trellis Flatweave Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_59.png",
  "galleryImages": [
    "/products/bdr_59.png"
  ],
  "description": "Refreshing mint aqua green and beige diamond geometric trellis flatweave rug with braided fringe.",
  "longDescription": {
    "overview": "The Mint Aqua Diamond Trellis Flatweave Rug (Art No: BDR-59) infuses botanical calmness into interiors with its pastel seafoam green diamond pattern.",
    "craftsmanship": "Densely woven on traditional shuttle looms using combed cotton and resilient jute threads.",
    "exportDetails": "Individually tagged and sealed in moisture-proof poly-sleeve cartons.",
    "careInstructions": "Gentle vacuuming. Spot clean cold water. Air dry flat."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jute",
  "color": "Mint Aqua Green & Natural Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-59"
    },
    {
      "key": "Material",
      "value": "Cotton & Jute"
    },
    {
      "key": "Pattern",
      "value": "Diamond Trellis"
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
    "Pastel Mint Aqua Hue",
    "Crisp Geometric Definition",
    "Soft Underfoot Texture",
    "Sustainable Cotton-Jute Yarn"
  ]
},
  {
  "id": "BDR-10",
  "slug": "mustard-golden-jute-diamond-rug-bdr-10",
  "code": "BDR-10",
  "name": "Mustard Golden Jute Diamond Rug with Black Fringe",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_10.png",
  "galleryImages": [
    "/products/bdr_10.png"
  ],
  "description": "100% natural golden jute and black diamond geometric trellis flatweave rug framed with bold black fringe tassels.",
  "longDescription": {
    "overview": "The Mustard Golden Jute Diamond Rug (Art No: BDR-10) combines natural golden jute with bold black diamond geometric contrast and chunky black fringe ends.",
    "craftsmanship": "Hand-woven from 100% premium Bangladeshi golden jute on traditional handlooms.",
    "exportDetails": "Rolled tightly with export band packaging, 10 to 15 pcs per master carton.",
    "careInstructions": "Vacuum regularly. Spot clean dry or mild soap solution."
  },
  "unit": "Single Piece",
  "material": "100% Jute",
  "color": "Natural Mustard Jute & Black Fringe",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-10"
    },
    {
      "key": "Material",
      "value": "100% Natural Golden Jute"
    },
    {
      "key": "Pattern",
      "value": "High-Contrast Diamond Trellis"
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
    "100% Natural Golden Jute",
    "High-Contrast Black Trellis",
    "Chunky Black Edge Fringe",
    "Eco-Friendly Boho Statement"
  ]
},
  {
  "id": "BDR-47",
  "slug": "charcoal-ivory-ladder-stripe-handloom-rug-bdr-47",
  "code": "BDR-47",
  "name": "Charcoal & Ivory Ladder Stripe Handloom Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jhuta-rugs",
  "image": "/products/bdr_47.png",
  "galleryImages": [
    "/products/bdr_47.png"
  ],
  "description": "Charcoal grey and ivory vertical ladder stripe handloom flatweave rug finished with braided side fringe tassels.",
  "longDescription": {
    "overview": "The Charcoal & Ivory Ladder Stripe Handloom Rug (Art No: BDR-47) features alternating textured ladder block stripes in smoky charcoal and natural ivory.",
    "craftsmanship": "Handcrafted on pit looms by skilled artisans with blended jute and cotton yarns for tactile relief and longevity.",
    "exportDetails": "Packed 15 to 20 pcs per master export carton.",
    "careInstructions": "Vacuum regularly. Spot clean with damp cloth."
  },
  "unit": "Single Piece",
  "material": "Jute & Cotton",
  "color": "Smoky Charcoal & Ivory White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-47"
    },
    {
      "key": "Material",
      "value": "Jute & Cotton"
    },
    {
      "key": "Pattern",
      "value": "Ladder Block Stripe"
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
    "Modern Ladder Stripe Geometry",
    "Smoky Charcoal & Ivory Contrast",
    "Braided Natural Fringe",
    "Reversible Dual-Sided Construction"
  ]
},
  {
  "id": "BDR-83",
  "slug": "tangerine-orange-shaggy-floor-mat-bdr-83",
  "code": "BDR-83",
  "name": "Tangerine Orange Shaggy Floor Mat",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_83.png",
  "galleryImages": [
    "/products/bdr_83.png"
  ],
  "description": "Vibrant tangerine orange plush shaggy doormat crafted from 100% upcycled Jhuta with hand-knotted edge fringe.",
  "longDescription": {
    "overview": "The Tangerine Orange Shaggy Floor Mat (Art No: BDR-83) brings rich tactile softness and vibrant warmth to indoor entryways, bedside floors, and children's play areas.",
    "craftsmanship": "Hand-tufted and knotted using 100% premium soft Jhuta cotton strips on a durable woven base.",
    "exportDetails": "Folded or flat-packed in export cartons, 20 to 30 pcs per master carton.",
    "careInstructions": "Shake out dirt outdoors or vacuum gently with floor brush. Hand wash cold and line dry."
  },
  "unit": "Single Piece",
  "material": "100% Jhuta",
  "color": "Vibrant Tangerine Orange",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-83"
    },
    {
      "key": "Material",
      "value": "100% Jhuta"
    },
    {
      "key": "Style",
      "value": "Plush Shaggy Tuft"
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
    "High-Pile Plush Texture",
    "Vibrant Saturated Dye",
    "Soft & Warm Underfoot",
    "100% Upcycled Eco Jhuta"
  ]
},
  {
  "id": "BDR-84",
  "slug": "kaleidoscope-patchwork-shaggy-door-mat-bdr-84",
  "code": "BDR-84",
  "name": "Kaleidoscope Patchwork Shaggy Door Mat",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_84.png",
  "galleryImages": [
    "/products/bdr_84.png"
  ],
  "description": "Playful multicolor patchwork shaggy doormat featuring plush tufts of magenta, orange, blue, green, and black with natural fringe tassels.",
  "longDescription": {
    "overview": "The Kaleidoscope Patchwork Shaggy Door Mat (Art No: BDR-84) showcases a dynamic block patchwork of colorful recycled textiles.",
    "craftsmanship": "Hand-crafted by artisan weavers using 90% Jhuta and 10% cotton scrap yarns, creating a thick cushioned pile.",
    "exportDetails": "Packed compactly in export bales or cartons for international shipping.",
    "careInstructions": "Shake regularly. Spot clean or gentle cold hand wash."
  },
  "unit": "Single Piece",
  "material": "90% Jhuta + 10% Cotton",
  "color": "Multicolor Patchwork (Magenta, Orange, Blue, Green, Black)",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-84"
    },
    {
      "key": "Material",
      "value": "90% Jhuta + 10% Cotton"
    },
    {
      "key": "Style",
      "value": "Patchwork Shaggy Tuft"
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
    "Vibrant Multi-Color Block Tufting",
    "High-Density Plush Shag",
    "Zero-Waste Upcycled Craft",
    "Hand-Knotted Fringe"
  ]
},
  {
  "id": "BDR-03",
  "slug": "natural-jute-jhuta-trellis-area-rug-bdr-03",
  "code": "BDR-03",
  "name": "Natural Jute & Jhuta Trellis Area Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_03.png",
  "galleryImages": [
    "/products/bdr_03.png"
  ],
  "description": "Earthy golden jute and cotton trellis flatweave area rug featuring an all-over diamond motif and solid tan edge bindings.",
  "longDescription": {
    "overview": "The Natural Jute & Jhuta Trellis Area Rug (Art No: BDR-03) combines the organic strength of golden jute with the softness of cotton Jhuta yarn.",
    "craftsmanship": "Woven on heavy-duty pit looms with 60% Jhuta and 40% natural jute, framed by reinforced solid tan woven edge bands.",
    "exportDetails": "Rolled and encased in export polythene tubing, 8 to 15 pcs per master carton.",
    "careInstructions": "Vacuum regularly without beater bar. Spot clean with damp cloth."
  },
  "unit": "Single Piece",
  "material": "60% Jhuta & 40% Jute",
  "color": "Natural Golden Jute & Oatmeal Beige",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-03"
    },
    {
      "key": "Material",
      "value": "60% Jhuta & 40% Jute"
    },
    {
      "key": "Pattern",
      "value": "Diamond Lattice Trellis"
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
    "Heavyweight Jute & Cotton Blend",
    "Crisp Diamond Geometric Weave",
    "Reinforced Solid Edge Binding",
    "Natural Reversible Durability"
  ]
},
  {
  "id": "BDR-23-WA",
  "slug": "coastal-blue-ticking-stripe-woven-rug-bdr-23-wa",
  "code": "BDR-23-WA",
  "name": "Coastal Blue Ticking Stripe Woven Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_23_wa.png",
  "galleryImages": [
    "/products/bdr_23_wa.png"
  ],
  "description": "Breezy coastal blue and off-white vertical ticking stripe flatweave rug finished with braided side fringe tassels.",
  "longDescription": {
    "overview": "The Coastal Blue Ticking Stripe Woven Rug (Art No: BDR-23-WA) offers timeless seaside charm with soft cornflower blue stripes across an ivory flatweave background.",
    "craftsmanship": "Handloom woven with durable Jhuta and cotton yarns for a soft, breathable texture and long-lasting performance.",
    "exportDetails": "Individually rolled and tagged, packed in master export cartons.",
    "careInstructions": "Machine wash cold gentle cycle or vacuum regularly. Lay flat to dry."
  },
  "unit": "Single Piece",
  "material": "Jhuta + Cotton",
  "color": "Cornflower Blue & Ivory White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-23-WA"
    },
    {
      "key": "Material",
      "value": "Jhuta + Cotton"
    },
    {
      "key": "Pattern",
      "value": "Vertical Ticking Stripe"
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
    "Classic Coastal Ticking Stripe",
    "Soft Upcycled Jhuta Cotton",
    "Braided Natural Fringe Ends",
    "Reversible & Easy-Care"
  ]
},
  {
  "id": "BDR-77",
  "slug": "charcoal-slate-handloom-rug-bdr-77",
  "code": "BDR-77",
  "name": "Charcoal Slate Handloom Rug with White Fringe",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_77.png",
  "galleryImages": [
    "/products/bdr_77.png"
  ],
  "description": "Textured charcoal slate flatweave handloom rug with contrasting crisp white fringed side borders.",
  "longDescription": {
    "overview": "The Charcoal Slate Handloom Rug (Art No: BDR-77) provides deep modern texture with earthy charcoal tones and crisp white fringe ends. Versatile for contemporary living spaces and bedrooms.",
    "craftsmanship": "Woven on manual wooden handlooms with high-density cotton and Jhuta blended yarn for durable everyday use.",
    "exportDetails": "Rolled and sealed in heavy export-grade polythene bags, 15 to 20 pcs per master carton.",
    "careInstructions": "Vacuum on low suction without beater bar. Spot clean stains with mild eco soap."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Charcoal Slate & White Fringe",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-77"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Style",
      "value": "Solid Flatweave"
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
    "Deep Charcoal Slate Tone",
    "Contrasting White Fringe",
    "Reversible & Heavyweight",
    "Natural Eco Cotton & Jhuta"
  ]
},
  {
  "id": "BDR-26",
  "slug": "burgundy-accent-pinstripe-flatweave-rug-bdr-26",
  "code": "BDR-26",
  "name": "Burgundy Accent Pinstripe Flatweave Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_26.png",
  "galleryImages": [
    "/products/bdr_26.png"
  ],
  "description": "Light ecru textured flatweave floor rug accented with vertical burgundy red pinstripes and natural fringe.",
  "longDescription": {
    "overview": "The Burgundy Accent Pinstripe Flatweave Rug (Art No: BDR-26) features subtle vertical ruby red stripes across a heathered ecru background, offering understated elegance.",
    "craftsmanship": "Expertly hand-woven using fine cotton and Jhuta threads on pit looms by artisan weavers in Bangladesh.",
    "exportDetails": "Individually rolled with poly wrap and packed in master export cartons.",
    "careInstructions": "Regular gentle vacuuming. Spot clean with cool water and mild detergent."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Heathered Ecru & Burgundy Red",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-26"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Pattern",
      "value": "Vertical Pinstripe"
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
    "Minimalist Ruby Pinstripes",
    "Breathable Natural Fiber",
    "Durable Flatweave Structure",
    "Hand-Knotted Fringe"
  ]
},
  {
  "id": "BDR-27",
  "slug": "navy-diamond-honeycomb-geometric-rug-bdr-27",
  "code": "BDR-27",
  "name": "Navy Diamond Honeycomb Geometric Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_27.png",
  "galleryImages": [
    "/products/bdr_27.png"
  ],
  "description": "Intricate navy blue and cream geometric honeycomb diamond flatweave area rug with soft braided fringe.",
  "longDescription": {
    "overview": "The Navy Diamond Honeycomb Geometric Rug (Art No: BDR-27) delivers an all-over diamond lattice design in nautical navy blue and natural ecru.",
    "craftsmanship": "Tight shuttle handloom weaving creates a crisp diamond geometric grid with thick braided edge tassels.",
    "exportDetails": "Packed 10 to 15 pcs per master carton or ocean freight export bale.",
    "careInstructions": "Vacuum regularly. Spot clean spills immediately with damp sponge."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Navy Blue & Natural Ecru",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-27"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Pattern",
      "value": "Geometric Honeycomb Trellis"
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
    "High-Contrast Diamond Lattice",
    "Heavy Duty Handloom Weave",
    "Braided Cotton Fringe",
    "Sustainable Eco Yarns"
  ]
},
  {
  "id": "BDR-24",
  "slug": "sage-green-ribbed-stripe-rug-bdr-24",
  "code": "BDR-24",
  "name": "Sage Green Ribbed Stripe Rug with Coral Fringe",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_24.png",
  "galleryImages": [
    "/products/bdr_24.png"
  ],
  "description": "Pastel sage green and cream subtle textured stripe rug finished with playful coral peach fringed borders.",
  "longDescription": {
    "overview": "The Sage Green Ribbed Stripe Rug (Art No: BDR-24) introduces gentle organic serenity with sage ribbed stripes and warm salmon coral tassels.",
    "craftsmanship": "Handcrafted on wooden looms combining soft cotton yarns and Jhuta fiber for tactile depth and warmth.",
    "exportDetails": "Rolled on recycled cores and poly-wrapped in standard master export cartons.",
    "careInstructions": "Gentle shake-out or vacuum. Hand wash cold if needed and flat dry."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Sage Green & Coral Peach Fringe",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-24"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Pattern",
      "value": "Ribbed Linear Stripe"
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
    "Calming Sage Green Palette",
    "Charming Coral Fringe Accent",
    "Ribbed Tactile Weave",
    "100% Biodegradable & Upcycled"
  ]
},
  {
  "id": "BDR-22",
  "slug": "windowpane-grid-check-handwoven-rug-bdr-22",
  "code": "BDR-22",
  "name": "Windowpane Grid Check Handwoven Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_22.png",
  "galleryImages": [
    "/products/bdr_22.png"
  ],
  "description": "Modern farmhouse windowpane grid check rug in deep charcoal navy with contrasting white double-lines and side fringe.",
  "longDescription": {
    "overview": "The Windowpane Grid Check Handwoven Rug (Art No: BDR-22) provides modern architectural symmetry with bold windowpane cross-stripes.",
    "craftsmanship": "Handloom flatwoven with high-contrast cotton and Jhuta yarn with reinforced side hem and knotted tassels.",
    "exportDetails": "15 to 25 pcs per standard export master box.",
    "careInstructions": "Vacuum regularly. Spot clean with mild detergent."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Deep Midnight Navy & White Grid",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-22"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Pattern",
      "value": "Windowpane Check"
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
    "Bold Windowpane Check Pattern",
    "Reversible Dual-Sided Wear",
    "Dense Floor-Grip Flatweave",
    "Upcycled Cotton Jhuta Blend"
  ]
},
  {
  "id": "BDR-23",
  "slug": "bold-black-white-vertical-stripe-rug-bdr-23",
  "code": "BDR-23",
  "name": "Bold Black & White Vertical Stripe Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_23.png",
  "galleryImages": [
    "/products/bdr_23.png"
  ],
  "description": "Striking monochrome black and white vertical wide bar stripe flatweave rug with knotted natural fringe.",
  "longDescription": {
    "overview": "The Bold Black & White Vertical Stripe Rug (Art No: BDR-23) makes a bold graphic statement with alternating wide black and ivory white stripes.",
    "craftsmanship": "Heavyweight flatweave crafted from durable Jhuta and cotton fibers on traditional handlooms.",
    "exportDetails": "Folded or rolled for containerized ocean shipping, export cartons or bales.",
    "careInstructions": "Machine wash gentle cold or vacuum regularly. Air dry flat."
  },
  "unit": "Single Piece",
  "material": "Jhuta + Cotton",
  "color": "Bold Black & Ivory White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-23"
    },
    {
      "key": "Material",
      "value": "Jhuta + Cotton"
    },
    {
      "key": "Pattern",
      "value": "Wide Bar Stripe"
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
    "Graphic High-Contrast Stripes",
    "Heavy Duty Jhuta Cotton Weave",
    "Knotted Side Fringe",
    "Modern Coastal & Urban Decor"
  ]
},
  {
  "id": "BDR-25",
  "slug": "geometric-diamond-flatweave-rug-bdr-25",
  "code": "BDR-25",
  "name": "Geometric Diamond Flatweave Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_25.png",
  "galleryImages": [
    "/products/bdr_25.png"
  ],
  "description": "Handcrafted geometric diamond motif flatweave floor rug in rich teal cyan and charcoal tones with braided side fringe tassels.",
  "longDescription": {
    "overview": "The Geometric Diamond Flatweave Rug (Art No: BDR-25) is an artisanal handloom woven area rug blending upcycled Jhuta cotton and natural fiber. Designed for living spaces, bedrooms, and contemporary boutique interiors.",
    "craftsmanship": "Hand-woven on traditional Bangladeshi wooden pit looms using durable Jhuta and cotton yarns, creating an intricate geometric diamond flatweave pattern with reinforced knotted fringed edges.",
    "exportDetails": "Rolled and packed in moisture-proof export polythene sleeves, 10 to 20 pcs per master export carton or bale.",
    "careInstructions": "Shake out regularly or vacuum on low suction without a beater bar. Spot clean with damp cloth and mild eco-detergent."
  },
  "unit": "Single Piece",
  "material": "Jhuta & Cotton",
  "color": "Teal Cyan & Dark Charcoal",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-25"
    },
    {
      "key": "Material",
      "value": "Jhuta & Cotton"
    },
    {
      "key": "Weave",
      "value": "Flatweave Handloom"
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
    "100% Handloom Woven",
    "Intricate Diamond Trellis",
    "Eco-Friendly Jhuta Cotton",
    "Reversible & Long-Lasting"
  ]
},
  {
  "id": "BDR-76",
  "slug": "multi-color-striped-chindi-rug-bdr-76",
  "code": "BDR-76",
  "name": "Multi-Color Striped Chindi Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_76.png",
  "galleryImages": [
    "/products/bdr_76.png"
  ],
  "description": "Vibrant multi-colored striped rag rug crafted from upcycled Jhuta and cotton fibers with soft natural fringed borders.",
  "longDescription": {
    "overview": "The Multi-Color Striped Chindi Rug (Art No: BDR-76) combines lively pastel stripes of pink, turquoise, coral, and slate grey. Perfect for nursery rooms, entryways, and modern eclectic home decor.",
    "craftsmanship": "Skillfully hand-woven using repurposed soft Jhuta cotton strips on manual handlooms by rural artisan weavers.",
    "exportDetails": "Folded or rolled compactly for international ocean freight, standard export bale or carton packaging.",
    "careInstructions": "Gentle vacuuming or hand wash in cold water with mild detergent. Air dry flat in shade."
  },
  "unit": "Single Piece",
  "material": "Jhuta & Cotton",
  "color": "Multicolor Pastel Stripes",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-76"
    },
    {
      "key": "Material",
      "value": "Jhuta & Cotton"
    },
    {
      "key": "Style",
      "value": "Striped Chindi Flatweave"
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
    "Upcycled Cotton Rag Weave",
    "Cheerful Multi-Stripe Aesthetic",
    "Soft & Cozy Underfoot",
    "Zero-Waste Sustainable Decor"
  ]
},
  {
  "id": "BDR-75",
  "slug": "trellis-diamond-colorblock-rug-bdr-75",
  "code": "BDR-75",
  "name": "Trellis Diamond Colorblock Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_75.png",
  "galleryImages": [
    "/products/bdr_75.png"
  ],
  "description": "Banded colorblock geometric rug featuring yellow ochre and muted teal bands with all-over white trellis diamond motifs.",
  "longDescription": {
    "overview": "The Trellis Diamond Colorblock Rug (Art No: BDR-75) showcases Scandinavian-boho geometry with balanced three-band colorblocking in mustard ochre and slate teal.",
    "craftsmanship": "Densely flat-woven with premium combed cotton and Jhuta yarns, offering crisp geometric definition and enduring structure.",
    "exportDetails": "Individually labeled with barcode hangtags and packed in export-compliant polybags and heavy cartons.",
    "careInstructions": "Vacuum regularly. Spot clean spills immediately. Professional dry clean recommended for large area rugs."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Mustard Ochre & Slate Teal",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-75"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Pattern",
      "value": "Colorblock Diamond Trellis"
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
    "Modern Colorblock Panels",
    "High-Definition Diamond Trellis",
    "Heavyweight Flatweave",
    "Sustainable Natural Yarns"
  ]
},
  {
  "id": "BDR-73",
  "slug": "modern-gradient-staggered-stripe-rug-bdr-73",
  "code": "BDR-73",
  "name": "Modern Gradient Staggered Stripe Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_73.png",
  "galleryImages": [
    "/products/bdr_73.png"
  ],
  "description": "Contemporary architectural rug featuring a vertical staggered barcode gradient transition from ivory white to deep navy charcoal.",
  "longDescription": {
    "overview": "The Modern Gradient Staggered Stripe Rug (Art No: BDR-73) delivers a dramatic modern visual with rhythmic vertical stripe transitions from bright cream to midnight charcoal.",
    "craftsmanship": "Precision hand-loomed with tight cotton and Jhuta yarn tension, finished with soft off-white braided end tassels.",
    "exportDetails": "Rolled on cardboard cores and sealed in heavy protective poly wraps for export shipping.",
    "careInstructions": "Vacuum using low suction floor tool. Rotate periodically for even wear."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Ivory Cream & Deep Midnight Charcoal",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-73"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Design",
      "value": "Staggered Gradient Stripe"
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
    "Striking Two-Tone Gradient",
    "Architectural Minimalist Aesthetic",
    "Premium Cotton & Jhuta Blend",
    "Braided End Fringe"
  ]
},
  {
  "id": "BDR-74",
  "slug": "monochrome-pinstripe-woven-rug-bdr-74",
  "code": "BDR-74",
  "name": "Monochrome Pinstripe Woven Rug",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_74.png",
  "galleryImages": [
    "/products/bdr_74.png"
  ],
  "description": "Classic black and white pinstripe handwoven rug made from 100% recycled cotton yarn with natural knotted fringe.",
  "longDescription": {
    "overview": "The Monochrome Pinstripe Woven Rug (Art No: BDR-74) offers a timeless farmhouse and Nordic striped texture, handcrafted from recycled eco-cotton.",
    "craftsmanship": "Woven on traditional shuttle handlooms using 100% recycled cotton fiber yarns, providing natural softness and exceptional durability.",
    "exportDetails": "Packed 15-25 pcs per standard export master carton or compressed bale.",
    "careInstructions": "Machine wash cold gentle cycle or shake out. Lay flat to dry."
  },
  "unit": "Single Piece",
  "material": "Recycled Cotton",
  "color": "Monochrome Black & Ivory White",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-74"
    },
    {
      "key": "Material",
      "value": "Recycled Cotton"
    },
    {
      "key": "Pattern",
      "value": "Vertical Pinstripe"
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
    "100% Recycled Cotton",
    "Timeless Pinstripe Motif",
    "Machine Washable & Reversible",
    "Soft Natural Braided Tassels"
  ]
},
  {
  "id": "BDR-72",
  "slug": "solid-indigo-navy-handloom-rug-bdr-72",
  "code": "BDR-72",
  "name": "Solid Indigo Navy Handloom Rug with White Fringe",
  "category": "rugs",
  "categoryName": "Rugs",
  "categorySlug": "rugs",
  "subCategory": "jute-rugs",
  "image": "/products/bdr_72.png",
  "galleryImages": [
    "/products/bdr_72.png"
  ],
  "description": "Deep indigo navy textured flatweave handloom rug with contrasting crisp white fringed side borders.",
  "longDescription": {
    "overview": "The Solid Indigo Navy Handloom Rug (Art No: BDR-72) features rich speckled dark indigo blue weave with crisp white fringe borders, offering a clean coastal and modern minimalist aesthetic.",
    "craftsmanship": "Woven on sturdy handlooms using high-tensile cotton and Jhuta blended yarn for superior shape retention and floor grip.",
    "exportDetails": "Master export carton containing 15-20 rugs, individually poly-wrapped with international shipping marks.",
    "careInstructions": "Vacuum regularly. Spot clean with cold water. Avoid direct prolonged sunlight to maintain deep indigo hue."
  },
  "unit": "Single Piece",
  "material": "Cotton & Jhuta",
  "color": "Deep Indigo Navy with White Fringe",
  "specifications": [
    {
      "key": "Item Code",
      "value": "BDR-72"
    },
    {
      "key": "Material",
      "value": "Cotton & Jhuta"
    },
    {
      "key": "Style",
      "value": "Solid Handloom Weave"
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
    "Deep Rich Indigo Dye",
    "Contrasting White Fringe Ends",
    "Durable Dense Weave",
    "Eco-Friendly Jhuta Cotton Blend"
  ]
},
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
