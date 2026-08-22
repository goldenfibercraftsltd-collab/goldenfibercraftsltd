import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { getAllActiveCategories } from '../utils/productStore';
import { ArrowRight, Package, Leaf, ShoppingBag, Sparkles, Trees } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

interface ProductCategoriesProps {
  products?: any[];
  onSelectCategory?: (catId: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any[]>(() => getAllActiveCategories());

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.categories) && data.categories.length > 0) {
          setCategories(data.categories);
        } else {
          setCategories(getAllActiveCategories());
        }
      })
      .catch(() => {
        setCategories(getAllActiveCategories());
      });
  }, []);

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

  const getCardSlideClass = (idx: number) => {
    const col = idx % 4;
    if (col === 0) return 'card-slide-far-left stagger-3';
    if (col === 1) return 'card-slide-left stagger-1';
    if (col === 2) return 'card-slide-right stagger-1';
    return 'card-slide-far-right stagger-3';
  };

  return (
    <section className="py-12 bg-white font-sans border-y border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-900">
            OUR PPT PRODUCT CATEGORIES
          </span>
          <ScrollTypingText
            as="h2"
            text="Explore Golden Fiber Crafts"
            className="font-serif text-3xl sm:text-4xl font-extrabold text-black"
            speed={35}
          />
          <p className="text-stone-900 text-xs sm:text-sm font-medium">
            Crafted from 100% natural Bangladesh jute, seagrass, water hyacinth, Kaisa grass, and bamboo.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
        </div>

        {/* 5-Column Grid with Middle-Outward Card Slide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {categories.map((cat, idx) => {
            const IconComponent = getCategoryIcon(cat.iconName || cat.icon);
            const slideAnim = getCardSlideClass(idx);

            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/products?category=${cat.id}`)}
                className={`${slideAnim} hover-lift group cursor-pointer rounded-2xl bg-stone-50 p-6 border border-stone-200/80 hover:bg-white hover:border-[#166534] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-100/80 text-emerald-950 flex items-center justify-center group-hover:bg-[#166534] group-hover:text-white transition-colors shadow-xs">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-extrabold text-black group-hover:text-[#166534] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-900 font-medium line-clamp-2">
                      {cat.description}
                    </p>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {cat.subcategories.slice(0, 3).map((s: any) => (
                          <span key={s.id} className="text-[10px] bg-stone-200 text-stone-950 font-bold px-2 py-0.5 rounded">
                            {s.name}
                          </span>
                        ))}
                        {cat.subcategories.length > 3 && (
                          <span className="text-[10px] text-stone-800 font-extrabold">
                            +{cat.subcategories.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-[#166534]">
                  <span>Explore Category</span>
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
