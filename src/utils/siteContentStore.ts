import { 
  TAGLINE, 
  SUB_TAGLINE, 
  COMPANY_NAME, 
  OFFICIAL_EMAIL, 
  SECONDARY_EMAIL, 
  OFFICIAL_WEBSITE, 
  COMPANY_ADDRESSES, 
  KEY_LEADERSHIP, 
  TECHNICAL_INFORMATION 
} from '../data/products';

export interface SiteSettingsData {
  site_name: string;
  tagline: string;
  sub_tagline: string;
  official_email: string;
  secondary_email: string;
  official_website: string;
  phone: string;
  whatsapp: string;
  facebook_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  youtube_url?: string;
  announcement_bar?: string;

  // Addresses
  corporate_office: string;
  factory_unit_1: string;
  factory_unit_2: string;
  corporate_phone?: string;
  factory_phone?: string;
  google_map_url?: string;

  // Key Leadership MD
  md_name: string;
  md_title: string;
  md_phone: string;
  md_email: string;
  md_image: string;
  md_message: string;

  // Key Leadership Director
  director_name: string;
  director_title: string;
  director_phone: string;
  director_email: string;
  director_image: string;
  director_message: string;

  // Technical Info
  office_staff: string;
  artisans_count: string;
  monthly_capacity: string;
  production_lead_time: string;
  payment_terms: string;
  annual_turnover: string;

  // Footer & About Content
  footer_description: string;
  about_intro: string;
  copyright_text: string;

  // Granular About Section Texts
  about_history_title?: string;
  about_history_p1?: string;
  about_history_p2?: string;
  about_history_p3?: string;
  about_artisan_headline?: string;
  about_artisan_subtext?: string;
  about_artisan_image?: string;
  vision_title?: string;
  vision_text?: string;
  mission_title?: string;
  mission_text?: string;

  // Granular Footer & Information Links
  footer_company_profile_url?: string;
  footer_terms_url?: string;
  footer_faq_url?: string;
  footer_info_custom_title_1?: string;
  footer_info_custom_url_1?: string;
  footer_info_custom_title_2?: string;
  footer_info_custom_url_2?: string;
}

