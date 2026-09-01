import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MATERIALS_DIR = path.join(process.cwd(), 'public', 'materials');
const QUALITY = 75;
const MAX_WIDTH = 800;

async function compressImages() {
  const files = fs.readdirSync(MATERIALS_DIR);
  const jpgFiles = files.filter(f => /\.(jpg|jpeg)$/i.test(f) && !f.startsWith('orig_'));
  
  console.log(`Found ${jpgFiles.length} JPG files to compress...`);
  
  let totalSaved = 0;
  
  for (const file of jpgFiles) {
    const filePath = path.join(MATERIALS_DIR, file);
    const tmpPath = filePath + '.tmp';
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    if (originalSize < 100 * 1024) {
      console.log(`  SKIP ${file} (${(originalSize / 1024).toFixed(0)}KB - already small)`);
      continue;
    }
    
    try {
      // Read entire file into buffer first to avoid file locking
      const inputBuffer = fs.readFileSync(filePath);
      
      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();
      
      // Write to temp then rename
      fs.writeFileSync(tmpPath, outputBuffer);
      fs.unlinkSync(filePath);
      fs.renameSync(tmpPath, filePath);
      
      const newSize = outputBuffer.length;
      const saved = originalSize - newSize;
      totalSaved += saved;
      
      console.log(`  ✅ ${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
    } catch (err) {
      console.log(`  ❌ ${file}: ${err.message}`);
      try { fs.unlinkSync(tmpPath); } catch {}
    }
  }
  
  console.log(`\n🎉 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

compressImages().catch(console.error);
