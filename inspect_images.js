import sharp from 'sharp';
import path from 'path';

const userUploads = 'C:/Users/bangalee computer/.gemini/antigravity-ide/brain/5bb78b66-8986-43ee-aed8-c565e98b9bb7/.user_uploaded';

const images = [
  'media_1787421996909.png',
  'media_1787422023751.png',
  'media_1787422051863.png',
  'media_1787422067706.png'
];

async function inspect() {
  for (const img of images) {
    const fullPath = path.join(userUploads, img);
    const meta = await sharp(fullPath).metadata();
    console.log(`${img}: ${meta.width}x${meta.height}`);
  }
}

inspect();
