import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const id = context.params.id as string;
    const body = await context.request.json() as any;
    const fields: string[] = []; const values: any[] = [];
    for (const f of ['name', 'logo_url', 'country', 'website', 'display_order', 'is_active']) {
      if (body[f] !== undefined) { fields.push(`${f} = ?`); values.push(f === 'is_active' ? (body[f] ? 1 : 0) : body[f]); }
    }
    if (!fields.length) return jsonResponse({ error: 'No fields' }, 400);
    values.push(id);
    await context.env.DB.prepare(`UPDATE clients SET ${fields.join(', ')} WHERE id = ?`).bind(...values).run();
    return jsonResponse({ success: true });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    await context.env.DB.prepare('DELETE FROM clients WHERE id = ?').bind(context.params.id).run();
    return jsonResponse({ success: true });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};
