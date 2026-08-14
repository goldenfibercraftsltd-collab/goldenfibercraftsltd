import fs from 'fs';
import path from 'path';

async function main() {
  try {
    const res = await fetch('https://bdcreation.com.bd/handicrafts-material', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log('Status:', res.status);
    if (!res.ok) return;
    const html = await res.text();
    fs.writeFileSync('bd_page.html', html);
    console.log('Saved bd_page.html, size:', html.length);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}

main();
