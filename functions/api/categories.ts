import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const result = await context.env.DB.prepare(
      'SELECT * FROM categories ORDER BY display_order ASC'
    ).all();
    return jsonResponse({ success: true, categories: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const { name, slug, description, image_url, icon, display_order } = await context.request.json() as any;
    if (!name || !slug) return jsonResponse({ error: 'name and slug are required' }, 400);

    const result = await context.env.DB.prepare(
      'INSERT INTO categories (name, slug, description, image_url, icon, display_order) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(name, slug, description || '', image_url || '', icon || '', display_order || 0).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
