import fs from 'fs';
import path from 'path';

const generatedJsonPath = path.resolve('src/data/jute_baskets_generated.json');
const productsTsPath = path.resolve('src/data/products.ts');

const newProducts = JSON.parse(fs.readFileSync(generatedJsonPath, 'utf-8'));

console.log(`Loaded ${newProducts.length} new Jute Basket products.`);

// Read existing products.ts
let productsTsContent = fs.readFileSync(productsTsPath, 'utf-8');

// Filter out any existing products with the same IDs to avoid duplicates
const existingCodes = new Set(newProducts.map(p => p.code));

// Format new products as TypeScript objects
const tsProductsCode = newProducts.map(p => `  {
    id: ${JSON.stringify(p.id)},
    slug: ${JSON.stringify(p.slug)},
    code: ${JSON.stringify(p.code)},
    name: ${JSON.stringify(p.name)},
    category: ${JSON.stringify(p.category)},
    categoryName: ${JSON.stringify(p.categoryName)},
    categorySlug: ${JSON.stringify(p.categorySlug)},
    subCategory: ${JSON.stringify(p.subCategory)},
    image: ${JSON.stringify(p.image)},
    galleryImages: ${JSON.stringify(p.galleryImages)},
    description: ${JSON.stringify(p.description)},
    longDescription: ${JSON.stringify(p.longDescription, null, 6).replace(/\n/g, '\n    ')},
    unit: ${JSON.stringify(p.unit)},
    cbmPerCarton: ${p.cbmPerCarton},
    setPerCarton: ${p.setPerCarton},
    nwPerCtn: ${p.nwPerCtn},
    gwPerCtn: ${p.gwPerCtn},
    material: ${JSON.stringify(p.material)},
    color: ${JSON.stringify(p.color)},
    specifications: ${JSON.stringify(p.specifications, null, 6).replace(/\n/g, '\n    ')},
    features: ${JSON.stringify(p.features)}
  }`).join(',\n');

// Insert at the top of PRODUCTS array
const productsMarker = 'export const PRODUCTS: ProductItem[] = [\n';

if (productsTsContent.includes(productsMarker)) {
  productsTsContent = productsTsContent.replace(
    productsMarker,
    `${productsMarker}  // ==========================================\n  // 1. Jute Baskets (Authentic Catalogue Collection - ${newProducts.length} Products)\n  // ==========================================\n${tsProductsCode},\n\n`
  );

  fs.writeFileSync(productsTsPath, productsTsContent, 'utf-8');
  console.log(`Successfully integrated ${newProducts.length} products into src/data/products.ts!`);
} else {
  console.error('Could not find productsMarker in products.ts');
}

// Also create SQL seed for Cloudflare D1
let sqlStatements = ['-- Seed 42 Authentic Jute Baskets into D1 Products Table'];

for (const p of newProducts) {
  const specsJson = JSON.stringify(p.specifications).replace(/'/g, "''");
  const galleryJson = JSON.stringify(p.galleryImages).replace(/'/g, "''");
  const desc = p.description.replace(/'/g, "''");
  const name = p.name.replace(/'/g, "''");

  sqlStatements.push(`INSERT OR REPLACE INTO products (
    id, slug, code, name, category, subcategory, image, gallery_images, description, unit, cbm_per_carton, set_per_carton, nw_per_ctn, gw_per_ctn, material, color, specifications, is_featured, is_active, created_at, updated_at
  ) VALUES (
    '${p.id}', '${p.slug}', '${p.code}', '${name}', 'jute', 'baskets', '${p.image}', '${galleryJson}', '${desc}', '${p.unit}', ${p.cbmPerCarton}, ${p.setPerCarton}, ${p.nwPerCtn}, ${p.gwPerCtn}, '${p.material}', '${p.color}', '${specsJson}', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
  );`);
}

fs.writeFileSync(path.resolve('seed_jute_baskets.sql'), sqlStatements.join('\n'), 'utf-8');
console.log(`Successfully created seed_jute_baskets.sql with ${sqlStatements.length - 1} SQL statements!`);
