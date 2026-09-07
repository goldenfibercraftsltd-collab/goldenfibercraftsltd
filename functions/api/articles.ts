import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const slug = url.searchParams.get('slug');

    if (slug) {
      const article = await context.env.DB.prepare(
        'SELECT * FROM articles WHERE slug = ?'
      ).bind(slug).first();

      if (!article) {
        return jsonResponse({ success: false, error: 'Article not found' }, 404);
      }

      return jsonResponse({ success: true, article });
    }

    const result = await context.env.DB.prepare(
      "SELECT id, slug, title, h1, meta_title, meta_description, category, category_slug, featured_image, featured_image_alt, featured_image_caption, excerpt, author, published_date, reading_time_minutes, word_count, primary_keyword, status, created_at FROM articles WHERE status = 'published' ORDER BY created_at DESC"
    ).all();

    return jsonResponse({ success: true, articles: result.results || [] });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const body = await context.request.json() as any;
    const { 
      id, slug, title, h1, meta_title, meta_description, category, category_slug,
      featured_image, featured_image_alt, featured_image_caption, excerpt, author,
      published_date, reading_time_minutes, word_count, primary_keyword, secondary_keywords,
      status
    } = body;

    if (!title || !slug) return jsonResponse({ error: 'title and slug are required' }, 400);

    const articleId = id || `art-${slug}`;
    const cleanSlug = slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');

    await context.env.DB.prepare(`
      INSERT OR REPLACE INTO articles (
        id, slug, title, h1, meta_title, meta_description, category, category_slug,
        featured_image, featured_image_alt, featured_image_caption, excerpt, author,
        published_date, reading_time_minutes, word_count, primary_keyword, secondary_keywords,
        status, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `).bind(
      articleId,
      cleanSlug,
      title,
      h1 || title,
      meta_title || title,
      meta_description || excerpt || '',
      category || 'Jute Products',
      category_slug || 'jute',
      featured_image || '',
      featured_image_alt || '',
      featured_image_caption || '',
      excerpt || '',
      author || 'Golden Fiber Crafts Sourcing Desk',
      published_date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      reading_time_minutes || 10,
      word_count || 2500,
      primary_keyword || '',
      typeof secondary_keywords === 'string' ? secondary_keywords : JSON.stringify(secondary_keywords || []),
      status || 'published'
    ).run();

    return jsonResponse({ success: true, slug: cleanSlug }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
