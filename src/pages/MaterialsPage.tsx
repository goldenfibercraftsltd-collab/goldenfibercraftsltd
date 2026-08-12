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
    rawImages: ['/materials/orig_sea-1.jpg', '/materials/orig_sea-2.jpg'],
    sampleImages: ['/materials/orig_BDH-01.jpg', '/materials/orig_BDH-10.jpg'],
    categorySlug: 'seagrass'
  },
  {
    id: 'kans-grass',
    name: 'Kans Grass',
    scientificName: 'Saccharum Spontaneum',
    description: 'Scientific name of Kans Grass (Saccharum Spontaneum). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/orig_kans-1.jpg', '/materials/orig_kans-2.jpg'],
    sampleImages: ['/materials/orig_SCP-02.jpg', '/materials/orig_SCP-05.png'],
    categorySlug: 'kans-grass'
  },
  {
    id: 'date-leaf',
    name: 'Date Leaf',
    scientificName: 'Phoenix Dactylifera',
    description: 'Scientific name of Date Leaf (Phoenix Dactylifera). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    rawImages: ['/materials/orig_date-1.jpg', '/materials/orig_date-2.jpg'],
    sampleImages: ['/materials/orig_BDD-03.jpg', '/materials/orig_BDD-31.jpg'],
    categorySlug: 'date-leaf'
  },
  {
    id: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus Olitorius',
    description: 'Scientific name of Jute (Corchorus Olitorius). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_Jute-1.jpg', '/materials/orig_jute-2.jpg'],
    sampleImages: ['/materials/orig_BJB-04.jpg', '/materials/orig_BJB-32.jpg'],
    categorySlug: 'jute'
  },
  {
    id: 'rattan',
    name: 'Rattan',
    scientificName: 'Calamus Tenuis',
    description: 'Scientific name of Rattan (Calamus Tenuis). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Pet basket, Planter, Tray, Coaster, Stool, Furniture etc.',
    rawImages: ['/materials/orig_rattan-1.jpg', '/materials/orig_rattan-2.jpg'],
    sampleImages: ['/materials/orig_BDC-02.jpg', '/materials/orig_BDC-06.jpg'],
    categorySlug: 'rattan'
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    scientificName: 'Bambusa Vulgaris',
    description: 'Scientific name of Bamboo (Bambusa Vulgaris). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster, Hanging basket, Stool, Furniture etc.',
    rawImages: ['/materials/orig_bamboo-1.jpg', '/materials/orig_bamboo-2.jpg'],
    sampleImages: ['/materials/orig_BDB-01.jpg', '/materials/orig_BDB-06.jpg'],
    categorySlug: 'bamboo'
  },
  {
    id: 'palm-fiber',
    name: 'Palm Fiber',
    scientificName: 'Borassus Flabellifer',
    description: 'Scientific name of Palm Fiber (Borassus Flabellifer). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Coaster etc.',
    rawImages: ['/materials/orig_palm-1.jpg', '/materials/orig_palm-2.jpg'],
    sampleImages: ['/materials/orig_BSL-01.jpg', '/materials/orig_BSL-02.jpg'],
    categorySlug: 'palm-fiber'
  },
  {
    id: 'corn-husk',
    name: 'Corn Husk',
    scientificName: 'Zea Mays',
    description: 'Scientific name of Corn Husk (Zea Mays). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster etc.',
    rawImages: ['/materials/orig_corn-1.jpg', '/materials/orig_corn-2.jpg'],
    sampleImages: ['/materials/orig_PTF-01.jpg', '/materials/orig_PTF-02.jpg'],
    categorySlug: 'corn-husk'
  },
  {
    id: 'banana-fiber',
    name: 'Banana Fiber',
    scientificName: 'Musa Acuminata',
    description: 'Scientific name of Banana Fiber (Musa Acuminata). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_banana-1.jpg', '/materials/orig_banana-2.jpg'],
    sampleImages: ['/materials/orig_BAN-01.jpg', '/materials/orig_BAN-04.jpg'],
    categorySlug: 'banana-fiber'
  },
  {
    id: 'pineapple-fiber',
    name: 'Pineapple Fiber',
    scientificName: 'Ananas Somosus',
    description: 'Scientific name of Pineapple Fiber (Ananas Somosus). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    rawImages: ['/materials/orig_Pineapple-1.jpg', '/materials/orig_pineapple-2.png'],
    sampleImages: ['/materials/orig_BPA-01.jpg', '/materials/orig_BPA-02.jpg'],
    categorySlug: 'pineapple-fiber'
  },
  {
    id: 'water-hyacinth',
    name: 'Water-Hyacinth',
    scientificName: 'Eicssornia Crassipes',
    description: 'Scientific name of Water-hyacinth (Eicssornia Crassipes). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Table mat, Planter, Pet basket, Coaster etc.',
    rawImages: ['/materials/orig_water-hyacinth-1.jpg', '/materials/orig_water-hyacinth-2.jpg'],
    sampleImages: ['/materials/orig_BWH-01.jpg', '/materials/orig_BWH-02.jpg'],
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
    <div className="min-h-screen bg-white text-stone-900 font-sans pb-20 animate-fadeIn">
      
      {/* 1. Breadcrumbs Header */}
      <div className="border-b border-stone-200 bg-stone-50/50 reveal-up">
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
              className="w-full pl-8 pr-7 py-1 text-xs rounded border border-stone-300 bg-white focus:outline-hidden focus:border-[#65a30d] transition-colors"
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

      {/* 2. Materials Information Table */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        
        {/* Table Header (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 bg-white border-b-2 border-stone-200 text-sm font-bold text-stone-900 pb-3 px-2 reveal-up">
          <div className="col-span-3 font-extrabold text-stone-900">Raw Material Images</div>
          <div className="col-span-6 px-4 font-extrabold text-stone-900">Raw Material and Product Description</div>
          <div className="col-span-3 text-right font-extrabold text-stone-900 pr-2">Sample Product Images</div>
        </div>

        {/* Table Content with Staggered Entrance */}
        <div className="divide-y divide-stone-200">
          {filteredMaterials.map((mat, idx) => {
            const staggerClass = `stagger-${(idx % 8) + 1}`;
            return (
              <div
                key={mat.id}
                className={`reveal-up ${staggerClass} py-4 sm:py-5 px-1 sm:px-2 hover:bg-stone-50/60 transition-colors`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  
                  {/* Column 1: Raw Material Images */}
                  <div className="lg:col-span-3">
                    <span className="lg:hidden block text-xs font-bold text-stone-800 mb-2">
                      Raw Material Images:
                    </span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      {mat.rawImages.map((imgSrc, i) => (
                        <div
                          key={i}
                          onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} - Raw Material Image ${i + 1}` })}
                          className="w-1/2 aspect-square max-w-[130px] rounded overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer hover:opacity-90 transition-all shadow-2xs flex items-center justify-center img-zoom-container hover-lift-sm"
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
                        className="text-xs font-bold text-[#65a30d] hover:underline inline-flex items-center gap-1 btn-interactive"
                      >
                        <span>Browse {mat.name} products</span>
                        <span className="btn-arrow">➔</span>
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Sample Product Images */}
                  <div className="lg:col-span-3">
                    <span className="lg:hidden block text-xs font-bold text-stone-800 mb-2">
                      Sample Product Images:
                    </span>
                    <div className="flex items-center justify-start lg:justify-end gap-2 sm:gap-3">
                      {mat.sampleImages.map((imgSrc, i) => (
                        <div
                          key={i}
                          onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} - Sample Product Image ${i + 1}` })}
                          className="w-1/2 aspect-square max-w-[130px] rounded overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer hover:opacity-90 transition-all shadow-2xs flex items-center justify-center img-zoom-container hover-lift-sm"
                        >
                          <img
                            src={imgSrc}
                            alt={`${mat.name} Sample Product`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. HD Image Lightbox Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-fadeIn cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
              <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900">
                {previewImage.title}
              </h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="max-h-[75vh] overflow-hidden rounded-lg bg-stone-50 flex items-center justify-center">
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
