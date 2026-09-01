import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded';
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 10 Placemats from media_1787432079696.png
const sheet = {
  file: 'media_1787432079696.png',
  rows: 2,
  cols: 6,
  products: [
    // Row 1
    {
      code: 'BJM-01',
      name: 'Handwoven Oval Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Eco-friendly oval braided natural golden jute dining placemat, providing natural heat insulation and rustic tabletop elegance.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJM-02',
      name: 'Round Jute Placemat with Mustard Border',
      material: '100% Natural Jute',
      desc: 'Circular coiled jute table charger framed with a sunny mustard golden yellow stitched border accent for modern table settings.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Natural Jute & Mustard Yellow Rim'
    },
    {
      code: 'BJM-03',
      name: 'Spiral Swirl Washable Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Dynamic two-tone spiral swirl braided dining mat crafted from natural and moss green dyed jute cords for everyday dining.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Natural Jute & Moss Green Swirl'
    },
    {
      code: 'BJM-04',
      name: 'Mottled Indigo Green Round Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Textured round table charger woven from mottled deep indigo green and natural golden jute fibers with fine braided stitching.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Indigo Green & Natural Mottled Weave'
    },
    {
      code: 'BJM-06',
      name: 'Denim Blue Flatweave Rectangular Placemat',
      material: '100% Natural Jute',
      desc: 'Handloomed rectangular jute table mat dyed in a handsome slate denim blue shade, perfect for casual dining and hospitality.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Slate Denim Blue'
    },
    {
      code: 'BJM-07',
      name: 'Classic Elongated Oval Jute Table Mat',
      material: '100% Natural Jute',
      desc: 'Spacious oval dining placemat woven from smooth unbleached golden jute fiber, offering a protective and organic tabletop shield.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Unbleached Natural Golden Jute'
    },
    // Row 2
    {
      code: 'BJM-11',
      name: 'Cobalt & White Striped Round Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Coastal nautical inspired circular table placemat with high-contrast concentric blue and cream white braided rings.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Cobalt Blue & Cream White Stripes'
    },
    {
      code: 'BJM-08',
      name: 'Forest Green Braided Round Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Rich forest green and natural tweed-braided round table charger, hand-stitched for superior durability and heat resistance.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Forest Green & Natural Tweed'
    },
    {
      code: 'DJM-21',
      name: 'Berry Wine Spiral Coiled Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Chic circular dining placemat featuring concentric coils in berry wine plum and natural cream jute cords.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Berry Wine Plum & Natural Cream'
    },
    {
      code: 'BJM-22',
      name: 'Espresso Dark Brown Round Jute Placemat',
      material: '100% Natural Jute',
      desc: 'Sophisticated monochrome dark espresso brown dyed round jute dining charger with clean spiral concentric weave.',
      unit: 'S/4',
      category: 'jute',
      subCategory: 'placemats',
      color: 'Deep Espresso Dark Brown'
    }
  ]
};

async function processPlacemats() {
  const imgPath = path.join(brainDir, sheet.file);
  const meta = await sharp(imgPath).metadata();
  const { width, height } = meta;

  const colWidth = width / sheet.cols;
  const rowHeight = height / sheet.rows;

  console.log(`Processing Placemats sheet ${sheet.file} (${width}x${height})...`);
  const allExtractedPlacemats = [];

  for (let r = 0; r < sheet.rows; r++) {
    for (let c = 0; c < sheet.cols; c++) {
      const pIdx = r * sheet.cols + c;
      if (pIdx >= sheet.products.length) continue;

      const prod = sheet.products[pIdx];
      const codeSlug = prod.code.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      const filename = `${codeSlug}.png`;
      const destFile = path.join(outDir, filename);

      const cellLeft = Math.round(c * colWidth);
      const cellTop = Math.round(r * rowHeight);

      // Clean crop boundaries
      const cropLeft = Math.max(0, Math.round(cellLeft + colWidth * 0.03));
      const cropTop = Math.max(0, Math.round(cellTop + rowHeight * 0.15));
      const cropWidth = Math.min(width - cropLeft, Math.round(colWidth * 0.94));
      const cropHeight = Math.min(height - cropTop, Math.round(rowHeight * 0.70));

      try {
        const croppedBuffer = await sharp(imgPath)
          .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
          .toBuffer();

        // 600x600 high-res centered white product card
        await sharp({
          create: {
            width: 600,
            height: 600,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          }
        })
        .composite([
          {
            input: await sharp(croppedBuffer)
              .resize(540, 540, { fit: 'inside', background: { r: 255, g: 255, b: 255, alpha: 1 } })
              .toBuffer(),
            gravity: 'center'
          }
        ])
        .png({ quality: 95 })
        .toFile(destFile);

        console.log(`Extracted placemat image: ${filename}`);

        allExtractedPlacemats.push({
          id: prod.code,
          slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
          code: prod.code,
          name: prod.name,
          category: 'jute',
          categoryName: 'Jute',
          categorySlug: 'jute',
          subCategory: 'placemats',
          image: `/products/${filename}`,
          galleryImages: [`/products/${filename}`],
          description: prod.desc,
          longDescription: {
            overview: `The ${prod.name} (Art No: ${prod.code}) is artisanal tableware handcrafted from ${prod.material}. Designed for upscale dining tables, eco-friendly restaurants, and luxury tableware retailers.`,
            craftsmanship: 'Handcrafted by skilled Bengali women artisans using high-tensile Bangladeshi golden jute fiber. Heat resistant up to 100°C, naturally non-slip, and protects delicate wood/glass surfaces from scratches and spills.',
            exportDetails: 'Export packed in sets of 4 or 6 tied with natural jute twine and buyer brand hangtag. Packed 24 sets per 5-ply export master carton with inner desiccants for moisture protection.',
            careInstructions: 'Wipe clean with a damp cloth or soft sponge. Dry flat in shade. Do not submerge in standing water.'
          },
          unit: prod.unit,
          cbmPerCarton: 0.038,
          setPerCarton: 24,
          nwPerCtn: 7.5,
          gwPerCtn: 8.8,
          material: prod.material,
          color: prod.color,
          specifications: [
            { key: 'Item Code', value: prod.code },
            { key: 'Item Name', value: prod.name },
            { key: 'Packaging Unit', value: prod.unit },
            { key: 'Materials', value: prod.material },
            { key: 'Color / Finish', value: prod.color },
            { key: 'Heat Resistance', value: 'Up to 100°C' },
            { key: 'MOQ', value: '500 Sets' },
            { key: 'Country of Origin', value: 'Bangladesh' }
          ],
          features: [
            '100% Eco-Friendly & Biodegradable Jute',
            'Authentic Bangladeshi Hand-Braided Weave',
            'Natural Heat-Resistant Surface Protection',
            'Stain-Resistant Easy Wipe-Clean Maintenance'
          ]
        });

      } catch (err) {
        console.error(`Error processing ${prod.code}:`, err);
      }
    }
  }

  // Save JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_placemats_generated.json'),
    JSON.stringify(allExtractedPlacemats, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedPlacemats.length} Jute Placemat products!`);
}

processPlacemats();
