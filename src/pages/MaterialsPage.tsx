import React, { useState } from 'react';
import { Search, Eye, X } from 'lucide-react';
import { usePageTitle } from '../utils/usePageTitle';
import { getDynamicCardAnimation } from '../utils/scrollReveal';

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
    rawImages: ['/materials/kans_grass_plant_new.jpg', '/materials/kans_grass_fiber_new.jpg'],
    sampleImages: ['/materials/kans_sample_bowls.jpg', '/materials/kans_sample_baskets.jpg'],
    categorySlug: 'kans-grass',
    products: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster']
  },
  {
    id: 'date-leaf',
    name: 'Date Leaf',
    scientificName: 'Phoenix Dactylifera',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/date_leaf_plant_new.jpg', '/materials/date_leaf_fiber_new.jpg'],
    sampleImages: ['/materials/date_sample_trays.jpg', '/materials/date_sample_canisters.jpg'],
    categorySlug: 'date-leaf',
    products: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster']
  },
  {
    id: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus Olitorius',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/jute_plant_new.jpg', '/materials/jute_fiber_new.jpg'],
    sampleImages: ['/materials/jute_sample_bowls.jpg', '/materials/jute_sample_baskets.jpg'],
    categorySlug: 'jute',
    products: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf']
  },
  {
    id: 'rattan',
    name: 'Rattan',
    scientificName: 'Calamus Tenuis',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Pet basket, Planter, Tray, Coaster, Stool, Furniture etc.',
    rawImages: ['/materials/rattan_plant_new.jpg', '/materials/rattan_fiber_new.jpg'],
    sampleImages: ['/materials/rattan_sample_bowls.jpg', '/materials/rattan_sample_baskets.jpg'],
    categorySlug: 'rattan',
    products: ['Storage', 'Laundry', 'Table mat', 'Pet basket', 'Planter', 'Tray', 'Coaster', 'Stool', 'Furniture']
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    scientificName: 'Bambusa Vulgaris',
    description: 'This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster, Hanging basket, Stool, Furniture etc.',
    rawImages: ['/materials/bamboo_plant_new.jpg', '/materials/bamboo_fiber_new.jpg'],
    sampleImages: ['/materials/bamboo_sample_bowls.jpg', '/materials/bamboo_sample_baskets.jpg'],
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
  usePageTitle('Raw Materials & Natural Fibers');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);


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
        
        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:py-9 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <Leaf className="h-3 w-3 text-emerald-300" />
              Natural Fiber Sourcing & Integrity
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Raw Materials & Fibers
            </h1>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              Discover the authentic natural fibers sourced from the heart of Bangladesh — each material handcrafted into premium eco-friendly products for global export.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                <Sparkles className="h-3 w-3 text-amber-300" /> {RAW_MATERIALS.length} Natural Materials
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                100% Eco-Friendly
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                Biodegradable & Non-Toxic
              </span>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
        </div>
      </div>

      {/* 2. Materials Grid — Modern Card Layout */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        
        <div className="space-y-6 sm:space-y-8">
          {filteredMaterials.map((mat, idx) => {
            const isExpanded = activeMaterial === mat.id;
            
            return (
              <div
                key={mat.id}
                className={`${getDynamicCardAnimation(idx)} group`}
              >
                <div className={`
                  relative rounded-2xl border border-stone-200/80 bg-white 
                  shadow-md hover:shadow-2xl hover:border-emerald-200/60
                  transition-all duration-500 ease-out overflow-hidden
                  ${isExpanded ? 'ring-2 ring-emerald-500/30 shadow-xl' : ''}
                `}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
                    
                    {/* Left: Raw Material Images Showcase (Always on Left for all cards) */}
                    <div className="p-5 sm:p-6 bg-stone-50/80 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-950 text-amber-300 text-xs font-black shadow-md border border-amber-400/30 shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xs uppercase tracking-widest font-black text-emerald-950">
                            Raw Material Images
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {mat.rawImages.map((imgSrc, i) => (
                            <div
                              key={i}
                              onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Raw Material` })}
                              className="relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-stone-200 cursor-pointer group/img ring-1 ring-stone-300 hover:ring-emerald-600 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                              <img
                                src={imgSrc}
                                alt={`${mat.name} Raw Material`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                                <Eye className="h-5 w-5 text-white drop-shadow-md" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] font-black text-stone-800 mt-2.5 text-center uppercase tracking-wide">
                        Natural Plantation & Fiber
                      </p>
                    </div>

                    {/* Center: Bold, High-Contrast Description & Info (Middle) */}
                    <div className="p-6 sm:p-7 flex flex-col justify-center">
                      <div className="space-y-3.5">
                        <div className="border-b border-stone-200 pb-3">
                          <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-950 tracking-tight leading-tight">
                            {mat.name}
                          </h3>
                          <p className="text-sm font-black text-emerald-800 italic mt-0.5">
                            {mat.scientificName}
                          </p>
                        </div>
                        
                        <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-semibold">
                          {mat.description}
                        </p>

                      </div>
                    </div>

                    {/* Right: Sample Product images Showcase (Always on Right for all cards) */}
                    <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-50/90 via-stone-50 to-amber-50/60 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-5 rounded-full bg-amber-600"></div>
                          <span className="text-xs uppercase tracking-widest font-black text-amber-950">
                            Sample Product images
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {mat.sampleImages.map((imgSrc, i) => (
                            <div
                              key={i}
                              onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Sample Product` })}
                              className="relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-white cursor-pointer group/img ring-1 ring-amber-300 hover:ring-amber-600 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                              <img
                                src={imgSrc}
                                alt={`${mat.name} Sample Product`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                                <Eye className="h-5 w-5 text-white drop-shadow-md" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] font-black text-amber-950 mt-2.5 text-center uppercase tracking-wide">
                        Export Quality Finished Handicrafts
                      </p>
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