export const DEFAULT_SITE_SETTINGS: SiteSettingsData = {
  site_name: COMPANY_NAME,
  tagline: TAGLINE,
  sub_tagline: SUB_TAGLINE,
  official_email: OFFICIAL_EMAIL,
  secondary_email: SECONDARY_EMAIL,
  official_website: OFFICIAL_WEBSITE,
  phone: '+8801916-183583',
  whatsapp: '+8801916-183583',
  facebook_url: 'https://facebook.com',
  linkedin_url: 'https://linkedin.com',
  instagram_url: 'https://instagram.com',
  youtube_url: 'https://youtube.com',
  announcement_bar: '🌿 Direct Manufacturer & Global Exporter of Natural Jute, Seagrass & Handicrafts from Bangladesh',

  corporate_office: COMPANY_ADDRESSES.corporateOffice,
  factory_unit_1: COMPANY_ADDRESSES.factoryUnit1,
  factory_unit_2: COMPANY_ADDRESSES.factoryUnit2,
  corporate_phone: '+8801916-183583',
  factory_phone: '+8801721-994082',
  google_map_url: 'https://maps.google.com/?q=Uttara+Dhaka+Bangladesh',

  md_name: KEY_LEADERSHIP.managingDirector.name,
  md_title: KEY_LEADERSHIP.managingDirector.title,
  md_phone: KEY_LEADERSHIP.managingDirector.phone,
  md_email: KEY_LEADERSHIP.managingDirector.email,
  md_image: KEY_LEADERSHIP.managingDirector.image,
  md_message: KEY_LEADERSHIP.managingDirector.message,

  director_name: KEY_LEADERSHIP.seniorDirector.name,
  director_title: KEY_LEADERSHIP.seniorDirector.title,
  director_phone: KEY_LEADERSHIP.seniorDirector.phone,
  director_email: KEY_LEADERSHIP.seniorDirector.email,
  director_image: KEY_LEADERSHIP.seniorDirector.image,
  director_message: KEY_LEADERSHIP.seniorDirector.message,

  office_staff: TECHNICAL_INFORMATION.officeStaff,
  artisans_count: TECHNICAL_INFORMATION.artisans,
  monthly_capacity: TECHNICAL_INFORMATION.productionCapacityMonth,
  production_lead_time: TECHNICAL_INFORMATION.productionLeadTime,
  payment_terms: TECHNICAL_INFORMATION.paymentTerms,
  annual_turnover: TECHNICAL_INFORMATION.annualTurnover,

  footer_description: 'Golden Fiber Crafts Ltd. is a premier government-compliant manufacturer & exporter of 100% natural, biodegradable jute, seagrass, and handmade lifestyle crafts from Bangladesh to retail partners worldwide.',
  about_intro: 'Crafting 100% natural, biodegradable handicraft solutions while empowering rural Bangladeshi women artisans with fair living wages and safe working environments.',
  copyright_text: 'Golden Fiber Crafts Ltd. All rights reserved.',

  about_history_title: "Showcasing Bangladesh's Natural Fibers to the Global Marketplace",
  about_history_p1: "Golden Fiber Crafts Ltd. was established with a vision to showcase the beauty, versatility, and sustainability of Bangladesh's natural fibers to the global marketplace. Inspired by the country's rich tradition of handicrafts and its reputation as the home of the world's finest jute—known as the \"Golden Fiber\"—the company was founded to create a high-quality diverse range of eco-friendly products, including jute bags, home décor, storage solutions, gift items, and handcrafted accessories.",
  about_history_p2: "Over the years, we have continuously invested in product innovation, quality management, and sustainable manufacturing practices. Our commitment to excellence has enabled us to build strong relationships with customers across Europe, North America, Australia, Japan, and other international markets.",
  about_history_p3: "Today, Golden Fiber Crafts Ltd. is recognized as a reliable manufacturer and exporter of eco-friendly handicrafts and natural fiber products. Guided by our core values of quality, integrity, innovation, and sustainability, we remain dedicated to promoting environmentally responsible products while supporting local artisans and contributing to Bangladesh's growing handicraft industry.",
  about_artisan_headline: 'Over 10,000+ Skilled Artisans Workforce',
  about_artisan_subtext: 'Decentralized rural artisan clusters across Bangladesh creating authentic woven handicrafts.',
  about_artisan_image: '/about/authentic_artisans_circle.png',
  vision_title: 'Our Vision',
  vision_text: 'To be a globally recognized leader in sustainable natural fiber products, bridging traditional Bangladeshi artisan craftsmanship with modern global retail aesthetics, while championing environmental conservation and rural community empowerment.',
  mission_title: 'Our Mission',
  mission_text: 'To design, produce, and export premier eco-friendly jute, seagrass, and natural handicraft products that surpass global quality benchmarks, while providing fair living wages, hygienic work conditions, and continuous skill development for our artisan community.',

  footer_company_profile_url: '/company-profile.pdf',
  footer_terms_url: '/terms',
  footer_faq_url: '/faq',
  footer_info_custom_title_1: '',
  footer_info_custom_url_1: '',
  footer_info_custom_title_2: '',
  footer_info_custom_url_2: ''
};

const SITE_SETTINGS_KEY = 'gfcl_live_site_settings';
const CLIENTS_CACHE_KEY = 'gfcl_live_clients_cache';
const CERTS_CACHE_KEY = 'gfcl_live_certs_cache';

export function getLocalSiteSettings(): SiteSettingsData {
  try {
    const raw = localStorage.getItem(SITE_SETTINGS_KEY);
    if (raw) {
      return { ...DEFAULT_SITE_SETTINGS, ...JSON.parse(raw) };
    }
  } catch {}
  return DEFAULT_SITE_SETTINGS;
}

export function saveLocalSiteSettings(data: Partial<SiteSettingsData>) {
  try {
    const merged = { ...getLocalSiteSettings(), ...data };
    localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(merged));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_settings_updated', { detail: merged }));
    }
    return merged;
  } catch (e) {
    console.error('Error saving site settings locally', e);
    return DEFAULT_SITE_SETTINGS;
  }
}

export async function fetchLiveSiteSettings(): Promise<SiteSettingsData> {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (data && data.success && data.settings) {
      const merged = { ...DEFAULT_SITE_SETTINGS, ...data.settings };
      localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(merged));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('gfcl_settings_updated', { detail: merged }));
      }
      return merged;
    }
  } catch (e) {
    console.warn('Could not fetch settings from API, using local/default.', e);
  }
  return getLocalSiteSettings();
}

// ---------------------------------------------
// Clients Store
// ---------------------------------------------
export interface ClientItem {
  id?: number | string;
  name: string;
  logo_url: string;
  country: string;
  category?: string;
  website?: string;
  display_order?: number;
  is_active?: number;
}

