import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Eye, X, Leaf, ArrowRight, Sparkles } from 'lucide-react';

export interface MaterialItem {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  rawImages: [string, string];
  sampleImages: [string, string];
  categorySlug: string;
  products: string[];
}

export const RAW_MATERIALS: MaterialItem[] = [
  {
    id: 'seagrass',
    name: 'Seagrass',
    scientificName: 'Cyperus Malaccensis',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Pet basket, Planter, Tray, Coaster, Pouf etc.',
    rawImages: ['/materials/seagrass_plant_new.jpg', '/materials/seagrass_fiber_new.jpg'],
    sampleImages: ['/materials/preview_storage.jpg', '/materials/preview_planters.jpg'],
    categorySlug: 'seagrass',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Pet basket', 'Planter', 'Tray', 'Coaster', 'Pouf']
  },
  {
    id: 'kans-grass',
    name: 'Kans Grass',
    scientificName: 'Saccharum Spontaneum',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/orig_kans-1.jpg', '/materials/orig_kans-2.jpg'],
    sampleImages: ['/materials/orig_SCP-02.jpg', '/materials/orig_SCP-05.png'],
    categorySlug: 'kans-grass',
    products: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster']
  },
  {
    id: 'date-leaf',
    name: 'Date Leaf',
    scientificName: 'Phoenix Dactylifera',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/orig_date-1.jpg', '/materials/orig_date-2.jpg'],
    sampleImages: ['/materials/orig_BDD-03.jpg', '/materials/orig_BDD-31.jpg'],
    categorySlug: 'date-leaf',
    products: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster']
  },
  {
    id: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus Olitorius',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_Jute-1.jpg', '/materials/orig_jute-2.jpg'],
    sampleImages: ['/materials/orig_BJB-04.jpg', '/materials/orig_BJB-32.jpg'],
    categorySlug: 'jute',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf']
  },
  {
    id: 'rattan',
    name: 'Rattan',
    scientificName: 'Calamus Tenuis',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Pet basket, Planter, Tray, Coaster, Stool, Furniture etc.',
    rawImages: ['/materials/orig_rattan-1.jpg', '/materials/orig_rattan-2.jpg'],
    sampleImages: ['/materials/orig_BDC-02.jpg', '/materials/orig_BDC-06.jpg'],
    categorySlug: 'rattan',
    products: ['Storage', 'Laundry', 'Table mat', 'Pet basket', 'Planter', 'Tray', 'Coaster', 'Stool', 'Furniture']
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    scientificName: 'Bambusa Vulgaris',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster, Hanging basket, Stool, Furniture etc.',
    rawImages: ['/materials/orig_bamboo-1.jpg', '/materials/orig_bamboo-2.jpg'],
    sampleImages: ['/materials/orig_BDB-01.jpg', '/materials/orig_BDB-06.jpg'],
    categorySlug: 'bamboo',
    products: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster', 'Hanging basket', 'Stool', 'Furniture']
  },
  {
    id: 'palm-fiber',
    name: 'Palm Fiber',
    scientificName: 'Borassus Flabellifer',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Coaster etc.',
    rawImages: ['/materials/orig_palm-1.jpg', '/materials/orig_palm-2.jpg'],
    sampleImages: ['/materials/orig_BSL-01.jpg', '/materials/orig_BSL-02.jpg'],
    categorySlug: 'palm-fiber',
    products: ['Storage', 'Laundry', 'Table mat', 'Coaster']
  },
  {
    id: 'corn-husk',
    name: 'Corn Husk',
    scientificName: 'Zea Mays',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster etc.',
    rawImages: ['/materials/orig_corn-1.jpg', '/materials/orig_corn-2.jpg'],
    sampleImages: ['/materials/orig_PTF-01.jpg', '/materials/orig_PTF-02.jpg'],
    categorySlug: 'corn-husk',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster']
  },
  {
    id: 'banana-fiber',
    name: 'Banana Fiber',
    scientificName: 'Musa Acuminata',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_banana-1.jpg', '/materials/orig_banana-2.jpg'],
    sampleImages: ['/materials/orig_BAN-01.jpg', '/materials/orig_BAN-04.jpg'],
    categorySlug: 'banana-fiber',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf']
  },
  {
    id: 'pineapple-fiber',
    name: 'Pineapple Fiber',
    scientificName: 'Ananas Somosus',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_Pineapple-1.jpg', '/materials/orig_pineapple-2.png'],
    sampleImages: ['/materials/orig_BPA-01.jpg', '/materials/orig_BPA-02.jpg'],
    categorySlug: 'pineapple-fiber',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf']
  },
  {
    id: 'water-hyacinth',
    name: 'Water-Hyacinth',
    scientificName: 'Eicssornia Crassipes',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Table mat, Planter, Pet basket, Coaster etc.',
    rawImages: ['/materials/orig_water-hyacinth-1.jpg', '/materials/orig_water-hyacinth-2.jpg'],
    sampleImages: ['/materials/orig_BWH-01.jpg', '/materials/orig_BWH-02.jpg'],
    categorySlug: 'water-hyacinth',
    products: ['Storage', 'Laundry', 'Door mat', 'Table mat', 'Planter', 'Pet basket', 'Coaster']
  }
];

