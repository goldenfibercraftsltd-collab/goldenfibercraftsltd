const fs = require('fs');
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');

async function testPouf() {
  const testInput = path.resolve('public/products/bjp_01.jpg');
  const tempOutput = path.resolve('public/products/bjp_01_test_white.jpg');

  console.log('Testing pouf background removal on:', testInput);
  const startTime = Date.now();

  const fileBuffer = fs.readFileSync(testInput);
  const blobIn = new Blob([fileBuffer], { type: 'image/jpeg' });
  
  const blob = await removeBackground(blobIn);
  const arrayBuffer = await blob.arrayBuffer();
  const transparentBuffer = Buffer.from(arrayBuffer);

  console.log(`Pouf background removed in ${(Date.now() - startTime) / 1000}s`);

  await sharp(transparentBuffer)
    .resize(1000, 1000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255 }
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 92 })
    .toFile(tempOutput);

  console.log('Saved pouf test output to:', tempOutput);
}

testPouf().catch(console.error);
