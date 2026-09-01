import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const id = context.params.id as string;
    const category: any = await context.env.DB.prepare('SELECT * FROM categories WHERE id = ? OR slug = ?').bind(id, id).first();
    if (!category) return jsonResponse({ error: 'Category not found' }, 404);

    let subcategories = [];
    if (category.subcategories) {
      try {
        subcategories = typeof category.subcategories === 'string' ? JSON.parse(category.subcategories) : category.subcategories;
      } catch {
        subcategories = [];
      }
    }
    return jsonResponse({ success: true, category: { ...category, subcategories: Array.isArray(subcategories) ? subcategories : [] } });
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

    for (const f of ['name', 'slug', 'description', 'image_url', 'icon', 'display_order', 'is_active', 'subcategories']) {
      if (body[f] !== undefined) {
        fields.push(`${f} = ?`);
        if (f === 'is_active') {
          values.push(body[f] ? 1 : 0);
        } else if (f === 'subcategories') {
          values.push(typeof body[f] === 'string' ? body[f] : JSON.stringify(body[f]));
        } else if (f === 'slug') {
          values.push(body[f].toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'));
        } else {
          values.push(body[f]);
        }
      }
    }

    if (!fields.length) return jsonResponse({ error: 'No fields to update' }, 400);
    fields.push("updated_at = datetime('now')");
    values.push(id, id);

    await context.env.DB.prepare(`UPDATE categories SET ${fields.join(', ')} WHERE id = ? OR slug = ?`).bind(...values).run();
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
    
    // Check if products exist under this category
    const products = await context.env.DB.prepare('SELECT COUNT(*) as count FROM products WHERE category_id = ? OR category_id = (SELECT id FROM categories WHERE slug = ?)').bind(id, id).first();
    if (products && (products.count as number) > 0) {
      return jsonResponse({ error: `Cannot delete category. It is linked to ${products.count} products in the database.` }, 400);
    }

    await context.env.DB.prepare('DELETE FROM categories WHERE id = ? OR slug = ?').bind(id, id).run();
    return jsonResponse({ success: true });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
