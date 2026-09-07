import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function brandAllFive() {
  const blogDir = path.join(process.cwd(), 'public', 'images', 'blog');
  const logoPath = path.join(process.cwd(), 'public', 'logo-icon.png');

  // Copy additional authentic assets to blog folder
  const additional = [
    {
      src: path.join(process.cwd(), 'public', 'materials', 'jute_fiber_new.jpg'),
      dest: path.join(blogDir, 'raw-tosha-jute-fiber-inspection-bangladesh.jpg')
    },
    {
      src: path.join(process.cwd(), 'public', 'quality', 'quality_inspection.png'),
      dest: path.join(blogDir, 'jute-basket-quality-control-moisture-inspection.jpg')
    }
  ];

  for (const item of additional) {
    if (fs.existsSync(item.src)) {
      const buf = fs.readFileSync(item.src);
      const meta = await sharp(buf).metadata();
      const logoWidth = Math.round(Math.max((meta.width || 1200) * 0.08, 90));

      const resizedLogo = await sharp(logoPath)
        .resize({ width: logoWidth })
        .png()
        .toBuffer();

      const logoMeta = await sharp(resizedLogo).metadata();
      const padding = Math.round((meta.width || 1200) * 0.03);
      const left = (meta.width || 1200) - (logoMeta.width || logoWidth) - padding;
      const top = (meta.height || 800) - (logoMeta.height || logoWidth) - padding;

      const outputBuffer = await sharp(buf)
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

      fs.writeFileSync(item.dest, outputBuffer);
      console.log(`✅ Created and branded: ${path.basename(item.dest)}`);
    }
  }
}

brandAllFive().catch(console.error);
