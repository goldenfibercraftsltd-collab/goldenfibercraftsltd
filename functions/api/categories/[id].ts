import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const id = context.params.id as string;
    const category = await context.env.DB.prepare('SELECT * FROM categories WHERE id = ?').bind(id).first();
    if (!category) return jsonResponse({ error: 'Category not found' }, 404);
    return jsonResponse({ success: true, category });
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
    for (const f of ['name', 'slug', 'description', 'image_url', 'icon', 'display_order', 'is_active']) {
      if (body[f] !== undefined) { fields.push(`${f} = ?`); values.push(f === 'is_active' ? (body[f] ? 1 : 0) : body[f]); }
    }
    if (!fields.length) return jsonResponse({ error: 'No fields to update' }, 400);
    fields.push("updated_at = datetime('now')");
    values.push(id);
    await context.env.DB.prepare(`UPDATE categories SET ${fields.join(', ')} WHERE id = ?`).bind(...values).run();
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
    const products = await context.env.DB.prepare('SELECT COUNT(*) as count FROM products WHERE category_id = ?').bind(id).first();
    if (products && (products.count as number) > 0) {
      return jsonResponse({ error: 'Cannot delete category with existing products. Delete products first.' }, 400);
    }
    await context.env.DB.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
