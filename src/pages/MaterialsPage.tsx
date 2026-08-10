import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, ArrowRight, Eye, X } from 'lucide-react';

export interface MaterialItem {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  applications: string[];
  plantImage: string;
  plantLabel: string;
  fiberImage: string;
  fiberLabel: string;
  sampleProducts: {
    image: string;
    label: string;
  }[];
  categorySlug: string;
}

export const RAW_MATERIALS: MaterialItem[] = [
  {
    id: 'seagrass',
    name: 'Seagrass',
    scientificName: 'Cyperus Malaccensis',
    description: 'Scientific name of Seagrass (Cyperus Malaccensis). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Pet basket, Planter, Tray, Coaster, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Pet basket', 'Planter', 'Tray', 'Coaster', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Seagrass Plant',
    fiberImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Raw Seagrass Fiber / Rope',
    sampleProducts: [
      { image: '/products/gfc_sb_030.png', label: 'Storage Basket' },
      { image: '/products/gfc_sb_011.png', label: 'Planter Pot' }
    ],
    categorySlug: 'seagrass'
  },
  {
    id: 'kans-grass',
    name: 'Kans Grass',
    scientificName: 'Saccharum Spontaneum',
    description: 'Scientific name of Kans Grass (Saccharum Spontaneum). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    applications: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster'],
    plantImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Kans Grass (Kaisa) Plant',
    fiberImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Dried Kaisa Stalks',
    sampleProducts: [
      { image: '/products/gfc_kb_005.png', label: 'Coiled Storage Basket' },
      { image: '/products/image25.png', label: 'Decorative Basket' }
    ],
    categorySlug: 'kans-grass'
  },
  {
    id: 'date-leaf',
    name: 'Date Leaf',
    scientificName: 'Phoenix Dactylifera',
    description: 'Scientific name of Date Leaf (Phoenix Dactylifera). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Coaster etc.',
    applications: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Coaster'],
    plantImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Date Palm Tree Fronds',
    fiberImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Sun-Dried Date Leaves',
    sampleProducts: [
      { image: '/products/image38.png', label: 'Woven Storage Tray' },
      { image: '/products/image42.png', label: 'Storage Canister' }
    ],
    categorySlug: 'date-leaf'
  },
  {
    id: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus Olitorius',
    description: 'Scientific name of Jute (Corchorus Olitorius). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Green Jute Crop Field',
    fiberImage: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Golden Raw Jute Hanks',
    sampleProducts: [
      { image: '/products/image31.png', label: 'Jute Bowl Basket' },
      { image: '/products/image32.png', label: 'Striped Storage Bin' }
    ],
    categorySlug: 'jute'
  },
  {
    id: 'rattan',
    name: 'Rattan',
    scientificName: 'Calamus Tenuis',
    description: 'Scientific name of Rattan (Calamus Tenuis). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Pet basket, Planter, Tray, Coaster, Stool, Furniture etc.',
    applications: ['Storage', 'Laundry', 'Table mat', 'Pet basket', 'Planter', 'Tray', 'Coaster', 'Stool', 'Furniture'],
    plantImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Rattan Palm Vine',
    fiberImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Bundled Rattan Canes',
    sampleProducts: [
      { image: '/products/image33.png', label: 'Rattan Shallow Bowl' },
      { image: '/products/image34.png', label: 'Rattan Planter Pot' }
    ],
    categorySlug: 'rattan'
  },
  {
    id: 'palm-fiber',
    name: 'Palm Fiber',
    scientificName: 'Arecaceae',
    description: 'Scientific name of Palm Fiber (Arecaceae). This material can be used to prepare different types of baskets i.e. Storage, Table mat, Planter, Coaster etc.',
    applications: ['Storage', 'Table mat', 'Planter', 'Coaster'],
    plantImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Palmyra Palm Tree',
    fiberImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Combed Palm Fiber',
    sampleProducts: [
      { image: '/products/gfc_pb_008.png', label: 'Round Coiled Basket' },
      { image: '/products/gfc_pb_010.png', label: 'Storage Cylinder' }
    ],
    categorySlug: 'palm-fiber'
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    scientificName: 'Bambusa Vulgaris',
    description: 'Scientific name of Bamboo (Bambusa Vulgaris). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Pet basket, Planter, Tray, Stool, Furniture etc.',
    applications: ['Storage', 'Laundry', 'Pet basket', 'Planter', 'Tray', 'Stool', 'Furniture'],
    plantImage: 'https://images.unsplash.com/photo-1516298281804-ed168fce721c?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Green Bamboo Grove',
    fiberImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Split Bamboo Strips',
    sampleProducts: [
      { image: '/products/image57.png', label: 'Bamboo Round Sieve' },
      { image: '/products/gfc_bp_007.png', label: 'Bamboo Laundry Hamper' }
    ],
    categorySlug: 'bamboo'
  },
  {
    id: 'banana-fiber',
    name: 'Banana Fiber',
    scientificName: 'Musa Sapientum',
    description: 'Scientific name of Banana Fiber (Musa Sapientum). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Banana Tree Plantation',
    fiberImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Stripped Banana Bark Fiber',
    sampleProducts: [
      { image: '/products/image41.png', label: 'Rectangular Storage Bin' },
      { image: '/products/image43.png', label: 'Belly Basket' }
    ],
    categorySlug: 'banana-fiber'
  },
  {
    id: 'corn-husk',
    name: 'Corn Husk',
    scientificName: 'Corn Leaf (Maize)',
    description: 'Scientific name of Corn Leaf (Maize). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Corn (Maize) Plant',
    fiberImage: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Dried Corn Husk Leaves',
    sampleProducts: [
      { image: '/products/image48.png', label: 'Shallow Woven Bowl' },
      { image: '/products/image51.png', label: 'Handled Gift Basket' }
    ],
    categorySlug: 'corn-husk'
  },
  {
    id: 'pineapple-fiber',
    name: 'Pineapple Fiber',
    scientificName: 'Ananas Comosus',
    description: 'Scientific name of Pineapple Fiber (Ananas Comosus). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Door mat, Floor mat, Table mat, Planter, Coaster, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Door mat', 'Floor mat', 'Table mat', 'Planter', 'Coaster', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Pineapple Plant',
    fiberImage: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Extracted Piña Silk Fiber',
    sampleProducts: [
      { image: '/products/image49.png', label: 'Geometric Pattern Tote' },
      { image: '/products/image53.png', label: 'Coiled Serving Mat' }
    ],
    categorySlug: 'pineapple-fiber'
  },
  {
    id: 'water-hyacinth',
    name: 'Water Hyacinth',
    scientificName: 'Eichhornia Crassipes',
    description: 'Scientific name of Water Hyacinth (Eichhornia Crassipes). This material can be used to prepare different types of baskets i.e. Storage, Laundry, Table mat, Planter, Tray, Pet basket, Pouf etc.',
    applications: ['Storage', 'Laundry', 'Table mat', 'Planter', 'Tray', 'Pet basket', 'Pouf'],
    plantImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=500',
    plantLabel: 'Water Hyacinth Plant',
    fiberImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=500',
    fiberLabel: 'Braided Hyacinth Strands',
    sampleProducts: [
      { image: '/products/gfc_wb_007.png', label: 'Braided Storage Basket' },
      { image: '/products/gfc_wb_009.png', label: 'Laundry Hamper' }
    ],
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
      mat.applications.some(app => app.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-stone-900 font-sans pb-20">
      
      {/* 1. Breadcrumbs Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="hover:text-emerald-700 font-medium">Home</Link>
            <ChevronRight className="h-3 w-3 text-stone-400" />
            <span className="text-stone-900 font-bold">Materials Information</span>
          </div>
          <span className="text-[11px] text-stone-500 hidden sm:inline">
            100% Natural Raw Material Catalog
          </span>
        </div>
      </div>

      {/* 2. Page Title and Search Header */}
      <div className="bg-white border-b border-stone-200 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Materials Information
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Scientific botanical details and product applications for our sustainable handicraft raw materials.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search material (e.g. Seagrass, Jute, Bamboo)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#65a30d] focus:ring-2 focus:ring-[#65a30d]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Materials Information Table / Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          
          {/* Table Header (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 bg-stone-100/90 border-b border-stone-200 text-xs font-extrabold uppercase tracking-wider text-stone-700 py-3.5 px-6">
            <div className="col-span-4">Raw Material Images</div>
            <div className="col-span-5 px-2">Raw Material and Product Description</div>
            <div className="col-span-3 text-right">Sample Product Images</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-200">
            {filteredMaterials.map((mat, index) => (
              <div
                key={mat.id}
                className={`p-4 sm:p-6 transition-colors hover:bg-stone-50/80 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-stone-50/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Column 1: Raw Material Images (Plant & Raw Fiber) */}
                  <div className="lg:col-span-4">
                    <span className="lg:hidden block text-[11px] font-extrabold uppercase tracking-wider text-stone-500 mb-2">
                      Raw Material Images:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      
                      {/* 1. Plant Image */}
                      <div
                        onClick={() => setPreviewImage({ src: mat.plantImage, title: `${mat.name} - ${mat.plantLabel}` })}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs cursor-pointer"
                      >
                        <img
                          src={mat.plantImage}
                          alt={mat.plantLabel}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Eye className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                        </div>
                        <span className="absolute bottom-1 left-1.5 right-1.5 rounded bg-stone-900/80 backdrop-blur-xs px-1.5 py-0.5 text-[9px] font-semibold text-white truncate text-center">
                          {mat.plantLabel}
                        </span>
                      </div>

                      {/* 2. Raw Fiber Image */}
                      <div
                        onClick={() => setPreviewImage({ src: mat.fiberImage, title: `${mat.name} - ${mat.fiberLabel}` })}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs cursor-pointer"
                      >
                        <img
                          src={mat.fiberImage}
                          alt={mat.fiberLabel}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Eye className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                        </div>
                        <span className="absolute bottom-1 left-1.5 right-1.5 rounded bg-stone-900/80 backdrop-blur-xs px-1.5 py-0.5 text-[9px] font-semibold text-white truncate text-center">
                          {mat.fiberLabel}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Column 2: Raw Material & Product Description */}
                  <div className="lg:col-span-5 space-y-3">
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-stone-900">
                        <span className="font-extrabold text-[#093843]">{mat.name}: </span>
                        <span className="text-stone-700 font-normal text-xs sm:text-sm">
                          Scientific name of {mat.name} (<span className="italic font-medium text-emerald-800">{mat.scientificName}</span>).
                        </span>
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                        This material can be used to prepare different types of baskets and handicrafts i.e.
                      </p>
                    </div>

                    {/* Applications Tags for Quick Reading */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {mat.applications.map((app, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-lime-50 border border-lime-200/80 px-2 py-0.5 text-[11px] font-semibold text-lime-900 shadow-2xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>

                    {/* Direct Explore Link */}
                    <div className="pt-1">
                      <Link
                        to={`/products?category=${mat.categorySlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#65a30d] hover:text-[#4d7c0f] transition-colors group"
                      >
                        <span>View All {mat.name} Products</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Sample Product Images */}
                  <div className="lg:col-span-3">
                    <span className="lg:hidden block text-[11px] font-extrabold uppercase tracking-wider text-stone-500 mb-2">
                      Sample Product Images:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {mat.sampleProducts.map((prod, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => setPreviewImage({ src: prod.image, title: `${mat.name} - Sample ${prod.label}` })}
                          className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-stone-200 shadow-xs cursor-pointer p-1.5 flex flex-col items-center justify-center hover:border-lime-500 transition-colors"
                        >
                          <img
                            src={prod.image}
                            alt={prod.label}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <Eye className="h-4 w-4 text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                          </div>
                          <span className="absolute bottom-1 left-1 right-1 bg-white/90 backdrop-blur-xs text-[9px] font-bold text-stone-700 px-1 py-0.5 rounded text-center truncate border border-stone-200/60">
                            {prod.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {filteredMaterials.length === 0 && (
              <div className="p-12 text-center text-stone-500">
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

      </div>

      {/* Lightbox Image Preview Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <h3 className="font-serif text-sm font-bold text-stone-800">
                {previewImage.title}
              </h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-[4/3] w-full bg-stone-50 rounded-xl overflow-hidden flex items-center justify-center border border-stone-100">
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
