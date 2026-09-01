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
    if (category) { conditions.push('(c.slug = ? OR p.category_id = ?)'); params.push(category, category); }
    if (featured === 'true') { conditions.push('p.is_featured = 1'); }
    if (search) { 
      conditions.push('(p.name LIKE ? OR p.item_code LIKE ? OR p.material LIKE ? OR p.sub_category LIKE ?)'); 
      params.push(`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`); 
    }

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
    let { 
      category_id, sub_category, item_code, name, description, material, size, color, 
      moq, price_range, image_url, gallery_images, is_featured, is_active, display_order,
      unit, set_per_carton, cbm_per_carton, nw_per_ctn, gw_per_ctn
    } = body;

    if (!item_code || !name) {
      return jsonResponse({ error: 'item_code and name are required' }, 400);
    }

    // Convert string category slug to ID if needed
    if (typeof category_id === 'string' && isNaN(Number(category_id))) {
      const cat = await context.env.DB.prepare('SELECT id FROM categories WHERE slug = ?').bind(category_id).first();
      category_id = cat ? cat.id : 1;
    } else {
      category_id = Number(category_id) || 1;
    }

    const result = await context.env.DB.prepare(
      `INSERT INTO products (
        category_id, sub_category, item_code, name, description, material, size, color, 
        moq, price_range, image_url, gallery_images, is_featured, is_active, display_order,
        unit, set_per_carton, cbm_per_carton, nw_per_ctn, gw_per_ctn
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      category_id, sub_category || 'baskets', item_code.trim(), name.trim(), description || '', 
      material || 'Natural Fiber', size || '', color || 'Natural',
      moq || '200 Sets', price_range || 'FOB Chattogram / Negotiable', 
      image_url || '', typeof gallery_images === 'string' ? gallery_images : JSON.stringify(gallery_images || []),
      is_featured ? 1 : 0, is_active !== false ? 1 : 0, Number(display_order) || 0,
      unit || 'S/1', Number(set_per_carton) || 24, Number(cbm_per_carton) || 0.045, 
      Number(nw_per_ctn) || 6.5, Number(gw_per_ctn) || 7.8
    ).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
