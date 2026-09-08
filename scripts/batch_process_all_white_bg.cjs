const fs = require('fs');
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');

const PROGRESS_FILE = path.resolve(__dirname, '../.agents/white_bg_progress.json');
const NEEDS_FILE = path.resolve(__dirname, '../.agents/needs_white_bg.json');
const ARTIFACT_DIR = 'C:\\Users\\bangalee computer\\.gemini\\antigravity-ide\\brain\\f5d866c4-b8e6-4163-b1b7-b4aa705f5326';

// Pre-generated high-definition packshots for BJM-01, BJM-02, BJM-04
const PREGENERATED = {
  'bjm_01.png': path.join(ARTIFACT_DIR, 'bjm_01_packshot_1788860120580.jpg'),
  'bjm_02.png': path.join(ARTIFACT_DIR, 'bjm_02_packshot_1788860082442.jpg'),
  'bjm_04.png': path.join(ARTIFACT_DIR, 'bjm_04_packshot_1788860156588.jpg')
};

async function runBatch() {
  const needsList = JSON.parse(fs.readFileSync(NEEDS_FILE, 'utf8'));
  let progress = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    } catch (e) {
      progress = {};
    }
  }

  console.log(`Total items to process: ${needsList.length}`);
  console.log(`Already completed items: ${Object.keys(progress).length}`);

  let completedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < needsList.length; i++) {
    const item = needsList[i];
    const filename = path.basename(item.image_url);
    const targetPath = path.resolve(__dirname, '../public', item.image_url.replace(/^\//, ''));

    if (progress[item.code] && fs.existsSync(targetPath)) {
      console.log(`[${i + 1}/${needsList.length}] SKIP already processed: ${item.code} (${filename})`);
      continue;
    }

    console.log(`[${i + 1}/${needsList.length}] PROCESSING: ${item.code} - ${item.name} (${filename})...`);
    const startTime = Date.now();

    try {
      // Check if we have a pre-generated packshot for this file
      if (PREGENERATED[filename] && fs.existsSync(PREGENERATED[filename])) {
        console.log(`  -> Using pre-generated packshot for ${filename}`);
        const tempOut = targetPath + '.tmp.png';
        await sharp(PREGENERATED[filename])
          .resize(1000, 1000, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255 }
          })
          .flatten({ background: { r: 255, g: 255, b: 255 } })
          .png({ quality: 95 })
          .toFile(tempOut);

        if (fs.existsSync(targetPath)) {
          fs.unlinkSync(targetPath);
        }
        fs.renameSync(tempOut, targetPath);
      } else {
        // Run local AI background removal
        const isPng = filename.toLowerCase().endsWith('.png');
        const mime = isPng ? 'image/png' : 'image/jpeg';
        const fileBuffer = fs.readFileSync(targetPath);
        const blobIn = new Blob([fileBuffer], { type: mime });

        const blobOut = await removeBackground(blobIn);
        const transparentBuffer = Buffer.from(await blobOut.arrayBuffer());

        const tempOut = targetPath + '.tmp.' + (isPng ? 'png' : 'jpg');
        
        let pipeline = sharp(transparentBuffer)
          .resize(1000, 1000, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255 }
          })
          .flatten({ background: { r: 255, g: 255, b: 255 } });

        if (isPng) {
          await pipeline.png({ quality: 95 }).toFile(tempOut);
        } else {
          await pipeline.jpeg({ quality: 92 }).toFile(tempOut);
        }

        if (fs.existsSync(targetPath)) {
          fs.unlinkSync(targetPath);
        }
        fs.renameSync(tempOut, targetPath);
      }

      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`  -> SUCCESS in ${elapsed}s: ${item.code} (${filename})`);
      progress[item.code] = {
        timestamp: new Date().toISOString(),
        filename,
        elapsedSeconds: elapsed
      };
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
      completedCount++;
    } catch (err) {
      console.error(`  -> ERROR on ${item.code} (${filename}):`, err.message);
      failedCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Batch finished! Processed: ${completedCount}, Failed: ${failedCount}, Total Completed: ${Object.keys(progress).length}`);
  console.log(`========================================`);
}

runBatch().catch(console.error);
