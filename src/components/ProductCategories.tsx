import React from 'react';
import { ShoppingBag, Leaf, Package, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCategoriesProps {
  products: Product[];
  onSelectCategory: (category: string, query?: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ products, onSelectCategory }) => {
  // Count products by category
  const getCount = (cat: string) => products.filter(p => p.category === cat).length;

  const categories = [
    {
      id: 'baskets',
      title: 'Storage & Laundry Baskets',
      count: `${getCount('baskets')} products`,
      icon: Package,
      subItems: [
        { label: 'Seagrass Rectangular Baskets', query: 'Seagrass Rectangular' },
        { label: 'Round Jute Storage Baskets', query: 'Jute Storage' },
        { label: 'Casafield Water Hyacinth Baskets', query: 'Water Hyacinth' },
        { label: 'Kaisa Grass Basket Bowls', query: 'Kaisa' },
        { label: 'Woven Rattan Fruit Baskets', query: 'Rattan' },
        { label: 'Cotton Rope Laundry Hampers', query: 'Rope' },
      ]
    },
    {
      id: 'planters',
      title: 'Planters & Plant Pot Covers',
      count: `${getCount('planters')} products`,
      icon: Leaf,
      subItems: [
        { label: 'Seagrass Plant Pot Covers', query: 'Seagrass' },
        { label: 'Jute & Seagrass Floor Planters', query: 'Floor Planters' },
        { label: 'Hanging Macrame Planters', query: 'Hanging' },
        { label: 'Water Hyacinth Round Planters', query: 'Round Planters' },
        { label: 'Braided Jute Rope Planters', query: 'Jute Rope Planters' },
      ]
    },
    {
      id: 'bags',
      title: 'Eco Jute Bags & Packaging',
      count: `${getCount('bags')} products`,
      icon: ShoppingBag,
      subItems: [
        { label: 'Natural Jute Shopping Bags', query: 'Shopping Bag' },
        { label: 'Handcrafted Eco Tote Bags', query: 'Tote' },
        { label: 'Promotional Event Bags', query: 'Promotional' },
        { label: 'Single & Double Wine Carry Bags', query: 'Wine' },
        { label: 'Corporate Printed Gift Bags', query: 'Corporate' },
      ]
    },
    {
      id: 'decor',
      title: 'Home Decor, Placemats & Rugs',
      count: `${getCount('decor')} products`,
      icon: Sparkles,
      subItems: [
        { label: 'Circular Jute Table Placemats', query: 'Table Mat' },
        { label: 'Jute & Rattan Placement Sets', query: 'Placement Set' },
        { label: 'Hand-Braided Round Floor Rugs', query: 'Floor Mat' },
        { label: 'Macrame Plant Hangers', query: 'Macrame' },
        { label: 'Jute & Cotton Wall Decor', query: 'Wall Decor' },
      ]
    },
    {
      id: 'bamboo',
      title: 'Bamboo & Utility Crafts',
      count: `${getCount('bamboo')} products`,
      icon: Layers,
      subItems: [
        { label: 'Bamboo Utility Crafts', query: 'Bamboo' },
        { label: 'Handcrafted Storage Baskets', query: 'Bamboo' },
        { label: 'Decorative Bamboo Trays', query: 'Bamboo' },
        { label: 'Custom Bamboo Accessories', query: 'Bamboo' },
      ]
    }
  ];

  const handleCategoryClick = (catId: string, query?: string) => {
    onSelectCategory(catId, query);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-amber-50/40 border-b border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Explore Collections</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-stone-900 uppercase">
            PRODUCT CATEGORIES
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            Browse our complete export range — hover over any category to reveal products.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* 2-Column Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-stone-200/80 hover:border-amber-500 hover:ring-2 hover:ring-amber-500/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Main Card Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-900 text-white group-hover:bg-amber-600 group-hover:scale-105 transition-all duration-300 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-stone-500 font-medium">
                      {cat.count}
                    </p>
                  </div>
                </div>

                {/* Hover Revealing Sub-Products Grid */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-transparent group-hover:border-amber-100 group-hover:mt-4 group-hover:pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.subItems.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(cat.id, sub.query);
                        }}
                        className="group/item flex items-center justify-between rounded-xl bg-stone-100/70 hover:bg-amber-100/80 px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-amber-900 transition-colors text-left border border-transparent hover:border-amber-300"
                      >
                        <span className="truncate flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                          {sub.label}
                        </span>
                        <ArrowRight className="h-3 w-3 shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-amber-700" />
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
