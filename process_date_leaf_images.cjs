const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\f5a9e429-eb73-4810-9617-7de0a02ed691';
const targetDir = path.join(__dirname, 'public', 'products');

const mapping = [
  { srcPrefix: 'date_leaf_basket_1_', dest: 'gfc_dlb_001.jpg' },
  { srcPrefix: 'date_leaf_basket_2_', dest: 'gfc_dlb_002.jpg' },
  { srcPrefix: 'date_leaf_basket_3_', dest: 'gfc_dlb_003.jpg' },
  { srcPrefix: 'date_leaf_basket_4_', dest: 'gfc_dlb_004.jpg' },
  { srcPrefix: 'date_leaf_basket_5_', dest: 'gfc_dlb_005.jpg' },
  { srcPrefix: 'date_leaf_basket_6_', dest: 'gfc_dlb_006.jpg' },
  { srcPrefix: 'date_leaf_basket_7_', dest: 'gfc_dlb_007.jpg' },
  { srcPrefix: 'date_leaf_basket_8_', dest: 'gfc_dlb_008.jpg' },
  { srcPrefix: 'date_leaf_basket_9_', dest: 'gfc_dlb_009.jpg' },
];

async function run() {
  const allFiles = fs.readdirSync(brainDir);

  for (const item of mapping) {
    const matched = allFiles.find(f => f.startsWith(item.srcPrefix));
    if (!matched) {
      console.error(`Could not find image matching prefix: ${item.srcPrefix}`);
      continue;
    }

    const srcPath = path.join(brainDir, matched);
    const destPath = path.join(targetDir, item.dest);

    const buf = fs.readFileSync(srcPath);
    await sharp(buf)
      .resize({ width: 1000, height: 1000, fit: 'inside' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(destPath);

    const stats = fs.statSync(destPath);
    console.log(`Processed ${item.dest} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
}

run().catch(console.error);
