import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const result = await context.env.DB.prepare(
      'SELECT * FROM banners WHERE is_active = 1 ORDER BY display_order ASC'
    ).all();
    return jsonResponse({ success: true, banners: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const body = await context.request.json() as any;
    const { title, subtitle, image_url, link_url, display_order, category_slug, category_name, show_category_badge } = body;
    if (!image_url) return jsonResponse({ error: 'image_url is required' }, 400);

    const result = await context.env.DB.prepare(
      'INSERT INTO banners (title, subtitle, image_url, link_url, display_order, is_active, category_slug, category_name, show_category_badge) VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?)'
    ).bind(
      title || '',
      subtitle || '',
      image_url,
      link_url || (category_slug ? `/products?category=${category_slug}` : '/products'),
      display_order || 0,
      category_slug || '',
      category_name || '',
      show_category_badge ? 1 : 0
    ).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
