import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\04322abd-49af-404c-8580-714d028c8c15';
const destDir = path.join(process.cwd(), 'public', 'images', 'blog');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mappings = [
  {
    src: 'featured_jute_basket_1788809679602.jpg',
    dest: 'featured-jute-basket-manufacturer-bangladesh.jpg'
  },
  {
    src: 'artisan_stitching_basket_1788809707580.jpg',
    dest: 'bangladeshi-artisan-stitching-coiled-jute-basket.jpg'
  },
  {
    src: 'nested_jute_baskets_1788809730649.jpg',
    dest: 'nested-set-of-3-jute-storage-baskets-wholesale.jpg'
  }
];

for (const m of mappings) {
  const srcPath = path.join(brainDir, m.src);
  const destPath = path.join(destDir, m.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${m.src} -> ${destPath}`);
  } else {
    console.error(`Not found: ${srcPath}`);
  }
}
