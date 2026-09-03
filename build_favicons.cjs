const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Helper to create valid multi-image ICO container with native 32-bit PNG buffers
function createPngIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // number of icons

  let offset = 6 + count * 16;
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color palette (0 for 32-bit RGBA)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // 32 bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image data size
    entry.writeUInt32LE(offset, 12); // offset in file
    entries.push(entry);
    offset += img.buffer.length;
  }
  return Buffer.concat([header, ...entries, ...images.map(img => img.buffer)]);
}

async function generateFavicons() {
  console.log('Generating pristine, crystal-clear favicon suite for all browsers & Google Search...');
  
  const iconSourcePath = path.join(__dirname, 'public', 'logo-icon.png');
  if (!fs.existsSync(iconSourcePath)) {
    throw new Error('public/logo-icon.png not found!');
  }

  // Trim icon source to exact content bounds
  const trimmedBuffer = await sharp(iconSourcePath)
    .trim()
    .png()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed source icon bounds:', trimmedMeta.width, 'x', trimmedMeta.height);

  async function createSquareIcon(size, paddingRatio = 0.06) {
    const innerSize = Math.max(1, Math.round(size * (1 - paddingRatio * 2)));
    
    const resizedInner = await sharp(trimmedBuffer)
      .resize(innerSize, innerSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        kernel: sharp.kernel.lanczos3
      })
      .png()
      .toBuffer();

    return await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([
      { input: resizedInner, gravity: 'center' }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();
  }

  // Generate PNGs at standard resolutions
  // Minimal padding for small browser tab icons (16, 32) so they are as clear and prominent as possible
  const sizes = [16, 32, 48, 96, 144, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const padding = size <= 32 ? 0.02 : 0.08;
    const buf = await createSquareIcon(size, padding);
    pngBuffers[size] = buf;
  }

  // Write PNG files to public/
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-16x16.png'), pngBuffers[16]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-32x32.png'), pngBuffers[32]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-48x48.png'), pngBuffers[48]); // For Google Search
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-96x96.png'), pngBuffers[96]); // 2x Google Search
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-144x144.png'), pngBuffers[144]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-192x192.png'), pngBuffers[192]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-512x512.png'), pngBuffers[512]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.png'), pngBuffers[192]);
  fs.writeFileSync(path.join(__dirname, 'public', 'apple-touch-icon.png'), pngBuffers[180]);

  console.log('High-resolution 32-bit PNG favicons generated.');

  // Generate 32-bit PNG ICO (16x16, 32x32, 48x48) - completely free of 8-bit BMP palette corruption
  const icoBuffer = createPngIco([
    { width: 16, height: 16, buffer: pngBuffers[16] },
    { width: 32, height: 32, buffer: pngBuffers[32] },
    { width: 48, height: 48, buffer: pngBuffers[48] }
  ]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoBuffer);
  console.log('Clean 32-bit favicon.ico generated (sizes: 16, 32, 48).');

  // Restore clean original logo-icon.svg as favicon.svg
  const origSvgPath = path.join(__dirname, 'public', 'logo-icon.svg');
  if (fs.existsSync(origSvgPath)) {
    fs.copyFileSync(origSvgPath, path.join(__dirname, 'public', 'favicon.svg'));
    console.log('Clean original logo-icon.svg copied to favicon.svg.');
  }

  // Update site.webmanifest
  const manifest = {
    name: "Golden Fiber Crafts Ltd",
    short_name: "GoldenFiberCrafts",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#166534",
    background_color: "#ffffff",
    display: "standalone"
  };
  fs.writeFileSync(path.join(__dirname, 'public', 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('site.webmanifest generated.');

  console.log('All favicons regenerated successfully without corruption!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
