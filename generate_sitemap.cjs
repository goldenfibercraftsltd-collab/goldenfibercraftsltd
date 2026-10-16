const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://goldenfibercraftsltd.com';
const TODAY = new Date().toISOString().split('T')[0];

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 1. Core static company pages
const corePages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/products', priority: '0.9', changefreq: 'daily' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },
  { url: '/jute-bag-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-bag-manufacturer-bangladesh.jpg', title: 'Custom Jute Bag Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-stitching-jute-bag.jpg', title: 'Bangladeshi Artisan Stitching Jute Bags' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-tote-bags-wholesale-display.jpg', title: 'Custom Jute Tote Bags Wholesale Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-tosha-jute-fiber-inspection-bangladesh.jpg', title: 'Raw Tosha Jute Fiber Inspection Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-bag-quality-control-moisture-inspection.jpg', title: 'Jute Bag Quality Control and Moisture Inspection' }
  ]},
  { url: '/jute-basket-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-basket-manufacturer-bangladesh.jpg', title: 'Custom Jute Basket Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-stitching-coiled-jute-basket.jpg', title: 'Bangladeshi Artisan Stitching Coiled Jute Basket' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/nested-set-of-3-jute-storage-baskets-wholesale.jpg', title: 'Nested Set of 3 Jute Storage Baskets Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-tosha-jute-fiber-inspection-bangladesh.jpg', title: 'Raw Tosha Jute Fiber Inspection Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-basket-quality-control-moisture-inspection.jpg', title: 'Jute Basket Quality Control Moisture Inspection' }
  ]},
  { url: '/jute-floor-mat-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-floor-mat-manufacturer-bangladesh.jpg', title: 'Custom Jute Floor Mats Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-jute-floor-mat.jpg', title: 'Bangladeshi Artisan Weaving Jute Floor Mat' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-floor-mats-wholesale-display.jpg', title: 'Custom Jute Floor Mats Wholesale Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-jute-fiber-grading-floor-mats-bangladesh.jpg', title: 'Raw Golden Jute Bast Fiber Grading Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-floor-mat-quality-control-moisture-inspection.jpg', title: 'Jute Floor Mat Quality Control Moisture Meter Inspection' }
  ]},
  { url: '/jute-placemat-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-placemat-manufacturer-bangladesh.jpg', title: 'Custom Jute Placemat Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-jute-placemat.jpg', title: 'Bangladeshi Artisan Weaving Jute Placemat' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-placemats-wholesale-display.jpg', title: 'Custom Jute Placemats Wholesale Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-jute-fiber-grading-placemats-bangladesh.jpg', title: 'Raw Golden Jute Bast Fiber Grading Placemats Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-placemat-quality-control-moisture-inspection.jpg', title: 'Jute Placemat Quality Control Moisture Meter Inspection' }
  ]},
  { url: '/seagrass-planter-basket-manufacturer-netherlands', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-seagrass-planter-basket-manufacturer-netherlands.jpg', title: 'Custom Seagrass Planter Basket Manufacturer Wholesale Netherlands' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-seagrass-planter.jpg', title: 'Bangladeshi Artisan Weaving Seagrass Planter Basket' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-seagrass-planters-wholesale-display.jpg', title: 'Custom Seagrass Planters Wholesale Catalog Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-coastal-seagrass-fiber-grading-bangladesh.jpg', title: 'Raw Coastal Seagrass Fiber Grading Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/seagrass-planter-quality-control-moisture-inspection.jpg', title: 'Seagrass Planter Quality Control and Moisture Meter Inspection' }
  ]},
  { url: '/kaisa-grass-basket-manufacturer-netherlands', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-kaisa-grass-basket-manufacturer-netherlands.jpg', title: 'Custom Kaisa Grass Basket Manufacturer Wholesale Netherlands & Europe' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-wild-kaisa-grass-fiber-harvest-bangladesh.jpg', title: 'Raw Wild Kaisa Grass Fiber Harvest Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-kaisa-grass-basket.jpg', title: 'Bangladeshi Artisan Weaving Kaisa Grass Storage Basket' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/kaisa-grass-basket-quality-control-moisture-inspection.jpg', title: 'Kaisa Grass Basket Quality Control Moisture Inspection' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-kaisa-grass-baskets-wholesale-display.jpg', title: 'Custom Kaisa Grass Baskets Wholesale Export Display' }
  ]},
  { url: '/jute-pouf-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-pouf-manufacturer-bangladesh.jpg', title: 'Custom Jute Pouf Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-jute-pouf.jpg', title: 'Bangladeshi Artisan Hand Stitching Braided Jute Pouf' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-poufs-wholesale-display.jpg', title: 'Custom Jute Poufs Wholesale Showroom Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-pouf-quality-control-moisture-inspection.jpg', title: 'Jute Pouf Quality Control and Moisture Meter Inspection' }
  ]},
  { url: '/jute-lampshade-manufacturer-uk-netherlands', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-lampshade-manufacturer-uk-netherlands.jpg', title: 'Custom Jute Lampshade Manufacturer Wholesale UK & Netherlands' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-jute-lampshade.jpg', title: 'Bangladeshi Artisan Weaving Jute Lampshade Wireframe' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-lampshades-wholesale-display.jpg', title: 'Custom Jute Lampshades Wholesale Export Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-lampshade-quality-control-moisture-inspection.jpg', title: 'Jute Lampshade Quality Control Moisture Testing' }
  ]},
  { url: '/jute-macrame-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-jute-macrame-manufacturer-bangladesh.jpg', title: 'Custom Jute Macrame Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-knotting-jute-macrame.jpg', title: 'Bangladeshi Artisan Hand Knotting Jute Macrame Wall Hanging' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-jute-macrames-wholesale-display.jpg', title: 'Custom Jute Macrame Wall Hangings and Plant Hangers Wholesale Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/jute-macrame-quality-control-moisture-inspection.jpg', title: 'Jute Macrame Quality Control and Moisture Meter Inspection' }
  ]},
  { url: '/date-palm-leaf-placemat-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-date-palm-leaf-placemat-manufacturer-bangladesh.jpg', title: 'Custom Date Palm Leaf Placemats Manufacturer in Bangladesh Wholesale' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-date-palm-leaf-placemat.jpg', title: 'Bangladeshi Artisan Hand Weaving Date Palm Leaf Placemat' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-date-palm-leaf-placemats-wholesale-display.jpg', title: 'Custom Date Palm Leaf Placemats and Chargers Wholesale Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/raw-date-palm-leaf-fronds-sun-curing-bangladesh.jpg', title: 'Raw Wild Date Palm Leaf Fronds Sun Curing in Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/date-palm-leaf-placemat-quality-control-moisture-inspection.jpg', title: 'Date Palm Leaf Placemat Quality Control and Moisture Meter Inspection' }
  ]},
  { url: '/seagrass-basket-manufacturer-bangladesh', priority: '0.95', changefreq: 'weekly', images: [
    { loc: 'https://goldenfibercraftsltd.com/images/blog/featured-seagrass-basket-manufacturer-bangladesh.jpg', title: 'Handcrafted Seagrass Basket Manufacturer Wholesale Storage Baskets Bangladesh' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/bangladeshi-artisan-weaving-seagrass-basket.jpg', title: 'Bangladeshi Artisan Hand Weaving Seagrass Storage Basket' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/custom-seagrass-storage-baskets-wholesale-display.jpg', title: 'Custom Seagrass Storage Baskets Wholesale Export Showroom Display' },
    { loc: 'https://goldenfibercraftsltd.com/images/blog/seagrass-basket-quality-control-moisture-inspection.jpg', title: 'Seagrass Basket Quality Control and Moisture Meter Inspection' }
  ]},
  { url: '/about', priority: '0.8', changefreq: 'weekly' },
  { url: '/materials', priority: '0.8', changefreq: 'weekly' },
  { url: '/infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/sustainability', priority: '0.8', changefreq: 'weekly' },
  { url: '/quality', priority: '0.8', changefreq: 'weekly' },
  { url: '/clients', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/terms', priority: '0.5', changefreq: 'monthly' },
];

