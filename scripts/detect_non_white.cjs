const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function analyzeBackgrounds() {
  const analysisPath = path.resolve(__dirname, '../.agents/product_image_analysis.json');
  const products = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

  console.log(`Analyzing ${products.length} products...`);

  const results = [];

  for (const p of products) {
    try {
      const img = sharp(p.fullPath);
      const meta = await img.metadata();
      const { width, height } = meta;

      // Sample a downscaled 100x100 version to quickly check border pixels
      const { data, info } = await img
        .clone()
        .resize(100, 100, { fit: 'fill' })
        .raw()
        .toBuffer({ resolveWithObject: true });

      const channels = info.channels;
      
      // Check border pixels (first row, last row, first col, last col)
      let borderPixels = 0;
      let nonWhiteBorderPixels = 0;

      for (let y = 0; y < 100; y++) {
        for (let x = 0; x < 100; x++) {
          // Check if this pixel is on outer border (first/last 4 pixels)
          if (x < 4 || x >= 96 || y < 4 || y >= 96) {
            borderPixels++;
            const idx = (y * 100 + x) * channels;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = channels === 4 ? data[idx + 3] : 255;

            // If transparent, counts as white canvas
            if (a < 20) {
              // transparent
            } else {
              // Check if not near white (threshold 238)
              if (r < 238 || g < 238 || b < 238) {
                nonWhiteBorderPixels++;
              }
            }
          }
        }
      }

      const nonWhiteRatio = nonWhiteBorderPixels / borderPixels;
      const isWhiteBg = nonWhiteRatio < 0.08; // Less than 8% non-white on outer borders

      const getPixel = (x, y) => {
        const idx = (y * 100 + x) * channels;
        return [data[idx], data[idx + 1], data[idx + 2]];
      };
      const corners = [
        getPixel(1, 1),
        getPixel(98, 1),
        getPixel(1, 98),
        getPixel(98, 98)
      ];

      results.push({
        id: p.id,
        code: p.code,
        name: p.name,
        sub_category: p.sub_category,
        image_url: p.image_url,
        fullPath: p.fullPath,
        width,
        height,
        nonWhiteRatio: Math.round(nonWhiteRatio * 1000) / 10,
        isWhiteBg,
        corners
      });
    } catch (err) {
      console.error(`Error analyzing ${p.code}:`, err.message);
      results.push({
        id: p.id,
        code: p.code,
        error: err.message,
        isWhiteBg: false
      });
    }
  }

  const whiteCount = results.filter(r => r.isWhiteBg).length;
  const nonWhiteList = results.filter(r => !r.isWhiteBg);

  console.log(`\n=== SUMMARY ===`);
  console.log(`Total analyzed: ${results.length}`);
  console.log(`Clean White Background: ${whiteCount}`);
  console.log(`NON-White Background: ${nonWhiteList.length}`);

  console.log(`\nNon-white background products (${nonWhiteList.length}):`);
  nonWhiteList.forEach((item, i) => {
    console.log(`${i + 1}. [${item.code}] ${item.name} (${item.sub_category}) - Non-white border: ${item.nonWhiteRatio}% | Path: ${item.image_url}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../.agents/non_white_products.json'),
    JSON.stringify(nonWhiteList, null, 2)
  );
  console.log('\nSaved non_white_products.json successfully');
}

analyzeBackgrounds().catch(console.error);
