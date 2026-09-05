import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { getAllActiveProducts, getAllActiveCategories, fetchLiveProducts } from '../utils/productStore';
import { Package, Leaf, ShoppingBag, Sparkles, Trees, ArrowRight, Home } from 'lucide-react';
import { usePageTitle } from '../utils/usePageTitle';

interface CategoryPageProps {
  onOpenQuoteModal: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onOpenQuoteModal }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  const [allCategories, setAllCategories] = useState(() => getAllActiveCategories());
  const [allProducts, setAllProducts] = useState(() => getAllActiveProducts());

  useEffect(() => {
    fetchLiveProducts().then(list => {
      if (list && list.length > 0) setAllProducts(list);
    });

    const handleProductUpdate = () => {
      setAllProducts(getAllActiveProducts());
    };
    const handleCategoryUpdate = () => {
      setAllCategories(getAllActiveCategories());
    };

    window.addEventListener('gfcl_products_updated', handleProductUpdate);
    window.addEventListener('gfcl_categories_updated', handleCategoryUpdate);
    return () => {
      window.removeEventListener('gfcl_products_updated', handleProductUpdate);
      window.removeEventListener('gfcl_categories_updated', handleCategoryUpdate);
    };
  }, []);

  // Find category by slug or ID with fallback
  const category = useMemo(() => {
    if (!categorySlug) return allCategories[0] || CATEGORIES[0];
    const cleanSlug = categorySlug.toLowerCase().trim();
    return (
      allCategories.find((c) => c.slug === categorySlug || c.id === categorySlug || c.slug.toLowerCase() === cleanSlug) ||
      CATEGORIES.find((c) => c.slug === categorySlug || c.id === categorySlug || c.slug.toLowerCase() === cleanSlug) ||
      allCategories[0] ||
      CATEGORIES[0]
    );
  }, [allCategories, categorySlug]);

  const categoryProducts = useMemo(() => {
    return allProducts.filter((p) => 
      p.categorySlug === category.slug || 
      p.category === category.id ||
      p.category === category.slug ||
      p.categorySlug === category.id
    );
  }, [allProducts, category]);

  usePageTitle(category?.name || 'Category');

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

  const IconComponent = getCategoryIcon(category.iconName || 'Package');

  return (
    <div className="bg-stone-50 min-h-screen py-8 font-sans animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb with reveal-up */}
        <nav className="reveal-up flex items-center gap-2 text-xs font-bold text-stone-800">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 text-stone-800">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-700 text-stone-800">Products</Link>
          <span>/</span>
          <span className="text-black font-extrabold">{category.name}</span>
        </nav>

        {/* Category Header Hero with reveal-up */}
        <div className="reveal-up bg-white rounded-3xl p-8 sm:p-12 shadow-xs border border-stone-200/80 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center shadow-xs shrink-0">
              <IconComponent className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-stone-900 mt-1 font-medium max-w-2xl">
                {category.description}
              </p>
              <span className="inline-block mt-2 text-xs font-black text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300">
                {categoryProducts.length} Products Available
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid - 2 per row on mobile, 5 per row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 animate-fadeIn">
          {categoryProducts.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
                className="hover-lift group cursor-pointer flex flex-col justify-between rounded-2xl bg-white p-2.5 sm:p-4 shadow-sm border border-stone-200 hover:shadow-xl hover:border-emerald-500 transition-all duration-300 animate-fadeIn"
              >
                <div>
                  {/* Product Photo Container - Edge to Edge Auto Fit */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-100 cursor-pointer border border-stone-200/60 img-zoom-container">
                    <img
                      src={product.image}
                      alt={`${product.name} (${product.code || product.id}) - Handcrafted ${product.material || 'Natural Jute'} by Golden Fiber Crafts Ltd.`}
                      title={`${product.name} (${product.code || product.id}) - Handcrafted ${product.material || 'Natural Jute'} by Golden Fiber Crafts Ltd.`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />
                    <span className="absolute top-2 right-2 bg-stone-900/90 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md backdrop-blur-md">
                      {product.code || product.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 sm:mt-4 font-serif text-xs sm:text-sm font-extrabold text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-stone-600 font-medium line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>View details</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Request Custom Quote Banner with reveal-scale */}
        <div className="reveal-scale bg-gradient-to-r from-emerald-900 to-stone-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-amber-300">Need Custom Dimensions or OEM Private Labeling?</h3>
            <p className="text-stone-100 text-xs sm:text-sm font-medium">We manufacture custom sizes, colors, and branding tags according to buyer specifications.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-stone-950 px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 btn-interactive"
          >
            <span>Request Instant Quote</span>
          </button>
        </div>

      </div>
    </div>
  );
};
