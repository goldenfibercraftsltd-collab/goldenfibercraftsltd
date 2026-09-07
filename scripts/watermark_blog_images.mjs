import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function watermark() {
  const blogDir = path.join(process.cwd(), 'public', 'images', 'blog');
  const logoPath = path.join(process.cwd(), 'public', 'logo-icon.png');

  if (!fs.existsSync(logoPath)) {
    console.error('Logo not found at:', logoPath);
    return;
  }

  const files = [
    'featured-jute-basket-manufacturer-bangladesh.jpg',
    'bangladeshi-artisan-stitching-coiled-jute-basket.jpg',
    'nested-set-of-3-jute-storage-baskets-wholesale.jpg'
  ];

  for (const file of files) {
    const inputPath = path.join(blogDir, file);
    if (!fs.existsSync(inputPath)) continue;

    const inputBuffer = fs.readFileSync(inputPath);
    const metadata = await sharp(inputBuffer).metadata();
    const logoWidth = Math.round(Math.max((metadata.width || 1200) * 0.08, 90));

    // Prepare logo
    const resizedLogo = await sharp(logoPath)
      .resize({ width: logoWidth })
      .png()
      .toBuffer();

    const logoMeta = await sharp(resizedLogo).metadata();

    const padding = Math.round((metadata.width || 1200) * 0.03);
    const left = (metadata.width || 1200) - (logoMeta.width || logoWidth) - padding;
    const top = (metadata.height || 800) - (logoMeta.height || logoWidth) - padding;

    const outputBuffer = await sharp(inputBuffer)
      .composite([
        {
          input: resizedLogo,
          top: top,
          left: left,
          blend: 'over'
        }
      ])
      .jpeg({ quality: 92 })
      .toBuffer();

    fs.writeFileSync(inputPath, outputBuffer);
    console.log(`✅ Branded with official logo: ${file}`);
  }
}

watermark().catch(console.error);
