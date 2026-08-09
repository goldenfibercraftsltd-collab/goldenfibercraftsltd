import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCategories } from '../components/ProductCategories';
import { CategoryFilter } from '../components/CategoryFilter';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { Tag, Sparkles, Search, Filter } from 'lucide-react';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSearchParams(prev => {
      if (catId === 'all') prev.delete('category');
      else prev.set('category', catId);
      return prev;
    });
  };

  return (
    <div className="bg-amber-50/20 py-10 space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              Complete Catalog & Solutions
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              All Products & Garment Trims
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Explore our full collection of custom garment labels, hangtags, twill tapes, security tags, and eco-friendly jute & seagrass handicrafts.
            </p>
          </div>
        </div>

        {/* 1. Categorized Visual Grid (Matching Trims Art Layout) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Tag className="h-6 w-6 text-emerald-600" />
              Product Categories Overview
            </h2>
            <p className="text-xs text-stone-500 hidden sm:block">Hover over a category to reveal its products</p>
          </div>
          
          <ProductCategories
            products={PRODUCTS}
            onSelectCategory={(catId) => handleCategoryChange(catId)}
          />
        </div>

        {/* 2. Interactive Product Catalog Filter & Search */}
        <div id="catalog-section" className="pt-6">
          <CategoryFilter
            products={PRODUCTS}
            onSelectProduct={onSelectProduct}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

      </div>
    </div>
  );
};
