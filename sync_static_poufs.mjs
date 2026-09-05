import fs from 'fs';
import path from 'path';

const poufsJsonPath = path.resolve('src/data/jute_poufs_generated.json');
const productsTsPath = path.resolve('src/data/products.ts');

const codes = ['BJP-01', 'BJP-02', 'BJP-05', 'BJP-06', 'BJP-07', 'BJP-08', 'BJP-09', 'BJP-10', 'GFC-JP-001'];

// 1. Update jute_poufs_generated.json
if (fs.existsSync(poufsJsonPath)) {
  const poufs = JSON.parse(fs.readFileSync(poufsJsonPath, 'utf8'));
  for (const item of poufs) {
    if (codes.includes(item.code)) {
      const baseName = item.code.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      item.image = `/products/${baseName}.jpg`;
      item.galleryImages = [`/products/${baseName}.jpg`, `/products/${baseName}.png`];
    }
  }
  fs.writeFileSync(poufsJsonPath, JSON.stringify(poufs, null, 2));
  console.log('✅ Updated src/data/jute_poufs_generated.json');
}

// 2. Update products.ts
if (fs.existsSync(productsTsPath)) {
  let content = fs.readFileSync(productsTsPath, 'utf8');
  for (const code of codes) {
    const baseName = code.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    // Replace "/products/bjp_XX.png" with "/products/bjp_XX.jpg"
    const oldImgRegex = new RegExp(`"image": "\\/products\\/${baseName}\\.(png|jpg)"`, 'g');
    content = content.replace(oldImgRegex, `"image": "/products/${baseName}.jpg"`);
  }
  fs.writeFileSync(productsTsPath, content);
  console.log('✅ Updated src/data/products.ts');
}
