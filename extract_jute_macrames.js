import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded';
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 24 Macrame products from the 2 user uploaded sheets
const sheets = [
  {
    file: 'media_1787434069863.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      {
        code: 'BCC-05',
        name: 'Two-Tier Dual Jute Macrame Plant Hanger',
        material: '100% Natural Jute',
        desc: 'Vertical 2-tier dual basket macrame plant hanger handcrafted from twisted golden jute rope with teal accent banding and hanging fringe tassel.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute & Teal Accent'
      },
      {
        code: 'BCC-06',
        name: 'Single Bowl Braided Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Chic hand-knotted natural jute macrame plant hanger featuring an integrated textured bowl pot holder with bottom tassel ornament.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Off-White & Natural Jute'
      },
      {
        code: 'BJC-01',
        name: 'Beaded Saffron Yellow Jute Macrame Hanger',
        material: '100% Natural Jute Rope & Wood Beads',
        desc: 'Artisanal macrame plant hanger holding a saffron yellow and royal blue banded pot with decorative polished natural wooden beads.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Jute, Saffron Yellow & Wood Beads'
      },
      {
        code: 'BJC-04',
        name: 'Monochrome Checkered Jute Macrame Hanger',
        material: '100% Natural Jute Rope',
        desc: 'Modern macrame hanging planter holding a woven black and white checkered cylinder basket pot with playful hanging loop fringe.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Black & White Checkered Basket with Natural Rope'
      },
      {
        code: 'BJC-06',
        name: 'Sky Blue Banded Jute Macrame Plant Hanger',
        material: '100% Natural Jute',
        desc: 'Hand-knotted 4-strand natural jute hanging plant cradle with a sky-blue accented woven base basket and tassel fringe.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute with Sky Blue Band'
      },
      {
        code: 'BJC-07',
        name: 'Two-Tier Terracotta & Natural Jute Macrame',
        material: '100% Natural Jute',
        desc: 'Double vertical hanging macrame planter featuring an upper natural jute bowl and a lower terracotta red dyed planter bowl with tassels.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Jute & Terracotta Red'
      },
      // Row 2
      {
        code: 'BJC-10',
        name: 'Tiered Beaded Double Jute Macrame Hanger',
        material: '100% Natural Jute Rope & Beads',
        desc: 'Elaborate two-tier knotted jute macrame plant hanger adorned with handcrafted beads and double woven basket holders.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute with Wooden Beads'
      },
      {
        code: 'BJC-11',
        name: 'Minimalist 4-Strand Jute Macrame Plant Sling',
        material: '100% Natural Jute Rope',
        desc: 'Timeless 4-strand twisted jute rope hanging plant sling holding a natural textured woven kaisa-jute plant basket.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-13',
        name: 'Coiled Jute Pot Macrame with Pom-Pom Tassels',
        material: '100% Natural Jute Rope',
        desc: 'Decorative macrame plant hanger featuring an integrated round basket pot holder embellished with side pom-pom fringe tassels.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Cream Jute with Tassels'
      },
      {
        code: 'BJC-14',
        name: 'Small Cylinder Basket Jute Macrame Hanger',
        material: '100% Natural Jute Rope',
        desc: 'Compact hanging plant sling crafted from twisted jute rope holding a cylindrical woven basket pot with side accent tassels.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute & Tassels'
      },
      {
        code: 'BJC-15',
        name: 'Slender Natural Jute Macrame Plant Hanger',
        material: '100% Natural Jute Rope',
        desc: 'Delicate fine-rope knotted jute macrame hanger holding a shallow round woven planter bowl with white tassel fringe.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Unbleached Jute'
      },
      {
        code: 'BJC-17',
        name: 'Teal Tasseled Dual Jute Macrame Planter',
        material: '100% Natural Jute Rope',
        desc: 'Boho-chic handcrafted macrame plant hanger adorned with turquoise blue dyed tassels and double hanging basket support.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Jute & Turquoise Teal Tassels'
      }
    ]
  },
  {
    file: 'media_1787434101262.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      {
        code: 'BJC-18',
        name: 'Terracotta Toned Jute Rope Macrame Hanger',
        material: '100% Natural Jute Rope',
        desc: 'Warm terracotta dyed jute macrame plant hanger with heavy braided rope knots and a voluminous hanging fringe tassel tail.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Warm Terracotta Jute'
      },
      {
        code: 'BJC-19',
        name: 'Wide Shallow Bowl Jute Macrame Sling',
        material: '100% Natural Jute Rope',
        desc: 'Long 4-strand knotted natural jute cord hanging sling cradling an expansive shallow circular woven planter tray basket.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-21',
        name: 'Conical Flowerpot Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Hand-braided earthy natural jute macrame cord holding a conical handwoven flowerpot planter bowl with bottom loop tassel.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Earthy Jute'
      },
      {
        code: 'BJC-22',
        name: 'Wide-Strap Minimalist Jute Macrame Planter',
        material: '100% Natural Jute',
        desc: 'Modern Scandinavian-inspired minimalist wide-strap braided jute macrame hanger holding an unbleached golden basket pot.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-23',
        name: 'Fine Twisted Cord Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Slender multi-strand twisted natural jute cord macrame hanger holding a golden round basket planter with bottom tassel.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-35',
        name: 'Magenta Tasseled Jute Macrame Plant Hanger',
        material: '100% Natural Jute (Corchorus capsularis)',
        desc: 'Artisanal natural golden jute plant hanger decorated with vibrant magenta and purple hanging pom-pom fringe tassels.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute & Magenta Tassels'
      },
      // Row 2
      {
        code: 'BJC-36',
        name: 'Openwork Weave Charcoal Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Muted dark charcoal and natural jute braided plant hanger supporting an airy openwork woven planter basket with bottom tassel.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Charcoal Grey & Natural Jute'
      },
      {
        code: 'BJC-37',
        name: 'Tall Cylinder Basket Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Deep cylindrical woven pot macrame hanger crafted from heavy-gauge natural jute cords for large indoor foliage and trailing vines.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-39',
        name: 'Multi-Strand Golden Jute Macrame Hanger',
        material: '100% Natural Jute',
        desc: 'Classic multi-strand twisted natural jute macrame plant hanger cradling a golden bowl pot with reinforced hanging loop.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJC-40',
        name: 'Flared Open Cradle Jute Macrame Planter',
        material: '100% Natural Jute',
        desc: 'Wide flared macrame cradle holding a red-rimmed natural jute bowl planter with decorative edge loop appliques.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Jute with Red Rim'
      },
      {
        code: 'BJC-41',
        name: 'Slender Conical Jute Macrame Plant Hanger',
        material: '100% Natural Jute',
        desc: 'Slender hand-knotted natural jute macrame plant hanger holding a conical natural woven planter basket with fine net webbing.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BCC-54',
        name: 'Denim Blue Seagrass & Cotton Macrame Hanger',
        material: 'Natural Seagrass & Dyed Cotton Cord',
        desc: 'Contemporary indigo denim blue knotted cotton cord macrame plant hanger holding a fine natural woven mini seagrass planter pot.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'macrames',
        color: 'Denim Indigo Blue & Natural Seagrass'
      }
    ]
  }
];

