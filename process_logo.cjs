const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const source = sharp('public/golden_fiber_logo.png');
  const { data, info } = await source.raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const outBuffer = Buffer.alloc(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx+1];
      const b = data[idx+2];
      
      // Check if pure/near white
      if (r > 245 && g > 245 && b > 245) {
        outBuffer[outIdx] = 0;
        outBuffer[outIdx+1] = 104;
        outBuffer[outIdx+2] = 55;
        outBuffer[outIdx+3] = 0;
      } else {
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        let alpha = Math.round((255 - gray) * (255 / 165));
        if (alpha < 0) alpha = 0;
        if (alpha > 255) alpha = 255;
        
        // Crisp rich green #006837 (G: 104, R: 0, B: 55)
        outBuffer[outIdx] = Math.min(255, Math.round(r * 0.7));
        outBuffer[outIdx+1] = Math.min(255, Math.round(g * 1.05));
        outBuffer[outIdx+2] = Math.min(255, Math.round(b * 0.8));
        outBuffer[outIdx+3] = alpha;
      }
    }
  }
  
  // Save full transparent png
  const pngFull = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .png({ quality: 100 })
    .toBuffer();
    
  // Trim transparent padding
  const trimmedFull = await sharp(pngFull)
    .trim()
    .toBuffer();
    
  const metaTrimmed = await sharp(trimmedFull).metadata();
  console.log('Trimmed dimensions:', metaTrimmed.width, 'x', metaTrimmed.height);
  
  // Full logo with small balanced padding
  await sharp(trimmedFull)
    .extend({
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100 })
    .toFile('public/logo.png');
    
  // Header version
  await sharp('public/logo.png')
    .resize({ height: 180 })
    .png({ quality: 100 })
    .toFile('public/logo-header.png');
    
  // Extract Icon Only:
  // In the original image: icon is roughly x: 50 to 280, y: 40 to 280
  const iconRaw = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: 50, top: 40, width: 235, height: 245 })
    .png()
    .toBuffer();
    
  const iconTrimmed = await sharp(iconRaw).trim().toBuffer();
  const iconMeta = await sharp(iconTrimmed).metadata();
  console.log('Icon trimmed:', iconMeta.width, 'x', iconMeta.height);
  
  await sharp(iconTrimmed)
    .extend({
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100 })
    .toFile('public/logo-icon.png');
    
  // Favicon (square)
  await sharp('public/logo-icon.png')
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');
    
  console.log('ALL ASSETS GENERATED SUCCESSFULLY!');
}

run().catch(console.error);
