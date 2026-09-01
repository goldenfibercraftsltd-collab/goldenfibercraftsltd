export interface SectionMetric {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PageSectionItem {
  id?: number | string;
  section_type: 'sustainability' | 'infrastructure' | 'quality';
  section_key?: string;
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  quote?: string;
  description?: string;
  image_url?: string;
  image?: string; // compatibility alias
  image_alt?: string;
  imageAlt?: string; // compatibility alias
  metrics_json?: string;
  points_json?: string;
  process_json?: string;
  metrics?: SectionMetric[];
  points?: string[];
  guarantees?: string[]; // compatibility alias
  impactPoints?: string[]; // compatibility alias
  highlights?: string[]; // compatibility alias
  process?: ProcessStep[];
  category_slug?: string;
  categorySlug?: string;
  display_order?: number;
  is_active?: number | boolean;
  created_at?: string;
  updated_at?: string;
}

export const DEFAULT_QUALITY_SECTIONS: PageSectionItem[] = [
  {
    id: 1,
    section_type: 'quality',
    section_key: 'raw-fiber-testing',
    number: '01',
    badge: 'Raw Material Verification',
    title: 'Raw Fiber Purity & Tensile Strength Testing',
    quote: 'Only top-grade natural golden tossa jute, sun-cured coastal seagrass, and flexible date palm fronds are admitted into our weaving lines.',
    description: 'Every incoming batch of raw natural fiber undergoes tensile load testing, color consistency matching, and fiber strand length verification. We reject brittle or chemically treated strands to ensure our handwoven products withstand heavy daily use and international retail handling.',
    image_url: '/quality/quality_tensile_test.png',
    image: '/quality/quality_tensile_test.png',
    image_alt: 'Artisan inspecting golden jute fiber tensile strength with calibrated measuring instruments in laboratory',
    imageAlt: 'Artisan inspecting golden jute fiber tensile strength with calibrated measuring instruments in laboratory',
    metrics: [
      { label: 'Tensile Endurance', value: '>45 kgf' },
      { label: 'Synthetic Content', value: '0.0% Pure' },
      { label: 'Natural Fiber Yield', value: 'Grade-A Only' }
    ],
    guarantees: [
      '100% Natural Golden Jute & Wild Coastal Seagrass',
      'No synthetic nylon or polyester core threads',
      'Non-toxic, azo-free and heavy metal free vegetable colorings'
    ],
    display_order: 1,
    is_active: 1
  },
  {
    id: 2,
    section_type: 'quality',
    section_key: 'moisture-mold-control',
    number: '02',
    badge: 'Climate & Mold Defense',
    title: 'Digital Moisture Metering & Anti-Mold Guarantee',
    quote: 'We guarantee 100% mold-free delivery through climate-controlled drying chambers and digital moisture metering.',
    description: 'Moisture is the primary risk during international maritime container transit. Golden Fiber Crafts Ltd enforces a strict protocol: all products undergo heated dehumidification chambers, digital pin hygrometer tests ensuring moisture stays strictly between 8% and 12%, followed by certified fumigation and silica gel pouch inclusion.',
    image_url: '/quality/quality_inspection.png',
    image: '/quality/quality_inspection.png',
    image_alt: 'Quality control officer testing handcrafted seagrass basket with digital moisture meter hygrometer',
    imageAlt: 'Quality control officer testing handcrafted seagrass basket with digital moisture meter hygrometer',
    metrics: [
      { label: 'Moisture Level', value: '8% - 12%' },
      { label: 'Mold Protection', value: '100% Guaranteed' },
      { label: 'Fumigation', value: 'Govt. Certified' }
    ],
    guarantees: [
      'Digital hygrometer testing of every production batch',
      'Official Phytosanitary & Export Fumigation certificates provided',
      'Heavy-duty desiccants placed inside every master carton'
    ],
    display_order: 2,
    is_active: 1
  },
  {
    id: 3,
    section_type: 'quality',
    section_key: 'export-packaging-logistics',
    number: '03',
    badge: 'Packaging & Container Safety',
    title: '5-Ply Export Master Cartons & Barcode Compliance',
    quote: 'Robust export packaging engineered for maximum container CBM space and zero shipping transit damage.',
    description: 'Our packaging line utilizes heavy-duty 5-ply double-wall corrugated master cartons, reinforced edge taping, and precision nestable stacking. Every carton is labeled with buyer-specific GS1/EAN barcodes, drop-tested according to ISTA 1A standards, and sealed with moisture-barrier liners.',
    image_url: '/quality/quality_export_packaging.png',
    image: '/quality/quality_export_packaging.png',
    image_alt: 'Export warehouse workers packing handcrafted storage baskets in 5-ply cartons with barcodes',
    imageAlt: 'Export warehouse workers packing handcrafted storage baskets in 5-ply cartons with barcodes',
    metrics: [
      { label: 'Carton Standard', value: '5-Ply Heavy Duty' },
      { label: 'Drop Test Standard', value: 'ISTA 1A Passed' },
      { label: 'Barcode Scanning', value: '100% Verified' }
    ],
    guarantees: [
      'High-bursting strength cartons (>18 kg/cm² burst factor)',
      'Custom buyer private labeling, hangtags, and SKU barcodes',
      'Optimized palletization and container space maximization'
    ],
    display_order: 3,
    is_active: 1
  }
];

export const DEFAULT_SUSTAINABILITY_SECTIONS: PageSectionItem[] = [
  {
    id: 101,
    section_type: 'sustainability',
    section_key: 'carbon-negative-harvest',
    number: '01',
    badge: 'Eco-Cultivation & Climate Sinks',
    title: '100% Natural, Carbon-Negative Fiber Harvesting',
    quote: 'Jute and wild grasses act as powerful carbon sinks, absorbing over 15 tonnes of CO2 per hectare during their rapid 120-day growth cycle.',
    description: 'Our primary raw materials — golden jute, wild riverbed seagrass, date palm leaves, and kans grass — are rapidly renewable botanical fibers that require zero synthetic chemical fertilizers or pesticides. Cultivated in rain-fed alluvial river basins in Bangladesh, they naturally replenish soil fertility and leave zero synthetic residue upon return to the earth.',
    image_url: '/sustainability/sustainability_harvest.png',
    image: '/sustainability/sustainability_harvest.png',
    image_alt: 'Lush green sustainable jute fields and river harvesting in rural Bangladesh with golden fibers drying',
    imageAlt: 'Lush green sustainable jute fields and river harvesting in rural Bangladesh with golden fibers drying',
    metrics: [
      { label: 'CO2 Absorption', value: '15 T/Hectare' },
      { label: 'Chemical Fertilizers', value: '0% Needed' },
      { label: 'Biodegradability', value: '100% Organic' }
    ],
    impactPoints: [
      'Rapid 120-day natural crop regeneration without artificial irrigation',
      'Naturally enriches agricultural soil nutrients for seasonal crop rotation',
      'Completely compostable back into organic mulch in 60 to 90 days'
    ],
    display_order: 1,
    is_active: 1
  },
  {
    id: 102,
    section_type: 'sustainability',
    section_key: 'artisan-empowerment',
    number: '02',
    badge: 'Social Impact & Gender Equality',
    title: 'Empowering Rural Women & Ethical Livelihoods',
    quote: 'Over 85% of our weaving workforce comprises skilled rural women craftswomen earning fair-trade living wages.',
    description: 'Handicraft production is a transformative social catalyst in rural Bangladesh. Golden Fiber Crafts Ltd operates decentralized, well-ventilated village artisan centers that allow mothers and women artisans to work with dignity, receive healthcare stipends, finance their children’s education, and achieve financial self-reliance within their local communities.',
    image_url: '/sustainability/sustainability_empowerment.png',
    image: '/sustainability/sustainability_empowerment.png',
    image_alt: 'Smiling Bangladeshi women artisans proudly holding handcrafted eco baskets in sunlit community workshop',
    imageAlt: 'Smiling Bangladeshi women artisans proudly holding handcrafted eco baskets in sunlit community workshop',
    metrics: [
      { label: 'Female Workforce', value: '>85% Women' },
      { label: 'Fair Trade Wage', value: '35% Above Local' },
      { label: 'Child Education Aid', value: '100% Supported' }
    ],
    impactPoints: [
      'Flexible home and community cluster workstations for mothers',
      'Zero child labor guarantee with mandatory school attendance programs',
      'Continuous masterclass training in traditional and modern export weaving'
    ],
    display_order: 2,
    is_active: 1
  }
];

export const DEFAULT_INFRASTRUCTURE_SECTIONS: PageSectionItem[] = [];

const SECTIONS_CACHE_PREFIX = 'gfcl_page_sections_cache_';

export function normalizeSectionItem(raw: any): PageSectionItem {
  let metrics: SectionMetric[] = [];
  let points: string[] = [];
  let process: ProcessStep[] = [];

  if (raw.metrics_json) {
    try {
      metrics = typeof raw.metrics_json === 'string' ? JSON.parse(raw.metrics_json) : raw.metrics_json;
    } catch {}
  } else if (Array.isArray(raw.metrics)) {
    metrics = raw.metrics;
  }

  if (raw.points_json) {
    try {
      points = typeof raw.points_json === 'string' ? JSON.parse(raw.points_json) : raw.points_json;
    } catch {}
  } else if (Array.isArray(raw.points)) {
    points = raw.points;
  } else if (Array.isArray(raw.guarantees)) {
    points = raw.guarantees;
  } else if (Array.isArray(raw.impactPoints)) {
    points = raw.impactPoints;
  } else if (Array.isArray(raw.highlights)) {
    points = raw.highlights;
  }

  if (raw.process_json) {
    try {
      process = typeof raw.process_json === 'string' ? JSON.parse(raw.process_json) : raw.process_json;
    } catch {}
  } else if (Array.isArray(raw.process)) {
    process = raw.process;
  }

  const img = raw.image_url || raw.image || '';
  const imgAlt = raw.image_alt || raw.imageAlt || raw.title || '';

  return {
    ...raw,
    image_url: img,
    image: img,
    image_alt: imgAlt,
    imageAlt: imgAlt,
    metrics,
    points,
    guarantees: points,
    impactPoints: points,
    highlights: points,
    process,
    category_slug: raw.category_slug || raw.categorySlug || '',
    categorySlug: raw.category_slug || raw.categorySlug || '',
    is_active: raw.is_active === 1 || raw.is_active === true || raw.is_active === '1'
  };
}

export function getLocalSections(type?: 'sustainability' | 'infrastructure' | 'quality'): PageSectionItem[] {
  try {
    const cacheKey = type ? `${SECTIONS_CACHE_PREFIX}${type}` : `${SECTIONS_CACHE_PREFIX}all`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(normalizeSectionItem);
      }
    }
  } catch {}

  if (type === 'quality') return DEFAULT_QUALITY_SECTIONS;
  if (type === 'sustainability') return DEFAULT_SUSTAINABILITY_SECTIONS;
  if (type === 'infrastructure') return DEFAULT_INFRASTRUCTURE_SECTIONS;
  return [...DEFAULT_QUALITY_SECTIONS, ...DEFAULT_SUSTAINABILITY_SECTIONS, ...DEFAULT_INFRASTRUCTURE_SECTIONS];
}

export function setLocalSections(items: PageSectionItem[], type?: 'sustainability' | 'infrastructure' | 'quality') {
  try {
    const normalized = items.map(normalizeSectionItem);
    const cacheKey = type ? `${SECTIONS_CACHE_PREFIX}${type}` : `${SECTIONS_CACHE_PREFIX}all`;
    localStorage.setItem(cacheKey, JSON.stringify(normalized));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_sections_updated', { detail: { type, items: normalized } }));
    }
  } catch (e) {
    console.error('Error saving page sections to local cache', e);
  }
}

export async function fetchLiveSections(type?: 'sustainability' | 'infrastructure' | 'quality'): Promise<PageSectionItem[]> {
  try {
    const url = type ? `/api/sections?type=${type}` : '/api/sections';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.sections) && data.sections.length > 0) {
      const normalized = data.sections.map(normalizeSectionItem);
      setLocalSections(normalized, type);
      return normalized;
    }
  } catch (err) {
    console.warn(`[fetchLiveSections] Falling back to local cache for ${type || 'all'}:`, err);
  }
  return getLocalSections(type);
}
