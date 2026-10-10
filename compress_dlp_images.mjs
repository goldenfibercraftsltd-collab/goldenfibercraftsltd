import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/products');
const files = [
  'gfc_dlp_001.jpg',
  'gfc_dlp_002.jpg',
  'gfc_dlp_003.jpg',
  'gfc_dlp_004.jpg',
  'gfc_dlp_005.jpg',
  'gfc_dlp_006.jpg',
  'gfc_dlp_007.jpg',
  'gfc_dlp_008.jpg'
];

async function run() {
  for (const f of files) {
    const p = path.join(dir, f);
    const buf = fs.readFileSync(p);
    const compressed = await sharp(buf)
      .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(p, compressed);
    console.log(`Compressed ${f}: ${(buf.length / 1024).toFixed(1)} KB -> ${(compressed.length / 1024).toFixed(1)} KB`);
  }
}

run().catch(console.error);
