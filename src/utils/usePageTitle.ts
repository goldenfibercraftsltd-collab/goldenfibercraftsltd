import { useEffect } from 'react';
import { COMPANY_NAME, TAGLINE } from '../data/products';

export const BRAND_NAME = COMPANY_NAME || 'Golden Fiber Crafts Ltd.';

/**
 * Generates formatted title with Page Title first, followed by brand / tagline
 * e.g. "About Us - Golden Fiber Crafts Ltd"
 * or "Jute Baskets - Golden Fiber Crafts Ltd"
 * or "Seagrass Storage Basket (GFC-SB-025) - Golden Fiber Crafts Ltd"
 */
export function formatPageTitle(pageTitle?: string, subtitleOrTagline?: string): string {
  const brand = 'Golden Fiber Crafts Ltd';
  
  if (!pageTitle || pageTitle.trim() === '' || pageTitle.toLowerCase() === 'home') {
    return `Home - ${TAGLINE || 'Nature Woven into Every Creation'} | ${brand}`;
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

  // Update meta description if provided
  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }
}

/**
 * React Hook to set page title on component mount and update
 */
export function usePageTitle(pageTitle?: string, subtitleOrTagline?: string, description?: string) {
  useEffect(() => {
    setPageTitle(pageTitle, subtitleOrTagline, description);
  }, [pageTitle, subtitleOrTagline, description]);
}
