interface Env {
  DB: D1Database;
  [key: string]: any;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);

  // Pass static assets and API requests through untouched
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/products/') ||
    url.pathname.startsWith('/materials/') ||
    url.pathname.startsWith('/infrastructure/') ||
    url.pathname.startsWith('/quality/') ||
    url.pathname.startsWith('/sustainability/') ||
    url.pathname.startsWith('/banners/') ||
    url.pathname.startsWith('/clients/') ||
    url.pathname.startsWith('/certificates/') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.json') ||
    url.pathname.endsWith('.xml') ||
    url.pathname.endsWith('.pdf') ||
    url.pathname.endsWith('.txt') ||
    url.pathname.endsWith('.webmanifest')
  ) {
    return context.next();
  }

  // Fetch the default response (dist/index.html)
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  // Only rewrite HTML pages
  if (contentType.includes('text/html')) {
    const cleanPath = url.pathname.length > 1 && url.pathname.endsWith('/') 
      ? url.pathname.slice(0, -1) 
      : url.pathname;
    const canonicalUrl = `https://goldenfibercraftsltd.com${cleanPath === '/' ? '' : cleanPath}`;

    let html = await response.text();

    // Dynamically inject self-referencing canonical URL
    html = html.replace(
      /<link rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Dynamically inject matching og:url
    html = html.replace(
      /<meta property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'text/html; charset=UTF-8');

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
};
