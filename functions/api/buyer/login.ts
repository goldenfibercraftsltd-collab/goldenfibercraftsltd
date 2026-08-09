import { Env, jsonResponse, corsHeaders } from '../../api/_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { email } = await context.request.json() as { email: string };
    if (!email) return jsonResponse({ error: 'Email is required' }, 400);

    const buyer = await context.env.DB.prepare(
      'SELECT id, name, email, phone, company, country FROM buyer_users WHERE email = ?'
    ).bind(email).first();

    if (!buyer) {
      return jsonResponse({ error: 'User not found. Please register first.' }, 404);
    }

    return jsonResponse({ success: true, buyer });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
