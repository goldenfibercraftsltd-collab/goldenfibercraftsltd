interface Env {
  DB: D1Database;
  [key: string]: any;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);

  // 1. Force 301 Permanent Redirect from www to apex domain (goldenfibercraftsltd.com)
  if (url.hostname === 'www.goldenfibercraftsltd.com') {
    url.hostname = 'goldenfibercraftsltd.com';
    return Response.redirect(url.toString(), 301);
  }

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
    const canonicalUrl = cleanPath === '/' 
      ? 'https://goldenfibercraftsltd.com/' 
      : `https://goldenfibercraftsltd.com${cleanPath}`;

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

    // Extract potential article slug from path
    // Supports /jute-bag-manufacturers or /blog/jute-bag-manufacturers
    let articleSlug = '';
    if (cleanPath.startsWith('/blog/')) {
      articleSlug = cleanPath.replace('/blog/', '').trim();
    } else if (cleanPath !== '/' && !cleanPath.includes('/admin') && !cleanPath.includes('/buyer') && !cleanPath.includes('/category') && !cleanPath.includes('/products')) {
      articleSlug = cleanPath.replace('/', '').trim();
    }

    if (articleSlug && context.env && context.env.DB) {
      try {
        const article = await context.env.DB.prepare(
          "SELECT title, meta_title, meta_description, excerpt, featured_image, featured_image_alt, published_date, author, faqs, primary_keyword FROM articles WHERE slug = ? AND status = 'published'"
        ).bind(articleSlug).first() as any;

        if (article) {
          const pageTitle = article.meta_title || `${article.title} | Golden Fiber Crafts Ltd`;
          const pageDesc = article.meta_description || article.excerpt || '';
          const pageImage = article.featured_image 
            ? (article.featured_image.startsWith('http') ? article.featured_image : `https://goldenfibercraftsltd.com${article.featured_image}`)
            : 'https://goldenfibercraftsltd.com/images/og-cover.jpg';

          // Replace <title>
          html = html.replace(/<title>[^<]*<\/title>/i, `<title>${pageTitle}</title>`);

          // Replace <meta name="description">
          html = html.replace(
            /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["'][^>]*>/i,
            `<meta name="description" content="${pageDesc.replace(/"/g, '&quot;')}" />`
          );

          // Replace og:title & og:description & og:image
          html = html.replace(
            /<meta property="og:title"[^>]*>/i,
            `<meta property="og:title" content="${pageTitle.replace(/"/g, '&quot;')}" />`
          );
          html = html.replace(
            /<meta property="og:description"[^>]*>/i,
            `<meta property="og:description" content="${pageDesc.replace(/"/g, '&quot;')}" />`
          );
          html = html.replace(
            /<meta property="og:image"[^>]*>/i,
            `<meta property="og:image" content="${pageImage}" />`
          );

          // Build Article & Breadcrumb Schema
          const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": pageDesc,
            "image": pageImage,
            "datePublished": article.published_date || "2026-11-01",
            "dateModified": article.published_date || "2026-11-01",
            "author": {
              "@type": "Organization",
              "name": "Golden Fiber Crafts Ltd",
              "url": "https://goldenfibercraftsltd.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Golden Fiber Crafts Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://goldenfibercraftsltd.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          };

          const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://goldenfibercraftsltd.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Guides & Insights",
                "item": "https://goldenfibercraftsltd.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": canonicalUrl
              }
            ]
          };

          let schemasToInject = `
    <script type="application/ld+json">
    ${JSON.stringify(articleSchema)}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify(breadcrumbSchema)}
    </script>`;

          if (article.faqs) {
            try {
              const parsedFaqs = typeof article.faqs === 'string' ? JSON.parse(article.faqs) : article.faqs;
              if (Array.isArray(parsedFaqs) && parsedFaqs.length > 0) {
                const faqSchema = {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": parsedFaqs.map((faq: any) => ({
                    "@type": "Question",
                    "name": faq.q || faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.a || faq.answer
                    }
                  }))
                };
                schemasToInject += `
    <script type="application/ld+json">
    ${JSON.stringify(faqSchema)}
    </script>`;
              }
            } catch (e) {}
          }

          html = html.replace('</head>', `${schemasToInject}\n  </head>`);
        }
      } catch (err) {
        // Fallback to default html if DB error occurs
      }
    }

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
