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
    // 1. Instant load from local active store
    const loaded = getAllActiveProducts();
    if (loaded && loaded.length > 0) {
      setAllProducts(loaded);
    }

    // 2. Fetch fresh real-time list from Cloudflare D1 database
    fetch('/api/products?active_only=true')
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.products) && data.products.length > 0) {
          const dbProducts = data.products.map((p: any) => {
            const catMatch = CATEGORIES.find(c => String(c.id) === String(p.category_id) || c.slug === String(p.category_id));
            const catId = catMatch ? catMatch.id : (p.category_id || 'jute');
            const catSlug = catMatch ? catMatch.slug : 'jute';
            const catName = catMatch ? catMatch.name : (p.category_name || 'Jute');

            return {
              id: String(p.item_code || p.id),
              slug: String(p.item_code || p.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              code: String(p.item_code || p.id),
              name: String(p.name || ''),
              category: catId,
              categoryName: catName,
              categorySlug: catSlug,
              subCategory: String(p.sub_category || p.subCategory || 'baskets'),
              image: p.image_url || p.image || '/favicon.svg',
              galleryImages: typeof p.gallery_images === 'string' ? JSON.parse(p.gallery_images || '[]') : (p.gallery_images || []),
              description: p.description || '',
              longDescription: {
                overview: p.description || '',
                craftsmanship: 'Handcrafted by skilled traditional artisans in Bangladesh using sustainable natural fibers.',
                exportDetails: 'Quality controlled, fumigated, and packed in 5-ply export master cartons.',
                careInstructions: 'Keep in dry indoor area. Clean with soft damp cloth.',
              },
              specifications: [
                { key: 'Materials', value: p.material || 'Natural Fiber' },
                { key: 'Specification', value: p.size || 'Custom Size' },
                { key: 'MOQ', value: p.moq || '200 Sets' },
              ],
              features: ['100% Eco-Friendly', 'Artisanal Handcraft', 'Export Standard'],
              unit: p.unit || 'S/3',
              setPerCarton: p.set_per_carton || 4,
              cbmPerCarton: p.cbm_per_carton || 0.058,
              nwPerCtn: p.nw_per_ctn || 4.2,
              gwPerCtn: p.gw_per_ctn || 5.5,
              material: p.material || '100% Natural Jute',
              color: p.color || 'Natural',
            };
          });

          const mergedMap = new Map();
          getAllActiveProducts().forEach((p: any) => mergedMap.set(p.id, p));
          dbProducts.forEach((p: any) => mergedMap.set(p.id, p));
          setAllProducts(Array.from(mergedMap.values()));
        }
      })
      .catch(() => {});
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
    const selCat = String(selectedCategory || 'all').toLowerCase().trim();
    const selSub = String(selectedSubCategory || '').toLowerCase().trim();
    const q = String(searchQuery || '').toLowerCase().trim();

    return allProducts.filter((p) => {
      const pCat = String(p.category || '').toLowerCase();
      const pCatSlug = String(p.categorySlug || '').toLowerCase();
      const pCatName = String(p.categoryName || '').toLowerCase();

      // 1. Category Match
      const matchesCategory =
        selCat === 'all' ||
        pCat === selCat ||
        pCatSlug === selCat ||
        pCatName === selCat ||
        (currentCategoryObj && (
          pCat === String(currentCategoryObj.id).toLowerCase() ||
          pCatSlug === String(currentCategoryObj.slug).toLowerCase()
        ));

      // 2. SubCategory Match
      const pSub = String(p.subCategory || '').toLowerCase();
      const pSlug = String(p.slug || '').toLowerCase();
      const pName = String(p.name || '').toLowerCase();

      const matchesSubCategory =
        !selSub ||
        pSub === selSub ||
        pSub.includes(selSub) ||
        selSub.includes(pSub) ||
        pSlug.includes(selSub) ||
        pName.includes(selSub);

      // 3. Search Match
      const matchesSearch =
        !q ||
        pName.includes(q) ||
        String(p.id || '').toLowerCase().includes(q) ||
        String(p.code || '').toLowerCase().includes(q) ||
        String(p.description || '').toLowerCase().includes(q) ||
        String(p.material || '').toLowerCase().includes(q);

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, selectedSubCategory, searchQuery, currentCategoryObj]);

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
              <div className="flex items-center gap-2 mb-1">
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
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img
            src="/logo-icon.png"
            alt="Golden Fiber Crafts Ltd."
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md"
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

        {/* Product Cards Grid - 5 Cards Per Row on Desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
