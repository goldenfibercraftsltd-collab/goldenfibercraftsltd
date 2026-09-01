import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const id = context.params.id as string;
    const result = await context.env.DB.prepare('SELECT * FROM page_sections WHERE id = ?').bind(id).first();
    if (!result) return jsonResponse({ error: 'Section not found' }, 404);
    return jsonResponse({ success: true, section: result });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const id = context.params.id as string;
    const body = await context.request.json() as any;

    const fields: string[] = [];
    const values: any[] = [];

    const allowed = [
      'section_type',
      'section_key',
      'number',
      'badge',
      'title',
      'subtitle',
      'quote',
      'description',
      'image_url',
      'image_alt',
      'metrics_json',
      'points_json',
      'process_json',
      'category_slug',
      'display_order',
      'is_active'
    ];

    for (const f of allowed) {
      if (body[f] !== undefined) {
        fields.push(`${f} = ?`);
        if (f === 'is_active') {
          values.push(body[f] ? 1 : 0);
        } else if (f === 'metrics_json' || f === 'points_json' || f === 'process_json') {
          values.push(typeof body[f] === 'string' ? body[f] : JSON.stringify(body[f]));
        } else {
          values.push(body[f]);
        }
      }
    }

    if (!fields.length) return jsonResponse({ error: 'No fields to update' }, 400);

    fields.push("updated_at = datetime('now')");
    values.push(id);

    await context.env.DB.prepare(`UPDATE page_sections SET ${fields.join(', ')} WHERE id = ?`).bind(...values).run();
    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const id = context.params.id as string;
    await context.env.DB.prepare('DELETE FROM page_sections WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
