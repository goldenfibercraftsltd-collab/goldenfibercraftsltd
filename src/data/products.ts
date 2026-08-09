export interface ProductSpec {
  key: string;
  value: string;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  code: string;
  name: string;
  category: string;
  categoryName: string;
  categorySlug: string;
  image: string;
  description: string;
  specifications: ProductSpec[];
  features: string[];
}

export const TAGLINE = "Nature Woven into Every Creation.";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'baskets',
    slug: 'storage-laundry-baskets',
    name: 'Storage & Laundry Baskets',
    description: 'Handwoven natural seagrass, water hyacinth, Kaisa grass, and jute hampers & storage baskets for global export.',
    iconName: 'Package'
  },
  {
    id: 'planters',
    slug: 'planters-pots',
    name: 'Planters & Pots',
    description: 'Eco-chic natural fiber plant pots, floor planters, and hanging planter baskets with waterproof interior liners.',
    iconName: 'Leaf'
  },
  {
    id: 'bags',
    slug: 'jute-bags-packaging',
    name: 'Jute Bags & Packaging',
    description: 'Custom printed golden jute shopping bags, tote bags, promotional gift bags, and wine bottle packaging.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'decor',
    slug: 'home-decor-mats',
    name: 'Home Decor & Mats',
    description: 'Artisan hand-braided jute floor rugs, placement sets, table mats, macrame plant holders, and wall decor.',
    iconName: 'Sparkles'
  },
  {
    id: 'bamboo',
    slug: 'bamboo-crafts',
    name: 'Bamboo Crafts',
    description: 'Sustainable hand-carved bamboo trays, organizers, and eco-friendly home lifestyle accessories.',
    iconName: 'Trees'
  }
];

