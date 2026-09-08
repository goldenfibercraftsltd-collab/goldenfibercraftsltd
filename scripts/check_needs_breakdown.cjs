const fs = require('fs');
const path = require('path');

const list = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.agents/needs_white_bg.json'), 'utf8'));

const subcatCounts = {};
for (const item of list) {
  subcatCounts[item.sub_category] = (subcatCounts[item.sub_category] || 0) + 1;
}

console.log('Subcategories needing white background:');
console.table(subcatCounts);
console.log(`Total: ${list.length}`);
