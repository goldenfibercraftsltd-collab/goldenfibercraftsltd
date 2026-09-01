import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded';
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 8 Pouf products from media_1787432911162.png
const sheet = {
  file: 'media_1787432911162.png',
  rows: 2,
  cols: 6,
  products: [
    // Row 1
    {
      code: 'BJP-01',
      name: 'Black & Cream Striped Cylindrical Jute Pouf',
      material: '100% Natural Jute & Cotton',
      desc: 'Bold horizontal black and cream striped cylindrical ottoman pouf handwoven from thick braided jute rope with a concentric target ring top.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Black & Natural Cream Horizontal Stripes'
    },
    {
      code: 'BJP-02',
      name: 'Domed Cylinder Natural Jute Pouf Ottoman',
      material: '100% Natural Jute',
      desc: 'Classic domed cylindrical floor ottoman tightly hand-coiled from golden jute fiber, offering sturdy auxiliary seating and footrest comfort.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJP-05',
      name: 'Square Pyramid Small Capsule Jute Pouf',
      material: '100% Natural Jute',
      desc: 'Compact square pyramidal floor cushion pouf hand-stitched from natural jute braids, ideal for low-seating living spaces and lounge corners.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJP-06',
      name: 'Square Pyramid Large Capsule Jute Pouf',
      material: '100% Natural Jute',
      desc: 'Spacious square pyramidal floor ottoman cushion handcrafted with concentric square jute weaves, providing ergonomic floor relaxation.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJP-07',
      name: 'Cube Square Structured Jute Ottoman Pouf',
      material: '100% Natural Jute',
      desc: 'Architectural cube ottoman pouf featuring linear textured vertical golden jute braids over a resilient shape-retaining inner core.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Golden Jute'
    },
    {
      code: 'BJP-08',
      name: 'Low Round Drum Jute Cube Pouf',
      material: '100% Natural Jute',
      desc: 'Low-profile wide circular drum floor pouf with smooth side walls and tightly woven top surface, serving as both footrest and coffee table tray stand.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Golden Jute'
    },
    // Row 2
    {
      code: 'BJP-09',
      name: 'Round Capsule Jute & Coir Floor Cushion',
      material: 'Natural Jute, Coconut Coir Fibre & Organic Cotton',
      desc: 'Organic convex round floor capsule cushion stuffed with natural coconut fiber coir and wrapped in soft braided natural unbleached jute.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Natural Cream Jute & Coir'
    },
    {
      code: 'BJP-10',
      name: 'Sage Tinted Round Capsule Jute & Coir Pouf',
      material: 'Natural Jute, Coconut Coir Fibre & Cotton',
      desc: 'Calming sage-tinted round capsule floor ottoman stuffed with breathable eco-friendly coconut coir filling and encased in handwoven jute.',
      unit: 'S/1',
      category: 'jute',
      subCategory: 'poufs',
      color: 'Earthy Sage Green & Natural Jute'
    }
  ]
};

async function processPoufs() {
  const imgPath = path.join(brainDir, sheet.file);
  const meta = await sharp(imgPath).metadata();
  const { width, height } = meta;

  const colWidth = width / sheet.cols;
  const rowHeight = height / sheet.rows;

  console.log(`Processing Poufs sheet ${sheet.file} (${width}x${height})...`);
  const allExtractedPoufs = [];

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

      // Precise crop area
      const cropLeft = Math.max(0, Math.round(cellLeft + colWidth * 0.03));
      const cropTop = Math.max(0, Math.round(cellTop + rowHeight * 0.15));
      const cropWidth = Math.min(width - cropLeft, Math.round(colWidth * 0.94));
      const cropHeight = Math.min(height - cropTop, Math.round(rowHeight * 0.70));

      try {
        const croppedBuffer = await sharp(imgPath)
          .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
          .trim()
          .sharpen({ sigma: 1.5, m1: 1.2, m2: 0.8 })
          .modulate({ brightness: 1.02, saturation: 1.05 })
          .toBuffer();

        // 800x800 high-res centered white product card
        await sharp({
          create: {
            width: 800,
            height: 800,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          }
        })
        .composite([
          {
            input: await sharp(croppedBuffer)
              .resize(700, 700, { fit: 'inside', background: { r: 255, g: 255, b: 255, alpha: 0 } })
              .toBuffer(),
            gravity: 'center'
          }
        ])
        .png({ quality: 98, compressionLevel: 8 })
        .toFile(destFile);

        console.log(`Extracted pouf image: ${filename}`);

        allExtractedPoufs.push({
          id: prod.code,
          slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
          code: prod.code,
          name: prod.name,
          category: 'jute',
          categoryName: 'Jute',
          categorySlug: 'jute',
          subCategory: 'poufs',
          image: `/products/${filename}`,
          galleryImages: [`/products/${filename}`],
          description: prod.desc,
          longDescription: {
            overview: `The ${prod.name} (Art No: ${prod.code}) is a luxurious artisanal floor seating piece handcrafted from ${prod.material}. Engineered for contemporary sustainable interiors, boutique hotels, and international furniture retailers.`,
            craftsmanship: 'Hand-braided and tailored by master artisans in Bangladesh using high-grade golden jute fibers and resilient natural coconut coir/cotton filling. Retains its shape under heavy daily use while providing firm, comfortable support.',
            exportDetails: 'Individually enclosed in heavy-gauge protective polybag with moisture absorbents, packed into heavy-duty 5-ply export master cartons. Certified fumigated, mold-resistant, and container shipping optimized.',
            careInstructions: 'Vacuum regularly with upholstery attachment. Spot clean spills immediately with a damp cloth and mild soap. Keep in dry indoor spaces.'
          },
          unit: prod.unit,
          cbmPerCarton: 0.095,
          setPerCarton: 2,
          nwPerCtn: 7.8,
          gwPerCtn: 9.5,
          material: prod.material,
          color: prod.color,
          specifications: [
            { key: 'Item Code', value: prod.code },
            { key: 'Item Name', value: prod.name },
            { key: 'Packaging Unit', value: prod.unit },
            { key: 'Materials', value: prod.material },
            { key: 'Color / Finish', value: prod.color },
            { key: 'Filling Material', value: 'High-Density EPS Beads / Coir Fiber Core' },
            { key: 'MOQ', value: '100 Pieces' },
            { key: 'Country of Origin', value: 'Bangladesh' }
          ],
          features: [
            '100% Natural Biodegradable Golden Jute',
            'Authentic Bangladeshi Handcrafted Heritage',
            'Heavy-Duty Weight Bearing & Shape Retention',
            'Multi-Functional Seating, Footrest & Coffee Table Ottoman'
          ]
        });

      } catch (err) {
        console.error(`Error processing ${prod.code}:`, err);
      }
    }
  }

  // Save JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_poufs_generated.json'),
    JSON.stringify(allExtractedPoufs, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedPoufs.length} Jute Pouf products!`);
}

processPoufs();
