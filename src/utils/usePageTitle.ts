import { useEffect } from 'react';
import { COMPANY_NAME } from '../data/products';

export const BRAND_NAME = COMPANY_NAME || 'Golden Fiber Crafts Ltd.';

export const DEFAULT_HOME_TITLE = "Golden Fiber Crafts Ltd. | Jute & Natural Fiber Handicraft Manufacturer";
export const DEFAULT_HOME_DESCRIPTION = "Reliable Bangladesh manufacturer & exporter of jute, seagrass, water-hyacinth and natural-fiber handicrafts- Baskets, platers, Bags, Floor mat, Rugs, Placements, Macrames. Custom designs, private label, OEM/ODM, quality control and competitive FOB pricing for global buyers.";

/**
 * Generates formatted title with Page Title first, followed by brand / tagline
 * e.g. "About Us - Golden Fiber Crafts Ltd."
 * or "Jute Baskets - Golden Fiber Crafts Ltd."
 * or Home Page: "Golden Fiber Crafts Ltd. | Jute & Natural Fiber Handicraft Manufacturer"
 */
export function formatPageTitle(pageTitle?: string, subtitleOrTagline?: string): string {
  const brand = 'Golden Fiber Crafts Ltd.';
  
  if (!pageTitle || pageTitle.trim() === '' || pageTitle.toLowerCase() === 'home') {
    return DEFAULT_HOME_TITLE;
  }

  if (subtitleOrTagline && subtitleOrTagline.trim()) {
    return `${pageTitle} | ${subtitleOrTagline} - ${brand}`;
  }

  return `${pageTitle} - ${brand}`;
}

/**
 * Updates document.title and optional meta description / og tags
 */
export function setPageTitle(pageTitle?: string, subtitleOrTagline?: string, description?: string) {
  const fullTitle = formatPageTitle(pageTitle, subtitleOrTagline);
  document.title = fullTitle;

  // Update OpenGraph Title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', fullTitle);
  }

  // Update Twitter Title
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', fullTitle);
  }

  // Update meta description (use provided description or default home description for Home)
  const isHome = !pageTitle || pageTitle.trim() === '' || pageTitle.toLowerCase() === 'home';
  const targetDesc = description || (isHome ? DEFAULT_HOME_DESCRIPTION : undefined);

  if (targetDesc) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', targetDesc);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', targetDesc);
    }
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', targetDesc);
    }
  }
}

/**
 * React Hook to set page title and meta description on component mount and update
 */
export function usePageTitle(pageTitle?: string, subtitleOrTagline?: string, description?: string) {
  useEffect(() => {
    setPageTitle(pageTitle, subtitleOrTagline, description);
  }, [pageTitle, subtitleOrTagline, description]);
}
