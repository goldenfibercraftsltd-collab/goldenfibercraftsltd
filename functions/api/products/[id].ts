import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET single product
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const id = context.params.id as string;
    const product = await context.env.DB.prepare(
      `SELECT p.*, c.name as category_name, c.slug as category_slug
       FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?`
    ).bind(id).first();

    if (!product) return jsonResponse({ error: 'Product not found' }, 404);
    return jsonResponse({ success: true, product });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// PUT update product
export const onRequestPut: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const id = context.params.id as string;
    const body = await context.request.json() as any;

    const fields: string[] = [];
    const values: any[] = [];

    const allowedFields = ['category_id', 'item_code', 'name', 'description', 'material', 'size', 'color', 'moq', 'price_range', 'image_url', 'gallery_images', 'is_featured', 'is_active', 'display_order'];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        fields.push(`${field} = ?`);
        if (field === 'is_featured' || field === 'is_active') {
          values.push(body[field] ? 1 : 0);
        } else {
          values.push(body[field]);
        }
      }
    }

    if (!fields.length) return jsonResponse({ error: 'No fields to update' }, 400);

    fields.push("updated_at = datetime('now')");
    values.push(id);

    await context.env.DB.prepare(
      `UPDATE products SET ${fields.join(', ')} WHERE id = ?`
    ).bind(...values).run();

    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// DELETE product
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const id = context.params.id as string;

    // Get product to check for images to delete from Cloudinary
    const product = await context.env.DB.prepare('SELECT image_url, gallery_images FROM products WHERE id = ?').bind(id).first();
    
    if (!product) return jsonResponse({ error: 'Product not found' }, 404);

    // Delete from Cloudinary if image exists
    if (product.image_url && (product.image_url as string).includes('cloudinary')) {
      try {
        const publicId = extractCloudinaryPublicId(product.image_url as string);
        if (publicId) {
          await deleteFromCloudinary(publicId, context.env);
        }
      } catch { /* ignore cloudinary errors */ }
    }

    // Delete gallery images from Cloudinary
    if (product.gallery_images) {
      try {
        const gallery = JSON.parse(product.gallery_images as string);
        for (const url of gallery) {
          if (url.includes('cloudinary')) {
            const publicId = extractCloudinaryPublicId(url);
            if (publicId) await deleteFromCloudinary(publicId, context.env);
          }
        }
      } catch { /* ignore */ }
    }

    await context.env.DB.prepare('DELETE FROM products WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

function extractCloudinaryPublicId(url: string): string | null {
  try {
    const parts = url.split('/upload/');
    if (parts.length < 2) return null;
    let path = parts[1];
    // Remove version prefix (v1234567890/)
    path = path.replace(/^v\d+\//, '');
    // Remove file extension
    path = path.replace(/\.[^.]+$/, '');
    return path;
  } catch {
    return null;
  }
}

async function deleteFromCloudinary(publicId: string, env: Env) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signStr = `public_id=${publicId}&timestamp=${timestamp}${env.CLOUDINARY_API_SECRET}`;
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-1', encoder.encode(signStr));
  const signature = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

  const formData = new FormData();
  formData.append('public_id', publicId);
  formData.append('timestamp', timestamp);
  formData.append('api_key', env.CLOUDINARY_API_KEY);
  formData.append('signature', signature);

  await fetch(`https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/image/destroy`, {
    method: 'POST',
    body: formData,
  });
}
