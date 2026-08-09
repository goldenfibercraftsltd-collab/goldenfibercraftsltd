import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ArrowRight, Package, Leaf, ShoppingBag, Sparkles, Trees } from 'lucide-react';

interface ProductCategoriesProps {
  products?: any[];
  onSelectCategory?: (catId: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = () => {
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

  return (
    <section className="py-12 bg-white font-sans border-y border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            OUR PPT PRODUCT CATEGORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            Explore Golden Fiber Crafts
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light">
            Crafted from 100% natural Bangladesh jute, seagrass, water hyacinth, Kaisa grass, and bamboo.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = getCategoryIcon(cat.iconName);
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;

            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/categories/${cat.slug}`)}
                className="group cursor-pointer rounded-2xl bg-stone-50 p-6 border border-stone-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 font-light line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>{count} Items</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
