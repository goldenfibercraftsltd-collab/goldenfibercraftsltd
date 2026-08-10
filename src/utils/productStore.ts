import { PRODUCTS, ProductItem, CATEGORIES } from '../data/products';

const DELETED_KEY = 'gfcl_deleted_product_ids';
const CUSTOM_KEY = 'gfcl_custom_products';

export function getDeletedProductIds(): string[] {
  try {
    const raw = localStorage.getItem(DELETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markProductDeletedLocally(id: string) {
  try {
    const deleted = getDeletedProductIds();
    if (!deleted.includes(id)) {
      deleted.push(id);
      localStorage.setItem(DELETED_KEY, JSON.stringify(deleted));
    }
    // Also remove from custom products
    const customs = getCustomProducts();
    const filtered = customs.filter(p => p.id !== id && p.code !== id && p.item_code !== id);
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(filtered));
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

export function saveCustomProductLocally(productData: any) {
  try {
    const customs = getCustomProducts();
    const existingIdx = customs.findIndex(
      p => p.id === productData.id || p.item_code === productData.item_code || p.code === productData.item_code
    );

    const formatted: ProductItem = {
      id: productData.item_code || productData.id || `GFC-NEW-${Date.now()}`,
      slug: (productData.item_code || productData.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      code: productData.item_code || productData.id,
      name: productData.name,
      category: productData.category_id || productData.category,
      categoryName: CATEGORIES.find(c => c.id === (productData.category_id || productData.category))?.name || 'Handicrafts',
      categorySlug: CATEGORIES.find(c => c.id === (productData.category_id || productData.category))?.slug || 'jute',
      subCategory: productData.sub_category || productData.subCategory,
      image: productData.image_url || productData.image || '/favicon.svg',
      galleryImages: typeof productData.gallery_images === 'string' ? JSON.parse(productData.gallery_images || '[]') : (productData.gallery_images || []),
      description: productData.description || '',
      longDescription: {
        overview: productData.description || '',
        craftsmanship: 'Handcrafted by skilled traditional artisans in Bangladesh using sustainable natural fibers.',
        exportDetails: 'Quality controlled, fumigated, and packed in 5-ply export master cartons.',
        careInstructions: 'Keep in dry indoor area. Clean with soft damp cloth.',
      },
      specifications: [
        { key: 'Materials', value: productData.material || 'Natural Fiber' },
        { key: 'Specification', value: productData.size || 'Custom Size' },
        { key: 'MOQ', value: productData.moq || '300 Sets' },
      ],
      features: ['100% Eco-Friendly', 'Artisanal Handcraft', 'Export Standard'],
      unit: productData.unit || 'S/3',
      setPerCarton: productData.set_per_carton || 2,
      cbmPerCarton: productData.cbm_per_carton || 0.065,
      nwPerCtn: productData.nw_per_ctn || 3.5,
      gwPerCtn: productData.gw_per_ctn || 4.8,
      material: productData.material || 'Natural Fiber',
      color: productData.color || 'Natural',
    };

    if (existingIdx >= 0) {
      customs[existingIdx] = { ...customs[existingIdx], ...formatted };
    } else {
      customs.unshift(formatted);
    }

    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customs));
  } catch (e) {
    console.error('Error saving custom product locally', e);
  }
}

export function getAllActiveProducts(): ProductItem[] {
  const deletedIds = getDeletedProductIds();
  const customs = getCustomProducts();

  // Filter static products removing deleted ones
  const filteredStatic = PRODUCTS.filter(
    p => !deletedIds.includes(p.id) && !deletedIds.includes(p.code)
  );

  // Merge customs and static (customs take priority)
  const combinedMap = new Map<string, ProductItem>();
  
  filteredStatic.forEach(p => combinedMap.set(p.id, p));
  customs.forEach(p => {
    if (!deletedIds.includes(p.id) && !deletedIds.includes(p.code)) {
      combinedMap.set(p.id, p);
    }
  });

  return Array.from(combinedMap.values());
}
