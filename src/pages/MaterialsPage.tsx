import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Eye, X } from 'lucide-react';

export interface MaterialItem {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  rawImages: [string, string];
  sampleImages: [string, string];
  categorySlug: string;
}

export const RAW_MATERIALS: MaterialItem[] = [
  {
    id: 'seagrass',
    name: 'Seagrass',
    scientificName: 'Cyperus Malaccensis',
    description: 'Scientific name of Seagrass (Cyperus Malaccensis). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Pet basket, Planter, Tray, Coaster, Pouf etc.',
    rawImages: ['/materials/seagrass_plant.png', '/materials/seagrass_fiber.png'],
    sampleImages: ['/materials/seagrass_sample1.png', '/materials/seagrass_sample2.png'],
    categorySlug: 'seagrass'
  },
  {
    id: 'kans-grass',
    name: 'Kans Grass',
    scientificName: 'Saccharum Spontaneum',
    description: 'Scientific name of Kans Grass (Saccharum Spontaneum). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/kans_grass_plant.png', '/materials/kans_grass_fiber.png'],
    sampleImages: ['/materials/kans_grass_sample1.png', '/materials/kans_grass_sample2.png'],
    categorySlug: 'kans-grass'
  },
  {
    id: 'date-leaf',
    name: 'Date Leaf',
    scientificName: 'Phoenix Dactylifera',
    description: 'Scientific name of Date Leaf (Phoenix Dactylifera). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/date_leaf_plant.png', '/materials/date_leaf_fiber.png'],
    sampleImages: ['/materials/date_leaf_sample1.png', '/materials/date_leaf_sample2.png'],
    categorySlug: 'date-leaf'
  },
  {
    id: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus Olitorius',
    description: 'Scientific name of Jute (Corchorus Olitorius). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/jute_plant.png', '/materials/jute_fiber.png'],
    sampleImages: ['/materials/jute_sample1.png', '/materials/jute_sample2.png'],
    categorySlug: 'jute'
  },
  {
    id: 'rattan',
    name: 'Rattan',
    scientificName: 'Calamus Tenuis',
    description: 'Scientific name of Rattan (Calamus Tenuis). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Pet basket, Planter, Tray, Coaster, Stool, Furniture etc.',
    rawImages: ['/materials/rattan_plant.png', '/materials/rattan_fiber.png'],
    sampleImages: ['/materials/rattan_sample1.png', '/materials/rattan_sample2.png'],
    categorySlug: 'rattan'
  },
  {
    id: 'palm-fiber',
    name: 'Palm Fiber',
    scientificName: 'Arecaceae',
    description: 'Scientific name of Palm Fiber (Arecaceae). This material can be used to prepare different types of baskets i.e. Storage, Table mat, Planter, Coaster etc.',
    rawImages: ['/materials/palm_fiber_plant.png', '/materials/palm_fiber_fiber.png'],
    sampleImages: ['/materials/palm_fiber_sample1.png', '/materials/palm_fiber_sample2.png'],
    categorySlug: 'palm-fiber'
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    scientificName: 'Bambusa Vulgaris',
    description: 'Scientific name of Bamboo (Bambusa Vulgaris). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Pet basket, Planter, Tray, Stool, Furniture etc.',
    rawImages: ['/materials/bamboo_plant.png', '/materials/bamboo_fiber.png'],
    sampleImages: ['/materials/bamboo_sample1.png', '/materials/bamboo_sample2.png'],
    categorySlug: 'bamboo'
  },
  {
    id: 'banana-fiber',
    name: 'Banana Fiber',
    scientificName: 'Musa Sepientum',
    description: 'Scientific name of Banana Fiber (Musa Sepientum). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/banana_fiber_plant.png', '/materials/banana_fiber_fiber.png'],
    sampleImages: ['/materials/banana_fiber_sample1.png', '/materials/banana_fiber_sample2.png'],
    categorySlug: 'banana-fiber'
  },
  {
    id: 'corn-husk',
    name: 'Corn Husk',
    scientificName: 'Corn Leaf (Maize)',
    description: 'Scientific name of Corn Leaf (Maize). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/corn_husk_plant.png', '/materials/corn_husk_fiber.png'],
    sampleImages: ['/materials/corn_husk_sample1.png', '/materials/corn_husk_sample2.png'],
    categorySlug: 'corn-husk'
  },
  {
    id: 'pineapple-fiber',
    name: 'Pineapple Fiber',
    scientificName: 'Ananas Somosus',
    description: 'Scientific name of Pineapple Fiber (Ananas Somosus). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/pineapple_fiber_plant.png', '/materials/pineapple_fiber_fiber.png'],
    sampleImages: ['/materials/pineapple_fiber_sample1.png', '/materials/pineapple_fiber_sample2.png'],
    categorySlug: 'pineapple-fiber'
  },
  {
    id: 'water-hyacinth',
    name: 'Water-Hyacinth',
    scientificName: 'Eicssornia Crassipes',
    description: 'Scientific name of Water-hyacinth (Eicssornia Crassipes). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Table mat, Planter, Pet basket, Coaster etc.',
    rawImages: ['/materials/water_hyacinth_plant.png', '/materials/water_hyacinth_fiber.png'],
    sampleImages: ['/materials/water_hyacinth_sample1.png', '/materials/water_hyacinth_sample2.png'],
    categorySlug: 'water-hyacinth'
  }
];

