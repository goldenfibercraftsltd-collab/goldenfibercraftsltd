import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { Product } from '../types/product';

interface CategoryFilterProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  products,
  onSelectProduct,
  selectedCategory: externalCategory,
  onCategoryChange,
  searchQuery: externalQuery,
  onSearchChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [internalQuery, setInternalQuery] = useState<string>('');

  const selectedCategory = externalCategory !== undefined ? externalCategory : internalCategory;
  const searchQuery = externalQuery !== undefined ? externalQuery : internalQuery;

  const handleCategorySelect = (catId: string) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const handleSearchSelect = (query: string) => {
    if (onSearchChange) {
      onSearchChange(query);
    } else {
      setInternalQuery(query);
    }
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'baskets', label: 'Baskets & Storage' },
    { id: 'planters', label: 'Planters & Pots' },
    { id: 'bags', label: 'Jute Bags' },
    { id: 'decor', label: 'Home Decor & Mats' },
    { id: 'bamboo', label: 'Bamboo Crafts' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.itemCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.materials.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-amber-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Catalog</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-stone-900 uppercase">
            PRODUCT COLLECTION
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Browse our full export collection extracted from GFCL Product Portfolio.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-800 text-white shadow-md shadow-amber-900/30'
                    : 'bg-white text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-amber-900/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search product code or name..."
              value={searchQuery}
              onChange={(e) => handleSearchSelect(e.target.value)}
              className="w-full rounded-full border border-amber-900/15 bg-white py-2 pl-10 pr-4 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-sm"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-amber-950/80 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-md">
                    {product.itemCode}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                    {product.categoryLabel}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-stone-600 border-t border-amber-900/5 pt-3">
                    <p><span className="font-semibold text-stone-800">Specs:</span> {product.specification}</p>
                    <p><span className="font-semibold text-stone-800">Materials:</span> {product.materials}</p>
                    <p><span className="font-semibold text-stone-800">MOQ:</span> {product.moq}</p>
                  </div>
                </div>
              </div>

              {/* View Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-amber-800/30 bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-900 hover:bg-amber-800 hover:text-white transition-colors duration-300"
                >
                  View Product Specs
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-2xl bg-white border border-dashed border-amber-900/20">
            <Filter className="mx-auto h-8 w-8 text-amber-400" />
            <h3 className="mt-2 font-serif text-lg font-bold text-stone-800">No products found</h3>
            <p className="mt-1 text-sm text-stone-500">Try adjusting your search query or filter category.</p>
          </div>
        )}

      </div>
    </section>
  );
};
