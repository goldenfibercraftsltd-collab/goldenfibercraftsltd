import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET single product by ID or Item Code
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const idParam = context.params.id as string;

    const product = await context.env.DB.prepare(
      `SELECT p.*, c.name as category_name, c.slug as category_slug
       FROM products p LEFT JOIN categories c ON p.category_id = c.id 
       WHERE p.id = ? OR p.item_code = ? OR LOWER(p.item_code) = LOWER(?)`
    ).bind(idParam, idParam, idParam).first();

    if (!product) return jsonResponse({ error: 'Product not found' }, 404);
    return jsonResponse({ success: true, product });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// PUT update or upsert product
export const onRequestPut: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const idParam = context.params.id as string;
    const body = await context.request.json() as any;

    // Check if product exists by id or item_code
    const existing = await context.env.DB.prepare(
      'SELECT id, item_code FROM products WHERE id = ? OR item_code = ? OR LOWER(item_code) = LOWER(?)'
    ).bind(idParam, idParam, idParam).first() as any;

    // If category_id is slug, resolve to id
    if (body.category_id && typeof body.category_id === 'string' && isNaN(Number(body.category_id))) {
      const cat = await context.env.DB.prepare('SELECT id FROM categories WHERE slug = ?').bind(body.category_id).first() as any;
      if (cat) body.category_id = cat.id;
    }

    if (existing) {
      const fields: string[] = [];
      const values: any[] = [];

      const allowedFields = [
        'category_id', 'sub_category', 'item_code', 'name', 'description', 
        'material', 'size', 'color', 'moq', 'price_range', 
        'image_url', 'gallery_images', 'is_featured', 'is_active', 'display_order',
        'unit', 'set_per_carton', 'cbm_per_carton', 'nw_per_ctn', 'gw_per_ctn'
      ];

      for (const field of allowedFields) {
        if (body[field] !== undefined) {
          fields.push(`${field} = ?`);
          if (field === 'is_featured' || field === 'is_active') {
            values.push(body[field] ? 1 : 0);
          } else if (field === 'gallery_images') {
            values.push(typeof body[field] === 'string' ? body[field] : JSON.stringify(body[field]));
          } else if (['display_order', 'set_per_carton', 'cbm_per_carton', 'nw_per_ctn', 'gw_per_ctn', 'category_id'].includes(field)) {
            values.push(Number(body[field]));
          } else {
            values.push(body[field]);
          }
        }
      }

      if (!fields.length) return jsonResponse({ error: 'No fields to update' }, 400);

      fields.push("updated_at = datetime('now')");
      values.push(existing.id);

      await context.env.DB.prepare(
        `UPDATE products SET ${fields.join(', ')} WHERE id = ?`
      ).bind(...values).run();

      return jsonResponse({ success: true, updated_id: existing.id });
    } else {
      // Upsert: product didn't exist in D1 yet, insert it!
      const { 
        category_id, sub_category, item_code, name, description, material, size, color, 
        moq, price_range, image_url, gallery_images, is_featured, is_active, display_order,
        unit, set_per_carton, cbm_per_carton, nw_per_ctn, gw_per_ctn
      } = body;

      const codeToUse = item_code || idParam;
      const nameToUse = name || codeToUse;

      const result = await context.env.DB.prepare(
        `INSERT INTO products (
          category_id, sub_category, item_code, name, description, material, size, color, 
          moq, price_range, image_url, gallery_images, is_featured, is_active, display_order,
          unit, set_per_carton, cbm_per_carton, nw_per_ctn, gw_per_ctn
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        category_id || 1, sub_category || 'baskets', codeToUse, nameToUse, description || '', 
        material || 'Natural Fiber', size || '', color || 'Natural',
        moq || '200 Sets', price_range || 'FOB Chattogram / Negotiable', 
        image_url || '', typeof gallery_images === 'string' ? gallery_images : JSON.stringify(gallery_images || []),
        is_featured ? 1 : 0, is_active !== false ? 1 : 0, Number(display_order) || 0,
        unit || 'S/1', Number(set_per_carton) || 24, Number(cbm_per_carton) || 0.045, 
        Number(nw_per_ctn) || 6.5, Number(gw_per_ctn) || 7.8
      ).run();

      return jsonResponse({ success: true, inserted_id: result.meta.last_row_id });
    }
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// DELETE product
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const idParam = context.params.id as string;

    const product = await context.env.DB.prepare(
      'SELECT id, image_url, gallery_images FROM products WHERE id = ? OR item_code = ? OR LOWER(item_code) = LOWER(?)'
    ).bind(idParam, idParam, idParam).first() as any;
    
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

    await context.env.DB.prepare('DELETE FROM products WHERE id = ?').bind(product.id).run();
    return jsonResponse({ success: true, deleted_id: product.id });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

function extractCloudinaryPublicId(url: string): string | null {
  try {
    const parts = url.split('/upload/');
    if (parts.length < 2) return null;
    let path = parts[1];
    path = path.replace(/^v\d+\//, '');
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
