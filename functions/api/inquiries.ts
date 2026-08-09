import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET all inquiries (Admin only)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const result = await context.env.DB.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
    return jsonResponse({ success: true, inquiries: result.results });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};

// POST submit inquiry (Public)
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { name, email, company, phone, country, product_interest, message } = await context.request.json() as any;
    if (!name || !email || !message) return jsonResponse({ error: 'name, email, and message are required' }, 400);

    const result = await context.env.DB.prepare(
      'INSERT INTO inquiries (name, email, company, phone, country, product_interest, message) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(name, email, company || '', phone || '', country || '', product_interest || '', message).run();

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};