export const MaterialsPage: React.FC = () => {
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
    <div className="min-h-screen bg-white text-stone-900 font-sans pb-20">
      
      {/* 1. Breadcrumbs Header (BD Creation Style) */}
      <div className="border-b border-stone-200 bg-stone-50/50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#65a30d] font-medium">Home</Link>
            <ChevronRight className="h-3 w-3 text-stone-400" />
            <span className="text-stone-900 font-bold">Materials Information</span>
          </div>
          
          {/* Quick Search */}
          <div className="relative w-48 sm:w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
            <input
              type="text"
              placeholder="Search material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-1 text-xs rounded border border-stone-300 bg-white focus:outline-none focus:border-[#65a30d]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Materials Information Table (Exact BD Creation Layout) */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        
        {/* Table Header (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 bg-white border-b-2 border-stone-200 text-sm font-bold text-stone-900 pb-3 px-2">
          <div className="col-span-3 font-extrabold text-stone-900">Raw Material Images</div>
          <div className="col-span-6 px-4 font-extrabold text-stone-900">Raw Material and Product Description</div>
          <div className="col-span-3 text-right font-extrabold text-stone-900 pr-2">Sample Product Images</div>
        </div>

        {/* Table Content */}
        <div className="divide-y divide-stone-200">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="py-4 sm:py-5 px-1 sm:px-2 hover:bg-stone-50/60 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                
                {/* Column 1: Raw Material Images (2 side-by-side) */}
                <div className="lg:col-span-3">
                  <span className="lg:hidden block text-xs font-bold text-stone-800 mb-2">
                    Raw Material Images:
                  </span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {mat.rawImages.map((imgSrc, i) => (
                      <div
                        key={i}
                        onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} - Raw Material Image ${i + 1}` })}
                        className="w-1/2 aspect-square max-w-[130px] rounded overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity shadow-2xs flex items-center justify-center"
                      >
                        <img
                          src={imgSrc}
                          alt={`${mat.name} Raw Material`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Raw Material and Product Description */}
                <div className="lg:col-span-6 px-0 lg:px-4 space-y-1.5">
                  <span className="lg:hidden block text-xs font-bold text-stone-800">
                    Raw Material & Description:
                  </span>
                  <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed">
                    <span className="font-bold text-stone-900">{mat.name}: </span>
                    <span>{mat.description.replace(`${mat.name}: `, '')}</span>
                  </p>
                  <div className="pt-1">
                    <Link
                      to={`/products?category=${mat.categorySlug}`}
                      className="text-xs font-bold text-[#65a30d] hover:underline"
                    >
                      Browse {mat.name} products ➔
                    </Link>
                  </div>
                </div>

                {/* Column 3: Sample Product Images (2 side-by-side) */}
                <div className="lg:col-span-3">
                  <span className="lg:hidden block text-xs font-bold text-stone-800 mb-2">
                    Sample Product Images:
                  </span>
                  <div className="flex items-center justify-start lg:justify-end gap-2 sm:gap-3">
                    {mat.sampleImages.map((imgSrc, i) => (
                      <div
                        key={i}
                        onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} - Sample Product ${i + 1}` })}
                        className="w-1/2 aspect-square max-w-[130px] rounded overflow-hidden bg-white border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity shadow-2xs flex items-center justify-center p-1"
                      >
                        <img
                          src={imgSrc}
                          alt={`${mat.name} Sample Product`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

          {filteredMaterials.length === 0 && (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm font-semibold">No materials found matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-[#65a30d] hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full bg-white rounded-xl overflow-hidden shadow-2xl p-4 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <h3 className="font-serif text-sm font-bold text-stone-800">
                {previewImage.title}
              </h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded text-stone-500 hover:bg-stone-100 hover:text-stone-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-square max-h-[70vh] w-full bg-stone-50 rounded overflow-hidden flex items-center justify-center border border-stone-100">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
