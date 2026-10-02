import { useEffect } from 'react';
import { COMPANY_NAME } from '../data/products';

export const BRAND_NAME = COMPANY_NAME || 'Golden Fiber Crafts Ltd.';

export const DEFAULT_HOME_TITLE = "Jute & Natural Fiber Handicraft Manufacturer & Exporter | Golden Fiber Crafts Ltd.";
export const DEFAULT_HOME_DESCRIPTION = "Golden Fiber Crafts Ltd. (GFCL) is a Bangladesh-based manufacturer and exporter of natural, biodegradable, and sustainably crafted lifestyle products, specializing in jute, seagrass, hogla, water hyacinth, and other natural fibers. We develop beautiful, functional, and customizable products for international B2B buyers and private-label collections.";

/**
 * Generates formatted title with Page Title first, followed by brand / tagline
 * e.g. "About Us - Golden Fiber Crafts Ltd."
 * or "Jute Baskets - Golden Fiber Crafts Ltd."
 * or Home Page: "Jute & Natural Fiber Handicraft Manufacturer & Exporter | Golden Fiber Crafts Ltd."
 */
export function formatPageTitle(pageTitle?: string, subtitleOrTagline?: string): string {
  const brand = 'Golden Fiber Crafts Ltd.';
  
  if (!pageTitle || pageTitle.trim() === '' || pageTitle.toLowerCase() === 'home') {
    return DEFAULT_HOME_TITLE;
  }

  if (pageTitle.includes(brand) || pageTitle.includes('Golden Fiber Crafts')) {
    return pageTitle;
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

  // Ensure OpenGraph Site Name
  let ogSiteName = document.querySelector('meta[property="og:site_name"]');
  if (!ogSiteName) {
    ogSiteName = document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    document.head.appendChild(ogSiteName);
  }
  ogSiteName.setAttribute('content', 'Golden Fiber Crafts Ltd');

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

  // Dynamically update self-referencing canonical URL & og:url (Prevents GSC canonical issues)
  try {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.length > 1 && currentPath.endsWith('/') 
      ? currentPath.slice(0, -1) 
      : currentPath;
    const canonicalUrl = `https://goldenfibercraftsltd.com${cleanPath === '/' ? '' : cleanPath}`;

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  } catch (e) {
    // Ignore in SSR/non-browser contexts
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
