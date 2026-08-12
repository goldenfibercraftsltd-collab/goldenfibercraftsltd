import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const result = await context.env.DB.prepare(
      'SELECT * FROM categories ORDER BY display_order ASC'
    ).all();

    const categories = (result.results || []).map((cat: any) => {
      let subcategories = [];
      if (cat.subcategories) {
        try {
          subcategories = typeof cat.subcategories === 'string' ? JSON.parse(cat.subcategories) : cat.subcategories;
        } catch {
          subcategories = [];
        }
      }
      return {
        ...cat,
        subcategories: Array.isArray(subcategories) ? subcategories : []
      };
    });

    return jsonResponse({ success: true, categories });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const body = await context.request.json() as any;
    const { name, slug, description, image_url, icon, display_order, subcategories } = body;
    if (!name || !slug) return jsonResponse({ error: 'name and slug are required' }, 400);

    const subcategoriesJson = subcategories ? (typeof subcategories === 'string' ? subcategories : JSON.stringify(subcategories)) : '[]';

    const result = await context.env.DB.prepare(
      'INSERT INTO categories (name, slug, description, image_url, icon, display_order, is_active, subcategories) VALUES (?, ?, ?, ?, ?, ?, 1, ?)'
    ).bind(
      name,
      slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'),
      description || '',
      image_url || '',
      icon || 'Package',
      display_order || 0,
      subcategoriesJson
    ).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
