import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded';
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Exact 28 products from the 3 user images
const sheets = [
  {
    file: 'media_1787429536577.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      {
        code: 'BJB-68',
        name: 'Checkered Woven Jute Shopping Bag',
        material: '100% Natural Jute',
        desc: 'Artisanal handwoven jute shopping tote featuring a stylish two-tone diamond checkered weave with reinforced top handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Jute & Bleached Cream Diamond Weave'
      },
      {
        code: 'BJB-69',
        name: 'Conical Jute & Fabric Beach Bag',
        material: 'Jute & Fabric',
        desc: 'Wide flared conical beach bag crafted from woven golden jute with red-trimmed supportive vertical carry straps.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Jute with Red Edge Trimming'
      },
      {
        code: 'BJB-66',
        name: 'Dusty Rose Braided Jute Bucket Bag',
        material: '100% Natural Jute',
        desc: 'Charming dusty rose dyed coiled jute bucket bag with sturdy upright handle and artisanal woven loop detail.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Dusty Rose / Coral Pink'
      },
      {
        code: 'BJB-67',
        name: 'Round Jute Gift Bag with Tassel',
        material: '100% Natural Jute',
        desc: 'Circular handwoven natural golden jute handbag featuring long comfortable shoulder straps and decorative vibrant tassels.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Golden Jute with Coral Tassels'
      },
      {
        code: 'BJB-07',
        name: 'Wholesale Jute Utility Bowls (Set of 3)',
        material: '100% Natural Jute',
        desc: 'Versatile nesting trio of shallow round charcoal grey jute tote baskets with integrated side carrying handles.',
        unit: 'S/3',
        category: 'jute',
        subCategory: 'bags',
        color: 'Charcoal Grey with Natural Stripe Accent'
      },
      {
        code: 'BJB-70',
        name: 'Nautical Striped Jute Rope Boat Bag',
        material: '100% Natural Jute',
        desc: 'Wide boat tote constructed from thick coiled jute rope with horizontal navy blue and cream stripes and double handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Navy Blue & Natural Cream Stripe'
      },
      // Row 2 (4 items)
      {
        code: 'BJB-71',
        name: 'Teal & Tangerine Striped Jute Bag',
        material: '100% Natural Jute',
        desc: 'Vibrant flared woven jute tote bag in brilliant teal green-blue with bold orange horizontal stripes and teal carry handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Teal Blue with Tangerine Orange Stripes'
      },
      {
        code: 'BJB-72',
        name: 'Crimson & Navy Striped Jute Tote Bag',
        material: '100% Natural Jute',
        desc: 'Eye-catching flared basket tote crafted in deep crimson red dyed jute with contrasting navy blue accent stripes.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Crimson Red with Navy Blue Stripes'
      },
      {
        code: 'BJB-73',
        name: 'Violet & Orange Striped Eco-Friendly Jute Bag',
        material: '100% Natural Jute',
        desc: 'Eco-friendly flared tote bag handwoven in royal violet purple jute with warm orange horizontal stripes and purple handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Royal Violet Purple with Orange Stripes'
      },
      {
        code: 'BJB-74',
        name: 'Mustard Golden & White Striped Jute Bag',
        material: '100% Natural Jute',
        desc: 'Sunny flared market tote bag woven with rich mustard golden yellow jute and crisp white accent stripes with matching handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Mustard Golden Yellow & White Stripe'
      }
    ]
  },
  {
    file: 'media_1787429564621.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      {
        code: 'BJB-26',
        name: 'Unbleached Natural Jute Backpack Tote',
        material: '100% Natural Jute',
        desc: 'Minimalist sustainable unbleached jute backpack with comfortable wide shoulder straps and relaxed drawstring top.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Cream Unbleached Jute'
      },
      {
        code: 'BJB-55',
        name: 'Two-Tone Coiled Rope Jute Boat Tote',
        material: '100% Natural Jute',
        desc: 'Elegant wide-mouth boat tote bag crafted from horizontal coiled jute rope with cream upper half and natural tan lower body.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Cream White & Natural Tan Gradient'
      },
      {
        code: 'BJB-56',
        name: 'Handcrafted Golden Jute Classic Tote',
        material: '100% Natural Jute',
        desc: 'Structured square shopping tote made from tightly woven natural golden jute fiber with sturdy integrated shoulder straps.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Golden Jute'
      },
      {
        code: 'BJB-57',
        name: 'Mandala Print Laminated Jute Tote',
        material: '100% Laminated Jute',
        desc: 'Spacious laminated water-resistant natural jute tote bag decorated with an intricate teal blue artisanal mandala screen print.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Jute with Teal Blue Mandala'
      },
      {
        code: 'BJB-58',
        name: 'Color-Dipped Jute Basket Bag with Tassels',
        material: '100% Natural Jute',
        desc: 'Conical flared natural jute basket bag featuring a sunny yellow dipped base and handcrafted pink and orange tassel ornaments.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Jute, Sun Yellow Base & Pink Tassels'
      },
      {
        code: 'BJB-59',
        name: 'Nautical Slub Striped Flared Jute Bag',
        material: '100% Natural Jute',
        desc: 'Chic flared market bag with horizontal denim blue and white slub stripes and seamless circular woven carry cutout.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Denim Blue & Off-White Stripe'
      },
      // Row 2
      {
        code: 'BJB-60',
        name: 'Striped Jute Oval Bag with Leather Handles',
        material: '100% Natural Jute, Genuine Leather',
        desc: 'Sophisticated oval flared natural jute bag with crisp horizontal black stripes and premium riveted genuine leather handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Cream with Black Stripes & Brown Leather'
      },
      {
        code: 'BJB-61',
        name: 'Tri-Tone Sun & Ocean Jute Flared Bag',
        material: '100% Natural Jute',
        desc: 'Vibrant tri-color flared tote bag with natural tan upper tier, vivid saffron yellow middle band, and royal blue base.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Tan, Saffron Yellow & Royal Blue'
      },
      {
        code: 'BJB-62',
        name: 'Charcoal Mélange Striped Woven Jute Tote',
        material: '100% Natural Jute',
        desc: 'Textured flared shopper bag in charcoal grey and natural mélange pinstripe weave with soft double rope shoulder straps.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Charcoal Grey & Natural Mélange'
      },
      {
        code: 'BJB-63',
        name: 'Colorblock Cream & Charcoal Jute Tote',
        material: '100% Natural Jute',
        desc: 'Modern flared shopper tote with clean cream upper body, charcoal heather base, and elongated upright tubular handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Cream Top & Charcoal Grey Bottom'
      },
      {
        code: 'BJB-64',
        name: 'Lilac & Lemon Striped Jute Ladies Bag',
        material: '100% Natural Jute',
        desc: 'Feminine flared market tote featuring a dusty lilac mauve top section and cheerful lemon yellow and white striped body.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Lilac Mauve, Lemon Yellow & White'
      },
      {
        code: 'BJB-65',
        name: 'Golden Jute Oval Basket Bag with Leather Straps',
        material: '100% Natural Jute, Genuine Leather',
        desc: 'Handcrafted flared boat basket bag woven from coarse golden jute, finished with hand-stitched tan leather carry straps.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Golden Jute with Tan Leather'
      }
    ]
  },
  {
    file: 'media_1787429583766.png',
    rows: 1,
    cols: 6,
    products: [
      // Row 1
      {
        code: 'BJB-17',
        name: 'Structured Midnight Black Jute Tote',
        material: '100% Natural Jute',
        desc: 'Sleek structured rectangular tote bag crafted from deep black dyed golden jute fiber with reinforced double handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Midnight Jet Black'
      },
      {
        code: 'BJB-05',
        name: 'Indigo Striped Jute-Cotton Market Bag',
        material: 'Jute & Cotton Blend',
        desc: 'Classic market tote bag featuring vertical indigo navy and white pinstripes with natural unbleached jute support handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Indigo Navy & White Vertical Stripe'
      },
      {
        code: 'BJB-06',
        name: 'Eco-Textured Jute-Jhuta Blend Shopper',
        material: '60% Jute, 35% Jhuta Recycled Fiber, 5% Cotton',
        desc: 'Sustainable textured eco-bag woven from upcycled cotton-jhuta and natural golden jute with vertical webbing strap handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Natural Oatmeal Tweed / Earthy Beige'
      },
      {
        code: 'BJB-15',
        name: 'Candy Cane Red Striped Coiled Jute Bag',
        material: '100% Natural Jute',
        desc: 'Chic cylindrical bucket bag crafted from off-white coiled rope featuring vibrant scarlet red vertical stripes and red handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Off-White with Scarlet Red Vertical Stripes'
      },
      {
        code: 'BJB-16',
        name: 'Classic Monochrome Striped Jute Tote',
        material: '100% Natural Jute',
        desc: 'Timeless horizontal striped tote bag in alternating black and cream white jute bands with sleek black rope shoulder straps.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Black & Cream Monochrome Stripe'
      },
      {
        code: 'BJB-25',
        name: 'Wide Natural Golden Jute Basket Tote',
        material: '100% Natural Jute',
        desc: 'Expansive boat-style woven market basket bag crafted from 100% untreated golden jute with thick vertical support handles.',
        unit: 'S/1',
        category: 'jute',
        subCategory: 'bags',
        color: 'Pure Natural Golden Jute'
      }
    ]
  }
];

