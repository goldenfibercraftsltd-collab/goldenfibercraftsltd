// seed_real_categories.js
const { execSync } = require('child_process');
const fs = require('fs');

const categories = [
  {
    name: 'Jute',
    slug: 'jute',
    description: 'Eco-friendly golden jute fiber baskets, bags, mats, placemats, poufs & macrames.',
    icon: 'Package',
    display_order: 1,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'jute-baskets' },
      { id: 'bags', name: 'Bags', slug: 'jute-bags' },
      { id: 'floor-mats', name: 'Floor Mats', slug: 'jute-floor-mats' },
      { id: 'placemats', name: 'Placemats', slug: 'jute-placemats' },
      { id: 'poufs', name: 'Poufs', slug: 'jute-poufs' },
      { id: 'macrames', name: 'Macrames', slug: 'jute-macrames' }
    ])
  },
  {
    name: 'Seagrass',
    slug: 'seagrass',
    description: 'Durable coastal seagrass baskets, planters, floor mats, placemats, poufs & trays.',
    icon: 'Leaf',
    display_order: 2,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'seagrass-baskets' },
      { id: 'planters', name: 'Planters', slug: 'seagrass-planters' },
      { id: 'floor-mats', name: 'Floor Mats', slug: 'seagrass-floor-mats' },
      { id: 'placemats', name: 'Placemats', slug: 'seagrass-placemats' },
      { id: 'trays', name: 'Trays', slug: 'seagrass-trays' }
    ])
  },
  {
    name: 'Kans Grass',
    slug: 'kans-grass',
    description: 'Natural Kans (Kaisa) wild grass handwoven baskets, table placemats, and decorative serving trays.',
    icon: 'Trees',
    display_order: 3,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'kans-grass-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'kans-grass-placemats' },
      { id: 'trays', name: 'Trays', slug: 'kans-grass-trays' }
    ])
  },
  {
    name: 'Date Leaf',
    slug: 'date-leaf',
    description: 'Traditional Bangladesh date palm leaf braided hampers, placemats, and utility storage trays.',
    icon: 'Leaf',
    display_order: 4,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'date-leaf-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'date-leaf-placemats' },
      { id: 'trays', name: 'Trays', slug: 'date-leaf-trays' }
    ])
  },
  {
    name: 'Rattan',
    slug: 'rattan',
    description: 'Premium rattan cane woven furniture, wall mirrors, storage baskets, and decorative wall shelves.',
    icon: 'Package',
    display_order: 5,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'rattan-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'rattan-placemats' },
      { id: 'furnitures', name: 'Furnitures', slug: 'rattan-furnitures' },
      { id: 'mirrors', name: 'Mirrors', slug: 'rattan-mirrors' }
    ])
  },
  {
    name: 'Bamboo',
    slug: 'bamboo',
    description: 'Sustainable split bamboo hampers, storage baskets, and eco-friendly home furniture.',
    icon: 'Trees',
    display_order: 6,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'bamboo-baskets' },
      { id: 'furnitures', name: 'Furnitures', slug: 'bamboo-furnitures' }
    ])
  },
  {
    name: 'Palm Fiber',
    slug: 'palm-fiber',
    description: 'Rugged natural palm fiber utility storage baskets and heat-resistant table placemats.',
    icon: 'Leaf',
    display_order: 7,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'palm-fiber-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'palm-fiber-placemats' }
    ])
  },
  {
    name: 'Water Hyacinth',
    slug: 'water-hyacinth',
    description: 'Soft braided aquatic water hyacinth storage baskets and natural dining table placemats.',
    icon: 'Sparkles',
    display_order: 8,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'water-hyacinth-baskets' },
      { id: 'placemats', name: 'Placemats', slug: 'water-hyacinth-placemats' }
    ])
  },
  {
    name: 'Rugs',
    slug: 'rugs',
    description: 'Hand-braided Jhuta rugs, jute floor rugs, and soft organic cotton rugs.',
    icon: 'Sparkles',
    display_order: 9,
    subcategories: JSON.stringify([
      { id: 'jute-rugs', name: 'Jute Rugs', slug: 'jute-rugs' },
      { id: 'jhuta-rugs', name: 'Jhuta Rugs', slug: 'jhuta-rugs' },
      { id: 'cotton-rugs', name: 'Cotton Rugs', slug: 'cotton-rugs' }
    ])
  },
  {
    name: 'Recycle Fabric',
    slug: 'recycle-fabric',
    description: 'Upcycled textile and fabric braided storage baskets & eco hampers.',
    icon: 'ShoppingBag',
    display_order: 10,
    subcategories: JSON.stringify([
      { id: 'baskets', name: 'Baskets', slug: 'recycle-fabric-baskets' }
    ])
  }
];

let sql = `DELETE FROM categories;\n`;
categories.forEach((cat, index) => {
  const id = index + 1;
  const escapedName = cat.name.replace(/'/g, "''");
  const escapedDesc = cat.description.replace(/'/g, "''");
  const escapedSub = cat.subcategories.replace(/'/g, "''");
  sql += `INSERT INTO categories (id, name, slug, description, icon, display_order, is_active, subcategories) VALUES (${id}, '${escapedName}', '${cat.slug}', '${escapedDesc}', '${cat.icon}', ${cat.display_order}, 1, '${escapedSub}');\n`;
});

fs.writeFileSync('seed_categories.sql', sql);
console.log('Generated seed_categories.sql successfully.');