export const PRODUCTS: ProductItem[] = [
  // 1. Storage & Laundry Baskets
  {
    id: 'GFC-SB-015',
    slug: 'sancerre-seagrass-rectangular-basket-gfc-sb-015',
    code: 'GFC-SB-015, 018',
    name: 'Sancerre Seagrass Rectangular Basket',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_sb_015.png',
    description: 'Handwoven rectangular storage basket made from seagrass, water hyacinth and natural jute fiber. Ideal for high-end home organization and retail export.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-015, 018' },
      { key: 'Item Name', value: 'Sancerre Seagrass Rectangular Basket' },
      { key: 'Specification', value: '43cm W x 33cm D x 40cm H' },
      { key: 'Materials', value: 'Water Hyacinth, Seagrass, Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['100% Natural Fiber', 'Handcrafted Craftsmanship', 'Heavy Duty Frame', 'Export Grade Quality']
  },
  {
    id: 'GFC-SB-025',
    slug: 'sancerre-seagrass-rectangular-basket-gfc-sb-025',
    code: 'GFC-SB-025',
    name: 'Sancerre Seagrass Rectangular Basket (Medium)',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_sb_025.png',
    description: 'Medium size seagrass rectangular storage basket with soft cotton rope handles for linen and toy organization.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-025' },
      { key: 'Item Name', value: 'Sancerre Seagrass Rectangular Basket' },
      { key: 'Specification', value: 'Diameter-30cm & Height-30cm' },
      { key: 'Materials', value: 'Seagrass, Cotton Rope' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Natural Seagrass Fiber', 'Soft Cotton Rope Wrap', 'Stackable & Lightweight', 'Eco Living Accent']
  },
  {
    id: 'GFC-SB-030',
    slug: 'round-shape-jute-storage-basket-gfc-sb-030',
    code: 'GFC-SB-030',
    name: 'Round Shape Jute Storage Basket',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_sb_030.png',
    description: 'Traditional round woven storage basket with cotton rope accents and reinforced natural seagrass weave.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-030' },
      { key: 'Item Name', value: 'Round Shape Jute Storage Basket' },
      { key: 'Specification', value: 'Diameter 20cm x High 18cm' },
      { key: 'Materials', value: 'Seagrass, Cotton Rope' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Eco-Friendly Materials', 'Soft Cotton Rope Trim', 'Multipurpose Storage', 'Foldable & Durable']
  },
  {
    id: 'GFC-SB-024',
    slug: 'casafield-round-storage-basket-gfc-sb-024',
    code: 'GFC-SB-024',
    name: 'Casafield Round Storage Basket',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_sb_024.png',
    description: 'Large premium round storage hamper crafted from natural water hyacinth braided fibers.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-024' },
      { key: 'Item Name', value: 'Casafield Round Storage Basket' },
      { key: 'Specification', value: '17.5 inch x 19 inch High' },
      { key: 'Materials', value: 'Natural Water Hyacinth' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Natural Water Hyacinth', 'Spacious Interior', 'Hand-Braided Texture', 'Bio-degradable']
  },
  {
    id: 'GFC-SB-017',
    slug: 'round-seagrass-laundry-basket-gfc-sb-017',
    code: 'GFC-SB-017',
    name: 'Round Seagrass Laundry Basket',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_sb_017.png',
    description: 'Tall laundry hamper basket expertly handwoven using sustainably harvested Bangladesh seagrass.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-017' },
      { key: 'Item Name', value: 'Round Seagrass Basket' },
      { key: 'Specification', value: '14 inch x 21 inch High' },
      { key: 'Materials', value: '100% Natural Seagrass' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Tall Laundry Design', 'Built-in Handles', 'Breathable Natural Weave', 'Scandi Minimalist Look']
  },
  {
    id: 'GFC-KB-005',
    slug: 'kaisa-basket-bowl-gfc-kb-005',
    code: 'GFC-KB-005, 015',
    name: 'Kaisa Grass Basket Bowl',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_kb_005.png',
    description: 'Handmade Kaisa grass basket bowl wrapped with natural cotton cord. Popular fair trade product for tabletop storage.',
    specifications: [
      { key: 'Item Code', value: 'GFC-KB-005, 015' },
      { key: 'Item Name', value: 'Kaisa Basket Bowl' },
      { key: 'Specification', value: '6", 10", 14" Diameter Options' },
      { key: 'Materials', value: 'Kaisa Grass, Cotton Wrapped' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Fair Trade Handmade', 'Kaisa Wild Grass', 'Cotton Cord Wrapping', 'Tabletop Organization']
  },
  {
    id: 'GFC-WB-009',
    slug: 'cotton-rope-laundry-hamper-woven-basket-gfc-wb-009',
    code: 'GFC-WB-009',
    name: 'Cotton Rope Laundry Hamper Woven Basket',
    category: 'baskets',
    categoryName: 'Storage & Laundry Baskets',
    categorySlug: 'storage-laundry-baskets',
    image: '/products/gfc_wb_009.png',
    description: 'Modern coiled cotton rope hamper basket designed for nurseries, bedrooms, and clean bathroom decor.',
    specifications: [
      { key: 'Item Code', value: 'GFC-WB-009' },
      { key: 'Item Name', value: 'Cotton Rope Laundry Hamper Woven Basket' },
      { key: 'Specification', value: '16 inch x 18 inch High' },
      { key: 'Materials', value: '100% Natural Cotton Rope' },
      { key: 'MOQ', value: '200-500 pcs' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['100% Unbleached Cotton', 'Machine Washable', 'Soft & Scratch Free', 'Durable Coiled Construction']
  },

  // 2. Planters & Pots
  {
    id: 'GFC-SP-0029',
    slug: 'seagrass-planters-gfc-sp-0029',
    code: 'GFC-SP-0029',
    name: 'Seagrass Indoor & Outdoor Planters',
    category: 'planters',
    categoryName: 'Planters & Pots',
    categorySlug: 'planters-pots',
    image: '/products/gfc_sp_0029.png',
    description: 'Eco-chic woven seagrass plant basket set for indoor house plants and garden decor.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SP-0029' },
      { key: 'Item Name', value: 'Seagrass Planters' },
      { key: 'Specification', value: 'Custom Sizes (6", 8", 10", 12")' },
      { key: 'Materials', value: '100% Seagrass with Waterproof Lining' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Internal Waterproof Plastic Liner', 'Natural Plant Accent', 'Multi-size Set', 'Sustainable Harvest']
  },

  // 3. Jute Bags & Packaging
  {
    id: 'GFC-SB-011',
    slug: 'jute-shopping-bag-customize-bag-gfc-sb-011',
    code: 'GFC-SB-011',
    name: 'Jute Shopping Bag / Custom Bag',
    category: 'bags',
    categoryName: 'Jute Bags & Packaging',
    categorySlug: 'jute-bags-packaging',
    image: '/products/gfc_sb_011.png',
    description: 'Laminated heavy-duty natural jute shopping bag with padded cotton handles. Perfect for retail branding.',
    specifications: [
      { key: 'Item Code', value: 'GFC-SB-011' },
      { key: 'Item Name', value: 'Jute Shopping Bag / Customize Bag' },
      { key: 'Specification', value: 'W-45cm x 24cm Dia' },
      { key: 'Materials', value: '100% Golden Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['A-Grade Golden Jute', 'Water-Resistant Lamination', 'Padded Handles', 'Custom Screen Printing Available']
  },
  {
    id: 'GFC-TB-012',
    slug: 'jute-tote-bag-gfc-tb-012',
    code: 'GFC-TB-012, 020',
    name: 'Artisan Jute Tote Bag',
    category: 'bags',
    categoryName: 'Jute Bags & Packaging',
    categorySlug: 'jute-bags-packaging',
    image: '/products/gfc_tb_012.png',
    description: 'Stylish eco tote bag crafted from 100% natural jute fiber for daily shopping, beach, and promotional giveaways.',
    specifications: [
      { key: 'Item Code', value: 'GFC-TB-012, 020' },
      { key: 'Item Name', value: 'Tote Bag' },
      { key: 'Specification', value: '13 inch x 15 inch' },
      { key: 'Materials', value: '100% Natural Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Reusable & Eco-friendly', 'Strong Stitched Handles', 'Biodegradable', 'Export Quality']
  },
  {
    id: 'GFC-PB-008',
    slug: 'promotional-jute-bag-gfc-pb-008',
    code: 'GFC-PB-008',
    name: 'Promotional Jute Bag',
    category: 'bags',
    categoryName: 'Jute Bags & Packaging',
    categorySlug: 'jute-bags-packaging',
    image: '/products/gfc_pb_008.png',
    description: 'Compact promotional jute gift bag tailored for corporate events, tradeshows, and brand branding.',
    specifications: [
      { key: 'Item Code', value: 'GFC-PB-008' },
      { key: 'Item Name', value: 'Promotional Bag' },
      { key: 'Specification', value: '22cm x 16cm x 13cm' },
      { key: 'Materials', value: '100% Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Compact & Practical', 'Ideal for Branding', 'Strong Cotton Handles', 'Eco Choice']
  },
  {
    id: 'GFC-WB-007',
    slug: 'jute-wine-bag-gfc-wb-007',
    code: 'GFC-WB-007, 009',
    name: 'Jute Wine Bag',
    category: 'bags',
    categoryName: 'Jute Bags & Packaging',
    categorySlug: 'jute-bags-packaging',
    image: '/products/gfc_wb_007.png',
    description: 'Single and double bottle jute packaging bag with cane/rope handle and transparent cane window option.',
    specifications: [
      { key: 'Item Code', value: 'GFC-WB-007, 009' },
      { key: 'Item Name', value: 'Wine Bag' },
      { key: 'Specification', value: '38cm x 10cm x 10cm' },
      { key: 'Materials', value: '100% Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Bottle Protection Divider', 'Clear View Window Option', 'Sturdy Rope Handle', 'Gift Ready']
  },

  // 4. Home Decor & Mats
  {
    id: 'GFC-TM-004',
    slug: 'table-mat-gfc-tm-004',
    code: 'GFC-TM-004, 013',
    name: 'Braided Jute & Cotton Table Mat',
    category: 'decor',
    categoryName: 'Home Decor & Mats',
    categorySlug: 'home-decor-mats',
    image: '/products/gfc_tm_004.png',
    description: 'Circular hand-braided table placement mat combining natural jute fibers and unbleached cotton cord.',
    specifications: [
      { key: 'Item Code', value: 'GFC-TM-004, 013' },
      { key: 'Item Name', value: 'Table Mat' },
      { key: 'Specification', value: '33 cm Diameter' },
      { key: 'Materials', value: '100% Jute, Cotton Rope' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Heat Resistant Surface', 'Rustic Dining Accent', 'Hand-stitched Border', 'Washable Natural Texture']
  },
  {
    id: 'GFC-PS-009',
    slug: 'jute-rattan-placement-set-gfc-ps-009',
    code: 'GFC-PS-009',
    name: 'Jute & Rattan Placement Set',
    category: 'decor',
    categoryName: 'Home Decor & Mats',
    categorySlug: 'home-decor-mats',
    image: '/products/gfc_ps_009.png',
    description: 'Luxury handcrafted dining placemat set made from woven raw jute and natural rattan cane strips.',
    specifications: [
      { key: 'Item Code', value: 'GFC-PS-009' },
      { key: 'Item Name', value: 'Jute & Rattan Placement Set' },
      { key: 'Specification', value: 'Custom Sizes (30cm - 38cm)' },
      { key: 'Materials', value: 'Jute, Rattan' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Boho Luxury Dining', 'Rattan Frame Reinforcement', 'Natural Color Contrast', 'Handmade Artisan Finish']
  },
  {
    id: 'GFC-FM-017',
    slug: 'floor-mat-rugs-gfc-fm-017',
    code: 'GFC-FM-017, 019',
    name: 'Braided Jute Floor Rug & Mat',
    category: 'decor',
    categoryName: 'Home Decor & Mats',
    categorySlug: 'home-decor-mats',
    image: '/products/gfc_fm_017.png',
    description: 'Large round hand-braided jute area rug providing warm natural texture to modern and traditional interiors.',
    specifications: [
      { key: 'Item Code', value: 'GFC-FM-017, 019' },
      { key: 'Item Name', value: 'Floor Mat / Rugs' },
      { key: 'Specification', value: '120 cm Diameter (4 ft)' },
      { key: 'Materials', value: '100% Golden Jute' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Heavy Duty Braided Weave', 'Reversible Design', 'Sound Absorbing & Soft', 'Non-Static Natural Fiber']
  },
  {
    id: 'GFC-PH-008',
    slug: 'plant-holder-macrame-gfc-ph-008',
    code: 'GFC-PH-008, 015',
    name: 'Macrame Jute Plant Holder',
    category: 'decor',
    categoryName: 'Home Decor & Mats',
    categorySlug: 'home-decor-mats',
    image: '/products/gfc_ph_008.png',
    description: 'Boho macrame hanging plant hanger crafted with knotted natural jute twine and cotton cord.',
    specifications: [
      { key: 'Item Code', value: 'GFC-PH-008, 015' },
      { key: 'Item Name', value: 'Plant Holder / Macrame' },
      { key: 'Specification', value: 'Length 90cm - 120cm' },
      { key: 'Materials', value: '100% Jute, Cotton Rope' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Hand-knotted Macrame', 'Heavy Weight Capacity', 'Ceiling & Wall Hanging', 'Indoor & Balcony Decor']
  },

  // 5. Bamboo Crafts
  {
    id: 'GFC-BP-007',
    slug: 'bamboo-products-gfc-bp-007',
    code: 'GFC-BP-007, 012, 022, 029',
    name: 'Artisan Bamboo Products & Crafts',
    category: 'bamboo',
    categoryName: 'Bamboo Crafts',
    categorySlug: 'bamboo-crafts',
    image: '/products/gfc_bp_007.png',
    description: 'Eco-friendly bamboo trays, organizers, and kitchen accessories hand-carved from seasoned Bangladesh bamboo.',
    specifications: [
      { key: 'Item Code', value: 'GFC-BP-007, 012, 022, 029' },
      { key: 'Item Name', value: 'Bamboo Products' },
      { key: 'Specification', value: 'Custom Sizes as per Buyer Requirements' },
      { key: 'Materials', value: '100% Natural Bamboo' },
      { key: 'MOQ', value: 'Flexible' },
      { key: 'Country of Origin', value: 'Bangladesh' }
    ],
    features: ['Termite & Mold Treated', 'Food Safe Oil Finish', 'Ultra-Lightweight & Tough', '100% Sustainable']
  }
];
