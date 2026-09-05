import { PRODUCTS, ProductItem, CATEGORIES, CategoryInfo } from '../data/products';

const DELETED_KEY = 'gfcl_deleted_product_ids_v3';
const CUSTOM_KEY = 'gfcl_custom_products_v3';
const LIVE_CACHE_KEY = 'gfcl_live_products_cache_v4';

export function getDeletedProductIds(): string[] {
  try {
    const raw = localStorage.getItem(DELETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markProductDeletedLocally(...idsOrCodes: (string | number | undefined | null)[]) {
  try {
    const validKeys = idsOrCodes
      .filter((k): k is string | number => k !== undefined && k !== null && String(k).trim() !== '')
      .map(k => String(k).trim());

    if (!validKeys.length) return;

    const lowerKeys = validKeys.map(k => k.toLowerCase());

    const deleted = getDeletedProductIds();
    let updatedDeleted = [...deleted];
    validKeys.forEach(k => {
      if (!updatedDeleted.some(d => d.toLowerCase() === k.toLowerCase())) {
        updatedDeleted.push(k);
      }
    });
    localStorage.setItem(DELETED_KEY, JSON.stringify(updatedDeleted));

    // Remove from custom products
    const customs = getCustomProducts();
    const filteredCustoms = customs.filter(p => {
      const pId = String(p.id || '').toLowerCase();
      const pCode = String(p.code || '').toLowerCase();
      const pItemCode = String(p.item_code || '').toLowerCase();
      return !lowerKeys.includes(pId) && !lowerKeys.includes(pCode) && !lowerKeys.includes(pItemCode);
    });
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(filteredCustoms));

    // Remove from live cache
    const cached = getLiveCachedProducts();
    const filteredCache = cached.filter(p => {
      const pId = String(p.id || '').toLowerCase();
      const pCode = String(p.code || '').toLowerCase();
      const pItemCode = String((p as any).item_code || '').toLowerCase();
      const pDbId = String((p as any).db_id || '').toLowerCase();
      return !lowerKeys.includes(pId) && !lowerKeys.includes(pCode) && !lowerKeys.includes(pItemCode) && !lowerKeys.includes(pDbId);
    });
    localStorage.setItem(LIVE_CACHE_KEY, JSON.stringify(filteredCache));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_products_updated'));
    }
  } catch (e) {
    console.error('Error saving deleted ID locally', e);
  }
}

export function getCustomProducts(): any[] {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getLiveCachedProducts(): ProductItem[] {
  try {
    const raw = localStorage.getItem(LIVE_CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setLiveCachedProducts(products: ProductItem[]) {
  try {
    localStorage.setItem(LIVE_CACHE_KEY, JSON.stringify(products));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_products_updated'));
    }
  } catch (e) {
    console.error('Error caching live products', e);
  }
}

export function formatDbProductToItem(p: any): ProductItem {
  const code = (p.item_code || p.code || p.id || '').toString().trim();
  const catMatch = CATEGORIES.find(c => String(c.id) === String(p.category_id) || c.slug === String(p.category_id) || c.slug === p.category_slug);
  const catId = catMatch ? catMatch.id : (p.category_slug || p.category_id || 'jute');
  const catSlug = catMatch ? catMatch.slug : (p.category_slug || 'jute');
  const catName = catMatch ? catMatch.name : (p.category_name || 'Jute');

  const staticMatch = PRODUCTS.find(sp => sp.code?.toLowerCase() === code.toLowerCase() || sp.id?.toLowerCase() === code.toLowerCase());
  
  let subCat = p.sub_category || p.subCategory || staticMatch?.subCategory;
  if (!subCat) {
    const nameLower = String(p.name || '').toLowerCase();
    const codeLower = code.toLowerCase();
    if (nameLower.includes('bag') || nameLower.includes('tote') || nameLower.includes('backpack') || codeLower.startsWith('bjb')) {
      subCat = 'bags';
    } else if (nameLower.includes('mat') || nameLower.includes('rug')) {
      subCat = 'floor-mats';
    } else if (nameLower.includes('placemat')) {
      subCat = 'placemats';
    } else if (nameLower.includes('pouf') || nameLower.includes('ottoman') || codeLower.startsWith('bjp')) {
      subCat = 'poufs';
    } else if (nameLower.includes('macrame') || nameLower.includes('hanger') || codeLower.startsWith('bjc') || codeLower.startsWith('bcc')) {
      subCat = 'macrames';
    } else {
      subCat = 'baskets';
    }
  }

  let gallery: string[] = [];
  if (typeof p.gallery_images === 'string') {
    try {
      gallery = JSON.parse(p.gallery_images || '[]');
      if (!Array.isArray(gallery)) gallery = [];
    } catch {
      try {
        const matches = p.gallery_images.match(/\/products\/[^",\]\s]+/g);
        gallery = matches || [];
      } catch {
        gallery = [];
      }
    }
  } else if (Array.isArray(p.gallery_images)) {
    gallery = p.gallery_images;
  } else if (Array.isArray(p.galleryImages)) {
    gallery = p.galleryImages;
  }
  if (!gallery.length && p.image_url) {
    gallery = [p.image_url];
  } else if (!gallery.length && staticMatch?.galleryImages) {
    gallery = staticMatch.galleryImages;
  }

  const mainImage = p.image_url || p.image || gallery[0] || staticMatch?.image || '/favicon.svg';

  const overviewDesc = p.description || staticMatch?.description || '';
  const itemMaterial = p.material || staticMatch?.material || 'Natural Fiber';
  const itemSize = p.size || staticMatch?.specifications?.find(s => s.key === 'Specification')?.value || 'Custom Size';
  const itemMoq = p.moq || staticMatch?.specifications?.find(s => s.key === 'MOQ')?.value || '200 Sets';

  return {
    id: code,
    db_id: p.id,
    slug: staticMatch?.slug || code.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    code: code,
    name: p.name || staticMatch?.name || 'Handicraft Item',
    category: catId,
    categoryName: catName,
    categorySlug: catSlug,
    subCategory: subCat,
    image: mainImage,
    galleryImages: gallery.length ? gallery : [mainImage],
    description: overviewDesc,
    longDescription: {
      overview: overviewDesc,
      craftsmanship: staticMatch?.longDescription?.craftsmanship || 'Handcrafted by skilled traditional artisans in Bangladesh using sustainable natural fibers.',
      exportDetails: staticMatch?.longDescription?.exportDetails || 'Quality controlled, fumigated, and packed in 5-ply export master cartons.',
      careInstructions: staticMatch?.longDescription?.careInstructions || 'Keep in dry indoor area. Clean with soft damp cloth.',
    },
    specifications: [
      { key: 'Item Code', value: code },
      { key: 'Materials', value: itemMaterial },
      { key: 'Specification', value: itemSize },
      { key: 'MOQ', value: itemMoq },
    ],
    features: staticMatch?.features || ['100% Eco-Friendly', 'Artisanal Handcraft', 'Export Standard'],
    unit: p.unit || staticMatch?.unit || 'S/1',
    setPerCarton: Number(p.set_per_carton ?? p.setPerCarton ?? staticMatch?.setPerCarton ?? 24),
    cbmPerCarton: Number(p.cbm_per_carton ?? p.cbmPerCarton ?? staticMatch?.cbmPerCarton ?? 0.045),
    nwPerCtn: Number(p.nw_per_ctn ?? p.nwPerCtn ?? staticMatch?.nwPerCtn ?? 6.5),
    gwPerCtn: Number(p.gw_per_ctn ?? p.gwPerCtn ?? staticMatch?.gwPerCtn ?? 7.8),
    material: itemMaterial,
    color: p.color || staticMatch?.color || 'Natural',
  };
}

export function saveCustomProductLocally(productData: any, oldCodeOrId?: string) {
  try {
    const itemCode = (productData.item_code || productData.code || productData.id || '').toString().trim();
    if (!itemCode) return;

    // If old code exists and is different from new code, remove old code from all stores
    if (oldCodeOrId && String(oldCodeOrId).trim().toLowerCase() !== itemCode.toLowerCase()) {
      markProductDeletedLocally(oldCodeOrId);
    }

    const formatted = formatDbProductToItem(productData);

    // 1. Update customs
    const customs = getCustomProducts();
    const existingCustomIdx = customs.findIndex(
      p => String(p.id).toLowerCase() === itemCode.toLowerCase() ||
           String(p.code).toLowerCase() === itemCode.toLowerCase() ||
           String(p.item_code).toLowerCase() === itemCode.toLowerCase()
    );

    if (existingCustomIdx >= 0) {
      customs[existingCustomIdx] = { ...customs[existingCustomIdx], ...formatted };
    } else {
      customs.unshift(formatted);
    }
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customs));

    // 2. Also update live cache so instant refresh displays edited item
    const cached = getLiveCachedProducts();
    if (cached.length > 0) {
      const existingCacheIdx = cached.findIndex(
        p => String(p.id).toLowerCase() === itemCode.toLowerCase() ||
             String(p.code).toLowerCase() === itemCode.toLowerCase() ||
             (oldCodeOrId && String(p.id).toLowerCase() === String(oldCodeOrId).toLowerCase()) ||
             (oldCodeOrId && String(p.code).toLowerCase() === String(oldCodeOrId).toLowerCase())
      );
      if (existingCacheIdx >= 0) {
        cached[existingCacheIdx] = { ...cached[existingCacheIdx], ...formatted };
      } else {
        cached.unshift(formatted);
      }
      localStorage.setItem(LIVE_CACHE_KEY, JSON.stringify(cached));
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_products_updated', { detail: formatted }));
    }
  } catch (e) {
    console.error('Error saving custom product locally', e);
  }
}

export function getAllActiveProducts(): ProductItem[] {
  const deletedIds = getDeletedProductIds().map(id => String(id).toLowerCase().trim());
  const customs = getCustomProducts();
  const cachedLive = getLiveCachedProducts();

  const isDeleted = (idOrCode: any) => {
    if (!idOrCode) return false;
    const str = String(idOrCode).toLowerCase().trim();
    return deletedIds.includes(str);
  };

  const combinedMap = new Map<string, ProductItem>();

  // If live cache has products from Cloudflare D1 database:
  // USE THE D1 PRODUCTS AS SOURCE OF TRUTH!
  if (cachedLive && cachedLive.length > 0) {
    cachedLive.forEach(p => {
      const codeKey = (p.code || p.id || '').toUpperCase();
      if (!isDeleted(p.id) && !isDeleted(p.code) && !isDeleted(codeKey) && !isDeleted((p as any).db_id)) {
        combinedMap.set(codeKey, p);
      }
    });
  } else {
    // Only on initial cold load before API responds, fallback to static base catalog:
    PRODUCTS.forEach(p => {
      const codeKey = (p.code || p.id || '').toUpperCase();
      if (!isDeleted(p.id) && !isDeleted(p.code) && !isDeleted(codeKey)) {
        combinedMap.set(codeKey, p);
      }
    });
  }

  // Overlay local customs (immediate preview before D1 roundtrip)
  customs.forEach(p => {
    const codeKey = (p.code || p.id || '').toUpperCase();
    if (!isDeleted(p.id) && !isDeleted(p.code) && !isDeleted(codeKey)) {
      combinedMap.set(codeKey, p);
    }
  });

  return Array.from(combinedMap.values());
}

export async function fetchLiveProducts(): Promise<ProductItem[]> {
  try {
    const res = await fetch('/api/products?active_only=true');
    const data = await res.json();
    if (data && data.success && Array.isArray(data.products) && data.products.length > 0) {
      const formatted = data.products.map(formatDbProductToItem);
      setLiveCachedProducts(formatted);
      return getAllActiveProducts();
    }
  } catch (err) {
    console.warn('Failed to fetch live products from API, using cached/static store.', err);
  }
  return getAllActiveProducts();
}

// ----------------------------------------------------
// Category Management Store
// ----------------------------------------------------
const CUSTOM_CAT_KEY = 'gfcl_custom_categories';
const DELETED_CAT_KEY = 'gfcl_deleted_categories';
const LIVE_CATS_KEY = 'gfcl_live_categories_cache';

export function getDeletedCategoryIds(): string[] {
  try {
    const raw = localStorage.getItem(DELETED_CAT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markCategoryDeletedLocally(idOrSlug: string) {
  try {
    const deleted = getDeletedCategoryIds();
    if (!deleted.includes(String(idOrSlug))) {
      deleted.push(String(idOrSlug));
      localStorage.setItem(DELETED_CAT_KEY, JSON.stringify(deleted));
    }
    const customs = getCustomCategories();
    const filtered = customs.filter(c => String(c.id) !== String(idOrSlug) && c.slug !== idOrSlug);
    localStorage.setItem(CUSTOM_CAT_KEY, JSON.stringify(filtered));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_categories_updated'));
    }
  } catch (e) {
    console.error('Error saving deleted category ID', e);
  }
}

export function getCustomCategories(): any[] {
  try {
    const raw = localStorage.getItem(CUSTOM_CAT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCategoryLocally(catData: any) {
  try {
    const customs = getCustomCategories();
    const existingIdx = customs.findIndex(
      c => String(c.id) === String(catData.id) || c.slug === catData.slug
    );

    const formatted = {
      id: catData.id || catData.slug || `cat_${Date.now()}`,
      slug: (catData.slug || catData.name || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'),
      name: catData.name,
      description: catData.description || '',
      iconName: catData.icon || catData.iconName || 'Package',
      icon: catData.icon || catData.iconName || 'Package',
      display_order: catData.display_order ?? 0,
      subcategories: Array.isArray(catData.subcategories) ? catData.subcategories : []
    };

    if (existingIdx >= 0) {
      customs[existingIdx] = { ...customs[existingIdx], ...formatted };
    } else {
      customs.push(formatted);
    }

    localStorage.setItem(CUSTOM_CAT_KEY, JSON.stringify(customs));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_categories_updated'));
    }
  } catch (e) {
    console.error('Error saving custom category', e);
  }
}

export function getAllActiveCategories(): any[] {
  const deleted = getDeletedCategoryIds();
  const customs = getCustomCategories();

  // Filter static CATEGORIES
  const map = new Map<string, any>();
  CATEGORIES.forEach(c => {
    if (!deleted.includes(String(c.id)) && !deleted.includes(c.slug)) {
      map.set(c.slug, { ...c, icon: c.iconName });
    }
  });

  // Apply customs
  customs.forEach(c => {
    if (!deleted.includes(String(c.id)) && !deleted.includes(c.slug)) {
      map.set(c.slug, c);
    }
  });

  return Array.from(map.values()).sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
}
