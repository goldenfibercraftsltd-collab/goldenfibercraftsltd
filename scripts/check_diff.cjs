const fs = require('fs');
const path = require('path');

const nonWhite92 = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.agents/non_white_products.json'), 'utf8'));
const needs75 = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.agents/needs_white_bg.json'), 'utf8'));

const needsCodes = new Set(needs75.map(p => p.code));
const diff17 = nonWhite92.filter(p => !needsCodes.has(p.code));

console.log(`Difference count: ${diff17.length}`);
diff17.forEach(p => {
  console.log(`[${p.code}] ${p.name} (${p.sub_category}) nonWhiteRatio: ${p.nonWhiteRatio}% corners: ${JSON.stringify(p.corners)} path: ${p.image_url}`);
});
