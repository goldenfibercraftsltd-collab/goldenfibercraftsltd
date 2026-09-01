import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded';
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 8 Floor Mat products from media_1787431437604.png
const sheet = {
  file: 'media_1787431437604.png',
  rows: 2,
  cols: 6,
  products: [
    // Row 1
    {
      code: 'BJM-09',
      name: 'Spiral Braided Round Jute Floor Mat',
      material: '100% Natural Jute',
      desc: 'Hand-braided circular floor mat woven from pure golden jute in an elegant spiral concentric pattern for living rooms and bedrooms.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJM-10',
      name: 'Natural Unbleached Round Jute Area Mat',
      material: '100% Natural Jute',
      desc: 'Minimalist round jute area mat featuring tight continuous coil stitching, offering high durability and organic texture underfoot.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Unbleached Natural Golden Jute'
    },
    {
      code: 'BJM-12',
      name: 'Classic Flatweave Rectangular Jute Rug',
      material: '100% Natural Jute',
      desc: 'Handloom flatwoven rectangular jute rug and hallway runner with clean selvedge edges, reversible for long-lasting performance.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Jute Oatmeal Tone'
    },
    {
      code: 'BJM-13',
      name: 'Rectangular Jute Doormat with Black Border',
      material: '100% Natural Jute & Cotton Canvas Border',
      desc: 'Heavy-duty rectangular ribbed jute entrance doormat framed with a crisp contrast black fabric border for modern entryways.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Tan with Black Fabric Border'
    },
    {
      code: 'BJM-26',
      name: 'Half-Moon Semicircle Braided Jute Doormat',
      material: '100% Natural Jute',
      desc: 'Artisanal half-circle semicircular braided jute welcome doormat, designed specifically for doorways, patios, and bedside accents.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJM-27',
      name: 'Concentric Ring Mottled Jute Door Mat',
      material: '100% Natural Jute & Dyed Cotton Thread',
      desc: 'Decorative circular entrance mat woven with concentric rings of natural and slate charcoal dyed fibers for a textured ripple effect.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Jute & Charcoal Mottled Rings'
    },
    // Row 2 (2 items)
    {
      code: 'BJM-31',
      name: 'Openwork Lattice Ring Jute Mandala Mat',
      material: '100% Natural Jute',
      desc: 'Intricate round decorative floor rug handcrafted with a central coiled disc surrounded by an airy criss-cross openwork lattice border.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJM-32',
      name: 'Scalloped Petal Openwork Jute Floor Rug',
      material: '100% Natural Jute',
      desc: 'Boho-chic handcrafted round jute rug featuring concentric wheel openwork loops and an ornate scalloped petal fringe outer perimeter.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'floor-mats',
      color: 'Natural Golden Jute'
    }
  ]
};

async function processFloorMats() {
  const imgPath = path.join(brainDir, sheet.file);
  const meta = await sharp(imgPath).metadata();
  const { width, height } = meta;

  const colWidth = width / sheet.cols;
  const rowHeight = height / sheet.rows;

  console.log(`Processing Floor Mats sheet ${sheet.file} (${width}x${height})...`);
  const allExtractedMats = [];

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

      // Clean extraction box
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

        console.log(`Extracted floor mat image: ${filename}`);

        allExtractedMats.push({
          id: prod.code,
          slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
          code: prod.code,
          name: prod.name,
          category: 'jute',
          categoryName: 'Jute',
          categorySlug: 'jute',
          subCategory: 'floor-mats',
          image: `/products/${filename}`,
          galleryImages: [`/products/${filename}`],
          description: prod.desc,
          longDescription: {
            overview: `The ${prod.name} (Art No: ${prod.code}) is expertly handcrafted from ${prod.material}. Engineered for sustainable residential interiors, luxury eco-resorts, and international home decor wholesalers.`,
            craftsmanship: 'Braided and hand-stitched by experienced Bengali artisans using 100% natural, unbleached golden jute fibers. Heavy-duty construction ensures resilience, thermal insulation, and natural anti-static properties.',
            exportDetails: 'Individually rolled or flat-packed with moisture-absorbent silica gel, wrapped in protective biodegradable poly, and packed into 5-ply export master cartons. Compliant with international REACH and textile import standards.',
            careInstructions: 'Vacuum regularly without a beater bar. Spot clean with mild soap and damp cloth. Do not soak. Air dry in shade.'
          },
          unit: prod.unit,
          cbmPerCarton: 0.052,
          setPerCarton: 12,
          nwPerCtn: 9.2,
          gwPerCtn: 10.8,
          material: prod.material,
          color: prod.color,
          specifications: [
            { key: 'Item Code', value: prod.code },
            { key: 'Item Name', value: prod.name },
            { key: 'Packaging Unit', value: prod.unit },
            { key: 'Materials', value: prod.material },
            { key: 'Color / Weave', value: prod.color },
            { key: 'MOQ', value: '300 Pieces' },
            { key: 'Country of Origin', value: 'Bangladesh' }
          ],
          features: [
            '100% Natural Biodegradable Golden Jute',
            'Authentic Bangladeshi Hand-Braided Craftsmanship',
            'Durable Reversible Heavy-Duty Construction',
            'Natural Sound Dampening & Eco Living Aesthetic'
          ]
        });

      } catch (err) {
        console.error(`Error processing ${prod.code}:`, err);
      }
    }
  }

  // Save JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_floor_mats_generated.json'),
    JSON.stringify(allExtractedMats, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedMats.length} Jute Floor Mat products!`);
}

processFloorMats();
