const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function checkBackgroundTypes() {
  const analysisPath = path.resolve(__dirname, '../.agents/product_image_analysis.json');
  const products = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

  const needsWhiteBg = [];
  const alreadyWhite = [];

  for (const p of products) {
    try {
      const img = sharp(p.fullPath);
      const meta = await img.metadata();
      const { width, height } = meta;

      // Sample a small 32x32 representation to check the background color
      const { data, info } = await img
        .clone()
        .resize(32, 32, { fit: 'fill' })
        .raw()
        .toBuffer({ resolveWithObject: true });

      const channels = info.channels;
      const getPixel = (x, y) => {
        const idx = (y * 32 + x) * channels;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = channels === 4 ? data[idx + 3] : 255;
        return { r, g, b, a };
      };

      // Check 4 corners (outermost points) and 4 edge centers
      const samplePoints = [
        getPixel(0, 0),
        getPixel(31, 0),
        getPixel(0, 31),
        getPixel(31, 31),
        getPixel(15, 0),
        getPixel(0, 15),
        getPixel(31, 15),
      ];

      // If transparent (PNG alpha < 30), it is transparent / isolated
      let transparentCorners = 0;
      let nonWhiteSamples = 0;

      for (const pt of samplePoints) {
        if (pt.a < 30) {
          transparentCorners++;
        } else {
          // Distance from pure white (255, 255, 255)
          const diff = (255 - pt.r) + (255 - pt.g) + (255 - pt.b);
          // If average channel is less than 245, it's not white
          if (diff > 30) {
            nonWhiteSamples++;
          }
        }
      }

      // If at least 2 corner/edge points have significant color/shadow/scene
      const isDefiniteNonWhite = (nonWhiteSamples >= 2) && (transparentCorners < 4);

      if (isDefiniteNonWhite) {
        needsWhiteBg.push({
          id: p.id,
          code: p.code,
          name: p.name,
          sub_category: p.sub_category,
          image_url: p.image_url,
          fullPath: p.fullPath,
          nonWhiteSamples,
          samplePoints
        });
      } else {
        alreadyWhite.push({
          code: p.code,
          name: p.name
        });
      }
    } catch (e) {
      console.error(p.code, e.message);
    }
  }

  console.log(`Already White / Isolated: ${alreadyWhite.length}`);
  console.log(`Definite Non-White Background: ${needsWhiteBg.length}`);

  console.log('\nList of products that need white background:');
  needsWhiteBg.forEach((p, idx) => {
    console.log(`${idx + 1}. [${p.code}] ${p.name} (${p.sub_category}) -> ${p.image_url}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../.agents/needs_white_bg.json'),
    JSON.stringify(needsWhiteBg, null, 2)
  );
}

checkBackgroundTypes();
