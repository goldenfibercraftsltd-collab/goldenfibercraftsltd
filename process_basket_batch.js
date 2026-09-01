/**
 * Helper script to process and verify the 5 basket images once generated
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\dd1ce7ed-f608-4807-993d-e13854f01826';

const targetItems = [
  { code: 'DJB-60', baseName: 'djb_60', pattern: /djb_60.*\.jpg$/i },
  { code: 'DJB-66', baseName: 'djb_66', pattern: /djb_66.*\.jpg$/i },
  { code: 'DJB-71', baseName: 'djb_71', pattern: /djb_71.*\.jpg$/i },
  { code: 'DJB-80', baseName: 'djb_80', pattern: /djb_80.*\.jpg$/i },
  { code: 'DJB-82', baseName: 'djb_82', pattern: /djb_82.*\.jpg$/i },
];

async function syncImages() {
  const artifacts = fs.readdirSync(artifactDir);
  
  for (const item of targetItems) {
    const match = artifacts.find(f => item.pattern.test(f));
    if (match) {
      const srcPath = path.join(artifactDir, match);
      console.log(`Found generated image for ${item.code}: ${match}`);
      
      // Save 1:1 PNG in public/products
      await sharp(srcPath)
        .resize(1000, 1000, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png({ quality: 95 })
        .toFile(path.join('public/products', item.baseName + '.png'));
        
      // Save HD JPG
      await sharp(srcPath)
        .resize(1200, 1200, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality: 95 })
        .toFile(path.join('public/products', item.baseName + '_hd.jpg'));
        
      console.log(`✅ Updated public/products/${item.baseName}.png and _hd.jpg`);
    } else {
      console.log(`⏳ Waiting for ${item.code} image generation...`);
    }
  }
}

syncImages().catch(console.error);
