import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/5bb78b66-8986-43ee-aed8-c565e98b9bb7';
const userUploads = path.join(brainDir, '.user_uploaded');
const outDir = path.resolve('public/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Copy over all high-res AI generated images from brain
const brainFiles = fs.readdirSync(brainDir);
const aiImages = {};

for (const file of brainFiles) {
  if (file.startsWith('djb_') && file.endsWith('.jpg')) {
    const codeKey = file.split('_')[0] + '_' + file.split('_')[1]; // e.g. djb_01
    const dest = path.join(outDir, `${codeKey}_hd.jpg`);
    fs.copyFileSync(path.join(brainDir, file), dest);
    aiImages[codeKey] = `/products/${codeKey}_hd.jpg`;
    console.log(`Copied AI HD image: ${codeKey} -> ${dest}`);
  }
}

// 2. Define the exact 42 products from the 4 user images
const sheets = [
  {
    file: 'media_1787421996909.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      { code: 'DJB-01', name: 'Storage Jute Basket (Set of 3)', material: '100% Natural Jute', desc: 'Handwoven shallow round storage jute baskets with red stitched accents.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-05', name: 'Jute Fruit Basket (Set of 3)', material: '100% Natural Jute', desc: 'Teal green dyed coiled jute tabletop fruit baskets with side loop handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-25', name: 'Jute Fruit Basket with Rings', material: '100% Natural Jute', desc: 'Mustard yellow handwoven jute fruit bowl with concentric ring appliques.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-03', name: 'Jute Round Basket with Black Rim', material: '100% Natural Jute', desc: 'Natural golden jute round organizer baskets with contrasting black stitched top rim.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-11', name: 'Jute Round Cylinder Bins', material: '100% Natural Jute', desc: 'Deep black body cylindrical storage baskets with natural jute folded top rim.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-13', name: 'Lidded Jute Storage Canisters', material: '100% Natural Jute', desc: 'Tri-tone natural and cream cylindrical baskets with fitted lids and top knobs.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      // Row 2
      { code: 'DJB-28', name: 'Two-Tone Jute Round Cylinder Planters', material: '100% Natural Jute', desc: 'Grey and white dipped cylindrical jute planter baskets with clean modern aesthetic.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-34', name: 'Jute Mini Baskets with Handles', material: '100% Natural Jute', desc: 'Charcoal black braided mini storage bowls with integrated side loop handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-35', name: 'Cream Jute Cylinder with Curved Handles', material: '100% Natural Jute', desc: 'Unbleached natural cream jute storage cylinder with curved side handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-38', name: 'Forest Green Stripe Cylinder with Leather Handles', material: '100% Natural Jute, Leather', desc: 'Forest green coiled storage buckets with genuine leather loop handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-40', name: 'Jute Round Conical Baskets with Tassels', material: '100% Natural Jute', desc: 'Dusty mauve rose conical taper bowls with decorative side tassels.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-41', name: 'Jute Round Cylinder with Long Handles', material: '100% Natural Jute', desc: 'Tall two-tone natural and white laundry baskets with long upright handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
    ]
  },
  {
    file: 'media_1787422023751.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      { code: 'DJB-49', name: 'Mustard Jute Fruit Cup Cylinder', material: '100% Natural Jute, Faux Leather', desc: 'Mustard yellow cylinder organizer buckets with brown leather carry handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-50', name: 'Colorblock Jute Cylinder with Handles', material: '100% Natural Jute', desc: 'Tri-color navy blue, mustard yellow, and grey cylinder storage bins with handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-65', name: 'Jute Small Stripe Basket Trays', material: '100% Natural Jute', desc: 'Low-profile round natural jute organizer trays with golden yellow center stripe.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-14', name: 'Jute Tiffin Box with Lid', material: '100% Natural Jute', desc: 'Mustard yellow round canister storage boxes with matching fitted domed lids.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'BDF-44', name: 'Oval Bread Basket with Blue Center', material: '100% Natural Jute', desc: 'Oval natural jute serving bread tray with bright sky blue woven base.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'BDF-45', name: 'Oval Jute Cylinder with Handles', material: '100% Natural Jute', desc: 'Oval shallow coiled natural jute trays with curved side loop handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      // Row 2
      { code: 'BDH-171', name: 'Handcrafted Kitchen Storage Cylinder', material: 'Natural Straw + Jute Thread', desc: 'Cylindrical coil-stitched natural fiber storage canister with red accent stripe.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'BDH-172', name: 'Coiled Jute Sunburst Small Bowl', material: 'Natural Straw + Jute Thread', desc: 'Hand-stitched natural fiber shallow bowl with multi-color radial sunburst swirl.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-36', name: 'Jute Cat Ears Toy Basket', material: '100% Natural Jute', desc: 'Adorable natural cream woven bowl baskets with cat ears and embroidered face.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-37', name: 'White Braid Basket with Green Coin Accents', material: '100% Natural Jute', desc: 'Off-white coiled jute storage baskets with emerald green stripe and circle coin motifs.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-04', name: 'Jute Square Storage Box Cubes', material: '100% Natural Jute', desc: 'Square natural golden jute organization cubes with white horizontal pinstripes.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-07', name: 'Jute Rectangular Storage Bins', material: '100% Natural Jute', desc: 'Rectangular natural jute organizing bins with white horizontal pinstripes.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
    ]
  },
  {
    file: 'media_1787422051863.png',
    rows: 2,
    cols: 6,
    products: [
      // Row 1
      { code: 'DJB-61', name: 'Large Storage Laundry Basket with Lid', material: '100% Natural Jute', desc: 'Two-tone grey and white cylindrical laundry hampers with matching fitted lids.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-62', name: 'Charcoal Heather Storage Basket with Lid', material: '100% Natural Jute', desc: 'Charcoal heathered and cream tall cylindrical laundry hampers with lids.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-64', name: 'Jute Storage Basket with Upright Handles', material: '100% Natural Jute', desc: 'Black cylindrical storage bins with white horizontal pinstripe and carry handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'BJB-15-CSF', name: 'Round Cylinder Basket with Terracotta Stripe', material: '100% Natural Jute', desc: 'Natural jute laundry baskets with terracotta rust pinstripes and side handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'BJB-15-GRS', name: 'Round Storage Basket with Teal Stripe', material: '100% Natural Jute', desc: 'Natural golden jute storage bins with dark teal horizontal stripes and side handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-57', name: 'Jute Urn Laundry Basket', material: '100% Natural Jute', desc: 'Grey woven amphora urn-shaped laundry hampers with black and white accent stripes.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      // Row 2
      { code: 'DJB-60', name: 'Rectangular Jute Caddy with Handles', material: '100% Natural Jute', desc: 'Deep navy blue and white two-tone rectangular storage caddies with upright handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-66', name: 'Round Braided Fruit Basket with Overhead Handle', material: '100% Natural Jute', desc: 'Rustic braided dark charcoal and natural round fruit bowls with tall carry handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-71', name: 'Two-Tone Royal Blue Jute Belly Basket', material: '100% Natural Jute', desc: 'Two-tone natural jute and royal blue collapsible belly basket with handles.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-80', name: 'Jute Bear Face Kids Toy Basket', material: '100% Natural Jute', desc: 'Natural brown jute toy storage hamper with bear ears and stitched bear face.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-82', name: 'Jute Bunny Kids Toy Basket', material: '100% Natural Jute', desc: 'Cream white jute bunny toy storage basket with tall ears and sweet bunny face.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-81', name: 'Grey Teddy Bear Jute Toy Storage Hamper', material: '100% Natural Jute', desc: 'Muted grey taupe jute teddy bear storage basket with ears and snout detail.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
    ]
  },
  {
    file: 'media_1787422067706.png',
    rows: 1,
    cols: 6,
    products: [
      // Row 1
      { code: 'DJB-08', name: 'Emerald Green Striped Round Baskets', material: '100% Natural Jute', desc: 'Vibrant emerald green round storage baskets with white horizontal pinstripes.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-85', name: 'Festive Christmas Santa Belly Basket', material: '100% Natural Jute', desc: 'Holiday Santa Claus themed jute belly basket with red hat, beard, and pom-pom nose.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-84', name: 'Festive Snowman Jute Belly Basket', material: '100% Natural Jute', desc: 'Winter snowman themed off-white jute belly basket with beanie hat and carrot nose.', unit: 'S/1', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-61-0', name: 'Tri-Tone Blue Cylinder Jute Baskets', material: '100% Natural Jute', desc: 'Tri-tone cream, sky blue, and dark navy blue cylindrical planter baskets.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-64-0', name: 'Rectangular Jute Vanity Tray with Red Trim', material: '100% Natural Jute', desc: 'Shallow rectangular off-white jute vanity organizer trays with red edge piping.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
      { code: 'DJB-52', name: 'Red & Cream Scalloped Storage Baskets', material: '100% Natural Jute', desc: 'Two-tone off-white and scarlet red storage baskets with scalloped rim and red handles.', unit: 'S/3', category: 'jute', subCategory: 'baskets' },
    ]
  }
];

async function processAll() {
  const allExtractedProducts = [];

  for (let sIdx = 0; sIdx < sheets.length; sIdx++) {
    const sheet = sheets[sIdx];
    const imgPath = path.join(userUploads, sheet.file);
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

        // Crop precisely the image area inside each cell
        // Top text header occupies top ~15% of cell, bottom code occupies bottom ~15% of cell
        const cellLeft = Math.round(c * colWidth);
        const cellTop = Math.round(r * rowHeight);
        
        // Extract product visual box
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

          const aiKey = codeSlug;
          const primaryImage = aiImages[aiKey] || `/products/${filename}`;
          const gallery = aiImages[aiKey] ? [aiImages[aiKey], `/products/${filename}`] : [`/products/${filename}`];

          allExtractedProducts.push({
            id: prod.code,
            slug: `${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prod.code.toLowerCase()}`,
            code: prod.code,
            name: prod.name,
            category: 'jute',
            categoryName: 'Jute',
            categorySlug: 'jute',
            subCategory: 'baskets',
            image: primaryImage,
            galleryImages: gallery,
            description: prod.desc,
            longDescription: {
              overview: `The ${prod.name} (Art No: ${prod.code}) is masterfully handcrafted from ${prod.material}. Designed for international retail brands, luxury home decor boutiques, and sustainable organization solutions.`,
              craftsmanship: 'Handcrafted by skilled Bengali women artisans in rural handicraft clusters. 100% natural, biodegradable fibers, tightly hand-braided and stitched with precision for long-lasting durability.',
              exportDetails: 'Shipped in heavy-duty 5-ply export master cartons. Moisture inspected (<12%), mold-free guarantee, barcode labeled per buyer specification.',
              careInstructions: 'Spot clean with a soft dry cloth. Store in dry, well-ventilated areas. Keep away from prolonged excessive dampness.'
            },
            unit: prod.unit,
            cbmPerCarton: 0.058,
            setPerCarton: prod.unit.includes('S/3') ? 4 : (prod.unit.includes('S/2') ? 6 : 12),
            nwPerCtn: 4.2,
            gwPerCtn: 5.5,
            material: prod.material,
            color: 'Natural Jute & Dyed Fiber Accents',
            specifications: [
              { key: 'Item Code', value: prod.code },
              { key: 'Item Name', value: prod.name },
              { key: 'Packaging Unit', value: prod.unit },
              { key: 'Materials', value: prod.material },
              { key: 'MOQ', value: '200 Sets' },
              { key: 'Country of Origin', value: 'Bangladesh' }
            ],
            features: ['100% Natural Eco Jute', 'Authentic Bangladeshi Craftsmanship', 'Heavy Duty Export Quality', 'Multi-Purpose Home Organizer']
          });

        } catch (err) {
          console.error(`Error processing ${prod.code}:`, err);
        }
      }
    }
  }

  // Save extracted products JSON
  fs.writeFileSync(
    path.resolve('src/data/jute_baskets_generated.json'),
    JSON.stringify(allExtractedProducts, null, 2)
  );

  console.log(`\nSuccessfully processed and saved ${allExtractedProducts.length} Jute Basket products!`);
}

processAll();
