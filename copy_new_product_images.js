import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\e08d83d0-f154-43e3-88fa-f7a379d0144a';
const publicDir = 'c:\\My coding\\GoldenFiberCraftsLtd\\public\\products';
const distDir = 'c:\\My coding\\GoldenFiberCraftsLtd\\dist\\products';

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const files = fs.readdirSync(artifactsDir);

const mapping = {
  djb_50: 'djb_50.png',
  djb_65: 'djb_65.png',
  djb_14: 'djb_14.png',
  bdf_44: 'bdf_44.png',
  bdf_45: 'bdf_45.png',
  bdh_171: 'bdh_171.png',
  bdh_172: 'bdh_172.png',
  djb_36: 'djb_36.png',
  djb_37: 'djb_37.png',
  djb_04: 'djb_04.png',
  djb_07: 'djb_07.png',
  djb_61: 'djb_61.png',
};

for (const [key, targetName] of Object.entries(mapping)) {
  const match = files.filter(f => f.startsWith(key) && f.endsWith('.jpg')).sort().pop();
  if (match) {
    const srcPath = path.join(artifactsDir, match);
    const destPublic = path.join(publicDir, targetName);
    const destDist = path.join(distDir, targetName);
    fs.copyFileSync(srcPath, destPublic);
    fs.copyFileSync(srcPath, destDist);
    console.log(`Copied ${match} -> ${targetName}`);
  } else {
    console.log(`Could not find file for ${key}`);
  }
}