export const DEFAULT_CLIENTS: ClientItem[] = [
  { id: 1, name: 'Aarong', logo_url: '/clients/aarong.png', country: 'Bangladesh', category: 'Ethical Lifestyle & Craft Retailing', display_order: 1 },
  { id: 2, name: 'Det Gamle Apotek', logo_url: '/clients/det_gamle_apotek.png', country: 'Denmark', category: 'Home Decor & Seasonal Crafts', display_order: 2 },
  { id: 3, name: 'Ten Thousand Villages', logo_url: '/clients/ten_thousand_villages.png', country: 'USA / Canada', category: 'Fair Trade Artisan Products', display_order: 3 },
  { id: 4, name: 'The Body Shop', logo_url: '/clients/the_body_shop.png', country: 'UK / Global', category: 'Sustainable Packaging & Baskets', display_order: 4 },
  { id: 5, name: 'Le Rêve', logo_url: '/clients/le_reve.png', country: 'Bangladesh', category: 'Fashion & Handcrafted Accessories', display_order: 5 },
  { id: 6, name: 'Dekker Decoration', logo_url: '/clients/dekker_decoration.png', country: 'Netherlands', category: 'European Home & Garden Accessories', display_order: 6 },
  { id: 7, name: 'Traidcraft', logo_url: '/clients/traidcraft.png', country: 'UK', category: 'Pioneering Fair Trade Organization', display_order: 7 },
  { id: 8, name: 'Bozy', logo_url: '/clients/bozy.png', country: 'Australia', category: 'Boho Home Accents & Storage', display_order: 8 },
];

export function getLocalClients(): ClientItem[] {
  try {
    const raw = localStorage.getItem(CLIENTS_CACHE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_CLIENTS;
}

export function saveLocalClients(list: ClientItem[]) {
  try {
    localStorage.setItem(CLIENTS_CACHE_KEY, JSON.stringify(list));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_clients_updated', { detail: list }));
    }
  } catch {}
}

export async function fetchLiveClients(): Promise<ClientItem[]> {
  try {
    const res = await fetch('/api/clients?active_only=true');
    const data = await res.json();
    if (data && data.success && Array.isArray(data.clients) && data.clients.length > 0) {
      saveLocalClients(data.clients);
      return data.clients;
    }
  } catch {}
  return getLocalClients();
}

// ---------------------------------------------
// Certificates Store
// ---------------------------------------------
export interface CertificateItem {
  id?: number | string;
  name?: string;
  title: string;
  badge?: string;
  logo_url?: string;
  image_url?: string;
  image?: string;
  description?: string;
  certificate_url?: string;
  valid_until?: string;
  display_order?: number;
  is_active?: number;
}

export const DEFAULT_CERTIFICATES: CertificateItem[] = [
  { id: 1, name: 'ISO 14001:2015', title: 'ISO 14001:2015 Environmental Management', badge: 'Environmental Standard', image_url: '/certificates/cert1.png', logo_url: '/certificates/cert1.png', description: 'Certified environmental management systems ensuring zero toxic emissions and sustainable waste disposal.', display_order: 1 },
  { id: 2, name: 'ISO 9001:2015', title: 'ISO 9001:2015 Quality Management System', badge: 'Quality Standard', image_url: '/certificates/cert2.png', logo_url: '/certificates/cert2.png', description: 'Certified international quality management standard ensuring strict consistency and zero defect export dispatch.', display_order: 2 },
  { id: 3, name: 'amfori BSCI', title: 'amfori BSCI Social Compliance Initiative', badge: 'Social Compliance', image_url: '/certificates/cert3.png', logo_url: '/certificates/cert3.png', description: 'Comprehensive workplace safety, fair artisan compensation, and ethical labor standards across production facilities.', display_order: 3 },
  { id: 4, name: 'OEKO-TEX® Standard 100', title: 'OEKO-TEX® Standard 100 Certification', badge: 'Eco & Non-Toxic', image_url: '/certificates/cert4.png', logo_url: '/certificates/cert4.png', description: 'Zero harmful substances, non-toxic heavy metal free vegetable colorings safe for infant contact and global retail.', display_order: 4 },
];

export function getLocalCertificates(): CertificateItem[] {
  try {
    const raw = localStorage.getItem(CERTS_CACHE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_CERTIFICATES;
}

export function saveLocalCertificates(list: CertificateItem[]) {
  try {
    localStorage.setItem(CERTS_CACHE_KEY, JSON.stringify(list));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gfcl_certificates_updated', { detail: list }));
    }
  } catch {}
}

export async function fetchLiveCertificates(): Promise<CertificateItem[]> {
  try {
    const res = await fetch('/api/certificates?active_only=true');
    const data = await res.json();
    if (data && data.success && Array.isArray(data.certificates) && data.certificates.length > 0) {
      saveLocalCertificates(data.certificates);
      return data.certificates;
    }
  } catch {}
  return getLocalCertificates();
}