const content = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');

// 2. Extract Category & Subcategory slugs
const catBlockMatch = content.match(/export const CATEGORIES: CategoryInfo\[\] = (\[[\s\S]*?\n\];)/);
const categorySlugs = [];
if (catBlockMatch) {
  const matches = [...catBlockMatch[1].matchAll(/slug:\s*['\x22]([^'\x22]+)['\x22]/g)].map(m => m[1]);
  categorySlugs.push(...new Set(matches));
}

// 3. Collect all products from JSON files and products.ts
const productsMap = new Map();

// Read from JSON files
const dataDir = path.join(__dirname, 'src', 'data');
const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('_generated.json'));

for (const f of jsonFiles) {
  try {
    const list = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
    if (Array.isArray(list)) {
      for (const p of list) {
        if (p.slug && !productsMap.has(p.slug)) {
          productsMap.set(p.slug, p);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading ${f}:`, err.message);
  }
}

// Also scan products.ts for any additional items
const prodMatches = [...content.matchAll(/{\s*["']?id["']?\s*:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?["']?slug["']?\s*:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?["']?name["']?\s*:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?["']?image["']?\s*:\s*['\x22]([^'\x22]+)['\x22]/g)];
for (const m of prodMatches) {
  const id = m[1];
  const slug = m[2];
  const name = m[3];
  const image = m[4];
  if (slug && !productsMap.has(slug)) {
    productsMap.set(slug, { id, slug, name, image, code: id });
  }
}

const allProducts = Array.from(productsMap.values());

console.log(`Building comprehensive Google Image Sitemap with:`);
console.log(`- ${corePages.length} core pages`);
console.log(`- ${categorySlugs.length} category & subcategory pages`);
console.log(`- ${allProducts.length} product pages with rich Google Image metadata`);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Add core pages
for (const p of corePages) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}${p.url}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  if (p.images && p.images.length > 0) {
    for (const img of p.images) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n`;
}

// Add category pages
for (const slug of categorySlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/categories/${slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.85</priority>\n`;
  xml += `  </url>\n`;
}

// Add product detail pages with Google Image Sitemap tags
for (const p of allProducts) {
  const code = p.code || p.id || '';
  const imgUrl = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image}`;
  const imgTitle = escapeXml(`${p.name} (${code}) - Golden Fiber Crafts Ltd.`);
  const imgCaption = escapeXml(`${p.name} (${code}) - Wholesale Handcrafted Eco-Friendly Jute & Natural Fiber Handicrafts Exporter Bangladesh`);

  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/products/${escapeXml(p.slug)}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.80</priority>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>${escapeXml(imgUrl)}</image:loc>\n`;
  xml += `      <image:title>${imgTitle}</image:title>\n`;
  xml += `      <image:caption>${imgCaption}</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

const totalUrls = corePages.length + categorySlugs.length + allProducts.length;
console.log(`✅ Successfully generated public/sitemap.xml with ${totalUrls} verified URLs and Google Image sitemaps!`);
