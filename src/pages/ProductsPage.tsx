import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Search, ArrowRight, Package, Leaf, ShoppingBag, Sparkles, Trees } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package': return Package;
      case 'Leaf': return Leaf;
      case 'ShoppingBag': return ShoppingBag;
      case 'Sparkles': return Sparkles;
      case 'Trees': return Trees;
      default: return Package;
    }
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory || p.categorySlug === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen py-10 font-sans space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700">
              Golden Fiber Crafts Ltd. Catalog
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Authentic Product Catalog
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Explore our range of eco-friendly jute, seagrass, water hyacinth, and bamboo crafts engineered for global export markets.
            </p>
          </div>
        </div>

        {/* Categories Cards Overview (5 PPT Categories) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-stone-900">
              Browse by Product Category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => {
              const IconComponent = getCategoryIcon(cat.iconName);
              const count = PRODUCTS.filter((p) => p.category === cat.id).length;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate(`/categories/${cat.slug}`)}
                  className="group cursor-pointer rounded-2xl bg-white p-5 shadow-xs border border-stone-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-stone-500">
                    <span>{count} Items</span>
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search code or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
            />
            <Search className="h-4 w-4 text-stone-400 absolute left-3 top-2.5" />
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.slug}`)}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm border border-stone-200 hover:shadow-xl hover:border-emerald-500 transition-all duration-300"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden rounded-xl bg-stone-100 flex items-center justify-center p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {product.id}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-1 text-[11px] text-stone-500 font-light line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>View details</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