export const MaterialsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  const filteredMaterials = RAW_MATERIALS.filter((mat) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      mat.name.toLowerCase().includes(q) ||
      mat.scientificName.toLowerCase().includes(q) ||
      mat.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-emerald-50/30 text-stone-900 font-sans pb-20 animate-fadeIn">
      
      {/* 1. Premium Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] reveal-up">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-emerald-200/80 text-xs font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white font-bold">Materials Information</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Leaf className="h-6 w-6 text-emerald-300" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
                  Raw Materials & Fibers
                </h1>
              </div>
              <p className="text-emerald-100/90 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
                Discover the authentic natural fibers sourced from the heart of Bangladesh — each material 
                handcrafted into premium eco-friendly products for global export.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                  <Sparkles className="h-3 w-3" /> {RAW_MATERIALS.length} Natural Materials
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                  100% Eco-Friendly
                </span>
              </div>
            </div>
            
            {/* Right: Large Branded Emblem / Original Site Icon */}
            <div className="flex items-center justify-center shrink-0">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/35 transition-all duration-500"></div>
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 p-3.5 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <img
                    src="/logo-icon.png"
                    alt="Golden Fiber Crafts Ltd."
                    className="h-full w-full object-contain filter drop-shadow-md brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <img src="/logo-icon.png" alt="Watermark" className="h-64 w-64 lg:h-72 lg:w-72 object-contain filter invert" />
        </div>
      </div>

      {/* 2. Materials Grid — Modern Card Layout */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        
        <div className="space-y-6 sm:space-y-8">
          {filteredMaterials.map((mat, idx) => {
            const staggerClass = `stagger-${(idx % 8) + 1}`;
            const isExpanded = activeMaterial === mat.id;
            const isEven = idx % 2 === 0;
            
            return (
              <div
                key={mat.id}
                className={`reveal-up ${staggerClass} group`}
              >
                <div className={`
                  relative rounded-2xl border border-stone-200/80 bg-white 
                  shadow-md hover:shadow-2xl hover:border-emerald-200/60
                  transition-all duration-500 ease-out overflow-hidden
                  ${isExpanded ? 'ring-2 ring-emerald-500/30 shadow-xl' : ''}
                `}>

                  <div className={`grid grid-cols-1 lg:grid-cols-11 ${isEven ? '' : 'lg:direction-rtl'}`}>
                    
                    {/* Left/Right: Raw Material Images */}
                    <div className={`lg:col-span-3 p-5 sm:p-6 ${isEven ? '' : 'lg:order-3'}`}>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-white text-xs font-black shadow-lg border-2 border-emerald-600/30 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[11px] uppercase tracking-[0.15em] font-black text-stone-600">
                          Raw Material
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {mat.rawImages.map((imgSrc, i) => (
                          <div
                            key={i}
                            onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Raw Material` })}
                            className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 cursor-pointer group/img ring-1 ring-stone-200/80 hover:ring-emerald-400/60 transition-all duration-300 shadow-sm hover:shadow-xl"
                          >
                            <img
                              src={imgSrc}
                              alt={`${mat.name} Raw Material`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                              <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Center: Description & Info */}
                    <div className={`lg:col-span-5 p-5 sm:p-7 flex flex-col justify-center border-x border-stone-100 ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-950 tracking-tight leading-tight">
                            {mat.name}
                          </h3>
                          <p className="text-sm font-bold text-emerald-700 italic mt-1">
                            {mat.scientificName}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-[15px] text-stone-700 leading-relaxed font-semibold mb-5">
                        {mat.description}
                      </p>

                      {/* Product Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {mat.products.slice(0, isExpanded ? undefined : 6).map((product) => (
                          <span
                            key={product}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-default"
                          >
                            {product}
                          </span>
                        ))}
                        {!isExpanded && mat.products.length > 6 && (
                          <button
                            onClick={() => setActiveMaterial(mat.id)}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-bold border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer"
                          >
                            +{mat.products.length - 6} more
                          </button>
                        )}
                        {isExpanded && mat.products.length > 6 && (
                          <button
                            onClick={() => setActiveMaterial(null)}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 text-xs font-bold border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer"
                          >
                            Show less
                          </button>
                        )}
                      </div>

                      {/* Browse Button */}
                      <Link
                        to={`/products?category=${mat.categorySlug}`}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-300 w-fit group/btn"
                      >
                        <span>Browse {mat.name} Products</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>

                    {/* Right/Left: Sample Product Images */}
                    <div className={`lg:col-span-3 p-5 sm:p-6 bg-gradient-to-br from-amber-50/50 to-orange-50/30 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-5 rounded-full bg-amber-500"></div>
                        <p className="text-[11px] uppercase tracking-[0.15em] font-black text-amber-800/80">
                          Sample Products
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {mat.sampleImages.map((imgSrc, i) => (
                          <div
                            key={i}
                            onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Sample Product` })}
                            className="relative aspect-square rounded-xl overflow-hidden bg-white cursor-pointer group/img ring-1 ring-amber-200/80 hover:ring-amber-500/60 transition-all duration-300 shadow-sm hover:shadow-xl"
                          >
                            <img
                              src={imgSrc}
                              alt={`${mat.name} Sample Product`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                              <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-20">
            <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-stone-500">No materials found</h3>
            <p className="text-sm text-stone-400 mt-1">Try searching with a different keyword.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* 3. HD Image Lightbox Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm animate-fadeIn cursor-pointer"
          data-lenis-prevent
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
              <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900">
                {previewImage.title}
              </h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="max-h-[75vh] overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
