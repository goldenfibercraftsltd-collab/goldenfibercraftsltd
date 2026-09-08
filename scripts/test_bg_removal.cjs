const fs = require('fs');
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');

async function testOne() {
  const testInput = path.resolve('public/products/bjb_69_new.jpg');
  const tempOutput = path.resolve('public/products/bjb_69_test_white.jpg');

  console.log('Testing background removal on:', testInput);
  const startTime = Date.now();

  const fileBuffer = fs.readFileSync(testInput);
  const blobIn = new Blob([fileBuffer], { type: 'image/jpeg' });
  
  const blob = await removeBackground(blobIn);
  const arrayBuffer = await blob.arrayBuffer();
  const transparentBuffer = Buffer.from(arrayBuffer);

  console.log(`Background removed in ${(Date.now() - startTime) / 1000}s`);

  const meta = await sharp(transparentBuffer).metadata();
  console.log(`Dimensions: ${meta.width}x${meta.height}`);

  await sharp(transparentBuffer)
    .resize(1000, 1000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255 }
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 92 })
    .toFile(tempOutput);

  console.log('Saved test output to:', tempOutput);
}

testOne().catch(console.error);
