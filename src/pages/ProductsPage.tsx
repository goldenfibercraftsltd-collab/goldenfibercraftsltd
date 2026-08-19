import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight, 
  MessageSquare, 
  ArrowRight, 
  X, 
  Sparkles, 
  Package, 
  Layers
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, ProductItem } from '../data/products';
import { getAllActiveProducts } from '../utils/productStore';

const CATEGORY_BANNER_IMAGES: Record<string, string> = {
  'jute': '/products/gfc_jfm_001.jpg',
  'seagrass': '/products/gfc_sfm_001.jpg',
  'kans-grass': '/products/gfc_kpm_001.jpg',
  'date-leaf': '/materials/orig_date-1.jpg',
  'rattan': '/materials/orig_rattan-1.jpg',
  'bamboo': '/materials/orig_BWH-02.jpg',
  'palm-fiber': '/materials/orig_palm-1.jpg',
  'water-hyacinth': '/materials/orig_water-hyacinth-1.jpg',
  'rugs': '/infrastructure/jute_rugs.png',
  'recycle-fabric': '/products/gfc_bp_007.png',
  'all': '/products/gfc_jfm_001.jpg',
};

interface ProductsPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL state synchronization
  const categoryParam = searchParams.get('category') || 'all';
  const subCategoryParam = searchParams.get('subCategory') || '';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(subCategoryParam);
  const [searchQuery, setSearchQuery] = useState<string>(searchParam);
  const [allProducts, setAllProducts] = useState<ProductItem[]>(PRODUCTS);

  useEffect(() => {
    const loaded = getAllActiveProducts();
    if (loaded && loaded.length > 0) {
      setAllProducts(loaded);
    }
  }, []);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedSubCategory(searchParams.get('subCategory') || '');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const currentCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return CATEGORIES.find(c => c.id === selectedCategory || c.slug === selectedCategory) || null;
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

  // Determine active category banner image
  const activeBannerImage = 
    CATEGORY_BANNER_IMAGES[selectedCategory] ||
    CATEGORY_BANNER_IMAGES[currentCategoryObj?.id || ''] ||
    filteredProducts[0]?.image ||
    '/products/gfc_jfm_001.jpg';

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-12 font-sans text-stone-900">
      
      {/* 1. Premium Compact Hero Banner with Dynamic Category Craft Image */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] text-white">
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-3.5 sm:py-4.5 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-emerald-200/90 text-xs font-medium mb-1">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <button onClick={clearFilters} className="hover:text-white transition-colors">Products</button>
            {currentCategoryObj && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-white font-bold">{currentCategoryObj.name}</span>
              </>
            )}
            {selectedSubCategory && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-amber-300 font-bold uppercase">{selectedSubCategory}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Package className="h-4 w-4 text-emerald-300" />
                </span>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-black text-white tracking-tight">
                  {currentCategoryObj ? currentCategoryObj.name : 'Export Product Catalog'}
                </h1>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                {currentCategoryObj?.description || 'Explore our complete international export collection of certified eco-friendly natural fiber handicrafts.'}
              </p>
            </div>

            {/* Right: Real Category Craft Product Photo Showcase */}
            <div className="flex items-center justify-center shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2.5 rounded-2xl bg-amber-400/20 blur-md group-hover:bg-amber-400/35 transition-all duration-300"></div>
                <div className="relative h-16 w-20 sm:h-20 sm:w-24 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 p-1.5 shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <img
                    src={activeBannerImage}
                    alt="Category Craft Preview"
                    className="h-full w-full object-contain filter drop-shadow-sm rounded-lg"
                  />
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-md bg-emerald-950 text-[8px] sm:text-[9px] font-black text-amber-300 shadow-sm border border-white/20 uppercase tracking-widest">
                    {currentCategoryObj ? currentCategoryObj.name : '100% ECO'}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Category Background Watermark */}
        <div className="absolute -right-6 -bottom-6 opacity-15 pointer-events-none">
          <img
            src={activeBannerImage}
            alt="Category Background"
            className="h-40 w-40 lg:h-48 lg:w-48 object-cover rounded-full filter blur-xs"
          />
        </div>
      </div>

      {/* 2. Category & Subcategory Navigation Bar + Integrated Search */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8 space-y-2">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Main Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none flex-1">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900 border border-stone-200/80'
                }`}
              >
                All Categories ({allProducts.length})
              </button>
              {CATEGORIES.map((cat) => {
                const count = allProducts.filter(p => p.category === cat.id || p.categorySlug === cat.slug).length;
                const isActive = selectedCategory === cat.id || selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-800 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900 border border-stone-200/80'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Compact Search Input */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
              <input
                type="text"
                placeholder="Search Item or Code..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-8 pr-7 py-1.5 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white text-stone-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-600/30 transition-all"
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
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Subcategory Pills (When Category is Selected) */}
          {currentCategoryObj && currentCategoryObj.subcategories && currentCategoryObj.subcategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-stone-100 animate-fadeIn">
              <span className="text-[11px] font-black text-stone-500 uppercase tracking-widest mr-1 flex items-center gap-1">
                <Layers className="h-3 w-3" /> Subcategory:
              </span>
              <button
                onClick={() => handleSubCategoryChange('')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  !selectedSubCategory
                    ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                All {currentCategoryObj.name}
              </button>
              {currentCategoryObj.subcategories.map((sub) => {
                const isSubActive = selectedSubCategory === sub.id || selectedSubCategory === sub.slug;
                const subCount = allProducts.filter(p => 
                  (p.category === currentCategoryObj.id || p.categorySlug === currentCategoryObj.slug) && 
                  (p.subCategory === sub.id || p.subCategory === sub.slug)
                ).length;

                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSubCategoryChange(sub.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSubActive
                        ? 'bg-amber-500 text-stone-950 font-black shadow-xs ring-2 ring-amber-400/40'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    {sub.name} {subCount > 0 && `(${subCount})`}
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* 3. Products Grid Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        
        {/* Results Bar */}
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-stone-200/80">
          <div className="text-xs sm:text-sm font-bold text-stone-700">
            Showing <span className="font-black text-stone-950">{filteredProducts.length}</span> export products
            {(selectedCategory !== 'all' || selectedSubCategory || searchQuery) && (
              <span className="ml-2 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-extrabold text-xs border border-emerald-200">
                Filtered
              </span>
            )}
          </div>

          {(selectedCategory !== 'all' || selectedSubCategory || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs font-black text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <X className="h-3.5 w-3.5" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm border border-stone-200/80 hover:shadow-xl hover:border-emerald-500/60 transition-all duration-300"
                >
                  <div>
                    {/* Photo Container */}
                    <div
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center p-3 cursor-pointer border border-stone-100 img-zoom-container group-hover:bg-amber-50/20 transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Item Code Badge */}
                      <span className="absolute top-2.5 right-2.5 bg-gradient-to-r from-emerald-900 to-stone-900 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg shadow-md border border-white/10">
                        {product.code || product.id}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="mt-3.5 space-y-1">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 text-[10px] font-black text-emerald-800 uppercase tracking-wider border border-emerald-100">
                        {product.categoryName || product.category}
                      </span>
                      <h3
                        onClick={() => navigate(`/products/${product.slug}`)}
                        className="font-serif text-sm font-black text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-1 cursor-pointer pt-0.5"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-600 font-medium line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Details Link + Request Quote Button */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => navigate(`/products/${product.slug}`)}
                      className="text-xs font-extrabold text-stone-700 hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer group/btn"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(product.code || product.id)}
                      className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0088FF] to-[#0070df] hover:from-[#0070df] hover:to-[#0058b8] text-white px-3.5 py-2 text-xs font-black shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Quote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search/Filter State */
          <div className="text-center py-24 bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
            <div className="h-16 w-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-800">No products found</h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
              We couldn't find matching export items. Try clearing your search or switching categories.
            </p>
            <button
              onClick={clearFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-black shadow-md transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
