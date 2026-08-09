import React from 'react';
import { Tag, Scissors, Layers, ShieldCheck, Package, Leaf, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCategoriesProps {
  products: Product[];
  onSelectCategory: (category: string, query?: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ products, onSelectCategory }) => {
  const getCount = (cat: string) => products.filter(p => p.category === cat).length;

  const categories = [
    {
      id: 'labels',
      title: 'All types of Label',
      count: `${getCount('labels') || 5} products`,
      icon: Tag,
      accent: 'emerald',
      subItems: [
        { label: 'Care Label', query: 'Care Label' },
        { label: 'Printed Label', query: 'Printed Label' },
        { label: 'Woven Main Label', query: 'Woven Main Label' },
        { label: 'Heat Seal Label', query: 'Heat Seal Label' },
        { label: 'Size Label', query: 'Size Label' },
      ]
    },
    {
      id: 'tags',
      title: 'Hangtag and Additional Tag',
      count: `${getCount('tags') || 8} products`,
      icon: Scissors,
      accent: 'amber',
      subItems: [
        { label: 'Hang Tag', query: 'Hang Tag' },
        { label: 'BCI Tag', query: 'BCI Tag' },
        { label: 'Tag String', query: 'Tag String' },
        { label: 'Tag Pin / Lock Pin', query: 'Lock Pin' },
        { label: 'Safety Pin', query: 'Safety Pin' },
        { label: 'Shipping Mark', query: 'Shipping Mark' },
        { label: 'Carton Sticker', query: 'Carton Sticker' },
        { label: 'Paper Rope / Twisted Paper Rope', query: 'Paper Rope' },
      ]
    },
    {
      id: 'tapes',
      title: 'Twill tape, Satin tape & Elastic',
      count: `${getCount('tapes') || 6} products`,
      icon: Layers,
      accent: 'emerald',
      subItems: [
        { label: 'Twill Tape', query: 'Twill Tape' },
        { label: 'Satin Ribbon', query: 'Satin Ribbon' },
        { label: 'Drawstring Cord', query: 'Drawstring Cord' },
        { label: 'Elastic Webbing', query: 'Elastic Webbing' },
        { label: 'Cotton Tape', query: 'Cotton Tape' },
      ]
    },
    {
      id: 'security',
      title: 'Security Tag, Alarm Tag and Hard Tag',
      count: `${getCount('security') || 4} products`,
      icon: ShieldCheck,
      accent: 'amber',
      subItems: [
        { label: 'Security Tag', query: 'Security Tag' },
        { label: 'RF Soft Label', query: 'RF Soft Label' },
        { label: 'AM Hard Tag', query: 'AM Hard Tag' },
        { label: 'RFID Tag', query: 'RFID Tag' },
      ]
    },
    {
      id: 'baskets',
      title: 'Storage & Laundry Baskets',
      count: `${getCount('baskets')} products`,
      icon: Package,
      accent: 'emerald',
      subItems: [
        { label: 'Seagrass Rectangular Baskets', query: 'Seagrass' },
        { label: 'Round Jute Storage Baskets', query: 'Jute Storage' },
        { label: 'Water Hyacinth Baskets', query: 'Water Hyacinth' },
        { label: 'Kaisa Grass Basket Bowls', query: 'Kaisa' },
        { label: 'Cotton Rope Laundry Hampers', query: 'Rope' },
      ]
    },
    {
      id: 'bags',
      title: 'Jute Shopping & Tote Bags',
      count: `${getCount('bags')} products`,
      icon: ShoppingBag,
      accent: 'amber',
      subItems: [
        { label: 'Natural Jute Shopping Bags', query: 'Shopping' },
        { label: 'Handcrafted Eco Tote Bags', query: 'Tote' },
        { label: 'Promotional Event Bags', query: 'Promotional' },
        { label: 'Wine Carry Bags', query: 'Wine' },
      ]
    }
  ];

  const handleCategoryClick = (catId: string, query?: string) => {
    onSelectCategory(catId, query);
  };

  return (
    <section className="py-12 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200/80">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Categorized Collection</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
            Garment Trims & Eco Handicrafts
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
            Hover over a category to reveal its products. Click any item to view details.
          </p>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-emerald-600" />
        </div>

        {/* 2-Column Categories Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative flex flex-col justify-between rounded-3xl bg-stone-50/80 p-6 sm:p-7 border border-stone-200/90 hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer"
              >
                {/* Card Top Header */}
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                    cat.accent === 'emerald' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                  } group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-stone-500 font-semibold">
                      {cat.count}
                    </p>
                  </div>
                </div>

                {/* Revealing Sub-Products Grid */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-transparent group-hover:border-emerald-100 group-hover:mt-4 group-hover:pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.subItems.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(cat.id, sub.query);
                        }}
                        className="group/item flex items-center justify-between rounded-xl bg-white hover:bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-900 transition-colors text-left border border-stone-200/60 hover:border-emerald-300 shadow-xs"
                      >
                        <span className="truncate flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                          {sub.label}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-emerald-600 opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
