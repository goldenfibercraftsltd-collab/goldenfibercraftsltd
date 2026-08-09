import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const result = await context.env.DB.prepare('SELECT setting_key, setting_value FROM site_settings').all();
    const settings: Record<string, string> = {};
    for (const r of result.results as any[]) {
      settings[r.setting_key] = r.setting_value;
    }
    return jsonResponse({ success: true, settings });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const settings = await context.request.json() as Record<string, string>;
    for (const [key, val] of Object.entries(settings)) {
      await context.env.DB.prepare(
        'INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?) ON CONFLICT(setting_key) DO UPDATE SET setting_value = ?, updated_at = datetime(\'now\')'
      ).bind(key, val, val).run();
    }
    return jsonResponse({ success: true });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};
