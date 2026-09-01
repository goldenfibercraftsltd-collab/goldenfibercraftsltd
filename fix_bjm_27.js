import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imgPath = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/0e8759ea-ee7c-4e10-bfc2-d7661882988e/.user_uploaded/media_1787431437604.png';
const outPath = 'public/products/bjm_27.png';

async function extractBjm27() {
  const meta = await sharp(imgPath).metadata();
  const { width, height } = meta;
  const colWidth = width / 6;
  const rowHeight = height / 2;

  // BJM-27 is row 0, col 4
  const cellLeft = Math.round(4 * colWidth);
  const cellTop = Math.round(0 * rowHeight);

  // Focus precisely on the circular mat, avoiding the bottom text
  const cropLeft = Math.round(cellLeft + colWidth * 0.05);
  const cropTop = Math.round(cellTop + rowHeight * 0.08);
  const cropWidth = Math.round(colWidth * 0.88);
  const cropHeight = Math.round(rowHeight * 0.72);

  const cropped = await sharp(imgPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(1024, 1024, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.5, m1: 1.5, m2: 0.7 })
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(outPath, cropped);
  console.log('✅ Perfectly re-extracted bjm_27.png to 1024x1024');
}

extractBjm27().catch(console.error);
