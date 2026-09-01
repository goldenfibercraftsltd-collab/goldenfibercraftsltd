import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\509c4635-2eab-4e77-8fdc-bcbfef73a279';
const publicDir = 'c:\\My coding\\GoldenFiberCraftsLtd\\public\\products';

const mappings = [
  { src: 'bcc_05_new_1787843049974.jpg', dest: 'bcc_05.png' },
  { src: 'bcc_06_new_1787843114239.jpg', dest: 'bcc_06.png' },
  { src: 'bjc_01_new_1787843161843.jpg', dest: 'bjc_01.png' },
  { src: 'bjc_04_new_1787843223614.jpg', dest: 'bjc_04.png' },
  { src: 'bjc_06_new_1787843286805.jpg', dest: 'bjc_06.png' },
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
