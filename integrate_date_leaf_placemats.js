import fs from 'fs';
import path from 'path';

const generatedJsonPath = path.resolve('src/data/date_leaf_placemats_new.json');
const productsTsPath = path.resolve('src/data/products.ts');

const newProducts = JSON.parse(fs.readFileSync(generatedJsonPath, 'utf-8'));

console.log(`Loaded ${newProducts.length} new Date Leaf Placemat products.`);

let productsTsContent = fs.readFileSync(productsTsPath, 'utf-8');

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

// Find marker to insert: right before or after GFC-DPM-001 or at productsMarker
const targetMarker = '"id": "GFC-DPM-001",';

if (productsTsContent.includes(targetMarker)) {
  const markerIdx = productsTsContent.indexOf(targetMarker);
  // Find start of this object '{'
  const objStart = productsTsContent.lastIndexOf('{', markerIdx);
  
  // Insert before GFC-DPM-001
  const before = productsTsContent.substring(0, objStart);
  const after = productsTsContent.substring(objStart);
  
  const updated = `${before}// Date Leaf Placemats (8 New Authentic Products)\n${tsProductsCode},\n  ${after}`;
  fs.writeFileSync(productsTsPath, updated, 'utf-8');
  console.log(`Successfully integrated ${newProducts.length} Date Leaf Placemats into src/data/products.ts!`);
} else {
  console.error('Target marker not found!');
}
