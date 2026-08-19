const fs = require('fs');
const sharp = require('sharp');

async function createSvgWrappers() {
  // Read the transparent PNGs
  const logoPngBuffer = fs.readFileSync('public/logo.png');
  const logoBase64 = logoPngBuffer.toString('base64');
  
  const logoMeta = await sharp(logoPngBuffer).metadata();
  console.log('Logo dimensions:', logoMeta.width, 'x', logoMeta.height);
  
  // 1. logo-header.svg & logo.svg
  const logoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logoMeta.width} ${logoMeta.height}" width="100%" height="100%">
  <image href="data:image/png;base64,${logoBase64}" x="0" y="0" width="${logoMeta.width}" height="${logoMeta.height}" />
</svg>`;
  
  fs.writeFileSync('public/logo-header.svg', logoSvgContent, 'utf8');
  fs.writeFileSync('public/logo.svg', logoSvgContent, 'utf8');
  console.log('Created logo-header.svg and logo.svg');
  
  // 2. logo-icon.png & logo-icon.svg
  const iconPngBuffer = fs.readFileSync('public/logo-icon.png');
  const iconBase64 = iconPngBuffer.toString('base64');
  const iconMeta = await sharp(iconPngBuffer).metadata();
  console.log('Icon dimensions:', iconMeta.width, 'x', iconMeta.height);
  
  const iconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconMeta.width} ${iconMeta.height}" width="100%" height="100%">
  <image href="data:image/png;base64,${iconBase64}" x="0" y="0" width="${iconMeta.width}" height="${iconMeta.height}" />
</svg>`;
  
  fs.writeFileSync('public/logo-icon.svg', iconSvgContent, 'utf8');
  console.log('Created logo-icon.svg');
  
  // 3. favicon.svg
  const favSize = Math.max(iconMeta.width, iconMeta.height);
  const padX = (favSize - iconMeta.width) / 2;
  const padY = (favSize - iconMeta.height) / 2;
  
  const faviconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${favSize} ${favSize}" width="100%" height="100%">
  <image href="data:image/png;base64,${iconBase64}" x="${padX}" y="${padY}" width="${iconMeta.width}" height="${iconMeta.height}" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvgContent, 'utf8');
  console.log('Created favicon.svg');
}

createSvgWrappers().catch(console.error);
