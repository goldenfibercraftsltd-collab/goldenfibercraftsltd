const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://goldenfibercraftsltd.com';
const TODAY = new Date().toISOString().split('T')[0];

const content = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');

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

// 2. Extract Category & Subcategory slugs
const catBlockMatch = content.match(/export const CATEGORIES: CategoryInfo\[\] = (\[[\s\S]*?\n\];)/);
const categorySlugs = [];
if (catBlockMatch) {
  const matches = [...catBlockMatch[1].matchAll(/slug:\s*['\x22]([^'\x22]+)['\x22]/g)].map(m => m[1]);
  categorySlugs.push(...new Set(matches));
}

// 3. Extract all unique Product slugs
const prodBlockMatch = content.match(/export const PRODUCTS: ProductItem\[\] = (\[[\s\S]*?\n\];)/);
const productSlugs = [];
if (prodBlockMatch) {
  const matches = [...prodBlockMatch[1].matchAll(/slug:\s*['\x22]([^'\x22]+)['\x22]/g)].map(m => m[1]);
  productSlugs.push(...new Set(matches));
}

console.log(`Building comprehensive sitemap with:`);
console.log(`- ${corePages.length} core pages`);
console.log(`- ${categorySlugs.length} category & subcategory pages`);
console.log(`- ${productSlugs.length} individual product detail pages`);

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

// Add product detail pages
for (const slug of productSlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/products/${slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.80</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

const totalUrls = corePages.length + categorySlugs.length + productSlugs.length;
console.log(`✅ Successfully generated public/sitemap.xml with ${totalUrls} verified URLs.`);
