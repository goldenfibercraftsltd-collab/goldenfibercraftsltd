import { Env, authenticateAdmin, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const id = context.params.id as string;
    const { status } = await context.request.json() as any;
    if (!status) return jsonResponse({ error: 'status is required' }, 400);
    await context.env.DB.prepare('UPDATE inquiries SET status = ? WHERE id = ?').bind(status, id).run();
    return jsonResponse({ success: true });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    await context.env.DB.prepare('DELETE FROM inquiries WHERE id = ?').bind(context.params.id).run();
    return jsonResponse({ success: true });
  } catch (err: any) { return jsonResponse({ error: err.message }, 500); }
};
