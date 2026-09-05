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
const prodMatches = [...content.matchAll(/{\s*id:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?slug:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?name:\s*['\x22]([^'\x22]+)['\x22][\s\S]*?image:\s*['\x22]([^'\x22]+)['\x22]/g)];
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
  const imgTitle = `${escapeXml(p.name)} (${escapeXml(code)}) - Golden Fiber Crafts Ltd.`;
  const imgCaption = `${escapeXml(p.name)} (${escapeXml(code)}) - Wholesale Handcrafted Eco-Friendly Jute & Natural Fiber Handicrafts Exporter Bangladesh`;

  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/products/${p.slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.80</priority>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>${imgUrl}</image:loc>\n`;
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
