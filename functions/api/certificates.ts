import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const activeOnly = url.searchParams.get('active_only') !== 'false';
    let sql = 'SELECT * FROM certificates';
    if (activeOnly) sql += ' WHERE is_active = 1';
    sql += ' ORDER BY display_order ASC, id ASC';
    const result = await context.env.DB.prepare(sql).all();
    return jsonResponse({ success: true, certificates: result.results });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const { name, title, badge, logo_url, image_url, certificate_url, description, valid_until, display_order, is_active } = await context.request.json() as any;
    if (!name && !title) return jsonResponse({ error: 'name or title is required' }, 400);
    const result = await context.env.DB.prepare(
      'INSERT INTO certificates (name, title, badge, logo_url, image_url, certificate_url, description, valid_until, display_order, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    ).bind(
      name || title, title || name, badge || 'Export Compliance', logo_url || image_url || '', image_url || logo_url || '',
      certificate_url || '', description || '', valid_until || '', display_order || 0, is_active !== false ? 1 : 0
    ).run();
    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};
