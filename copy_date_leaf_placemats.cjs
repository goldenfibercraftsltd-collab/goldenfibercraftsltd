const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\ce017c72-86be-4bfa-ad8c-3e0c071e6354';
const destDir = path.resolve('public/products');

const mapping = [
  { src: 'date_leaf_placemat_one_1791640321183.jpg', dest: 'gfc_dlp_001.jpg' },
  { src: 'date_leaf_placemat_two_1791640345426.jpg', dest: 'gfc_dlp_002.jpg' },
  { src: 'date_leaf_placemat_three_1791640378567.jpg', dest: 'gfc_dlp_003.jpg' },
  { src: 'date_leaf_placemat_four_1791640407397.jpg', dest: 'gfc_dlp_004.jpg' },
  { src: 'date_leaf_placemat_five_1791640439679.jpg', dest: 'gfc_dlp_005.jpg' },
  { src: 'date_leaf_placemat_six_1791640481832.jpg', dest: 'gfc_dlp_006.jpg' },
  { src: 'date_leaf_placemat_seven_1791640517283.jpg', dest: 'gfc_dlp_007.jpg' },
  { src: 'date_leaf_placemat_eight_1791640549203.jpg', dest: 'gfc_dlp_008.jpg' },
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

mapping.forEach(item => {
  const sourcePath = path.join(brainDir, item.src);
  const targetPath = path.join(destDir, item.dest);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${item.src} -> ${item.dest} (${(fs.statSync(targetPath).size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`Source not found: ${sourcePath}`);
  }
});
