import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Package, Leaf, ShoppingBag, Sparkles, Trees, ArrowRight, Home } from 'lucide-react';

interface CategoryPageProps {
  onOpenQuoteModal: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onOpenQuoteModal }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  // Find category by slug or fallback
  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug || p.category === category.id);

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

  const IconComponent = getCategoryIcon(category.iconName);

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

        {/* Product Cards Grid with Middle-Outward Card Slide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product, idx) => {
            const col = idx % 4;
            const slideAnim = 
              col === 0 ? 'card-slide-far-left stagger-3' :
              col === 1 ? 'card-slide-left stagger-1' :
              col === 2 ? 'card-slide-right stagger-1' :
              'card-slide-far-right stagger-3';

            return (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
                className={`${slideAnim} hover-lift group cursor-pointer flex flex-col justify-between rounded-2xl bg-white p-4 shadow-xs border border-stone-200 hover:shadow-xl hover:border-emerald-500 transition-all duration-300`}
              >
                <div>
                  {/* Product Photo Container */}
                  <div className="relative h-56 w-full overflow-hidden rounded-xl bg-stone-100 flex items-center justify-center p-3 img-zoom-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md">
                      {product.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-serif text-sm font-extrabold text-black group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-stone-900 font-medium line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>View details</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Request Custom Quote Banner with reveal-scale */}
        <div className="reveal-scale bg-gradient-to-r from-emerald-900 to-stone-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold">Need Custom Dimensions or OEM Private Labeling?</h3>
            <p className="text-stone-300 text-xs font-light">We manufacture custom sizes, colors, and branding tags according to buyer specifications.</p>
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
