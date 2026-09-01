import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\509c4635-2eab-4e77-8fdc-bcbfef73a279';
const publicDir = 'c:\\My coding\\GoldenFiberCraftsLtd\\public\\products';

const mappings = [
  { src: 'bjc_07_new_1787843998994.jpg', dest: 'bjc_07.png' },
  { src: 'bjc_10_new_1787844026650.jpg', dest: 'bjc_10.png' },
  { src: 'bjc_11_new_1787844058342.jpg', dest: 'bjc_11.png' },
];

for (const { src, dest } of mappings) {
  const srcPath = path.join(artifactsDir, src);
  const destPath = path.join(publicDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Replaced ${dest} from ${src}`);
  } else {
    console.error(`❌ Source not found: ${srcPath}`);
  }
}
