import sharp from 'sharp';
import toIco from 'to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function buildIcons() {
  const sourceIcon = path.join(publicDir, 'logo-icon.png');
  if (!fs.existsSync(sourceIcon)) {
    console.error('source logo-icon.png not found at', sourceIcon);
    process.exit(1);
  }

  console.log('Generating crisp official icons from:', sourceIcon);

  // We make a square master 1024x1024 with transparent background
  // The source logo-icon.png is 852x896. We'll fit it inside with 92% scale (so it fills nicely with clean breathing room).
  const masterBuffer = await sharp(sourceIcon)
    .resize(960, 960, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .extend({
      top: 32,
      bottom: 32,
      left: 32,
      right: 32,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const sizes = [16, 32, 48, 96, 144, 180, 192, 512];
  const pngBuffers = {};

  for (const s of sizes) {
    const buf = await sharp(masterBuffer)
      .resize(s, s, {
        fit: 'contain',
        kernel: sharp.kernel.lanczos3
      })
      .png({ compressionLevel: 9 })
      .toBuffer();

    pngBuffers[s] = buf;

    if (s === 180) {
      fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), buf);
    } else {
      fs.writeFileSync(path.join(publicDir, `favicon-${s}x${s}.png`), buf);
    }
  }

  // Also write standard favicon.png
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffers[192]);

  // Generate multi-resolution .ico containing 16, 32, 48
  // Also 64, 128, 256 for high-res Windows/Chrome displays
  const buf64 = await sharp(masterBuffer).resize(64, 64).png().toBuffer();
  const buf128 = await sharp(masterBuffer).resize(128, 128).png().toBuffer();
  const buf256 = await sharp(masterBuffer).resize(256, 256).png().toBuffer();

  const icoBuffer = await toIco([
    pngBuffers[16],
    pngBuffers[32],
    pngBuffers[48],
    buf64,
    buf128,
    buf256
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Also write high-res favicon.svg
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,${pngBuffers[512].toString('base64')}" x="0" y="0" width="512" height="512" />
</svg>`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg);

  console.log('✅ Successfully generated all official favicons, favicon.ico and favicon.svg!');
}

buildIcons().catch(err => {
  console.error('Failed to build icons:', err);
  process.exit(1);
});
