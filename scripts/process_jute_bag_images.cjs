const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/bb8e420b-3efb-49b3-ad97-e28d9640155e';
const targetDir = path.join(__dirname, '..', 'public', 'images', 'blog');
const logoPath = path.join(__dirname, '..', 'public', 'logo-icon.png');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imageMap = [
  {
    src: path.join(brainDir, 'jute_bag_hero_featured_1789031505615.jpg'),
    dest: 'featured-jute-bag-manufacturer-bangladesh.jpg'
  },
  {
    src: path.join(brainDir, 'jute_bag_artisan_stitching_1789031717399.jpg'),
    dest: 'bangladeshi-artisan-stitching-jute-bag.jpg'
  },
  {
    src: path.join(brainDir, 'jute_bag_catalog_display_1789031745797.jpg'),
    dest: 'custom-jute-tote-bags-wholesale-display.jpg'
  },
  {
    src: path.join(brainDir, 'raw_tosha_jute_fiber_grading_1789031777568.jpg'),
    dest: 'raw-tosha-jute-fiber-inspection-bangladesh.jpg'
  },
  {
    src: path.join(brainDir, 'jute_bag_qc_moisture_testing_1789031964235.jpg'),
    dest: 'jute-bag-quality-control-moisture-inspection.jpg'
  }
];

async function processImages() {
  console.log('Starting image processing and watermarking...');

  for (const item of imageMap) {
    if (!fs.existsSync(item.src)) {
      console.error(`Missing source image: ${item.src}`);
      continue;
    }

    const destPath = path.join(targetDir, item.dest);
    const inputBuffer = fs.readFileSync(item.src);
    const meta = await sharp(inputBuffer).metadata();

    const logoWidth = Math.round(Math.max((meta.width || 1200) * 0.08, 90));
    const resizedLogo = await sharp(logoPath)
      .resize({ width: logoWidth })
      .png()
      .toBuffer();

    const logoMeta = await sharp(resizedLogo).metadata();
    const padding = Math.round((meta.width || 1200) * 0.025);
    const left = (meta.width || 1200) - (logoMeta.width || logoWidth) - padding;
    const top = (meta.height || 800) - (logoMeta.height || logoWidth) - padding;

    const watermarkedBuffer = await sharp(inputBuffer)
      .composite([
        {
          input: resizedLogo,
          top: top,
          left: left,
          blend: 'over'
        }
      ])
      .jpeg({ quality: 93 })
      .toBuffer();

    fs.writeFileSync(destPath, watermarkedBuffer);
    console.log(`✅ Saved and watermarked: ${item.dest} (${meta.width}x${meta.height})`);
  }
  console.log('All 5 images successfully processed!');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
