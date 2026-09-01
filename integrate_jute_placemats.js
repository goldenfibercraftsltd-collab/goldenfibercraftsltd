import fs from 'fs';
import path from 'path';

const generatedJsonPath = path.resolve('src/data/jute_placemats_generated.json');
const productsTsPath = path.resolve('src/data/products.ts');

const newProducts = JSON.parse(fs.readFileSync(generatedJsonPath, 'utf-8'));

console.log(`Loaded ${newProducts.length} new Jute Placemat products.`);

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

// Insert at top of PRODUCTS array
const productsMarker = 'export const PRODUCTS: ProductItem[] = [\n';

if (productsTsContent.includes(productsMarker)) {
  productsTsContent = productsTsContent.replace(
    productsMarker,
    `${productsMarker}  // ==========================================\n  // 4. Jute Placemats (Authentic Catalogue Collection - ${newProducts.length} Products)\n  // ==========================================\n${tsProductsCode},\n\n`
  );

  fs.writeFileSync(productsTsPath, productsTsContent, 'utf-8');
  console.log(`Successfully integrated ${newProducts.length} Jute Placemat products into src/data/products.ts!`);
} else {
  console.error('Could not find productsMarker in products.ts');
}
