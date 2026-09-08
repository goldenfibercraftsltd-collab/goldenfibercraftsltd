const sharp = require('sharp');

async function testCircle() {
  const width = 1024, height = 1024;
  const svgMask = Buffer.from(
    '<svg width="' + width + '" height="' + height + '">' +
    '<ellipse cx="505" cy="520" rx="430" ry="420" fill="white" />' +
    '</svg>'
  );
  
  const circleBuf = await sharp('public/products/bjm_08.png')
    .composite([{ input: svgMask, blend: 'dest-in' }])
    .toBuffer();
    
  await sharp(circleBuf)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .resize(1000, 1000, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 92 })
    .toFile('public/products/test_bjm_08_circle.jpg');
    
  console.log('Done test_bjm_08_circle.jpg');
}

testCircle().catch(console.error);
