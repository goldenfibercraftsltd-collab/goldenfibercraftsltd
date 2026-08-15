import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { getAllActiveProducts } from '../utils/productStore';
import { Search, ArrowRight, X, ChevronRight, MessageSquare, Filter } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlCategory = searchParams.get('category') || 'all';
  const urlSubCategory = searchParams.get('subCategory') || '';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(urlSubCategory);
  const [searchQuery, setSearchQuery] = useState<string>(urlSearch);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedSubCategory(searchParams.get('subCategory') || '');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const allProducts = useMemo(() => getAllActiveProducts(), []);

  const currentCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return CATEGORIES.find(c => c.id === selectedCategory || c.slug === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubCategory('');
    const newParams: Record<string, string> = {};
    if (catId !== 'all') newParams.category = catId;
    if (searchQuery.trim()) newParams.search = searchQuery.trim();
    setSearchParams(newParams);
  };

  const handleSubCategoryChange = (subId: string) => {
    setSelectedSubCategory(subId);
    const newParams: Record<string, string> = {};
    if (selectedCategory !== 'all') newParams.category = selectedCategory;
    if (subId) newParams.subCategory = subId;
    if (searchQuery.trim()) newParams.search = searchQuery.trim();
    setSearchParams(newParams);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    const newParams: Record<string, string> = {};
    if (selectedCategory !== 'all') newParams.category = selectedCategory;
    if (selectedSubCategory) newParams.subCategory = selectedSubCategory;
    if (val.trim()) newParams.search = val.trim();
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('');
    setSearchQuery('');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // 1. Category Match
      const matchesCategory =
        selectedCategory === 'all' ||
        p.category === selectedCategory ||
        p.categorySlug === selectedCategory ||
        p.category.toLowerCase() === selectedCategory.toLowerCase();

      // 2. SubCategory Match
      const matchesSubCategory =
        !selectedSubCategory ||
        p.subCategory === selectedSubCategory ||
        (p.subCategory && p.subCategory.toLowerCase() === selectedSubCategory.toLowerCase()) ||
        p.slug.includes(selectedSubCategory.toLowerCase()) ||
        p.name.toLowerCase().includes(selectedSubCategory.toLowerCase());

      // 3. Search Query Match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.material && p.material.toLowerCase().includes(q));

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 font-sans animate-fadeIn">
      
      {/* 1. Breadcrumbs Header with reveal-up */}
      <div className="bg-white border-b border-stone-200 reveal-up">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-stone-900 font-bold">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#65a30d] font-bold text-stone-800">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-stone-600 font-bold" />
            <Link to="/products" onClick={clearFilters} className="hover:text-[#65a30d] text-stone-800">Products</Link>
            {currentCategoryObj && (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-stone-600 font-bold" />
                <span className="text-black font-extrabold">{currentCategoryObj.name}</span>
              </>
            )}
            {selectedSubCategory && (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-stone-600 font-bold" />
                <span className="text-emerald-900 font-extrabold uppercase">{selectedSubCategory}</span>
              </>
            )}
          </div>
          <span className="text-xs text-stone-900 font-bold hidden sm:inline">
            Showing {filteredProducts.length} export products
          </span>
        </div>
      </div>

      {/* 2. Main Filter Control Header with reveal-up */}
      <div className="bg-white border-b border-stone-200 shadow-xs reveal-up">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                {currentCategoryObj ? currentCategoryObj.name : 'All Export Products'}
              </h1>
              <p className="text-xs sm:text-sm text-stone-900 font-medium mt-0.5">
                {currentCategoryObj?.description || 'Browse our complete catalog of 100% natural, eco-friendly handicraft items.'}
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-700" />
              <input
                type="text"
                placeholder="Search Item Code or Name (e.g. GFC-SB-030)..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-9 py-2 text-xs rounded-xl border border-stone-400 bg-white text-black font-medium focus:outline-hidden focus:border-[#65a30d] focus:ring-2 focus:ring-[#65a30d]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    const newParams: Record<string, string> = {};
                    if (selectedCategory !== 'all') newParams.category = selectedCategory;
                    if (selectedSubCategory) newParams.subCategory = selectedSubCategory;
                    setSearchParams(newParams);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 hover:text-black"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Only shown when viewing 'All Categories') */}
          {selectedCategory === 'all' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
              <button
                onClick={() => handleCategoryChange('all')}
                className="px-3.5 py-1.5 rounded-lg text-xs font-black whitespace-nowrap transition-all bg-[#65a30d] text-white shadow-xs btn-interactive"
              >
                All Categories ({allProducts.length})
              </button>
              {CATEGORIES.map((cat) => {
                const count = allProducts.filter(p => p.category === cat.id || p.categorySlug === cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all bg-stone-100 text-stone-950 hover:bg-stone-200 border border-stone-300 hover-lift-sm"
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* SubCategory Filter Pills (If category has subcategories) */}
          {currentCategoryObj && currentCategoryObj.subcategories && currentCategoryObj.subcategories.length > 0 && (
            <div className="pt-1 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-black text-black uppercase tracking-wider mr-1">Subcategory:</span>
              <button
                onClick={() => handleSubCategoryChange('')}
                className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                  !selectedSubCategory
                    ? 'bg-[#093843] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-950 hover:bg-stone-200 border border-stone-300'
                }`}
              >
                All {currentCategoryObj.name}
              </button>
              {currentCategoryObj.subcategories.map((sub) => {
                const isSubActive = selectedSubCategory === sub.id || selectedSubCategory === sub.slug;
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSubCategoryChange(sub.id)}
                    className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                      isSubActive
                        ? 'bg-[#093843] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-950 hover:bg-stone-200 border border-stone-300'
                    }`}
                  >
                    {sub.name}
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* 3. Products Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Results Counter & Clear Filter */}
        <div className="flex items-center justify-between mb-4 text-xs text-stone-950 font-bold">
          <div>
            Showing <span className="font-black text-black">{filteredProducts.length}</span> products
            {(selectedCategory !== 'all' || selectedSubCategory || searchQuery) && (
              <span className="ml-2 text-stone-700 font-bold">
                (Filtered)
              </span>
            )}
          </div>
          {(selectedCategory !== 'all' || selectedSubCategory || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs font-black text-red-600 hover:underline flex items-center gap-1"
            >
              <X className="h-3.5 w-3.5" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid with Middle-Outward Card Slide */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => {
              const col = idx % 4;
              const slideAnim = 
                col === 0 ? 'card-slide-far-left stagger-3' :
                col === 1 ? 'card-slide-left stagger-1' :
                col === 2 ? 'card-slide-right stagger-1' :
                'card-slide-far-right stagger-3';

              return (
                <div
                  key={product.id}
                  className={`${slideAnim} hover-lift group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-xs border border-stone-200 hover:shadow-xl hover:border-[#65a30d] transition-all duration-300`}
                >
                  <div>
                    {/* Photo Container */}
                    <div
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center p-3 cursor-pointer border border-stone-100 img-zoom-container"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Item Code Badge */}
                      <span className="absolute top-2.5 right-2.5 bg-[#093843] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                        {product.code || product.id}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="mt-3.5 space-y-1">
                      <span className="text-[10px] font-black text-[#65a30d] uppercase tracking-wider">
                        {product.categoryName || product.category}
                      </span>
                      <h3
                        onClick={() => navigate(`/products/${product.slug}`)}
                        className="font-serif text-sm font-extrabold text-black group-hover:text-[#65a30d] transition-colors line-clamp-2 cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-900 font-medium line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: View Details + Request RFQ */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="text-xs font-bold text-stone-700 hover:text-[#65a30d] flex items-center gap-1 transition-colors btn-interactive"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-3.5 w-3.5 btn-arrow" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(product.code || product.id)}
                      className="flex items-center gap-1 rounded-lg bg-[#0088FF] hover:bg-[#0077ee] text-white px-2.5 py-1.5 text-[11px] font-bold shadow-xs hover:shadow-md transition-all active:scale-95 btn-interactive"
                    >
                      <MessageSquare className="h-3 w-3" />
                      <span>Quote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-4 reveal-scale">
            <div className="h-14 w-14 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <Filter className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-base font-extrabold text-black">
                No products found
              </h3>
              <p className="text-xs text-stone-900 font-medium mt-1">
                No items match your current filter or search criteria.
              </p>
            </div>
            <button
              onClick={clearFilters}
              className="inline-block rounded-xl bg-[#65a30d] text-white px-5 py-2 text-xs font-bold hover:bg-[#4d7c0f] transition-colors shadow-xs btn-interactive"
            >
              Show All Products
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
