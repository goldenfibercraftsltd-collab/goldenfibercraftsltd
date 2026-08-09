import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET all products (public + admin)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const category = url.searchParams.get('category');
    const search = url.searchParams.get('search');
    const featured = url.searchParams.get('featured');
    const active_only = url.searchParams.get('active_only') !== 'false';

    let sql = `SELECT p.*, c.name as category_name, c.slug as category_slug 
               FROM products p LEFT JOIN categories c ON p.category_id = c.id`;
    const conditions: string[] = [];
    const params: any[] = [];

    if (active_only) { conditions.push('p.is_active = 1'); }
    if (category) { conditions.push('c.slug = ?'); params.push(category); }
    if (featured === 'true') { conditions.push('p.is_featured = 1'); }
    if (search) { conditions.push('(p.name LIKE ? OR p.item_code LIKE ?)'); params.push(`%${search}%`, `%${search}%`); }

    if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');
    sql += ' ORDER BY p.display_order ASC, p.id DESC';

    const stmt = context.env.DB.prepare(sql);
    const result = params.length ? await stmt.bind(...params).all() : await stmt.all();

    return jsonResponse({ success: true, products: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// POST new product (admin only)
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const body = await context.request.json() as any;
    const { category_id, item_code, name, description, material, size, color, moq, price_range, image_url, gallery_images, is_featured, is_active, display_order } = body;

    if (!item_code || !name || !category_id) {
      return jsonResponse({ error: 'item_code, name, and category_id are required' }, 400);
    }

    const result = await context.env.DB.prepare(
      `INSERT INTO products (category_id, item_code, name, description, material, size, color, moq, price_range, image_url, gallery_images, is_featured, is_active, display_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      category_id, item_code, name, description || '', material || '', size || '', color || '',
      moq || '', price_range || '', image_url || '', gallery_images || '[]',
      is_featured ? 1 : 0, is_active !== false ? 1 : 0, display_order || 0
    ).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
