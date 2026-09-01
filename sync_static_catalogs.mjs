import fs from 'fs';

const updates = {
  'DJB-64-0': {
    image: '/products/djb_64_0_new.jpg',
    galleryImages: ['/products/djb_64_0_new.jpg']
  },
  'DJB-52': {
    image: '/products/djb_52_new.jpg',
    galleryImages: ['/products/djb_52_new.jpg']
  },
  'GFC-SB-030': {
    image: '/products/gfc_sb_030_new.jpg',
    galleryImages: ['/products/gfc_sb_030_new.jpg']
  },
  'BJB-69': {
    image: '/products/bjb_69_new.jpg',
    galleryImages: ['/products/bjb_69_new.jpg']
  },
  'BJB-68': {
    image: '/products/bjb_68_new.jpg',
    galleryImages: ['/products/bjb_68_new.jpg', '/products/bjb_68_lifestyle.jpg']
  },
  'BJB-66': {
    image: '/products/bjb_66_new.jpg',
    galleryImages: ['/products/bjb_66_new.jpg', '/products/bjb_66_lifestyle.jpg']
  },
  'BJB-67': {
    image: '/products/bjb_67_new.jpg',
    galleryImages: ['/products/bjb_67_new.jpg']
  },
  'BJB-07': {
    image: '/products/bjb_07_new.jpg',
    galleryImages: ['/products/bjb_07_new.jpg', '/products/bjb_07_lifestyle.jpg']
  },
  'BJB-70': {
    image: '/products/bjb_70_new.jpg',
    galleryImages: ['/products/bjb_70_new.jpg', '/products/bjb_70_gallery_1.jpg', '/products/bjb_70_gallery_2.jpg']
  },
  'BJB-26': {
    image: '/products/bjb_26_new.jpg',
    galleryImages: ['/products/bjb_26_new.jpg', '/products/bjb_26_lifestyle.jpg']
  },
  'BJB-55': {
    image: '/products/bjb_55_new.jpg',
    galleryImages: ['/products/bjb_55_new.jpg']
  },
  'BJB-56': {
    image: '/products/bjb_56_new.jpg',
    galleryImages: ['/products/bjb_56_new.jpg', '/products/bjb_56_lifestyle.jpg']
  },
  'BJB-57': {
    image: '/products/bjb_57_new.jpg',
    galleryImages: ['/products/bjb_57_new.jpg']
  },
  'BJB-58': {
    image: '/products/bjb_58_new.jpg',
    galleryImages: ['/products/bjb_58_new.jpg', '/products/bjb_58_lifestyle.jpg']
  }
};

// 1. Update jute_bags_generated.json
const bagsPath = 'src/data/jute_bags_generated.json';
if (fs.existsSync(bagsPath)) {
  let bags = JSON.parse(fs.readFileSync(bagsPath, 'utf8'));
  bags = bags.filter(b => !['BJB-71', 'BJB-72', 'BJB-73', 'BJB-74'].includes(b.id) && !['BJB-71', 'BJB-72', 'BJB-73', 'BJB-74'].includes(b.code));
  for (const b of bags) {
    if (updates[b.id] || updates[b.code]) {
      const u = updates[b.id] || updates[b.code];
      b.image = u.image;
      b.galleryImages = u.galleryImages;
    }
  }
  fs.writeFileSync(bagsPath, JSON.stringify(bags, null, 2), 'utf8');
  console.log('✅ Updated jute_bags_generated.json');
}

// 2. Update jute_baskets_generated.json
const basketsPath = 'src/data/jute_baskets_generated.json';
if (fs.existsSync(basketsPath)) {
  let baskets = JSON.parse(fs.readFileSync(basketsPath, 'utf8'));
  for (const b of baskets) {
    if (updates[b.id] || updates[b.code]) {
      const u = updates[b.id] || updates[b.code];
      b.image = u.image;
      b.galleryImages = u.galleryImages;
    }
  }
  fs.writeFileSync(basketsPath, JSON.stringify(baskets, null, 2), 'utf8');
  console.log('✅ Updated jute_baskets_generated.json');
}

// 3. Update products.ts
const productsPath = 'src/data/products.ts';
let code = fs.readFileSync(productsPath, 'utf8');

for (const [id, u] of Object.entries(updates)) {
  // Regex to match the product object by id
  const pattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?image:\\s*["'])[^"']+([\\s\\S]*?galleryImages:\\s*\\[)[^\\]]*(\\])`, 'g');
  code = code.replace(pattern, (match, p1, p2, p3) => {
    return `${p1}${u.image}${p2}${u.galleryImages.map(g => `"${g}"`).join(', ')}${p3}`;
  });
}

fs.writeFileSync(productsPath, code, 'utf8');
console.log('✅ Updated products.ts');
