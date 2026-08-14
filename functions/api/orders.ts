import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET orders (Admin only)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const result = await context.env.DB.prepare('SELECT * FROM cart_orders ORDER BY created_at DESC').all();
    return jsonResponse({ success: true, orders: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// POST submit cart order (Public / Buyer)
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { buyer_id, buyer_name, buyer_email, buyer_phone, buyer_company, buyer_country, items, total_cartons, total_cbm, total_nw, total_gw } = await context.request.json() as any;

    if (!buyer_name || !buyer_email || !items || !items.length) {
      return jsonResponse({ error: 'buyer_name, buyer_email, and items are required' }, 400);
    }

    const itemsJson = JSON.stringify(items);

    try {
      const result = await context.env.DB.prepare(
        `INSERT INTO cart_orders (buyer_id, buyer_name, buyer_email, buyer_phone, buyer_company, buyer_country, items_json, total_cartons, total_cbm, total_nw, total_gw)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        buyer_id || null, buyer_name, buyer_email, buyer_phone || '', buyer_company || '', buyer_country || '',
        itemsJson, total_cartons || 0, total_cbm || 0, total_nw || 0, total_gw || 0
      ).run();

      return jsonResponse({ success: true, order_id: result.meta.last_row_id }, 201);
    } catch {
      // Fallback if total_nw column hasn't been migrated in D1 schema
      const result = await context.env.DB.prepare(
        `INSERT INTO cart_orders (buyer_id, buyer_name, buyer_email, buyer_phone, buyer_company, buyer_country, items_json, total_cartons, total_cbm, total_gw)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        buyer_id || null, buyer_name, buyer_email, buyer_phone || '', buyer_company || '', buyer_country || '',
        itemsJson, total_cartons || 0, total_cbm || 0, total_gw || 0
      ).run();

      return jsonResponse({ success: true, order_id: result.meta.last_row_id }, 201);
    }
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
