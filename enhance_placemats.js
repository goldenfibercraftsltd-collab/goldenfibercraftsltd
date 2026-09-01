import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/products');

async function enhancePlacemats() {
  const placematFiles = [
    'bjm_01.png', 'bjm_02.png', 'bjm_03.png', 'bjm_04.png',
    'bjm_06.png', 'bjm_07.png', 'bjm_11.png', 'bjm_08.png',
    'djm_21.png', 'bjm_22.png'
  ];

  for (const file of placematFiles) {
    const filePath = path.join(outDir, file);
    if (!fs.existsSync(filePath)) continue;

    // Load original cropped image
    const imgBuffer = await sharp(filePath)
      .trim() // Trim excess whitespace around placemat
      .sharpen({ sigma: 1.5, m1: 1.2, m2: 0.8 }) // Crisp fiber texture
      .modulate({
        brightness: 1.02,
        saturation: 1.08,
      })
      .toBuffer();

    // Create a 800x800 modern luxury catalog card with clean subtle shadow
    const finalBuffer = await sharp({
      create: {
        width: 800,
        height: 800,
        channels: 4,
        background: { r: 252, g: 252, b: 252, alpha: 1 }
      }
    })
    .composite([
      {
        input: await sharp(imgBuffer)
          .resize(680, 680, { fit: 'inside', background: { r: 252, g: 252, b: 252, alpha: 0 } })
          .toBuffer(),
        gravity: 'center'
      }
    ])
    .png({ quality: 98, compressionLevel: 8 })
    .toFile(filePath);

    console.log(`Enhanced studio quality: ${file}`);
  }
}

enhancePlacemats();
