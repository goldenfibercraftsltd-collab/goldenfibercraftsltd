import fs from 'fs';
import path from 'path';

async function parseAndDownload() {
  const html = fs.readFileSync('bd_page.html', 'utf8');
  
  // Find all img tags inside tables or content
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const images = [];
  while ((match = regex.exec(html)) !== null) {
    images.push(match[1]);
  }
  
  console.log('Total images found in HTML:', images.length);
  const materialImages = images.filter(src => src.includes('material') || src.includes('upload') || src.includes('product') || src.includes('gallery') || src.includes('images'));
  console.log('Filtered material images:', materialImages);
  
  const outDir = path.join(process.cwd(), 'public/materials');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < images.length; i++) {
    let src = images[i];
    if (src.startsWith('//')) src = 'https:' + src;
    else if (src.startsWith('/')) src = 'https://bdcreation.com.bd' + src;
    else if (!src.startsWith('http')) src = 'https://bdcreation.com.bd/' + src;

    // Only download actual material/product images
    if (!src.includes('logo') && !src.includes('banner') && !src.includes('icon')) {
      try {
        const res = await fetch(src, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          const filename = path.basename(new URL(src).pathname);
          fs.writeFileSync(path.join(outDir, `orig_${filename}`), buffer);
          console.log(`✅ Downloaded original: orig_${filename} (${buffer.length} bytes)`);
        }
      } catch (err) {
        console.error(`Failed to download ${src}:`, err.message);
      }
    }
  }
}

parseAndDownload();
