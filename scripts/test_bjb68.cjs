const fs = require('fs');
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');

async function testBjb68() {
  const testInput = path.resolve('public/products/bjb_68_new.jpg');
  const tempOutput = path.resolve('public/products/bjb_68_test_white.jpg');

  console.log('Testing BJB-68 background removal on:', testInput);
  const startTime = Date.now();

  const fileBuffer = fs.readFileSync(testInput);
  const blobIn = new Blob([fileBuffer], { type: 'image/jpeg' });
  
  const blob = await removeBackground(blobIn);
  const arrayBuffer = await blob.arrayBuffer();
  const transparentBuffer = Buffer.from(arrayBuffer);

  console.log(`BJB-68 background removed in ${(Date.now() - startTime) / 1000}s`);

  await sharp(transparentBuffer)
    .resize(1000, 1000, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255 }
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 92 })
    .toFile(tempOutput);

  console.log('Saved BJB-68 test output to:', tempOutput);
}

testBjb68().catch(console.error);