async function processAll() {
  const allExtractedProducts = [];

  for (let sIdx = 0; sIdx < sheets.length; sIdx++) {
    const sheet = sheets[sIdx];
    const imgPath = path.join(brainDir, sheet.file);
    const meta = await sharp(imgPath).metadata();
    const { width, height } = meta;

    const colWidth = width / sheet.cols;
    const rowHeight = height / sheet.rows;

    console.log(`Processing sheet ${sheet.file} (${width}x${height})...`);

    for (let r = 0; r < sheet.rows; r++) {
      for (let c = 0; c < sheet.cols; c++) {
        const pIdx = r * sheet.cols + c;
        if (pIdx >= sheet.products.length) continue;

        const prod = sheet.products[pIdx];
        const codeSlug = prod.code.toLowerCase().replace(/[^a-z0-9]+/g, '_');
        const filename = `${codeSlug}.png`;
        const destFile = path.join(outDir, filename);

        // Crop image area inside each cell
        const cellLeft = Math.round(c * colWidth);
        const cellTop = Math.round(r * rowHeight);
        
        // Exact crop boundaries for clean isolate of the bag without headers/footers
        const cropLeft = Math.max(0, Math.round(cellLeft + colWidth * 0.04));
        const cropTop = Math.max(0, Math.round(cellTop + rowHeight * 0.16));
        const cropWidth = Math.min(width - cropLeft, Math.round(colWidth * 0.92));
        const cropHeight = Math.min(height - cropTop, Math.round(rowHeight * 0.68));

        try {
          const croppedBuffer = await sharp(imgPath)
            .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
            .toBuffer();

          // Create a crisp high-res 600x600 centered white product card
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

          console.log(`Extracted product image: ${filename}`);

          const primaryImage = `/products/${filename}`;
          const gallery = [`/products/${filename}`];

          allExtractedProducts.push({
            id: prod.code,
            slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
            code: prod.code,
            name: prod.name,
            category: 'jute',
            categoryName: 'Jute',
            categorySlug: 'jute',
            subCategory: 'bags',
            image: primaryImage,
            galleryImages: gallery,
            description: prod.desc,
            longDescription: {
              overview: `The ${prod.name} (Art No: ${prod.code}) is masterfully handcrafted from ${prod.material}. Designed for international eco-fashion retailers, lifestyle brands, departmental stores, and green consumer boutiques.`,
              craftsmanship: 'Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability and high load-bearing capacity.',
              exportDetails: 'Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification. FCL and LCL container loading ready.',
              careInstructions: 'Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness.'
            },
            unit: prod.unit,
            cbmPerCarton: 0.045,
            setPerCarton: prod.unit.includes('S/3') ? 6 : 24,
            nwPerCtn: 6.5,
            gwPerCtn: 7.8,
            material: prod.material,
            color: prod.color,
            specifications: [
              { key: 'Item Code', value: prod.code },
              { key: 'Item Name', value: prod.name },
              { key: 'Packaging Unit', value: prod.unit },
              { key: 'Materials', value: prod.material },
              { key: 'Color / Weave', value: prod.color },
              { key: 'MOQ', value: '500 Pieces' },
              { key: 'Country of Origin', value: 'Bangladesh' }
            ],
            features: [
              '100% Biodegradable & Eco-Friendly Jute',
              'Authentic Bangladeshi Handcrafted Heritage',
              'Heavy Duty Export Quality & Reinforced Stitches',
              'Reusable Sustainable Lifestyle Fashion'
            ]
          });

        } catch (err) {
          console.error(`Error processing ${prod.code}:`, err);
        }
      }
    }
  }

  // Save extracted products JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_bags_generated.json'),
    JSON.stringify(allExtractedProducts, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedProducts.length} Jute Bag products!`);
}

processAll();
