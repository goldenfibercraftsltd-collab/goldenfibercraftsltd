import React, { useState } from 'react';
import { Search, Eye, X, Leaf, Sparkles } from 'lucide-react';
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
    rawImages: ['/materials/palm_fiber_plant_new.jpg', '/materials/palm_fiber_fiber_new.jpg'],
    sampleImages: ['/materials/palm_sample_bowl_new.jpg', '/materials/palm_sample_basket_new.jpg'],
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

interface MaterialTheme {
  cardBorder: string;
  cardHoverBorder: string;
  leftBg: string;
  leftBorder: string;
  numberBadge: string;
  leftTitle: string;
  leftSubtitle: string;
  leftRing: string;
  leftRingHover: string;
  scientificColor: string;
  rightBg: string;
  rightBorder: string;
  rightBar: string;
  rightTitle: string;
  rightSubtitle: string;
  rightRing: string;
  rightRingHover: string;
}

const MATERIAL_THEMES: Record<string, MaterialTheme> = {
  'seagrass': {
    cardBorder: 'border-teal-200/90',
    cardHoverBorder: 'hover:border-teal-400',
    leftBg: 'bg-gradient-to-br from-teal-50/90 via-emerald-50/30 to-teal-50/60',
    leftBorder: 'border-teal-200/80',
    numberBadge: 'bg-teal-950 text-teal-300 border-teal-400/30',
    leftTitle: 'text-teal-950',
    leftSubtitle: 'text-teal-900',
    leftRing: 'ring-teal-200',
    leftRingHover: 'hover:ring-teal-600',
    scientificColor: 'text-teal-800',
    rightBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-emerald-100/60',
    rightBorder: 'border-teal-200/80',
    rightBar: 'bg-teal-600',
    rightTitle: 'text-teal-950',
    rightSubtitle: 'text-teal-950',
    rightRing: 'ring-emerald-200',
    rightRingHover: 'hover:ring-emerald-600',
  },
  'kans-grass': {
    cardBorder: 'border-sky-200/90',
    cardHoverBorder: 'hover:border-sky-400',
    leftBg: 'bg-gradient-to-br from-sky-50/90 via-slate-50 to-sky-50/60',
    leftBorder: 'border-sky-200/80',
    numberBadge: 'bg-sky-950 text-sky-300 border-sky-400/30',
    leftTitle: 'text-sky-950',
    leftSubtitle: 'text-sky-900',
    leftRing: 'ring-sky-200',
    leftRingHover: 'hover:ring-sky-600',
    scientificColor: 'text-sky-800',
    rightBg: 'bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-indigo-50/60',
    rightBorder: 'border-sky-200/80',
    rightBar: 'bg-sky-600',
    rightTitle: 'text-sky-950',
    rightSubtitle: 'text-sky-950',
    rightRing: 'ring-sky-200',
    rightRingHover: 'hover:ring-sky-600',
  },
  'date-leaf': {
    cardBorder: 'border-orange-200/90',
    cardHoverBorder: 'hover:border-orange-400',
    leftBg: 'bg-gradient-to-br from-orange-50/90 via-stone-50 to-orange-50/60',
    leftBorder: 'border-orange-200/80',
    numberBadge: 'bg-orange-950 text-amber-300 border-orange-400/30',
    leftTitle: 'text-orange-950',
    leftSubtitle: 'text-orange-900',
    leftRing: 'ring-orange-200',
    leftRingHover: 'hover:ring-orange-600',
    scientificColor: 'text-orange-800',
    rightBg: 'bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-100/60',
    rightBorder: 'border-orange-200/80',
    rightBar: 'bg-orange-600',
    rightTitle: 'text-orange-950',
    rightSubtitle: 'text-orange-950',
    rightRing: 'ring-amber-200',
    rightRingHover: 'hover:ring-amber-600',
  },
  'jute': {
    cardBorder: 'border-amber-200/90',
    cardHoverBorder: 'hover:border-amber-400',
    leftBg: 'bg-gradient-to-br from-yellow-50/90 via-stone-50 to-amber-50/60',
    leftBorder: 'border-amber-200/80',
    numberBadge: 'bg-amber-950 text-yellow-300 border-amber-400/30',
    leftTitle: 'text-amber-950',
    leftSubtitle: 'text-amber-900',
    leftRing: 'ring-amber-200',
    leftRingHover: 'hover:ring-amber-600',
    scientificColor: 'text-amber-800',
    rightBg: 'bg-gradient-to-br from-amber-50/90 via-yellow-50/40 to-stone-100/60',
    rightBorder: 'border-amber-200/80',
    rightBar: 'bg-amber-600',
    rightTitle: 'text-amber-950',
    rightSubtitle: 'text-amber-950',
    rightRing: 'ring-amber-200',
    rightRingHover: 'hover:ring-amber-600',
  },
  'rattan': {
    cardBorder: 'border-stone-300/90',
    cardHoverBorder: 'hover:border-stone-400',
    leftBg: 'bg-gradient-to-br from-stone-100/90 via-stone-50 to-amber-50/40',
    leftBorder: 'border-stone-200',
    numberBadge: 'bg-stone-900 text-amber-300 border-stone-400/30',
    leftTitle: 'text-stone-950',
    leftSubtitle: 'text-stone-900',
    leftRing: 'ring-stone-200',
    leftRingHover: 'hover:ring-stone-600',
    scientificColor: 'text-stone-700',
    rightBg: 'bg-gradient-to-br from-stone-100/90 via-amber-50/30 to-stone-200/60',
    rightBorder: 'border-stone-200',
    rightBar: 'bg-stone-700',
    rightTitle: 'text-stone-950',
    rightSubtitle: 'text-stone-950',
    rightRing: 'ring-stone-300',
    rightRingHover: 'hover:ring-stone-600',
  },
  'bamboo': {
    cardBorder: 'border-emerald-200/90',
    cardHoverBorder: 'hover:border-emerald-400',
    leftBg: 'bg-gradient-to-br from-emerald-50/90 via-stone-50 to-emerald-50/60',
    leftBorder: 'border-emerald-200/80',
    numberBadge: 'bg-emerald-950 text-lime-300 border-emerald-400/30',
    leftTitle: 'text-emerald-950',
    leftSubtitle: 'text-emerald-900',
    leftRing: 'ring-emerald-200',
    leftRingHover: 'hover:ring-emerald-600',
    scientificColor: 'text-emerald-800',
    rightBg: 'bg-gradient-to-br from-emerald-50/90 via-lime-50/30 to-green-100/60',
    rightBorder: 'border-emerald-200/80',
    rightBar: 'bg-emerald-600',
    rightTitle: 'text-emerald-950',
    rightSubtitle: 'text-emerald-950',
    rightRing: 'ring-emerald-200',
    rightRingHover: 'hover:ring-emerald-600',
  },
  'palm-fiber': {
    cardBorder: 'border-yellow-200/90',
    cardHoverBorder: 'hover:border-yellow-400',
    leftBg: 'bg-gradient-to-br from-yellow-50/90 via-amber-50/30 to-yellow-50/60',
    leftBorder: 'border-yellow-200/80',
    numberBadge: 'bg-yellow-950 text-amber-200 border-yellow-400/30',
    leftTitle: 'text-yellow-950',
    leftSubtitle: 'text-yellow-900',
    leftRing: 'ring-yellow-200',
    leftRingHover: 'hover:ring-yellow-600',
    scientificColor: 'text-yellow-800',
    rightBg: 'bg-gradient-to-br from-amber-50/90 via-stone-50 to-yellow-100/60',
    rightBorder: 'border-yellow-200/80',
    rightBar: 'bg-yellow-700',
    rightTitle: 'text-yellow-950',
    rightSubtitle: 'text-yellow-950',
    rightRing: 'ring-amber-200',
    rightRingHover: 'hover:ring-amber-600',
  },
  'corn-husk': {
    cardBorder: 'border-amber-200/90',
    cardHoverBorder: 'hover:border-amber-400',
    leftBg: 'bg-gradient-to-br from-amber-50/80 via-yellow-50/30 to-amber-50/60',
    leftBorder: 'border-amber-200/80',
    numberBadge: 'bg-amber-900 text-yellow-200 border-amber-400/30',
    leftTitle: 'text-amber-950',
    leftSubtitle: 'text-amber-900',
    leftRing: 'ring-amber-200',
    leftRingHover: 'hover:ring-amber-600',
    scientificColor: 'text-amber-700',
    rightBg: 'bg-gradient-to-br from-yellow-50/90 via-amber-50/30 to-orange-50/60',
    rightBorder: 'border-amber-200/80',
    rightBar: 'bg-amber-500',
    rightTitle: 'text-amber-950',
    rightSubtitle: 'text-amber-950',
    rightRing: 'ring-yellow-200',
    rightRingHover: 'hover:ring-yellow-600',
  },
  'banana-fiber': {
    cardBorder: 'border-lime-200/90',
    cardHoverBorder: 'hover:border-lime-400',
    leftBg: 'bg-gradient-to-br from-lime-50/90 via-stone-50 to-lime-50/60',
    leftBorder: 'border-lime-200/80',
    numberBadge: 'bg-lime-950 text-emerald-300 border-lime-400/30',
    leftTitle: 'text-lime-950',
    leftSubtitle: 'text-lime-900',
    leftRing: 'ring-lime-200',
    leftRingHover: 'hover:ring-lime-600',
    scientificColor: 'text-lime-800',
    rightBg: 'bg-gradient-to-br from-lime-50/90 via-emerald-50/30 to-lime-100/60',
    rightBorder: 'border-lime-200/80',
    rightBar: 'bg-lime-600',
    rightTitle: 'text-lime-950',
    rightSubtitle: 'text-lime-950',
    rightRing: 'ring-lime-200',
    rightRingHover: 'hover:ring-lime-600',
  },
  'pineapple-fiber': {
    cardBorder: 'border-yellow-200/90',
    cardHoverBorder: 'hover:border-yellow-400',
    leftBg: 'bg-gradient-to-br from-yellow-50/90 via-amber-50/30 to-yellow-50/60',
    leftBorder: 'border-yellow-200/80',
    numberBadge: 'bg-yellow-950 text-amber-300 border-yellow-400/30',
    leftTitle: 'text-yellow-950',
    leftSubtitle: 'text-yellow-900',
    leftRing: 'ring-yellow-200',
    leftRingHover: 'hover:ring-yellow-600',
    scientificColor: 'text-yellow-700',
    rightBg: 'bg-gradient-to-br from-yellow-50/90 via-amber-50/30 to-lime-50/60',
    rightBorder: 'border-yellow-200/80',
    rightBar: 'bg-yellow-600',
    rightTitle: 'text-yellow-950',
    rightSubtitle: 'text-yellow-950',
    rightRing: 'ring-yellow-200',
    rightRingHover: 'hover:ring-yellow-600',
  },
  'water-hyacinth': {
    cardBorder: 'border-cyan-200/90',
    cardHoverBorder: 'hover:border-cyan-400',
    leftBg: 'bg-gradient-to-br from-cyan-50/90 via-stone-50 to-cyan-50/60',
    leftBorder: 'border-cyan-200/80',
    numberBadge: 'bg-cyan-950 text-cyan-300 border-cyan-400/30',
    leftTitle: 'text-cyan-950',
    leftSubtitle: 'text-cyan-900',
    leftRing: 'ring-cyan-200',
    leftRingHover: 'hover:ring-cyan-600',
    scientificColor: 'text-cyan-800',
    rightBg: 'bg-gradient-to-br from-cyan-50/90 via-teal-50/30 to-blue-100/60',
    rightBorder: 'border-cyan-200/80',
    rightBar: 'bg-cyan-600',
    rightTitle: 'text-cyan-950',
    rightSubtitle: 'text-cyan-950',
    rightRing: 'ring-cyan-200',
    rightRingHover: 'hover:ring-cyan-600',
  }
};

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
            const theme = MATERIAL_THEMES[mat.id] || MATERIAL_THEMES['seagrass'];

            return (
              <div
                key={mat.id}
                className={`${getDynamicCardAnimation(idx)} group`}
              >
                <div className={`
                  relative rounded-2xl border ${theme.cardBorder} bg-white 
                  shadow-md hover:shadow-2xl ${theme.cardHoverBorder}
                  transition-all duration-500 ease-out overflow-hidden
                `}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
                    
                    {/* Left: Raw Material Images Showcase (Always on Left for all cards) */}
                    <div className={`p-5 sm:p-6 ${theme.leftBg} flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${theme.leftBorder}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${theme.numberBadge} text-xs font-black shadow-md shrink-0`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className={`text-xs uppercase tracking-widest font-black ${theme.leftTitle}`}>
                            Raw Material Images
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {mat.rawImages.map((imgSrc, i) => (
                            <div
                              key={i}
                              onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Raw Material` })}
                              className={`relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-stone-200 cursor-pointer group/img ring-1 ${theme.leftRing} ${theme.leftRingHover} transition-all duration-300 shadow-sm hover:shadow-xl`}
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
                      <p className={`text-[11px] font-black ${theme.leftSubtitle} mt-2.5 text-center uppercase tracking-wide`}>
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
                          <p className={`text-sm font-black ${theme.scientificColor} italic mt-0.5`}>
                            {mat.scientificName}
                          </p>
                        </div>
                        
                        <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-semibold">
                          {mat.description}
                        </p>

                      </div>
                    </div>

                    {/* Right: Sample Product images Showcase (Always on Right for all cards) */}
                    <div className={`p-5 sm:p-6 ${theme.rightBg} flex flex-col justify-between border-t lg:border-t-0 lg:border-l ${theme.rightBorder}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-2 h-5 rounded-full ${theme.rightBar}`}></div>
                          <span className={`text-xs uppercase tracking-widest font-black ${theme.rightTitle}`}>
                            Sample Product images
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {mat.sampleImages.map((imgSrc, i) => (
                            <div
                              key={i}
                              onClick={() => setPreviewImage({ src: imgSrc, title: `${mat.name} — Sample Product` })}
                              className={`relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-white cursor-pointer group/img ring-1 ${theme.rightRing} ${theme.rightRingHover} transition-all duration-300 shadow-sm hover:shadow-xl`}
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
                      <p className={`text-[11px] font-black ${theme.rightSubtitle} mt-2.5 text-center uppercase tracking-wide`}>
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
