import { Env, jsonResponse, corsHeaders } from '../../api/_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { name, email, phone, company, country, password } = await context.request.json() as any;
    if (!name || !email) {
      return jsonResponse({ error: 'Name and email are required' }, 400);
    }

    const result = await context.env.DB.prepare(
      'INSERT INTO buyer_users (name, email, phone, company, country, password_hash) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(name, email, phone || '', company || '', country || '', password || '').run();

    return jsonResponse({
      success: true,
      buyer: { id: result.meta.last_row_id, name, email, phone, company, country }
    }, 201);
  } catch (err: any) {
    if (err.message?.includes('UNIQUE') || err.message?.includes('email')) {
      return jsonResponse({ error: 'An account with this email already exists' }, 400);
    }
    return jsonResponse({ error: err.message }, 500);
  }
};
