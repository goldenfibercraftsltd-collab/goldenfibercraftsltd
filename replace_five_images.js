import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\509c4635-2eab-4e77-8fdc-bcbfef73a279';
const publicDir = 'c:\\My coding\\GoldenFiberCraftsLtd\\public\\products';

const mappings = [
  { src: 'djb_81_new_1787841276375.jpg', dest: 'djb_81.png' },
  { src: 'djb_08_new_1787841309921.jpg', dest: 'djb_08.png' },
  { src: 'djb_85_new_1787841394298.jpg', dest: 'djb_85.png' },
  { src: 'djb_84_new_1787841445877.jpg', dest: 'djb_84.png' },
  { src: 'djb_61_0_new_1787841474613.jpg', dest: 'djb_61_0.png' },
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