async function processMacrames() {
  const allExtractedMacrames = [];

  for (let sIdx = 0; sIdx < sheets.length; sIdx++) {
    const sheet = sheets[sIdx];
    const imgPath = path.join(brainDir, sheet.file);
    const meta = await sharp(imgPath).metadata();
    const { width, height } = meta;

    const colWidth = width / sheet.cols;
    const rowHeight = height / sheet.rows;

    console.log(`Processing Macrames sheet ${sheet.file} (${width}x${height})...`);

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

        // Precise crop area for vertical macrame hangers
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

          console.log(`Extracted macrame image: ${filename}`);

          allExtractedMacrames.push({
            id: prod.code,
            slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
            code: prod.code,
            name: prod.name,
            category: 'jute',
            categoryName: 'Jute',
            categorySlug: 'jute',
            subCategory: 'macrames',
            image: `/products/${filename}`,
            galleryImages: [`/products/${filename}`],
            description: prod.desc,
            longDescription: {
              overview: `The ${prod.name} (Art No: ${prod.code}) is an artisanal hanging plant hanger handcrafted from ${prod.material}. Designed for indoor botanical decor, greenhouse displays, and global sustainable home retailers.`,
              craftsmanship: 'Intricately hand-knotted by skilled Bangladeshi artisans using 100% high-tensile natural golden jute fiber. Holds up to 10kg flowerpots securely while adding vertical organic greenery and bohemian texture to living spaces.',
              exportDetails: 'Individually folded with protective insert card and hangtag, packed in sets of 12 or 24 per 5-ply export master carton with moisture-absorbing desiccants.',
              careInstructions: 'Dust gently with a soft dry brush. Spot clean cord with a damp cloth if necessary. Keep in dry indoor or covered patio locations.'
            },
            unit: prod.unit,
            cbmPerCarton: 0.035,
            setPerCarton: 24,
            nwPerCtn: 6.2,
            gwPerCtn: 7.5,
            material: prod.material,
            color: prod.color,
            specifications: [
              { key: 'Item Code', value: prod.code },
              { key: 'Item Name', value: prod.name },
              { key: 'Packaging Unit', value: prod.unit },
              { key: 'Materials', value: prod.material },
              { key: 'Color / Finish', value: prod.color },
              { key: 'Weight Capacity', value: 'Up to 10 kg' },
              { key: 'MOQ', value: '500 Pieces' },
              { key: 'Country of Origin', value: 'Bangladesh' }
            ],
            features: [
              '100% Eco-Friendly Biodegradable Golden Jute',
              'Authentic Bangladeshi Hand-Knotted Macrame Art',
              'Heavy-Duty Weight Bearing Up to 10kg',
              'Space-Saving Vertical Indoor Botanical Decor'
            ]
          });

        } catch (err) {
          console.error(`Error processing ${prod.code}:`, err);
        }
      }
    }
  }

  // Save JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_macrames_generated.json'),
    JSON.stringify(allExtractedMacrames, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedMacrames.length} Jute Macrame products!`);
}

processMacrames();
