import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const type = url.searchParams.get('type');
    const activeOnly = url.searchParams.get('active_only') === 'true';

    let sql = 'SELECT * FROM page_sections WHERE 1=1';
    const params: any[] = [];

    if (type) {
      sql += ' AND section_type = ?';
      params.push(type);
    }
    if (activeOnly) {
      sql += ' AND is_active = 1';
    }
    sql += ' ORDER BY display_order ASC, id ASC';

    const stmt = params.length > 0
      ? context.env.DB.prepare(sql).bind(...params)
      : context.env.DB.prepare(sql);

    const result = await stmt.all();
    return jsonResponse({ success: true, sections: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const body = await context.request.json() as any;
    const {
      section_type,
      section_key,
      number,
      badge,
      title,
      subtitle,
      quote,
      description,
      image_url,
      image_alt,
      metrics_json,
      points_json,
      process_json,
      category_slug,
      display_order,
      is_active
    } = body;

    if (!title || !section_type) {
      return jsonResponse({ error: 'title and section_type are required' }, 400);
    }

    const result = await context.env.DB.prepare(
      `INSERT INTO page_sections (
        section_type, section_key, number, badge, title, subtitle, quote, description,
        image_url, image_alt, metrics_json, points_json, process_json, category_slug,
        display_order, is_active, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
    ).bind(
      section_type,
      section_key || '',
      number || '',
      badge || '',
      title,
      subtitle || '',
      quote || '',
      description || '',
      image_url || '',
      image_alt || '',
      typeof metrics_json === 'string' ? metrics_json : JSON.stringify(metrics_json || []),
      typeof points_json === 'string' ? points_json : JSON.stringify(points_json || []),
      typeof process_json === 'string' ? process_json : JSON.stringify(process_json || []),
      category_slug || '',
      display_order || 0,
      is_active !== false ? 1 : 0
    ).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
