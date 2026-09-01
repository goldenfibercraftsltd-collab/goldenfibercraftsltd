const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createPerfectLogo() {
  const artifactDir = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\dd1ce7ed-f608-4807-993d-e13854f01826';
  
  // 1. Load source image and convert to transparent raw RGBA with perfect alpha thresholding
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
      
      // Clean near-white pixels to transparent
      if (r > 240 && g > 240 && b > 240) {
        outBuffer[outIdx] = 14;
        outBuffer[outIdx+1] = 115;
        outBuffer[outIdx+2] = 30;
        outBuffer[outIdx+3] = 0;
      } else {
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        let alpha = Math.round((255 - gray) * (255 / 165));
        if (alpha < 0) alpha = 0;
        if (alpha > 255) alpha = 255;
        
        // Deep natural forest emerald green (RGB: 14, 115, 30 -> #0e731e)
        outBuffer[outIdx] = Math.min(255, Math.round(r * 0.75));
        outBuffer[outIdx+1] = Math.min(255, Math.round(g * 1.05));
        outBuffer[outIdx+2] = Math.min(255, Math.round(b * 0.8));
        outBuffer[outIdx+3] = alpha;
      }
    }
  }
  
  const fullTransparent = await sharp(outBuffer, { raw: { width, height, channels: 4 } }).png().toBuffer();
  
  // 2. Extract components using safe bounds:
  const iconRaw = await sharp(fullTransparent)
    .extract({ left: 50, top: 45, width: 230, height: 235 })
    .png()
    .toBuffer();
  const iconTrimmed = await sharp(iconRaw).trim().png().toBuffer();
    
  const line1Raw = await sharp(fullTransparent)
    .extract({ left: 310, top: 110, width: 660, height: 85 })
    .png()
    .toBuffer();
  const line1Trimmed = await sharp(line1Raw).trim().png().toBuffer();
    
  const line2Raw = await sharp(fullTransparent)
    .extract({ left: 420, top: 200, width: 450, height: 75 })
    .png()
    .toBuffer();
  const line2Trimmed = await sharp(line2Raw).trim().png().toBuffer();
    
  const iconMeta = await sharp(iconTrimmed).metadata();
  const line1Meta = await sharp(line1Trimmed).metadata();
  const line2Meta = await sharp(line2Trimmed).metadata();
  
  // 3. Super-Scale Factor for Ultra High Quality (4X Super-sampling):
  const SCALE = 4;
  
  // Upscale Icon (exact identical shape & proportions)
  const iconHighRes = await sharp(iconTrimmed)
    .resize(iconMeta.width * SCALE, iconMeta.height * SCALE, {
      kernel: sharp.kernel.lanczos3
    })
    .png()
    .toBuffer();
  const iconHighResMeta = await sharp(iconHighRes).metadata();
  
  // Upscale Line 1 (GOLDEN FIBER - 100% base size * SCALE)
  const line1HighRes = await sharp(line1Trimmed)
    .resize(line1Meta.width * SCALE, line1Meta.height * SCALE, {
      kernel: sharp.kernel.lanczos3
    })
    .png()
    .toBuffer();
  const line1HighResMeta = await sharp(line1HighRes).metadata();
  
  // Upscale Line 2 (CRAFTS LTD - EXACTLY 80% of current size, 20% reduction)
  const line2TargetWidth = Math.round(line2Meta.width * SCALE * 0.80);
  const line2TargetHeight = Math.round(line2Meta.height * SCALE * 0.80);
  
  const line2HighRes = await sharp(line2Trimmed)
    .resize(line2TargetWidth, line2TargetHeight, {
      kernel: sharp.kernel.lanczos3
    })
    .png()
    .toBuffer();
  const line2HighResMeta = await sharp(line2HighRes).metadata();
  
  // 4. Tighten the middle gap between Icon and Text:
  const iconTextGap = Math.round(18 * SCALE); 
  const lineVerticalGap = Math.round(16 * SCALE);
  
  const textBlockWidth = line1HighResMeta.width;
  const textBlockHeight = line1HighResMeta.height + lineVerticalGap + line2HighResMeta.height;
  
  const totalContentWidth = iconHighResMeta.width + iconTextGap + textBlockWidth;
  const totalContentHeight = Math.max(iconHighResMeta.height, textBlockHeight);
  
  const canvasWidth = totalContentWidth;
  const canvasHeight = totalContentHeight;
  
  // Icon position (vertically centered)
  const iconLeft = 0;
  const iconTop = Math.round((totalContentHeight - iconHighResMeta.height) / 2);
  
  // Text block position (vertically centered relative to content height)
  const textBlockLeft = iconHighResMeta.width + iconTextGap;
  const textBlockTop = Math.round((totalContentHeight - textBlockHeight) / 2);
  
  // Line 1 top and left
  const line1Left = textBlockLeft;
  const line1Top = textBlockTop;
  
  // Line 2 (CRAFTS LTD) centered horizontally relative to Line 1
  const line2Left = textBlockLeft + Math.round((line1HighResMeta.width - line2HighResMeta.width) / 2);
  const line2Top = textBlockTop + line1HighResMeta.height + lineVerticalGap;
  
  const finalHighResBuffer = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: iconHighRes, left: iconLeft, top: iconTop },
    { input: line1HighRes, left: line1Left, top: line1Top },
    { input: line2HighRes, left: line2Left, top: line2Top }
  ])
  .png({ quality: 100, compressionLevel: 9 })
  .toBuffer();
  
  // 100% strict trim with 0 top and 0 bottom margin
  const finalMaster = await sharp(finalHighResBuffer).trim().png({ quality: 100 }).toBuffer();
    
  const masterMeta = await sharp(finalMaster).metadata();
  console.log('Master Logo Dimensions (Exact 0 margin):', masterMeta.width, 'x', masterMeta.height);
  
  // 5. Save Artifact Files for user inspection:
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }
  
  const artifactPath = path.join(artifactDir, 'golden_fiber_crafts_logo_final.png');
  fs.writeFileSync(artifactPath, finalMaster);
  
  // High-contrast preview on clean white
  const whiteBgPreview = await sharp(finalMaster)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png({ quality: 100 })
    .toBuffer();
  const artifactWhitePath = path.join(artifactDir, 'golden_fiber_crafts_logo_preview.png');
  fs.writeFileSync(artifactWhitePath, whiteBgPreview);
  
  // 6. Update project public files:
  const standardLogo = await sharp(finalMaster)
    .resize({ width: 1200 })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync('public/logo.png', standardLogo);
  
  const headerLogo = await sharp(finalMaster)
    .resize({ height: 220 })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync('public/logo-header.png', headerLogo);
  
  const iconClean = await sharp(iconHighRes).trim().png({ quality: 100 }).toBuffer();
  fs.writeFileSync('public/logo-icon.png', iconClean);
  
  const favicon = await sharp(iconHighRes)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon.png', favicon);
  
  const base64Data = finalMaster.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${masterMeta.width} ${masterMeta.height}" width="100%" height="100%">
  <image href="data:image/png;base64,${base64Data}" width="${masterMeta.width}" height="${masterMeta.height}" />
</svg>`;
  fs.writeFileSync('public/logo.svg', svgContent);
  fs.writeFileSync('public/logo-header.svg', svgContent);

  console.log('SUCCESS: Exact 0-margin master logo created!');
}

createPerfectLogo().catch(console.error);
