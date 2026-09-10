const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'public', 'images', 'blog');
fs.readdirSync(blogDir).forEach(async (file) => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const meta = await sharp(path.join(blogDir, file)).metadata();
    console.log(`${file}: ${meta.width}x${meta.height}, format: ${meta.format}`);
  }
});
