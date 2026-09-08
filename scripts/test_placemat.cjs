const fs = require('fs');
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');

async function testPlacemat() {
  const testInput = path.resolve('public/products/bjm_01.png');
  const tempOutput = path.resolve('public/products/bjm_01_test_white.jpg');

  console.log('Testing placemat background removal on:', testInput);
  const startTime = Date.now();

  const fileBuffer = fs.readFileSync(testInput);
  const blobIn = new Blob([fileBuffer], { type: 'image/png' });
  
  const blob = await removeBackground(blobIn);
  const arrayBuffer = await blob.arrayBuffer();
  const transparentBuffer = Buffer.from(arrayBuffer);

  console.log(`Placemat background removed in ${(Date.now() - startTime) / 1000}s`);

  await sharp(transparentBuffer)
    .resize(1000, 1000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255 }
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 92 })
    .toFile(tempOutput);

  console.log('Saved placemat test output to:', tempOutput);
}

testPlacemat().catch(console.error);
